export const config = { runtime: "edge" };

export default async function handler(req) {
  // 1) leemos lo que envía el widget
  const { messages } = await req.json();

  // 2) llamamos a la API de OpenAI
  const resp = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      temperature: 0.9,      // más chispa
      max_tokens: 450,       // respuestas más largas
      top_p: 0.9,
      presence_penalty: 0.6,
      messages: [
        {
          role: "system",
          content:
            "Sos Robbie, el GPT demo de Marito Media. Respondes en tono amistoso y con humor argentino. Explicás los servicios de Marito Media (logos, reels, traducción médica, presentaciones) y das ideas concretas. Sé útil y no seas tímido.",
        },
        ...messages,
      ],
    }),
  });

  // 3) convertimos la respuesta a JSON
  const data = await resp.json();

  // 4) devolvemos JSON con header correcto
  return new Response(JSON.stringify(data), {
    status: resp.status,
    headers: { "Content-Type": "application/json" },
  });
}
