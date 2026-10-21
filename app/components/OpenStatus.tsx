"use client"

import { type OpeningHours, formatTime } from "../lib/site"
import { useParisNow } from "./useParisNow"

// Finds the next opening at or after `day`/`minutes`, scanning at most one week ahead.
function nextOpening(hours: OpeningHours, day: number, minutes: number) {
  for (let offset = 0; offset < 8; offset++) {
    const index = (day + offset) % 7
    const slot = hours[index].slots.find(([open]) => offset > 0 || open > minutes)
    if (slot) return { label: offset === 0 ? "aujourd’hui" : offset === 1 ? "demain" : hours[index].day.toLowerCase(), time: formatTime(slot[0]) }
  }
  return null
}

export default function OpenStatus({ hours, className }: { hours: OpeningHours; className?: string }) {
  const now = useParisNow()
  if (!now) return <span className={className} aria-hidden="true" />

  const current = hours[now.day].slots.find(([open, close]) => now.minutes >= open && now.minutes < close)
  if (current) {
    const closingSoon = current[1] - now.minutes <= 30
    return (
      <span className={`${className ?? ""} open-status open-status--open`}>
        <span className="open-status__dot" />
        {closingSoon ? `Ferme bientôt · jusqu’à ${formatTime(current[1])}` : `Ouvert · jusqu’à ${formatTime(current[1])}`}
      </span>
    )
  }

  const next = nextOpening(hours, now.day, now.minutes)
  return (
    <span className={`${className ?? ""} open-status open-status--closed`}>
      <span className="open-status__dot" />
      Fermé{next ? ` · ouvre ${next.label} à ${next.time}` : ""}
    </span>
  )
}
