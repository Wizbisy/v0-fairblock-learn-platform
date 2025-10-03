"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface LessonDiagramProps {
  prompt: string
  lessonId: number
}

export function LessonDiagram({ prompt, lessonId }: LessonDiagramProps) {
  // Diagram components for each lesson
  const diagrams: Record<number, React.ReactNode> = {
    1: <EncryptionDiagram />,
    2: <ConfidentialityDiagram />,
    3: <PrivacyDiagram />,
    4: <IBEDiagram />,
    5: <TIBEDiagram />,
    6: <ConfidentialStablecoinDiagram />,
  }

  return (
    <div className="rounded-lg bg-muted/30 p-6">
      {diagrams[lessonId] || <div className="text-center text-muted-foreground">Diagram coming soon</div>}
    </div>
  )
}

function EncryptionDiagram() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-4">
        <div className="rounded-lg bg-background p-4 shadow-sm">
          <p className="text-sm font-medium">Plain Text</p>
          <p className="text-xs text-muted-foreground">Hello World</p>
        </div>
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <div className="rounded-lg bg-gradient-to-br from-[#55C2F6] to-[#0ABAB5] p-4 text-white shadow-sm">
          <p className="text-sm font-medium">Encryption</p>
          <svg className="mx-auto mt-2 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
            />
          </svg>
        </div>
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <div className="rounded-lg bg-background p-4 shadow-sm">
          <p className="text-sm font-medium">Cipher Text</p>
          <p className="font-mono text-xs text-muted-foreground">aX9$mK2...</p>
        </div>
      </div>
      <svg className="h-8 w-8 rotate-90 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
      <div className="flex items-center gap-4">
        <div className="rounded-lg bg-background p-4 shadow-sm">
          <p className="text-sm font-medium">Cipher Text</p>
          <p className="font-mono text-xs text-muted-foreground">aX9$mK2...</p>
        </div>
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <div className="rounded-lg bg-gradient-to-br from-[#55C2F6] to-[#0ABAB5] p-4 text-white shadow-sm">
          <p className="text-sm font-medium">Decryption</p>
          <svg className="mx-auto mt-2 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 018 0v4h8z" />
          </svg>
        </div>
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <div className="rounded-lg bg-background p-4 shadow-sm">
          <p className="text-sm font-medium">Plain Text</p>
          <p className="text-xs text-muted-foreground">Hello World</p>
        </div>
      </div>
    </div>
  )
}

function ConfidentialityDiagram() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center justify-center gap-8">
        <div className="text-center">
          <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#55C2F6] to-[#0ABAB5]">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <p className="text-sm font-medium">Sender</p>
          <p className="text-xs text-muted-foreground">0xAlice...</p>
        </div>

        <div className="relative">
          <svg className="h-12 w-32 text-primary" fill="none" viewBox="0 0 100 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M0 12 L100 12" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M90 6 L100 12 L90 18" />
          </svg>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-background px-3 py-1 shadow-md">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span className="text-xs font-medium">Amount: •••</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0ABAB5] to-[#55C2F6]">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <p className="text-sm font-medium">Receiver</p>
          <p className="text-xs text-muted-foreground">0xBob...</p>
        </div>
      </div>
      <p className="text-center text-sm text-muted-foreground">
        Addresses are visible, but the transaction amount is encrypted
      </p>
    </div>
  )
}

function PrivacyDiagram() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center justify-center gap-8">
        <div className="text-center">
          <div className="relative mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#55C2F6] to-[#0ABAB5]">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-sm font-medium">Sender</p>
          <p className="text-xs text-muted-foreground">Identity Hidden</p>
        </div>

        <div className="relative">
          <svg className="h-12 w-32 text-primary" fill="none" viewBox="0 0 100 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M0 12 L100 12"
              strokeDasharray="5,5"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M90 6 L100 12 L90 18" />
          </svg>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-background px-4 py-2 shadow-md">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-medium">Private TX</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="relative mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0ABAB5] to-[#55C2F6]">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-sm font-medium">Receiver</p>
          <p className="text-xs text-muted-foreground">Identity Hidden</p>
        </div>
      </div>
      <p className="text-center text-sm text-muted-foreground">
        Both sender and receiver identities are protected using privacy techniques
      </p>
    </div>
  )
}

function IBEDiagram() {
  const [currentBlock, setCurrentBlock] = useState(995)
  const [unlocked, setUnlocked] = useState(false)

  const handleAdvanceBlock = () => {
    if (currentBlock < 1000) {
      setCurrentBlock(currentBlock + 1)
    }
    if (currentBlock + 1 >= 1000) {
      setUnlocked(true)
    }
  }

  const handleReset = () => {
    setCurrentBlock(995)
    setUnlocked(false)
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="text-center">
        <p className="mb-2 text-sm font-medium text-muted-foreground">Current Block</p>
        <p className="text-3xl font-bold">{currentBlock}</p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="rounded-lg bg-background p-6 shadow-md">
          <div className="mb-4 text-center">
            <p className="text-sm font-medium">Encrypted Message</p>
            <p className="mt-2 font-mono text-xs text-muted-foreground">Identity: "block-1000"</p>
          </div>
          <div
            className={`flex h-24 w-24 items-center justify-center rounded-lg transition-all ${
              unlocked
                ? "bg-gradient-to-br from-green-400 to-green-600"
                : "bg-gradient-to-br from-[#55C2F6] to-[#0ABAB5]"
            }`}
          >
            <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {unlocked ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              )}
            </svg>
          </div>
          {unlocked && (
            <div className="mt-4 text-center">
              <p className="text-sm font-medium text-green-600 dark:text-green-400">Unlocked!</p>
              <p className="text-xs text-muted-foreground">Message: "Secret Data"</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          onClick={handleAdvanceBlock}
          disabled={currentBlock >= 1000}
          className="bg-gradient-to-r from-[#55C2F6] to-[#0ABAB5] text-white hover:opacity-90"
        >
          Advance Block
        </Button>
        <Button onClick={handleReset} variant="outline" className="bg-transparent">
          Reset
        </Button>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        The message can only be decrypted when block 1000 is reached
      </p>
    </div>
  )
}

function TIBEDiagram() {
  const [selectedKeys, setSelectedKeys] = useState<number[]>([])
  const [unlocked, setUnlocked] = useState(false)

  const toggleKey = (keyId: number) => {
    if (selectedKeys.includes(keyId)) {
      setSelectedKeys(selectedKeys.filter((k) => k !== keyId))
      setUnlocked(false)
    } else {
      const newKeys = [...selectedKeys, keyId]
      setSelectedKeys(newKeys)
      if (newKeys.length >= 2) {
        setUnlocked(true)
      }
    }
  }

  const reset = () => {
    setSelectedKeys([])
    setUnlocked(false)
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-center text-sm font-medium">Threshold: 2 of 3 keys required</p>

      <div className="flex items-center justify-center gap-8">
        {[1, 2, 3].map((keyId) => (
          <button
            key={keyId}
            onClick={() => toggleKey(keyId)}
            className={`flex flex-col items-center gap-2 transition-all ${
              selectedKeys.includes(keyId) ? "scale-110" : "opacity-60 hover:opacity-100"
            }`}
          >
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-full transition-all ${
                selectedKeys.includes(keyId) ? "bg-gradient-to-br from-[#55C2F6] to-[#0ABAB5] shadow-lg" : "bg-muted"
              }`}
            >
              <svg
                className={`h-8 w-8 ${selectedKeys.includes(keyId) ? "text-white" : "text-muted-foreground"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
            </div>
            <p className="text-xs font-medium">Authority {keyId}</p>
          </button>
        ))}
      </div>

      <svg className="h-8 w-8 rotate-90 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>

      <div className="rounded-lg bg-background p-6 shadow-md">
        <div
          className={`flex h-24 w-24 items-center justify-center rounded-lg transition-all ${
            unlocked ? "bg-gradient-to-br from-green-400 to-green-600" : "bg-gradient-to-br from-gray-400 to-gray-600"
          }`}
        >
          <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {unlocked ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            )}
          </svg>
        </div>
        <p className="mt-4 text-center text-sm font-medium">
          {unlocked ? (
            <span className="text-green-600 dark:text-green-400">Unlocked!</span>
          ) : (
            <span className="text-muted-foreground">Locked</span>
          )}
        </p>
      </div>

      <Button onClick={reset} variant="outline" className="bg-transparent">
        Reset Demo
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Click on authority keys to select them. Need 2 out of 3 to unlock.
      </p>
    </div>
  )
}

function ConfidentialStablecoinDiagram() {
  const [showAmount, setShowAmount] = useState(false)

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center justify-center gap-8">
        <div className="text-center">
          <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#55C2F6] to-[#0ABAB5]">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <p className="text-sm font-medium">Alice</p>
          <p className="text-xs text-muted-foreground">0xAlice...</p>
        </div>

        <div className="relative">
          <svg className="h-12 w-32 text-primary" fill="none" viewBox="0 0 100 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M0 12 L100 12" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M90 6 L100 12 L90 18" />
          </svg>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-background px-4 py-2 shadow-md">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span className="text-sm font-medium">{showAmount ? "100 cUSDC" : "Amount: •••"}</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0ABAB5] to-[#55C2F6]">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <p className="text-sm font-medium">Bob</p>
          <p className="text-xs text-muted-foreground">0xBob...</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-center">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <svg className="h-6 w-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <p className="text-xs font-medium text-muted-foreground">Auditor</p>
        </div>
        <Button
          onClick={() => setShowAmount(!showAmount)}
          size="sm"
          variant="outline"
          className="bg-gradient-to-r from-[#55C2F6] to-[#0ABAB5] text-white hover:opacity-90"
        >
          {showAmount ? "Hide" : "Reveal"} Amount
        </Button>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Addresses are visible, but amounts are encrypted. Auditors can reveal amounts with special keys.
      </p>
    </div>
  )
}
