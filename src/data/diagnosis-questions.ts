export type DiagnosisAnswerPattern = "selection" | "agreement";

export type DiagnosisSelectionMode = "single" | "multiple";

export type DiagnosisAnswer = {
  label: string;
};

export type DiagnosisQuestion = {
  id: string;
  question: string;
  answerPattern: DiagnosisAnswerPattern;
  selectionMode: DiagnosisSelectionMode;
  answers: readonly [DiagnosisAnswer, ...DiagnosisAnswer[]];
};

const agreementAnswers: DiagnosisQuestion["answers"] = [
  { label: "強くそう思う" },
  { label: "そう思う" },
  { label: "どちらでもない" },
  { label: "あまりそう思わない" },
  { label: "まったくそう思わない" },
] as const;

export const diagnosisQuestions: readonly DiagnosisQuestion[] = [
  {
    id: "work-style",
    question: "仕事で一番力を発揮しやすい場面は？",
    answerPattern: "selection",
    selectionMode: "single",
    answers: [
      { label: "複雑な技術課題を設計で解く" },
      { label: "関係者を整理して前に進める" },
      { label: "ユーザー課題から企画を作る" },
    ],
  },
  {
    id: "technical-curiosity",
    question: "新しい技術やツールを自分で試すことが多い",
    answerPattern: "agreement",
    selectionMode: "single",
    answers: agreementAnswers,
  },
  {
    id: "next-growth",
    question: "次の半年で伸ばしたい力を選んでください",
    answerPattern: "selection",
    selectionMode: "multiple",
    answers: [
      { label: "技術選定やアーキテクチャ設計" },
      { label: "プロジェクト推進とチーム調整" },
      { label: "事業理解とプロダクト判断" },
      { label: "データ分析と意思決定支援" },
    ],
  },
  {
    id: "leadership",
    question: "チームの状況を見て、必要な役割を自分から取りにいける",
    answerPattern: "agreement",
    selectionMode: "single",
    answers: agreementAnswers,
  },
  {
    id: "decision-axis",
    question: "転職や異動を考えるときに最も重視したいことは？",
    answerPattern: "selection",
    selectionMode: "single",
    answers: [
      { label: "専門性をさらに深められる環境" },
      { label: "裁量を持ってチームを動かせる環境" },
      { label: "事業や顧客への影響が見えやすい環境" },
      { label: "市場価値が高まりやすいスキル領域" },
    ],
  },
] as const;
