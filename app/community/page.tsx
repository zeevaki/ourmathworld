import NavBar from "@/components/NavBar";

export default function CommunityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <main className="flex-1 px-6 py-10 max-w-2xl mx-auto w-full text-center">
        <div className="text-6xl mb-4">🤝</div>
        <h1 className="text-4xl font-black text-gray-800 mb-3">For Teachers</h1>
        <p className="text-gray-500 font-semibold mb-4 text-lg">
          OurMathWorld is built with teacher feedback. If you teach K–5 math — in Dallas, Pakistan, or anywhere — we want to hear from you.
        </p>
        <p className="text-gray-400 mb-10">
          What topics are missing? What would help your students most? Tell us and we&apos;ll build it.
        </p>

        <div className="bg-white rounded-3xl shadow-md p-6 mb-8">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSf_PLACEHOLDER/viewform?embedded=true"
            width="100%"
            height="600"
            style={{ border: "none" }}
            title="Teacher Feedback Form"
          >
            Loading form…
          </iframe>
          <p className="text-gray-400 text-sm mt-4">
            Replace the Google Form link above with your actual form URL.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
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
