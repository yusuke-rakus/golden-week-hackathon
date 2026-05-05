import {
  BriefcaseBusiness,
  ChevronRight,
  Code2,
  LineChart,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { careerMatches } from "@/data/career-diagnosis";

export function ResultPreview() {
  return (
    <Card className="result-card" aria-label="診断結果サマリー">
      <span>診断結果サマリー</span>
      <p>あなたのキャリアタイプ</p>
      <h2>テックリーダータイプ</h2>
      <div className="avatar-orbit" aria-hidden="true">
        <Code2 className="orbit-icon code" />
        <LineChart className="orbit-icon chart" />
        <Rocket className="orbit-icon rocket" />
        <div className="avatar-face">
          <BriefcaseBusiness />
        </div>
      </div>
      <p className="result-copy">
        技術力を強みに、チームやプロジェクトをリードできるタイプです。
      </p>
      <div className="match-list">
        {careerMatches.map((match, index) => (
          <Card className="match-item" key={match.role} size="sm">
            <strong>{index + 1}</strong>
            <div>
              <h3>{match.role}</h3>
              <p>{match.category}</p>
            </div>
            <b>{match.score}%</b>
          </Card>
        ))}
      </div>
      <Button className="result-button" type="button" asChild>
        <Link to="/result">
          結果を詳しく見る
          <ChevronRight aria-hidden="true" />
        </Link>
      </Button>
    </Card>
  );
}
