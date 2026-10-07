window.IMPULS = window.IMPULS || {};

// data/handbook.json — джерело правди. Копія тут, бо file:// не дає fetch.
window.IMPULS.handbook = [
  {
    id: "p1",
    title: "Sein und haben",
    note: "Це не переклад «є/маю» щоразу, а особа.",
    tables: [
      {
        caption: "sein",
        rows: [
          ["ich", "bin"],
          ["du", "bist"],
          ["er/sie/es", "ist"],
          ["wir", "sind"],
          ["ihr", "seid"],
          ["sie/Sie", "sind"]
        ]
      },
      {
        caption: "haben",
        rows: [
          ["ich", "habe"],
          ["du", "hast"],
          ["er/sie/es", "hat"],
          ["wir", "haben"],
          ["ihr", "habt"],
          ["sie/Sie", "haben"]
        ]
      }
    ]
  },
  {
    id: "p2",
    title: "Особові закінчення",
    note: "machen: e, st, t, en, t, en. Той самий рядок для lernen, wohnen.",
    tables: [
      {
        caption: "machen",
        rows: [
          ["ich", "mache", "e"],
          ["du", "machst", "st"],
          ["er/sie/es", "macht", "t"],
          ["wir", "machen", "en"],
          ["ihr", "macht", "t"],
          ["sie/Sie", "machen", "en"]
        ]
      }
    ]
  },
  {
    id: "p3",
    title: "Артикль Nominativ",
    note: "der / die / das",
    tables: [
      {
        caption: "12 іменників",
        rows: [
          ["der", "Tisch"],
          ["die", "Lampe"],
          ["das", "Buch"],
          ["der", "Mann"],
          ["die", "Frau"],
          ["das", "Kind"],
          ["der", "Stuhl"],
          ["die", "Tür"],
          ["das", "Fenster"],
          ["der", "Hund"],
          ["die", "Katze"],
          ["das", "Haus"]
        ]
      }
    ]
  },
  {
    id: "p4",
    title: "Akkusativ",
    tables: [
      {
        caption: "артикль",
        rows: [
          ["der", "den"],
          ["die", "die"],
          ["das", "das"],
          ["ein", "einen"],
          ["eine", "eine"]
        ]
      }
    ],
    examples: [
      "Ich sehe den Tisch.",
      "Ich sehe die Lampe."
    ]
  },
  {
    id: "p5",
    title: "V2",
    note: "Дієслово на другому місці.",
    examples: [
      "Heute gehe ich nach Hause.",
      "Morgen lerne ich Deutsch."
    ]
  }
];

window.IMPULS.handbook.forEach(function (section) {
  Object.freeze(section);
});
Object.freeze(window.IMPULS.handbook);

window.IMPULS.loadHandbook = function () {
  return window.IMPULS.handbook;
};
