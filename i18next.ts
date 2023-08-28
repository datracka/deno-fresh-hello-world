import i18next from "https://deno.land/x/i18next@v23.4.6/index.js";
import i18nextMiddleware from "https://deno.land/x/i18next_http_middleware@v3.3.2/index.js";

i18next
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    debug: false,
    initImmediate: false,
    resources: {
      en: {
        translation: {
          home: {
            title: "Welcome To Fresh + i18next",
          },
        },
      },
      es: {
        translation: {
          home: {
            title: "Bienvenido a Fresh + i18next",
          },
        },
      },
    },
    fallbackLng: "en",
    preload: ["en", "es"],
  });

export const i18n = i18next;
export const middleware = i18nextMiddleware;
export const handle = i18nextMiddleware.handle(i18next);
