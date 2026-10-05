const messages = [
  {
    name: 'SAD-MAN',
    id: '00724214121313',
    image: 'https://i.imgur.com/wfCvorq.jpeg',
    text: 'Mam plz number barai diyen final e apnar course e CG 4 diyen shobaire',
  },
  {
    name: 'Tareq Ahmed Jibon',
    id: '00724214121317',
    image: 'https://i.imgur.com/yiNABCJ.jpeg',
    text: 'Thank you for making history classes so special, Ma’am! We’ll miss your smile, kindness, and wonderful classes. Wishing you lots of happiness ahead! 💐❤️',
  },
  {
    name: 'MOST. ZANNATUL FERDOUS ZARIN',
    id: '00724214121336',
    sr: true,
    text: 'Miss, one of the biggest things I have learned from you is the beauty of being minimal. You handle everything with so little, yet somehow make such a big impact. I really admire that about you.\n\nYou touched my heart deeply the other day when you said that, in a male-dominated society, women have to face so many things and hear so many words that can leave them traumatized. I have also faced a few such experiences in my life, and I could genuinely relate to what you were saying.\n\nAt that moment, while listening to you, I just felt so connected to your heart and your feelings. I know I will remember your words and your presence for a very long time.\n\nPlease keep me in your prayers. And I will always wish you nothing but the very best in life. 🤗',
  },
  {
    name: 'SHIFAT HASAN',
    id: '00724214121341',
    text: 'One of the best teacher of HUM',
  },
  {
    name: 'Sajid Ahmed Arko',
    id: '00724214121309',
    image: 'https://i.imgur.com/XTVxPFN.jpeg',
    text: 'Assalamualaikum Ma’am,\nThis semester was truly enjoyable because of the way you taught us and your warm nature. You were always cheerful, friendly, and patient with us. Even when we joked around or disturbed the class, you handled everything with a smile. Thank you for making your classes so enjoyable and memorable. We’ll definitely miss your classes😔',
    signature: 'Sajid Ahmed · 309',
  },
  {
    name: 'Anas',
    id: '00724214121332',
    image: 'https://i.imgur.com/farb8F1.jpeg',
    text: 'Best mam!🥰Onk vlobasha,final e ektu num ta baray diyen!',
  },
  {
    name: 'Rakib Ullah Fahim',
    id: '00724214121322',
    image: 'https://i.imgur.com/JHe7ZyB.jpeg',
    text: 'Maam apni chilen 24 er gerila. Maam apni akjon valo manush, apnak Allah nek hayat dan korur.',
  },
  {
    name: 'Md.Shariar Rahman Soyad',
    id: '00724214121319',
    image: 'https://i.imgur.com/ncFHHSq.jpeg',
    text: 'Thank you, Ma’am, for providing us with such informative and helpful lectures. We truly appreciate your effort and guidance.',
  },
  {
    name: 'Talha Jubair',
    id: '00724214121302',
    image: 'https://i.imgur.com/zCzVaAj.jpeg',
    text: 'Ma’am, thank you so much for teaching us throughout this course. Your classes were really enjoyable and informative. It was a pleasure learning History from you. We are still young and have a lot to learn, so please always keep us in your prayers. And if any of our words or behaviour ever hurt you, knowingly or unknowingly, please forgive us. Wishing you all the best, Ma’am. ❤️',
  },
  {
    name: 'Tamanna Mustafa',
    id: '00724214121303',
    text: 'You’re not just a great teacher, but a genuinely wonderful person as well. Your dedication to your work, passion for teaching, and sincerity toward your students truly set you apart. I’ll always have immense respect and admiration for you as a teacher❤️',
  },
  {
    name: 'Md Tahamid Naheen',
    id: '00724214121315',
    image: 'https://i.imgur.com/3S9c1FI.jpeg',
    text: 'Madam, you teach us beautifully and always explain everything to us with a calm mind. Thank you so much for giving us so much leeway and love while teaching us, Madam.',
  },
  {
    name: 'Tazbid Siddique',
    id: '00724214121340',
    image: 'https://i.imgur.com/QCIKaD4.png',
    text: 'Afsana Miss, you are truly one of the most wonderful teachers we ever had in the cruel AUST. Thank you for all your kindness, guidance and support into CT and Mid. Your lessons and memories will always stay with us.\n\nYou will always be remembered with love and respect.',
  },
  {
    name: 'Samiul Alam',
    id: '00724214121335',
    image: 'https://i.imgur.com/SKRXSWx.jpeg',
    text: 'Just wanna say, Thank you for being an amazing teacher, as well as a person. Never felt a single moment of boredom in your classes. We will miss you ma’am. Wishing you all the best for everything ahead.❤️',
  },
  {
    name: 'Istiyak Ahmed Rakib',
    id: '00724214121323',
    image: 'https://i.imgur.com/s9z3LTM.png',
    cr: true,
    text: 'Dear Afsana Ma’am,\nThank you so much for an amazing semester! The way you taught history was absolutely brilliant and made the subject so engaging. You explained everything so beautifully that you easily became my favorite teacher this semester.\n\nI will genuinely miss your classes and your wonderful teaching style. Wishing you all the very best for your future!\n\nBest regards,\nIstiyak Ahmed Rakib',
  },
  {
    name: 'Shamayel Shahir Khan',
    id: '00724214121298',
    image: 'https://i.imgur.com/3ydJWGq.jpeg',
    text: 'Ma\'am this is the only class that I would enjoy and attend without any reluctance. Ma’am, it was truly a pleasure being your student. Your classes were not only informative but also genuinely enjoyable. The way you taught made us feel the subject more alive and memorable. Thank you for making our classes such a wonderful experience. We’ll always remember you and your classes with great fondness. Wishing you all the very best, Ma’am!',
  },
  {
    name: 'Samiul Jaman Sami',
    id: '00724214121298',
    image: 'https://i.imgur.com/4BCHi02.jpeg',
    text: `Dear Mam,

It’s honestly hard to believe that the semester is already over. I still remember how our journey started, and funny enough, one of my first memories with you is getting caught using my mobile during a quiz. 😂

At first, I won’t lie, I was a little upset with you for that. But now, when I look back, I’m actually grateful for that moment. Because that was my first and, thankfully, my last time getting caught using my mobile during a quiz. So I guess you taught me a lesson that I’ll remember for a long time. 😂

Apart from all the teasing, getting caught, and you asking me questions almost every day, I genuinely had a really good semester with you. I’ll especially miss the way you used to come to class and ask about me every day. And of course, I’ll miss being randomly picked to answer questions when I least expected it. 😭

I know I have annoyed you quite a lot in class, and I’m really sorry for that. Especially for all the times I used my mobile in class—sorry, Mam. Please forgive me for all my mischief. 🥲

Thank you for all the memories, patience, and for making the semester so memorable. I’ll genuinely miss having you as my faculty and seeing you in class.

Wishing you nothing but the very best for the days ahead. I hope you stay happy, healthy, and keep inspiring students the way you always do.

Take care, Mam. And thank you for everything. ❤️

— Sami
  
[AI detected in this text -- 79%]`,
  },
  {
    name: 'KIRAM AHMED KHAN',
    id: '00724214121328',
    image: 'https://i.imgur.com/4Pl5gDN.jpeg',
    text: `Ma’am!

I can't end this text if I start writing it. But everything must end except the Almighty Creator. The text might be too long. So, I ask that you read with patience, because this comes from the core of my heart.

Firstly, I'm sorry. I apologise for my stupidity; I never wanted to do that in your classes, but somehow I did, and I am quite ashamed. Sometimes I felt regret about my behaviour. But, for the sake of Allah, I never wanted to make you feel disturbed in the classroom. After all, we're humans. And humans make mistakes. 

Ma’am!
Maybe you're the only faculty member whose classes I have attended with 100% attention, the best I have since I got admitted to AUST. Why? I don't even know the answer. But there is something in you that captures attention so nicely that it becomes quite impossible to ignore. Maybe this happens because of your minimal approach, or the innocence in you. Whatever it is, it is good enough. 

Ma’am! 
You weren't adjacent to the syllabus the whole time. Besides teaching, you taught us about the duties of a human being. You taught us about social manners and more! You also taught us how to treat a girl. You taught us our duties as good citizens. You discussed the country's social and national problems. You know what, all these side talks made you incredibly successful as a teacher. I swear, I can claim to the Almighty in favor of you over your duty. You nailed your duty. Now it's my turn to prove you a successful teacher. And In Sha Allah, I'll do it! 

Ma’am!
As I said, everything must end except the Creator. Though I'm not done yet, I'm gonna end it. But before ending, I would like to admire you, Ma’am. 

Thank you for being. May the Almighty stay with you in every sphere of life. 

Good Luck!


~ Kiram`,
  },
];

const screens = [...document.querySelectorAll('.screen')];
const introScreen = document.getElementById('intro');
const giftScreen = document.getElementById('gift-screen');
const messageScreen = document.getElementById('message-screen');
const endingScreen = document.getElementById('ending-screen');
const giftButton = document.getElementById('gift-button');
const burstLayer = document.getElementById('burst-layer');
const messageCard = document.getElementById('message-card');
const messageAccents = ['#a85d74', '#9b7849', '#66877d', '#7c7197', '#ad705f', '#668493', '#8d687c'];
let currentMessage = 0;
let touchStartX = 0;
let touchStartY = 0;
let burstFinished = false;
let ambientMusicContext = null;
let ambientMusicMaster = null;
let ambientMusicTimer = 0;
let ambientMusicNextChordTime = 0;
let ambientMusicChordIndex = 0;
let ambientMusicStarted = false;

const ambientChordProgression = [
  { notes: [130.81, 196, 261.63, 329.63], melody: [523.25, 392, 329.63, 392] }, // Cmaj7
  { notes: [110, 164.81, 220, 261.63], melody: [440, 523.25, 659.25, 523.25] }, // Am7
  { notes: [87.31, 174.61, 220, 261.63], melody: [349.23, 440, 523.25, 440] }, // Fmaj7
  { notes: [98, 196, 246.94, 293.66], melody: [392, 493.88, 587.33, 493.88] }, // G6
];

function scheduleAmbientChord(chord, startAt) {
  const chordDuration = 8;
  chord.notes.forEach((frequency, voiceIndex) => {
    const voice = ambientMusicContext.createOscillator();
    const voiceGain = ambientMusicContext.createGain();
    voice.type = 'sine';
    voice.frequency.setValueAtTime(frequency, startAt);
    voice.detune.value = voiceIndex % 2 === 0 ? -2 : 2;
    voiceGain.gain.setValueAtTime(0.0001, startAt);
    voiceGain.gain.linearRampToValueAtTime(0.07, startAt + 1.8);
    voiceGain.gain.setValueAtTime(0.07, startAt + 6.1);
    voiceGain.gain.exponentialRampToValueAtTime(0.0001, startAt + chordDuration);
    voice.connect(voiceGain).connect(ambientMusicMaster);
    voice.start(startAt);
    voice.stop(startAt + chordDuration + 0.04);
  });

  chord.melody.forEach((frequency, noteIndex) => {
    const noteStart = startAt + 0.8 + noteIndex * 1.7;
    const note = ambientMusicContext.createOscillator();
    const noteGain = ambientMusicContext.createGain();
    note.type = 'sine';
    note.frequency.setValueAtTime(frequency, noteStart);
    noteGain.gain.setValueAtTime(0.0001, noteStart);
    noteGain.gain.linearRampToValueAtTime(0.05, noteStart + 0.08);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, noteStart + 1.35);
    note.connect(noteGain).connect(ambientMusicMaster);
    note.start(noteStart);
    note.stop(noteStart + 1.4);
  });
}

function scheduleAmbientMusic() {
  if (!ambientMusicContext || ambientMusicContext.state === 'closed') return;
  const scheduleUntil = ambientMusicContext.currentTime + 10;
  while (ambientMusicNextChordTime < scheduleUntil) {
    const chord = ambientChordProgression[ambientMusicChordIndex % ambientChordProgression.length];
    scheduleAmbientChord(chord, ambientMusicNextChordTime);
    ambientMusicNextChordTime += 7.6;
    ambientMusicChordIndex += 1;
  }
  ambientMusicTimer = window.setTimeout(scheduleAmbientMusic, 1500);
}

function startAmbientSoundtrack() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  try {
    if (!ambientMusicContext) {
      ambientMusicContext = new AudioContextClass();
      ambientMusicMaster = ambientMusicContext.createGain();
      ambientMusicMaster.gain.setValueAtTime(0.0001, ambientMusicContext.currentTime);
      ambientMusicMaster.gain.setTargetAtTime(3.8, ambientMusicContext.currentTime + 0.1, 1.8);

      const ambientMusicLimiter = ambientMusicContext.createDynamicsCompressor();
      ambientMusicLimiter.threshold.value = -2;
      ambientMusicLimiter.knee.value = 2;
      ambientMusicLimiter.ratio.value = 12;
      ambientMusicLimiter.attack.value = 0.003;
      ambientMusicLimiter.release.value = 0.18;
      ambientMusicMaster.connect(ambientMusicLimiter).connect(ambientMusicContext.destination);
    }

    if (!ambientMusicStarted) {
      ambientMusicStarted = true;
      ambientMusicNextChordTime = ambientMusicContext.currentTime + 0.1;
      scheduleAmbientMusic();
    }

    if (ambientMusicContext.state !== 'running') {
      ambientMusicContext.resume().catch(() => {});
    }
  } catch {
    // Autoplay may be blocked until the visitor interacts with the page.
  }
}

startAmbientSoundtrack();
document.addEventListener('pointerdown', startAmbientSoundtrack, { capture: true });
document.addEventListener('keydown', startAmbientSoundtrack);
window.addEventListener('pagehide', () => {
  window.clearTimeout(ambientMusicTimer);
  ambientMusicContext?.suspend().catch(() => {});
});
window.addEventListener('pageshow', () => {
  if (ambientMusicContext && document.visibilityState !== 'hidden') startAmbientSoundtrack();
});
const silhouette = `<svg class="avatar-placeholder" viewBox="0 0 64 64" role="img" aria-label="Student portrait placeholder" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="avatar-bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#f2eeee"/><stop offset="1" stop-color="#d5d2d3"/></linearGradient></defs><rect width="64" height="64" fill="url(#avatar-bg)"/><circle cx="32" cy="24" r="11" fill="#898387"/><path d="M11 64c1.9-14.1 9.2-21.7 21-21.7S51.1 49.9 53 64" fill="#777277"/><path d="M21 21c1.1-8.2 5.3-12.3 12.1-12.3 7.3 0 10.8 4.8 10.8 12.5-2.7-2.6-6.1-3.8-10-3.8-4.6 0-8.8 1.3-12.9 3.6" fill="#777277"/></svg>`;

function showScreen(screen) {
  screens.forEach((item) => {
    const active = item === screen;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-hidden', String(!active));
    item.inert = !active;
  });
}

function renderMessage(index, animate = true) {
  currentMessage = index;
  const entry = messages[index];
  messageCard.style.setProperty('--message-accent', messageAccents[index % messageAccents.length]);
  const avatar = document.getElementById('avatar');
  const name = document.getElementById('message-name');
  const id = document.getElementById('message-id');
  const text = document.getElementById('message-text');
  const crTag = document.getElementById('cr-tag');
  const srTag = document.getElementById('sr-tag');

  if (animate) {
    messageCard.classList.remove('is-changing');
    void messageCard.offsetWidth;
    messageCard.classList.add('is-changing');
    window.setTimeout(() => messageCard.classList.remove('is-changing'), 190);
  }

  avatar.innerHTML = silhouette;
  if (entry.image) {
    const photo = new Image();
    photo.alt = `${entry.name}’s photo`;
    photo.src = entry.image;
    photo.onload = () => {
      if (currentMessage === index) avatar.replaceChildren(photo);
    };
  }
  name.textContent = entry.name;
  id.textContent = entry.id;
  text.textContent = entry.signature ? `${entry.text}\n\n— ${entry.signature}` : entry.text;
  crTag.hidden = !entry.cr;
  srTag.hidden = !entry.sr;
  document.getElementById('progress-label').textContent = `${String(index + 1).padStart(2, '0')}  /  ${String(messages.length).padStart(2, '0')}`;
  document.getElementById('progress-bar').style.width = `${((index + 1) / messages.length) * 100}%`;
  document.getElementById('previous-button').disabled = index === 0;
  document.getElementById('next-button').querySelector('.button-label').textContent = index === messages.length - 1 ? 'Finish' : 'Next';
  document.getElementById('announcement').textContent = `Message ${index + 1} of ${messages.length}, from ${entry.name}`;
}

function makeBurst() {
  const letters = ['♡', '✿', 'A', '♥', '✧', 'M', '♡', '✦', 'T', 'S', '✿', '♥', 'F', '♡', '✧', 'B', '✿', '♥', '♡', '✦', 'L', '✧', '♥', '♡', '✿', 'R', 'A', '♥', '✧', '♡', 'T', '✿', '♥', 'S', '♡', '✦', 'A', '✿', '♥', '♡', '✧', 'M', '♥', '✿'];
  const tones = ['#a85d74', '#bd778a', '#916681', '#ba7969', '#9b7849'];
  burstLayer.replaceChildren();
  letters.forEach((letter, index) => {
    const piece = document.createElement('span');
    piece.className = 'burst-letter';
    piece.textContent = letter;
    piece.style.setProperty('--x', `${Math.round((Math.random() - .5) * window.innerWidth * .92)}px`);
    piece.style.setProperty('--y', `${Math.round((Math.random() - .5) * window.innerHeight * .92)}px`);
    piece.style.setProperty('--rotate', `${Math.round((Math.random() - .5) * 150)}deg`);
    piece.style.setProperty('--delay', `${Math.random() * .18}s`);
    piece.style.setProperty('--size', `${21 + Math.round(Math.random() * 25)}px`);
    piece.style.setProperty('--tone', tones[index % tones.length]);
    burstLayer.append(piece);
  });
  window.setTimeout(() => burstLayer.replaceChildren(), 2550);
}

let siteSoundContext = null;

function getSiteSoundContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  try {
    siteSoundContext ??= new AudioContextClass();
    if (siteSoundContext.state === 'suspended') siteSoundContext.resume().catch(() => {});
    return siteSoundContext;
  } catch {
    return null;
  }
}

function playGiftOpeningSound() {
  const context = getSiteSoundContext();
  if (!context) return;

  try {
    const now = context.currentTime;

    // A soft airy sweep gives the gift a sense of lift as its lid opens.
    const bufferLength = Math.floor(context.sampleRate * 0.82);
    const noiseBuffer = context.createBuffer(1, bufferLength, context.sampleRate);
    const samples = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferLength; i += 1) {
      samples[i] = (Math.random() * 2 - 1) * (1 - i / bufferLength);
    }
    const noise = context.createBufferSource();
    noise.buffer = noiseBuffer;
    const sweep = context.createBiquadFilter();
    sweep.type = 'bandpass';
    sweep.Q.value = 0.65;
    sweep.frequency.setValueAtTime(520, now);
    sweep.frequency.exponentialRampToValueAtTime(2900, now + 0.34);
    sweep.frequency.exponentialRampToValueAtTime(1050, now + 0.78);
    const sweepGain = context.createGain();
    sweepGain.gain.setValueAtTime(0.0001, now);
    sweepGain.gain.exponentialRampToValueAtTime(0.075, now + 0.15);
    sweepGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);
    noise.connect(sweep).connect(sweepGain).connect(context.destination);
    noise.start(now);
    noise.stop(now + 0.82);

    // A quiet low note makes the pop feel warm rather than sharp.
    const thump = context.createOscillator();
    const thumpGain = context.createGain();
    thump.type = 'sine';
    thump.frequency.setValueAtTime(165, now);
    thump.frequency.exponentialRampToValueAtTime(68, now + 0.24);
    thumpGain.gain.setValueAtTime(0.0001, now);
    thumpGain.gain.exponentialRampToValueAtTime(0.065, now + 0.012);
    thumpGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.31);
    thump.connect(thumpGain).connect(context.destination);
    thump.start(now);
    thump.stop(now + 0.32);

    // A small A-major chime blooms just after the burst.
    [
      { frequency: 880, delay: 0.04, volume: 0.045, length: 0.95 },
      { frequency: 1108.73, delay: 0.1, volume: 0.032, length: 1.12 },
      { frequency: 1318.51, delay: 0.16, volume: 0.024, length: 1.32 },
      { frequency: 1760, delay: 0.24, volume: 0.014, length: 1.48 },
    ].forEach(({ frequency, delay, volume, length }) => {
      const startAt = now + delay;
      const chime = context.createOscillator();
      const chimeGain = context.createGain();
      chime.type = 'sine';
      chime.frequency.value = frequency;
      chimeGain.gain.setValueAtTime(0.0001, startAt);
      chimeGain.gain.exponentialRampToValueAtTime(volume, startAt + 0.025);
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, startAt + length);
      chime.connect(chimeGain).connect(context.destination);
      chime.start(startAt);
      chime.stop(startAt + length + 0.02);
    });
  } catch {
    // Keep the gift reveal working on browsers without usable Web Audio.
  }
}

function playSeeSound() {
  const context = getSiteSoundContext();
  if (!context) return;
  try {
    const now = context.currentTime;
    const tup = context.createOscillator();
    const tupGain = context.createGain();
    tup.type = 'sine';
    tup.frequency.setValueAtTime(205, now);
    tup.frequency.exponentialRampToValueAtTime(96, now + 0.105);
    tupGain.gain.setValueAtTime(0.0001, now);
    tupGain.gain.exponentialRampToValueAtTime(0.095, now + 0.008);
    tupGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
    tup.connect(tupGain).connect(context.destination);
    tup.start(now);
    tup.stop(now + 0.17);

    const tap = context.createOscillator();
    const tapGain = context.createGain();
    tap.type = 'triangle';
    tap.frequency.setValueAtTime(470, now);
    tap.frequency.exponentialRampToValueAtTime(245, now + 0.045);
    tapGain.gain.setValueAtTime(0.0001, now);
    tapGain.gain.exponentialRampToValueAtTime(0.018, now + 0.004);
    tapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.055);
    tap.connect(tapGain).connect(context.destination);
    tap.start(now);
    tap.stop(now + 0.06);
  } catch {
    // Sound remains an enhancement; navigation must always work.
  }
}

function playPageTurnSound(direction = 1) {
  const context = getSiteSoundContext();
  if (!context) return;
  try {
    const now = context.currentTime;
    const duration = 0.31;
    const bufferLength = Math.floor(context.sampleRate * duration);
    const buffer = context.createBuffer(1, bufferLength, context.sampleRate);
    const samples = buffer.getChannelData(0);
    for (let i = 0; i < bufferLength; i += 1) {
      samples[i] = (Math.random() * 2 - 1) * (1 - i / bufferLength);
    }

    const rustle = context.createBufferSource();
    rustle.buffer = buffer;
    const paperFilter = context.createBiquadFilter();
    paperFilter.type = 'bandpass';
    paperFilter.Q.value = 0.8;
    const startFrequency = direction > 0 ? 1150 : 520;
    const endFrequency = direction > 0 ? 520 : 1150;
    paperFilter.frequency.setValueAtTime(startFrequency, now);
    paperFilter.frequency.exponentialRampToValueAtTime(endFrequency, now + duration);
    const paperGain = context.createGain();
    paperGain.gain.setValueAtTime(0.0001, now);
    paperGain.gain.exponentialRampToValueAtTime(0.045, now + 0.075);
    paperGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    rustle.connect(paperFilter).connect(paperGain).connect(context.destination);
    rustle.start(now);
    rustle.stop(now + duration);
  } catch {
    // Keep page turns responsive if Web Audio is unavailable.
  }
}

function openGift() {
  if (burstFinished) return;
  burstFinished = true;
  playGiftOpeningSound();
  giftButton.classList.add('is-opening');
  makeBurst();
  window.setTimeout(() => {
    showScreen(messageScreen);
    renderMessage(0, false);
  }, 2250);
}

function nextMessage() {
  if (currentMessage < messages.length - 1) {
    renderMessage(currentMessage + 1);
  } else {
    showScreen(endingScreen);
  }
}

function previousMessage() {
  if (currentMessage > 0) renderMessage(currentMessage - 1);
}

document.getElementById('see-button').addEventListener('click', () => {
  showScreen(giftScreen);

  // Navigation should still work if the browser blocks or lacks Web Audio.
  try {
    playSeeSound();
    startAmbientSoundtrack();
  } catch {
    // Sound is optional; the gift screen is already visible.
  }
});
giftButton.addEventListener('click', openGift);
document.getElementById('previous-button').addEventListener('click', () => {
  if (currentMessage === 0) return;
  playPageTurnSound(-1);
  previousMessage();
});
document.getElementById('next-button').addEventListener('click', () => {
  playPageTurnSound(1);
  nextMessage();
});
document.getElementById('revisit-button').addEventListener('click', () => {
  showScreen(messageScreen);
  renderMessage(0);
});

messageScreen.addEventListener('pointerdown', (event) => {
  if (event.pointerType === 'mouse' || event.target.closest('button')) return;
  touchStartX = event.clientX;
  touchStartY = event.clientY;
});
messageScreen.addEventListener('pointerup', (event) => {
  if (event.pointerType === 'mouse' || event.target.closest('button')) return;
  const deltaX = event.clientX - touchStartX;
  const deltaY = event.clientY - touchStartY;
  if (Math.abs(deltaX) < 48 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) return;
  // Match the requested direction: swipe right for next, left for previous.
  if (deltaX > 0) {
    playPageTurnSound(1);
    nextMessage();
  } else if (currentMessage > 0) {
    playPageTurnSound(-1);
    previousMessage();
  }
});

document.addEventListener('keydown', (event) => {
  if (!messageScreen.classList.contains('is-active') || event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.key === 'ArrowRight') nextMessage();
  if (event.key === 'ArrowLeft') previousMessage();
});

const petals = document.getElementById('petals');
['✿', '♡', '✧', '❀', '·', '✦', '♡', '✿', '·', '❀', '♡', '✧', '✿', '·', '✦', '♡', '❀', '✿', '♡', '✧', '·', '✦', '♡', '❀', '✿', '♡'].forEach((glyph, index) => {
  const petal = document.createElement('span');
  petal.className = 'petal';
  petal.textContent = glyph;
  petal.style.left = `${(index * 37 + 8) % 100}%`;
  petal.style.setProperty('--size', `${13 + (index % 4) * 5}px`);
  petal.style.setProperty('--duration', `${14 + (index % 5) * 3}s`);
  petal.style.setProperty('--delay', `${-index * 1.1}s`);
  petal.style.setProperty('--sway', `${Math.round((index % 2 ? -1 : 1) * (30 + index * 4))}px`);
  petals.append(petal);
});
// Boost generated interaction sounds for room playback while controlling peaks.
(() => {
  const nativeAudioNodeConnect = AudioNode.prototype.connect;
  let effectsOutputGain = null;

  const installEffectsOutputBoost = () => {
    AudioNode.prototype.connect = function (destination, ...options) {
      if (
        typeof siteSoundContext !== "undefined" &&
        siteSoundContext &&
        this.context === siteSoundContext &&
        destination === siteSoundContext.destination
      ) {
        if (!effectsOutputGain) {
          effectsOutputGain = siteSoundContext.createGain();
          effectsOutputGain.gain.value = 2.5;

          const effectsCompressor = siteSoundContext.createDynamicsCompressor();
          effectsCompressor.threshold.value = -6;
          effectsCompressor.knee.value = 4;
          effectsCompressor.ratio.value = 8;
          effectsCompressor.attack.value = 0.003;
          effectsCompressor.release.value = 0.18;

          nativeAudioNodeConnect.call(effectsOutputGain, effectsCompressor);
          nativeAudioNodeConnect.call(effectsCompressor, siteSoundContext.destination);
        }

        return nativeAudioNodeConnect.call(this, effectsOutputGain, ...options);
      }

      return nativeAudioNodeConnect.call(this, destination, ...options);
    };
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", installEffectsOutputBoost, { once: true });
  } else {
    installEffectsOutputBoost();
  }
})();
