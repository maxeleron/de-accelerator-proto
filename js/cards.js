window.IMPULS = window.IMPULS || {};

// data/p1-sein-haben.json — джерело правди. Копія тут, бо file:// не дає fetch.
window.IMPULS.cards = [
  {
    "id": "sh-01",
    "muster": "sein-haben",
    "prompt": "ich ___ müde",
    "gloss": "я втомлений",
    "answer": "bin",
    "options": [
      "bin",
      "bist",
      "ist",
      "sind"
    ]
  },
  {
    "id": "sh-02",
    "muster": "sein-haben",
    "prompt": "du ___ hier",
    "gloss": "ти тут",
    "answer": "bist",
    "options": [
      "bin",
      "bist",
      "ist",
      "sind"
    ]
  },
  {
    "id": "sh-03",
    "muster": "sein-haben",
    "prompt": "er ___ Student",
    "gloss": "він студент",
    "answer": "ist",
    "options": [
      "bin",
      "bist",
      "ist",
      "sind"
    ]
  },
  {
    "id": "sh-04",
    "muster": "sein-haben",
    "prompt": "wir ___ zu Hause",
    "gloss": "ми вдома",
    "answer": "sind",
    "options": [
      "bin",
      "bist",
      "ist",
      "sind"
    ]
  },
  {
    "id": "sh-05",
    "muster": "sein-haben",
    "prompt": "ihr ___ müde",
    "gloss": "ви втомлені",
    "answer": "seid",
    "options": [
      "bin",
      "bist",
      "seid",
      "sind"
    ]
  },
  {
    "id": "sh-06",
    "muster": "sein-haben",
    "prompt": "sie ___ hier",
    "gloss": "вони тут",
    "answer": "sind",
    "options": [
      "bin",
      "bist",
      "ist",
      "sind"
    ]
  },
  {
    "id": "sh-07",
    "muster": "sein-haben",
    "prompt": "Sie ___ Lehrer",
    "gloss": "Ви вчитель",
    "answer": "sind",
    "options": [
      "bin",
      "bist",
      "ist",
      "sind"
    ]
  },
  {
    "id": "sh-08",
    "muster": "sein-haben",
    "prompt": "ich ___ Zeit",
    "gloss": "я маю час",
    "answer": "habe",
    "options": [
      "habe",
      "hast",
      "hat",
      "haben"
    ]
  },
  {
    "id": "sh-09",
    "muster": "sein-haben",
    "prompt": "du ___ ein Auto",
    "gloss": "ти маєш авто",
    "answer": "hast",
    "options": [
      "habe",
      "hast",
      "hat",
      "haben"
    ]
  },
  {
    "id": "sh-10",
    "muster": "sein-haben",
    "prompt": "er ___ Zeit",
    "gloss": "він має час",
    "answer": "hat",
    "options": [
      "habe",
      "hast",
      "hat",
      "haben"
    ]
  },
  {
    "id": "sh-11",
    "muster": "sein-haben",
    "prompt": "wir ___ ein Buch",
    "gloss": "ми маємо книгу",
    "answer": "haben",
    "options": [
      "habe",
      "hast",
      "hat",
      "haben"
    ]
  },
  {
    "id": "sh-12",
    "muster": "sein-haben",
    "prompt": "ihr ___ Zeit",
    "gloss": "ви маєте час",
    "answer": "habt",
    "options": [
      "habe",
      "hast",
      "habt",
      "haben"
    ]
  },
  {
    "id": "sh-13",
    "muster": "sein-haben",
    "prompt": "sie ___ Kinder",
    "gloss": "вони мають дітей",
    "answer": "haben",
    "options": [
      "habe",
      "hast",
      "hat",
      "haben"
    ]
  },
  {
    "id": "sh-14",
    "muster": "sein-haben",
    "prompt": "Sie ___ Zeit",
    "gloss": "Ви маєте час",
    "answer": "haben",
    "options": [
      "habe",
      "hast",
      "hat",
      "haben"
    ]
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
    "id": "en-01",
    "muster": "endings",
    "prompt": "ich ___ Sport",
    "gloss": "я займаюсь спортом",
    "answer": "mache",
    "options": [
      "mache",
      "machst",
      "macht",
      "machen"
    ]
  },
  {
    "id": "en-02",
    "muster": "endings",
    "prompt": "du ___ Sport",
    "gloss": "ти займаєшся спортом",
    "answer": "machst",
    "options": [
      "mache",
      "machst",
      "macht",
      "machen"
    ]
  },
  {
    "id": "en-03",
    "muster": "endings",
    "prompt": "er ___ Sport",
    "gloss": "він займається спортом",
    "answer": "macht",
    "options": [
      "mache",
      "machst",
      "macht",
      "machen"
    ]
  },
  {
    "id": "en-04",
    "muster": "endings",
    "prompt": "wir ___ Sport",
    "gloss": "ми займаємось спортом",
    "answer": "machen",
    "options": [
      "mache",
      "machst",
      "macht",
      "machen"
    ]
  },
  {
    "id": "en-05",
    "muster": "endings",
    "prompt": "ihr ___ Sport",
    "gloss": "ви займаєтесь спортом",
    "answer": "macht",
    "options": [
      "mache",
      "machst",
      "macht",
      "machen"
    ]
  },
  {
    "id": "en-06",
    "muster": "endings",
    "prompt": "sie ___ Sport",
    "gloss": "вони займаються спортом",
    "answer": "machen",
    "options": [
      "mache",
      "machst",
      "macht",
      "machen"
    ]
  },
  {
    "id": "en-07",
    "muster": "endings",
    "prompt": "ich ___ Deutsch",
    "gloss": "я вчу німецьку",
    "answer": "lerne",
    "options": [
      "lerne",
      "lernst",
      "lernt",
      "lernen"
    ]
  },
  {
    "id": "en-08",
    "muster": "endings",
    "prompt": "du ___ Deutsch",
    "gloss": "ти вчиш німецьку",
    "answer": "lernst",
    "options": [
      "lerne",
      "lernst",
      "lernt",
      "lernen"
    ]
  },
  {
    "id": "en-09",
    "muster": "endings",
    "prompt": "er ___ Deutsch",
    "gloss": "він вчить німецьку",
    "answer": "lernt",
    "options": [
      "lerne",
      "lernst",
      "lernt",
      "lernen"
    ]
  },
  {
    "id": "en-10",
    "muster": "endings",
    "prompt": "wir ___ Deutsch",
    "gloss": "ми вчимо німецьку",
    "answer": "lernen",
    "options": [
      "lerne",
      "lernst",
      "lernt",
      "lernen"
    ]
  },
  {
    "id": "en-11",
    "muster": "endings",
    "prompt": "ihr ___ Deutsch",
    "gloss": "ви вчите німецьку",
    "answer": "lernt",
    "options": [
      "lerne",
      "lernst",
      "lernt",
      "lernen"
    ]
  },
  {
    "id": "en-12",
    "muster": "endings",
    "prompt": "sie ___ Deutsch",
    "gloss": "вони вчать німецьку",
    "answer": "lernen",
    "options": [
      "lerne",
      "lernst",
      "lernt",
      "lernen"
    ]
  },
  {
    "id": "en-13",
    "muster": "endings",
    "prompt": "ich ___ in Berlin",
    "gloss": "я живу в Берліні",
    "answer": "wohne",
    "options": [
      "wohne",
      "wohnst",
      "wohnt",
      "wohnen"
    ]
  },
  {
    "id": "en-14",
    "muster": "endings",
    "prompt": "du ___ in Berlin",
    "gloss": "ти живеш у Берліні",
    "answer": "wohnst",
    "options": [
      "wohne",
      "wohnst",
      "wohnt",
      "wohnen"
    ]
  },
  {
    "id": "en-15",
    "muster": "endings",
    "prompt": "er ___ in Berlin",
    "gloss": "він живе в Берліні",
    "answer": "wohnt",
    "options": [
      "wohne",
      "wohnst",
      "wohnt",
      "wohnen"
    ]
  },
  {
    "id": "en-16",
    "muster": "endings",
    "prompt": "wir ___ in Berlin",
    "gloss": "ми живемо в Берліні",
    "answer": "wohnen",
    "options": [
      "wohne",
      "wohnst",
      "wohnt",
      "wohnen"
    ]
  },
  {
    "id": "en-17",
    "muster": "endings",
    "prompt": "ihr ___ in Berlin",
    "gloss": "ви живете в Берліні",
    "answer": "wohnt",
    "options": [
      "wohne",
      "wohnst",
      "wohnt",
      "wohnen"
    ]
  },
  {
    "id": "en-18",
    "muster": "endings",
    "prompt": "sie ___ in Berlin",
    "gloss": "вони живуть у Берліні",
    "answer": "wohnen",
    "options": [
      "wohne",
      "wohnst",
      "wohnt",
      "wohnen"
    ]
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
    "id": "ar-01",
    "muster": "nominativ",
    "prompt": "___ Tisch",
    "gloss": "стіл",
    "answer": "der",
    "options": [
      "der",
      "die",
      "das"
    ]
  },
  {
    "id": "ar-02",
    "muster": "nominativ",
    "prompt": "___ Lampe",
    "gloss": "лампа",
    "answer": "die",
    "options": [
      "der",
      "die",
      "das"
    ]
  },
  {
    "id": "ar-03",
    "muster": "nominativ",
    "prompt": "___ Buch",
    "gloss": "книга",
    "answer": "das",
    "options": [
      "der",
      "die",
      "das"
    ]
  },
  {
    "id": "ar-04",
    "muster": "nominativ",
    "prompt": "___ Mann",
    "gloss": "чоловік",
    "answer": "der",
    "options": [
      "der",
      "die",
      "das"
    ]
  },
  {
    "id": "ar-05",
    "muster": "nominativ",
    "prompt": "___ Frau",
    "gloss": "жінка",
    "answer": "die",
    "options": [
      "der",
      "die",
      "das"
    ]
  },
  {
    "id": "ar-06",
    "muster": "nominativ",
    "prompt": "___ Kind",
    "gloss": "дитина",
    "answer": "das",
    "options": [
      "der",
      "die",
      "das"
    ]
  },
  {
    "id": "ar-07",
    "muster": "nominativ",
    "prompt": "___ Stuhl",
    "gloss": "стілець",
    "answer": "der",
    "options": [
      "der",
      "die",
      "das"
    ]
  },
  {
    "id": "ar-08",
    "muster": "nominativ",
    "prompt": "___ Tür",
    "gloss": "двері",
    "answer": "die",
    "options": [
      "der",
      "die",
      "das"
    ]
  },
  {
    "id": "ar-09",
    "muster": "nominativ",
    "prompt": "___ Fenster",
    "gloss": "вікно",
    "answer": "das",
    "options": [
      "der",
      "die",
      "das"
    ]
  },
  {
    "id": "ar-10",
    "muster": "nominativ",
    "prompt": "___ Hund",
    "gloss": "собака",
    "answer": "der",
    "options": [
      "der",
      "die",
      "das"
    ]
  },
  {
    "id": "ar-11",
    "muster": "nominativ",
    "prompt": "___ Katze",
    "gloss": "кішка",
    "answer": "die",
    "options": [
      "der",
      "die",
      "das"
    ]
  },
  {
    "id": "ar-12",
    "muster": "nominativ",
    "prompt": "___ Haus",
    "gloss": "будинок",
    "answer": "das",
    "options": [
      "der",
      "die",
      "das"
    ]
  },
  {
    "id": "ar-13",
    "muster": "nominativ",
    "prompt": "___ Apfel",
    "gloss": "яблуко",
    "answer": "der",
    "options": [
      "der",
      "die",
      "das"
    ]
  },
  {
    "id": "ar-14",
    "muster": "nominativ",
    "prompt": "___ Kaffee",
    "gloss": "кава",
    "answer": "der",
    "options": [
      "der",
      "die",
      "das"
    ]
  },
  {
    "id": "ar-15",
    "muster": "nominativ",
    "prompt": "___ Tasche",
    "gloss": "сумка",
    "answer": "die",
    "options": [
      "der",
      "die",
      "das"
    ]
  },
  {
    "id": "ar-16",
    "muster": "nominativ",
    "prompt": "___ Auto",
    "gloss": "авто",
    "answer": "das",
    "options": [
      "der",
      "die",
      "das"
    ]
  },
  {
    "id": "ar-17",
    "muster": "nominativ",
    "prompt": "___ Computer",
    "gloss": "комп’ютер",
    "answer": "der",
    "options": [
      "der",
      "die",
      "das"
    ]
  },
  {
    "id": "ar-18",
    "muster": "nominativ",
    "prompt": "___ Schule",
    "gloss": "школа",
    "answer": "die",
    "options": [
      "der",
      "die",
      "das"
    ]
  },
  {
    "id": "ar-19",
    "muster": "nominativ",
    "prompt": "___ Stift",
    "gloss": "олівець",
    "answer": "der",
    "options": [
      "der",
      "die",
      "das"
    ]
  },
  {
    "id": "ar-20",
    "muster": "nominativ",
    "prompt": "___ Zeitung",
    "gloss": "газета",
    "answer": "die",
    "options": [
      "der",
      "die",
      "das"
    ]
  },
  {
    "id": "ar-21",
    "muster": "nominativ",
    "prompt": "___ Handy",
    "gloss": "телефон",
    "answer": "das",
    "options": [
      "der",
      "die",
      "das"
    ]
  },
  {
    "id": "ar-22",
    "muster": "nominativ",
    "prompt": "___ Stadt",
    "gloss": "місто",
    "answer": "die",
    "options": [
      "der",
      "die",
      "das"
    ]
  },
  {
    "id": "ar-23",
    "muster": "nominativ",
    "prompt": "___ Wasser",
    "gloss": "вода",
    "answer": "das",
    "options": [
      "der",
      "die",
      "das"
    ]
  },
  {
    "id": "ar-24",
    "muster": "nominativ",
    "prompt": "___ Freund",
    "gloss": "друг",
    "answer": "der",
    "options": [
      "der",
      "die",
      "das"
    ]
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
    "id": "ak-01",
    "muster": "akkusativ",
    "prompt": "ich brauche ___ Tisch",
    "gloss": "мені потрібно стіл",
    "answer": "den",
    "options": [
      "den",
      "die",
      "das"
    ]
  },
  {
    "id": "ak-02",
    "muster": "akkusativ",
    "prompt": "er kauft ___ Lampe",
    "gloss": "він купує лампу",
    "answer": "die",
    "options": [
      "den",
      "die",
      "das"
    ]
  },
  {
    "id": "ak-03",
    "muster": "akkusativ",
    "prompt": "sie hat ___ Buch",
    "gloss": "вона має книгу",
    "answer": "das",
    "options": [
      "den",
      "die",
      "das"
    ]
  },
  {
    "id": "ak-04",
    "muster": "akkusativ",
    "prompt": "wir suchen ___ Mann",
    "gloss": "ми шукаємо чоловіка",
    "answer": "den",
    "options": [
      "den",
      "die",
      "das"
    ]
  },
  {
    "id": "ak-05",
    "muster": "akkusativ",
    "prompt": "ich sehe ___ Frau",
    "gloss": "я бачу жінку",
    "answer": "die",
    "options": [
      "den",
      "die",
      "das"
    ]
  },
  {
    "id": "ak-06",
    "muster": "akkusativ",
    "prompt": "er braucht ___ Kind",
    "gloss": "йому потрібно дитину",
    "answer": "das",
    "options": [
      "den",
      "die",
      "das"
    ]
  },
  {
    "id": "ak-07",
    "muster": "akkusativ",
    "prompt": "sie kauft ___ Stuhl",
    "gloss": "вона купує стілець",
    "answer": "den",
    "options": [
      "den",
      "die",
      "das"
    ]
  },
  {
    "id": "ak-08",
    "muster": "akkusativ",
    "prompt": "wir haben ___ Tür",
    "gloss": "ми маємо двері",
    "answer": "die",
    "options": [
      "den",
      "die",
      "das"
    ]
  },
  {
    "id": "ak-09",
    "muster": "akkusativ",
    "prompt": "ich suche ___ Fenster",
    "gloss": "я шукаю вікно",
    "answer": "das",
    "options": [
      "den",
      "die",
      "das"
    ]
  },
  {
    "id": "ak-10",
    "muster": "akkusativ",
    "prompt": "er sieht ___ Hund",
    "gloss": "він бачить собаку",
    "answer": "den",
    "options": [
      "den",
      "die",
      "das"
    ]
  },
  {
    "id": "ak-11",
    "muster": "akkusativ",
    "prompt": "sie braucht ___ Katze",
    "gloss": "їй потрібно кішку",
    "answer": "die",
    "options": [
      "den",
      "die",
      "das"
    ]
  },
  {
    "id": "ak-12",
    "muster": "akkusativ",
    "prompt": "wir kaufen ___ Haus",
    "gloss": "ми купуємо будинок",
    "answer": "das",
    "options": [
      "den",
      "die",
      "das"
    ]
  },
  {
    "id": "ak-13",
    "muster": "akkusativ",
    "prompt": "ich habe ___ Apfel",
    "gloss": "я маю яблуко",
    "answer": "den",
    "options": [
      "den",
      "die",
      "das"
    ]
  },
  {
    "id": "ak-14",
    "muster": "akkusativ",
    "prompt": "er sucht ___ Kaffee",
    "gloss": "він шукає каву",
    "answer": "den",
    "options": [
      "den",
      "die",
      "das"
    ]
  },
  {
    "id": "ak-15",
    "muster": "akkusativ",
    "prompt": "sie sieht ___ Tasche",
    "gloss": "вона бачить сумку",
    "answer": "die",
    "options": [
      "den",
      "die",
      "das"
    ]
  },
  {
    "id": "ak-16",
    "muster": "akkusativ",
    "prompt": "wir brauchen ___ Auto",
    "gloss": "нам потрібно авто",
    "answer": "das",
    "options": [
      "den",
      "die",
      "das"
    ]
  },
  {
    "id": "ak-17",
    "muster": "akkusativ",
    "prompt": "ich kaufe ___ Computer",
    "gloss": "я купую комп’ютер",
    "answer": "den",
    "options": [
      "den",
      "die",
      "das"
    ]
  },
  {
    "id": "ak-18",
    "muster": "akkusativ",
    "prompt": "er hat ___ Schule",
    "gloss": "він має школу",
    "answer": "die",
    "options": [
      "den",
      "die",
      "das"
    ]
  },
  {
    "id": "ak-19",
    "muster": "akkusativ",
    "prompt": "sie sucht ___ Stift",
    "gloss": "вона шукає олівець",
    "answer": "den",
    "options": [
      "den",
      "die",
      "das"
    ]
  },
  {
    "id": "ak-20",
    "muster": "akkusativ",
    "prompt": "wir sehen ___ Zeitung",
    "gloss": "ми бачимо газету",
    "answer": "die",
    "options": [
      "den",
      "die",
      "das"
    ]
  },
  {
    "id": "ak-21",
    "muster": "akkusativ",
    "prompt": "ich brauche ___ Handy",
    "gloss": "мені потрібно телефон",
    "answer": "das",
    "options": [
      "den",
      "die",
      "das"
    ]
  },
  {
    "id": "ak-22",
    "muster": "akkusativ",
    "prompt": "er kauft ___ Stadt",
    "gloss": "він купує місто",
    "answer": "die",
    "options": [
      "den",
      "die",
      "das"
    ]
  },
  {
    "id": "ak-23",
    "muster": "akkusativ",
    "prompt": "sie hat ___ Wasser",
    "gloss": "вона має воду",
    "answer": "das",
    "options": [
      "den",
      "die",
      "das"
    ]
  },
  {
    "id": "ak-24",
    "muster": "akkusativ",
    "prompt": "wir suchen ___ Freund",
    "gloss": "ми шукаємо друга",
    "answer": "den",
    "options": [
      "den",
      "die",
      "das"
    ]
  },
  {
    "id": "ak-25",
    "muster": "akkusativ",
    "prompt": "ich brauche ___ Tisch",
    "gloss": "мені потрібно стіл",
    "answer": "einen",
    "options": [
      "einen",
      "eine",
      "ein"
    ]
  },
  {
    "id": "ak-26",
    "muster": "akkusativ",
    "prompt": "er kauft ___ Lampe",
    "gloss": "він купує лампу",
    "answer": "eine",
    "options": [
      "einen",
      "eine",
      "ein"
    ]
  },
  {
    "id": "ak-27",
    "muster": "akkusativ",
    "prompt": "sie hat ___ Buch",
    "gloss": "вона має книгу",
    "answer": "ein",
    "options": [
      "einen",
      "eine",
      "ein"
    ]
  },
  {
    "id": "ak-28",
    "muster": "akkusativ",
    "prompt": "wir suchen ___ Mann",
    "gloss": "ми шукаємо чоловіка",
    "answer": "einen",
    "options": [
      "einen",
      "eine",
      "ein"
    ]
  },
  {
    "id": "ak-29",
    "muster": "akkusativ",
    "prompt": "ich sehe ___ Frau",
    "gloss": "я бачу жінку",
    "answer": "eine",
    "options": [
      "einen",
      "eine",
      "ein"
    ]
  },
  {
    "id": "ak-30",
    "muster": "akkusativ",
    "prompt": "er braucht ___ Kind",
    "gloss": "йому потрібно дитину",
    "answer": "ein",
    "options": [
      "einen",
      "eine",
      "ein"
    ]
  },
  {
    "id": "ak-31",
    "muster": "akkusativ",
    "prompt": "sie kauft ___ Stuhl",
    "gloss": "вона купує стілець",
    "answer": "einen",
    "options": [
      "einen",
      "eine",
      "ein"
    ]
  },
  {
    "id": "ak-32",
    "muster": "akkusativ",
    "prompt": "wir haben ___ Tür",
    "gloss": "ми маємо двері",
    "answer": "eine",
    "options": [
      "einen",
      "eine",
      "ein"
    ]
  },
  {
    "id": "ak-33",
    "muster": "akkusativ",
    "prompt": "ich suche ___ Fenster",
    "gloss": "я шукаю вікно",
    "answer": "ein",
    "options": [
      "einen",
      "eine",
      "ein"
    ]
  },
  {
    "id": "ak-34",
    "muster": "akkusativ",
    "prompt": "er sieht ___ Hund",
    "gloss": "він бачить собаку",
    "answer": "einen",
    "options": [
      "einen",
      "eine",
      "ein"
    ]
  },
  {
    "id": "ak-35",
    "muster": "akkusativ",
    "prompt": "sie braucht ___ Katze",
    "gloss": "їй потрібно кішку",
    "answer": "eine",
    "options": [
      "einen",
      "eine",
      "ein"
    ]
  },
  {
    "id": "ak-36",
    "muster": "akkusativ",
    "prompt": "wir kaufen ___ Haus",
    "gloss": "ми купуємо будинок",
    "answer": "ein",
    "options": [
      "einen",
      "eine",
      "ein"
    ]
  },
  {
    "id": "ak-37",
    "muster": "akkusativ",
    "prompt": "ich habe ___ Apfel",
    "gloss": "я маю яблуко",
    "answer": "einen",
    "options": [
      "einen",
      "eine",
      "ein"
    ]
  },
  {
    "id": "ak-38",
    "muster": "akkusativ",
    "prompt": "er sucht ___ Kaffee",
    "gloss": "він шукає каву",
    "answer": "einen",
    "options": [
      "einen",
      "eine",
      "ein"
    ]
  },
  {
    "id": "ak-39",
    "muster": "akkusativ",
    "prompt": "sie sieht ___ Tasche",
    "gloss": "вона бачить сумку",
    "answer": "eine",
    "options": [
      "einen",
      "eine",
      "ein"
    ]
  },
  {
    "id": "ak-40",
    "muster": "akkusativ",
    "prompt": "wir brauchen ___ Auto",
    "gloss": "нам потрібно авто",
    "answer": "ein",
    "options": [
      "einen",
      "eine",
      "ein"
    ]
  },
  {
    "id": "ak-41",
    "muster": "akkusativ",
    "prompt": "ich kaufe ___ Computer",
    "gloss": "я купую комп’ютер",
    "answer": "einen",
    "options": [
      "einen",
      "eine",
      "ein"
    ]
  },
  {
    "id": "ak-42",
    "muster": "akkusativ",
    "prompt": "er hat ___ Schule",
    "gloss": "він має школу",
    "answer": "eine",
    "options": [
      "einen",
      "eine",
      "ein"
    ]
  },
  {
    "id": "ak-43",
    "muster": "akkusativ",
    "prompt": "sie sucht ___ Stift",
    "gloss": "вона шукає олівець",
    "answer": "einen",
    "options": [
      "einen",
      "eine",
      "ein"
    ]
  },
  {
    "id": "ak-44",
    "muster": "akkusativ",
    "prompt": "wir sehen ___ Zeitung",
    "gloss": "ми бачимо газету",
    "answer": "eine",
    "options": [
      "einen",
      "eine",
      "ein"
    ]
  },
  {
    "id": "ak-45",
    "muster": "akkusativ",
    "prompt": "ich brauche ___ Handy",
    "gloss": "мені потрібно телефон",
    "answer": "ein",
    "options": [
      "einen",
      "eine",
      "ein"
    ]
  },
  {
    "id": "ak-46",
    "muster": "akkusativ",
    "prompt": "er kauft ___ Stadt",
    "gloss": "він купує місто",
    "answer": "eine",
    "options": [
      "einen",
      "eine",
      "ein"
    ]
  },
  {
    "id": "ak-47",
    "muster": "akkusativ",
    "prompt": "sie hat ___ Wasser",
    "gloss": "вона має воду",
    "answer": "ein",
    "options": [
      "einen",
      "eine",
      "ein"
    ]
  },
  {
    "id": "ak-48",
    "muster": "akkusativ",
    "prompt": "wir suchen ___ Freund",
    "gloss": "ми шукаємо друга",
    "answer": "einen",
    "options": [
      "einen",
      "eine",
      "ein"
    ]
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
  if (pack === "mix") {
    return window.IMPULS.cards.concat(window.IMPULS.cardsP2, window.IMPULS.cardsP3, window.IMPULS.cardsP4);
  }
  return window.IMPULS.cards;
};
