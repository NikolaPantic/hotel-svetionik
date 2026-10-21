import type { Lang } from "@/lib/routes";
import sr, { type Dict } from "./sr";
import en from "./en";

const dictionaries: Record<Lang, Dict> = { sr, en };

export const getDict = (lang: Lang): Dict => dictionaries[lang];
export type { Dict };
