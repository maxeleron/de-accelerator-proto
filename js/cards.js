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
    "prompt": "sie (Plural) ___ hier",
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
    "prompt": "sie (Plural) ___ Kinder",
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
    "prompt": "sie (Plural) ___ Sport",
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
    "prompt": "sie (Plural) ___ Deutsch",
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
    "prompt": "sie (Plural) ___ in Berlin",
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
    "glossEn": "I need the table",
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
    "glossEn": "he buys the lamp",
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
    "glossEn": "she has the book",
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
    "glossEn": "we look for the man",
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
    "glossEn": "I see the woman",
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
    "glossEn": "he needs the child",
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
    "glossEn": "she buys the chair",
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
    "glossEn": "we have the door",
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
    "glossEn": "I look for the window",
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
    "glossEn": "he sees the dog",
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
    "glossEn": "she needs the cat",
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
    "glossEn": "we buy the house",
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
    "glossEn": "I have the apple",
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
    "glossEn": "he looks for the coffee",
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
    "glossEn": "she sees the bag",
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
    "glossEn": "we need the car",
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
    "glossEn": "I buy the computer",
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
    "glossEn": "he has the school",
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
    "glossEn": "she looks for the pen",
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
    "glossEn": "we see the newspaper",
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
    "glossEn": "I need the phone",
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
    "glossEn": "he buys the city",
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
    "glossEn": "she has the water",
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
    "glossEn": "we look for the friend",
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
    "prompt": "ich / heute / nach Hause / gehen",
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
    "prompt": "ich / morgen / Deutsch / lernen",
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
    "prompt": "ich / jetzt / hier / wohnen",
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
    "prompt": "ich / heute / Deutsch / lernen",
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
    "prompt": "ich / jetzt / nach Hause / gehen",
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
    "prompt": "ich / morgen / nach Hause / gehen",
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
    "prompt": "ich / heute / Zeit / haben",
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
    "prompt": "ich / jetzt / den Tisch / sehen",
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

// data/verbs-regular.json — джерело правди. Копія тут, бо file:// не дає fetch.
window.IMPULS.verbsRegular = [
  {
    "infinitive": "machen",
    "gloss": "робити",
    "glossEn": "to do",
    "aux": "haben"
  },
  {
    "infinitive": "lernen",
    "gloss": "вчити",
    "glossEn": "to learn",
    "aux": "haben"
  },
  {
    "infinitive": "wohnen",
    "gloss": "мешкати",
    "glossEn": "to live",
    "aux": "haben"
  },
  {
    "infinitive": "arbeiten",
    "gloss": "працювати",
    "glossEn": "to work",
    "aux": "haben"
  },
  {
    "infinitive": "spielen",
    "gloss": "грати",
    "glossEn": "to play",
    "aux": "haben"
  },
  {
    "infinitive": "kaufen",
    "gloss": "купувати",
    "glossEn": "to buy",
    "aux": "haben"
  },
  {
    "infinitive": "brauchen",
    "gloss": "потребувати",
    "glossEn": "to need",
    "aux": "haben"
  },
  {
    "infinitive": "suchen",
    "gloss": "шукати",
    "glossEn": "to look for",
    "aux": "haben"
  },
  {
    "infinitive": "hören",
    "gloss": "чути",
    "glossEn": "to hear",
    "aux": "haben"
  },
  {
    "infinitive": "fragen",
    "gloss": "питати",
    "glossEn": "to ask",
    "aux": "haben"
  },
  {
    "infinitive": "sagen",
    "gloss": "казати",
    "glossEn": "to say",
    "aux": "haben"
  },
  {
    "infinitive": "antworten",
    "gloss": "відповідати",
    "glossEn": "to answer",
    "aux": "haben"
  },
  {
    "infinitive": "leben",
    "gloss": "жити",
    "glossEn": "to live",
    "aux": "haben"
  },
  {
    "infinitive": "lieben",
    "gloss": "любити",
    "glossEn": "to love",
    "aux": "haben"
  },
  {
    "infinitive": "kochen",
    "gloss": "готувати",
    "glossEn": "to cook",
    "aux": "haben"
  },
  {
    "infinitive": "öffnen",
    "gloss": "відкривати",
    "glossEn": "to open",
    "aux": "haben"
  },
  {
    "infinitive": "stellen",
    "gloss": "ставити",
    "glossEn": "to put",
    "aux": "haben"
  },
  {
    "infinitive": "legen",
    "gloss": "класти",
    "glossEn": "to lay",
    "aux": "haben"
  },
  {
    "infinitive": "holen",
    "gloss": "приносити",
    "glossEn": "to fetch",
    "aux": "haben"
  },
  {
    "infinitive": "warten",
    "gloss": "чекати",
    "glossEn": "to wait",
    "aux": "haben"
  },
  {
    "infinitive": "zeigen",
    "gloss": "показувати",
    "glossEn": "to show",
    "aux": "haben"
  },
  {
    "infinitive": "erzählen",
    "gloss": "розповідати",
    "glossEn": "to tell",
    "aux": "haben"
  },
  {
    "infinitive": "erklären",
    "gloss": "пояснювати",
    "glossEn": "to explain",
    "aux": "haben"
  },
  {
    "infinitive": "wiederholen",
    "gloss": "повторювати",
    "glossEn": "to repeat",
    "aux": "haben"
  },
  {
    "infinitive": "üben",
    "gloss": "практикувати",
    "glossEn": "to practice",
    "aux": "haben"
  },
  {
    "infinitive": "besuchen",
    "gloss": "відвідувати",
    "glossEn": "to visit",
    "aux": "haben"
  },
  {
    "infinitive": "benutzen",
    "gloss": "використовувати",
    "glossEn": "to use",
    "aux": "haben"
  },
  {
    "infinitive": "bestellen",
    "gloss": "замовляти",
    "glossEn": "to order",
    "aux": "haben"
  },
  {
    "infinitive": "reservieren",
    "gloss": "бронювати",
    "glossEn": "to reserve",
    "aux": "haben"
  },
  {
    "infinitive": "studieren",
    "gloss": "навчатися",
    "glossEn": "to study",
    "aux": "haben"
  },
  {
    "infinitive": "tanzen",
    "gloss": "танцювати",
    "glossEn": "to dance",
    "aux": "haben"
  },
  {
    "infinitive": "lachen",
    "gloss": "сміятися",
    "glossEn": "to laugh",
    "aux": "haben"
  },
  {
    "infinitive": "reisen",
    "gloss": "подорожувати",
    "glossEn": "to travel",
    "aux": "sein"
  },
  {
    "infinitive": "packen",
    "gloss": "пакувати",
    "glossEn": "to pack",
    "aux": "haben"
  },
  {
    "infinitive": "putzen",
    "gloss": "прибирати",
    "glossEn": "to clean",
    "aux": "haben"
  },
  {
    "infinitive": "frühstücken",
    "gloss": "снідати",
    "glossEn": "to have breakfast",
    "aux": "haben"
  },
  {
    "infinitive": "feiern",
    "gloss": "святкувати",
    "glossEn": "to celebrate",
    "aux": "haben"
  },
  {
    "infinitive": "danken",
    "gloss": "дякувати",
    "glossEn": "to thank",
    "aux": "haben"
  },
  {
    "infinitive": "glauben",
    "gloss": "вірити",
    "glossEn": "to believe",
    "aux": "haben"
  },
  {
    "infinitive": "meinen",
    "gloss": "вважати",
    "glossEn": "to mean",
    "aux": "haben"
  },
  {
    "infinitive": "planen",
    "gloss": "планувати",
    "glossEn": "to plan",
    "aux": "haben"
  },
  {
    "infinitive": "buchen",
    "gloss": "бронювати",
    "glossEn": "to book",
    "aux": "haben"
  },
  {
    "infinitive": "mieten",
    "gloss": "орендувати",
    "glossEn": "to rent",
    "aux": "haben"
  },
  {
    "infinitive": "schicken",
    "gloss": "надсилати",
    "glossEn": "to send",
    "aux": "haben"
  },
  {
    "infinitive": "klingeln",
    "gloss": "дзвонити",
    "glossEn": "to ring",
    "aux": "haben"
  },
  {
    "infinitive": "fehlen",
    "gloss": "бракувати",
    "glossEn": "to be missing",
    "aux": "haben"
  },
  {
    "infinitive": "gehören",
    "gloss": "належати",
    "glossEn": "to belong",
    "aux": "haben"
  },
  {
    "infinitive": "schmecken",
    "gloss": "смакувати",
    "glossEn": "to taste",
    "aux": "haben"
  },
  {
    "infinitive": "passieren",
    "gloss": "траплятися",
    "glossEn": "to happen",
    "aux": "sein"
  },
  {
    "infinitive": "dauern",
    "gloss": "тривати",
    "glossEn": "to last",
    "aux": "haben"
  }
];

const VERB_PERSONS = ["ich", "du", "er", "wir", "ihr", "sie"];
const VERB_TENSES = ["präsens", "präteritum", "perfekt", "futur"];
const VERB_TENSE_LABEL = {
  "präsens": "Präsens",
  "präteritum": "Präteritum",
  "perfekt": "Perfekt",
  "futur": "Futur"
};
const VERB_HABEN = {
  ich: "habe",
  du: "hast",
  er: "hat",
  wir: "haben",
  ihr: "habt",
  sie: "haben"
};
const VERB_SEIN = {
  ich: "bin",
  du: "bist",
  er: "ist",
  wir: "sind",
  ihr: "seid",
  sie: "sind"
};
const VERB_WERDEN = {
  ich: "werde",
  du: "wirst",
  er: "wird",
  wir: "werden",
  ihr: "werdet",
  sie: "werden"
};
const VERB_NO_GE = {
  besuchen: true,
  benutzen: true,
  bestellen: true,
  "erklären": true,
  "erzählen": true,
  wiederholen: true,
  "gehören": true,
  reservieren: true,
  studieren: true,
  passieren: true
};

const verbStem = function (inf) {
  if (inf.slice(-3) === "eln" || inf.slice(-3) === "ern") {
    return inf.slice(0, -1);
  }
  if (inf.slice(-2) === "en") {
    return inf.slice(0, -2);
  }
  return inf.slice(0, -1);
};

const verbNeedsE = function (stem) {
  if (/[dt]$/.test(stem)) {
    return true;
  }
  if (/[^aeiouäöülr][mn]$/.test(stem)) {
    return true;
  }
  return false;
};

const verbSibilant = function (stem) {
  return /(?:tz|ss|[sxzß])$/.test(stem);
};

const verbPresent = function (inf, person) {
  const stem = verbStem(inf);
  const e = verbNeedsE(stem);
  if (person === "ich") {
    return stem + "e";
  }
  if (person === "du") {
    if (verbSibilant(stem)) {
      return stem + "t";
    }
    return stem + (e ? "est" : "st");
  }
  if (person === "er") {
    return stem + (e ? "et" : "t");
  }
  if (person === "wir" || person === "sie") {
    return inf;
  }
  return stem + (e ? "et" : "t");
};

const verbPreterite = function (inf, person) {
  const stem = verbStem(inf);
  const te = (verbNeedsE(stem) ? "e" : "") + "te";
  if (person === "ich" || person === "er") {
    return stem + te;
  }
  if (person === "du") {
    return stem + te + "st";
  }
  if (person === "wir" || person === "sie") {
    return stem + te + "n";
  }
  return stem + te + "t";
};

const verbParticiple = function (inf) {
  const stem = verbStem(inf);
  const end = (verbNeedsE(stem) ? "e" : "") + "t";
  if (VERB_NO_GE[inf]) {
    return stem + end;
  }
  return "ge" + stem + end;
};

const verbAuxMap = function (aux) {
  return aux === "sein" ? VERB_SEIN : VERB_HABEN;
};

const verbFinite = function (verb, person, tense) {
  const inf = verb.infinitive;
  if (tense === "präsens") {
    return verbPresent(inf, person);
  }
  if (tense === "präteritum") {
    return verbPreterite(inf, person);
  }
  if (tense === "perfekt") {
    return verbAuxMap(verb.aux)[person];
  }
  return VERB_WERDEN[person];
};

const verbComplement = function (inf) {
  if (inf === "lernen" || inf === "üben" || inf === "studieren") {
    return "Deutsch";
  }
  return "hier";
};

const verbTail = function (verb, tense) {
  if (tense === "perfekt") {
    return verbParticiple(verb.infinitive);
  }
  if (tense === "futur") {
    return verb.infinitive;
  }
  return "";
};

const uniquePush = function (list, item, ban) {
  if (!item || item === ban) {
    return;
  }
  for (let i = 0; i < list.length; i += 1) {
    if (list[i] === item) {
      return;
    }
  }
  list.push(item);
};

const verbDistractors = function (verb, person, tense, answer) {
  const picked = [];
  if (tense === "perfekt" && verb.aux === "sein") {
    uniquePush(picked, VERB_HABEN[person], answer);
  }
  const pool = [];
  for (let i = 0; i < VERB_PERSONS.length; i += 1) {
    uniquePush(pool, verbFinite(verb, VERB_PERSONS[i], tense), answer);
  }
  for (let i = 0; i < VERB_TENSES.length; i += 1) {
    uniquePush(pool, verbFinite(verb, person, VERB_TENSES[i]), answer);
  }
  const shuffled = typeof window.IMPULS.shuffle === "function" ? window.IMPULS.shuffle(pool) : pool.slice();
  for (let i = 0; i < shuffled.length && picked.length < 3; i += 1) {
    uniquePush(picked, shuffled[i], answer);
  }
  return picked;
};

const makeVerbPrompt = function (verb, person, tense, clause, withNicht) {
  const inf = verb.infinitive;
  const comp = verbComplement(inf);
  const tail = verbTail(verb, tense);
  const tag = " (" + inf + ", " + VERB_TENSE_LABEL[tense] + ")";
  const after = (withNicht ? "nicht " : "") + comp + (tail ? " " + tail : "");
  if (clause === "question") {
    return "___ " + person + " " + after + tag;
  }
  return person + " ___ " + after + tag;
};

const makeVerbCard = function (verb, person, tense, clause, withNicht) {
  const answer = verbFinite(verb, person, tense);
  const distractors = verbDistractors(verb, person, tense, answer);
  if (distractors.length < 3) {
    return null;
  }
  const options = [answer, distractors[0], distractors[1], distractors[2]];
  const id = "wv-" + verb.infinitive + "-" + person + "-" + tense + "-" + clause + "-" + (withNicht ? "n" : "p");
  return {
    id: id,
    muster: "workshop-verbs",
    prompt: makeVerbPrompt(verb, person, tense, clause, withNicht),
    gloss: verb.gloss,
    glossEn: verb.glossEn,
    answer: answer,
    options: options
  };
};

// Картки збираються на старті раунду, не під час вікна.
window.IMPULS.buildVerbCards = function (count) {
  const verbs = window.IMPULS.verbsRegular || [];
  if (!verbs.length) {
    return [];
  }
  let n = typeof count === "number" && Number.isFinite(count) ? Math.floor(count) : 1;
  if (n < 1) {
    n = 1;
  }
  const max = verbs.length * VERB_PERSONS.length * VERB_TENSES.length * 4;
  if (n > max) {
    n = max;
  }
  const used = {};
  const cards = [];
  let guard = 0;
  while (cards.length < n && guard < n * 30) {
    guard += 1;
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const person = VERB_PERSONS[Math.floor(Math.random() * VERB_PERSONS.length)];
    const tense = VERB_TENSES[Math.floor(Math.random() * VERB_TENSES.length)];
    const clause = Math.random() < 0.5 ? "statement" : "question";
    const withNicht = Math.random() < 0.5;
    const key = verb.infinitive + "|" + person + "|" + tense + "|" + clause + "|" + (withNicht ? "n" : "p");
    if (used[key]) {
      continue;
    }
    const card = makeVerbCard(verb, person, tense, clause, withNicht);
    if (!card) {
      continue;
    }
    used[key] = true;
    cards.push(card);
  }
  return cards;
};

// data/irregular-verbs.json — джерело правди. Копія тут, бо file:// не дає fetch.
window.IMPULS.irregularVerbs = [
  {
    "id": "sein",
    "infinitive": "sein",
    "praeteritum": "war",
    "partizip2": "gewesen",
    "gloss": "бути",
    "glossEn": "to be",
    "type": "strong",
    "freq": 1
  },
  {
    "id": "haben",
    "infinitive": "haben",
    "praeteritum": "hatte",
    "partizip2": "gehabt",
    "gloss": "мати",
    "glossEn": "to have",
    "type": "mixed",
    "freq": 2
  },
  {
    "id": "werden",
    "infinitive": "werden",
    "praeteritum": "wurde",
    "partizip2": "geworden",
    "gloss": "ставати",
    "glossEn": "to become",
    "type": "strong",
    "freq": 3
  },
  {
    "id": "können",
    "infinitive": "können",
    "praeteritum": "konnte",
    "partizip2": "gekonnt",
    "gloss": "могти",
    "glossEn": "to be able to",
    "type": "mixed",
    "freq": 4
  },
  {
    "id": "müssen",
    "infinitive": "müssen",
    "praeteritum": "musste",
    "partizip2": "gemusst",
    "gloss": "мусити",
    "glossEn": "to have to",
    "type": "mixed",
    "freq": 5
  },
  {
    "id": "wollen",
    "infinitive": "wollen",
    "praeteritum": "wollte",
    "partizip2": "gewollt",
    "gloss": "хотіти",
    "glossEn": "to want",
    "type": "mixed",
    "freq": 6
  },
  {
    "id": "sollen",
    "infinitive": "sollen",
    "praeteritum": "sollte",
    "partizip2": "gesollt",
    "gloss": "мати обов'язок",
    "glossEn": "to be supposed to",
    "type": "mixed",
    "freq": 7
  },
  {
    "id": "dürfen",
    "infinitive": "dürfen",
    "praeteritum": "durfte",
    "partizip2": "gedurft",
    "gloss": "мати дозвіл",
    "glossEn": "to be allowed to",
    "type": "mixed",
    "freq": 8
  },
  {
    "id": "mögen",
    "infinitive": "mögen",
    "praeteritum": "mochte",
    "partizip2": "gemocht",
    "gloss": "любити",
    "glossEn": "to like",
    "type": "mixed",
    "freq": 9
  },
  {
    "id": "wissen",
    "infinitive": "wissen",
    "praeteritum": "wusste",
    "partizip2": "gewusst",
    "gloss": "знати факт",
    "glossEn": "to know a fact",
    "type": "mixed",
    "freq": 10
  },
  {
    "id": "gehen",
    "infinitive": "gehen",
    "praeteritum": "ging",
    "partizip2": "gegangen",
    "gloss": "йти",
    "glossEn": "to go",
    "type": "strong",
    "freq": 11
  },
  {
    "id": "kommen",
    "infinitive": "kommen",
    "praeteritum": "kam",
    "partizip2": "gekommen",
    "gloss": "приходити",
    "glossEn": "to come",
    "type": "strong",
    "freq": 12
  },
  {
    "id": "sehen",
    "infinitive": "sehen",
    "praeteritum": "sah",
    "partizip2": "gesehen",
    "gloss": "бачити",
    "glossEn": "to see",
    "type": "strong",
    "freq": 13
  },
  {
    "id": "geben",
    "infinitive": "geben",
    "praeteritum": "gab",
    "partizip2": "gegeben",
    "gloss": "давати",
    "glossEn": "to give",
    "type": "strong",
    "freq": 14
  },
  {
    "id": "nehmen",
    "infinitive": "nehmen",
    "praeteritum": "nahm",
    "partizip2": "genommen",
    "gloss": "брати",
    "glossEn": "to take",
    "type": "strong",
    "freq": 15
  },
  {
    "id": "finden",
    "infinitive": "finden",
    "praeteritum": "fand",
    "partizip2": "gefunden",
    "gloss": "знаходити",
    "glossEn": "to find",
    "type": "strong",
    "freq": 16
  },
  {
    "id": "denken",
    "infinitive": "denken",
    "praeteritum": "dachte",
    "partizip2": "gedacht",
    "gloss": "думати",
    "glossEn": "to think",
    "type": "mixed",
    "freq": 17
  },
  {
    "id": "tun",
    "infinitive": "tun",
    "praeteritum": "tat",
    "partizip2": "getan",
    "gloss": "робити",
    "glossEn": "to do",
    "type": "strong",
    "freq": 18
  },
  {
    "id": "stehen",
    "infinitive": "stehen",
    "praeteritum": "stand",
    "partizip2": "gestanden",
    "gloss": "стояти",
    "glossEn": "to stand",
    "type": "strong",
    "freq": 19
  },
  {
    "id": "liegen",
    "infinitive": "liegen",
    "praeteritum": "lag",
    "partizip2": "gelegen",
    "gloss": "лежати",
    "glossEn": "to lie",
    "type": "strong",
    "freq": 20
  },
  {
    "id": "halten",
    "infinitive": "halten",
    "praeteritum": "hielt",
    "partizip2": "gehalten",
    "gloss": "тримати",
    "glossEn": "to hold",
    "type": "strong",
    "freq": 21
  },
  {
    "id": "lassen",
    "infinitive": "lassen",
    "praeteritum": "ließ",
    "partizip2": "gelassen",
    "gloss": "залишати; дозволяти",
    "glossEn": "to leave; to let",
    "type": "strong",
    "freq": 22
  },
  {
    "id": "fahren",
    "infinitive": "fahren",
    "praeteritum": "fuhr",
    "partizip2": "gefahren",
    "gloss": "їхати",
    "glossEn": "to travel by vehicle",
    "type": "strong",
    "freq": 23
  },
  {
    "id": "sprechen",
    "infinitive": "sprechen",
    "praeteritum": "sprach",
    "partizip2": "gesprochen",
    "gloss": "говорити",
    "glossEn": "to speak",
    "type": "strong",
    "freq": 24
  },
  {
    "id": "essen",
    "infinitive": "essen",
    "praeteritum": "aß",
    "partizip2": "gegessen",
    "gloss": "їсти",
    "glossEn": "to eat",
    "type": "strong",
    "freq": 25
  },
  {
    "id": "trinken",
    "infinitive": "trinken",
    "praeteritum": "trank",
    "partizip2": "getrunken",
    "gloss": "пити",
    "glossEn": "to drink",
    "type": "strong",
    "freq": 26
  },
  {
    "id": "schlafen",
    "infinitive": "schlafen",
    "praeteritum": "schlief",
    "partizip2": "geschlafen",
    "gloss": "спати",
    "glossEn": "to sleep",
    "type": "strong",
    "freq": 27
  },
  {
    "id": "lesen",
    "infinitive": "lesen",
    "praeteritum": "las",
    "partizip2": "gelesen",
    "gloss": "читати",
    "glossEn": "to read",
    "type": "strong",
    "freq": 28
  },
  {
    "id": "schreiben",
    "infinitive": "schreiben",
    "praeteritum": "schrieb",
    "partizip2": "geschrieben",
    "gloss": "писати",
    "glossEn": "to write",
    "type": "strong",
    "freq": 29
  },
  {
    "id": "heißen",
    "infinitive": "heißen",
    "praeteritum": "hieß",
    "partizip2": "geheißen",
    "gloss": "називатися",
    "glossEn": "to be called",
    "type": "strong",
    "freq": 30
  },
  {
    "id": "bleiben",
    "infinitive": "bleiben",
    "praeteritum": "blieb",
    "partizip2": "geblieben",
    "gloss": "залишатися",
    "glossEn": "to stay",
    "type": "strong",
    "freq": 31
  },
  {
    "id": "bringen",
    "infinitive": "bringen",
    "praeteritum": "brachte",
    "partizip2": "gebracht",
    "gloss": "приносити",
    "glossEn": "to bring",
    "type": "mixed",
    "freq": 32
  },
  {
    "id": "kennen",
    "infinitive": "kennen",
    "praeteritum": "kannte",
    "partizip2": "gekannt",
    "gloss": "бути знайомим із",
    "glossEn": "to be familiar with",
    "type": "mixed",
    "freq": 33
  },
  {
    "id": "sitzen",
    "infinitive": "sitzen",
    "praeteritum": "saß",
    "partizip2": "gesessen",
    "gloss": "сидіти",
    "glossEn": "to sit",
    "type": "strong",
    "freq": 34
  },
  {
    "id": "laufen",
    "infinitive": "laufen",
    "praeteritum": "lief",
    "partizip2": "gelaufen",
    "gloss": "бігти",
    "glossEn": "to run",
    "type": "strong",
    "freq": 35
  },
  {
    "id": "verstehen",
    "infinitive": "verstehen",
    "praeteritum": "verstand",
    "partizip2": "verstanden",
    "gloss": "розуміти",
    "glossEn": "to understand",
    "type": "strong",
    "freq": 36
  },
  {
    "id": "bekommen",
    "infinitive": "bekommen",
    "praeteritum": "bekam",
    "partizip2": "bekommen",
    "gloss": "отримувати",
    "glossEn": "to receive",
    "type": "strong",
    "freq": 37
  },
  {
    "id": "helfen",
    "infinitive": "helfen",
    "praeteritum": "half",
    "partizip2": "geholfen",
    "gloss": "допомагати",
    "glossEn": "to help",
    "type": "strong",
    "freq": 38
  },
  {
    "id": "tragen",
    "infinitive": "tragen",
    "praeteritum": "trug",
    "partizip2": "getragen",
    "gloss": "нести; носити",
    "glossEn": "to carry; to wear",
    "type": "strong",
    "freq": 39
  },
  {
    "id": "treffen",
    "infinitive": "treffen",
    "praeteritum": "traf",
    "partizip2": "getroffen",
    "gloss": "зустрічати",
    "glossEn": "to meet",
    "type": "strong",
    "freq": 40
  },
  {
    "id": "beginnen",
    "infinitive": "beginnen",
    "praeteritum": "begann",
    "partizip2": "begonnen",
    "gloss": "починати",
    "glossEn": "to begin",
    "type": "strong",
    "freq": 41
  },
  {
    "id": "fallen",
    "infinitive": "fallen",
    "praeteritum": "fiel",
    "partizip2": "gefallen",
    "gloss": "падати",
    "glossEn": "to fall",
    "type": "strong",
    "freq": 42
  },
  {
    "id": "gewinnen",
    "infinitive": "gewinnen",
    "praeteritum": "gewann",
    "partizip2": "gewonnen",
    "gloss": "вигравати",
    "glossEn": "to win",
    "type": "strong",
    "freq": 43
  },
  {
    "id": "verlieren",
    "infinitive": "verlieren",
    "praeteritum": "verlor",
    "partizip2": "verloren",
    "gloss": "втрачати",
    "glossEn": "to lose",
    "type": "strong",
    "freq": 44
  },
  {
    "id": "ziehen",
    "infinitive": "ziehen",
    "praeteritum": "zog",
    "partizip2": "gezogen",
    "gloss": "тягнути",
    "glossEn": "to pull",
    "type": "strong",
    "freq": 45
  },
  {
    "id": "schließen",
    "infinitive": "schließen",
    "praeteritum": "schloss",
    "partizip2": "geschlossen",
    "gloss": "закривати",
    "glossEn": "to close",
    "type": "strong",
    "freq": 46
  },
  {
    "id": "steigen",
    "infinitive": "steigen",
    "praeteritum": "stieg",
    "partizip2": "gestiegen",
    "gloss": "підніматися",
    "glossEn": "to rise",
    "type": "strong",
    "freq": 47
  },
  {
    "id": "sterben",
    "infinitive": "sterben",
    "praeteritum": "starb",
    "partizip2": "gestorben",
    "gloss": "помирати",
    "glossEn": "to die",
    "type": "strong",
    "freq": 48
  },
  {
    "id": "vergessen",
    "infinitive": "vergessen",
    "praeteritum": "vergaß",
    "partizip2": "vergessen",
    "gloss": "забувати",
    "glossEn": "to forget",
    "type": "strong",
    "freq": 49
  },
  {
    "id": "nennen",
    "infinitive": "nennen",
    "praeteritum": "nannte",
    "partizip2": "genannt",
    "gloss": "називати",
    "glossEn": "to name",
    "type": "mixed",
    "freq": 50
  },
  {
    "id": "bieten",
    "infinitive": "bieten",
    "praeteritum": "bot",
    "partizip2": "geboten",
    "gloss": "пропонувати",
    "glossEn": "to offer",
    "type": "strong",
    "freq": 51
  },
  {
    "id": "bitten",
    "infinitive": "bitten",
    "praeteritum": "bat",
    "partizip2": "gebeten",
    "gloss": "просити",
    "glossEn": "to ask for",
    "type": "strong",
    "freq": 52
  },
  {
    "id": "gelten",
    "infinitive": "gelten",
    "praeteritum": "galt",
    "partizip2": "gegolten",
    "gloss": "бути чинним",
    "glossEn": "to be valid",
    "type": "strong",
    "freq": 53
  },
  {
    "id": "scheinen",
    "infinitive": "scheinen",
    "praeteritum": "schien",
    "partizip2": "geschienen",
    "gloss": "світити; здаватися",
    "glossEn": "to shine; to seem",
    "type": "strong",
    "freq": 54
  },
  {
    "id": "empfehlen",
    "infinitive": "empfehlen",
    "praeteritum": "empfahl",
    "partizip2": "empfohlen",
    "gloss": "рекомендувати",
    "glossEn": "to recommend",
    "type": "strong",
    "freq": 55
  },
  {
    "id": "entscheiden",
    "infinitive": "entscheiden",
    "praeteritum": "entschied",
    "partizip2": "entschieden",
    "gloss": "вирішувати",
    "glossEn": "to decide",
    "type": "strong",
    "freq": 56
  },
  {
    "id": "erhalten",
    "infinitive": "erhalten",
    "praeteritum": "erhielt",
    "partizip2": "erhalten",
    "gloss": "одержувати; зберігати",
    "glossEn": "to obtain; to preserve",
    "type": "strong",
    "freq": 57
  },
  {
    "id": "erfahren",
    "infinitive": "erfahren",
    "praeteritum": "erfuhr",
    "partizip2": "erfahren",
    "gloss": "дізнаватися",
    "glossEn": "to learn of",
    "type": "strong",
    "freq": 58
  },
  {
    "id": "entstehen",
    "infinitive": "entstehen",
    "praeteritum": "entstand",
    "partizip2": "entstanden",
    "gloss": "виникати",
    "glossEn": "to arise",
    "type": "strong",
    "freq": 59
  },
  {
    "id": "geschehen",
    "infinitive": "geschehen",
    "praeteritum": "geschah",
    "partizip2": "geschehen",
    "gloss": "траплятися",
    "glossEn": "to happen",
    "type": "strong",
    "freq": 60
  },
  {
    "id": "gefallen",
    "infinitive": "gefallen",
    "praeteritum": "gefiel",
    "partizip2": "gefallen",
    "gloss": "подобатися",
    "glossEn": "to please",
    "type": "strong",
    "freq": 61
  },
  {
    "id": "vergleichen",
    "infinitive": "vergleichen",
    "praeteritum": "verglich",
    "partizip2": "verglichen",
    "gloss": "порівнювати",
    "glossEn": "to compare",
    "type": "strong",
    "freq": 62
  },
  {
    "id": "vermeiden",
    "infinitive": "vermeiden",
    "praeteritum": "vermied",
    "partizip2": "vermieden",
    "gloss": "уникати",
    "glossEn": "to avoid",
    "type": "strong",
    "freq": 63
  },
  {
    "id": "verbinden",
    "infinitive": "verbinden",
    "praeteritum": "verband",
    "partizip2": "verbunden",
    "gloss": "з'єднувати",
    "glossEn": "to connect",
    "type": "strong",
    "freq": 64
  },
  {
    "id": "versprechen",
    "infinitive": "versprechen",
    "praeteritum": "versprach",
    "partizip2": "versprochen",
    "gloss": "обіцяти",
    "glossEn": "to promise",
    "type": "strong",
    "freq": 65
  },
  {
    "id": "verschwinden",
    "infinitive": "verschwinden",
    "praeteritum": "verschwand",
    "partizip2": "verschwunden",
    "gloss": "зникати",
    "glossEn": "to disappear",
    "type": "strong",
    "freq": 66
  },
  {
    "id": "verlassen",
    "infinitive": "verlassen",
    "praeteritum": "verließ",
    "partizip2": "verlassen",
    "gloss": "покидати",
    "glossEn": "to leave",
    "type": "strong",
    "freq": 67
  },
  {
    "id": "unternehmen",
    "infinitive": "unternehmen",
    "praeteritum": "unternahm",
    "partizip2": "unternommen",
    "gloss": "здійснювати",
    "glossEn": "to undertake",
    "type": "strong",
    "freq": 68
  },
  {
    "id": "übernehmen",
    "infinitive": "übernehmen",
    "praeteritum": "übernahm",
    "partizip2": "übernommen",
    "gloss": "перебирати на себе",
    "glossEn": "to take over",
    "type": "strong",
    "freq": 69
  },
  {
    "id": "beschreiben",
    "infinitive": "beschreiben",
    "praeteritum": "beschrieb",
    "partizip2": "beschrieben",
    "gloss": "описувати",
    "glossEn": "to describe",
    "type": "strong",
    "freq": 70
  },
  {
    "id": "bestehen",
    "infinitive": "bestehen",
    "praeteritum": "bestand",
    "partizip2": "bestanden",
    "gloss": "існувати; складати іспит",
    "glossEn": "to exist; to pass an exam",
    "type": "strong",
    "freq": 71
  },
  {
    "id": "besitzen",
    "infinitive": "besitzen",
    "praeteritum": "besaß",
    "partizip2": "besessen",
    "gloss": "володіти",
    "glossEn": "to possess",
    "type": "strong",
    "freq": 72
  },
  {
    "id": "beweisen",
    "infinitive": "beweisen",
    "praeteritum": "bewies",
    "partizip2": "bewiesen",
    "gloss": "доводити",
    "glossEn": "to prove",
    "type": "strong",
    "freq": 73
  },
  {
    "id": "erkennen",
    "infinitive": "erkennen",
    "praeteritum": "erkannte",
    "partizip2": "erkannt",
    "gloss": "впізнавати",
    "glossEn": "to recognize",
    "type": "mixed",
    "freq": 74
  },
  {
    "id": "rufen",
    "infinitive": "rufen",
    "praeteritum": "rief",
    "partizip2": "gerufen",
    "gloss": "кликати",
    "glossEn": "to call",
    "type": "strong",
    "freq": 75
  },
  {
    "id": "werfen",
    "infinitive": "werfen",
    "praeteritum": "warf",
    "partizip2": "geworfen",
    "gloss": "кидати",
    "glossEn": "to throw",
    "type": "strong",
    "freq": 76
  },
  {
    "id": "schlagen",
    "infinitive": "schlagen",
    "praeteritum": "schlug",
    "partizip2": "geschlagen",
    "gloss": "бити",
    "glossEn": "to hit",
    "type": "strong",
    "freq": 77
  },
  {
    "id": "springen",
    "infinitive": "springen",
    "praeteritum": "sprang",
    "partizip2": "gesprungen",
    "gloss": "стрибати",
    "glossEn": "to jump",
    "type": "strong",
    "freq": 78
  },
  {
    "id": "schwimmen",
    "infinitive": "schwimmen",
    "praeteritum": "schwamm",
    "partizip2": "geschwommen",
    "gloss": "плавати",
    "glossEn": "to swim",
    "type": "strong",
    "freq": 79
  },
  {
    "id": "singen",
    "infinitive": "singen",
    "praeteritum": "sang",
    "partizip2": "gesungen",
    "gloss": "співати",
    "glossEn": "to sing",
    "type": "strong",
    "freq": 80
  },
  {
    "id": "schneiden",
    "infinitive": "schneiden",
    "praeteritum": "schnitt",
    "partizip2": "geschnitten",
    "gloss": "різати",
    "glossEn": "to cut",
    "type": "strong",
    "freq": 81
  },
  {
    "id": "waschen",
    "infinitive": "waschen",
    "praeteritum": "wusch",
    "partizip2": "gewaschen",
    "gloss": "мити",
    "glossEn": "to wash",
    "type": "strong",
    "freq": 82
  },
  {
    "id": "wachsen",
    "infinitive": "wachsen",
    "praeteritum": "wuchs",
    "partizip2": "gewachsen",
    "gloss": "рости",
    "glossEn": "to grow",
    "type": "strong",
    "freq": 83
  },
  {
    "id": "fangen",
    "infinitive": "fangen",
    "praeteritum": "fing",
    "partizip2": "gefangen",
    "gloss": "ловити",
    "glossEn": "to catch",
    "type": "strong",
    "freq": 84
  },
  {
    "id": "brennen",
    "infinitive": "brennen",
    "praeteritum": "brannte",
    "partizip2": "gebrannt",
    "gloss": "горіти",
    "glossEn": "to burn",
    "type": "mixed",
    "freq": 85
  },
  {
    "id": "rennen",
    "infinitive": "rennen",
    "praeteritum": "rannte",
    "partizip2": "gerannt",
    "gloss": "бігти швидко",
    "glossEn": "to run fast",
    "type": "mixed",
    "freq": 86
  },
  {
    "id": "leiden",
    "infinitive": "leiden",
    "praeteritum": "litt",
    "partizip2": "gelitten",
    "gloss": "страждати",
    "glossEn": "to suffer",
    "type": "strong",
    "freq": 87
  },
  {
    "id": "leihen",
    "infinitive": "leihen",
    "praeteritum": "lieh",
    "partizip2": "geliehen",
    "gloss": "позичати",
    "glossEn": "to lend",
    "type": "strong",
    "freq": 88
  },
  {
    "id": "riechen",
    "infinitive": "riechen",
    "praeteritum": "roch",
    "partizip2": "gerochen",
    "gloss": "пахнути",
    "glossEn": "to smell",
    "type": "strong",
    "freq": 89
  },
  {
    "id": "fliegen",
    "infinitive": "fliegen",
    "praeteritum": "flog",
    "partizip2": "geflogen",
    "gloss": "літати",
    "glossEn": "to fly",
    "type": "strong",
    "freq": 90
  },
  {
    "id": "frieren",
    "infinitive": "frieren",
    "praeteritum": "fror",
    "partizip2": "gefroren",
    "gloss": "мерзнути",
    "glossEn": "to freeze",
    "type": "strong",
    "freq": 91
  },
  {
    "id": "schweigen",
    "infinitive": "schweigen",
    "praeteritum": "schwieg",
    "partizip2": "geschwiegen",
    "gloss": "мовчати",
    "glossEn": "to be silent",
    "type": "strong",
    "freq": 92
  },
  {
    "id": "lügen",
    "infinitive": "lügen",
    "praeteritum": "log",
    "partizip2": "gelogen",
    "gloss": "брехати",
    "glossEn": "to lie",
    "type": "strong",
    "freq": 93
  },
  {
    "id": "streiten",
    "infinitive": "streiten",
    "praeteritum": "stritt",
    "partizip2": "gestritten",
    "gloss": "сперечатися",
    "glossEn": "to argue",
    "type": "strong",
    "freq": 94
  },
  {
    "id": "treiben",
    "infinitive": "treiben",
    "praeteritum": "trieb",
    "partizip2": "getrieben",
    "gloss": "гнати",
    "glossEn": "to drive onward",
    "type": "strong",
    "freq": 95
  },
  {
    "id": "treten",
    "infinitive": "treten",
    "praeteritum": "trat",
    "partizip2": "getreten",
    "gloss": "ступати; копати ногою",
    "glossEn": "to step; to kick",
    "type": "strong",
    "freq": 96
  },
  {
    "id": "beißen",
    "infinitive": "beißen",
    "praeteritum": "biss",
    "partizip2": "gebissen",
    "gloss": "кусати",
    "glossEn": "to bite",
    "type": "strong",
    "freq": 97
  },
  {
    "id": "brechen",
    "infinitive": "brechen",
    "praeteritum": "brach",
    "partizip2": "gebrochen",
    "gloss": "ламати",
    "glossEn": "to break",
    "type": "strong",
    "freq": 98
  },
  {
    "id": "binden",
    "infinitive": "binden",
    "praeteritum": "band",
    "partizip2": "gebunden",
    "gloss": "зв'язувати",
    "glossEn": "to bind",
    "type": "strong",
    "freq": 99
  },
  {
    "id": "greifen",
    "infinitive": "greifen",
    "praeteritum": "griff",
    "partizip2": "gegriffen",
    "gloss": "хапати",
    "glossEn": "to grab",
    "type": "strong",
    "freq": 100
  },
  {
    "id": "heben",
    "infinitive": "heben",
    "praeteritum": "hob",
    "partizip2": "gehoben",
    "gloss": "піднімати",
    "glossEn": "to lift",
    "type": "strong",
    "freq": 101
  },
  {
    "id": "messen",
    "infinitive": "messen",
    "praeteritum": "maß",
    "partizip2": "gemessen",
    "gloss": "вимірювати",
    "glossEn": "to measure",
    "type": "strong",
    "freq": 102
  },
  {
    "id": "genießen",
    "infinitive": "genießen",
    "praeteritum": "genoss",
    "partizip2": "genossen",
    "gloss": "насолоджуватися",
    "glossEn": "to enjoy",
    "type": "strong",
    "freq": 103
  },
  {
    "id": "gießen",
    "infinitive": "gießen",
    "praeteritum": "goss",
    "partizip2": "gegossen",
    "gloss": "лити; поливати",
    "glossEn": "to pour; to water",
    "type": "strong",
    "freq": 104
  },
  {
    "id": "stehlen",
    "infinitive": "stehlen",
    "praeteritum": "stahl",
    "partizip2": "gestohlen",
    "gloss": "красти",
    "glossEn": "to steal",
    "type": "strong",
    "freq": 105
  },
  {
    "id": "stoßen",
    "infinitive": "stoßen",
    "praeteritum": "stieß",
    "partizip2": "gestoßen",
    "gloss": "штовхати",
    "glossEn": "to push",
    "type": "strong",
    "freq": 106
  },
  {
    "id": "schleichen",
    "infinitive": "schleichen",
    "praeteritum": "schlich",
    "partizip2": "geschlichen",
    "gloss": "крастися",
    "glossEn": "to sneak",
    "type": "strong",
    "freq": 107
  },
  {
    "id": "gelingen",
    "infinitive": "gelingen",
    "praeteritum": "gelang",
    "partizip2": "gelungen",
    "gloss": "вдаватися",
    "glossEn": "to succeed",
    "type": "strong",
    "freq": 108
  },
  {
    "id": "geraten",
    "infinitive": "geraten",
    "praeteritum": "geriet",
    "partizip2": "geraten",
    "gloss": "потрапляти",
    "glossEn": "to get into",
    "type": "strong",
    "freq": 109
  },
  {
    "id": "laden",
    "infinitive": "laden",
    "praeteritum": "lud",
    "partizip2": "geladen",
    "gloss": "вантажити",
    "glossEn": "to load",
    "type": "strong",
    "freq": 110
  },
  {
    "id": "schaffen",
    "infinitive": "schaffen",
    "praeteritum": "schuf",
    "partizip2": "geschaffen",
    "gloss": "створювати",
    "glossEn": "to create",
    "type": "strong",
    "freq": 111
  },
  {
    "id": "schieben",
    "infinitive": "schieben",
    "praeteritum": "schob",
    "partizip2": "geschoben",
    "gloss": "пересувати",
    "glossEn": "to slide",
    "type": "strong",
    "freq": 112
  },
  {
    "id": "schießen",
    "infinitive": "schießen",
    "praeteritum": "schoss",
    "partizip2": "geschossen",
    "gloss": "стріляти",
    "glossEn": "to shoot",
    "type": "strong",
    "freq": 113
  },
  {
    "id": "sinken",
    "infinitive": "sinken",
    "praeteritum": "sank",
    "partizip2": "gesunken",
    "gloss": "опускатися; тонути",
    "glossEn": "to sink",
    "type": "strong",
    "freq": 114
  },
  {
    "id": "zwingen",
    "infinitive": "zwingen",
    "praeteritum": "zwang",
    "partizip2": "gezwungen",
    "gloss": "змушувати",
    "glossEn": "to force",
    "type": "strong",
    "freq": 115
  },
  {
    "id": "fliehen",
    "infinitive": "fliehen",
    "praeteritum": "floh",
    "partizip2": "geflohen",
    "gloss": "тікати",
    "glossEn": "to flee",
    "type": "strong",
    "freq": 116
  },
  {
    "id": "fließen",
    "infinitive": "fließen",
    "praeteritum": "floss",
    "partizip2": "geflossen",
    "gloss": "текти",
    "glossEn": "to flow",
    "type": "strong",
    "freq": 117
  },
  {
    "id": "reiten",
    "infinitive": "reiten",
    "praeteritum": "ritt",
    "partizip2": "geritten",
    "gloss": "їхати верхи",
    "glossEn": "to ride a horse",
    "type": "strong",
    "freq": 118
  },
  {
    "id": "pfeifen",
    "infinitive": "pfeifen",
    "praeteritum": "pfiff",
    "partizip2": "gepfiffen",
    "gloss": "свистіти",
    "glossEn": "to whistle",
    "type": "strong",
    "freq": 119
  },
  {
    "id": "reißen",
    "infinitive": "reißen",
    "praeteritum": "riss",
    "partizip2": "gerissen",
    "gloss": "рвати",
    "glossEn": "to tear",
    "type": "strong",
    "freq": 120
  },
  {
    "id": "schwören",
    "infinitive": "schwören",
    "praeteritum": "schwor",
    "partizip2": "geschworen",
    "gloss": "присягатися",
    "glossEn": "to swear",
    "type": "strong",
    "freq": 121
  },
  {
    "id": "stechen",
    "infinitive": "stechen",
    "praeteritum": "stach",
    "partizip2": "gestochen",
    "gloss": "колоти",
    "glossEn": "to sting",
    "type": "strong",
    "freq": 122
  },
  {
    "id": "stinken",
    "infinitive": "stinken",
    "praeteritum": "stank",
    "partizip2": "gestunken",
    "gloss": "смердіти",
    "glossEn": "to stink",
    "type": "strong",
    "freq": 123
  },
  {
    "id": "wenden",
    "infinitive": "wenden",
    "praeteritum": "wandte",
    "partizip2": "gewandt",
    "gloss": "повертати",
    "glossEn": "to turn",
    "type": "mixed",
    "freq": 124
  },
  {
    "id": "senden",
    "infinitive": "senden",
    "praeteritum": "sandte",
    "partizip2": "gesandt",
    "gloss": "надсилати",
    "glossEn": "to send",
    "type": "mixed",
    "freq": 125
  },
  {
    "id": "schmelzen",
    "infinitive": "schmelzen",
    "praeteritum": "schmolz",
    "partizip2": "geschmolzen",
    "gloss": "танути",
    "glossEn": "to melt",
    "type": "strong",
    "freq": 126
  },
  {
    "id": "biegen",
    "infinitive": "biegen",
    "praeteritum": "bog",
    "partizip2": "gebogen",
    "gloss": "гнути",
    "glossEn": "to bend",
    "type": "strong",
    "freq": 127
  },
  {
    "id": "braten",
    "infinitive": "braten",
    "praeteritum": "briet",
    "partizip2": "gebraten",
    "gloss": "смажити",
    "glossEn": "to fry",
    "type": "strong",
    "freq": 128
  },
  {
    "id": "fressen",
    "infinitive": "fressen",
    "praeteritum": "fraß",
    "partizip2": "gefressen",
    "gloss": "їсти (про тварин)",
    "glossEn": "to eat (animals)",
    "type": "strong",
    "freq": 129
  },
  {
    "id": "hängen",
    "infinitive": "hängen",
    "praeteritum": "hing",
    "partizip2": "gehangen",
    "gloss": "висіти",
    "glossEn": "to hang",
    "type": "strong",
    "freq": 130
  },
  {
    "id": "bewegen",
    "infinitive": "bewegen",
    "praeteritum": "bewog",
    "partizip2": "bewogen",
    "gloss": "спонукати",
    "glossEn": "to induce",
    "type": "strong",
    "freq": 131
  },
  {
    "id": "verbieten",
    "infinitive": "verbieten",
    "praeteritum": "verbot",
    "partizip2": "verboten",
    "gloss": "забороняти",
    "glossEn": "to forbid",
    "type": "strong",
    "freq": 132
  },
  {
    "id": "verbringen",
    "infinitive": "verbringen",
    "praeteritum": "verbrachte",
    "partizip2": "verbracht",
    "gloss": "проводити час",
    "glossEn": "to spend time",
    "type": "mixed",
    "freq": 133
  },
  {
    "id": "verzeihen",
    "infinitive": "verzeihen",
    "praeteritum": "verzieh",
    "partizip2": "verziehen",
    "gloss": "пробачати",
    "glossEn": "to forgive",
    "type": "strong",
    "freq": 134
  },
  {
    "id": "betrügen",
    "infinitive": "betrügen",
    "praeteritum": "betrog",
    "partizip2": "betrogen",
    "gloss": "обманювати",
    "glossEn": "to deceive",
    "type": "strong",
    "freq": 135
  },
  {
    "id": "erfinden",
    "infinitive": "erfinden",
    "praeteritum": "erfand",
    "partizip2": "erfunden",
    "gloss": "винаходити",
    "glossEn": "to invent",
    "type": "strong",
    "freq": 136
  },
  {
    "id": "enthalten",
    "infinitive": "enthalten",
    "praeteritum": "enthielt",
    "partizip2": "enthalten",
    "gloss": "містити",
    "glossEn": "to contain",
    "type": "strong",
    "freq": 137
  },
  {
    "id": "entlassen",
    "infinitive": "entlassen",
    "praeteritum": "entließ",
    "partizip2": "entlassen",
    "gloss": "звільняти",
    "glossEn": "to dismiss",
    "type": "strong",
    "freq": 138
  },
  {
    "id": "erschrecken",
    "infinitive": "erschrecken",
    "praeteritum": "erschrak",
    "partizip2": "erschrocken",
    "gloss": "лякатися",
    "glossEn": "to get frightened",
    "type": "strong",
    "freq": 139
  },
  {
    "id": "erziehen",
    "infinitive": "erziehen",
    "praeteritum": "erzog",
    "partizip2": "erzogen",
    "gloss": "виховувати",
    "glossEn": "to bring up",
    "type": "strong",
    "freq": 140
  },
  {
    "id": "empfangen",
    "infinitive": "empfangen",
    "praeteritum": "empfing",
    "partizip2": "empfangen",
    "gloss": "приймати",
    "glossEn": "to receive",
    "type": "strong",
    "freq": 141
  },
  {
    "id": "empfinden",
    "infinitive": "empfinden",
    "praeteritum": "empfand",
    "partizip2": "empfunden",
    "gloss": "відчувати",
    "glossEn": "to feel",
    "type": "strong",
    "freq": 142
  },
  {
    "id": "beraten",
    "infinitive": "beraten",
    "praeteritum": "beriet",
    "partizip2": "beraten",
    "gloss": "радити",
    "glossEn": "to advise",
    "type": "strong",
    "freq": 143
  },
  {
    "id": "behalten",
    "infinitive": "behalten",
    "praeteritum": "behielt",
    "partizip2": "behalten",
    "gloss": "зберігати в себе",
    "glossEn": "to keep",
    "type": "strong",
    "freq": 144
  },
  {
    "id": "beschließen",
    "infinitive": "beschließen",
    "praeteritum": "beschloss",
    "partizip2": "beschlossen",
    "gloss": "ухвалювати",
    "glossEn": "to resolve",
    "type": "strong",
    "freq": 145
  },
  {
    "id": "besprechen",
    "infinitive": "besprechen",
    "praeteritum": "besprach",
    "partizip2": "besprochen",
    "gloss": "обговорювати",
    "glossEn": "to discuss",
    "type": "strong",
    "freq": 146
  },
  {
    "id": "betreiben",
    "infinitive": "betreiben",
    "praeteritum": "betrieb",
    "partizip2": "betrieben",
    "gloss": "керувати діяльністю",
    "glossEn": "to operate",
    "type": "strong",
    "freq": 147
  },
  {
    "id": "weisen",
    "infinitive": "weisen",
    "praeteritum": "wies",
    "partizip2": "gewiesen",
    "gloss": "вказувати",
    "glossEn": "to point",
    "type": "strong",
    "freq": 148
  },
  {
    "id": "unterbrechen",
    "infinitive": "unterbrechen",
    "praeteritum": "unterbrach",
    "partizip2": "unterbrochen",
    "gloss": "переривати",
    "glossEn": "to interrupt",
    "type": "strong",
    "freq": 149
  },
  {
    "id": "unterscheiden",
    "infinitive": "unterscheiden",
    "praeteritum": "unterschied",
    "partizip2": "unterschieden",
    "gloss": "розрізняти",
    "glossEn": "to distinguish",
    "type": "strong",
    "freq": 150
  },
  {
    "id": "unterschreiben",
    "infinitive": "unterschreiben",
    "praeteritum": "unterschrieb",
    "partizip2": "unterschrieben",
    "gloss": "підписувати",
    "glossEn": "to sign",
    "type": "strong",
    "freq": 151
  },
  {
    "id": "unterhalten",
    "infinitive": "unterhalten",
    "praeteritum": "unterhielt",
    "partizip2": "unterhalten",
    "gloss": "розважати; підтримувати",
    "glossEn": "to entertain; to maintain",
    "type": "strong",
    "freq": 152
  },
  {
    "id": "vertreten",
    "infinitive": "vertreten",
    "praeteritum": "vertrat",
    "partizip2": "vertreten",
    "gloss": "представляти",
    "glossEn": "to represent",
    "type": "strong",
    "freq": 153
  },
  {
    "id": "raten",
    "infinitive": "raten",
    "praeteritum": "riet",
    "partizip2": "geraten",
    "gloss": "радити; вгадувати",
    "glossEn": "to advise; to guess",
    "type": "strong",
    "freq": 154
  },
  {
    "id": "backen",
    "infinitive": "backen",
    "praeteritum": "backte",
    "partizip2": "gebacken",
    "gloss": "пекти",
    "glossEn": "to bake",
    "type": "strong",
    "freq": 155
  },
  {
    "id": "wiegen",
    "infinitive": "wiegen",
    "praeteritum": "wog",
    "partizip2": "gewogen",
    "gloss": "зважувати",
    "glossEn": "to weigh",
    "type": "strong",
    "freq": 156
  },
  {
    "id": "werben",
    "infinitive": "werben",
    "praeteritum": "warb",
    "partizip2": "geworben",
    "gloss": "рекламувати; вербувати",
    "glossEn": "to advertise; to recruit",
    "type": "strong",
    "freq": 157
  },
  {
    "id": "ankommen",
    "infinitive": "ankommen",
    "praeteritum": "kam an",
    "partizip2": "angekommen",
    "gloss": "прибувати",
    "glossEn": "to arrive",
    "type": "strong",
    "freq": 158
  },
  {
    "id": "anfangen",
    "infinitive": "anfangen",
    "praeteritum": "fing an",
    "partizip2": "angefangen",
    "gloss": "починати",
    "glossEn": "to start",
    "type": "strong",
    "freq": 159
  },
  {
    "id": "aufstehen",
    "infinitive": "aufstehen",
    "praeteritum": "stand auf",
    "partizip2": "aufgestanden",
    "gloss": "вставати",
    "glossEn": "to get up",
    "type": "strong",
    "freq": 160
  }
];

// Три форми кожного дієслова дають три різні картки на старті.
window.IMPULS.buildIrregularCards = function (count) {
  const verbs = window.IMPULS.irregularVerbs;
  const fields = ["infinitive", "praeteritum", "partizip2"];
  const slots = [];
  for (let i = 0; i < verbs.length; i += 1) {
    for (let j = 0; j < fields.length; j += 1) {
      slots.push({ verb: verbs[i], field: fields[j] });
    }
  }
  const n = typeof count === "number" && Number.isFinite(count) ? Math.floor(count) : 1;
  const selected = window.IMPULS.shuffle(slots).slice(0, Math.max(1, n));
  return selected.map(function (slot) {
    const verb = slot.verb;
    const answer = verb[slot.field];
    const pool = verbs.filter(function (other) {
      return other.id !== verb.id && other[slot.field] !== answer;
    }).map(function (other) {
      return other[slot.field];
    }).filter(function (form, index, list) {
      return list.indexOf(form) === index;
    });
    const forms = { infinitive: verb.infinitive, praeteritum: verb.praeteritum, partizip2: verb.partizip2 };
    return {
      id: "wi-" + verb.id + "-" + slot.field,
      muster: "workshop-irregular",
      prompt: fields.map(function (field) { return field === slot.field ? "___" : forms[field]; }).join(" / "),
      forms: forms,
      hiddenForm: slot.field,
      gloss: verb.gloss,
      glossEn: verb.glossEn,
      answer: answer,
      options: [answer].concat(window.IMPULS.shuffle(pool).slice(0, 3))
    };
  });
};
