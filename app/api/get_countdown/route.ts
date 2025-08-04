import { NextResponse } from 'next/server'

export async function GET() {
  const countdownTarget = new Date('2025-09-3T17:58:20.117Z')
  const now = new Date()
  const diff = countdownTarget.getTime() - now.getTime()

  if (diff <= 0) {
    return NextResponse.json({ expired: true })
  }

  const seconds = Math.floor((diff / 1000) % 60)
  const minutes = Math.floor((diff / 1000 / 60) % 60)
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))

  return NextResponse.json({
    expired: false,
    days,
    hours,
    minutes,
    seconds,
  })
}
