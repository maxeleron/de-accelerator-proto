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
  osc.type = "square";
  const t0 = ctx.currentTime;
  const dur = ms / 1000;
  const t1 = t0 + dur;
  const attack = Math.min(0.004, dur / 4);
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
    blip(ctx, 780, 360, 90, 0.04);
    return;
  }
  if (kind === "click") {
    blip(ctx, 1680, 1320, 40, 0.032);
    return;
  }
  if (kind === "hit") {
    blip(ctx, 1480, 1480, 70, 0.045);
    return;
  }
  if (kind === "miss") {
    blip(ctx, 196, 160, 80, 0.04);
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
    try {
      cancelVoice();
    } catch (stopErr) {
      voice = [];
    }
  }
};

const speakOn = function () {
  return window.IMPULS.settings && window.IMPULS.settings.speakForm === true;
};

const formSpeech = { voice: null, timer: null, utter: null, form: "" };

const germanVoice = function () {
  if (formSpeech.voice) {
    return formSpeech.voice;
  }
  if (!window.speechSynthesis || typeof window.speechSynthesis.getVoices !== "function") {
    return null;
  }
  const voices = window.speechSynthesis.getVoices();
  formSpeech.voice = voices[0] || null;
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
  formSpeech.timer = null;
  formSpeech.utter = null;
  formSpeech.form = "";
  try {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  } catch (err) {
    // Немає синтезу — тиша.
  }
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
    utter.onend = utter.onerror = function () {
      if (formSpeech.utter === utter) {
        formSpeech.utter = null;
        formSpeech.form = "";
      }
    };
    if (synth.paused && typeof synth.resume === "function") {
      synth.resume();
    }
    synth.speak(utter);
  } catch (err) {
    formSpeech.utter = null;
    formSpeech.form = "";
    // Синтез недоступний — тиша.
  }
};

window.IMPULS.speakForm = function (text) {
  try {
    if (!speakOn()) {
      return;
    }
    const form = String(text || "").replace(/\s+/g, " ").replace(/^[\s.,!?;:…]+|[\s.,!?;:…]+$/g, "");
    if (!form || !window.speechSynthesis || typeof window.SpeechSynthesisUtterance !== "function") {
      return;
    }
    const synth = window.speechSynthesis;
    if (formSpeech.form === form && (formSpeech.timer !== null || synth.speaking || synth.pending)) {
      if (synth.paused && typeof synth.resume === "function") {
        synth.resume();
      }
      return;
    }
    window.IMPULS.stopSpeakForm();
    formSpeech.form = form;
    // Порожній список потребує часу; після cancel не говоримо в тому самому такті.
    formSpeech.timer = setTimeout(startSpeakForm, germanVoice() ? 50 : 250);
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
