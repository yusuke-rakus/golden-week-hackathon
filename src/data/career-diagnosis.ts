import {
  BarChart3,
  BookOpen,
  BrainCircuit,
  ClipboardCheck,
  Compass,
  LineChart,
  Search,
  type LucideIcon,
} from "lucide-react";

export type CareerMatch = {
  role: string;
  category: string;
  score: number;
};

export type Choice = {
  label: string;
  tone: "blue" | "indigo" | "cyan";
};

export type IconContent = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export const careerMatches: CareerMatch[] = [
  { role: "テックリード", category: "リードエンジニア", score: 85 },
  { role: "プロジェクトマネージャー", category: "IT", score: 78 },
  { role: "プロダクトマネージャー", category: "企画", score: 72 },
];

export const choices: Choice[] = [
  { label: "開発力を伸ばしたい", tone: "blue" },
  { label: "市場価値を知りたい", tone: "indigo" },
  { label: "次の職種を探したい", tone: "cyan" },
];

export const strengths = [
  "論理的に課題を分解できる",
  "チームを前に進める推進力がある",
  "新しい技術の吸収が速い",
];

export const flow: IconContent[] = [
  {
    title: "質問に回答",
    body: "スキル、経験、価値観に関する30問に答えるだけ。",
    icon: ClipboardCheck,
  },
  {
    title: "AIが分析",
    body: "IT職種データをもとに強みと傾向を可視化。",
    icon: BrainCircuit,
  },
  {
    title: "結果を確認",
    body: "向いている職種、必要スキル、次の行動がわかる。",
    icon: LineChart,
  },
];

export const insights: IconContent[] = [
  { title: "強み・特徴", body: "価値を出しやすい行動を整理", icon: Search },
  {
    title: "向いている職種",
    body: "相性の高い職種をランキング",
    icon: Compass,
  },
  { title: "市場価値の目安", body: "スキルの需要をスコア化", icon: BarChart3 },
  { title: "次のアクション", body: "学ぶべきスキルを提案", icon: BookOpen },
];
