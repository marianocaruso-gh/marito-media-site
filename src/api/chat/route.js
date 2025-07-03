export const config = { runtime: 'edge' };

export default async function handler(req) {
  const { messages } = await req.json();
  const resp = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',        // o el modelo que uses
      messages,
    }),
  });
  return new Response(await resp.text(), { status: resp.status });
}
