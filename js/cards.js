window.IMPULS = window.IMPULS || {};

// data/p1-sein-haben.json — джерело правди. Копія тут, бо file:// не дає fetch.
window.IMPULS.cards = [
  {
    "id": "sh-01",
    "muster": "sein-haben",
    "prompt": "ich ___ müde",
    "gloss": "я втомлений",
    "glossEn": "I am tired",
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
    "glossEn": "you are here",
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
    "glossEn": "he is a student",
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
    "glossEn": "we are at home",
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
    "glossEn": "you are tired",
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
    "glossEn": "they are here",
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
    "glossEn": "You are a teacher",
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
    "glossEn": "I have time",
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
    "glossEn": "you have a car",
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
    "glossEn": "he has time",
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
    "glossEn": "we have a book",
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
    "glossEn": "you have time",
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
    "glossEn": "they have children",
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
    "glossEn": "You have time",
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
    "glossEn": "I do sports",
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
    "glossEn": "you do sports",
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
    "glossEn": "he does sports",
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
    "glossEn": "we do sports",
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
    "glossEn": "you do sports",
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
    "glossEn": "they do sports",
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
    "glossEn": "I learn German",
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
    "glossEn": "you learn German",
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
    "glossEn": "he learns German",
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
    "glossEn": "we learn German",
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
    "glossEn": "you learn German",
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
    "glossEn": "they learn German",
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
    "glossEn": "I live in Berlin",
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
    "glossEn": "you live in Berlin",
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
    "glossEn": "he lives in Berlin",
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
    "glossEn": "we live in Berlin",
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
    "glossEn": "you live in Berlin",
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
    "glossEn": "they live in Berlin",
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
    "glossEn": "table",
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
    "glossEn": "lamp",
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
    "glossEn": "book",
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
    "glossEn": "man",
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
    "glossEn": "woman",
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
    "glossEn": "child",
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
    "glossEn": "chair",
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
    "glossEn": "door",
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
    "glossEn": "window",
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
    "glossEn": "dog",
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
    "glossEn": "cat",
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
    "glossEn": "house",
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
    "glossEn": "apple",
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
    "glossEn": "coffee",
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
    "glossEn": "bag",
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
    "glossEn": "car",
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
    "glossEn": "computer",
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
    "glossEn": "school",
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
    "glossEn": "pen",
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
    "glossEn": "newspaper",
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
    "glossEn": "phone",
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
    "glossEn": "city",
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
    "glossEn": "water",
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
    "glossEn": "friend",
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
    "glossEn": "I need a table",
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
    "glossEn": "he buys a lamp",
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
    "glossEn": "she has a book",
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
    "glossEn": "we look for a man",
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
    "glossEn": "I see a woman",
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
    "glossEn": "he needs a child",
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
    "glossEn": "she buys a chair",
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
    "glossEn": "we have a door",
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
    "glossEn": "I look for a window",
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
    "glossEn": "he sees a dog",
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
    "glossEn": "she needs a cat",
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
    "glossEn": "we buy a house",
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
    "glossEn": "I have an apple",
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
    "glossEn": "he looks for coffee",
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
    "glossEn": "she sees a bag",
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
    "glossEn": "we need a car",
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
    "glossEn": "I buy a computer",
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
    "glossEn": "he has a school",
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
    "glossEn": "she looks for a pen",
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
    "glossEn": "we see a newspaper",
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
    "glossEn": "I need a phone",
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
    "glossEn": "he buys a city",
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
    "glossEn": "she has water",
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
    "glossEn": "we look for a friend",
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
    "glossEn": "I need a table",
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
    "glossEn": "he buys a lamp",
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
    "glossEn": "she has a book",
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
    "glossEn": "we look for a man",
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
    "glossEn": "I see a woman",
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
    "glossEn": "he needs a child",
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
    "glossEn": "she buys a chair",
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
    "glossEn": "we have a door",
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
    "glossEn": "I look for a window",
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
    "glossEn": "he sees a dog",
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
    "glossEn": "she needs a cat",
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
    "glossEn": "we buy a house",
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
    "glossEn": "I have an apple",
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
    "glossEn": "he looks for coffee",
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
    "glossEn": "she sees a bag",
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
    "glossEn": "we need a car",
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
    "glossEn": "I buy a computer",
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
    "glossEn": "he has a school",
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
    "glossEn": "she looks for a pen",
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
    "glossEn": "we see a newspaper",
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
    "glossEn": "I need a phone",
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
    "glossEn": "he buys a city",
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
    "glossEn": "she has water",
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
    "glossEn": "we look for a friend",
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

// data/p5-v2.json — джерело правди. Копія тут, бо file:// не дає fetch.
window.IMPULS.cardsP5 = [
  {
    "id": "v2-01",
    "muster": "v2",
    "prompt": "heute / nach Hause / gehen",
    "gloss": "сьогодні я йду додому",
    "glossEn": "today I am going home",
    "answer": "Heute gehe ich nach Hause.",
    "options": [
      "Heute gehe ich nach Hause.",
      "Gehe ich heute nach Hause.",
      "Heute ich nach Hause gehe."
    ]
  },
  {
    "id": "v2-02",
    "muster": "v2",
    "prompt": "morgen / Deutsch / lernen",
    "gloss": "завтра я вчу німецьку",
    "glossEn": "tomorrow I learn German",
    "answer": "Morgen lerne ich Deutsch.",
    "options": [
      "Morgen lerne ich Deutsch.",
      "Lerne ich morgen Deutsch.",
      "Morgen ich Deutsch lerne."
    ]
  },
  {
    "id": "v2-03",
    "muster": "v2",
    "prompt": "jetzt / hier / wohnen",
    "gloss": "зараз я живу тут",
    "glossEn": "now I live here",
    "answer": "Jetzt wohne ich hier.",
    "options": [
      "Jetzt wohne ich hier.",
      "Wohne ich jetzt hier.",
      "Jetzt ich hier wohne."
    ]
  },
  {
    "id": "v2-04",
    "muster": "v2",
    "prompt": "ich / den Tisch / sehen",
    "gloss": "я бачу стіл",
    "glossEn": "I see the table",
    "answer": "Ich sehe den Tisch.",
    "options": [
      "Ich sehe den Tisch.",
      "Sehe ich den Tisch.",
      "Ich den Tisch sehe."
    ]
  },
  {
    "id": "v2-05",
    "muster": "v2",
    "prompt": "ich / Zeit / haben",
    "gloss": "я маю час",
    "glossEn": "I have time",
    "answer": "Ich habe Zeit.",
    "options": [
      "Ich habe Zeit.",
      "Habe ich Zeit.",
      "Ich Zeit habe."
    ]
  },
  {
    "id": "v2-06",
    "muster": "v2",
    "prompt": "heute / Deutsch / lernen",
    "gloss": "сьогодні я вчу німецьку",
    "glossEn": "today I learn German",
    "answer": "Heute lerne ich Deutsch.",
    "options": [
      "Heute lerne ich Deutsch.",
      "Lerne ich heute Deutsch.",
      "Heute ich Deutsch lerne."
    ]
  },
  {
    "id": "v2-07",
    "muster": "v2",
    "prompt": "jetzt / nach Hause / gehen",
    "gloss": "зараз я йду додому",
    "glossEn": "now I am going home",
    "answer": "Jetzt gehe ich nach Hause.",
    "options": [
      "Jetzt gehe ich nach Hause.",
      "Gehe ich jetzt nach Hause.",
      "Jetzt ich nach Hause gehe."
    ]
  },
  {
    "id": "v2-08",
    "muster": "v2",
    "prompt": "ich / hier / wohnen",
    "gloss": "я живу тут",
    "glossEn": "I live here",
    "answer": "Ich wohne hier.",
    "options": [
      "Ich wohne hier.",
      "Wohne ich hier.",
      "Ich hier wohne."
    ]
  },
  {
    "id": "v2-09",
    "muster": "v2",
    "prompt": "morgen / nach Hause / gehen",
    "gloss": "завтра я йду додому",
    "glossEn": "tomorrow I am going home",
    "answer": "Morgen gehe ich nach Hause.",
    "options": [
      "Morgen gehe ich nach Hause.",
      "Gehe ich morgen nach Hause.",
      "Morgen ich nach Hause gehe."
    ]
  },
  {
    "id": "v2-10",
    "muster": "v2",
    "prompt": "ich / Deutsch / lernen",
    "gloss": "я вчу німецьку",
    "glossEn": "I learn German",
    "answer": "Ich lerne Deutsch.",
    "options": [
      "Ich lerne Deutsch.",
      "Lerne ich Deutsch.",
      "Ich Deutsch lerne."
    ]
  },
  {
    "id": "v2-11",
    "muster": "v2",
    "prompt": "heute / Zeit / haben",
    "gloss": "сьогодні я маю час",
    "glossEn": "today I have time",
    "answer": "Heute habe ich Zeit.",
    "options": [
      "Heute habe ich Zeit.",
      "Habe ich heute Zeit.",
      "Heute ich Zeit habe."
    ]
  },
  {
    "id": "v2-12",
    "muster": "v2",
    "prompt": "jetzt / den Tisch / sehen",
    "gloss": "зараз я бачу стіл",
    "glossEn": "now I see the table",
    "answer": "Jetzt sehe ich den Tisch.",
    "options": [
      "Jetzt sehe ich den Tisch.",
      "Sehe ich jetzt den Tisch.",
      "Jetzt ich den Tisch sehe."
    ]
  }
];

window.IMPULS.cardsP5.forEach(function (card) {
  Object.freeze(card.options);
  Object.freeze(card);
});
Object.freeze(window.IMPULS.cardsP5);

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
  if (pack === "p5") {
    return window.IMPULS.cardsP5;
  }
  if (pack === "mix") {
    return window.IMPULS.cards.concat(window.IMPULS.cardsP2, window.IMPULS.cardsP3, window.IMPULS.cardsP4, window.IMPULS.cardsP5);
  }
  return window.IMPULS.cards;
};
