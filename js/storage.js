window.IMPULS = window.IMPULS || {};

IMPULS.save = function (key, value) {
  var raw = localStorage.getItem("impuls.v1");
  var bag = {};
  if (raw) {
    try {
      bag = JSON.parse(raw) || {};
    } catch (err) {
      bag = {};
    }
  }
  bag[key] = value;
  localStorage.setItem("impuls.v1", JSON.stringify(bag));
};

IMPULS.load = function (key) {
  var raw = localStorage.getItem("impuls.v1");
  if (!raw) {
    return undefined;
  }
  try {
    var bag = JSON.parse(raw) || {};
    return bag[key];
  } catch (err) {
    return undefined;
  }
};
