import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

import { BrandHeader } from "@/components/BrandHeader";
import { ResultPreview } from "@/components/ResultPreview";
import { StickyCta } from "@/components/StickyCta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { choices, flow, insights, strengths } from "@/data/career-diagnosis";

export function HomePage() {
  const selectedTone = choices[0].tone;

  return (
    <main className={`diagnosis-app ${selectedTone}`}>
      <section className="diagnosis-hero" aria-labelledby="hero-title">
        <BrandHeader />

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">IT業界に特化したAI診断</p>
            <h1 id="hero-title">
              <span>あなたの強みが</span>
              <span className="accent-line">キャリアの可能性に</span>
              <span>変わる</span>
            </h1>
            <p className="lead">
              スキル、経験、志向性を分析し、最適な職種と次のアクションを提示します。
            </p>
          </div>

          <div className="phone-preview" aria-label="診断結果プレビュー">
            <div className="phone-speaker"></div>
            <div className="phone-status">9:41</div>
            <ResultPreview />
          </div>
        </div>
      </section>

      <Card className="start-panel" aria-labelledby="start-title" role="region">
        <p>たった10分でキャリアを可視化</p>
        <h2 id="start-title">無料で今すぐ診断を始める</h2>
        <Badge className="question-badge">
          質問数 <strong>30問</strong> / 約10分で完了
        </Badge>
        <Button
          type="button"
          className="primary-cta"
          variant="secondary"
          asChild
        >
          <Link to="/diagnosis">
            診断をスタートする
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </Card>

      <section className="strengths-panel" aria-labelledby="strength-title">
        <div className="section-title">
          <span>Strengths</span>
          <h2 id="strength-title">あなたの強み候補</h2>
        </div>
        <div className="strength-list">
          {strengths.map((strength) => (
            <Card className="strength-item" key={strength}>
              <ShieldCheck aria-hidden="true" />
              <p>{strength}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="flow-section" aria-labelledby="flow-title">
        <div className="section-title centered">
          <span>Steps</span>
          <h2 id="flow-title">診断の流れ</h2>
        </div>
        <div className="flow-list">
          {flow.map((step, index) => {
            const StepIcon = step.icon;

            return (
              <Card className="flow-card" key={step.title}>
                <Badge variant="outline">
                  STEP {String(index + 1).padStart(2, "0")}
                </Badge>
                <div>
                  <StepIcon aria-hidden="true" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="insight-section" aria-labelledby="insight-title">
        <div className="section-title centered">
          <span>Insights</span>
          <h2 id="insight-title">このアプリでわかること</h2>
        </div>
        <div className="insight-grid">
          {insights.map((insight) => {
            const InsightIcon = insight.icon;

            return (
              <Card className="insight-card" key={insight.title}>
                <InsightIcon aria-hidden="true" />
                <h3>{insight.title}</h3>
                <p>{insight.body}</p>
              </Card>
            );
          })}
        </div>
      </section>

      <StickyCta />
    </main>
  );
}
