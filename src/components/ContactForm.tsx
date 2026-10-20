"use client";

import { useState, type FormEvent } from "react";
import Turnstile, { TURNSTILE_SITE_KEY } from "@/components/Turnstile";

const inputClass =
  "w-full mt-2 px-3.5 py-[13px] border border-ink/20 bg-white font-sans text-[15px] rounded-[3px] focus:outline-none focus:border-amber";
const labelClass =
  "font-mono text-[11px] uppercase tracking-[0.1em] text-mist";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [token, setToken] = useState("");
  const [resetSignal, setResetSignal] = useState(0);
  const needsToken = Boolean(TURNSTILE_SITE_KEY);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const region = String(fd.get("region") ?? "");
    const dates = String(fd.get("dates") ?? "");
    const message = String(fd.get("message") ?? "");
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      comment: [
        region && `Preferred region: ${region}`,
        dates && `Approx. dates: ${dates}`,
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      turnstileToken: token,
    };
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      // A token is single-use — get a fresh one before the next attempt.
      setResetSignal((n) => n + 1);
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-amber/40 bg-amber/10 p-10 text-center">
        <h3 className="font-serif text-2xl">Message received</h3>
        <p className="mt-2 text-[15px] text-soil">
          Thanks for writing. One of us will reply personally within a day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="cf-name">
            Full name
          </label>
          <input id="cf-name" name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-email">
            Email
          </label>
          <input id="cf-email" name="email" type="email" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-region">
            Preferred region
          </label>
          <input id="cf-region" name="region" type="text" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-dates">
            Approx. dates
          </label>
          <input id="cf-dates" name="dates" type="text" className={inputClass} />
        </div>
      </div>
      <div className="mt-[22px]">
        <label className={labelClass} htmlFor="cf-message">
          Tell us about your ideal trip
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={6}
          required
          className={`${inputClass} resize-y`}
        />
      </div>
      <Turnstile
        onVerify={setToken}
        resetSignal={resetSignal}
        className="mt-[22px]"
      />
      <button
        type="submit"
        disabled={status === "sending" || (needsToken && !token)}
        className="mt-[22px] rounded-[3px] bg-amber px-[34px] py-[15px] text-sm font-semibold text-charcoal transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
      {status === "error" && (
        <p className="mt-3 text-sm text-[#a5482f]">
          Something went wrong — please try again or email us directly.
        </p>
      )}
    </form>
  );
}
