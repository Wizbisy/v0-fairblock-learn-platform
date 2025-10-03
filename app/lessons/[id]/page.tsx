import { notFound } from "next/navigation"
import { LessonContent } from "@/components/lesson-content"
import { lessonData } from "@/lib/lesson-data"

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }]
}

export default function LessonPage({ params }: { params: { id: string } }) {
  const lessonId = Number.parseInt(params.id)

  if (isNaN(lessonId) || lessonId < 1 || lessonId > 6) {
    notFound()
  }

  const lesson = lessonData[lessonId]

  if (!lesson) {
    notFound()
  }

  return <LessonContent lesson={lesson} lessonId={lessonId} />
}
