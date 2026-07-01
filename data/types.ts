export type BilingualText = {
  en: string;
  es: string;
  ur: string;
};

export type VocabWord = {
  id: string;
  emoji: string;
  word: BilingualText;
  definition: BilingualText;
};

export type ExerciseQuestion = {
  id: string;
  type: "multiple-choice" | "true-false";
  prompt: BilingualText;
  choices: BilingualText[];
  correctIndex: number;
};

export type StoryPage = {
  emoji: string;
  text: BilingualText;
};

export type Story = {
  title: BilingualText;
  pages: StoryPage[];
};

export type FluencyProblem = {
  id: string;
  prompt: string;
  answer: number;
};

export type Fluency = {
  instructions: BilingualText;
  timeLimitSeconds: number;
  problems: FluencyProblem[];
};

export type WordProblem = {
  id: string;
  emoji: string;
  scene: string;
  prompt: BilingualText;
  answer: number;
  answerUnit: BilingualText;
};

export type TeksUnit = {
  teks: string;
  cambridge: string;
  title: BilingualText;
  emoji: string;
  vocabulary: VocabWord[];
  lesson: BilingualText;
  exercises: ExerciseQuestion[];
  quiz: ExerciseQuestion[];
  story?: Story;
  fluency?: Fluency;
  wordProblems?: WordProblem[];
};

export type Grade = {
  grade: number;
  label: string;
  emoji: string;
  color: string;
  units: TeksUnit[];
};
