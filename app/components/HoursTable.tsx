"use client"

import { OPENING_HOURS, formatSlots } from "../lib/site"
import { useParisNow } from "./useParisNow"

export default function HoursTable() {
  const now = useParisNow()
  return (
    <table className="hours">
      <caption className="sr-only">Horaires d’ouverture</caption>
      <tbody>
        {OPENING_HOURS.map(({ day, slots, note }, index) => (
          <tr key={day} className={now?.day === index ? "hours__today" : undefined} aria-current={now?.day === index ? "date" : undefined}>
            <th scope="row">{day}</th>
            <td>
              {formatSlots(slots)}
              {note && <span className="hours__note"> {note}</span>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
