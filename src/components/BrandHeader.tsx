import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";

type BrandHeaderProps = {
  trailing?: ReactNode;
};

export function BrandHeader({ trailing }: BrandHeaderProps) {
  return (
    <header className="app-header">
      <Link className="brand" to="/" aria-label="ITキャリア診断 ホーム">
        <span className="brand-mark" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span>
        ITキャリア診断
      </Link>
      {trailing ?? (
        <Badge className="time-pill" variant="outline">
          約10分
        </Badge>
      )}
    </header>
  );
}
