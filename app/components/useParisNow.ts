"use client"

import { useSyncExternalStore } from "react"

// Current Paris weekday (0 = Monday) and minutes after midnight, encoded as "day:minutes" so the snapshot is a stable primitive.
// The server renders without it (null): opening status depends on the visitor's clock, so it only appears after hydration.
const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const formatter = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Paris", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" })

function snapshot() {
  const parts = Object.fromEntries(formatter.formatToParts(new Date()).map((part) => [part.type, part.value]))
  return `${WEEKDAYS.indexOf(parts.weekday)}:${Number(parts.hour) * 60 + Number(parts.minute)}`
}

function subscribe(onChange: () => void) {
  const timer = window.setInterval(onChange, 30_000)
  return () => window.clearInterval(timer)
}

export function useParisNow() {
  const value = useSyncExternalStore(subscribe, snapshot, () => null)
  if (value === null) return null
  const [day, minutes] = value.split(":").map(Number)
  return { day, minutes }
}
