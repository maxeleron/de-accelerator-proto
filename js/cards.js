window.IMPULS = window.IMPULS || {};

// data/p1-sein-haben.json — джерело правди. Копія тут, бо file:// не дає fetch.
window.IMPULS.cards = [
  {
    id: "sh-01",
    muster: "sein-haben",
    prompt: "ich ___",
    gloss: "я є",
    answer: "bin",
    options: ["bin", "bist", "ist", "sind"]
  },
  {
    id: "sh-02",
    muster: "sein-haben",
    prompt: "du ___",
    gloss: "ти є",
    answer: "bist",
    options: ["bin", "bist", "ist", "sind"]
  },
  {
    id: "sh-03",
    muster: "sein-haben",
    prompt: "er ___",
    gloss: "він є",
    answer: "ist",
    options: ["bin", "bist", "ist", "sind"]
  },
  {
    id: "sh-04",
    muster: "sein-haben",
    prompt: "wir ___",
    gloss: "ми є",
    answer: "sind",
    options: ["bin", "bist", "ist", "sind"]
  },
  {
    id: "sh-05",
    muster: "sein-haben",
    prompt: "ihr ___",
    gloss: "ви є",
    answer: "seid",
    options: ["bin", "bist", "seid", "sind"]
  },
  {
    id: "sh-06",
    muster: "sein-haben",
    prompt: "sie ___",
    gloss: "вони є",
    answer: "sind",
    options: ["bin", "bist", "ist", "sind"]
  },
  {
    id: "sh-07",
    muster: "sein-haben",
    prompt: "Sie ___",
    gloss: "Ви є",
    answer: "sind",
    options: ["bin", "bist", "ist", "sind"]
  },
  {
    id: "sh-08",
    muster: "sein-haben",
    prompt: "ich ___",
    gloss: "я маю",
    answer: "habe",
    options: ["habe", "hast", "hat", "haben"]
  },
  {
    id: "sh-09",
    muster: "sein-haben",
    prompt: "du ___",
    gloss: "ти маєш",
    answer: "hast",
    options: ["habe", "hast", "hat", "haben"]
  },
  {
    id: "sh-10",
    muster: "sein-haben",
    prompt: "er ___",
    gloss: "він має",
    answer: "hat",
    options: ["habe", "hast", "hat", "haben"]
  },
  {
    id: "sh-11",
    muster: "sein-haben",
    prompt: "wir ___",
    gloss: "ми маємо",
    answer: "haben",
    options: ["habe", "hast", "hat", "haben"]
  },
  {
    id: "sh-12",
    muster: "sein-haben",
    prompt: "ihr ___",
    gloss: "ви маєте",
    answer: "habt",
    options: ["habe", "hast", "habt", "haben"]
  },
  {
    id: "sh-13",
    muster: "sein-haben",
    prompt: "sie ___",
    gloss: "вони мають",
    answer: "haben",
    options: ["habe", "hast", "hat", "haben"]
  },
  {
    id: "sh-14",
    muster: "sein-haben",
    prompt: "Sie ___",
    gloss: "Ви маєте",
    answer: "haben",
    options: ["habe", "hast", "hat", "haben"]
  }
];

window.IMPULS.cards.forEach(function (card) {
  Object.freeze(card.options);
  Object.freeze(card);
});
Object.freeze(window.IMPULS.cards);

// data/p2-endings.json — джерело правди. Копія тут, бо file:// не дає fetch.
window.IMPULS.cardsP2 = [
  {
    id: "en-01",
    muster: "endings",
    prompt: "ich ___ (machen)",
    gloss: "я роблю",
    answer: "mache",
    options: ["mache", "machst", "macht", "machen"]
  },
  {
    id: "en-02",
    muster: "endings",
    prompt: "du ___ (machen)",
    gloss: "ти робиш",
    answer: "machst",
    options: ["mache", "machst", "macht", "machen"]
  },
  {
    id: "en-03",
    muster: "endings",
    prompt: "er ___ (machen)",
    gloss: "він робить",
    answer: "macht",
    options: ["mache", "machst", "macht", "machen"]
  },
  {
    id: "en-04",
    muster: "endings",
    prompt: "wir ___ (machen)",
    gloss: "ми робимо",
    answer: "machen",
    options: ["mache", "machst", "macht", "machen"]
  },
  {
    id: "en-05",
    muster: "endings",
    prompt: "ihr ___ (machen)",
    gloss: "ви робите",
    answer: "macht",
    options: ["mache", "machst", "macht", "machen"]
  },
  {
    id: "en-06",
    muster: "endings",
    prompt: "sie ___ (machen)",
    gloss: "вони роблять",
    answer: "machen",
    options: ["mache", "machst", "macht", "machen"]
  },
  {
    id: "en-07",
    muster: "endings",
    prompt: "ich ___ (lernen)",
    gloss: "я вчу",
    answer: "lerne",
    options: ["lerne", "lernst", "lernt", "lernen"]
  },
  {
    id: "en-08",
    muster: "endings",
    prompt: "du ___ (lernen)",
    gloss: "ти вчиш",
    answer: "lernst",
    options: ["lerne", "lernst", "lernt", "lernen"]
  },
  {
    id: "en-09",
    muster: "endings",
    prompt: "er ___ (lernen)",
    gloss: "він вчить",
    answer: "lernt",
    options: ["lerne", "lernst", "lernt", "lernen"]
  },
  {
    id: "en-10",
    muster: "endings",
    prompt: "wir ___ (lernen)",
    gloss: "ми вчимо",
    answer: "lernen",
    options: ["lerne", "lernst", "lernt", "lernen"]
  },
  {
    id: "en-11",
    muster: "endings",
    prompt: "ihr ___ (lernen)",
    gloss: "ви вчите",
    answer: "lernt",
    options: ["lerne", "lernst", "lernt", "lernen"]
  },
  {
    id: "en-12",
    muster: "endings",
    prompt: "sie ___ (lernen)",
    gloss: "вони вчать",
    answer: "lernen",
    options: ["lerne", "lernst", "lernt", "lernen"]
  },
  {
    id: "en-13",
    muster: "endings",
    prompt: "ich ___ (wohnen)",
    gloss: "я живу",
    answer: "wohne",
    options: ["wohne", "wohnst", "wohnt", "wohnen"]
  },
  {
    id: "en-14",
    muster: "endings",
    prompt: "du ___ (wohnen)",
    gloss: "ти живеш",
    answer: "wohnst",
    options: ["wohne", "wohnst", "wohnt", "wohnen"]
  },
  {
    id: "en-15",
    muster: "endings",
    prompt: "er ___ (wohnen)",
    gloss: "він живе",
    answer: "wohnt",
    options: ["wohne", "wohnst", "wohnt", "wohnen"]
  },
  {
    id: "en-16",
    muster: "endings",
    prompt: "wir ___ (wohnen)",
    gloss: "ми живемо",
    answer: "wohnen",
    options: ["wohne", "wohnst", "wohnt", "wohnen"]
  },
  {
    id: "en-17",
    muster: "endings",
    prompt: "ihr ___ (wohnen)",
    gloss: "ви живете",
    answer: "wohnt",
    options: ["wohne", "wohnst", "wohnt", "wohnen"]
  },
  {
    id: "en-18",
    muster: "endings",
    prompt: "sie ___ (wohnen)",
    gloss: "вони живуть",
    answer: "wohnen",
    options: ["wohne", "wohnst", "wohnt", "wohnen"]
  }
];

window.IMPULS.cardsP2.forEach(function (card) {
  Object.freeze(card.options);
  Object.freeze(card);
});
Object.freeze(window.IMPULS.cardsP2);

// data/p3-articles.json — джерело правди. Копія тут, бо file:// не дає fetch.
window.IMPULS.cardsP3 = [
  {
    id: "ar-01",
    muster: "nominativ",
    prompt: "___ Tisch",
    gloss: "стіл",
    answer: "der",
    options: ["der", "die", "das"]
  },
  {
    id: "ar-02",
    muster: "nominativ",
    prompt: "___ Lampe",
    gloss: "лампа",
    answer: "die",
    options: ["der", "die", "das"]
  },
  {
    id: "ar-03",
    muster: "nominativ",
    prompt: "___ Buch",
    gloss: "книга",
    answer: "das",
    options: ["der", "die", "das"]
  },
  {
    id: "ar-04",
    muster: "nominativ",
    prompt: "___ Mann",
    gloss: "чоловік",
    answer: "der",
    options: ["der", "die", "das"]
  },
  {
    id: "ar-05",
    muster: "nominativ",
    prompt: "___ Frau",
    gloss: "жінка",
    answer: "die",
    options: ["der", "die", "das"]
  },
  {
    id: "ar-06",
    muster: "nominativ",
    prompt: "___ Kind",
    gloss: "дитина",
    answer: "das",
    options: ["der", "die", "das"]
  },
  {
    id: "ar-07",
    muster: "nominativ",
    prompt: "___ Stuhl",
    gloss: "стілець",
    answer: "der",
    options: ["der", "die", "das"]
  },
  {
    id: "ar-08",
    muster: "nominativ",
    prompt: "___ Tür",
    gloss: "двері",
    answer: "die",
    options: ["der", "die", "das"]
  },
  {
    id: "ar-09",
    muster: "nominativ",
    prompt: "___ Fenster",
    gloss: "вікно",
    answer: "das",
    options: ["der", "die", "das"]
  },
  {
    id: "ar-10",
    muster: "nominativ",
    prompt: "___ Hund",
    gloss: "собака",
    answer: "der",
    options: ["der", "die", "das"]
  },
  {
    id: "ar-11",
    muster: "nominativ",
    prompt: "___ Katze",
    gloss: "кішка",
    answer: "die",
    options: ["der", "die", "das"]
  },
  {
    id: "ar-12",
    muster: "nominativ",
    prompt: "___ Haus",
    gloss: "будинок",
    answer: "das",
    options: ["der", "die", "das"]
  }
];

window.IMPULS.cardsP3.forEach(function (card) {
  Object.freeze(card.options);
  Object.freeze(card);
});
Object.freeze(window.IMPULS.cardsP3);

// data/p4-akkusativ.json — джерело правди. Копія тут, бо file:// не дає fetch.
window.IMPULS.cardsP4 = [
  {
    id: "ak-01",
    muster: "akkusativ",
    prompt: "ich sehe ___ Tisch",
    gloss: "я бачу стіл",
    answer: "den",
    options: ["den", "die", "das"]
  },
  {
    id: "ak-02",
    muster: "akkusativ",
    prompt: "ich sehe ___ Lampe",
    gloss: "я бачу лампа",
    answer: "die",
    options: ["den", "die", "das"]
  },
  {
    id: "ak-03",
    muster: "akkusativ",
    prompt: "ich sehe ___ Buch",
    gloss: "я бачу книга",
    answer: "das",
    options: ["den", "die", "das"]
  },
  {
    id: "ak-04",
    muster: "akkusativ",
    prompt: "ich sehe ___ Mann",
    gloss: "я бачу чоловік",
    answer: "den",
    options: ["den", "die", "das"]
  },
  {
    id: "ak-05",
    muster: "akkusativ",
    prompt: "ich sehe ___ Frau",
    gloss: "я бачу жінка",
    answer: "die",
    options: ["den", "die", "das"]
  },
  {
    id: "ak-06",
    muster: "akkusativ",
    prompt: "ich sehe ___ Kind",
    gloss: "я бачу дитина",
    answer: "das",
    options: ["den", "die", "das"]
  },
  {
    id: "ak-07",
    muster: "akkusativ",
    prompt: "ich sehe ___ Stuhl",
    gloss: "я бачу стілець",
    answer: "den",
    options: ["den", "die", "das"]
  },
  {
    id: "ak-08",
    muster: "akkusativ",
    prompt: "ich sehe ___ Tür",
    gloss: "я бачу двері",
    answer: "die",
    options: ["den", "die", "das"]
  },
  {
    id: "ak-09",
    muster: "akkusativ",
    prompt: "ich sehe ___ Fenster",
    gloss: "я бачу вікно",
    answer: "das",
    options: ["den", "die", "das"]
  },
  {
    id: "ak-10",
    muster: "akkusativ",
    prompt: "ich sehe ___ Hund",
    gloss: "я бачу собака",
    answer: "den",
    options: ["den", "die", "das"]
  },
  {
    id: "ak-11",
    muster: "akkusativ",
    prompt: "ich sehe ___ Katze",
    gloss: "я бачу кішка",
    answer: "die",
    options: ["den", "die", "das"]
  },
  {
    id: "ak-12",
    muster: "akkusativ",
    prompt: "ich sehe ___ Haus",
    gloss: "я бачу будинок",
    answer: "das",
    options: ["den", "die", "das"]
  },
  {
    id: "ak-13",
    muster: "akkusativ",
    prompt: "ich sehe ___ Tisch, ein",
    gloss: "я бачу стіл, неозначений",
    answer: "einen",
    options: ["einen", "eine", "ein"]
  },
  {
    id: "ak-14",
    muster: "akkusativ",
    prompt: "ich sehe ___ Lampe, ein",
    gloss: "я бачу лампа, неозначений",
    answer: "eine",
    options: ["einen", "eine", "ein"]
  },
  {
    id: "ak-15",
    muster: "akkusativ",
    prompt: "ich sehe ___ Buch, ein",
    gloss: "я бачу книга, неозначений",
    answer: "ein",
    options: ["einen", "eine", "ein"]
  },
  {
    id: "ak-16",
    muster: "akkusativ",
    prompt: "ich sehe ___ Mann, ein",
    gloss: "я бачу чоловік, неозначений",
    answer: "einen",
    options: ["einen", "eine", "ein"]
  },
  {
    id: "ak-17",
    muster: "akkusativ",
    prompt: "ich sehe ___ Frau, ein",
    gloss: "я бачу жінка, неозначений",
    answer: "eine",
    options: ["einen", "eine", "ein"]
  },
  {
    id: "ak-18",
    muster: "akkusativ",
    prompt: "ich sehe ___ Kind, ein",
    gloss: "я бачу дитина, неозначений",
    answer: "ein",
    options: ["einen", "eine", "ein"]
  },
  {
    id: "ak-19",
    muster: "akkusativ",
    prompt: "ich sehe ___ Stuhl, ein",
    gloss: "я бачу стілець, неозначений",
    answer: "einen",
    options: ["einen", "eine", "ein"]
  },
  {
    id: "ak-20",
    muster: "akkusativ",
    prompt: "ich sehe ___ Tür, ein",
    gloss: "я бачу двері, неозначений",
    answer: "eine",
    options: ["einen", "eine", "ein"]
  },
  {
    id: "ak-21",
    muster: "akkusativ",
    prompt: "ich sehe ___ Fenster, ein",
    gloss: "я бачу вікно, неозначений",
    answer: "ein",
    options: ["einen", "eine", "ein"]
  },
  {
    id: "ak-22",
    muster: "akkusativ",
    prompt: "ich sehe ___ Hund, ein",
    gloss: "я бачу собака, неозначений",
    answer: "einen",
    options: ["einen", "eine", "ein"]
  },
  {
    id: "ak-23",
    muster: "akkusativ",
    prompt: "ich sehe ___ Katze, ein",
    gloss: "я бачу кішка, неозначений",
    answer: "eine",
    options: ["einen", "eine", "ein"]
  },
  {
    id: "ak-24",
    muster: "akkusativ",
    prompt: "ich sehe ___ Haus, ein",
    gloss: "я бачу будинок, неозначений",
    answer: "ein",
    options: ["einen", "eine", "ein"]
  }
];

window.IMPULS.cardsP4.forEach(function (card) {
  Object.freeze(card.options);
  Object.freeze(card);
});
Object.freeze(window.IMPULS.cardsP4);

window.IMPULS.loadCards = function () {
  const pack = window.IMPULS.state && window.IMPULS.state.pack;
  if (pack === "p2") {
    return window.IMPULS.cardsP2;
  }
  if (pack === "p3") {
    return window.IMPULS.cardsP3;
  }
  if (pack === "p4") {
    return window.IMPULS.cardsP4;
  }
  return window.IMPULS.cards;
};
