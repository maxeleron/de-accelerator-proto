window.IMPULS = window.IMPULS || {};

const I18N = {
  uk: {
    "menu.round": "Раунд",
    "menu.start": "Почати раунд {pack}",
    "menu.startM1": "Почати раунд M1",
    "menu.setup": "Параметри прогону",
    "menu.save": "Зберегти",
    "menu.base": "База знань",
    "menu.pack": "Пакет",
    "menu.workshop": "Майстерня",
    "menu.collapse": "Згорнути",
    "menu.expand": "Розгорнути",
    "menu.settings": "Налаштування",
    "menu.window": "Часові межі (мс)",
    "menu.length": "Довжина",
    "workshop.verbs": "M1 Дієслова",
    "workshop.ear": "Слух",
    "workshop.text": "Текст",
    "window.off": "Без часових меж",
    "window.soft": "М’яко 2500 мс",
    "window.even": "Рівно 1800 мс",
    "window.hard": "Жорстко 1200 мс",
    "pack.p1": "P1 Дієслово sein / haben",
    "pack.p2": "P2 Особові закінчення",
    "pack.p3": "P3 Артикль називний",
    "pack.p4": "P4 Артикль знахідний",
    "pack.p5": "P5 Порядок V2",
    "pack.mix": "PX Усі пакети",
    "stats.median": "Медіана: {n} мс",
    "theme.light": "Світла тема",
    "theme.dark": "Темна тема",
    "round.abort": "Вийти з раунду",
    "round.repair": "Промахи",
    "settings.title": "Налаштування",
    "settings.back": "До меню",
    "settings.visual": "Візуал",
    "settings.layout": "Вигляд варіантів",
    "settings.list": "Список",
    "settings.table": "Таблиця",
    "settings.showKeys": "Номери клавіш на варіантах",
    "settings.showMedian": "Показувати медіану",
    "settings.audio": "Аудіо",
    "settings.uiSound": "Звуки інтерфейсу",
    "settings.speakForm": "Озвучувати форму",
    "settings.gameplay": "Геймплей",
    "settings.shuffle": "Перемішування варіантів відповідей",
    "settings.data": "Дані",
    "settings.clear": "Очистити прогрес",
    "settings.clearWarn": "Прогрес буде стерто",
    "settings.cancel": "Скасувати",
    "settings.wipe": "Стерти",
    "settings.lang": "Мова",
    "settings.uiLang": "Мова інтерфейсу",
    "settings.glossLang": "Мова перекладу",
    "lang.uk": "Українська",
    "lang.en": "English",
    "lang.de": "Deutsch",
    "lang.off": "Вимкнено",
    "base.title": "База знань",
    "base.drill": "Відпрацювати на швидкість",
    "base.group.verbs": "Дієслова",
    "base.group.nouns": "Іменники та артиклі",
    "base.group.sentence": "Будова речення",
    "base.group.rest": "Решта",
    "base.p1.title": "Sein und haben",
    "base.p1.note": "Це не переклад «є/маю» щоразу, а особа.",
    "base.p2.title": "Особові закінчення",
    "base.p2.note": "machen: e, st, t, en, t, en. Той самий рядок для lernen, wohnen.",
    "base.modals.title": "Модальні",
    "base.modals.note": "Особа на модальному, інфінітив у кінці.",
    "base.separable.title": "Відокремлювані",
    "base.separable.note": "Префікс у теперішньому йде в кінець.",
    "base.p3.title": "Артикль Nominativ",
    "base.p3.note": "der / die / das",
    "base.p4.title": "Akkusativ",
    "base.dative.title": "Датив",
    "base.dative.note": "Завжди датив після mit, von, zu, aus, nach, bei.",
    "base.plural.title": "Множина",
    "base.plural.note": "Артикль множини die, рід не зберігається.",
    "base.v2.title": "Порядок V2",
    "base.v2.note": "Дієслово в розповіді на другому місці.",
    "base.questions.title": "Питання",
    "base.questions.note": "Так/ні — дієслово перше; з питальним словом — дієслово друге.",
    "base.negation.title": "kein і nicht",
    "base.negation.note": "kein заперечує іменник, nicht — дієслово.",
    "base.pronouns.title": "Займенники",
    "base.pronouns.note": "Akkusativ і Dativ.",
    "base.possessive.title": "Присвійні",
    "base.possessive.note": "Як ein.",
    "base.time.title": "Час",
    "base.time.note": "Коли і о котрій.",
    "base.caption.nouns": "іменники",
    "base.caption.article": "артикль"
  },
  en: {
    "menu.round": "Round",
    "menu.start": "Start round {pack}",
    "menu.startM1": "Start round M1",
    "menu.setup": "Run settings",
    "menu.save": "Save",
    "menu.base": "Knowledge base",
    "menu.pack": "Pack",
    "menu.workshop": "Workshop",
    "menu.collapse": "Collapse",
    "menu.expand": "Expand",
    "menu.settings": "Settings",
    "menu.window": "Time limits (ms)",
    "menu.length": "Length",
    "workshop.verbs": "M1 Verbs",
    "workshop.ear": "Ear",
    "workshop.text": "Text",
    "window.off": "No time limit",
    "window.soft": "Soft 2500 ms",
    "window.even": "Even 1800 ms",
    "window.hard": "Hard 1200 ms",
    "pack.p1": "P1 Verb sein / haben",
    "pack.p2": "P2 Personal endings",
    "pack.p3": "P3 Nominative article",
    "pack.p4": "P4 Accusative article",
    "pack.p5": "P5 V2 order",
    "pack.mix": "PX All packs",
    "stats.median": "Median: {n} ms",
    "theme.light": "Light theme",
    "theme.dark": "Dark theme",
    "round.abort": "Leave round",
    "round.repair": "Misses",
    "settings.title": "Settings",
    "settings.back": "Back to menu",
    "settings.visual": "Visual",
    "settings.layout": "Option layout",
    "settings.list": "List",
    "settings.table": "Table",
    "settings.showKeys": "Key numbers on options",
    "settings.showMedian": "Show median",
    "settings.audio": "Audio",
    "settings.uiSound": "Interface sounds",
    "settings.speakForm": "Speak the form",
    "settings.gameplay": "Gameplay",
    "settings.shuffle": "Shuffle answer options",
    "settings.data": "Data",
    "settings.clear": "Clear progress",
    "settings.clearWarn": "Progress will be erased",
    "settings.cancel": "Cancel",
    "settings.wipe": "Erase",
    "settings.lang": "Language",
    "settings.uiLang": "Interface language",
    "settings.glossLang": "Translation language",
    "lang.uk": "Українська",
    "lang.en": "English",
    "lang.de": "Deutsch",
    "lang.off": "Off",
    "base.title": "Knowledge base",
    "base.drill": "Drill at speed",
    "base.group.verbs": "Verbs",
    "base.group.nouns": "Nouns and articles",
    "base.group.sentence": "Sentence structure",
    "base.group.rest": "Other",
    "base.p1.title": "Sein und haben",
    "base.p1.note": "This is person, not a translation of “am/have” each time.",
    "base.p2.title": "Personal endings",
    "base.p2.note": "machen: e, st, t, en, t, en. The same row for lernen, wohnen.",
    "base.modals.title": "Modals",
    "base.modals.note": "Person on the modal, infinitive at the end.",
    "base.separable.title": "Separable verbs",
    "base.separable.note": "In the present the prefix goes to the end.",
    "base.p3.title": "Nominative article",
    "base.p3.note": "der / die / das",
    "base.p4.title": "Akkusativ",
    "base.dative.title": "Dative",
    "base.dative.note": "Always dative after mit, von, zu, aus, nach, bei.",
    "base.plural.title": "Plural",
    "base.plural.note": "Plural article is die; gender is not kept.",
    "base.v2.title": "V2 order",
    "base.v2.note": "In a statement the verb is in second position.",
    "base.questions.title": "Questions",
    "base.questions.note": "Yes/no: verb first; with a question word: verb second.",
    "base.negation.title": "kein and nicht",
    "base.negation.note": "kein negates a noun, nicht a verb.",
    "base.pronouns.title": "Pronouns",
    "base.pronouns.note": "Accusative and dative.",
    "base.possessive.title": "Possessives",
    "base.possessive.note": "Like ein.",
    "base.time.title": "Time",
    "base.time.note": "When and at what time.",
    "base.caption.nouns": "nouns",
    "base.caption.article": "article"
  },
  de: {
    "menu.round": "Runde",
    "menu.start": "Runde {pack} starten",
    "menu.startM1": "Runde M1 starten",
    "menu.setup": "Rundeneinstellungen",
    "menu.save": "Speichern",
    "menu.base": "Wissensbasis",
    "menu.pack": "Paket",
    "menu.workshop": "Werkstatt",
    "menu.collapse": "Einklappen",
    "menu.expand": "Ausklappen",
    "menu.settings": "Einstellungen",
    "menu.window": "Zeitgrenzen (ms)",
    "menu.length": "Länge",
    "workshop.verbs": "M1 Verben",
    "workshop.ear": "Hören",
    "workshop.text": "Text",
    "window.off": "Ohne Zeitgrenze",
    "window.soft": "Sanft 2500 ms",
    "window.even": "Gleich 1800 ms",
    "window.hard": "Hart 1200 ms",
    "pack.p1": "P1 Verb sein / haben",
    "pack.p2": "P2 Personalendungen",
    "pack.p3": "P3 Artikel Nominativ",
    "pack.p4": "P4 Artikel Akkusativ",
    "pack.p5": "P5 V2-Stellung",
    "pack.mix": "PX Alle Pakete",
    "stats.median": "Median: {n} ms",
    "theme.light": "Helles Thema",
    "theme.dark": "Dunkles Thema",
    "round.abort": "Runde verlassen",
    "round.repair": "Fehler",
    "settings.title": "Einstellungen",
    "settings.back": "Zum Menü",
    "settings.visual": "Darstellung",
    "settings.layout": "Ansicht der Optionen",
    "settings.list": "Liste",
    "settings.table": "Tabelle",
    "settings.showKeys": "Tastennummern auf Optionen",
    "settings.showMedian": "Median anzeigen",
    "settings.audio": "Audio",
    "settings.uiSound": "Interface-Töne",
    "settings.speakForm": "Form vorsprechen",
    "settings.gameplay": "Spielablauf",
    "settings.shuffle": "Antwortoptionen mischen",
    "settings.data": "Daten",
    "settings.clear": "Fortschritt löschen",
    "settings.clearWarn": "Fortschritt wird gelöscht",
    "settings.cancel": "Abbrechen",
    "settings.wipe": "Löschen",
    "settings.lang": "Sprache",
    "settings.uiLang": "Sprache der Oberfläche",
    "settings.glossLang": "Übersetzungssprache",
    "lang.uk": "Українська",
    "lang.en": "English",
    "lang.de": "Deutsch",
    "lang.off": "Aus",
    "base.title": "Wissensbasis",
    "base.drill": "Im Tempo üben",
    "base.group.verbs": "Verben",
    "base.group.nouns": "Nomen und Artikel",
    "base.group.sentence": "Satzbau",
    "base.group.rest": "Weiteres",
    "base.p1.title": "Sein und haben",
    "base.p1.note": "Das ist die Person, nicht jedes Mal die Übersetzung von „bin/habe“.",
    "base.p2.title": "Personalendungen",
    "base.p2.note": "machen: e, st, t, en, t, en. Dieselbe Reihe für lernen, wohnen.",
    "base.modals.title": "Modalverben",
    "base.modals.note": "Person am Modalverb, Infinitiv am Ende.",
    "base.separable.title": "Trennbare Verben",
    "base.separable.note": "Im Präsens geht die Vorsilbe ans Ende.",
    "base.p3.title": "Artikel Nominativ",
    "base.p3.note": "der / die / das",
    "base.p4.title": "Akkusativ",
    "base.dative.title": "Dativ",
    "base.dative.note": "Nach mit, von, zu, aus, nach, bei immer Dativ.",
    "base.plural.title": "Plural",
    "base.plural.note": "Pluralartikel die, das Genus bleibt nicht.",
    "base.v2.title": "V2-Stellung",
    "base.v2.note": "In der Aussage steht das Verb an zweiter Stelle.",
    "base.questions.title": "Fragen",
    "base.questions.note": "Ja/nein: Verb zuerst; mit Fragewort: Verb an zweiter Stelle.",
    "base.negation.title": "kein und nicht",
    "base.negation.note": "kein verneint das Nomen, nicht das Verb.",
    "base.pronouns.title": "Pronomen",
    "base.pronouns.note": "Akkusativ und Dativ.",
    "base.possessive.title": "Possessivartikel",
    "base.possessive.note": "Wie ein.",
    "base.time.title": "Zeit",
    "base.time.note": "Wann und um wie viel Uhr.",
    "base.caption.nouns": "Nomen",
    "base.caption.article": "Artikel"
  }
};

const BASE_GROUP_KEY = {
  "Дієслова": "base.group.verbs",
  "Іменники та артиклі": "base.group.nouns",
  "Будова речення": "base.group.sentence",
  "Решта": "base.group.rest"
};

const BASE_CAPTION_KEY = {
  "іменники": "base.caption.nouns",
  "артикль": "base.caption.article"
};

const readUiLang = function () {
  const settings = window.IMPULS.settings || {};
  const lang = settings.uiLang;
  if (lang === "en" || lang === "de") {
    return lang;
  }
  return "uk";
};

const readGlossLang = function () {
  const settings = window.IMPULS.settings || {};
  const lang = settings.glossLang;
  if (lang === "en" || lang === "de" || lang === "off") {
    return lang;
  }
  return "uk";
};

window.IMPULS.t = function (key, vars) {
  const lang = readUiLang();
  const table = I18N[lang] || I18N.uk;
  let text = table[key];
  if (text == null) {
    text = I18N.uk[key];
  }
  if (text == null) {
    return key;
  }
  if (!vars) {
    return text;
  }
  return text.replace(/\{(\w+)\}/g, function (match, name) {
    if (vars[name] == null) {
      return "";
    }
    return String(vars[name]);
  });
};

window.IMPULS.uiLang = readUiLang;
window.IMPULS.glossLang = readGlossLang;

window.IMPULS.cardGloss = function (card) {
  const lang = readGlossLang();
  if (!card || lang === "off" || lang === "de") {
    return "";
  }
  if (lang === "en") {
    return card.glossEn || "";
  }
  return card.gloss || "";
};

window.IMPULS.exampleGloss = function (item) {
  const lang = readGlossLang();
  if (!item || typeof item !== "object" || lang === "off" || lang === "de") {
    return "";
  }
  if (lang === "en") {
    return item.en || "";
  }
  return item.uk || "";
};

window.IMPULS.baseGroup = function (group) {
  const key = BASE_GROUP_KEY[group];
  if (!key) {
    return group || "";
  }
  return window.IMPULS.t(key);
};

window.IMPULS.baseTitle = function (section) {
  if (!section) {
    return "";
  }
  const key = "base." + section.id + ".title";
  if (I18N.uk[key]) {
    return window.IMPULS.t(key);
  }
  return section.title || "";
};

window.IMPULS.baseNote = function (section) {
  if (!section) {
    return "";
  }
  const key = "base." + section.id + ".note";
  if (I18N.uk[key]) {
    return window.IMPULS.t(key);
  }
  return section.note || "";
};

window.IMPULS.baseCaption = function (caption) {
  const key = BASE_CAPTION_KEY[caption];
  if (!key) {
    return caption || "";
  }
  return window.IMPULS.t(key);
};

window.IMPULS.applyCardGloss = function (card) {
  const el = document.getElementById("gloss");
  if (!el) {
    return;
  }
  const text = window.IMPULS.cardGloss(card);
  el.textContent = text;
  el.classList.toggle("is-hidden", !text);
};

const fillI18nNodes = function () {
  const nodes = document.querySelectorAll("[data-i18n]");
  for (let i = 0; i < nodes.length; i += 1) {
    const key = nodes[i].getAttribute("data-i18n");
    nodes[i].textContent = window.IMPULS.t(key);
  }
  const aria = document.querySelectorAll("[data-i18n-aria]");
  for (let i = 0; i < aria.length; i += 1) {
    const key = aria[i].getAttribute("data-i18n-aria");
    aria[i].setAttribute("aria-label", window.IMPULS.t(key));
  }
};

window.IMPULS.applyUiLang = function () {
  const lang = readUiLang();
  document.documentElement.setAttribute("lang", lang);
  fillI18nNodes();
  if (typeof window.IMPULS.applyTheme === "function") {
    window.IMPULS.applyTheme(document.documentElement.getAttribute("data-theme"));
  }
  if (typeof window.IMPULS.refreshChrome === "function") {
    window.IMPULS.refreshChrome();
  }
};

window.IMPULS.applyUiLang();
