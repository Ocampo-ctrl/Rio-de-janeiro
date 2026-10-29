(() => {
  "use strict";

  /* ============ PREGUNTAS ============ */
  const QUESTIONS = [
    {
      q: "¿Cómo se llama el gran escenario donde desfilan las escuelas de samba del Grupo Especial en Río?",
      options: ["Maracaná", "Sambódromo (Marquês de Sapucaí)", "Arcos da Lapa", "Estadio Olímpico Nilton Santos"],
      answer: 1,
      hint: "Tengo gradas y una avenida; con música y carrozas, ¡me lleno de vida! ¿Qué lugar soy?",
      explain: "El Sambódromo está en la avenida Marquês de Sapucaí y se inauguró en 1984, construido especialmente para los desfiles."
    },
    {
      q: "¿Qué famoso arquitecto brasileño diseñó el Sambódromo?",
      options: ["Lúcio Costa", "Roberto Burle Marx", "Oscar Niemeyer", "Paulo Mendes da Rocha"],
      answer: 2,
      hint: "Diseñé edificios con curvas, famosos en Brasilia. ¿Quién soy?",
      explain: "Oscar Niemeyer, autor de gran parte de Brasilia, diseñó el Sambódromo."
    },
    {
      q: "¿Con qué período religioso está relacionado el Carnaval, que se celebra justo antes de que empiece?",
      options: ["Adviento", "Semana Santa", "Cuaresma", "Pentecostés"],
      answer: 2,
      hint: "Después del Miércoles de Ceniza comienzo; durante cuarenta días, reflexión propongo. ¿Qué período soy?",
      explain: "El Carnaval termina el Miércoles de Ceniza, día en que comienza la Cuaresma de 40 días."
    },
    {
      q: "¿Cómo se llama la figura que es coronada cada año como «rey» simbólico del Carnaval y recibe las llaves de la ciudad?",
      options: ["Rei Momo", "Rei Pelé", "Rei Sol", "Rei Samba"],
      answer: 0,
      hint: "Soy el rey de la fiesta y las llaves de la ciudad puedo recibir. ¿Quién soy?",
      explain: "El Rei Momo, inspirado en Momo, dios griego de la burla, abre oficialmente el Carnaval al recibir las llaves de la ciudad."
    },
    {
      q: "¿Cuál es el antecedente del Carnaval traído por los colonos portugueses a Brasil, en el que la gente se lanzaba agua, harina y otras cosas?",
      options: ["El Entrudo", "La Capoeira", "El Frevo", "La Folia de Reis"],
      answer: 0,
      hint: "Con agua y harina se jugaba en mi fiesta; antes del Carnaval fui una costumbre portuguesa. ¿Qué soy?",
      explain: "El Entrudo era una fiesta popular portuguesa de juegos y bromas con agua; fue el origen de las celebraciones de carnaval en Brasil durante la época colonial."
    },
    {
      q: "¿Cuáles son los colores de la tradicional escuela de samba Mangueira?",
      options: ["Azul y blanco", "Rojo y negro", "Verde y rosa", "Amarillo y azul"],
      answer: 2,
      hint: "Como un jardín visto al bailar, mezclo el color de las hojas con el de una flor. ¿Cuáles son mis colores?",
      explain: "Mangueira es conocida como la «Verde e Rosa» y es una de las escuelas con más títulos en la historia."
    },
    {
      q: "¿Cómo se llama la primera carroza de cada desfile, la que abre el espectáculo de una escuela de samba?",
      options: ["Comissão de frente", "Abre-alas", "Bateria", "Destaque"],
      answer: 1,
      hint: "Voy al principio del desfile y anuncio lo que viene detrás. ¿Cómo me llamo?",
      explain: "El «abre-alas» es la primera carroza y presenta el tema (enredo) de la escuela."
    },
    {
      q: "¿Cómo se llama la pareja que baila llevando la bandera de la escuela de samba?",
      options: ["Rei y Rainha", "Mestre-sala y Porta-bandeira", "Passista y Puxador", "Ala y Alegoría"],
      answer: 1,
      hint: "En pareja bailamos con cuidado; uno guía los pasos y la otra lleva el estandarte. ¿Quiénes somos?",
      explain: "El Mestre-sala y la Porta-bandeira bailan juntos protegiendo y exhibiendo la bandera de la escuela, y son evaluados por un jurado."
    },
    {
      q: "¿Cómo se llama la canción temática que cada escuela de samba compone para contar su historia en el desfile?",
      options: ["Samba-enredo", "Bossa nova", "Marchinha", "Pagode"],
      answer: 0,
      hint: "Cuento una historia con ritmo y canción mientras la escuela desfila. ¿Qué canción soy?",
      explain: "El samba-enredo es el himno de cada escuela y desarrolla el tema de su desfile; el público lo canta de principio a fin."
    },
    {
      q: "¿Cómo se llama el grupo de percusionistas que marca el ritmo de cada escuela de samba?",
      options: ["Orquesta", "Charanga", "Banda", "Bateria"],
      answer: 3,
      hint: "Somos muchos músicos y marcamos el compás con tambores. ¿Cómo se llama nuestro grupo?",
      explain: "La bateria es el corazón de la escuela, con surdos, cuícas, tamborines y otros instrumentos. La dirige un mestre de bateria y suele acompañarla una Rainha de Bateria."
    },
    {
      q: "¿En qué país está la ciudad de Río de Janeiro?",
      options: ["Brasil", "Argentina", "México", "Portugal"],
      answer: 0,
      hint: "Tengo la Amazonía y hablo portugués; en mi costa está Río. ¿Qué país soy?",
      explain: "Río de Janeiro es una ciudad de Brasil."
    },
    {
      q: "¿Qué idioma se habla principalmente en Brasil?",
      options: ["Español", "Portugués", "Inglés", " Brasileño"],
      answer: 1,
      hint: "Se habla en Portugal y también en Brasil. ¿Qué idioma soy?",
      explain: "El idioma oficial de Brasil es el portugués."
    },
    {
      q: "¿Qué música es muy popular durante el Carnaval de Río?",
      options: ["Samba", "Vals", "Tango", "Flamenco"],
      answer: 0,
      hint: "Con tambores y alegría acompaño el Carnaval; muchos me bailan sin parar. ¿Qué música soy?",
      explain: "La samba es uno de los ritmos más asociados con el Carnaval de Río."
    },
    {
      q: "¿Qué hacen muchas personas al ritmo de la samba?",
      options: ["Bailan", "Nadan", "Duermen", "Cocinan"],
      answer: 0,
      hint: "Cuando suena la samba, doy pasos y vueltas. ¿Qué hago?",
      explain: "Durante el Carnaval, muchas personas bailan samba y disfrutan de la música."
    },
    {
      q: "¿Qué hacen las escuelas de samba durante el Carnaval?",
      options: ["Desfilan", "Compiten en una carrera", "Juegan al fútbol", "Navegan por el río"],
      answer: 0,
      hint: "Con trajes y música avanzamos juntas por el Sambódromo. ¿Qué hacemos?",
      explain: "Las escuelas de samba desfilan con sus bailarines, músicos y carrozas."
    },
    {
      q: "¿Qué suelen llevar muchos bailarines durante el desfile?",
      options: ["Disfraces coloridos", "Uniformes de oficina", "Pijamas", "Ropa carnavelera"],
      answer: 0,
      hint: "Brillo con plumas y colores durante la fiesta. ¿Qué llevo puesto?",
      explain: "Muchos participantes usan disfraces y trajes coloridos para celebrar el Carnaval."
    },
    {
      q: "¿Qué instrumento ayuda a marcar el ritmo de la samba?",
      options: ["Tambor", "Violín", "Arpa", "Guitarra eléctrica"],
      answer: 0,
      hint: "Tengo parche y hago pum, pum; me golpean para marcar el ritmo. ¿Qué instrumento soy?",
      explain: "Los tambores y otros instrumentos de percusión ayudan a marcar el ritmo de la samba."
    },
    {
      q: "¿Cómo se llama una playa muy famosa de Río de Janeiro?",
      options: ["Copacabana", "La Barceloneta", "Playa del Carmen", "Mar del Plata"],
      answer: 0,
      hint: "Mi arena y mis olas son famosas; mi nombre empieza como un trofeo. ¿Qué playa soy?",
      explain: "Copacabana es una de las playas más conocidas de Río de Janeiro."
    },
    {
      q: "¿Qué lleva la pareja de Mestre-sala y Porta-bandeira?",
      options: ["La bandera de su escuela", "Una pelota", "Un tambor grande", "Una antorcha"],
      answer: 0,
      hint: "Tengo colores y un emblema; la pareja baila para mostrarme. ¿Qué llevo en alto?",
      explain: "La Porta-bandeira lleva y presenta la bandera de la escuela mientras baila con el Mestre-sala."
    },
    {
      q: "¿Qué suele acompañar a las escuelas en sus desfiles?",
      options: ["Carrozas decoradas", "Trenes", "Barcos", "Aviones"],
      answer: 0,
      hint: "Voy sobre ruedas, cubierta de adornos y figuras; acompaño el desfile. ¿Qué soy?",
      explain: "Las carrozas decoradas forman parte del espectáculo de los desfiles de las escuelas de samba."
    }
  ];

  const TIME_PER_QUESTION = 20;
  const LETTERS = ["A", "B", "C", "D"];

  /* ============ ATAJOS ============ */
  const $ = (s) => document.querySelector(s);
  const screens = { start: $("#screen-start"), game: $("#screen-game"), end: $("#screen-end") };

  /* ============ ESTADO ============ */
  const state = {
    teamCount: 1,
    teams: [],
    order: [],
    i: 0,
    current: null,
    locked: false,
    hintUsed: false,
    deadline: 0,
    rafId: 0,
    lastTickSec: -1,
    results: [],
    sound: true
  };

  /* ============ UTILIDADES ============ */
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function show(name) {
    Object.entries(screens).forEach(([k, el]) => { el.hidden = k !== name; });
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  /* ============ SONIDO (WebAudio, sin archivos) ============ */
  let audioCtx = null;
  function ctx() {
    if (!state.sound) return null;
    if (!audioCtx) {
      try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return null; }
    }
    if (audioCtx.state === "suspended") audioCtx.resume();
    return audioCtx;
  }
  function tone(freq, dur, type, delay, vol) {
    const c = ctx();
    if (!c) return;
    const t0 = c.currentTime + (delay || 0);
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type || "sine";
    osc.frequency.setValueAtTime(freq, t0);
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(vol || 0.15, t0 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(gain).connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
  }
  const sfx = {
    start() { [392, 523, 659, 784].forEach((f, k) => tone(f, 0.18, "triangle", k * 0.09, 0.16)); },
    right() { [523, 659, 784, 1047].forEach((f, k) => tone(f, 0.2, "triangle", k * 0.08, 0.18)); },
    wrong() { tone(220, 0.25, "sawtooth", 0, 0.12); tone(165, 0.4, "sawtooth", 0.18, 0.12); },
    tick() { tone(880, 0.06, "square", 0, 0.06); },
    timeout() { tone(300, 0.2, "square", 0, 0.1); tone(200, 0.45, "square", 0.2, 0.1); },
    fanfare() {
      [523, 523, 523, 659, 784, 659, 784, 1047].forEach((f, k) => tone(f, 0.22, "triangle", k * 0.14, 0.18));
    }
  };

  /* ============ CONFETI ============ */
  const canvas = $("#confetti");
  const g = canvas.getContext("2d");
  let particles = [];
  let confettiRunning = false;
  const COLORS = ["#ffc72c", "#ff2e93", "#22a7f0", "#00b36b", "#ffffff", "#ff7a00"];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  function burst(x, y, count, spread) {
    if (reducedMotion) return;
    for (let k = 0; k < count; k++) {
      const angle = (-Math.PI / 2) + (Math.random() - 0.5) * (spread || Math.PI * 1.2);
      const speed = 6 + Math.random() * 9;
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        w: 6 + Math.random() * 8,
        h: 4 + Math.random() * 6,
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.4,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        life: 0,
        max: 90 + Math.random() * 60
      });
    }
    if (!confettiRunning) { confettiRunning = true; requestAnimationFrame(drawConfetti); }
  }

  function drawConfetti() {
    g.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles = particles.filter((p) => p.life < p.max && p.y < window.innerHeight + 40);
    for (const p of particles) {
      p.life++;
      p.vy += 0.28;
      p.vx *= 0.99;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      g.save();
      g.translate(p.x, p.y);
      g.rotate(p.rot);
      g.globalAlpha = Math.max(0, 1 - p.life / p.max);
      g.fillStyle = p.color;
      g.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      g.restore();
    }
    if (particles.length) {
      requestAnimationFrame(drawConfetti);
    } else {
      confettiRunning = false;
      g.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
  }

  function bigCelebration() {
    const w = window.innerWidth, h = window.innerHeight;
    burst(w * 0.2, h * 0.85, 90, Math.PI * 0.7);
    burst(w * 0.8, h * 0.85, 90, Math.PI * 0.7);
    setTimeout(() => burst(w * 0.5, h * 0.9, 120, Math.PI * 1.1), 350);
    setTimeout(() => burst(w * 0.35, h * 0.9, 80, Math.PI * 0.9), 800);
    setTimeout(() => burst(w * 0.65, h * 0.9, 80, Math.PI * 0.9), 1100);
  }

  /* ============ PANTALLA DE INICIO ============ */
  function renderNameInputs() {
    const box = $("#names");
    const existing = Array.from(box.querySelectorAll("input")).map((i) => i.value);
    box.innerHTML = "";
    for (let k = 0; k < state.teamCount; k++) {
      const label = document.createElement("label");
      label.textContent = state.teamCount === 1 ? "Nombre del jugador" : "Nombre del equipo " + (k + 1);
      const input = document.createElement("input");
      input.type = "text";
      input.maxLength = 20;
      input.value = existing[k] || (state.teamCount === 1 ? "Jugador" : "Equipo " + (k + 1));
      label.appendChild(input);
      box.appendChild(label);
    }
  }

  $("#modes").addEventListener("click", (e) => {
    const btn = e.target.closest(".mode");
    if (!btn) return;
    state.teamCount = Number(btn.dataset.n);
    document.querySelectorAll(".mode").forEach((m) => m.setAttribute("aria-pressed", String(m === btn)));
    renderNameInputs();
  });

  /* ============ MARCADOR ============ */
  function renderScoreboard() {
    const sb = $("#scoreboard");
    sb.innerHTML = "";
    state.teams.forEach((t, idx) => {
      const chip = document.createElement("div");
      chip.className = "chip";
      chip.dataset.idx = idx;
      const name = document.createElement("span");
      name.className = "name";
      name.textContent = t.name;
      const score = document.createElement("span");
      score.className = "score";
      score.textContent = t.score;
      chip.append(name, score);
      sb.appendChild(chip);
    });
    highlightActive();
  }

  function activeTeamIndex() { return state.i % state.teams.length; }

  function highlightActive() {
    document.querySelectorAll(".chip").forEach((c) => {
      c.classList.toggle("active", state.teams.length > 1 && Number(c.dataset.idx) === activeTeamIndex());
    });
  }

  function animateScore(idx, from, to) {
    const chip = document.querySelector('.chip[data-idx="' + idx + '"]');
    if (!chip) return;
    const el = chip.querySelector(".score");
    const start = performance.now();
    const dur = 700;
    function step(now) {
      const t = Math.min(1, (now - start) / dur);
      el.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - t, 3)));
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
    const pop = document.createElement("span");
    pop.className = "pop";
    pop.textContent = "+" + (to - from);
    chip.appendChild(pop);
    setTimeout(() => pop.remove(), 1500);
  }

  /* ============ JUEGO ============ */
  function startGame() {
    const inputs = Array.from(document.querySelectorAll("#names input"));
    state.teams = inputs.map((inp, k) => ({
      name: inp.value.trim() || (state.teamCount === 1 ? "Jugador" : "Equipo " + (k + 1)),
      score: 0,
      streak: 0,
      correct: 0,
      answered: 0
    }));
    const idxs = QUESTIONS.map((_, k) => k);
    state.order = $("#opt-shuffle").checked ? shuffle(idxs) : idxs;
    state.i = 0;
    state.results = [];
    renderScoreboard();
    renderDots();
    show("game");
    sfx.start();
    renderQuestion();
  }

  function renderDots() {
    const dots = $("#dots");
    dots.innerHTML = "";
    state.order.forEach((_, k) => {
      const d = document.createElement("span");
      d.className = "dot";
      d.dataset.k = k;
      dots.appendChild(d);
    });
  }

  function updateDots() {
    document.querySelectorAll(".dot").forEach((d) => {
      const k = Number(d.dataset.k);
      d.classList.remove("now", "ok", "bad");
      if (k === state.i) d.classList.add("now");
      else if (state.results[k] === true) d.classList.add("ok");
      else if (state.results[k] === false) d.classList.add("bad");
    });
  }

  function renderQuestion() {
    const data = QUESTIONS[state.order[state.i]];
    const opts = shuffle(data.options.map((text, k) => ({ text, correct: k === data.answer })));
    state.current = { data, opts };
    state.locked = false;
    state.hintUsed = false;

    $("#count").textContent = "Pregunta " + (state.i + 1) + " de " + state.order.length;
    updateDots();
    highlightActive();

    const turn = $("#turn");
    if (state.teams.length > 1) {
      turn.hidden = false;
      turn.textContent = "Turno de " + state.teams[activeTeamIndex()].name;
      turn.style.animation = "none"; void turn.offsetWidth; turn.style.animation = "";
    } else {
      turn.hidden = true;
    }

    const card = $("#card");
    $("#question").textContent = data.q;
    card.classList.remove("shake", "enter");
    void card.offsetWidth;
    card.classList.add("enter");

    const box = $("#options");
    box.innerHTML = "";
    opts.forEach((o, k) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "opt";
      b.dataset.k = k;
      const letter = document.createElement("span");
      letter.className = "letter";
      letter.textContent = LETTERS[k];
      const txt = document.createElement("span");
      txt.textContent = o.text;
      b.append(letter, txt);
      b.addEventListener("click", () => choose(k));
      box.appendChild(b);
    });

    const hintBtn = $("#btn-hint");
    hintBtn.disabled = false;
    $("#hint-text").textContent = "";
    $("#feedback").hidden = true;

    startTimer();
  }

  function startTimer() {
    stopTimer();
    state.deadline = performance.now() + TIME_PER_QUESTION * 1000;
    state.lastTickSec = -1;
    const fill = $("#fill");
    const secs = $("#secs");
    fill.classList.remove("low");
    secs.classList.remove("low");

    function frame(now) {
      const left = Math.max(0, state.deadline - now);
      const sec = Math.ceil(left / 1000);
      fill.style.transform = "scaleX(" + (left / (TIME_PER_QUESTION * 1000)) + ")";
      secs.textContent = sec;
      const low = sec <= 5;
      fill.classList.toggle("low", low);
      secs.classList.toggle("low", low);
      if (low && sec !== state.lastTickSec && sec > 0) { state.lastTickSec = sec; sfx.tick(); }
      if (left <= 0) { timeUp(); return; }
      state.rafId = requestAnimationFrame(frame);
    }
    state.rafId = requestAnimationFrame(frame);
  }

  function stopTimer() { cancelAnimationFrame(state.rafId); }

  function secondsLeft() { return Math.max(0, (state.deadline - performance.now()) / 1000); }

  function showHint() {
    if (state.locked || state.hintUsed) return;
    state.hintUsed = true;
    $("#btn-hint").disabled = true;
    $("#hint-text").textContent = "Pista: " + state.current.data.hint;
  }

  function choose(k) {
    if (state.locked) return;
    state.locked = true;
    stopTimer();
    reveal(k, false);
  }

  function timeUp() {
    if (state.locked) return;
    state.locked = true;
    reveal(-1, true);
  }

  function reveal(chosen, timedOut) {
    const { data, opts } = state.current;
    const team = state.teams[activeTeamIndex()];
    const idx = activeTeamIndex();
    const isRight = chosen >= 0 && opts[chosen].correct;
    const correctIdx = opts.findIndex((o) => o.correct);
    const timeLeft = secondsLeft();

    document.querySelectorAll(".opt").forEach((b, k) => {
      b.disabled = true;
      if (k === correctIdx) b.classList.add("right");
      else if (k === chosen) b.classList.add("wrong");
      else b.classList.add("dim");
    });
    $("#btn-hint").disabled = true;

    team.answered++;
    const fb = $("#feedback");
    fb.className = "feedback " + (isRight ? "good" : "bad");

    if (isRight) {
      team.streak++;
      team.correct++;
      const base = state.hintUsed ? 50 : 100;
      const speed = Math.round(100 * (timeLeft / TIME_PER_QUESTION));
      const streakBonus = Math.min(team.streak - 1, 3) * 20;
      const total = base + speed + streakBonus;
      const before = team.score;
      team.score += total;
      animateScore(idx, before, team.score);
      $("#fb-title").textContent = team.streak >= 3 ? "¡Correcto! Vas en racha" : "¡Correcto!";
      let detail = "+" + total + " puntos (" + base + " base + " + speed + " por rapidez";
      if (streakBonus) detail += " + " + streakBonus + " por racha";
      detail += ")";
      $("#fb-pts").textContent = detail;
      $("#fb-ans").textContent = "";
      sfx.right();
      const r = document.querySelector(".opt.right").getBoundingClientRect();
      burst(r.left + r.width / 2, r.top + r.height / 2, 70, Math.PI * 1.4);
    } else {
      team.streak = 0;
      $("#fb-title").textContent = timedOut ? "Se acabó el tiempo" : "Esa no era";
      $("#fb-pts").textContent = "+0 puntos";
      $("#fb-ans").textContent = "Respuesta correcta: " + opts[correctIdx].text;
      if (timedOut) sfx.timeout(); else sfx.wrong();
      const card = $("#card");
      card.classList.remove("enter", "shake");
      void card.offsetWidth;
      card.classList.add("shake");
    }

    $("#fb-explain").textContent = data.explain;
    state.results[state.i] = isRight;
    updateDots();
    $("#btn-next").textContent = state.i === state.order.length - 1 ? "Ver resultados" : "Siguiente pregunta";
    fb.hidden = false;
    fb.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "nearest" });
    $("#btn-next").focus({ preventScroll: true });
  }

  function next() {
    if (!state.locked) return;
    if (state.i >= state.order.length - 1) { finish(); return; }
    state.i++;
    renderQuestion();
  }

  /* ============ FINAL ============ */
  function finish() {
    stopTimer();
    show("end");
    const ranked = state.teams.map((t) => ({ ...t })).sort((a, b) => b.score - a.score);
    const top = ranked[0].score;
    const winners = ranked.filter((t) => t.score === top);
    const title = $("#end-title");
    const sub = $("#end-sub");

    if (state.teams.length === 1) {
      const t = ranked[0];
      title.textContent = t.correct >= 8 ? "¡Eres rey del Carnaval!" : t.correct >= 5 ? "¡Buen desfile!" : "¡A seguir bailando!";
      sub.textContent = t.name + ": " + t.correct + " de " + state.order.length + " aciertos";
    } else if (winners.length > 1) {
      title.textContent = "¡Empate!";
      sub.textContent = winners.map((w) => w.name).join(" y ") + " terminan con " + top + " puntos";
    } else {
      title.textContent = "¡Gana " + ranked[0].name + "!";
      sub.textContent = "Campeón del Carnaval con " + top + " puntos";
    }

    const list = $("#ranking");
    list.innerHTML = "";
    ranked.forEach((t, k) => {
      const li = document.createElement("li");
      li.style.animationDelay = (k * 0.12) + "s";
      const pos = document.createElement("span");
      pos.className = "pos";
      pos.textContent = (k + 1);
      const nm = document.createElement("span");
      nm.className = "nm";
      nm.textContent = t.name;
      const detail = document.createElement("span");
      detail.className = "detail";
      detail.textContent = t.correct + " de " + t.answered + " aciertos";
      nm.appendChild(detail);
      const pt = document.createElement("span");
      pt.className = "pt";
      pt.textContent = t.score;
      li.append(pos, nm, pt);
      list.appendChild(li);
    });

    sfx.fanfare();
    bigCelebration();
  }

  /* ============ EVENTOS ============ */
  $("#btn-start").addEventListener("click", startGame);
  $("#btn-hint").addEventListener("click", showHint);
  $("#btn-next").addEventListener("click", next);
  $("#btn-again").addEventListener("click", startGame);
  $("#btn-setup").addEventListener("click", () => {
    $("#scoreboard").innerHTML = "";
    show("start");
  });

  $("#btn-sound").addEventListener("click", (e) => {
    state.sound = !state.sound;
    e.currentTarget.textContent = "Sonido: " + (state.sound ? "sí" : "no");
    if (state.sound) sfx.tick();
  });

  $("#btn-full").addEventListener("click", () => {
    try {
      if (document.fullscreenElement) document.exitFullscreen();
      else document.documentElement.requestFullscreen();
    } catch (e) { /* el navegador no lo permite */ }
  });

  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT") return;
    if (screens.game.hidden) return;
    const key = e.key.toLowerCase();
    if (!state.locked) {
      const map = { a: 0, b: 1, c: 2, d: 3, "1": 0, "2": 1, "3": 2, "4": 3 };
      if (key in map && map[key] < state.current.opts.length) { choose(map[key]); return; }
      if (key === "p" || key === "h") showHint();
    } else if (key === "enter" || key === "n") {
      e.preventDefault();
      next();
    }
  });

  renderNameInputs();
})();