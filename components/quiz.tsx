"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useProgressStore } from "@/lib/progress-store"
import type { Lesson } from "@/lib/lesson-data"
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react"

interface QuizProps {
  lesson: Lesson
  lessonId: number
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function Quiz({ lesson, lessonId }: QuizProps) {
  const { completeLesson } = useProgressStore()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [shuffledQuestions, setShuffledQuestions] = useState(lesson.quiz)
  const [quizStartTime, setQuizStartTime] = useState<number>(Date.now())

  useEffect(() => {
    const shuffled = shuffleArray(lesson.quiz)
    setShuffledQuestions(shuffled)
    setQuizStartTime(Date.now())
  }, [lesson.quiz])

  const handleAnswerSelect = (index: number) => {
    if (!showResult) {
      setSelectedAnswer(index)
    }
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    const currentQuiz = shuffledQuestions[currentQuestion]
    const isCorrect = selectedAnswer === currentQuiz.correctAnswer
    const newAnswers = [...answers, selectedAnswer]
    setAnswers(newAnswers)

    if (isCorrect) {
      setScore(score + 1)
    }

    setShowResult(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      const finalScore = score + (selectedAnswer === shuffledQuestions[currentQuestion].correctAnswer ? 1 : 0)

      setQuizCompleted(true)
      completeLesson(lessonId, finalScore)
    }
  }

  const handleRetry = () => {
    const shuffled = shuffleArray(lesson.quiz)
    setShuffledQuestions(shuffled)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnswers([])
    setQuizCompleted(false)
    setQuizStartTime(Date.now())
  }

  const currentQuiz = shuffledQuestions[currentQuestion]
  const isCorrect = selectedAnswer === currentQuiz.correctAnswer

  if (quizCompleted) {
    const finalScore = score
    const percentage = (finalScore / shuffledQuestions.length) * 100

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Understanding Basics of Fairblock</h2>
          <p className="mt-2 text-muted-foreground">Test your knowledge</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Quiz Complete!</CardTitle>
            <CardDescription>Here are your results</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="mb-4 text-6xl font-bold text-primary">
                {finalScore}/{shuffledQuestions.length}
              </div>
              <p className="text-lg text-muted-foreground">
                You scored {percentage.toFixed(0)}%{percentage >= 80 ? " - Great job!" : " - Keep learning!"}
              </p>
            </div>
            <div className="flex gap-4">
              <Button onClick={handleRetry} variant="outline" className="flex-1 bg-transparent">
                <RotateCcw className="mr-2 h-4 w-4" />
                Retry Quiz
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Understanding Basics of Fairblock</h2>
        <p className="mt-2 text-muted-foreground">Test your knowledge</p>
      </div>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>
              Question {currentQuestion + 1} of {shuffledQuestions.length}
            </CardTitle>
            <span className="text-sm text-muted-foreground">
              Score: {score}/{shuffledQuestions.length}
            </span>
          </div>
          <CardDescription className="text-base">{currentQuiz.question}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup
            key={currentQuestion}
            value={selectedAnswer !== null ? selectedAnswer.toString() : undefined}
            onValueChange={(value) => handleAnswerSelect(Number.parseInt(value))}
            disabled={showResult}
          >
            <div className="space-y-3">
              {currentQuiz.options.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrectAnswer = index === currentQuiz.correctAnswer
                const showAsCorrect = showResult && isCorrectAnswer
                const showAsIncorrect = showResult && isSelected && !isCorrectAnswer

                return (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 rounded-lg border p-4 transition-colors ${
                      showAsCorrect
                        ? "border-green-500 bg-green-50"
                        : showAsIncorrect
                          ? "border-red-500 bg-red-50"
                          : isSelected && !showResult
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} disabled={showResult} />
                    <Label
                      htmlFor={`option-${index}`}
                      className={`flex-1 ${showResult ? "cursor-default" : "cursor-pointer"}`}
                    >
                      {option}
                    </Label>
                    {showAsCorrect && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                    {showAsIncorrect && <XCircle className="h-5 w-5 text-red-600" />}
                  </div>
                )
              })}
            </div>
          </RadioGroup>

          {showResult && (
            <div
              className={`rounded-lg p-4 ${
                isCorrect
                  ? "bg-green-50 text-green-900 border border-green-200"
                  : "bg-red-50 text-red-900 border border-red-200"
              }`}
            >
              <p className="font-semibold text-lg">{isCorrect ? "✓ Correct!" : "✗ Incorrect"}</p>
              {!isCorrect && (
                <p className="mt-1 text-sm">The correct answer is: {currentQuiz.options[currentQuiz.correctAnswer]}</p>
              )}
            </div>
          )}

          <div className="flex gap-4">
            {!showResult ? (
              <Button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="flex-1 bg-gradient-to-r from-[#55C2F6] to-[#0ABAB5] text-white hover:opacity-90"
              >
                Submit Answer
              </Button>
            ) : (
              <Button
                onClick={handleNextQuestion}
                className="flex-1 bg-gradient-to-r from-[#55C2F6] to-[#0ABAB5] text-white hover:opacity-90"
              >
                {currentQuestion < shuffledQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
