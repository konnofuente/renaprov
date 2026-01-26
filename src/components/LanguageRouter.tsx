import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SUPPORTED_LANGS = ["fr", "en"] as const;
const normalizeLang = (l: string | undefined): "fr" | "en" => {
  const base = (l || "fr").split("-")[0].toLowerCase();
  return SUPPORTED_LANGS.includes(base as "fr" | "en") ? (base as "fr" | "en") : "fr";
};

/** Paths that are valid as base routes (no lang suffix). Used for redirects. */
const VALID_BASE_PATHS = [
  "accueil",
  "about",
  "mission",
  "products",
  "maso",
  "renews",
  "contact",
  "service",
];

/** Detect legacy /:lang/... format: first segment is fr|en, rest is path. */
function isLegacyFormat(segments: string[]): boolean {
  if (segments.length < 2) return false;
  return SUPPORTED_LANGS.includes(segments[0] as "fr" | "en");
}

/** Convert legacy /en/products → /products/en. Handles nested paths like /fr/service/ora-foncier. */
function legacyToNewPath(path: string): string {
  const segments = path.split("/").filter(Boolean);
  if (!isLegacyFormat(segments)) return path;
  const [lang, ...rest] = segments;
  const base = "/" + rest.join("/");
  return `${base}/${lang}`;
}

/** Extract lang from new-format path (lang at end): /products/en → en, /en → en. */
function extractLangFromPath(path: string): "fr" | "en" | null {
  const segments = path.split("/").filter(Boolean);
  if (segments.length === 0) return null;
  const last = segments[segments.length - 1];
  return SUPPORTED_LANGS.includes(last as "fr" | "en") ? (last as "fr" | "en") : null;
}

/** Check if path has lang suffix (new format). */
function hasLangSuffix(path: string): boolean {
  return extractLangFromPath(path) !== null;
}

/** Base path without lang: /products/en → /products, /en → /. */
function basePathWithoutLang(path: string): string {
  const segments = path.split("/").filter(Boolean);
  if (segments.length <= 1) return "/";
  const maybeLang = segments[segments.length - 1];
  if (SUPPORTED_LANGS.includes(maybeLang as "fr" | "en")) {
    const rest = segments.slice(0, -1);
    return rest.length ? "/" + rest.join("/") : "/";
  }
  return path;
}

/** First segment of path (for legacy vs base-path checks). */
function firstSegment(path: string): string | null {
  const segments = path.split("/").filter(Boolean);
  return segments[0] ?? null;
}

interface LanguageRouterProps {
  children: React.ReactNode;
}

export const LanguageRouter: React.FC<LanguageRouterProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n: i18nInstance } = useTranslation();

  useEffect(() => {
    const path = location.pathname;
    const segments = path.split("/").filter(Boolean);
    const lang = normalizeLang(i18nInstance.language);

    // Root: / → redirect to /fr or /en
    if (path === "/" || path === "") {
      navigate(`/${lang}`, { replace: true });
      return;
    }

    // Legacy format /:lang/... → redirect to /.../:lang
    if (isLegacyFormat(segments)) {
      const newPath = legacyToNewPath(path);
      const search = location.search;
      const hash = location.hash;
      navigate(newPath + search + hash, { replace: true });
      return;
    }

    // New format: path ends with /fr or /en → sync i18n
    const urlLang = extractLangFromPath(path);
    if (urlLang) {
      if (normalizeLang(i18nInstance.language) !== urlLang) {
        i18nInstance.changeLanguage(urlLang);
      }
      return;
    }

    // Path without lang (e.g. /products, /about) → redirect to /.../fr or /.../en
    const first = firstSegment(path);
    const isBase = first && (VALID_BASE_PATHS.includes(first) || first === "");
    if (isBase && !hasLangSuffix(path)) {
      const base = path.endsWith("/") ? path.slice(0, -1) : path;
      const target = base === "" ? `/${lang}` : `${base}/${lang}`;
      navigate(target + location.search + location.hash, { replace: true });
    }
  }, [location.pathname, location.search, location.hash, navigate, i18nInstance]);

  return <>{children}</>;
};
