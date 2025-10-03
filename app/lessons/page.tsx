"use client"

import { redirect } from "next/navigation"
import { useEffect } from "react"

export default function LessonsPage() {
  useEffect(() => {
    redirect("/")
  }, [])

  return null
}
