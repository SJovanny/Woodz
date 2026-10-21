"use client"

import { type FormEvent } from "react"
import { RESTAURANTS } from "../lib/restaurants"
import { LEGAL } from "../lib/site"
import { ArrowIcon } from "./Icons"

// No server involved: submitting opens the visitor's own mail app with the message prefilled, so the site stores nothing.
export default function ContactForm() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const field = (key: string) => String(data.get(key) ?? "").trim()
    const subject = `Message depuis le site : ${field("restaurant")}`
    const body = `${field("message")}\n\n${field("name")}\nTéléphone : ${field("phone") || "non précisé"}`
    window.location.href = `mailto:${LEGAL.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <h2>Envoyez-nous un message</h2>
      <div className="contact-form__row">
        <label>
          Votre nom
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Téléphone (facultatif)
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <label>
        Restaurant concerné
        <select name="restaurant" defaultValue="Tous les restaurants">
          <option>Tous les restaurants</option>
          {RESTAURANTS.map((r) => (
            <option key={r.slug}>WoodZ {r.name}</option>
          ))}
        </select>
      </label>
      <label>
        Votre message
        <textarea name="message" rows={5} required />
      </label>
      <button className="button button--red" type="submit">
        Envoyer <ArrowIcon />
      </button>
      <p className="contact-form__note">Le bouton ouvre votre messagerie avec le message prêt à envoyer à {LEGAL.email}. Rien n’est enregistré sur ce site.</p>
    </form>
  )
}
