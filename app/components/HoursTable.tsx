"use client"

import { type OpeningHours, formatSlots } from "../lib/site"
import { useParisNow } from "./useParisNow"

export default function HoursTable({ hours }: { hours: OpeningHours }) {
  const now = useParisNow()
  return (
    <table className="hours">
      <caption className="sr-only">Horaires d’ouverture</caption>
      <tbody>
        {hours.map(({ day, slots, note }, index) => (
          <tr key={day} className={now?.day === index ? "hours__today" : undefined} aria-current={now?.day === index ? "date" : undefined}>
            <th scope="row">{day}</th>
            <td className={slots.length ? undefined : "hours__closed"}>
              {formatSlots(slots)}
              {note && <span className="hours__note"> {note}</span>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
