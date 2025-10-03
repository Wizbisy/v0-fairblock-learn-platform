"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, BookOpen, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useProgressStore } from "@/lib/progress-store"
import type { Lesson } from "@/lib/lesson-data"
import { LessonDiagram } from "@/components/lesson-diagram"
import { Quiz } from "@/components/quiz"

interface LessonContentProps {
  lesson: Lesson
  lessonId: number
}

export function LessonContent({ lesson, lessonId }: LessonContentProps) {
  const { lessons, updateNotes } = useProgressStore()
  const [notes, setNotes] = useState("")
  const [mounted, setMounted] = useState(false)
  const [showQuiz, setShowQuiz] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedNotes = lessons[lessonId]?.notesContent || ""
    setNotes(savedNotes)
  }, [lessonId, lessons])

  const handleNotesChange = (value: string) => {
    setNotes(value)
    updateNotes(lessonId, value)
  }

  const isCompleted = mounted && lessons[lessonId]?.completed

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link href="/" className="mb-4 inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Home
        </Link>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="mb-2 text-balance text-3xl font-bold md:text-4xl">{lesson.title}</h1>
            <p className="text-pretty text-lg text-muted-foreground">{lesson.description}</p>
          </div>
          {isCompleted && (
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
              Completed
            </Badge>
          )}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="lesson" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="lesson">
                <BookOpen className="mr-2 h-4 w-4" />
                Lesson
              </TabsTrigger>
              <TabsTrigger value="quiz">
                <FileText className="mr-2 h-4 w-4" />
                Quiz
              </TabsTrigger>
            </TabsList>

            <TabsContent value="lesson" className="space-y-6">
              {/* Introduction */}
              <Card>
                <CardHeader>
                  <CardTitle>Introduction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">{lesson.content.introduction}</p>
                </CardContent>
              </Card>

              {/* Diagram */}
              <Card>
                <CardHeader>
                  <CardTitle>Visual Explanation</CardTitle>
                </CardHeader>
                <CardContent>
                  <LessonDiagram prompt={lesson.diagramPrompt} lessonId={lessonId} />
                </CardContent>
              </Card>

              {/* Sections */}
              {lesson.content.sections.map((section, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="leading-relaxed text-muted-foreground">{section.content}</p>
                    {section.codeExample && (
                      <pre className="overflow-x-auto rounded-lg bg-muted p-4">
                        <code className="text-sm">{section.codeExample}</code>
                      </pre>
                    )}
                  </CardContent>
                </Card>
              ))}

              {/* Key Takeaways */}
              <Card>
                <CardHeader>
                  <CardTitle>Key Takeaways</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {lesson.content.keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span className="leading-relaxed text-muted-foreground">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="quiz">
              <Quiz lesson={lesson} lessonId={lessonId} />
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Notes */}
          <Card>
            <CardHeader>
              <CardTitle>Your Notes</CardTitle>
              <CardDescription>Take notes as you learn</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Write your notes here..."
                value={notes}
                onChange={(e) => handleNotesChange(e.target.value)}
                className="min-h-[200px]"
              />
            </CardContent>
          </Card>

          {/* Navigation */}
          <Card>
            <CardHeader>
              <CardTitle>Navigation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {lessonId > 1 && (
                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <Link href={`/lessons/${lessonId - 1}`}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Previous Lesson
                  </Link>
                </Button>
              )}
              {lessonId < 6 && (
                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <Link href={`/lessons/${lessonId + 1}`}>
                    Next Lesson
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
