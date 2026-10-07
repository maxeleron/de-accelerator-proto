window.IMPULS = window.IMPULS || {};

// data/p1-sein-haben.json — джерело правди. Копія тут, бо file:// не дає fetch.
window.IMPULS.cards = [
  {
    id: "sh-01",
    muster: "sein-haben",
    prompt: "я є",
    answer: "bin",
    options: ["bin", "bist", "ist", "sind"]
  },
  {
    id: "sh-02",
    muster: "sein-haben",
    prompt: "ти є",
    answer: "bist",
    options: ["bin", "bist", "ist", "sind"]
  },
  {
    id: "sh-03",
    muster: "sein-haben",
    prompt: "він є",
    answer: "ist",
    options: ["bin", "bist", "ist", "sind"]
  },
  {
    id: "sh-04",
    muster: "sein-haben",
    prompt: "ми є",
    answer: "sind",
    options: ["bin", "bist", "ist", "sind"]
  },
  {
    id: "sh-05",
    muster: "sein-haben",
    prompt: "ви є",
    answer: "seid",
    options: ["bin", "bist", "seid", "sind"]
  },
  {
    id: "sh-06",
    muster: "sein-haben",
    prompt: "вони є",
    answer: "sind",
    options: ["bin", "bist", "ist", "sind"]
  },
  {
    id: "sh-07",
    muster: "sein-haben",
    prompt: "Ви є",
    answer: "sind",
    options: ["bin", "bist", "ist", "sind"]
  },
  {
    id: "sh-08",
    muster: "sein-haben",
    prompt: "я маю",
    answer: "habe",
    options: ["habe", "hast", "hat", "haben"]
  },
  {
    id: "sh-09",
    muster: "sein-haben",
    prompt: "ти маю",
    answer: "hast",
    options: ["habe", "hast", "hat", "haben"]
  },
  {
    id: "sh-10",
    muster: "sein-haben",
    prompt: "він маю",
    answer: "hat",
    options: ["habe", "hast", "hat", "haben"]
  },
  {
    id: "sh-11",
    muster: "sein-haben",
    prompt: "ми маю",
    answer: "haben",
    options: ["habe", "hast", "hat", "haben"]
  },
  {
    id: "sh-12",
    muster: "sein-haben",
    prompt: "ви маю",
    answer: "habt",
    options: ["habe", "hast", "habt", "haben"]
  },
  {
    id: "sh-13",
    muster: "sein-haben",
    prompt: "вони маю",
    answer: "haben",
    options: ["habe", "hast", "hat", "haben"]
  },
  {
    id: "sh-14",
    muster: "sein-haben",
    prompt: "Ви маю",
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
    prompt: "я ___ (робити)",
    answer: "mache",
    options: ["mache", "machst", "macht", "machen"]
  },
  {
    id: "en-02",
    muster: "endings",
    prompt: "ти ___ (робити)",
    answer: "machst",
    options: ["mache", "machst", "macht", "machen"]
  },
  {
    id: "en-03",
    muster: "endings",
    prompt: "він ___ (робити)",
    answer: "macht",
    options: ["mache", "machst", "macht", "machen"]
  },
  {
    id: "en-04",
    muster: "endings",
    prompt: "ми ___ (робити)",
    answer: "machen",
    options: ["mache", "machst", "macht", "machen"]
  },
  {
    id: "en-05",
    muster: "endings",
    prompt: "ви ___ (робити)",
    answer: "macht",
    options: ["mache", "machst", "macht", "machen"]
  },
  {
    id: "en-06",
    muster: "endings",
    prompt: "вони ___ (робити)",
    answer: "machen",
    options: ["mache", "machst", "macht", "machen"]
  },
  {
    id: "en-07",
    muster: "endings",
    prompt: "я ___ (вчити)",
    answer: "lerne",
    options: ["lerne", "lernst", "lernt", "lernen"]
  },
  {
    id: "en-08",
    muster: "endings",
    prompt: "ти ___ (вчити)",
    answer: "lernst",
    options: ["lerne", "lernst", "lernt", "lernen"]
  },
  {
    id: "en-09",
    muster: "endings",
    prompt: "він ___ (вчити)",
    answer: "lernt",
    options: ["lerne", "lernst", "lernt", "lernen"]
  },
  {
    id: "en-10",
    muster: "endings",
    prompt: "ми ___ (вчити)",
    answer: "lernen",
    options: ["lerne", "lernst", "lernt", "lernen"]
  },
  {
    id: "en-11",
    muster: "endings",
    prompt: "ви ___ (вчити)",
    answer: "lernt",
    options: ["lerne", "lernst", "lernt", "lernen"]
  },
  {
    id: "en-12",
    muster: "endings",
    prompt: "вони ___ (вчити)",
    answer: "lernen",
    options: ["lerne", "lernst", "lernt", "lernen"]
  },
  {
    id: "en-13",
    muster: "endings",
    prompt: "я ___ (жити)",
    answer: "wohne",
    options: ["wohne", "wohnst", "wohnt", "wohnen"]
  },
  {
    id: "en-14",
    muster: "endings",
    prompt: "ти ___ (жити)",
    answer: "wohnst",
    options: ["wohne", "wohnst", "wohnt", "wohnen"]
  },
  {
    id: "en-15",
    muster: "endings",
    prompt: "він ___ (жити)",
    answer: "wohnt",
    options: ["wohne", "wohnst", "wohnt", "wohnen"]
  },
  {
    id: "en-16",
    muster: "endings",
    prompt: "ми ___ (жити)",
    answer: "wohnen",
    options: ["wohne", "wohnst", "wohnt", "wohnen"]
  },
  {
    id: "en-17",
    muster: "endings",
    prompt: "ви ___ (жити)",
    answer: "wohnt",
    options: ["wohne", "wohnst", "wohnt", "wohnen"]
  },
  {
    id: "en-18",
    muster: "endings",
    prompt: "вони ___ (жити)",
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
    prompt: "___ стіл",
    answer: "der",
    options: ["der", "die", "das"]
  },
  {
    id: "ar-02",
    muster: "nominativ",
    prompt: "___ лампа",
    answer: "die",
    options: ["der", "die", "das"]
  },
  {
    id: "ar-03",
    muster: "nominativ",
    prompt: "___ книга",
    answer: "das",
    options: ["der", "die", "das"]
  },
  {
    id: "ar-04",
    muster: "nominativ",
    prompt: "___ чоловік",
    answer: "der",
    options: ["der", "die", "das"]
  },
  {
    id: "ar-05",
    muster: "nominativ",
    prompt: "___ жінка",
    answer: "die",
    options: ["der", "die", "das"]
  },
  {
    id: "ar-06",
    muster: "nominativ",
    prompt: "___ дитина",
    answer: "das",
    options: ["der", "die", "das"]
  },
  {
    id: "ar-07",
    muster: "nominativ",
    prompt: "___ стілець",
    answer: "der",
    options: ["der", "die", "das"]
  },
  {
    id: "ar-08",
    muster: "nominativ",
    prompt: "___ двері",
    answer: "die",
    options: ["der", "die", "das"]
  },
  {
    id: "ar-09",
    muster: "nominativ",
    prompt: "___ вікно",
    answer: "das",
    options: ["der", "die", "das"]
  },
  {
    id: "ar-10",
    muster: "nominativ",
    prompt: "___ собака",
    answer: "der",
    options: ["der", "die", "das"]
  },
  {
    id: "ar-11",
    muster: "nominativ",
    prompt: "___ кішка",
    answer: "die",
    options: ["der", "die", "das"]
  },
  {
    id: "ar-12",
    muster: "nominativ",
    prompt: "___ будинок",
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
    prompt: "я бачу ___ стіл",
    answer: "den",
    options: ["den", "die", "das"]
  },
  {
    id: "ak-02",
    muster: "akkusativ",
    prompt: "я бачу ___ лампа",
    answer: "die",
    options: ["den", "die", "das"]
  },
  {
    id: "ak-03",
    muster: "akkusativ",
    prompt: "я бачу ___ книга",
    answer: "das",
    options: ["den", "die", "das"]
  },
  {
    id: "ak-04",
    muster: "akkusativ",
    prompt: "я бачу ___ чоловік",
    answer: "den",
    options: ["den", "die", "das"]
  },
  {
    id: "ak-05",
    muster: "akkusativ",
    prompt: "я бачу ___ жінка",
    answer: "die",
    options: ["den", "die", "das"]
  },
  {
    id: "ak-06",
    muster: "akkusativ",
    prompt: "я бачу ___ дитина",
    answer: "das",
    options: ["den", "die", "das"]
  },
  {
    id: "ak-07",
    muster: "akkusativ",
    prompt: "я бачу ___ стілець",
    answer: "den",
    options: ["den", "die", "das"]
  },
  {
    id: "ak-08",
    muster: "akkusativ",
    prompt: "я бачу ___ двері",
    answer: "die",
    options: ["den", "die", "das"]
  },
  {
    id: "ak-09",
    muster: "akkusativ",
    prompt: "я бачу ___ вікно",
    answer: "das",
    options: ["den", "die", "das"]
  },
  {
    id: "ak-10",
    muster: "akkusativ",
    prompt: "я бачу ___ собака",
    answer: "den",
    options: ["den", "die", "das"]
  },
  {
    id: "ak-11",
    muster: "akkusativ",
    prompt: "я бачу ___ кішка",
    answer: "die",
    options: ["den", "die", "das"]
  },
  {
    id: "ak-12",
    muster: "akkusativ",
    prompt: "я бачу ___ будинок",
    answer: "das",
    options: ["den", "die", "das"]
  },
  {
    id: "ak-13",
    muster: "akkusativ",
    prompt: "я бачу ___ стіл (неозначений)",
    answer: "einen",
    options: ["einen", "eine", "ein"]
  },
  {
    id: "ak-14",
    muster: "akkusativ",
    prompt: "я бачу ___ лампа (неозначений)",
    answer: "eine",
    options: ["einen", "eine", "ein"]
  },
  {
    id: "ak-15",
    muster: "akkusativ",
    prompt: "я бачу ___ книга (неозначений)",
    answer: "ein",
    options: ["einen", "eine", "ein"]
  },
  {
    id: "ak-16",
    muster: "akkusativ",
    prompt: "я бачу ___ чоловік (неозначений)",
    answer: "einen",
    options: ["einen", "eine", "ein"]
  },
  {
    id: "ak-17",
    muster: "akkusativ",
    prompt: "я бачу ___ жінка (неозначений)",
    answer: "eine",
    options: ["einen", "eine", "ein"]
  },
  {
    id: "ak-18",
    muster: "akkusativ",
    prompt: "я бачу ___ дитина (неозначений)",
    answer: "ein",
    options: ["einen", "eine", "ein"]
  },
  {
    id: "ak-19",
    muster: "akkusativ",
    prompt: "я бачу ___ стілець (неозначений)",
    answer: "einen",
    options: ["einen", "eine", "ein"]
  },
  {
    id: "ak-20",
    muster: "akkusativ",
    prompt: "я бачу ___ двері (неозначений)",
    answer: "eine",
    options: ["einen", "eine", "ein"]
  },
  {
    id: "ak-21",
    muster: "akkusativ",
    prompt: "я бачу ___ вікно (неозначений)",
    answer: "ein",
    options: ["einen", "eine", "ein"]
  },
  {
    id: "ak-22",
    muster: "akkusativ",
    prompt: "я бачу ___ собака (неозначений)",
    answer: "einen",
    options: ["einen", "eine", "ein"]
  },
  {
    id: "ak-23",
    muster: "akkusativ",
    prompt: "я бачу ___ кішка (неозначений)",
    answer: "eine",
    options: ["einen", "eine", "ein"]
  },
  {
    id: "ak-24",
    muster: "akkusativ",
    prompt: "я бачу ___ будинок (неозначений)",
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
