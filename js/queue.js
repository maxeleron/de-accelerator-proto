window.IMPULS = window.IMPULS || {};

window.IMPULS.shuffle = function (list) {
  const next = list.slice();
  let i = next.length - 1;
  while (i > 0) {
    const j = Math.floor(Math.random() * (i + 1));
    const swap = next[i];
    next[i] = next[j];
    next[j] = swap;
    i -= 1;
  }
  return next;
};

// Розсуває підряд однакові id. Немає заміни — лишає як є.
window.IMPULS.avoidConsecutive = function (queue) {
  if (queue.length < 2) {
    return queue;
  }

  function countPairs() {
    let pairs = 0;
    for (let k = 1; k < queue.length; k += 1) {
      if (queue[k] === queue[k - 1]) {
        pairs += 1;
      }
    }
    return pairs;
  }

  let bestPairs = countPairs();
  if (bestPairs === 0) {
    return queue;
  }
  const best = queue.slice();
  // Заміна може перенести пару назад. Лічильник гасить цикл, коли розвести не можна.
  let guard = queue.length * queue.length;
  let i = 1;
  while (i < queue.length && guard > 0) {
    guard -= 1;
    if (queue[i] !== queue[i - 1]) {
      i += 1;
      continue;
    }
    let swapAt = -1;
    for (let j = i + 1; j < queue.length; j += 1) {
      if (queue[j] !== queue[i]) {
        swapAt = j;
        break;
      }
    }
    if (swapAt < 0) {
      for (let j = 0; j < i; j += 1) {
        if (queue[j] !== queue[i]) {
          swapAt = j;
          break;
        }
      }
    }
    if (swapAt < 0) {
      i += 1;
      continue;
    }
    const held = queue[i];
    queue[i] = queue[swapAt];
    queue[swapAt] = held;
    const pairs = countPairs();
    if (pairs < bestPairs) {
      bestPairs = pairs;
      for (let k = 0; k < queue.length; k += 1) {
        best[k] = queue[k];
      }
      if (pairs === 0) {
        return queue;
      }
    }
    i = swapAt < i ? 1 : i + 1;
  }

  if (countPairs() !== bestPairs) {
    for (let k = 0; k < queue.length; k += 1) {
      queue[k] = best[k];
    }
  }
  return queue;
};

window.IMPULS.buildQueue = function (cards, count) {
  const ids = [];
  for (let i = 0; i < cards.length; i += 1) {
    ids.push(cards[i].id);
  }
  const shuffled = window.IMPULS.shuffle(ids);
  // Зріз після перемішування, не перші N з колоди.
  if (typeof count !== "number" || !Number.isFinite(count)) {
    return window.IMPULS.avoidConsecutive(shuffled);
  }
  let n = Math.floor(count);
  if (n < 1) {
    n = 1;
  }
  if (n > shuffled.length) {
    n = shuffled.length;
  }
  return window.IMPULS.avoidConsecutive(shuffled.slice(0, n));
};

window.IMPULS.pushRepair = function (cardId) {
  window.IMPULS.state.repair.push(cardId);
};

window.IMPULS.nextCard = function () {
  const state = window.IMPULS.state;
  if (state.phase !== "repair" && state.main.length > 0) {
    return { id: state.main[0], repair: false };
  }
  if (state.repair.length > 0) {
    return { id: state.repair[0], repair: true };
  }
  return null;
};
