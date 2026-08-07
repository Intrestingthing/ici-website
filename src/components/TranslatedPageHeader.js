"use client";

import PageHeader from "@/components/PageHeader";
import { useLang } from "@/i18n/LanguageProvider";

// Thin client wrapper so server pages (which export metadata) can still show a
// translated PageHeader without converting the whole page to a client component.
export default function TranslatedPageHeader({ titleKey, subtitleKey, ...rest }) {
  const { t } = useLang();
  return (
    <PageHeader title={t(titleKey)} subtitle={subtitleKey ? t(subtitleKey) : undefined} {...rest} />
  );
}
