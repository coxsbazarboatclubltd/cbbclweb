import React from "react";

/** Value of the hidden honeypot field (filled in only by bots) for the form that fired `e`. */
export function honeypotValue(e: React.FormEvent): string {
  const field = (e.currentTarget as HTMLFormElement).elements.namedItem("company_website");
  return field instanceof HTMLInputElement ? field.value : "";
}

/**
 * Hidden spam trap plus the privacy notice shown above a form's submit button.
 * `purpose` says what the details are used for, e.g. "to assess your membership application".
 */
export default function FormSafeguards({ purpose, inbox, dark = false }: { purpose: string; inbox: string; dark?: boolean }) {
  return (
    <>
      {/* Bots fill every field; people never see this one. */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label>
          Company website
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>
      <p className={`text-[11px] font-sans font-light leading-relaxed ${dark ? "text-slate-300" : "text-text-body"}`}>
        We use these details only {purpose}. They are sent to {inbox} and you receive a copy by email.
        Fields marked * are required. See our{" "}
        <a href="/privacy-policy" target="_blank" rel="noopener" className={`underline underline-offset-2 ${dark ? "text-gold-light" : "text-navy hover:text-gold-dark"}`}>
          Privacy Policy
        </a>
        .
      </p>
    </>
  );
}
