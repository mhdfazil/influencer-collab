// Use type safe message keys with `next-intl`
type Translations = typeof import("./translations/en.json");
declare interface IntlMessages extends Translations {}
