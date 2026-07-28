import NavBar from "@/components/NavBar";
import Link from "next/link";
import {
  Languages, ArrowLeft, Volume2, Repeat, MessageCircle,
  PersonStanding, Users, Image as ImageIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Strategy = {
  icon: LucideIcon;
  title: string;
  tag: string;
  body: string;
};

const strategies: Strategy[] = [
  {
    icon: Volume2,
    tag: "Pre-teach",
    title: "Pre-teach vocabulary with the speaker button",
    body:
      "Before starting a lesson, switch to Spanish mode and have students click through every word in the Vocabulary tab. Hearing the English term and the Spanish term back-to-back builds the sound-to-meaning connection before they ever have to read either one.",
  },
  {
    icon: Repeat,
    tag: "Cognates",
    title: "Point out cognates explicitly",
    body:
      "Many math terms are nearly identical in English and Spanish — circle/círculo, triangle/triángulo, fraction/fracción, decimal/decimal. For Spanish-speaking students, naming the cognate out loud turns an unfamiliar English word into something they can already half-read.",
  },
  {
    icon: MessageCircle,
    tag: "Scaffold",
    title: "Give word problems a sentence frame",
    body:
      "Language demand shouldn't block math demand. Post a repeatable frame next to the Apply tab — \"There are ___ in all,\" \"How many more ___ than ___?\" — so a student who knows the math but not the phrasing can still answer in full sentences.",
  },
  {
    icon: PersonStanding,
    tag: "TPR",
    title: "Act out the action words",
    body:
      "Terms like bundle, compose, decompose, and regroup describe a physical action. Before reading the definition, hand students ten straws or counters and have them actually bundle, split, and regroup them — the word lands after the body already understands it.",
  },
  {
    icon: Users,
    tag: "Translanguaging",
    title: "Let students think in their home language first",
    body:
      "For a word problem, let a Spanish- or Urdu-speaking student read it and discuss it with a partner in their home language, then report the answer back in English math language. The app's own language toggle already supports this — reading in L1, answering in the target language isn't a shortcut, it's how bilingual comprehension actually works.",
  },
  {
    icon: ImageIcon,
    tag: "Visual anchor",
    title: "Start with the picture, not the words",
    body:
      "Every vocabulary word and word problem in the app already pairs with an emoji or illustration. Have students describe what they see before reading either language's text — the image is a third, un-translated language that every student in the room already speaks.",
  },
];

export default function EslStrategiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <main className="flex-1 px-6 py-10 max-w-2xl mx-auto w-full">
        <Link
          href="/community"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-400 hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft size={16} /> For Teachers
        </Link>

        <div className="text-center mb-10">
          <div className="bg-primary-light rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Languages size={30} className="text-primary" />
          </div>
          <h1 className="text-4xl font-black text-gray-800 mb-3">ESL Strategies</h1>
          <p className="text-gray-500 font-semibold text-lg">
            Practical ways to use OurMathWorld&apos;s bilingual features with English language learners —
            grounded in what&apos;s already built into the app, not extra prep work.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {strategies.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4 items-start"
              >
                <div className="bg-primary-light rounded-xl flex-shrink-0 flex items-center justify-center w-12 h-12">
                  <Icon size={22} className="text-primary" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wide text-primary">{s.tag}</span>
                  <h3 className="font-black text-gray-800 text-lg mt-0.5 mb-1.5">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 bg-primary-light rounded-2xl p-6 text-center">
          <p className="text-gray-500 font-semibold">Have a strategy that works in your classroom?</p>
          <Link
            href="/community"
            className="mt-3 inline-block bg-primary text-white font-bold px-6 py-3 rounded-2xl hover:bg-primary-dark transition-colors"
          >
            Share it with us →
          </Link>
        </div>
      </main>
    </div>
  );
}
