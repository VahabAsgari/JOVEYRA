"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative border-t border-border px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="mb-6 font-display text-[0.7rem] tracking-luxe text-accent/70">[05]</p>
          <h2 className="max-w-xl font-display text-2xl font-600 leading-tight text-balance text-foreground sm:text-3xl md:text-4xl">
            CONTACT
          </h2>
          <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            For formal institutional inquiries:{" "}
            <a
              href="mailto:communications@joveyra.com"
              className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
            >
              communications@joveyra.com
            </a>
            . Structural overviews are available upon credential authentication.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="mt-16 grid max-w-3xl gap-px overflow-hidden border border-border bg-border md:grid-cols-2"
        >
          <Field label="FULL NAME" name="name" placeholder="Institutional contact" />
          <Field label="ORGANIZATION" name="org" placeholder="Entity name" />
          <Field label="EMAIL" name="email" type="email" placeholder="name@institution.com" />
          <Field label="CREDENTIAL ID" name="cred" placeholder="Optional" required={false} />

          <div className="bg-card p-6 md:col-span-2">
            <label className="font-display text-[0.62rem] tracking-luxe text-muted-foreground">
              INQUIRY
            </label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Describe the nature of your formal inquiry."
              className="mt-3 w-full resize-none bg-transparent font-serif text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between gap-4 bg-card p-6 md:col-span-2">
            <span className="font-display text-[0.6rem] tracking-[0.2em] text-muted-foreground">
              {submitted
                ? "RECEIVED — AWAITING CREDENTIAL AUTHENTICATION"
                : "TRANSMITTED UNDER STRICT CONFIDENTIALITY"}
            </span>
            <button
              type="submit"
              disabled={submitted}
              className="group relative inline-flex items-center gap-3 overflow-hidden border border-border px-7 py-3 font-display text-[0.68rem] tracking-luxe text-foreground transition-all duration-500 hover:border-accent disabled:opacity-50"
            >
              <span
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(120% 120% at 50% 50%, rgba(196,205,218,0.16) 0%, transparent 70%)",
                }}
              />
              <span className="relative z-10">{submitted ? "SUBMITTED" : "SUBMIT INQUIRY"}</span>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="bg-card p-6">
      <label className="font-display text-[0.62rem] tracking-luxe text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full bg-transparent font-serif text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
      />
    </div>
  );
}
