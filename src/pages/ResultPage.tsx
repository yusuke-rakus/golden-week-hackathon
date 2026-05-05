import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Target,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

import { BrandHeader } from "@/components/BrandHeader";
import { ResultPreview } from "@/components/ResultPreview";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { strengths } from "@/data/career-diagnosis";

const actionItems = [
  {
    title: "技術選定の経験を増やす",
    body: "設計レビューや小さな技術検証を担当し、意思決定の根拠を残す。",
    icon: Target,
  },
  {
    title: "リード実績を可視化する",
    body: "チーム成果、改善率、意思決定した範囲を職務経歴にまとめる。",
    icon: TrendingUp,
  },
  {
    title: "プロダクト視点を補強する",
    body: "ユーザー課題、事業指標、優先順位づけを学習テーマにする。",
    icon: BookOpen,
  },
];

export function ResultPage() {
  return (
    <main className="diagnosis-app result-screen">
      <BrandHeader
        trailing={
          <Badge className="time-pill" variant="outline">
            結果
          </Badge>
        }
      />

      <section className="screen-heading" aria-labelledby="result-title">
        <Button type="button" variant="ghost" size="sm" asChild>
          <Link to="/">
            <ArrowLeft aria-hidden="true" />
            ホーム
          </Link>
        </Button>
        <Badge>診断結果</Badge>
        <h1 id="result-title">テックリーダータイプ</h1>
        <p>技術で課題を整理し、周囲を巻き込んで前進させる力が強い傾向です。</p>
      </section>

      <div className="result-phone-frame">
        <ResultPreview />
      </div>

      <Card className="score-card">
        <div>
          <span>総合マッチ度</span>
          <strong>85%</strong>
        </div>
        <Progress value={85} />
      </Card>

      <section className="strengths-panel" aria-labelledby="result-strengths">
        <div className="section-title">
          <span>Strengths</span>
          <h2 id="result-strengths">強みの詳細</h2>
        </div>
        <div className="strength-list">
          {strengths.map((strength) => (
            <Card className="strength-item" key={strength}>
              <Target aria-hidden="true" />
              <p>{strength}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="action-section" aria-labelledby="actions-title">
        <div className="section-title">
          <span>Next action</span>
          <h2 id="actions-title">次にやること</h2>
        </div>
        <div className="action-list">
          {actionItems.map((item) => {
            const ActionIcon = item.icon;

            return (
              <Card className="action-card" key={item.title}>
                <ActionIcon aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <div className="page-actions">
        <Button type="button" variant="outline" asChild>
          <Link to="/diagnosis">もう一度診断</Link>
        </Button>
        <Button type="button" asChild>
          <Link to="/">
            トップへ戻る
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </main>
  );
}
