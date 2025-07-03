export const config = { runtime: "edge" };

export default async function handler(req) {
  const { messages } = await req.json();

  const resp = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo-0125",   // cambia a este para evitar modelo no habilitado
      temperature: 0.9,
      max_tokens: 450,
      top_p: 0.9,
      presence_penalty: 0.6,
      messages: [
        {
          role: "system",
          content:
            "Sos Robbie, el GPT demo de Marito Media. Respondes en tono amistoso y con humor argentino. Explicás los servicios (logos, reels, traducción médica, presentaciones) y das ideas concretas.",
        },
        ...messages,
      ],
    }),
  });

  const data = await resp.json();
  return new Response(JSON.stringify(data), {
    status: resp.status,
    headers: { "Content-Type": "application/json" },
  });
}
