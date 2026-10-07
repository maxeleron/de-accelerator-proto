window.IMPULS = window.IMPULS || {};

// Пауза під час вікна заборонена: Esc раунд не зупиняє.
const onMenuKey = function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn-start").click();
    return;
  }
  if (event.key === "1") {
    window.IMPULS.selectWindow(1600);
    return;
  }
  if (event.key === "2") {
    window.IMPULS.selectWindow(1200);
    return;
  }
  if (event.key === "3") {
    window.IMPULS.selectWindow(900);
  }
};

const onRoundKey = function (event) {
  if (event.key === "Escape") {
    return;
  }
  const index = keyIndex(event.key);
  if (index < 0) {
    return;
  }
  // Час відповіді міряється до keydown, не до keyup.
  event.preventDefault();
  window.IMPULS.choose(index);
};

const keyIndex = function (key) {
  if (key === "1") {
    return 0;
  }
  if (key === "2") {
    return 1;
  }
  if (key === "3") {
    return 2;
  }
  if (key === "4") {
    return 3;
  }
  return -1;
};

window.IMPULS.bindKeys = function () {
  document.addEventListener("keydown", function (event) {
    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }
    const phase = window.IMPULS.state.phase;
    if (phase === "menu") {
      onMenuKey(event);
      return;
    }
    if (phase === "round" || phase === "repair") {
      onRoundKey(event);
    }
  });
};
