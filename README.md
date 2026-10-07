Open index.html in a browser. No server, npm, or build step.
index.html is the Ukrainian shell (start, round, repair, summary).
css/main.css is the dark one-column layout (max-width 720px).
Scripts, in order: js/cards.js, js/storage.js, js/state.js, js/queue.js, js/input.js, js/main.js.
data/p1-sein-haben.json holds four sein-haben sample cards.
Stubs: loadCards, resetRound, goTo, recordAttempt, buildQueue, pushRepair, nextCard, shuffle.
save and load use localStorage key impuls.v1 and are not called.
btn-start logs "round later". bindKeys does not attach listeners.
