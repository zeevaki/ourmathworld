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
};

export type Grade = {
  grade: number;
  label: string;
  emoji: string;
  color: string;
  units: TeksUnit[];
};
