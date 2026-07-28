"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { MessageSquareText, Languages, ChevronDown } from "lucide-react";

export default function CommunityPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <main className="flex-1 px-6 py-10 max-w-2xl mx-auto w-full">
        <div className="text-center mb-10">
          <div className="text-6xl mb-4">🤝</div>
          <h1 className="text-4xl font-black text-gray-800 mb-3">For Teachers</h1>
          <p className="text-gray-500 font-semibold text-lg">
            OurMathWorld is built with teacher feedback. If you teach K–5 math — in Dallas, Pakistan, or anywhere — we want to hear from you.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {/* ESL Strategies card */}
          <Link
            href="/community/esl-strategies"
            className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex items-center gap-5 hover:border-primary hover:shadow-md transition-all"
          >
            <div className="bg-primary-light rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
              <Languages size={26} className="text-primary" />
            </div>
            <div className="flex-1">
              <div className="font-black text-gray-800 text-lg">ESL Strategies</div>
              <div className="text-gray-400 text-sm">
                Practical ways to use OurMathWorld&apos;s bilingual features with English language learners
              </div>
            </div>
          </Link>

          {/* Feedback card — click to reveal the form */}
          <button
            type="button"
            onClick={() => setShowForm((s) => !s)}
            aria-expanded={showForm}
            className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex items-center gap-5 hover:border-primary hover:shadow-md transition-all text-left cursor-pointer"
          >
            <div className="bg-primary-light rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0">
              <MessageSquareText size={26} className="text-primary" />
            </div>
            <div className="flex-1">
              <div className="font-black text-gray-800 text-lg">Share Feedback</div>
              <div className="text-gray-400 text-sm">
                What&apos;s missing? What would help your students most? Tell us and we&apos;ll build it.
              </div>
            </div>
            <ChevronDown
              size={20}
              className={`text-gray-400 transition-transform flex-shrink-0 ${showForm ? "rotate-180" : ""}`}
            />
          </button>

          {showForm && (
            <div className="bg-white rounded-3xl shadow-md p-6">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScH8V8WrVcJH2JRbv1d7CzgfjxF3gXJSvOqJg0lu1C-A60esQ/viewform?embedded=true"
                width="100%"
                height="1010"
                style={{ border: "none" }}
                title="Teacher Feedback Form"
              >
                Loading…
              </iframe>
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4 text-center mt-8">
          {[
            { emoji: "🗣️", label: "Share what's missing" },
            { emoji: "🧠", label: "Suggest lesson ideas" },
            { emoji: "🌍", label: "Help translate" },
          ].map((item) => (
            <div key={item.label} className="bg-primary-light rounded-2xl p-5">
              <div className="text-3xl mb-2">{item.emoji}</div>
              <p className="font-bold text-primary text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
