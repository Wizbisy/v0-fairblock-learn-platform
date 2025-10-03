"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Search, BookOpen, Award, Flame, Lock, Eye, Shield, Key, Users, Coins } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useProgressStore } from "@/lib/progress-store"
import { Button } from "@/components/ui/button"

const lessons = [
  {
    id: 1,
    title: "Encryption",
    description: "Learn how encryption locks data with keys and protects information.",
    icon: Lock,
    color: "from-[#55C2F6] to-[#0ABAB5]",
  },
  {
    id: 2,
    title: "Confidentiality",
    description: "Understand how to hide transaction details from the public.",
    icon: Eye,
    color: "from-[#0ABAB5] to-[#55C2F6]",
  },
  {
    id: 3,
    title: "Privacy",
    description: "Discover techniques for keeping identities hidden on the blockchain.",
    icon: Shield,
    color: "from-[#55C2F6] to-[#0ABAB5]",
  },
  {
    id: 4,
    title: "Identity-Based Encryption",
    description: "Explore encryption tied to specific identities and conditions.",
    icon: Key,
    color: "from-[#0ABAB5] to-[#55C2F6]",
  },
  {
    id: 5,
    title: "Threshold IBE",
    description: "Learn about multi-party decryption and threshold cryptography.",
    icon: Users,
    color: "from-[#55C2F6] to-[#0ABAB5]",
  },
  {
    id: 6,
    title: "Confidential Stablecoins",
    description: "Master private transactions with encrypted balances and amounts.",
    icon: Coins,
    color: "from-[#0ABAB5] to-[#55C2F6]",
  },
]

export default function HomePage() {
  const { lessons: progressLessons, streak, updateStreak, getTotalProgress } = useProgressStore()
  const [searchQuery, setSearchQuery] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    updateStreak()
  }, [updateStreak])

  const totalProgress = mounted ? getTotalProgress() : 0
  const completedLessons = mounted ? Object.values(progressLessons).filter((l) => l.completed).length : 0

  const filteredLessons = lessons.filter(
    (lesson) =>
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Understanding Basics of Fairblock
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          Learn encryption, confidentiality, and privacy concepts with interactive lessons, quizzes, and hands-on demos.
        </p>

        {/* Search Bar */}
        <div className="mx-auto max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search lessons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mb-12 grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalProgress}%</div>
            <Progress value={totalProgress} className="mt-2" />
            <p className="mt-2 text-xs text-muted-foreground">{completedLessons} of 6 lessons completed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
            <Flame className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mounted ? streak : 0} days</div>
            <p className="mt-2 text-xs text-muted-foreground">Keep learning daily to maintain your streak</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Certificate</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedLessons === 6 ? "Ready!" : "Locked"}</div>
            <p className="mt-2 text-xs text-muted-foreground">
              {completedLessons === 6 ? "Claim your certificate now" : `Complete ${6 - completedLessons} more lessons`}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Lessons Grid */}
      <div className="mb-8">
        <h2 className="mb-6 text-2xl font-bold">Lessons</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredLessons.map((lesson) => {
            const LessonIcon = lesson.icon
            const isCompleted = mounted && progressLessons[lesson.id]?.completed
            const quizScore = mounted ? progressLessons[lesson.id]?.quizScore : null

            return (
              <Link key={lesson.id} href={`/lessons/${lesson.id}`}>
                <Card className="group h-full transition-all hover:shadow-lg hover:shadow-primary/20">
                  <CardHeader>
                    <div className="mb-4 flex items-center justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${lesson.color}`}
                      >
                        <LessonIcon className="h-6 w-6 text-white" />
                      </div>
                      {isCompleted && (
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                        >
                          Completed
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="group-hover:text-primary">{lesson.title}</CardTitle>
                    <CardDescription className="text-pretty">{lesson.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {quizScore !== null && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Award className="h-4 w-4" />
                        <span>Quiz Score: {quizScore}/5</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Study Tools</CardTitle>
            <CardDescription>Additional resources to enhance your learning</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Button asChild variant="outline" className="justify-start bg-transparent">
              <Link href="/flashcards">
                <BookOpen className="mr-2 h-4 w-4" />
                Flashcards
              </Link>
            </Button>
            <Button asChild variant="outline" className="justify-start bg-transparent">
              <Link href="/glossary">
                <Search className="mr-2 h-4 w-4" />
                Glossary
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Achievement</CardTitle>
            <CardDescription>Complete all lessons to earn your certificate</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              asChild
              variant={completedLessons === 6 ? "default" : "secondary"}
              disabled={completedLessons !== 6}
              className={
                completedLessons === 6
                  ? "w-full bg-gradient-to-r from-[#55C2F6] to-[#0ABAB5] text-white hover:opacity-90"
                  : "w-full"
              }
            >
              <Link href="/certificate">
                <Award className="mr-2 h-4 w-4" />
                {completedLessons === 6 ? "Get Certificate" : "Certificate Locked"}
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
