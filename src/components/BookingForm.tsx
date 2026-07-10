"use client";

import { useState, type FormEvent } from "react";

const inputClass =
  "w-full mt-2 px-3.5 py-[13px] border border-ink/20 bg-white font-sans text-[15px] rounded-[3px] focus:outline-none focus:border-amber";
const labelClass =
  "font-mono text-[11px] uppercase tracking-[0.1em] text-mist";

export default function BookingForm({ tourName }: { tourName: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      tourName,
      title: String(fd.get("title") ?? "Mr."),
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      country: String(fd.get("country") ?? ""),
      adults: Number(fd.get("adults") ?? 1),
      children: Number(fd.get("children") ?? 0),
      arrivalDate: String(fd.get("arrivalDate") ?? ""),
      comment: String(fd.get("comment") ?? ""),
    };
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-amber/40 bg-amber/10 p-8 text-center">
        <h3 className="font-serif text-2xl">Thank you!</h3>
        <p className="mt-2 text-[15px] text-soil">
          Your booking enquiry for <strong>{tourName}</strong> has been
          received. We&apos;ll reply within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-ink/10 bg-white p-7">
      <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="bf-title">
            Title
          </label>
          <select id="bf-title" name="title" className={inputClass}>
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Ms.</option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="bf-name">
            Full name
          </label>
          <input id="bf-name" name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="bf-email">
            Email
          </label>
          <input id="bf-email" name="email" type="email" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="bf-country">
            Country
          </label>
          <input id="bf-country" name="country" type="text" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="bf-adults">
            Adults
          </label>
          <input
            id="bf-adults"
            name="adults"
            type="number"
            min={1}
            defaultValue={2}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="bf-children">
            Children
          </label>
          <input
            id="bf-children"
            name="children"
            type="number"
            min={0}
            defaultValue={0}
            className={inputClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="bf-arrival">
            Approximate arrival date
          </label>
          <input id="bf-arrival" name="arrivalDate" type="date" className={inputClass} />
        </div>
      </div>
      <div className="mt-[22px]">
        <label className={labelClass} htmlFor="bf-comment">
          Anything we should know?
        </label>
        <textarea
          id="bf-comment"
          name="comment"
          rows={4}
          className={`${inputClass} resize-y`}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-[22px] rounded-[3px] bg-amber px-[34px] py-[15px] text-sm font-semibold text-charcoal transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send booking enquiry"}
      </button>
      {status === "error" && (
        <p className="mt-3 text-sm text-[#a5482f]">
          Something went wrong — please try again or email us directly.
        </p>
      )}
    </form>
  );
}
