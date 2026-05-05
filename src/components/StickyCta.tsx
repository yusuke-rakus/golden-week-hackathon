import { Sparkles, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function StickyCta() {
  return (
    <Card className="sticky-cta" aria-label="診断開始" role="region">
      <div>
        <Trophy aria-hidden="true" />
        <span>すべての機能を無料で体験できます</span>
      </div>
      <Button type="button" variant="secondary" asChild>
        <Link to="/diagnosis">
          無料で診断を始める
          <Sparkles aria-hidden="true" />
        </Link>
      </Button>
    </Card>
  );
}
