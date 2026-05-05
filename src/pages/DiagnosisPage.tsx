import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

import { BrandHeader } from "@/components/BrandHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { diagnosisQuestions } from "@/data/diagnosis-questions";

export function DiagnosisPage() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string[]>
  >({});

  const currentQuestion = diagnosisQuestions[questionIndex];
  const selectedAnswerLabels = selectedAnswers[currentQuestion.id] ?? [];
  const answeredCount = Object.keys(selectedAnswers).length;
  const progress = Math.round(
    (answeredCount / diagnosisQuestions.length) * 100,
  );
  const canGoNext = selectedAnswerLabels.length > 0;

  function goNext() {
    if (!canGoNext) return;

    setQuestionIndex((currentIndex) =>
      Math.min(currentIndex + 1, diagnosisQuestions.length - 1),
    );
  }

  function selectAnswer(answerLabel: string) {
    setSelectedAnswers((currentAnswers) => {
      if (currentQuestion.selectionMode === "single") {
        return {
          ...currentAnswers,
          [currentQuestion.id]: [answerLabel],
        };
      }

      const nextSelection = toggleAnswer(
        currentAnswers[currentQuestion.id] ?? [],
        answerLabel,
      );
      const nextAnswers = { ...currentAnswers };

      if (nextSelection.length === 0) {
        delete nextAnswers[currentQuestion.id];
        return nextAnswers;
      }

      nextAnswers[currentQuestion.id] = nextSelection;
      return nextAnswers;
    });
  }

  function toggleAnswer(currentSelection: string[], answerLabel: string) {
    const nextSelection = currentSelection.includes(answerLabel)
      ? currentSelection.filter((label) => label !== answerLabel)
      : [...currentSelection, answerLabel];

    return nextSelection;
  }

  return (
    <main className="diagnosis-app diagnosis-screen">
      <BrandHeader
        trailing={
          <Badge className="time-pill" variant="outline">
            {questionIndex + 1}/{diagnosisQuestions.length}
          </Badge>
        }
      />

      <section className="screen-heading" aria-labelledby="diagnosis-title">
        <Button type="button" variant="ghost" size="sm" asChild>
          <Link to="/">
            <ArrowLeft aria-hidden="true" />
            戻る
          </Link>
        </Button>
        <Badge variant="outline">回答中</Badge>
        <h1 id="diagnosis-title">キャリア傾向を診断</h1>
        <p>回答はあとから変更できます。直感に近いものを選んでください。</p>
      </section>

      <Card className="question-card">
        <div className="question-progress">
          <span>診断進捗</span>
          <strong>{progress}%</strong>
        </div>
        <Progress value={progress} />

        <div className="question-body">
          <div className="question-meta">
            <Badge className="question-index-badge">
              QUESTION {questionIndex + 1}
            </Badge>
            {currentQuestion.selectionMode === "multiple" && (
              <Badge className="question-mode-badge" variant="outline">
                複数選択
              </Badge>
            )}
          </div>
          <h2>{currentQuestion.question}</h2>
          <div
            className={
              currentQuestion.selectionMode === "multiple"
                ? "answer-list multiple"
                : "answer-list"
            }
          >
            {currentQuestion.answers.map((answer) => {
              const isSelected = selectedAnswerLabels.includes(answer.label);

              return (
                <Button
                  className={isSelected ? "selected" : ""}
                  key={answer.label}
                  onClick={() => selectAnswer(answer.label)}
                  type="button"
                  variant="outline"
                >
                  <span>{isSelected && <Check aria-hidden="true" />}</span>
                  {answer.label}
                </Button>
              );
            })}
          </div>
        </div>
      </Card>

      <div className="page-actions">
        <Button type="button" variant="outline" asChild>
          <Link to="/">
            <RotateCcw aria-hidden="true" />
            最初から
          </Link>
        </Button>
        {questionIndex < diagnosisQuestions.length - 1 ? (
          <Button type="button" disabled={!canGoNext} onClick={goNext}>
            次へ
            <ArrowRight aria-hidden="true" />
          </Button>
        ) : !canGoNext ? (
          <Button type="button" disabled>
            結果を見る
            <ArrowRight aria-hidden="true" />
          </Button>
        ) : (
          <Button type="button" asChild>
            <Link to="/result">
              結果を見る
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        )}
      </div>
    </main>
  );
}
