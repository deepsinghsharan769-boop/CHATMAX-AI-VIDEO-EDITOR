"use client";

import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");

  return (
    <main className="min-h-screen bg-[#080b12] text-white p-6">
      <header className="flex justify-between items-center border-b border-gray-800 pb-5">
        <h1 className="text-3xl font-bold">
          CHATMAX <span className="text-blue-500">AI</span>
        </h1>
        <span className="text-green-400 text-sm">● AI EDITOR</span>
      </header>

      <section className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-5xl font-bold">
          Your Autonomous Video Editor
        </h2>

        <p className="text-gray-400 mt-5">
          Research. Create. Edit. Export.
        </p>

        <div className="mt-12 bg-[#111827] border border-gray-700 rounded-2xl p-5">
          <textarea
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Describe your documentary or video..."
            className="w-full h-32 bg-transparent outline-none resize-none text-lg"
          />

          <div className="flex justify-between items-center mt-4">
            <span className="text-gray-500 text-sm">
              CHATMAX AI AGENT
            </span>

            <button
              onClick={() => alert("AI Agent will be connected next!")}
              className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl font-semibold"
            >
              Start Creating →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
