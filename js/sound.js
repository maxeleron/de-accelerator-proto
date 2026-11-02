window.IMPULS = window.IMPULS || {};

// Без файлів і без автоплею. Тиша, якщо вимкнено або немає AudioContext.
let audioCtx = null;
let voice = [];

const uiSoundOn = function () {
  return window.IMPULS.settings && window.IMPULS.settings.uiSound === true;
};

const getCtx = function () {
  if (!uiSoundOn()) {
    return null;
  }
  const Ctor = window.AudioContext || window.webkitAudioContext;
  if (typeof Ctor !== "function") {
    return null;
  }
  if (!audioCtx) {
    try {
      audioCtx = new Ctor();
    } catch (err) {
      audioCtx = null;
      return null;
    }
  }
  if (audioCtx.state === "suspended") {
    try {
      const p = audioCtx.resume();
      if (p && typeof p.catch === "function") {
        p.catch(function () {});
      }
    } catch (err) {
      // Автоплей заборонений: лишаємось тихими.
    }
  }
  return audioCtx;
};

const cancelVoice = function () {
  if (!audioCtx || !voice.length) {
    voice = [];
    return;
  }
  const now = audioCtx.currentTime;
  for (let i = 0; i < voice.length; i += 1) {
    const node = voice[i];
    try {
      node.gain.gain.cancelScheduledValues(now);
      node.gain.gain.setValueAtTime(0, now);
    } catch (err) {
      // Вже знятий.
    }
    try {
      node.osc.stop(now);
    } catch (err) {
      // Вже зупинений.
    }
  }
  voice = [];
};

const blip = function (ctx, fromHz, toHz, ms, peak) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  const t0 = ctx.currentTime;
  const dur = ms / 1000;
  const t1 = t0 + dur;
  const attack = Math.min(0.002, dur / 4);
  const release = Math.min(0.02, dur / 3);
  osc.frequency.setValueAtTime(fromHz, t0);
  osc.frequency.linearRampToValueAtTime(toHz, t1);
  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.exponentialRampToValueAtTime(peak, t0 + attack);
  gain.gain.setValueAtTime(peak, t1 - release);
  gain.gain.exponentialRampToValueAtTime(0.0001, t1);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(t0);
  osc.stop(t1 + 0.004);
  osc.onended = function () {
    try {
      osc.disconnect();
    } catch (err) {}
    try {
      gain.disconnect();
    } catch (err) {}
  };
  voice.push({ osc: osc, gain: gain });
};

const playKind = function (kind) {
  if (!uiSoundOn()) {
    return;
  }
  const ctx = getCtx();
  if (!ctx) {
    return;
  }
  cancelVoice();
  if (kind === "open") {
    blip(ctx, 440, 300, 80, 0.018);
    return;
  }
  if (kind === "click") {
    blip(ctx, 620, 480, 35, 0.012);
    return;
  }
  if (kind === "hit") {
    blip(ctx, 660, 720, 65, 0.02);
    return;
  }
  if (kind === "miss") {
    blip(ctx, 160, 130, 70, 0.016);
  }
};

window.IMPULS.stopUiSound = function () {
  try {
    cancelVoice();
  } catch (err) {
    voice = [];
  }
};

window.IMPULS.playUi = function (kind) {
  try {
    playKind(kind);
  } catch (err) {
    window.IMPULS.stopUiSound();
  }
};

const speakOn = function () {
  return window.IMPULS.settings && window.IMPULS.settings.speakForm === true;
};

const formSpeech = { voice: null, timer: null, watchdog: null, utter: null, form: "", queue: [] };

const germanVoice = function () {
  if (formSpeech.voice) {
    return formSpeech.voice;
  }
  if (!window.speechSynthesis || typeof window.speechSynthesis.getVoices !== "function") {
    return null;
  }
  const voices = window.speechSynthesis.getVoices();
  for (let i = 0; i < voices.length; i += 1) {
    const lang = String(voices[i].lang || "").toLowerCase();
    if (lang.indexOf("de") === 0) {
      formSpeech.voice = voices[i];
      break;
    }
  }
  return formSpeech.voice;
};

window.IMPULS.stopSpeakForm = function () {
  clearTimeout(formSpeech.timer);
  clearTimeout(formSpeech.watchdog);
  formSpeech.timer = null;
  formSpeech.watchdog = null;
  formSpeech.utter = null;
  formSpeech.form = "";
  formSpeech.queue = [];
  try {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  } catch (err) {
    // Немає синтезу — тиша.
  }
};

const scheduleSpeakForm = function () {
  if (formSpeech.utter || formSpeech.timer !== null || !formSpeech.queue.length) {
    return;
  }
  formSpeech.form = formSpeech.queue.shift();
  formSpeech.timer = setTimeout(startSpeakForm, germanVoice() ? 50 : 250);
};

const startSpeakForm = function () {
  formSpeech.timer = null;
  if (!speakOn() || !formSpeech.form) {
    formSpeech.form = "";
    return;
  }
  try {
    const synth = window.speechSynthesis;
    const utter = new window.SpeechSynthesisUtterance(formSpeech.form);
    const selected = germanVoice();
    utter.lang = selected ? selected.lang : "de-DE";
    if (selected) {
      utter.voice = selected;
    }
    utter.rate = 0.88;
    formSpeech.utter = utter;
    const finish = function () {
      if (formSpeech.utter !== utter) {
        return;
      }
      clearTimeout(formSpeech.watchdog);
      formSpeech.watchdog = null;
      formSpeech.utter = null;
      formSpeech.form = "";
      scheduleSpeakForm();
    };
    utter.onend = utter.onerror = finish;
    // Браузер інколи не надсилає end/error; черга має продовжитися.
    formSpeech.watchdog = setTimeout(function () {
      if (formSpeech.utter !== utter) {
        return;
      }
      finish();
      try {
        synth.cancel();
      } catch (err) {
        // Наступна репліка все одно лишається в черзі.
      }
    }, Math.max(15000, utter.text.length * 150));
    if (synth.paused && typeof synth.resume === "function") {
      synth.resume();
    }
    synth.speak(utter);
  } catch (err) {
    clearTimeout(formSpeech.watchdog);
    formSpeech.watchdog = null;
    formSpeech.utter = null;
    formSpeech.form = "";
    scheduleSpeakForm();
    // Синтез недоступний — тиша.
  }
};

const speechText = function (card, when, verdict, response) {
  const settings = window.IMPULS.settings || {};
  if (!card || settings.speakWhen !== when) {
    return "";
  }
  if (when === "after" && ((settings.speakCondition === "correct" && verdict !== "hit") || (settings.speakCondition === "incorrect" && verdict === "hit"))) {
    return "";
  }
  const answer = verdict === "hit" && response ? response : card.answer;
  if (settings.speakWhat !== "sentence" || card.muster === "v2") {
    return answer;
  }
  let prompt = String(card.prompt || "");
  if (card.muster === "workshop-verbs") {
    prompt = prompt.replace(/\s+\([^()]*\)\s*$/, "");
  }
  return prompt.indexOf("___") < 0 ? answer : prompt.replace("___", function () { return answer; });
};

window.IMPULS.speakForm = function (card, when, verdict, response) {
  try {
    if (!speakOn()) {
      return;
    }
    const form = String(speechText(card, when, verdict, response) || "").replace(/\s+/g, " ").replace(/^[\s.,!?;:…]+|[\s.,!?;:…]+$/g, "");
    if (!form || !window.speechSynthesis || typeof window.SpeechSynthesisUtterance !== "function") {
      return;
    }
    const synth = window.speechSynthesis;
    if (synth.paused && typeof synth.resume === "function") {
      synth.resume();
    }
    // Наступна картка не скасовує поточну репліку, навіть без паузи.
    formSpeech.queue.push(form);
    scheduleSpeakForm();
  } catch (err) {
    window.IMPULS.stopSpeakForm();
  }
};

if (window.speechSynthesis && typeof window.speechSynthesis.addEventListener === "function") {
  window.speechSynthesis.addEventListener("voiceschanged", function () {
    try {
      formSpeech.voice = null;
      germanVoice();
      if (formSpeech.timer !== null) {
        clearTimeout(formSpeech.timer);
        formSpeech.timer = setTimeout(startSpeakForm, 50);
      }
    } catch (err) {
      // Список голосів інколи порожній.
    }
  });
}

try {
  germanVoice();
} catch (err) {
  // Голоси можуть зʼявитися пізніше через voiceschanged.
}
