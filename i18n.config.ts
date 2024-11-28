import ruJSON from "@/utils/i18n/ru.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ru',
  messages: {
    ru: ruJSON
  }
}))