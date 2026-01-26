import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SUPPORTED_LANGS = ["fr", "en"] as const;

/** Lang at end of URL: /products/en, /contact/fr, /en for home. Supports hash: /products#ora-section → /products/en#ora-section */
export function getLocalizedPath(path: string, lang: string): string {
  const [base, hash] = path.split("#");
  const clean = (base || "").replace(/\/$/, "") || "";
  if (!clean || clean === "/") return hash ? `/${lang}#${hash}` : `/${lang}`;
  const p = clean.startsWith("/") ? clean.slice(1) : clean;
  const localized = `/${p}/${lang}`;
  return hash ? `${localized}#${hash}` : localized;
}

/** Extract lang from path (lang at end): /products/en → en, /en → en. */
export function getLangFromPath(pathname: string): (typeof SUPPORTED_LANGS)[number] | null {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;
  const last = segments[segments.length - 1];
  return SUPPORTED_LANGS.includes(last as "fr" | "en") ? (last as "fr" | "en") : null;
}

/** Base path without lang suffix: /products/en → /products, /en → /, /service/ora-foncier/en → /service/ora-foncier */
export function pathWithoutLang(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length <= 1) return "/";
  const last = segments[segments.length - 1];
  if (SUPPORTED_LANGS.includes(last as "fr" | "en")) {
    const rest = segments.slice(0, -1);
    return rest.length ? "/" + rest.join("/") : "/";
  }
  return pathname;
}

/** Same route in another language (lang at end). Preserves path structure. */
export function pathWithNewLang(pathname: string, newLang: string): string {
  const base = pathWithoutLang(pathname);
  return base === "/" ? `/${newLang}` : `${base}/${newLang}`;
}

export { SUPPORTED_LANGS };
