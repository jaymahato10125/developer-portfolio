"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Clock, Mail, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { company, contact as copy } from "../lib/company";

type Status = { kind: "idle" | "sending" | "success" | "error"; message?: string };

const inputClass =
  "min-h-[48px] w-full rounded-xl border border-on-surface/10 bg-surface px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:border-white/10 dark:bg-dark-2 dark:text-dark-ink dark:placeholder:text-dark-faint";

/** Lead-capture section — details + qualifying form posting to /api/contact. */
export default function ContactSection() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.kind === "sending") return;
    setStatus({ kind: "sending" });
    const data = new FormData(e.currentTarget);
    const payload = {
      name: String(data.get("name") ?? ""),
      contact: String(data.get("contact") ?? ""),
      service: String(data.get("service") ?? ""),
      budget: String(data.get("budget") ?? ""),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (res.ok && json?.ok) {
        setStatus({ kind: "success" });
        e.currentTarget.reset();
      } else {
        setStatus({
          kind: "error",
          message: json?.error ?? "Something went wrong. Please try again or contact us directly.",
        });
      }
    } catch {
      setStatus({
        kind: "error",
        message: "Network error. Please try again or contact us directly.",
      });
    }
  }

  return (
    <section className="mx-auto w-full max-w-[1440px] py-6" id="contact">
      <div className="t-theme grid grid-cols-1 gap-8 rounded-3xl border border-on-surface/10 bg-surface-container-low p-8 shadow-sm dark:border-white/10 dark:bg-dark-1 sm:p-12 lg:grid-cols-12">
        <Reveal className="space-y-6 lg:col-span-5">
          <Eyebrow className="text-primary dark:text-accent-bright">{copy.eyebrow}</Eyebrow>
          <h2 className="font-headline-lg text-headline-lg-mobile uppercase text-on-surface dark:text-dark-ink sm:text-headline-lg">
            {copy.heading}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-dark-muted">
            {copy.body}
          </p>
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary-container px-3 py-1 font-label-mono-sm text-label-mono-sm uppercase text-on-secondary-fixed-variant">
            <Clock size={14} aria-hidden />
            <span>{copy.responseBadge}</span>
          </div>
          <ul className="space-y-3 pt-2 font-body-md text-body-md">
            <li>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-3 text-on-surface transition-colors hover:text-primary dark:text-dark-ink dark:hover:text-accent-bright"
              >
                <Mail size={18} aria-hidden className="text-primary dark:text-accent-bright" />
                <span>{company.email}</span>
              </a>
            </li>
            <li>
              <a
                href={company.phoneHref}
                className="inline-flex items-center gap-3 text-on-surface transition-colors hover:text-primary dark:text-dark-ink dark:hover:text-accent-bright"
              >
                <Phone size={18} aria-hidden className="text-primary dark:text-accent-bright" />
                <span>{company.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-on-surface transition-colors hover:text-primary dark:text-dark-ink dark:hover:text-accent-bright"
              >
                <MessageCircle
                  size={18}
                  aria-hidden
                  className="text-primary dark:text-accent-bright"
                />
                <span>Chat on WhatsApp</span>
              </a>
            </li>
          </ul>
          <p className="inline-flex items-center gap-2 font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant dark:text-dark-muted">
            <ShieldCheck size={14} aria-hidden />
            <span>{copy.ndaNote}</span>
          </p>
          <p className="font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant dark:text-dark-muted">
            {company.hours} · {company.location}
          </p>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          {status.kind === "success" ? (
            <div
              role="status"
              className="flex h-full flex-col justify-center gap-4 rounded-2xl border border-on-surface/10 bg-surface p-8 dark:border-white/10 dark:bg-dark-2"
            >
              <span className="font-label-mono-md text-label-mono-md font-bold uppercase tracking-widest text-primary dark:text-accent-bright">
                ◆ Enquiry received
              </span>
              <h3 className="font-headline-md text-headline-md uppercase text-on-surface dark:text-dark-ink">
                {copy.successTitle}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant dark:text-dark-muted">
                {copy.successBody}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-label-mono-md text-label-mono-md uppercase text-on-primary"
                >
                  WhatsApp us
                </a>
                <button
                  type="button"
                  onClick={() => setStatus({ kind: "idle" })}
                  className="rounded-full border border-on-surface/10 px-5 py-2.5 font-label-mono-md text-label-mono-md uppercase text-on-surface dark:border-white/10 dark:text-dark-ink"
                >
                  Send another
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="space-y-4 rounded-2xl border border-on-surface/10 bg-surface p-6 dark:border-white/10 dark:bg-dark-2 sm:p-8"
              aria-label="Project enquiry form"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="font-label-mono-sm text-label-mono-sm font-bold uppercase tracking-wider text-on-surface dark:text-dark-ink"
                  >
                    Your name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="e.g. Rahul Sharma"
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="contact-channel"
                    className="font-label-mono-sm text-label-mono-sm font-bold uppercase tracking-wider text-on-surface dark:text-dark-ink"
                  >
                    Email or phone *
                  </label>
                  <input
                    id="contact-channel"
                    name="contact"
                    required
                    autoComplete="email"
                    placeholder="you@company.com / +91…"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="contact-service"
                    className="font-label-mono-sm text-label-mono-sm font-bold uppercase tracking-wider text-on-surface dark:text-dark-ink"
                  >
                    Service needed *
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {copy.services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="contact-budget"
                    className="font-label-mono-sm text-label-mono-sm font-bold uppercase tracking-wider text-on-surface dark:text-dark-ink"
                  >
                    Budget range
                  </label>
                  <select id="contact-budget" name="budget" defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      Select a range
                    </option>
                    {copy.budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="font-label-mono-sm text-label-mono-sm font-bold uppercase tracking-wider text-on-surface dark:text-dark-ink"
                >
                  Project details *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  minLength={10}
                  placeholder="What do you want to build? Goals, timeline, links to your current site…"
                  className={`${inputClass} min-h-[120px] resize-y`}
                />
              </div>
              {/* Honeypot — humans leave empty */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden
              />
              <div aria-live="polite">
                {status.kind === "error" && (
                  <p
                    role="alert"
                    className="rounded-xl bg-error-container px-4 py-3 font-body-sm text-body-sm text-on-error-container"
                  >
                    {status.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={status.kind === "sending"}
                className="t-theme inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-label-mono-md text-label-mono-md uppercase tracking-wider text-on-primary shadow-md transition-all hover:bg-secondary disabled:cursor-wait disabled:opacity-70 dark:shadow-[0_0_24px_rgba(224,101,58,0.35)] sm:w-auto"
              >
                <span>{status.kind === "sending" ? "Sending…" : "Start a Project"}</span>
                <ArrowRight size={14} aria-hidden />
              </button>
              <p className="font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant dark:text-dark-muted">
                Free consultation · {company.responseSla}
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
