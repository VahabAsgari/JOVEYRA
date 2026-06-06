"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PolarWatermark } from "./watermarks";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-8 py-32"
    >
      <div className="watermark-grid" aria-hidden />
      <PolarWatermark />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center"
      >
        <span className="mb-8 font-mono text-[0.62rem] uppercase tracking-[0.32em] text-accent/60">
          [05] — Contact
        </span>
        <h2 className="font-display text-3xl font-700 uppercase leading-tight tracking-[0.12em] text-balance text-foreground sm:text-4xl md:text-5xl">
          Portal
        </h2>
        <p className="mt-12 max-w-xl text-pretty text-lg leading-loose text-muted-foreground md:text-xl">
          For formal institutional inquiries:{" "}
          <a
            href="mailto:communications@joveyra.com"
            className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
          >
            communications@joveyra.com
          </a>
          . Structural overviews are available upon credential authentication.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="mt-16 flex w-full max-w-md flex-col gap-8 text-left"
        >
          <Field label="Email" name="email" type="email" placeholder="name@institution.com" />
          <Field label="Credentials" name="cred" placeholder="Credential identifier" />

          <button
            type="submit"
            disabled={submitted}
            className="group relative mt-2 inline-flex items-center justify-center gap-3 overflow-hidden border border-border px-8 py-4 font-mono text-[0.64rem] uppercase tracking-[0.28em] text-foreground transition-all duration-500 hover:border-accent disabled:opacity-50"
          >
            <span
              className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(120% 120% at 50% 50%, rgba(196,205,218,0.18) 0%, transparent 70%)",
              }}
            />
            <span className="relative z-10">
              {submitted ? "Request Received" : "Request Authentication"}
            </span>
          </button>

          <p className="text-center font-mono text-[0.56rem] uppercase tracking-[0.26em] text-muted-foreground/60">
            {submitted
              ? "Transmitted · Awaiting credential authentication"
              : "Transmitted under strict confidentiality"}
          </p>
        </form>
      </motion.div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <label
        htmlFor={name}
        className="font-mono text-[0.58rem] uppercase tracking-[0.26em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full border-b border-border bg-transparent pb-2 font-serif text-base text-foreground placeholder:text-muted-foreground/40 transition-colors duration-300 focus:border-accent focus:outline-none"
      />
    </div>
  );
}
