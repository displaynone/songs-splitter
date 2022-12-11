import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { FC, ReactNode } from 'react';

import { en, es } from 'make-plural/plurals';

i18n.loadLocaleData('es', { plurals: es });
i18n.loadLocaleData('en', { plurals: en });

export const Locales = ['es', 'en'] as const;
export type Local = typeof Locales[number];

/**
 * Load messages for requested locale and activate it.
 */
async function activateLocale(locale: Local) {
  console.log({ locale });
  const { messages } = await import(`../../locales/${locale}/messages.ts`);
  i18n.load(locale, messages);
  i18n.activate(locale);
}

const navigatorLanguage = navigator.language.replace(/\-.*$/, '');

activateLocale(
  Locales.includes(navigatorLanguage as Local)
    ? (navigatorLanguage as Local)
    : 'en',
);

const Localization: FC<{ children: ReactNode }> = ({ children }) => {
  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
};

export default Localization;
