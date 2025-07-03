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
      model: "gpt-4o-mini",
      temperature: 0.8,       // + creatividad
      max_tokens: 300,        // + longitud de respuesta
      top_p: 0.9,
      presence_penalty: 0.3,
      messages: [
        {
          role: "system",
          content:
            "Sos Robbie, el GPT demo de Marito Media. Respondes en tono amistoso y con humor argentino. Explicás brevemente los servicios de Marito Media (logos, reels, traducción médica, presentaciones) y resolvés dudas del visitante. Sé útil y conciso, pero no seas tímido: proponé ideas y ejemplos.",
        },
        ...messages,
      ],
    }),
  });

  return new Response(await resp.text(), { status: resp.status });
}

}
