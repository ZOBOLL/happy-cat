/* =========================================================
  开心生命体｜云光猫 H5 Demo
  Static MVP, no build step, no backend dependency.
========================================================= */

/* 1. emotionConfigs */
const emotionConfigs = {
  tired: {
    emotionKey: 'tired',
    label: '疲惫',
    keywords: ['累', '疲惫', '没电', '停不下来', '困', '拖延', '麻木', '工作', '熬夜'],
    example: '我今天很累，但又停不下来。',
    petListeningText: '我把耳朵放低一点，慢慢听你说。',
    mouthpiece: {
      surfaceEmotion: '疲惫像一层灰蓝雾，把身体和心都轻轻盖住了。',
      hiddenNeed: '被允许停下来',
      subtext: '我好像只有一直做事，才证明自己没有掉队。',
      userVoice: '我不是不想休息。我只是有点害怕，一停下来就会觉得自己不够好。',
      petResponse: '我听见了。你不是坏掉了，只是太久没有被允许慢下来。'
    },
    canvas: {
      name: '灰蓝雾布',
      surfaceVisual: '灰蓝色的厚雾布，像被疲惫盖住的空气。',
      tearAction: '云光猫用小爪爪撕开一角，下面露出一杯还温着的水和一点暖光。'
    },
    card: {
      title: '灰蓝雾下面的一点暖光',
      catDiscovery: '我在你的疲惫下面，看到了一杯还温着的水。',
      todayHappiness: '你停下来了一小会儿，并且没有继续责怪自己。',
      catStrokeText: '我帮这点光加了一圈小白光。',
      shareText: '今日份的小幸福：我和云光猫在疲惫下面找到了一点暖光。'
    },
    assets: {
      petImage: './assets/pet_cutouts/cat_low.png',
      topLayer: './assets/emotion_canvas/tired_top.png',
      hiddenLayer: './assets/happiness_layer/warm_water_light.png',
      stroke: './assets/pet_strokes/small_white_light.png'
    }
  },
  anxious: {
    emotionKey: 'anxious',
    label: '焦虑',
    keywords: ['焦虑', '担心', '害怕', '脑子乱', '心慌', '紧张', '过载', '乱', '失控'],
    example: '我脑子很乱，担心很多事。',
    petListeningText: '我先陪你把很多声音调小一点。',
    mouthpiece: {
      surfaceEmotion: '焦虑像浅紫乱线，很多还没发生的事一起拉住你。',
      hiddenNeed: '安静与稳定',
      subtext: '我不是想太多，我只是太想提前保护自己。',
      userVoice: '我不是故意紧张。我只是怕事情失控，怕自己来不及应对。',
      petResponse: '我先不让你把所有事想完。我们只在这里围出一点安静。'
    },
    canvas: {
      name: '浅紫乱线膜',
      surfaceVisual: '浅紫蓝细线缠绕在画布上，像很多小声音同时说话。',
      tearAction: '云光猫用心光把乱线轻轻融开，露出安静的月光湖面。'
    },
    card: {
      title: '乱线下面的安静湖',
      catDiscovery: '我在你的焦虑下面，看到了一片还没有被打扰的湖。',
      todayHappiness: '你不用一次想完所有事。',
      catStrokeText: '我把乱线压成了一圈很慢的月光涟漪。',
      shareText: '今日份的小幸福：我和云光猫在乱线下面找到了一片安静湖。'
    },
    assets: {
      petImage: './assets/pet_cutouts/cat_hug.png',
      topLayer: './assets/emotion_canvas/anxious_top.png',
      hiddenLayer: './assets/happiness_layer/quiet_moon_lake.png',
      stroke: './assets/pet_strokes/moon_ripple.png'
    }
  },
  wronged: {
    emotionKey: 'wronged',
    label: '委屈',
    keywords: ['委屈', '哭', '难过', '伤心', '受伤', '心酸', '眼泪', '说不出来'],
    example: '我有点委屈，想哭但又说不出来。',
    petListeningText: '这滴水不用急着解释，我先接住。',
    mouthpiece: {
      surfaceEmotion: '委屈像一层透明水膜，有一滴水一直停在心口。',
      hiddenNeed: '被理解、被温柔对待',
      subtext: '我不是想闹，我只是希望有人知道这件事真的让我受伤。',
      userVoice: '我其实不想把事情说得很严重。我只是希望我的难过不要被轻轻带过。',
      petResponse: '这滴水不用藏起来。我先帮你托住。'
    },
    canvas: {
      name: '透明水膜',
      surfaceVisual: '水蓝色透明薄膜盖在画布上，边缘挂着很轻的小水滴。',
      tearAction: '云光猫用心光托起水膜，中间露出一颗被光接住的小水珠。'
    },
    card: {
      title: '没有被丢下的一滴水',
      catDiscovery: '我在你的委屈下面，看到了一滴没有被丢下的水。',
      todayHappiness: '你的难过终于被放在了这里。',
      catStrokeText: '我把这滴水放进了一片柔光边缘。',
      shareText: '今日份的小幸福：我和云光猫接住了一滴没有被说出口的委屈。'
    },
    assets: {
      petImage: './assets/pet_cutouts/cat_low.png',
      topLayer: './assets/emotion_canvas/wronged_top.png',
      hiddenLayer: './assets/happiness_layer/held_teardrop.png',
      stroke: './assets/pet_strokes/soft_light_edge.png'
    }
  },
  annoyed: {
    emotionKey: 'annoyed',
    label: '烦躁',
    keywords: ['烦', '吵', '废话', '不想听', '打扰', '噪音', '烦躁', '生气', '火大'],
    example: '我今天很烦，不想听别人说话。',
    petListeningText: '我听见那些刺刺的声音了，先帮你留一块空间。',
    mouthpiece: {
      surfaceEmotion: '烦躁像白灰噪点贴得太近，身体很想往后退一步。',
      hiddenNeed: '边界与安静',
      subtext: '我不是脾气坏，我只是现在真的不想再接收那么多东西。',
      userVoice: '我不是不讲理。我只是需要一点空间，不想让所有声音都进入我。',
      petResponse: '我听见那些刺刺的声音了。我们先把它们扫到画布边边去。'
    },
    canvas: {
      name: '白灰噪点膜',
      surfaceVisual: '白灰微紫的薄膜，上面有细小噪点和刺刺的波动。',
      tearAction: '云光猫用尾巴从画布上扫过去，把噪点扫开，露出一块干净空间。'
    },
    card: {
      title: '噪音下面的一点安静',
      catDiscovery: '我在你的烦躁下面，看到了一块没有声音的地方。',
      todayHappiness: '你可以不接收所有声音。',
      catStrokeText: '我在这块安静外面画了一圈边界光。',
      shareText: '今日份的小幸福：我和云光猫把噪音扫开了一点。'
    },
    assets: {
      petImage: './assets/pet_cutouts/cat_listen.png',
      topLayer: './assets/emotion_canvas/annoyed_top.png',
      hiddenLayer: './assets/happiness_layer/clean_space.png',
      stroke: './assets/pet_strokes/boundary_light.png'
    }
  },
  happy: {
    emotionKey: 'happy',
    label: '开心',
    keywords: ['开心', '高兴', '好消息', '快乐', '妙', '喜欢', '舒服', '幸福', '期待'],
    example: '今天收到一个好消息，有一点开心。',
    petListeningText: '我听见小泡泡冒出来了，先把它托住。',
    mouthpiece: {
      surfaceEmotion: '开心像一颗小泡泡冒出来，它不大，但是真的。',
      hiddenNeed: '庆祝与保存',
      subtext: '我想把这点开心留下来，不想让它很快就消失。',
      userVoice: '我好像真的有一点开心。它可能很小，但我想允许它存在。',
      petResponse: '它冒泡泡啦。我帮它多亮一点点。'
    },
    canvas: {
      name: '彩色泡泡膜',
      surfaceVisual: '柔软彩色泡泡膜轻轻浮着，下面还有更多小光点。',
      tearAction: '云光猫用爪爪掀开彩色薄膜，下面冒出亮亮的幸福泡泡。'
    },
    card: {
      title: '真的冒出来的小开心',
      catDiscovery: '我在你的今天下面，看到了一颗亮亮的开心泡泡。',
      todayHappiness: '这颗开心是真的。',
      catStrokeText: '我把它的边缘变成了彩虹小花边。',
      shareText: '今日份的小幸福：我和云光猫接住了一颗小开心。'
    },
    assets: {
      petImage: './assets/pet_cutouts/cat_happy.png',
      topLayer: './assets/emotion_canvas/happy_top.png',
      hiddenLayer: './assets/happiness_layer/color_bubbles.png',
      stroke: './assets/pet_strokes/rainbow_edge.png'
    }
  }
};

const STORAGE_KEY = 'cloudcat_gallery';
const MAX_GALLERY_ITEMS = 20;
const RIVE_CONFIG = {
  runtimeUrl: 'https://unpkg.com/@rive-app/canvas@2.24.0/rive.js',
  src: './assets/rive/cloudcat_state_machine.riv',
  stateMachine: 'CloudCatMachine',
  canvasId: 'rivePetCanvas'
};
const PET_STATE_VALUES = {
  idle: 0,
  listen: 1,
  low: 2,
  hug: 3,
  tearing: 4,
  happy: 5
};
const EMOTION_VALUES = {
  neutral: 0,
  tired: 1,
  anxious: 2,
  wronged: 3,
  annoyed: 4,
  happy: 5
};
const SOUND_STORAGE_KEY = 'cloudcat_sound_enabled';
let currentResult = null;
let tearTimer = null;
let currentEmotionKey = 'neutral';
const petActor = {
  x: 0,
  y: 0,
  targetX: 0,
  targetY: 0,
  tilt: 0,
  targetTilt: 0,
  scale: 1,
  targetScale: 1,
  lastWanderAt: 0,
  pointerInside: false,
  reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
};
const cloudCatRive = {
  enabled: false,
  instance: null,
  inputs: {},
  runtimePromise: null
};
const petSound = {
  enabled: localStorage.getItem(SOUND_STORAGE_KEY) !== 'false',
  userInteracted: false,
  context: null,
  masterGain: null,
  playingTimer: null,
  supported: Boolean(window.AudioContext || window.webkitAudioContext)
};

/* 2. DOM helpers */
const $ = (id) => document.getElementById(id);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function show(id) {
  $(id).classList.remove('hidden');
}

function hide(id) {
  $(id).classList.add('hidden');
}

function setPet(src, bubbleText, state = 'idle') {
  $('petPanel').dataset.petState = state;
  $('petImage').src = src;
  if (bubbleText) setPetBubble(bubbleText);
  syncRivePetState(state);
  playPetSound(state);
  if (!petActor.reducedMotion) {
    petActor.targetScale = state === 'happy' ? 1.025 : state === 'low' ? 0.985 : 1;
    petActor.targetTilt = state === 'tearing' ? -2 : 0;
  }
}

function setPetBubble(text) {
  $('petBubble').textContent = text;
}

function initPetSound() {
  updateSoundToggle();
  if (!petSound.supported) {
    $('soundToggleBtn').textContent = '猫猫音效：不可用';
    $('soundToggleBtn').disabled = true;
    return;
  }

  $('soundToggleBtn').addEventListener('click', () => {
    unlockPetSound();
    petSound.enabled = !petSound.enabled;
    localStorage.setItem(SOUND_STORAGE_KEY, String(petSound.enabled));
    updateSoundToggle();
    if (petSound.enabled) playPetSound('toggle');
  });

  document.addEventListener('pointerdown', () => {
    unlockPetSound();
  }, { once: true });
}

function unlockPetSound() {
  if (!petSound.supported) return;
  petSound.userInteracted = true;
  if (!petSound.context) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    petSound.context = new AudioCtx();
    petSound.masterGain = petSound.context.createGain();
    petSound.masterGain.gain.value = 0.38;
    petSound.masterGain.connect(petSound.context.destination);
  }
  if (petSound.context.state === 'suspended') petSound.context.resume();
}

function updateSoundToggle() {
  const button = $('soundToggleBtn');
  if (!button) return;
  button.textContent = `猫猫音效：${petSound.enabled ? '开' : '关'}`;
  button.setAttribute('aria-pressed', String(petSound.enabled));
}

function playPetSound(name) {
  if (!petSound.enabled || !petSound.userInteracted || !petSound.context || !petSound.masterGain) return;
  markSoundPlaying();
  const patterns = {
    idle: [[523, 0.06, 0.05], [659, 0.08, 0.035]],
    listen: [[784, 0.04, 0.04], [988, 0.07, 0.032], [1175, 0.1, 0.024]],
    low: [[220, 0.02, 0.12], [277, 0.08, 0.08]],
    hug: [[392, 0.03, 0.08], [523, 0.09, 0.07], [659, 0.16, 0.05]],
    tearing: [[760, 0.01, 0.035], [620, 0.055, 0.04], [880, 0.1, 0.025], [540, 0.145, 0.03]],
    happy: [[659, 0.01, 0.05], [880, 0.08, 0.046], [1175, 0.16, 0.038], [1319, 0.24, 0.028]],
    discover: [[988, 0.01, 0.06], [1319, 0.09, 0.05], [1760, 0.18, 0.035]],
    pet: [[740, 0.01, 0.045], [1047, 0.08, 0.035]],
    toggle: [[523, 0.01, 0.04], [784, 0.08, 0.035]],
    save: [[587, 0.01, 0.04], [784, 0.08, 0.035], [1047, 0.15, 0.03]]
  };
  (patterns[name] || patterns.idle).forEach(([frequency, delay, gain]) => {
    playTone({ frequency, delay, duration: 0.18, gain, type: name === 'low' ? 'sine' : 'triangle' });
  });
  if (name === 'tearing') playNoiseBurst(0.08, 0.08);
}

function markSoundPlaying() {
  const button = $('soundToggleBtn');
  if (!button) return;
  button.classList.add('is-playing');
  window.clearTimeout(petSound.playingTimer);
  petSound.playingTimer = window.setTimeout(() => {
    button.classList.remove('is-playing');
  }, 320);
}

function playTone({ frequency, delay, duration, gain, type }) {
  const ctx = petSound.context;
  const start = ctx.currentTime + delay;
  const oscillator = ctx.createOscillator();
  const toneGain = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.012, start + duration);

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(2200, start);
  filter.Q.value = 0.6;

  toneGain.gain.setValueAtTime(0.0001, start);
  toneGain.gain.exponentialRampToValueAtTime(gain, start + 0.025);
  toneGain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

  oscillator.connect(filter);
  filter.connect(toneGain);
  toneGain.connect(petSound.masterGain);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.03);
}

function playNoiseBurst(delay, gain) {
  const ctx = petSound.context;
  const start = ctx.currentTime + delay;
  const duration = 0.16;
  const bufferSize = Math.max(1, Math.floor(ctx.sampleRate * duration));
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i += 1) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
  }

  const source = ctx.createBufferSource();
  const filter = ctx.createBiquadFilter();
  const noiseGain = ctx.createGain();
  source.buffer = buffer;
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(1500, start);
  filter.Q.value = 2.6;
  noiseGain.gain.setValueAtTime(gain, start);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

  source.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(petSound.masterGain);
  source.start(start);
  source.stop(start + duration);
}

function burstPetLights(count = 8) {
  const container = $('petSparkles');
  if (!container) return;

  for (let i = 0; i < count; i += 1) {
    const spark = document.createElement('span');
    const angle = (Math.PI * 2 * i) / count;
    const distance = 54 + Math.random() * 58;
    spark.style.setProperty('--spark-x', `${Math.cos(angle) * distance}px`);
    spark.style.setProperty('--spark-y', `${Math.sin(angle) * distance - 24}px`);
    spark.style.left = `${42 + Math.random() * 18}%`;
    spark.style.top = `${38 + Math.random() * 20}%`;
    spark.style.animationDelay = `${Math.random() * 140}ms`;
    container.appendChild(spark);
    window.setTimeout(() => spark.remove(), 1600);
  }
}

function getPetStateForEmotion(emotionKey) {
  if (emotionKey === 'anxious') return 'hug';
  if (emotionKey === 'wronged' || emotionKey === 'tired') return 'low';
  if (emotionKey === 'happy') return 'happy';
  return 'listen';
}

async function initRivePet() {
  const panel = $('petPanel');
  const canvas = $(RIVE_CONFIG.canvasId);
  if (!panel || !canvas || petActor.reducedMotion) return false;

  const rivExists = await assetExists(RIVE_CONFIG.src);
  if (!rivExists) {
    panel.dataset.renderer = 'png';
    return false;
  }

  try {
    await loadRiveRuntime();
    if (!window.rive || !window.rive.Rive) throw new Error('Rive runtime unavailable.');

    cloudCatRive.instance = new window.rive.Rive({
      src: RIVE_CONFIG.src,
      canvas,
      autoplay: true,
      stateMachines: RIVE_CONFIG.stateMachine,
      fit: window.rive.Fit.Contain,
      alignment: window.rive.Alignment.Center,
      onLoad: () => {
        cloudCatRive.instance.resizeDrawingSurfaceToCanvas();
        cacheRiveInputs();
        cloudCatRive.enabled = true;
        panel.dataset.renderer = 'rive';
        syncRivePetState(panel.dataset.petState || 'idle');
        syncRiveEmotion(currentEmotionKey);
      }
    });
    window.addEventListener('resize', () => cloudCatRive.instance?.resizeDrawingSurfaceToCanvas());
    return true;
  } catch (error) {
    console.warn('Rive cat failed to load, keeping PNG actor fallback.', error);
    panel.dataset.renderer = 'png';
    return false;
  }
}

async function assetExists(url) {
  try {
    const response = await fetch(url, { method: 'HEAD', cache: 'no-store' });
    return response.ok;
  } catch (error) {
    return false;
  }
}

function loadRiveRuntime() {
  if (window.rive?.Rive) return Promise.resolve();
  if (cloudCatRive.runtimePromise) return cloudCatRive.runtimePromise;

  cloudCatRive.runtimePromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = RIVE_CONFIG.runtimeUrl;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return cloudCatRive.runtimePromise;
}

function cacheRiveInputs() {
  if (!cloudCatRive.instance) return;
  const inputs = cloudCatRive.instance.stateMachineInputs(RIVE_CONFIG.stateMachine) || [];
  cloudCatRive.inputs = inputs.reduce((acc, input) => {
    acc[input.name] = input;
    return acc;
  }, {});
}

function setRiveInput(name, value) {
  const input = cloudCatRive.inputs[name];
  if (!cloudCatRive.enabled || !input) return;
  input.value = value;
}

function fireRiveTrigger(name) {
  const input = cloudCatRive.inputs[name];
  if (!cloudCatRive.enabled || !input || typeof input.fire !== 'function') return;
  input.fire();
}

function syncRivePetState(state) {
  if (!cloudCatRive.enabled) return;
  setRiveInput('state', PET_STATE_VALUES[state] ?? PET_STATE_VALUES.idle);
  if (state === 'listen') fireRiveTrigger('listen');
  if (state === 'tearing') fireRiveTrigger('tear');
  if (state === 'happy') fireRiveTrigger('sparkle');
}

function syncRiveEmotion(emotionKey) {
  currentEmotionKey = emotionKey || 'neutral';
  setRiveInput('emotion', EMOTION_VALUES[currentEmotionKey] ?? EMOTION_VALUES.neutral);
}

function syncRivePointer(pointerX, pointerY) {
  setRiveInput('pointerX', clamp(pointerX, -1, 1));
  setRiveInput('pointerY', clamp(pointerY, -1, 1));
}

function initPetActor() {
  const panel = $('petPanel');
  const stage = panel.querySelector('.pet-stage');
  const shadow = panel.querySelector('.pet-shadow');
  if (!panel || !stage || petActor.reducedMotion) return;

  panel.addEventListener('pointermove', (event) => {
    const rect = panel.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.48;
    petActor.pointerInside = true;
    petActor.targetX = clamp(px * 28, -18, 18);
    petActor.targetY = clamp(py * 22, -14, 14);
    petActor.targetTilt = clamp(px * 8, -5, 5);
    syncRivePointer(clamp(px * 2, -1, 1), clamp(py * 2, -1, 1));
    panel.classList.add('is-curious');
  });

  panel.addEventListener('pointerleave', () => {
    petActor.pointerInside = false;
    petActor.targetX = 0;
    petActor.targetY = 0;
    petActor.targetTilt = 0;
    syncRivePointer(0, 0);
    panel.classList.remove('is-curious');
  });

  panel.addEventListener('pointerdown', () => {
    unlockPetSound();
    petActor.targetScale = 1.06;
    panel.classList.add('is-petting');
    setRiveInput('isPetting', true);
    fireRiveTrigger('pet');
    playPetSound('pet');
    burstPetLights(10);
    if (panel.dataset.petState === 'idle') {
      setPetBubble('嗯，我有感觉到你在摸摸我。');
    }
    window.setTimeout(() => {
      petActor.targetScale = 1;
      panel.classList.remove('is-petting');
      setRiveInput('isPetting', false);
    }, 520);
  });

  function tick(now) {
    if (!petActor.pointerInside && now - petActor.lastWanderAt > 2600) {
      petActor.lastWanderAt = now;
      const mood = panel.dataset.petState;
      const range = mood === 'low' ? 5 : mood === 'tearing' ? 2 : 10;
      petActor.targetX = (Math.random() - 0.5) * range;
      petActor.targetY = (Math.random() - 0.5) * range;
      petActor.targetTilt = (Math.random() - 0.5) * 3;
      panel.classList.toggle('is-wandering', Math.random() > 0.45);
      if (Math.random() > 0.72) burstPetLights(3);
    }

    petActor.x = lerp(petActor.x, petActor.targetX, 0.055);
    petActor.y = lerp(petActor.y, petActor.targetY, 0.055);
    petActor.tilt = lerp(petActor.tilt, petActor.targetTilt, 0.07);
    petActor.scale = lerp(petActor.scale, petActor.targetScale, 0.14);
    const shadowScale = clamp(1 - petActor.y / 80 + (petActor.scale - 1) * 0.8, 0.86, 1.16);

    stage.style.setProperty('--pet-x', `${petActor.x.toFixed(2)}px`);
    stage.style.setProperty('--pet-y', `${petActor.y.toFixed(2)}px`);
    stage.style.setProperty('--pet-tilt', `${petActor.tilt.toFixed(2)}deg`);
    stage.style.setProperty('--pet-stage-scale', petActor.scale.toFixed(3));
    shadow.style.setProperty('--pet-shadow-scale', shadowScale.toFixed(3));
    window.requestAnimationFrame(tick);
  }

  window.requestAnimationFrame(tick);
}

function lerp(current, target, amount) {
  return current + (target - current) * amount;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function setButtonLoading(button, isLoading, text) {
  button.disabled = isLoading;
  button.classList.toggle('is-loading', isLoading);
  button.textContent = isLoading ? text : button.dataset.defaultText;
}

/* 3. local rule-based analyze() */
function localAnalyze(userText) {
  const normalizedText = userText.toLowerCase();
  const matched = Object.values(emotionConfigs).find((config) => {
    return config.keywords.some((keyword) => normalizedText.includes(keyword.toLowerCase()));
  });
  return cloneResult(matched || emotionConfigs.tired);
}

function cloneResult(config) {
  return {
    emotionKey: config.emotionKey,
    label: config.label,
    mouthpiece: { ...config.mouthpiece },
    canvas: { ...config.canvas },
    card: { ...config.card },
    assets: { ...config.assets }
  };
}

/* 4. safety check */
function basicSafetyCheck(userText) {
  const crisisWords = ['想死', '不想活', '自杀', '伤害自己', '活不下去', '结束生命'];
  return {
    safe: !crisisWords.some((word) => userText.includes(word)),
    reason: 'crisis'
  };
}

function renderSafetyCard() {
  hide('inputCard');
  hide('mouthpieceCard');
  hide('tearCard');
  hide('finalCard');
  show('safetyCard');
  setPet('./assets/pet_cutouts/cat_hug.png', '我先陪你待在安全一点的地方。', 'hug');
  burstPetLights(4);
}

/* 5. AI reserved adapter */
async function analyzeWithAI(userText) {
  /*
    Reserved for Zhipu AI integration.
    Keep real API keys on a backend or serverless route, never in browser code.
    Expected response shape should match:
    {
      emotionKey, label, mouthpiece, canvas, card, assets
    }
    If the AI call fails or returns invalid data, fallback to localAnalyze(userText).
  */
  try {
    const useRealAI = false;
    if (!useRealAI) return localAnalyze(userText);

    // Example future shape:
    // const response = await fetch('/api/analyze-emotion', { method: 'POST', body: JSON.stringify({ userText }) });
    // const aiResult = await response.json();
    // return normalizeAIResult(aiResult, userText);
  } catch (error) {
    console.warn('AI analyze failed, fallback to local rules.', error);
  }
  return localAnalyze(userText);
}

function normalizeAIResult(aiResult, userText) {
  if (!aiResult || !emotionConfigs[aiResult.emotionKey]) return localAnalyze(userText);
  const fallback = localAnalyze(userText);
  return {
    ...fallback,
    ...aiResult,
    mouthpiece: { ...fallback.mouthpiece, ...(aiResult.mouthpiece || {}) },
    canvas: { ...fallback.canvas, ...(aiResult.canvas || {}) },
    card: { ...fallback.card, ...(aiResult.card || {}) },
    assets: { ...fallback.assets, ...(aiResult.assets || {}) }
  };
}

/* 6. renderMouthpiece() */
function renderMouthpiece(data) {
  syncRiveEmotion(data.emotionKey);
  setPet(data.assets.petImage, data.mouthpiece.petResponse, getPetStateForEmotion(data.emotionKey));
  burstPetLights(data.emotionKey === 'happy' ? 10 : 5);
  $('emotionTag').textContent = data.label;
  $('surfaceEmotion').textContent = data.mouthpiece.surfaceEmotion;
  $('subtext').textContent = data.mouthpiece.subtext;
  $('mouthpiece').textContent = data.mouthpiece.userVoice;
  $('petResponse').textContent = data.mouthpiece.petResponse;
}

/* 7. renderTearCanvas() */
function renderTearCanvas(data) {
  $('happinessLayer').src = data.assets.hiddenLayer;
  $('emotionLayer').src = data.assets.topLayer;
  $('strokeLayer').src = data.assets.stroke;
  $('canvasName').textContent = `当前情绪画布：${data.canvas.name}`;
  $('canvasVisual').textContent = data.canvas.surfaceVisual;
  $('tearAction').textContent = data.canvas.tearAction;
  $('canvasStage').classList.remove('opened', 'opening');
  $('strokeLayer').classList.add('hidden');
  $('tearBtn').disabled = false;
  $('tearBtn').textContent = $('tearBtn').dataset.defaultText;
  setPet('./assets/pet_cutouts/cat_listen.png', '我好像看到下面有一点光。要不要一起掀开看看？', 'listen');
}

/* 8. openTearAnimation() */
function openTearAnimation() {
  if (!currentResult) return;
  window.clearTimeout(tearTimer);
  $('tearBtn').disabled = true;
  $('tearBtn').textContent = '猫猫正在轻轻撕开...';
  $('canvasStage').classList.add('opening');
  setPet('./assets/pet_cutouts/cat_tearing.png', '我会轻一点，不把你的心情弄疼。', 'tearing');
  burstPetLights(6);

  window.setTimeout(() => {
    $('canvasStage').classList.add('opened');
    $('strokeLayer').classList.remove('hidden');
    setPetBubble('我看到下面有一点小幸福。我帮它补一笔光。');
    fireRiveTrigger('discover');
    playPetSound('discover');
    burstPetLights(12);
  }, 120);

  window.setTimeout(() => {
    $('canvasStage').classList.remove('opening');
  }, 1450);

  tearTimer = window.setTimeout(() => {
    renderHappinessCard(currentResult);
    hide('tearCard');
    show('finalCard');
    setPet('./assets/pet_cutouts/cat_happy.png', '这张小幸福卡，可以先替你把今天保存一下。', 'happy');
    burstPetLights(14);
    $('finalCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 3000);
}

/* 9. renderHappinessCard() */
function renderHappinessCard(data) {
  $('cardImage').src = data.assets.hiddenLayer;
  $('cardStroke').src = data.assets.stroke;
  $('cardTitle').textContent = `《${data.card.title}》`;
  $('catDiscovery').textContent = data.card.catDiscovery;
  $('todayHappiness').textContent = data.card.todayHappiness;
  $('catStrokeText').textContent = data.card.catStrokeText;
  $('shareLine').textContent = data.card.shareText;
}

/* 10. gallery storage */
function getGalleryItems() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch (error) {
    console.warn('Gallery storage parse failed.', error);
    return [];
  }
}

function saveGallery(data) {
  const items = getGalleryItems();
  items.unshift({
    id: Date.now(),
    title: data.card.title,
    emotion: data.label,
    image: data.assets.hiddenLayer,
    stroke: data.assets.stroke,
    text: data.card.todayHappiness
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items.slice(0, MAX_GALLERY_ITEMS)));
}

function clearGallery() {
  localStorage.removeItem(STORAGE_KEY);
  renderGallery();
}

function renderGallery() {
  const items = getGalleryItems();
  const el = $('gallery');
  $('clearGalleryBtn').disabled = items.length === 0;

  if (!items.length) {
    el.className = 'gallery-empty';
    el.textContent = '还没有卡片。让云光猫帮你撕开今天的一点光吧。';
    return;
  }

  el.className = 'gallery-grid';
  el.innerHTML = items.map((item) => `
    <article class="gallery-item">
      <div class="gallery-thumb">
        <img src="${escapeAttribute(item.image)}" alt="${escapeAttribute(item.title)}">
      </div>
      <div class="gallery-meta">
        <span>${escapeHTML(item.emotion)}</span>
        <strong>《${escapeHTML(item.title)}》</strong>
      </div>
    </article>
  `).join('');
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escapeAttribute(value) {
  return escapeHTML(value);
}

/* 11. download image generation */
async function downloadCard(data) {
  const button = $('downloadBtn');
  setButtonLoading(button, true, '正在生成 PNG...');

  try {
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1440;
    const ctx = canvas.getContext('2d');

    const [bg, bottom, stroke, cat] = await Promise.all([
      loadImage('./assets/card_templates/card_bg_soft.png'),
      loadImage(data.assets.hiddenLayer),
      loadImage(data.assets.stroke),
      loadImage('./assets/pet_cutouts/cat_happy.png')
    ]);

    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(255,255,255,0.78)';
    roundRect(ctx, 58, 72, 964, 1296, 56);
    ctx.fill();

    roundRect(ctx, 100, 126, 880, 560, 42);
    ctx.save();
    ctx.clip();
    coverImage(ctx, bottom, 100, 126, 880, 560);
    ctx.globalAlpha = 0.92;
    coverImage(ctx, stroke, 100, 126, 880, 560);
    ctx.globalAlpha = 1;
    containImage(ctx, cat, 760, 480, 180, 180);
    ctx.restore();

    ctx.fillStyle = '#25465a';
    ctx.font = '700 50px "Microsoft YaHei", sans-serif';
    const titleEndY = wrapText(ctx, `《${data.card.title}》`, 100, 790, 880, 62, 3);

    ctx.font = '32px "Microsoft YaHei", sans-serif';
    ctx.fillStyle = '#456777';
    let y = titleEndY + 48;
    y = drawLabeledText(ctx, '猫猫发现：', data.card.catDiscovery, 100, y, 880, 46, 3);
    y = drawLabeledText(ctx, '今日小幸福：', data.card.todayHappiness, 100, y + 18, 880, 46, 3);
    y = drawLabeledText(ctx, '猫猫接笔：', data.card.catStrokeText, 100, y + 18, 880, 46, 3);

    ctx.fillStyle = '#6fa9bd';
    ctx.font = '30px "Microsoft YaHei", sans-serif';
    wrapText(ctx, data.card.shareText, 100, Math.min(y + 56, 1280), 880, 42, 3);

    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = `${sanitizeFilename(data.card.title)}.png`;
    a.click();
  } finally {
    setButtonLoading(button, false);
  }
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 99) {
  const chars = String(text).split('');
  let line = '';
  let lines = 0;

  for (let i = 0; i < chars.length; i += 1) {
    const next = line + chars[i];
    if (ctx.measureText(next).width > maxWidth && line) {
      lines += 1;
      if (lines >= maxLines) {
        ctx.fillText(`${line.slice(0, Math.max(0, line.length - 1))}...`, x, y);
        return y + lineHeight;
      }
      ctx.fillText(line, x, y);
      line = chars[i];
      y += lineHeight;
    } else {
      line = next;
    }
  }

  if (line) {
    ctx.fillText(line, x, y);
    y += lineHeight;
  }
  return y;
}

function drawLabeledText(ctx, label, text, x, y, maxWidth, lineHeight, maxLines) {
  ctx.save();
  ctx.font = '700 32px "Microsoft YaHei", sans-serif';
  ctx.fillStyle = '#2f5569';
  ctx.fillText(label, x, y);
  const labelWidth = ctx.measureText(label).width;
  ctx.restore();
  return wrapText(ctx, text, x + labelWidth, y, maxWidth - labelWidth, lineHeight, maxLines);
}

function coverImage(ctx, img, x, y, w, h) {
  const scale = Math.max(w / img.width, h / img.height);
  const sw = w / scale;
  const sh = h / scale;
  const sx = (img.width - sw) / 2;
  const sy = (img.height - sh) / 2;
  ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
}

function containImage(ctx, img, x, y, w, h) {
  const scale = Math.min(w / img.width, h / img.height);
  const dw = img.width * scale;
  const dh = img.height * scale;
  ctx.drawImage(img, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function sanitizeFilename(name) {
  return String(name).replace(/[\\/:*?"<>|]/g, '_');
}

/* 12. event binding */
function bindEvents() {
  $$('[data-default-text]').forEach((button) => {
    button.dataset.defaultText = button.textContent;
  });

  $$('.quick-row button').forEach((button) => {
    button.addEventListener('click', () => {
      $('userText').value = button.dataset.example;
      $('userText').focus();
    });
  });

  $('analyzeBtn').addEventListener('click', handleAnalyze);
  $('goTearBtn').addEventListener('click', () => {
    if (!currentResult) return;
    renderTearCanvas(currentResult);
    hide('mouthpieceCard');
    show('tearCard');
    $('tearCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  $('tearBtn').addEventListener('click', openTearAnimation);
  $('saveGalleryBtn').addEventListener('click', () => {
    if (!currentResult) return;
    saveGallery(currentResult);
    renderGallery();
    $('saveHint').textContent = '已经保存到本地幸福画廊。';
    playPetSound('save');
    burstPetLights(8);
  });
  $('downloadBtn').addEventListener('click', () => currentResult && downloadCard(currentResult));
  $('clearGalleryBtn').addEventListener('click', clearGallery);
  $('safetyOkBtn').addEventListener('click', resetToInput);
  $('startOverBtn').addEventListener('click', resetToInput);
}

async function handleAnalyze() {
  const text = $('userText').value.trim();
  if (!text) {
    $('inputHint').textContent = '先写一句状态，或者点一个示例。';
    $('userText').focus();
    return;
  }

  $('inputHint').textContent = '';
  const safety = basicSafetyCheck(text);
  if (!safety.safe) {
    currentResult = null;
    renderSafetyCard();
    return;
  }

  const button = $('analyzeBtn');
  setButtonLoading(button, true, '猫猫正在听...');
  setPet('./assets/pet_cutouts/cat_listen.png', '我在听。你可以不用把话说得很完整。', 'listen');
  burstPetLights(5);

  const minimumListening = new Promise((resolve) => window.setTimeout(resolve, 760));
  const [result] = await Promise.all([analyzeWithAI(text), minimumListening]);
  currentResult = result;

  renderMouthpiece(currentResult);
  setButtonLoading(button, false);
  hide('inputCard');
  hide('safetyCard');
  show('mouthpieceCard');
  $('mouthpieceCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetToInput() {
  window.clearTimeout(tearTimer);
  hide('safetyCard');
  hide('mouthpieceCard');
  hide('tearCard');
  hide('finalCard');
  show('inputCard');
  $('saveHint').textContent = '';
  $('canvasStage').classList.remove('opened', 'opening');
  $('strokeLayer').classList.add('hidden');
  setPet('./assets/pet_cutouts/cat_idle.png', '我在这里。今天不用很努力，画一笔也可以。', 'idle');
  syncRiveEmotion('neutral');
  $('inputCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

bindEvents();
initPetActor();
initRivePet();
initPetSound();
renderGallery();

