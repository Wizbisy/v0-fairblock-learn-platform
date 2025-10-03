"use client"

import { useState, useEffect, useRef } from "react"
import { useProgressStore } from "@/lib/progress-store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Download, Share2, Award, Sparkles } from "lucide-react"
import confetti from "canvas-confetti"
import { useRouter } from "next/navigation"
import html2canvas from "html2canvas"   // ✅ added import

export default function CertificatePage() {
  const router = useRouter()
  const { lessons } = useProgressStore()
  const [name, setName] = useState("")
  const [certificateGenerated, setCertificateGenerated] = useState(false)
  const [mounted, setMounted] = useState(false)
  const certificateRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const completedLessons = mounted ? Object.values(lessons).filter((l) => l.completed).length : 0
  const allLessonsComplete = completedLessons === 6
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const handleGenerateCertificate = () => {
    if (!name.trim()) return
    setCertificateGenerated(true)

    // Confetti animation
    const duration = 3000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval: NodeJS.Timeout = setInterval(() => {
      const timeLeft = animationEnd - Date.now()
      if (timeLeft <= 0) return clearInterval(interval)

      const particleCount = 50 * (timeLeft / duration)
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    }, 250)
  }

  // ✅ fixed: Download as PNG image
  const handleDownloadImage = async () => {
    if (!certificateRef.current) return
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
      })
      const imgData = canvas.toDataURL("image/png")
      const link = document.createElement("a")
      link.href = imgData
      link.download = `fairblock-learn-certificate-${name.replace(/\s+/g, "-").toLowerCase()}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Error generating image:", error)
    }
  }

  const handleShareToX = () => {
    const text = `I just completed Fairblock Learn and earned my certificate in blockchain privacy and encryption! 🎓🔐`
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  if (!mounted) return null

  if (!allLessonsComplete) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Award className="mx-auto mb-6 h-16 w-16 text-muted-foreground" />
          <h1 className="mb-4 text-3xl font-bold">Certificate Locked</h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Complete all 6 lessons to unlock your certificate of completion.
          </p>
          <div className="mb-8">
            <p className="mb-2 text-sm text-muted-foreground">Your Progress</p>
            <p className="text-4xl font-bold text-primary">
              {completedLessons} / 6 <span className="text-lg font-normal text-muted-foreground">lessons</span>
            </p>
          </div>
          <Button onClick={() => router.push("/")} className="bg-gradient-to-r from-[#55C2F6] to-[#0ABAB5] text-white">
            Continue Learning
          </Button>
        </div>
      </div>
    )
  }

  if (!certificateGenerated) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <Sparkles className="mx-auto mb-4 h-16 w-16 text-primary" />
            <h1 className="mb-4 text-3xl font-bold">Congratulations!</h1>
            <p className="text-lg text-muted-foreground">
              You've completed all lessons. Enter your name to generate your certificate.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Generate Your Certificate</CardTitle>
              <CardDescription>Enter your full name as you'd like it to appear on the certificate</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && name.trim()) {
                      handleGenerateCertificate()
                    }
                  }}
                />
              </div>
              <Button
                onClick={handleGenerateCertificate}
                disabled={!name.trim()}
                className="w-full bg-gradient-to-r from-[#55C2F6] to-[#0ABAB5] text-white hover:opacity-90"
              >
                <Award className="mr-2 h-4 w-4" />
                Generate Certificate
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-3xl font-bold">Your Certificate</h1>
          <p className="text-lg text-muted-foreground">Download or share your achievement</p>
        </div>

        {/* Certificate */}
        <div ref={certificateRef} className="mb-8 rounded-lg bg-white p-12 shadow-2xl">
          <div className="border-8 border-double border-primary p-12">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-[#55C2F6] to-[#0ABAB5]">
                <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" fillOpacity="0.9" />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-4xl font-bold text-gray-900">Certificate of Completion</h2>
              <div className="mx-auto h-1 w-32 bg-gradient-to-r from-[#55C2F6] to-[#0ABAB5]" />
            </div>

            {/* Body */}
            <div className="mb-8 text-center">
              <p className="mb-6 text-lg text-gray-700">This certifies that</p>
              <p className="mb-6 text-4xl font-bold text-gray-900">{name}</p>
              <p className="mb-4 text-lg text-gray-700">has successfully completed</p>
              <p className="mb-6 text-2xl font-bold text-primary">Fairblock Learn</p>
              <p className="text-gray-700">
                Demonstrating proficiency in blockchain privacy, encryption, confidentiality, and confidential
                stablecoins
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-gray-300 pt-8">
              <div className="text-center">
                <p className="text-sm text-gray-600">Date of Completion</p>
                <p className="font-semibold text-gray-900">{currentDate}</p>
              </div>
              <div className="text-center">
                <Award className="mx-auto mb-2 h-8 w-8 text-primary" />
                <p className="text-sm font-semibold text-gray-900">Fairblock Learn</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Lessons Completed</p>
                <p className="font-semibold text-gray-900">6 / 6</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            onClick={handleDownloadImage}
            className="flex-1 bg-gradient-to-r from-[#55C2F6] to-[#0ABAB5] text-white hover:opacity-90"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Image
          </Button>
          <Button onClick={handleShareToX} variant="outline" className="flex-1 bg-transparent">
            <Share2 className="mr-2 h-4 w-4" />
            Share on X
          </Button>
        </div>
      </div>
    </div>
  )
}
