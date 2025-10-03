"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface LessonProgress {
  lessonId: number
  completed: boolean
  quizScore: number | null
  notesContent: string
}

interface ProgressState {
  lessons: Record<number, LessonProgress>
  streak: number
  lastVisit: string | null
  completeLesson: (lessonId: number, quizScore?: number) => void
  updateNotes: (lessonId: number, notes: string) => void
  updateStreak: () => void
  getTotalProgress: () => number
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      lessons: {},
      streak: 0,
      lastVisit: null,

      completeLesson: (lessonId: number, quizScore?: number) => {
        set((state) => ({
          lessons: {
            ...state.lessons,
            [lessonId]: {
              ...state.lessons[lessonId],
              lessonId,
              completed: true,
              quizScore: quizScore ?? state.lessons[lessonId]?.quizScore ?? null,
              notesContent: state.lessons[lessonId]?.notesContent ?? "",
            },
          },
        }))
      },

      updateNotes: (lessonId: number, notes: string) => {
        set((state) => ({
          lessons: {
            ...state.lessons,
            [lessonId]: {
              ...state.lessons[lessonId],
              lessonId,
              completed: state.lessons[lessonId]?.completed ?? false,
              quizScore: state.lessons[lessonId]?.quizScore ?? null,
              notesContent: notes,
            },
          },
        }))
      },

      updateStreak: () => {
        const today = new Date().toDateString()
        const lastVisit = get().lastVisit

        if (!lastVisit) {
          set({ streak: 1, lastVisit: today })
          return
        }

        const lastDate = new Date(lastVisit)
        const todayDate = new Date(today)
        const diffTime = todayDate.getTime() - lastDate.getTime()
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

        if (diffDays === 0) {
          // Same day, no change
          return
        } else if (diffDays === 1) {
          // Consecutive day
          set((state) => ({ streak: state.streak + 1, lastVisit: today }))
        } else {
          // Streak broken
          set({ streak: 1, lastVisit: today })
        }
      },

      getTotalProgress: () => {
        const lessons = get().lessons
        const completedCount = Object.values(lessons).filter((l) => l.completed).length
        return Math.round((completedCount / 6) * 100)
      },
    }),
    {
      name: "fairblock-progress",
    },
  ),
)
