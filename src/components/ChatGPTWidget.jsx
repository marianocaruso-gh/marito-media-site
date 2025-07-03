// src/components/ChatGPTWidget.jsx
import { useState } from "react";

export default function ChatGPTWidget() {
  const [messages, setMessages] = useState([
    { role: "system", content: "Sos el GPT demo de Marito Media." },
  ]);
  const [input, setInput]   = useState("");
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input.trim()) return;
    const newMsgs = [...messages, { role: "user", content: input }];
    setMessages(newMsgs);
    setInput("");
    setLoading(true);

    const res  = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMsgs }),
    });
    const data = await res.json();
    setMessages([...newMsgs, data.choices[0].message]);
    setLoading(false);
  }

  return (
    <div className="fixed bottom-4 right-4 w-72 rounded-xl shadow-lg bg-white flex flex-col text-sm">
      <div className="p-3 font-bold bg-teal-600 text-white rounded-t-xl">
        GPT demo 💬
      </div>
      <div className="flex-1 p-3 overflow-y-auto space-y-2">
        {messages.slice(1).map((m, i) => (
          <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
            <span
              className={
                m.role === "user"
                  ? "inline-block bg-teal-100 px-2 py-1 rounded"
                  : ""
              }
            >
              {m.content}
            </span>
          </div>
        ))}
        {loading && <p className="text-neutral-400">…</p>}
      </div>
      <div className="p-2 border-t flex">
        <input
          className="flex-1 outline-none"
          placeholder="Preguntame algo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />
        <button onClick={send} className="text-teal-600 px-2">→</button>
      </div>
    </div>
  );
}
