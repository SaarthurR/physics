import {
  FORMULA_STRIP,
  QUIZ_1_GUIDE,
  QUIZ_2_FORMULA_STRIP,
  QUIZ_2_CLASSIC_GUIDE,
  QUIZ_22_FORMULA_STRIP,
  QUIZ_22_GUIDE,
  QUIZ_3_FORMULA_STRIP,
  QUIZ_3_GUIDE,
  QUIZ_BANK,
} from "./content.js?v=quiz3";

const HARDCODED_GROQ_KEY =
  "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";

const defaultModels = {
  groq: "openai/gpt-oss-120b",
  openrouter: "meta-llama/llama-3.3-70b-instruct",
};

const guideEyebrow = document.querySelector("#guide-eyebrow");
const guideTitle = document.querySelector("#guide-title");
const guideTabs = [...document.querySelectorAll("[data-guide-tab]")];
const docGuideLabel = document.querySelector("#doc-guide-label");
const docGuideHeading = document.querySelector("#doc-guide-heading");
const docGuideSummary = document.querySelector("#doc-guide-summary");
const sidebarLabel = document.querySelector("#sidebar-label");
const formulaStrip = document.querySelector("#formula-strip");
const workspace = document.querySelector("#workspace");
const docSidebar = document.querySelector("#doc-sidebar");
const sidebarCollapse = document.querySelector("#sidebar-collapse");
const outlineNav = document.querySelector("#outline-nav");
const documentRoot = document.querySelector("#document-root");
const autoCompactToggle = document.querySelector("#auto-compact-toggle");
const studyLaterRoot = document.querySelector("#study-later-root");
const studyConceptsButton = document.querySelector("#study-concepts-button");
const studyConceptsCount = document.querySelector("#study-concepts-count");
const studyConceptsShell = document.querySelector("#study-concepts-shell");
const studyConceptsClose = document.querySelector("#study-concepts-close");

const chatBubble = document.querySelector("#chat-bubble");
const selectionActions = document.querySelector("#selection-actions");
const selectionAction = document.querySelector("#selection-action");
const selectionStudyAction = document.querySelector("#selection-study-action");
const selectionHighlightAction = document.querySelector("#selection-highlight-action");
const notesButton = document.querySelector("#notes-button");
const notesShell = document.querySelector("#notes-shell");
const notesClose = document.querySelector("#notes-close");
const notesInput = document.querySelector("#notes-input");
const notesHighlightsRoot = document.querySelector("#notes-highlights-root");
const conceptInspector = document.querySelector("#concept-inspector");
const conceptInspectorBackdrop = document.querySelector("#concept-inspector-backdrop");
const conceptInspectorClose = document.querySelector("#concept-inspector-close");
const conceptInspectorKicker = document.querySelector("#concept-inspector-kicker");
const conceptInspectorTitle = document.querySelector("#concept-inspector-title");
const conceptInspectorBody = document.querySelector("#concept-inspector-body");
const conceptHovercard = document.querySelector("#concept-hovercard");
const chatShell = document.querySelector("#chat-shell");
const chatClose = document.querySelector("#chat-close");
const openChatHero = document.querySelector("#open-chat-hero");
const chatSettingsToggle = document.querySelector("#chat-settings-toggle");
const chatSettings = document.querySelector("#chat-settings");
const dragHandle = document.querySelector("#chat-drag-handle");
const messagesRoot = document.querySelector("#chat-messages");
const chatForm = document.querySelector("#chat-form");
const chatInput = document.querySelector("#chat-input");
const providerSelect = document.querySelector("#provider-select");
const modelInput = document.querySelector("#model-input");
const apiKeyInput = document.querySelector("#api-key-input");
const webLookupToggle = document.querySelector("#web-lookup-toggle");
const imageSearchToggle = document.querySelector("#image-search-toggle");
const modeButtons = [...document.querySelectorAll("[data-mode]")];
const resizeHandles = [...document.querySelectorAll("[data-resize]")];
const chatTextareaMaxHeight = 160;
const chatViewportInset = 12;
const chatMinWidth = 320;
const chatMinHeight = 380;
const chatCondensedWidth = 320;
const chatCondensedHeight = 520;
const quiz1UnitQuizConfigs = [
  {
    id: "unit-dl-quiz",
    wrapperId: "unit-quizzes",
    sectionTitle: "Entire Unit Quiz - DL1 to DL5",
    kicker: "Whole guide quiz",
    cardTitle: "DL1 to DL5 comprehensive check",
    completeTitle: "Finished the DL-only round",
    summaryText: "Restart to get a fresh pass through the full DL1-DL5 guide.",
    chapterIds: QUIZ_1_GUIDE.chapters.filter((chapter) => chapter.id !== "chapter-13").map((chapter) => chapter.id),
  },
  {
    id: "unit-complete-quiz",
    wrapperId: "unit-quizzes",
    sectionTitle: "Entire Unit Quiz - DLs + 8.1-8.6",
    kicker: "Whole unit quiz",
    cardTitle: "Complete unit mastery check",
    completeTitle: "Finished the full-unit round",
    summaryText: "Restart to quiz the entire unit again, including the textbook supplement.",
    chapterIds: QUIZ_1_GUIDE.chapters.map((chapter) => chapter.id),
  },
];

const guideConfigs = {
  quiz1: {
    id: "quiz1",
    label: "Quiz 1",
    eyebrow: "Physics 7C · Quiz 1",
    title: "Quiz 1 Study Guide",
    heading: "Waves foundations and worked examples",
    summary:
      "The original DL1 through DL5 guide, cleaned up into one scrollable sheet with bookmarks, notes, and quick checks.",
    formulaStrip: FORMULA_STRIP,
    guide: QUIZ_1_GUIDE,
    quizzesEnabled: true,
    unitQuizConfigs: quiz1UnitQuizConfigs,
  },
  quiz2: {
    id: "quiz2",
    label: "Quiz 2",
    eyebrow: "Physics 7C · Quiz 2",
    title: "Quiz 2 Study Guide",
    heading: "Quiz 1-style teaching, trimmed to the official Quiz 2 scope",
    summary:
      "Built from the same chapter-by-chapter style as Quiz 1, but limited to DL3 Activities 8.9-8.10, all of DL4 and DL5, and DL6 Activity 8.16.",
    sidebarLabel: "Quiz 2 bookmarks",
    formulaStrip: QUIZ_2_FORMULA_STRIP,
    guide: QUIZ_2_CLASSIC_GUIDE,
    quizzesEnabled: true,
    unitQuizConfigs: [],
  },
  quiz22: {
    id: "quiz22",
    label: "Quiz 2.2",
    eyebrow: "Physics 7C · Quiz 2.2",
    title: "Quiz 2.2 Study Guide",
    heading: "Docx-based Quiz 2 guide, rebuilt into the site format",
    summary:
      "A chapter-by-chapter version of Physics7C_WaveQuizGuide.docx, keeping its hooks, worked logic, formula sheet, and final trap list in the same one-page format as the other guides.",
    sidebarLabel: "Quiz 2.2 bookmarks",
    formulaStrip: QUIZ_22_FORMULA_STRIP,
    guide: QUIZ_22_GUIDE,
    quizzesEnabled: false,
    unitQuizConfigs: [],
  },
  quiz3: {
    id: "quiz3",
    label: "Quiz 3",
    eyebrow: "Physics 7C · Quiz 3",
    title: "Quiz 3 Study Guide",
    heading: "Standing waves, optics, vision correction, and early electric charge",
    summary:
      "Built from the attached DL8-DL11 study guide in the same chapter-by-chapter format as Quiz 2, with lecture figures, formula anchors, trap checks, and chapter quizzes.",
    sidebarLabel: "Quiz 3 bookmarks",
    formulaStrip: QUIZ_3_FORMULA_STRIP,
    guide: QUIZ_3_GUIDE,
    quizzesEnabled: true,
    unitQuizConfigs: [],
  },
};

const sectionHintMap = {
  "chapter-1-core": [
    "transverse waves",
    "longitudinal waves",
    "transverse vs longitudinal",
    "difference between transverse and longitudinal",
    "perpendicular parallel",
  ],
  "chapter-2-equation": [
    "wave equation",
    "sinusoidal wave equation",
    "the equation",
    "equation for a wave",
    "formula for a wave",
    "full wave equation",
  ],
  "chapter-2-symbols": [
    "wave speed",
    "velocity of a wave",
    "velocity formula",
    "speed formula",
    "wavelength",
    "frequency",
    "period",
    "amplitude",
    "phase",
    "phase constant",
  ],
  "chapter-2-direction": ["minus sign", "plus sign", "wave direction", "right moving", "left moving"],
  "chapter-2-source-medium": ["source vs medium", "depends on source", "depends on medium"],
  "chapter-4-intensity": ["intensity", "inverse square law", "power per unit area", "loud things fade"],
  "chapter-4-decibels": ["decibels", "log scale", "db", "sound level"],
  "chapter-5-moving-source": ["doppler formula", "moving source", "approaching source", "receding source"],
  "chapter-5-full-formula": ["moving observer", "full doppler formula", "observer moving"],
  "chapter-5-worked-example": [
    "ambulance problem",
    "worked example ambulance",
    "silas and eppie",
    "silas",
    "eppie",
    "ambulance",
  ],
  "chapter-6-superposition": ["superposition"],
  "chapter-6-phase-chart": ["phase chart", "phase difference", "delta phi"],
  "chapter-6-conditions": ["constructive interference", "destructive interference", "interference conditions"],
  "chapter-7-reference": [
    "core formula reference",
    "core formula sheet",
    "dl1 dl3 formulas",
    "early formula reference",
  ],
  "chapter-8-simplified-phase-chart": [
    "simplified phase chart",
    "speaker leads",
    "reversed leads",
    "speaker scenario",
    "wiring phase difference",
  ],
  "chapter-8-four-scenarios": ["scenario 1", "scenario 2", "scenario 3", "scenario 4", "walking around speakers"],
  "chapter-9-derivation": ["beats", "beat frequency", "carrier frequency", "beat formula", "tuning trick"],
  "chapter-9-reading-graphs": ["beat envelope", "beat graph", "carrier wave", "envelope"],
  "chapter-10-hook": ["huygens principle", "diffraction", "small hole", "wavefront through hole"],
  "chapter-10-young": ["young's double slit", "double slit", "light is a wave", "bright and dark stripes"],
  "chapter-10-geometry": ["d sin theta", "path length difference", "double slit geometry", "fringe spacing"],
  "chapter-10-small-angle": ["small angle approximation", "d equals lambda d over delta y", "lambda d over delta y", "delta y"],
  "chapter-11-grating-formula": ["diffraction grating", "grating equation", "n lambda equals d sin theta", "rainbow cd"],
  "chapter-11-phase-shift": ["phase shift", "phase shifted slit", "crystal in one slit", "shifted interference pattern"],
  "chapter-12-reference": [
    "complete formula reference",
    "beats formula",
    "double slit formulas",
    "all formulas dl 5",
  ],
  "chapter-13-8-1": [
    "introduction to waves",
    "polarization",
    "pulse wave",
    "harmonic wave",
    "restoring force",
    "medium and restoring force",
  ],
  "chapter-13-8-2": [
    "wave representation",
    "snapshot graph",
    "time graph",
    "total phase",
    "phi zero",
    "fixed phase constant",
    "where wave equation comes from",
  ],
  "chapter-13-8-3": [
    "multi dimensional waves",
    "wavefronts and rays",
    "pressure wave",
    "sound pressure",
    "intensity spreading",
  ],
  "chapter-13-8-4": [
    "doppler effect textbook supplement",
    "moving observer",
    "combined doppler formula",
    "observer motion formula",
  ],
  "chapter-13-8-5": [
    "superposition and interference textbook",
    "path length difference",
    "phase constant difference",
    "delta x",
    "delta phi zero",
    "cos delta phi over 2",
    "algebra under the phase chart",
    "trig identity interference",
  ],
  "chapter-13-8-6": [
    "beats",
    "trig identity beats",
    "sum to product",
    "beats proof",
    "carrier frequency",
    "beat envelope",
  ],
};

const TERM_EXPLAINERS = {
  superposition: {
    kind: "Key vocab",
    title: "Superposition",
    short: "When two waves overlap, you add their effects at the same point and time.",
    body: `
      <p><strong>Plain English:</strong> superposition means waves do not fight over space. If two waves reach the same place at the same time, the medium responds to both at once.</p>
      <p><strong>What you actually do:</strong> take the displacement from wave 1, take the displacement from wave 2, and add them. Positive and negative values matter, so cancellation is possible.</p>
      <p><strong>Why it matters here:</strong> interference, beats, two-speaker problems, double slit, and thin film all start from this one idea.</p>
    `,
  },
  interference: {
    kind: "Key vocab",
    title: "Interference",
    short: "The result you get after waves superpose.",
    body: `
      <p><strong>Plain English:</strong> interference is just the pattern that comes out after superposition. Sometimes the waves reinforce, sometimes they cancel, and sometimes they land somewhere in between.</p>
      <p><strong>What controls it:</strong> the relative phase of the waves at the meeting point. If they arrive in step, the effect is stronger. If they arrive out of step, the effect weakens or disappears.</p>
      <p><strong>How to spot it on this site:</strong> loud versus quiet speakers, bright versus dark fringes, and color-selection effects in optics are all interference stories.</p>
    `,
  },
  "constructive interference": {
    kind: "Key vocab",
    title: "Constructive Interference",
    short: "The waves arrive in step and reinforce each other.",
    body: `
      <p><strong>Plain English:</strong> constructive interference happens when two waves line up so their effects add in the same direction.</p>
      <p><strong>What it looks like:</strong> louder sound, brighter light, or a bigger displacement than one wave alone would make.</p>
      <p><strong>Fast rule:</strong> the total phase difference lands on an even multiple of π, or equivalently a whole multiple of 2π.</p>
    `,
  },
  "destructive interference": {
    kind: "Key vocab",
    title: "Destructive Interference",
    short: "The waves arrive out of step and cancel some or all of each other.",
    body: `
      <p><strong>Plain English:</strong> destructive interference happens when one wave is trying to push the medium up while the other is trying to push it down.</p>
      <p><strong>What it looks like:</strong> quiet spots, dark fringes, or zero displacement if the two waves have equal size.</p>
      <p><strong>Fast rule:</strong> the total phase difference lands on an odd multiple of π.</p>
    `,
  },
  "phase difference": {
    kind: "Key vocab",
    title: "Phase Difference",
    short: "A measure of how out of step two waves are.",
    body: `
      <p><strong>Plain English:</strong> phase difference tells you where each wave is in its cycle relative to the other one.</p>
      <p><strong>Zero phase difference</strong> means the waves are lined up. <strong>π phase difference</strong> means one is half a cycle ahead of the other.</p>
      <p><strong>Why it matters:</strong> it is the thing that decides constructive versus destructive interference.</p>
    `,
  },
  "path difference": {
    kind: "Key vocab",
    title: "Path Difference",
    short: "How much farther one wave travels than the other.",
    body: `
      <p><strong>Plain English:</strong> path difference is just a distance comparison. If one wave has to travel farther, it arrives later in the cycle.</p>
      <p><strong>Why that matters:</strong> extra travel distance becomes extra phase lag. That is why geometry alone can turn a loud point into a quiet point.</p>
      <p><strong>Typical move:</strong> find two distances to the same observation point, subtract them, then plug that result into the phase formula.</p>
    `,
  },
  "beat frequency": {
    kind: "Key vocab",
    title: "Beat Frequency",
    short: "How fast the loud-soft-loud pulsing happens when nearby frequencies drift in and out of sync.",
    body: `
      <p><strong>Plain English:</strong> beat frequency is not the note you sing along to. It is the rate of the volume pulsing.</p>
      <p><strong>Formula idea:</strong> the farther apart the two source frequencies are, the faster they drift in and out of phase.</p>
      <p><strong>Quiz trap:</strong> students often confuse beat rate with the average pitch heard underneath the envelope.</p>
    `,
  },
  "carrier frequency": {
    kind: "Key vocab",
    title: "Carrier Frequency",
    short: "The average pitch inside a beat pattern.",
    body: `
      <p><strong>Plain English:</strong> when you hear beats, the sound has a fast underlying tone and a slower pulsing envelope. The carrier frequency is that underlying tone.</p>
      <p><strong>Why it matters:</strong> if the question asks for the note heard, not the beat rate, you usually want the average of the two source frequencies.</p>
      <p><strong>Good sanity check:</strong> the carrier should sit between the two original frequencies.</p>
    `,
  },
  "doppler effect": {
    kind: "Key vocab",
    title: "Doppler Effect",
    short: "Motion changes the frequency you hear because it changes how tightly wavefronts are packed.",
    body: `
      <p><strong>Plain English:</strong> when source and observer move toward each other, wavefronts get encountered more often, so the heard frequency rises. When they separate, the heard frequency drops.</p>
      <p><strong>Think physically first:</strong> ask whether the motion squeezes wavefronts together or stretches them apart before touching the signs in the formula.</p>
      <p><strong>On Quiz 2:</strong> Doppler often appears before beats, so you change the heard frequencies first and only then compare them.</p>
    `,
  },
  diffraction: {
    kind: "Key vocab",
    title: "Diffraction",
    short: "A wave spreads after passing through an opening or around an obstacle.",
    body: `
      <p><strong>Plain English:</strong> diffraction is the reason a narrow slit can behave like a new wave source instead of acting like a simple geometric hole.</p>
      <p><strong>Why it matters:</strong> without diffraction, double slit and grating patterns would not form the way they do.</p>
      <p><strong>Visual cue:</strong> if the guide talks about openings, slits, or waves bending/spreading, diffraction is usually in play.</p>
    `,
  },
  wavefront: {
    kind: "Key vocab",
    title: "Wavefront",
    short: "A line or surface connecting points that are at the same phase.",
    body: `
      <p><strong>Plain English:</strong> a wavefront is a snapshot of “all the places the wave is in the same stage of its cycle.”</p>
      <p><strong>Example:</strong> a circular ripple crest in a pond is a wavefront. Every point on that crest is in the same phase.</p>
      <p><strong>Why it helps:</strong> wavefront drawings make path difference and interference geometry much easier to see.</p>
    `,
  },
  "diffraction grating": {
    kind: "Key vocab",
    title: "Diffraction Grating",
    short: "A many-slit setup that sharpens interference peaks and separates wavelengths by angle.",
    body: `
      <p><strong>Plain English:</strong> a diffraction grating is like a double slit repeated many times.</p>
      <p><strong>Why it works so well:</strong> more slits do not move the bright angles much, but they make the bright spots sharper and the dark regions darker.</p>
      <p><strong>What you usually use it for:</strong> color ordering, wavelength separation, and white-light patterns.</p>
    `,
  },
  "thin film interference": {
    kind: "Key vocab",
    title: "Thin Film Interference",
    short: "Interference caused by reflected rays that travel slightly different distances inside a layered structure.",
    body: `
      <p><strong>Plain English:</strong> one reflected ray bounces off the top surface while another goes deeper and comes back. Because one ray travels farther, the two reflected rays can reinforce one color and weaken another.</p>
      <p><strong>Why it shows up on the quiz:</strong> the butterfly problem is really an interference problem where the extra path is a round trip through a small thickness.</p>
      <p><strong>Core idea:</strong> the color you see strongly is the color whose reflected rays arrive most nearly in phase.</p>
    `,
  },
  "phase constant": {
    kind: "Key vocab",
    title: "Phase Constant",
    short: "A built-in starting offset in a wave’s cycle.",
    body: `
      <p><strong>Plain English:</strong> the phase constant tells you where a wave already is in its cycle before path difference starts changing anything.</p>
      <p><strong>Examples:</strong> opposite wiring, a source that starts early, or a crystal delay can all behave like phase-constant differences.</p>
      <p><strong>Why it matters:</strong> it can flip constructive and destructive conditions even when the geometry stays the same.</p>
    `,
  },
};

const TERM_ALIASES = {
  "constructive interference": "constructive interference",
  "destructive interference": "destructive interference",
  "thin film interference": "thin film interference",
  "diffraction grating": "diffraction grating",
  "phase difference": "phase difference",
  "path difference": "path difference",
  "beat frequency": "beat frequency",
  "carrier frequency": "carrier frequency",
  "doppler effect": "doppler effect",
  superposition: "superposition",
  interference: "interference",
  diffraction: "diffraction",
  wavefront: "wavefront",
  "phase constant": "phase constant",
};

const FORMULA_VARIABLES = [
  {
    label: "ΔΦ",
    aliases: ["ΔΦ", "Δphi"],
    matches: (raw, normalized) => raw.includes("ΔΦ") || normalized.includes("deltaphi"),
    meaning: "the total phase difference between the two waves you are comparing",
    plug: "plug in the overall relative phase in radians when you are checking whether two waves reinforce or cancel",
  },
  {
    label: "Φ",
    aliases: ["Φ", "Phi"],
    matches: (raw, normalized) =>
      raw.includes("Φ") || normalized.startsWith("phi=") || normalized.startsWith("phi(x,t)="),
    meaning: "the phase of one wave at a particular place and time",
    plug: "plug in the phase angle in radians after combining the time term, position term, and any phase constant",
  },
  {
    label: "Δφ₀",
    aliases: ["Δφ₀", "delta phi zero"],
    matches: (raw, normalized) => raw.includes("Δφ₀") || raw.includes("Δφ0") || normalized.includes("deltaphi0"),
    meaning: "the built-in source phase difference before path difference is counted",
    plug: "plug in the starting source offset in radians, often 0, π, or a value built from a delay like 2πΔt/T",
  },
  {
    label: "φ₀",
    aliases: ["φ₀", "phi zero"],
    matches: (raw, normalized) =>
      (raw.includes("φ₀") || raw.includes("φ0") || normalized.includes("phi0")) && !normalized.includes("deltaphi0"),
    meaning: "the fixed phase constant for a single wave",
    plug: "plug in the starting phase of the wave at your chosen origin, in radians",
  },
  {
    label: "Δx",
    aliases: ["Δx", "delta x"],
    matches: (raw, normalized) => raw.includes("Δx") || normalized.includes("deltax"),
    meaning: "the path difference, meaning how much farther one wave travels than the other",
    plug: "plug in the distance difference between the two paths to the same observation point, in meters",
  },
  {
    label: "Δt",
    aliases: ["Δt", "delta t"],
    matches: (raw, normalized) => raw.includes("Δt") || normalized.includes("deltat"),
    meaning: "a time delay between two waves or between source starts",
    plug: "plug in the actual delay in seconds",
  },
  {
    label: "Δy",
    aliases: ["Δy", "delta y"],
    matches: (raw, normalized) => raw.includes("Δy") || normalized.includes("deltay"),
    meaning: "the spacing between neighboring fringes on the screen",
    plug: "plug in the measured distance between adjacent bright or dark fringes on the screen, in meters",
  },
  {
    label: "y_shift",
    aliases: ["y_shift", "y shift"],
    matches: (raw, normalized) => raw.includes("y_shift") || normalized.includes("yshift"),
    meaning: "the amount the whole interference pattern moves on the screen",
    plug: "plug in the vertical screen shift in meters if the problem gives or asks for how far the pattern slides",
  },
  {
    label: "y_total",
    aliases: ["y_total", "y_tot"],
    matches: (raw, normalized) =>
      raw.includes("y_total") || raw.includes("y_tot") || normalized.includes("ytotal") || normalized.includes("ytot"),
    meaning: "the actual total displacement after both waves are added together",
    plug: "plug in the final combined displacement at that point and time",
  },
  {
    label: "y₁",
    aliases: ["y₁", "y1"],
    matches: (raw, normalized) => raw.includes("y₁") || raw.includes("y_1") || normalized.includes("y1"),
    meaning: "the displacement contributed by wave 1 alone",
    plug: "plug in wave 1's displacement value at the same point and time",
  },
  {
    label: "y₂",
    aliases: ["y₂", "y2"],
    matches: (raw, normalized) => raw.includes("y₂") || raw.includes("y_2") || normalized.includes("y2"),
    meaning: "the displacement contributed by wave 2 alone",
    plug: "plug in wave 2's displacement value at the same point and time",
  },
  {
    label: "y",
    aliases: ["y"],
    matches: (raw, normalized) =>
      /\by\b/.test(raw) || normalized.includes("y(x,t)") || normalized.includes("y(x,t)=") || normalized.startsWith("y="),
    meaning: "the displacement of the medium from equilibrium",
    plug: "plug in the vertical displacement or output position, usually in meters",
  },
  {
    label: "x",
    aliases: ["x"],
    matches: (raw, normalized) =>
      /\bx\b/.test(raw) || normalized.includes("x,t") || normalized.includes("x1") || normalized.includes("x2"),
    meaning: "position along the wave or horizontal coordinate used in the setup",
    plug: "plug in the location you are evaluating, in meters",
  },
  {
    label: "x₁",
    aliases: ["x₁", "x1"],
    matches: (raw, normalized) => raw.includes("x₁") || normalized.includes("x1"),
    meaning: "the path length or position associated with source 1",
    plug: "plug in the distance from source 1 to the observation point, in meters",
  },
  {
    label: "x₂",
    aliases: ["x₂", "x2"],
    matches: (raw, normalized) => raw.includes("x₂") || normalized.includes("x2"),
    meaning: "the path length or position associated with source 2",
    plug: "plug in the distance from source 2 to the observation point, in meters",
  },
  {
    label: "t",
    aliases: ["t"],
    matches: (raw, normalized) => /\bt\b/.test(raw) || normalized.includes("(t)") || normalized.includes("t/"),
    meaning: "time",
    plug: "plug in the time after the chosen starting moment, in seconds",
  },
  {
    label: "T",
    aliases: ["T"],
    matches: (raw, normalized) => /\bT\b/.test(raw) || normalized.includes("/t") || normalized.includes("tb"),
    meaning: "period, meaning the time for one full cycle",
    plug: "plug in one cycle time in seconds",
  },
  {
    label: "T₁",
    aliases: ["T₁", "T1"],
    matches: (raw, normalized) => raw.includes("T₁") || normalized.includes("t1"),
    meaning: "the period of wave 1",
    plug: "plug in wave 1's period in seconds",
  },
  {
    label: "T₂",
    aliases: ["T₂", "T2"],
    matches: (raw, normalized) => raw.includes("T₂") || normalized.includes("t2"),
    meaning: "the period of wave 2",
    plug: "plug in wave 2's period in seconds",
  },
  {
    label: "T_b",
    aliases: ["T_b", "Tb"],
    matches: (raw, normalized) => raw.includes("T_b") || raw.includes("T₍b₎") || normalized.includes("tb"),
    meaning: "the beat period, meaning the time between repeating loud-soft-loud cycles",
    plug: "plug in the beat cycle time in seconds if the problem asks for the pulsing period instead of beat frequency",
  },
  {
    label: "A",
    aliases: ["A"],
    matches: (raw, normalized) => /\bA\b/.test(raw) || normalized.includes("asin(") || normalized.startsWith("a="),
    meaning: "amplitude, the maximum displacement from equilibrium",
    plug: "plug in the wave's maximum displacement, in meters or the units used for the wave",
  },
  {
    label: "λ",
    aliases: ["λ", "lambda"],
    matches: (raw, normalized) => raw.includes("λ") || normalized.includes("lambda"),
    meaning: "wavelength, the distance for one full cycle in space",
    plug: "plug in wavelength in meters unless the problem clearly stays in nanometers and you keep units consistent",
  },
  {
    label: "λ_forward",
    aliases: ["λ_forward", "lambda forward"],
    matches: (raw, normalized) => raw.includes("λ_forward") || normalized.includes("lambdaforward"),
    meaning: "the wavelength in front of a moving source",
    plug: "plug in the compressed forward wavelength seen ahead of the source, in meters",
  },
  {
    label: "λ_backward",
    aliases: ["λ_backward", "lambda backward"],
    matches: (raw, normalized) => raw.includes("λ_backward") || normalized.includes("lambdabackward"),
    meaning: "the wavelength behind a moving source",
    plug: "plug in the stretched wavelength behind the source, in meters",
  },
  {
    label: "f",
    aliases: ["f"],
    matches: (raw, normalized) => /\bf\b/.test(raw) || normalized.startsWith("f="),
    meaning: "frequency, meaning cycles per second",
    plug: "plug in frequency in hertz, which means cycles per second",
  },
  {
    label: "f₁",
    aliases: ["f₁", "f1"],
    matches: (raw, normalized) => raw.includes("f₁") || normalized.includes("f1"),
    meaning: "frequency of source or wave 1",
    plug: "plug in the first of the two compared frequencies, in hertz",
  },
  {
    label: "f₂",
    aliases: ["f₂", "f2"],
    matches: (raw, normalized) => raw.includes("f₂") || normalized.includes("f2"),
    meaning: "frequency of source or wave 2",
    plug: "plug in the second of the two compared frequencies, in hertz",
  },
  {
    label: "f_beat",
    aliases: ["f_beat", "beat frequency"],
    matches: (raw, normalized) => raw.includes("f_beat") || normalized.includes("fbeat"),
    meaning: "the beat frequency, or the rate of the loud-soft pulsing",
    plug: "plug in the pulsing rate in hertz after comparing the two nearby frequencies that are actually heard",
  },
  {
    label: "f_carrier",
    aliases: ["f_carrier", "carrier frequency"],
    matches: (raw, normalized) => raw.includes("f_carrier") || normalized.includes("fcarrier"),
    meaning: "the carrier frequency, or the average pitch inside the beat pattern",
    plug: "plug in the underlying pitch in hertz when the problem asks for the note rather than the beat rate",
  },
  {
    label: "f_obs",
    aliases: ["f_obs", "observed frequency"],
    matches: (raw, normalized) =>
      raw.includes("f_obs") || raw.includes("f_o") || raw.includes("f_observed") || normalized.includes("fobs") || normalized.includes("fobserved"),
    meaning: "the observed or heard frequency",
    plug: "plug in the frequency the listener actually hears, usually in hertz",
  },
  {
    label: "f_s",
    aliases: ["f_s", "source frequency"],
    matches: (raw, normalized) => raw.includes("f_s") || normalized.includes("fs"),
    meaning: "the source frequency before motion changes what is heard",
    plug: "plug in the emitted source frequency in hertz",
  },
  {
    label: "v",
    aliases: ["v"],
    matches: (raw, normalized) => /\bv\b/.test(raw) || normalized.startsWith("v="),
    meaning: "wave speed in the medium",
    plug: "plug in the propagation speed in meters per second, like sound speed in air or wave speed on the string",
  },
  {
    label: "vₒ",
    aliases: ["vₒ", "vo"],
    matches: (raw, normalized) => raw.includes("vₒ") || raw.includes("v_o") || normalized.includes("vo"),
    meaning: "observer speed",
    plug: "plug in the observer's speed relative to the medium, in meters per second, with the sign rule from the guide",
  },
  {
    label: "vₛ",
    aliases: ["vₛ", "vs"],
    matches: (raw, normalized) => raw.includes("vₛ") || raw.includes("v_s") || normalized.includes("vs"),
    meaning: "source speed",
    plug: "plug in the source's speed relative to the medium, in meters per second, with the sign rule from the guide",
  },
  {
    label: "d",
    aliases: ["d"],
    matches: (raw, normalized) => /\bd\b/.test(raw) || normalized.includes("dsintheta") || normalized.startsWith("d="),
    meaning: "either slit spacing or thin-film thickness, depending on the formula",
    plug: "plug in slit separation for double-slit and grating formulas, or film thickness/layer spacing for thin-film formulas, in meters",
  },
  {
    label: "θ",
    aliases: ["θ", "theta"],
    matches: (raw, normalized) => raw.includes("θ") || normalized.includes("theta"),
    meaning: "the angle away from the center line",
    plug: "plug in the observation angle measured from the center direction, in radians or degrees as long as trig use is consistent",
  },
  {
    label: "D",
    aliases: ["D"],
    matches: (raw, normalized) => /\bD\b/.test(raw) || normalized.includes("lambda d") || normalized.includes("/deltay"),
    meaning: "screen distance, meaning how far the slits are from the screen",
    plug: "plug in the slit-to-screen distance in meters",
  },
  {
    label: "n",
    aliases: ["n"],
    matches: (raw, normalized) => /\bn\b/.test(raw) || normalized.includes("nlambda"),
    meaning: "an integer order number counting which bright or dark fringe you are on",
    plug: "plug in a whole number like 0, 1, 2, ... unless the setup explicitly tells you otherwise",
  },
  {
    label: "I",
    aliases: ["I"],
    matches: (raw, normalized) => /\bI\b/.test(raw) || normalized.startsWith("i=") || normalized.includes("i/i0"),
    meaning: "intensity, or power per unit area",
    plug: "plug in intensity in watts per square meter",
  },
  {
    label: "I₀",
    aliases: ["I₀", "I0"],
    matches: (raw, normalized) => raw.includes("I₀") || raw.includes("I0") || normalized.includes("i0"),
    meaning: "a reference intensity",
    plug: "plug in the baseline reference intensity used by the decibel formula",
  },
  {
    label: "P",
    aliases: ["P"],
    matches: (raw) => /\bP\b/.test(raw),
    meaning: "power",
    plug: "plug in the source power in watts",
  },
  {
    label: "Area",
    aliases: ["Area"],
    matches: (raw, normalized) => raw.includes("Area") || normalized.includes("area"),
    meaning: "the area over which the power spreads",
    plug: "plug in the wavefront area in square meters",
  },
  {
    label: "D₀",
    aliases: ["D₀", "D0"],
    matches: (raw, normalized) => raw.includes("D₀") || raw.includes("D0") || normalized.includes("d0"),
    meaning: "the reference decibel level in the comparison formula",
    plug: "plug in the baseline decibel level if the problem gives one",
  },
  {
    label: "h",
    aliases: ["h"],
    matches: (raw, normalized) => /\bh\b/.test(raw) || normalized.includes("h/"),
    meaning: "Planck's constant",
    plug: "plug in Planck's constant when the formula is from de Broglie or quantization",
  },
  {
    label: "p",
    aliases: ["p"],
    matches: (raw, normalized) => /\bp\b/.test(raw) || normalized.endsWith("/p"),
    meaning: "momentum",
    plug: "plug in momentum in kilogram-meters per second",
  },
  {
    label: "m",
    aliases: ["m"],
    matches: (raw, normalized) => /\bm\b/.test(raw) || normalized.includes("8m"),
    meaning: "mass",
    plug: "plug in the particle's mass in kilograms",
  },
  {
    label: "L",
    aliases: ["L"],
    matches: (raw, normalized) => /\bL\b/.test(raw) || normalized.includes("l2"),
    meaning: "the box or region length",
    plug: "plug in the allowed region length in meters",
  },
  {
    label: "Eₙ",
    aliases: ["Eₙ", "En"],
    matches: (raw, normalized) => raw.includes("Eₙ") || normalized.includes("en="),
    meaning: "the energy of the nth allowed state",
    plug: "plug in the quantized energy value for the level labeled by n",
  },
];

const FORMULA_EXPLAINERS = {
  "wave-equation": {
    kind: "Formula",
    title: "Wave equation",
    short: "Describes the displacement of a sinusoidal wave at any position and time.",
    preview: [
      "Position and time both matter.",
      "Amplitude sets size, wavelength sets spacing, period sets timing.",
      "The sign on the x-term controls direction.",
    ],
    body: `
      <p><strong>Core idea:</strong> this equation is the full address of the wave. It tells you the displacement at a chosen position and time.</p>
      <p><strong>Why it works:</strong> a sinusoidal wave repeats in space and in time, so the phase combines a time part, a position part, and any built-in starting offset.</p>
      <p><strong>Use it when:</strong> you need the wave's displacement, direction, wavelength, period, or phase information.</p>
    `,
  },
  "period-frequency": {
    kind: "Formula",
    title: "Frequency-period relationship",
    short: "Frequency and period are reciprocals.",
    preview: [
      "More cycles per second means a shorter period.",
      "Less cycles per second means a longer period.",
      "This is one of the fastest conversions on the quiz.",
    ],
    body: `
      <p><strong>Core idea:</strong> frequency counts how many cycles happen each second, while period tells you how long one cycle takes.</p>
      <p><strong>Why it works:</strong> if each cycle takes <code>T</code> seconds, then one second contains <code>1/T</code> cycles.</p>
      <p><strong>Use it when:</strong> the problem gives period and asks for frequency, or gives frequency and asks for period.</p>
    `,
  },
  "wave-speed": {
    kind: "Formula",
    title: "Wave speed formula",
    short: "Connects speed, wavelength, and frequency.",
    preview: [
      "v is how fast the disturbance travels.",
      "λ is distance per cycle.",
      "f is cycles per second.",
    ],
    body: `
      <p><strong>Formula:</strong> <code>v = λf</code></p>
      <p><strong>What each part means:</strong> <code>v</code> is wave speed, <code>λ</code> is wavelength, and <code>f</code> is frequency.</p>
      <p><strong>Why it works:</strong> if each cycle takes up one wavelength of space and the source produces <code>f</code> cycles each second, then the disturbance covers <code>λf</code> distance per second.</p>
      <p><strong>Use it when:</strong> a problem gives any two of speed, wavelength, and frequency and asks for the third.</p>
    `,
  },
  "superposition-principle": {
    kind: "Formula",
    title: "Superposition principle",
    short: "Add the two wave displacements point by point.",
    preview: [
      "y_tot is the actual displacement.",
      "y₁ and y₂ are the separate contributions.",
      "Signs matter, so cancellation is possible.",
    ],
    body: `
      <p><strong>Formula:</strong> <code>y_tot = y₁ + y₂</code></p>
      <p><strong>What each part means:</strong> <code>y_tot</code> is what the medium actually does, while <code>y₁</code> and <code>y₂</code> are what each wave would have done alone.</p>
      <p><strong>Why it works:</strong> the medium responds to both disturbances at once, so the final displacement is the algebraic sum.</p>
      <p><strong>Use it when:</strong> you are reasoning about overlapping waves, interference, or beats.</p>
    `,
  },
  "total-phase": {
    kind: "Formula",
    title: "Total phase difference formula",
    short: "Adds path difference and built-in source offset to decide interference type.",
    preview: [
      "Δx is the geometry term.",
      "Δφ₀ is the source-offset term.",
      "The total decides constructive vs destructive.",
    ],
    body: `
      <p><strong>Formula:</strong> <code>ΔΦ = -2πΔx/λ + Δφ₀</code></p>
      <p><strong>What each part means:</strong> <code>ΔΦ</code> is the total phase difference, <code>Δx</code> is the path difference, <code>λ</code> is wavelength, and <code>Δφ₀</code> is any built-in source phase difference.</p>
      <p><strong>Why it works:</strong> traveling an extra distance changes where a wave is in its cycle, and a source can also start ahead or behind before any travel happens. The total phase is the sum of those two effects.</p>
      <p><strong>Use it when:</strong> two equal-frequency waves meet and you need to decide whether the result is constructive, destructive, or partial.</p>
    `,
  },
  "phase-with-time": {
    kind: "Formula",
    title: "Full two-wave phase-difference formula",
    short: "Compares two waves when both a time offset and a path offset matter.",
    preview: [
      "Time mismatch and path mismatch both affect the relative phase.",
      "The source offset term is still separate.",
      "Use it before simplifying away terms.",
    ],
    body: `
      <p><strong>Core idea:</strong> this is the more complete relative-phase formula. It keeps the time-delay term, the path-difference term, and the source-offset term all visible.</p>
      <p><strong>Why it works:</strong> relative phase can change because one wave starts later, travels farther, or is built with an initial phase offset.</p>
      <p><strong>Use it when:</strong> the problem compares waves that are not automatically being sampled at the same place and same time.</p>
    `,
  },
  "constructive-phase": {
    kind: "Formula",
    title: "Constructive phase condition",
    short: "The total phase difference must land on an even multiple of π.",
    preview: [
      "This is the phase version of 'they arrive in step.'",
      "Equivalent to whole-cycle agreement.",
      "Use for bright or loud outcomes.",
    ],
    body: `
      <p><strong>Core idea:</strong> constructive interference means the two waves line up so they reinforce.</p>
      <p><strong>Why it works:</strong> a whole number of full cycles leaves the waves in the same stage of motion, so crests meet crests and troughs meet troughs.</p>
      <p><strong>Use it when:</strong> you are deciding whether the result should be bright, loud, or reinforced.</p>
    `,
  },
  "destructive-phase": {
    kind: "Formula",
    title: "Destructive phase condition",
    short: "The total phase difference must land on an odd multiple of π.",
    preview: [
      "This is the phase version of 'they arrive opposite each other.'",
      "Equivalent to a half-cycle mismatch.",
      "Use for dark or quiet outcomes.",
    ],
    body: `
      <p><strong>Core idea:</strong> destructive interference means one wave is half a cycle out of step with the other.</p>
      <p><strong>Why it works:</strong> a half-cycle mismatch turns a crest into a trough at the meeting point, which drives cancellation.</p>
      <p><strong>Use it when:</strong> you are deciding whether the result should be dark, quiet, or canceled.</p>
    `,
  },
  "constructive-general": {
    kind: "Formula",
    title: "General constructive condition",
    short: "Gives the path difference needed for reinforcement when a source offset is present.",
    preview: [
      "Starts from ΔΦ = 2nπ.",
      "Works even when Δφ₀ is not zero.",
      "Special cases drop out automatically.",
    ],
    body: `
      <p><strong>Formula:</strong> <code>Δx = nλ - (Δφ₀λ)/(2π)</code></p>
      <p><strong>What each part means:</strong> <code>n</code> is the fringe/order integer, <code>λ</code> is wavelength, and <code>Δφ₀</code> is the built-in source phase difference.</p>
      <p><strong>Why it works:</strong> constructive interference means the total phase difference must land on an even multiple of π. Solving the total-phase formula for <code>Δx</code> gives this condition.</p>
      <p><strong>Use it when:</strong> the prompt includes opposite wiring, a timing lead, or a crystal, so the simple <code>Δx = nλ</code> shortcut is no longer enough.</p>
    `,
  },
  "destructive-general": {
    kind: "Formula",
    title: "General destructive condition",
    short: "Gives the path difference needed for cancellation when a source offset is present.",
    preview: [
      "Starts from ΔΦ = (2n+1)π.",
      "Includes source phase from the start.",
      "Safer than the half-wavelength shortcut when Δφ₀ is nonzero.",
    ],
    body: `
      <p><strong>Formula:</strong> <code>Δx = (n + 1/2)λ - (Δφ₀λ)/(2π)</code></p>
      <p><strong>What each part means:</strong> the first term is the usual half-integer path difference pattern, while the second term corrects for any built-in source phase shift.</p>
      <p><strong>Why it works:</strong> destructive interference happens when the total phase lands on an odd multiple of π, and this is the solved-for-geometry version of that rule.</p>
      <p><strong>Use it when:</strong> the question asks for a dark point, quiet point, or cancellation in the presence of source offsets.</p>
    `,
  },
  "beat-frequency": {
    kind: "Formula",
    title: "Beat frequency formula",
    short: "Measures how fast the pulsing envelope repeats.",
    preview: [
      "Subtract the two nearby frequencies.",
      "Use absolute value so the answer stays positive.",
      "This is pulse rate, not heard pitch.",
    ],
    body: `
      <p><strong>Formula:</strong> <code>f_beat = |f₁ - f₂|</code></p>
      <p><strong>What each part means:</strong> <code>f₁</code> and <code>f₂</code> are the two source or heard frequencies, and the absolute value makes the beat rate positive.</p>
      <p><strong>Why it works:</strong> the beat envelope comes from how quickly the two phases drift apart, and that drift rate is set by the frequency difference.</p>
      <p><strong>Use it when:</strong> the sources have close but different frequencies and the question asks for the loud-soft-loud pulse rate.</p>
    `,
  },
  carrier: {
    kind: "Formula",
    title: "Carrier frequency formula",
    short: "Finds the average pitch inside a beat pattern.",
    preview: [
      "Average the two frequencies.",
      "Represents the fast oscillation inside the envelope.",
      "Different from beat rate.",
    ],
    body: `
      <p><strong>Formula:</strong> <code>f_carrier = (f₁ + f₂)/2</code></p>
      <p><strong>What each part means:</strong> you average the two nearby frequencies because the fast underlying oscillation sits between them.</p>
      <p><strong>Why it works:</strong> the sum of two close-frequency waves looks like a fast oscillation modulated by a slower envelope, and that fast oscillation lives near the average frequency.</p>
      <p><strong>Use it when:</strong> the problem asks what pitch is heard during a beat pattern.</p>
    `,
  },
  doppler: {
    kind: "Formula",
    title: "Full Doppler formula",
    short: "Tracks how observer motion and source motion change the heard frequency.",
    preview: [
      "Numerator tracks observer motion.",
      "Denominator tracks source motion.",
      "Toward each other raises frequency.",
    ],
    body: `
      <p><strong>Formula:</strong> <code>f_obs = ((v ± v_o) / (v ∓ v_s)) f_s</code></p>
      <p><strong>What each part means:</strong> <code>v</code> is wave speed in the medium, <code>v_o</code> is observer speed, <code>v_s</code> is source speed, and <code>f_s</code> is the source frequency.</p>
      <p><strong>Why it works:</strong> observer motion changes how often wavefronts are encountered, while source motion changes how tightly wavefronts are packed in space. The signs are linked opposites, not independent choices.</p>
      <p><strong>Use it when:</strong> a source or observer is moving and the problem asks for the frequency actually heard.</p>
    `,
  },
  "moving-source-doppler": {
    kind: "Formula",
    title: "Moving-source Doppler formula",
    short: "The source motion changes the spacing of the wavefronts before they reach you.",
    preview: [
      "The source term sits in the denominator.",
      "Toward the observer makes the denominator smaller.",
      "Away makes it larger.",
    ],
    body: `
      <p><strong>Core idea:</strong> when only the source moves, the source changes the wavelength pattern in front of and behind it.</p>
      <p><strong>Why it works:</strong> moving forward between emissions squeezes the forward wavefronts and stretches the backward ones.</p>
      <p><strong>Use it when:</strong> the source moves but the observer is stationary.</p>
    `,
  },
  "source-wavelength": {
    kind: "Formula",
    title: "Forward/backward source wavelength formula",
    short: "Shows how a moving source compresses the front wavelength and stretches the back wavelength.",
    preview: [
      "Front wavelength gets smaller.",
      "Back wavelength gets larger.",
      "This is the geometry underneath Doppler.",
    ],
    body: `
      <p><strong>Core idea:</strong> these wavelength relations are the physical picture behind the Doppler shift for a moving source.</p>
      <p><strong>Why it works:</strong> the source moves between emissions, so the distance between successive wavefronts changes depending on whether you look in front of it or behind it.</p>
      <p><strong>Use it when:</strong> the guide is asking you to reason from wavelength first before converting to frequency with <code>f = v/λ</code>.</p>
    `,
  },
  "double-slit-path": {
    kind: "Formula",
    title: "Double-slit path-difference formula",
    short: "Turns the slit geometry into the path difference between the two rays.",
    preview: [
      "d is slit separation.",
      "θ is angle from center.",
      "This is the geometry step before bright/dark conditions.",
    ],
    body: `
      <p><strong>Formula:</strong> <code>Δx = d sin θ</code></p>
      <p><strong>What each part means:</strong> <code>Δx</code> is path difference, <code>d</code> is the slit spacing, and <code>θ</code> is the angle away from the center line.</p>
      <p><strong>Why it works:</strong> the geometry of the two rays makes one path slightly longer than the other, and this expression captures that extra distance.</p>
      <p><strong>Use it when:</strong> converting a double-slit or grating picture into interference conditions.</p>
    `,
  },
  bright: {
    kind: "Formula",
    title: "Bright-fringe condition",
    short: "The path difference lands on a whole number of wavelengths.",
    preview: [
      "Path difference matches full cycles.",
      "That means the waves arrive in step.",
      "Use for bright or loud results.",
    ],
    body: `
      <p><strong>Formula:</strong> <code>d sin θ = nλ</code></p>
      <p><strong>What each part means:</strong> the geometric path difference equals an integer number of wavelengths.</p>
      <p><strong>Why it works:</strong> a whole extra number of cycles does not change the phase relationship, so the waves still reinforce.</p>
      <p><strong>Use it when:</strong> the problem asks for bright fringes, maxima, or constructive directions in double-slit and grating setups.</p>
    `,
  },
  dark: {
    kind: "Formula",
    title: "Dark-fringe condition",
    short: "The path difference lands on a half-integer number of wavelengths.",
    preview: [
      "Half a cycle offset flips crest into trough.",
      "That creates cancellation.",
      "Use for dark or zero-signal results.",
    ],
    body: `
      <p><strong>Formula:</strong> <code>d sin θ = (n + 1/2)λ</code></p>
      <p><strong>What each part means:</strong> the path difference is a half-integer number of wavelengths, so one wave arrives half a cycle out of step with the other.</p>
      <p><strong>Why it works:</strong> half a wavelength of extra travel corresponds to a phase mismatch of π, which drives destructive interference.</p>
      <p><strong>Use it when:</strong> the prompt asks for dark fringes, minima, cancellation, or zero intensity.</p>
    `,
  },
  "small-angle": {
    kind: "Formula",
    title: "Small-angle fringe-spacing formula",
    short: "Connects wavelength, screen distance, and fringe spacing when the screen is far away.",
    preview: [
      "D is screen distance.",
      "Δy is fringe spacing on the screen.",
      "Useful because screen distances are easier to measure than slit spacing.",
    ],
    body: `
      <p><strong>Formula:</strong> <code>d = λD/Δy</code> or equivalently <code>Δy = λD/d</code></p>
      <p><strong>What each part means:</strong> <code>d</code> is slit spacing, <code>D</code> is screen distance, <code>Δy</code> is fringe spacing, and <code>λ</code> is wavelength.</p>
      <p><strong>Why it works:</strong> for small angles, <code>sin θ ≈ tan θ ≈ y/D</code>, so the interference condition turns into a direct screen-position formula.</p>
      <p><strong>Use it when:</strong> the screen is far away and the problem gives you wall spacing measurements.</p>
    `,
  },
  "screen-geometry": {
    kind: "Formula",
    title: "Screen geometry formula",
    short: "Relates the fringe position on the screen to the angle.",
    preview: [
      "This is the picture-to-screen step.",
      "It converts angle into a measured screen distance.",
      "Usually paired with the path-difference formula.",
    ],
    body: `
      <p><strong>Core idea:</strong> this relation connects the interference angle to where the fringe lands on the screen.</p>
      <p><strong>Why it works:</strong> it comes straight from right-triangle geometry between the slit line, screen distance, and fringe position.</p>
      <p><strong>Use it when:</strong> the problem gives a screen distance or fringe location instead of an angle.</p>
    `,
  },
  grating: {
    kind: "Formula",
    title: "Diffraction grating formula",
    short: "Sets the bright angles for a many-slit interference pattern.",
    preview: [
      "Same bright-angle logic as double slit.",
      "Different wavelengths leave at different angles.",
      "That is why white light spreads into color.",
    ],
    body: `
      <p><strong>Core idea:</strong> this formula gives the bright directions in a diffraction grating.</p>
      <p><strong>Why it works:</strong> many slits still reinforce when their path differences line up as whole numbers of wavelengths.</p>
      <p><strong>Use it when:</strong> the setup has a grating, many slits, or white-light color ordering.</p>
    `,
  },
  "crystal-phase": {
    kind: "Formula",
    title: "Crystal phase-shift formula",
    short: "Converts a time delay into a source phase difference.",
    preview: [
      "Δt is the delay added by the crystal.",
      "T is one full cycle time.",
      "This tells you how much of a cycle the wave starts behind.",
    ],
    body: `
      <p><strong>Formula:</strong> <code>Δφ₀ = 2πΔt/T</code></p>
      <p><strong>What each part means:</strong> <code>Δt</code> is the delay and <code>T</code> is the period of the wave.</p>
      <p><strong>Why it works:</strong> one full period corresponds to one full cycle, or <code>2π</code> radians. A fraction of a period gives the same fraction of <code>2π</code>.</p>
      <p><strong>Use it when:</strong> a crystal or timing offset changes one slit or source before the normal geometry starts.</p>
    `,
  },
  "crystal-shift": {
    kind: "Formula",
    title: "Crystal pattern-shift formula",
    short: "Tells you how far the whole double-slit pattern moves.",
    preview: [
      "Δφ₀ is the source phase shift.",
      "λ and D scale the shift up.",
      "d in the denominator means wider slit spacing shrinks the shift.",
    ],
    body: `
      <p><strong>Formula:</strong> <code>y_shift = Δφ₀λD / (2πd)</code></p>
      <p><strong>What each part means:</strong> <code>Δφ₀</code> is the crystal-caused phase shift, <code>λ</code> is wavelength, <code>D</code> is screen distance, and <code>d</code> is slit spacing.</p>
      <p><strong>Why it works:</strong> the crystal changes the phase condition at the center, so the whole set of bright and dark points slides to new positions. The formula is the solved screen-position version of that idea.</p>
      <p><strong>Use it when:</strong> the problem asks how far the bright pattern shifts after one slit gets delayed.</p>
    `,
  },
  "thin-film": {
    kind: "Formula",
    title: "Thin-film constructive condition",
    short: "Uses the extra round-trip path inside the layered film.",
    preview: [
      "One ray reflects immediately.",
      "The other goes down and back up.",
      "That extra path is 2d.",
    ],
    body: `
      <p><strong>Formula:</strong> <code>2d = nλ</code></p>
      <p><strong>What each part means:</strong> <code>d</code> is the layer spacing, so the lower ray travels one <code>d</code> downward and one <code>d</code> upward for an extra path of <code>2d</code>.</p>
      <p><strong>Why it works:</strong> constructive reflection happens when that extra distance matches a whole number of wavelengths in the simplified no-extra-phase-flip model.</p>
      <p><strong>Use it when:</strong> a thin-film or butterfly problem asks which thickness reinforces a specific reflected color.</p>
    `,
  },
  intensity: {
    kind: "Formula",
    title: "Intensity formula",
    short: "Intensity is power spread over area.",
    preview: [
      "More power raises intensity.",
      "More area lowers intensity.",
      "This is the start of loudness-with-distance logic.",
    ],
    body: `
      <p><strong>Core idea:</strong> intensity tells you how concentrated the wave's power is.</p>
      <p><strong>Why it works:</strong> the same power feels weaker when it is spread over a larger area.</p>
      <p><strong>Use it when:</strong> you are comparing loudness, brightness, or energy spread across space.</p>
    `,
  },
  "inverse-square": {
    kind: "Formula",
    title: "Inverse-square intensity rule",
    short: "For 3D spreading, intensity falls like one over distance squared.",
    preview: [
      "Doubling distance makes intensity one fourth as large.",
      "This comes from spherical spreading.",
      "It explains why things get quiet quickly in 3D.",
    ],
    body: `
      <p><strong>Core idea:</strong> in three dimensions the wave spreads over a growing sphere, so intensity drops quickly with distance.</p>
      <p><strong>Why it works:</strong> the area of a sphere grows like <code>r²</code>, so the same power gets diluted by that factor.</p>
      <p><strong>Use it when:</strong> the wave spreads out in 3D and the problem asks how intensity changes with distance.</p>
    `,
  },
  decibels: {
    kind: "Formula",
    title: "Decibel formula",
    short: "Converts an intensity ratio into a sound-level change on a logarithmic scale.",
    preview: [
      "Decibels compare intensities, not just raw amplitude.",
      "A +10 dB change means ten times the intensity.",
      "The log is why sound-level changes are not linear.",
    ],
    body: `
      <p><strong>Core idea:</strong> decibels measure sound level on a logarithmic scale instead of a plain linear one.</p>
      <p><strong>Why it works:</strong> our hearing responds well to ratios across huge ranges, so the decibel formula compresses those intensity changes.</p>
      <p><strong>Use it when:</strong> the problem asks for sound level changes from intensity ratios or combined speaker levels.</p>
    `,
  },
  "beat-period": {
    kind: "Formula",
    title: "Beat period formula",
    short: "The beat period is the time between repeating loud-soft-loud cycles.",
    preview: [
      "It is the reciprocal partner of beat frequency.",
      "Long beat period means slow pulsing.",
      "Short beat period means fast pulsing.",
    ],
    body: `
      <p><strong>Core idea:</strong> if the beat frequency tells you how many pulses happen per second, the beat period tells you how long one pulse cycle lasts.</p>
      <p><strong>Why it works:</strong> beat period and beat frequency are reciprocals, just like ordinary period and ordinary frequency.</p>
      <p><strong>Use it when:</strong> the problem gives or asks for the time between pulse peaks instead of the pulse rate.</p>
    `,
  },
  "standing-wave-spacing": {
    kind: "Formula",
    title: "Standing-wave spacing rule",
    short: "Node-to-node spacing is half a wavelength, and node-to-nearest-antinode is a quarter wavelength.",
    preview: [
      "This is a pattern-spacing rule.",
      "It helps convert drawings into wavelength.",
      "Then you can move on to harmonics.",
    ],
    body: `
      <p><strong>Core idea:</strong> standing-wave patterns repeat in a fixed spatial way, and those repeating distances tell you the wavelength.</p>
      <p><strong>Why it works:</strong> a full wavelength covers node to node to node, so adjacent nodes are half a wavelength apart and a node to the nearest antinode is half of that again.</p>
      <p><strong>Use it when:</strong> the guide gives a node-antinode picture and asks for wavelength or harmonic reasoning.</p>
    `,
  },
  "de-broglie": {
    kind: "Formula",
    title: "de Broglie wavelength formula",
    short: "Connects particle momentum to wavelength.",
    preview: [
      "Bigger momentum means smaller wavelength.",
      "This is the core particle-wave bridge.",
      "Used in the matter-wave part of the guide.",
    ],
    body: `
      <p><strong>Core idea:</strong> de Broglie said moving particles can be described by wavelengths too.</p>
      <p><strong>Why it works:</strong> the wavelength shrinks as momentum grows, which is why wave behavior is easy to notice for tiny particles and hard to notice for everyday objects.</p>
      <p><strong>Use it when:</strong> the problem asks for matter-wave wavelength from momentum.</p>
    `,
  },
  "particle-box-energy": {
    kind: "Formula",
    title: "Particle-in-a-box energy formula",
    short: "Gives the allowed quantized energy levels in the box model.",
    preview: [
      "Energy comes in allowed levels.",
      "The levels scale with n squared.",
      "This is not a continuous spectrum.",
    ],
    body: `
      <p><strong>Core idea:</strong> the wave must fit the allowed box boundaries, so only certain wavelengths and energies are allowed.</p>
      <p><strong>Why it works:</strong> the boundary condition forces standing-wave patterns, and that quantizes momentum and therefore energy.</p>
      <p><strong>Use it when:</strong> the guide is in the first quantization or particle-in-a-box material.</p>
    `,
  },
};

const FORMULA_STRIP_EXPLAINER_KEYS = {
  "Wave speed": "wave-speed",
  Doppler: "doppler",
  Interference: "total-phase",
  "Total phase": "total-phase",
  Beats: "beat-frequency",
  "Double slit": "double-slit-path",
  Bright: "bright",
  Dark: "dark",
  Crystal: "crystal-phase",
  "Thin film": "thin-film",
  Superposition: "superposition-principle",
};

const SUBSCRIPT_DIGITS = {
  "₀": "0",
  "₁": "1",
  "₂": "2",
  "₃": "3",
  "₄": "4",
  "₅": "5",
  "₆": "6",
  "₇": "7",
  "₈": "8",
  "₉": "9",
};

const settingsKey = "waves-study-chat-settings";
const activeGuideKey = "waves-study-active-guide";
const chatLayoutKey = "waves-study-chat-layout";
const sidebarStateKey = "waves-study-sidebar-collapsed";
const responseModeKey = "waves-study-response-mode";
const autoCompactKey = "waves-study-auto-compact";
const studyLaterKey = "waves-study-later-items";
const annotationsKey = "waves-study-annotations";
const notesKey = "waves-study-notes";
const chatState = { messages: [] };
const quizStates = new Map();
const scrollSpyFocusLine = 0.3;
let pendingShowDocQuery = null;
let selectedDocumentText = "";
let selectedDocumentSource = null;
let selectedDocumentSelection = null;
let lastStudyTopicQuery = "";
let chatSettingsState = null;
let studyLaterItems = [];
let studyLaterSession = null;
let annotationItems = [];
let notesText = "";
let lastOpenedSectionId = "";
let scrollSpyTargets = [];
let scrollSpyTicking = false;
let activeOutlineLinkId = "";
let hoverCardAnchor = null;
let hoverCardHideTimer = null;
let activeGuideId = loadActiveGuideId();

renderActiveGuide();
loadStudyLaterItems();
loadAnnotations();
loadNotes();
renderStudyLaterSection();
renderNotesHighlights();
loadSettings();
loadSidebarState();
wireExampleSolutionToggles();
wireStudyLaterSection();
wireChatEvents();
wireStudyConceptsShell();
wireNotesShell();
wireSelectionAssist();
wireConceptInspector();
window.addEventListener("scroll", scheduleScrollSpySync, { passive: true });
window.addEventListener("resize", () => {
  scheduleScrollSpySync();
  positionOutlineHighlighter();
});

if (document.fonts?.ready) {
  document.fonts.ready.then(() => {
    syncActiveOutlineLink({ force: true, center: false, behavior: "auto" });
  });
}

function loadActiveGuideId() {
  const saved = safeJsonParse(localStorage.getItem(activeGuideKey));
  return guideConfigs[saved?.id] ? saved.id : "quiz1";
}

function getActiveGuideConfig() {
  return guideConfigs[activeGuideId] || guideConfigs.quiz1;
}

function getActiveStudyGuide() {
  return getActiveGuideConfig().guide;
}

function getActiveUnitQuizConfigs() {
  return getActiveGuideConfig().unitQuizConfigs;
}

function guideHasQuizzes() {
  return Boolean(getActiveGuideConfig().quizzesEnabled);
}

function setActiveGuide(guideId, options = {}) {
  const nextGuideId = guideConfigs[guideId] ? guideId : "quiz1";
  if (nextGuideId === activeGuideId && !options.force) return;

  activeGuideId = nextGuideId;
  localStorage.setItem(activeGuideKey, JSON.stringify({ id: activeGuideId }));
  renderActiveGuide();

  if (!options.preserveScroll) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function renderActiveGuide() {
  closeConceptInspector();
  hideConceptHovercard();
  renderGuideChrome();
  renderFormulaStrip();
  renderOutline();
  renderDocument();
  wireQuizSections();
  applyAllPersistentHighlights();
  wireScrollSpy();
  renderMathInNode(documentRoot);
  enhanceInteractiveStudyHelpers();
}

function renderGuideChrome() {
  const config = getActiveGuideConfig();

  if (guideEyebrow) guideEyebrow.textContent = config.eyebrow;
  if (guideTitle) guideTitle.textContent = config.title;
  if (docGuideLabel) docGuideLabel.textContent = config.label;
  if (docGuideHeading) docGuideHeading.textContent = config.heading;
  if (docGuideSummary) docGuideSummary.textContent = config.summary;
  if (sidebarLabel) sidebarLabel.textContent = config.sidebarLabel || `${config.label} bookmarks`;

  guideTabs.forEach((tab) => {
    const isActive = tab.getAttribute("data-guide-tab") === activeGuideId;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

function renderFormulaStrip() {
  formulaStrip.innerHTML = getActiveGuideConfig()
    .formulaStrip.map(
      (item) => `
        <div class="formula-chip">
          <strong>${escapeHtml(item.label)}</strong>
          <span>${escapeHtml(item.value)}</span>
        </div>
      `,
    )
    .join("");
}

function enhanceInteractiveStudyHelpers() {
  hideConceptHovercard();
  annotateStudyTerms(documentRoot);
  markExplainableFormulas(documentRoot);
  markExplainableFormulas(formulaStrip);
}

function annotateStudyTerms(container) {
  if (!container) return;

  const blocks = container.querySelectorAll("p, li, td, th, figcaption, h4");
  blocks.forEach((block) => {
    if (block.querySelector("[data-term-key]")) return;
    wrapTermsInElement(block);
  });
}

function wrapTermsInElement(element) {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;

      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (
        parent.closest(
          "[data-term-key], [data-formula-explainable='true'], code, a, button, .formula-box, .formula-inline, .formula-chip",
        )
      ) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach((node) => {
    const replacement = buildTermFragment(node.nodeValue);
    if (replacement) {
      node.parentNode.replaceChild(replacement, node);
    }
  });
}

function buildTermFragment(text) {
  const aliases = Object.keys(TERM_ALIASES).sort((left, right) => right.length - left.length);
  const pattern = new RegExp(`\\b(${aliases.map((value) => escapeRegExp(value)).join("|")})\\b`, "gi");
  const matches = [...text.matchAll(pattern)];
  if (!matches.length) return null;

  const fragment = document.createDocumentFragment();
  let cursor = 0;

  matches.forEach((match) => {
    const matchedText = match[0];
    const start = match.index ?? 0;

    if (start > cursor) {
      fragment.append(document.createTextNode(text.slice(cursor, start)));
    }

    const key = TERM_ALIASES[matchedText.toLowerCase()];
    const button = document.createElement("button");
    button.type = "button";
    button.className = "inline-term";
    button.dataset.termKey = key;
    button.textContent = matchedText;
    fragment.append(button);

    cursor = start + matchedText.length;
  });

  if (cursor < text.length) {
    fragment.append(document.createTextNode(text.slice(cursor)));
  }

  return fragment;
}

function markExplainableFormulas(container) {
  if (!container) return;

  container
    .querySelectorAll(".formula-box, .formula-inline, .formula-chip, .data-table td:first-child, code")
    .forEach((element) => {
      if (!looksLikeFormulaElement(element)) return;

      const explainerKey = getFormulaExplainerKey(element);
      const entry = getFormulaEntryFromElement(element, explainerKey);
      if (!entry) return;

      element.classList.add("is-explainable");
      element.dataset.formulaExplainable = "true";
      if (explainerKey) {
        element.dataset.formulaKey = explainerKey;
      } else {
        delete element.dataset.formulaKey;
      }

      if (!isNaturallyFocusable(element)) {
        element.tabIndex = 0;
        element.setAttribute("role", "button");
      }

      if (element.dataset.formulaBound === "true") return;
      element.dataset.formulaBound = "true";

      element.addEventListener("mouseenter", () => {
        const explainer = getFormulaEntryFromElement(element);
        if (!explainer) return;
        showConceptHovercard(element, explainer);
      });
      element.addEventListener("mouseleave", () => {
        scheduleHovercardHide();
      });
      element.addEventListener("focus", () => {
        const explainer = getFormulaEntryFromElement(element);
        if (!explainer) return;
        showConceptHovercard(element, explainer);
      });
      element.addEventListener("blur", () => {
        scheduleHovercardHide();
      });
      element.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        const explainer = getFormulaEntryFromElement(element);
        if (!explainer) return;
        openConceptInspector(explainer);
      });
    });
}

function getFormulaExplainerKey(element) {
  if (!element) return "";

  if (element.classList.contains("formula-chip")) {
    const label = element.querySelector("strong")?.textContent?.trim() || "";
    return FORMULA_STRIP_EXPLAINER_KEYS[label] || "";
  }

  const normalized = normalizeFormulaText(element.textContent || "");

  if (normalized.includes("ytot") && normalized.includes("y1") && normalized.includes("y2")) {
    return "superposition-principle";
  }
  if ((normalized.includes("y(x,t)") || normalized.includes("y(x,t)=") || normalized.includes("y(x,t)-y0=")) && normalized.includes("sin(2pit/t")) {
    return "wave-equation";
  }
  if ((normalized.startsWith("phi=") || normalized.startsWith("phi(x,t)=")) && normalized.includes("2pit/t")) {
    return "wave-equation";
  }
  if (normalized.startsWith("f=1/t")) {
    return "period-frequency";
  }
  if (normalized.includes("deltaphi=2pideltat/t-2pideltax/lambda+deltaphi0")) {
    return "phase-with-time";
  }
  if (normalized.includes("deltaphi") && normalized.includes("deltax") && normalized.includes("deltaphi0")) {
    return "total-phase";
  }
  if (normalized.includes("constructive:deltaphi=2npi") || normalized === "constructive:deltaphi=2npi" || normalized === "deltaphi=2npi") {
    return "constructive-phase";
  }
  if (
    normalized.includes("destructive:deltaphi=(2n+1)pi") ||
    normalized === "destructive:deltaphi=(2n+1)pi" ||
    normalized === "deltaphi=(2n+1)pi"
  ) {
    return "destructive-phase";
  }
  if (normalized.includes("deltax=nlambda-") && normalized.includes("deltaphi0")) {
    return "constructive-general";
  }
  if (normalized.includes("deltax=(n+1/2)lambda-") && normalized.includes("deltaphi0")) {
    return "destructive-general";
  }
  if (normalized.includes("fbeat") && normalized.includes("f1") && normalized.includes("f2")) {
    return "beat-frequency";
  }
  if (normalized.includes("fcarrier") && normalized.includes("f1") && normalized.includes("f2")) {
    return "carrier";
  }
  if (normalized.includes("tb=1/|f1-f2|") || normalized.includes("tb(f1-f2)=1") || normalized.includes("tb(1/t1-1/t2)=1")) {
    return "beat-period";
  }
  if (normalized.includes("fobserved=(v/(v±vsource))") || normalized.includes("fobserved=(v/(v+-vsource))") || normalized.includes("fobserved=(v/(v±vs))")) {
    return "moving-source-doppler";
  }
  if (normalized.includes("fobs") && normalized.includes("vo") && normalized.includes("fs")) {
    return "doppler";
  }
  if ((normalized.includes("lambdaforward") || normalized.includes("lambdabackward")) && normalized.includes("/fs")) {
    return "source-wavelength";
  }
  if (normalized.includes("deltax=dsintheta")) {
    return "double-slit-path";
  }
  if (normalized.includes("nlambda=dsintheta")) {
    return "grating";
  }
  if (normalized.includes("dsintheta=nlambda")) {
    return "bright";
  }
  if (normalized.includes("dsintheta=(n+1/2)lambda")) {
    return "dark";
  }
  if (normalized.includes("tantheta=deltay/d") || normalized.includes("tantheta=y/d") || normalized.includes("deltay=dtantheta")) {
    return "screen-geometry";
  }
  if ((normalized.includes("d=lambdad/deltay") || normalized.includes("d=lambdad/")) && normalized.includes("deltay")) {
    return "small-angle";
  }
  if (normalized.includes("deltaphi0=2pideltat/t")) {
    return "crystal-phase";
  }
  if (normalized.includes("yshift=") && normalized.includes("deltaphi0") && normalized.includes("2pid")) {
    return "crystal-shift";
  }
  if (normalized.includes("2d=nlambda")) {
    return "thin-film";
  }
  if (normalized.includes("d=nlambda/2")) {
    return "thin-film";
  }
  if (normalized.includes("i=p/area")) {
    return "intensity";
  }
  if (normalized.includes("i∝1/r2")) {
    return "inverse-square";
  }
  if (normalized.includes("d-d0=10log10(i/i0)")) {
    return "decibels";
  }
  if (normalized.includes("lambda=h/p")) {
    return "de-broglie";
  }
  if (normalized.includes("en=h2n2/(8ml2)")) {
    return "particle-box-energy";
  }
  if (normalized.includes("nodetonode=lambda/2") || normalized.includes("nodetonode=lambda/2nodetonearestantinode=lambda/4")) {
    return "standing-wave-spacing";
  }
  if (normalized.includes("v=lambdaf") || normalized.includes("v=lambdaf")) {
    return "wave-speed";
  }

  return "";
}

function normalizeFormulaText(value) {
  return replaceUnicodeSubscripts((value || "").toLowerCase())
    .replace(/\s+/g, "")
    .replace(/[′']/g, "")
    .replace(/&nbsp;/g, "")
    .replace(/×/g, "")
    .replace(/→/g, "")
    .replace(/≈/g, "")
    .replace(/<[^>]+>/g, "");
}

function looksLikeFormulaElement(element) {
  if (!element) return false;
  if (element.classList.contains("formula-box") || element.classList.contains("formula-inline") || element.classList.contains("formula-chip")) {
    return true;
  }
  if (element.dataset.formulaExplainable === "true") return true;
  return looksLikeFormulaText(element.textContent || "");
}

function looksLikeFormulaText(text) {
  const value = (text || "").trim();
  if (!value) return false;
  return /[=∝≈]/.test(value) || /[ΔλΦφθ₀₁₂₃₄₅₆₇₈₉]/.test(value) || /\bsin\b|\bcos\b|\blog\b/.test(value);
}

function getFormulaDisplayText(element) {
  if (!element) return "";
  if (element.classList.contains("formula-chip")) {
    const label = element.querySelector("strong")?.textContent?.trim() || "";
    const value = element.querySelector("span")?.textContent?.trim() || "";
    return label && value ? `${label}: ${value}` : label || value;
  }
  return (element.textContent || "").replace(/\s+/g, " ").trim();
}

function getFormulaEntryFromElement(element, explicitKey = element?.dataset?.formulaKey || "") {
  if (!element) return null;

  const displayFormula = getFormulaDisplayText(element);
  if (!displayFormula) return null;

  const baseEntry = explicitKey ? FORMULA_EXPLAINERS[explicitKey] : null;
  if (baseEntry) {
    return enrichFormulaEntry(baseEntry, displayFormula);
  }

  return buildFallbackFormulaEntry(displayFormula);
}

function enrichFormulaEntry(entry, displayFormula) {
  if (!entry) return null;

  const variableMarkup = buildFormulaVariableMarkup(displayFormula);
  const noteMarkup = `
    <p class="concept-inspector-note"><strong>How to use it:</strong> plug in the number from the problem that matches the physical meaning of each symbol, not just a letter that looks similar. Keep the units consistent before you solve.</p>
  `;

  return {
    ...entry,
    body: `
      <p><strong>Equation you clicked:</strong> <code>${escapeHtml(displayFormula)}</code></p>
      ${entry.body || ""}
      ${variableMarkup}
      ${noteMarkup}
    `,
  };
}

function buildFallbackFormulaEntry(displayFormula) {
  const variables = collectFormulaVariables(displayFormula);
  if (!variables.length && !looksLikeFormulaText(displayFormula)) return null;

  const variableMarkup = variables.length
    ? `
      <h3>What each part means</h3>
      <ul>
        ${variables
          .map(
            (variable) => `
              <li><code>${escapeHtml(variable.label)}</code> means ${escapeHtml(variable.meaning)}. Plug in ${escapeHtml(
                variable.plug,
              )}.</li>
            `,
          )
          .join("")}
      </ul>
    `
    : `
      <p>This line is mostly a worked substitution or numeric evaluation. Use the quantities from the problem statement with matching units and follow the same structure shown here.</p>
    `;

  return {
    kind: "Formula",
    title: "Equation breakdown",
    short: "Explains the symbols and what kind of values belong in them.",
    preview: variables.slice(0, 3).map((variable) => `${variable.label}: ${variable.meaning}`),
    body: `
      <p><strong>Equation you clicked:</strong> <code>${escapeHtml(displayFormula)}</code></p>
      <p><strong>What this is doing:</strong> this equation links the physical quantities shown here. The key is to match each symbol to the right kind of measurement before plugging numbers in.</p>
      ${variableMarkup}
      <p class="concept-inspector-note"><strong>Plug-in rule:</strong> use values from the same scenario and keep units consistent. If one distance is in nanometers and another is in meters, convert before solving.</p>
    `,
  };
}

function buildFormulaVariableMarkup(displayFormula) {
  const variables = collectFormulaVariables(displayFormula);
  if (!variables.length) {
    return `
      <p>This clicked equation is already mostly plugged in with numbers, so use it as a worked pattern: match each number to the physical quantity the problem gives and keep units consistent.</p>
    `;
  }

  return `
    <h3>What each variable means</h3>
    <ul>
      ${variables
        .map(
          (variable) => `
            <li><code>${escapeHtml(variable.label)}</code> means ${escapeHtml(variable.meaning)}. Plug in ${escapeHtml(
              variable.plug,
            )}.</li>
          `,
        )
        .join("")}
    </ul>
  `;
}

function collectFormulaVariables(displayFormula) {
  const raw = displayFormula || "";
  const normalized = normalizeFormulaText(raw);

  return FORMULA_VARIABLES.filter((variable) => variable.matches(raw, normalized)).filter(
    (variable, index, array) => array.findIndex((candidate) => candidate.label === variable.label) === index,
  );
}

function replaceUnicodeSubscripts(value) {
  return value.replace(/[₀₁₂₃₄₅₆₇₈₉]/g, (character) => SUBSCRIPT_DIGITS[character] || character);
}

function renderOutlineLabel(text, badge, tone, locator = "") {
  const badgeMarkup = badge
    ? `<span class="outline-badge${tone ? ` tone-${escapeHtml(tone)}` : ""}">${escapeHtml(badge)}</span>`
    : "";
  const locatorMarkup = locator ? `<span class="outline-link-meta">${escapeHtml(locator)}</span>` : "";

  return `
    <span class="outline-link-shell">
      <span class="outline-link-row">
        <span class="outline-link-title">${escapeHtml(text)}</span>
        ${badgeMarkup}
      </span>
      ${locatorMarkup}
    </span>
  `;
}

function renderOutlineLegend(items = []) {
  if (!items.length) return "";

  return `
    <section class="outline-legend" aria-label="Study map legend">
      <p class="outline-legend-kicker">Legend</p>
      <p class="outline-legend-note">Each section shows its packet locator underneath so you can jump back to the right DL fast.</p>
      <div class="outline-legend-list">
        ${items
          .map(
            (item) => `
              <div class="outline-legend-item">
                <div class="outline-legend-row">
                  <span class="outline-badge${item.tone ? ` tone-${escapeHtml(item.tone)}` : ""}">${escapeHtml(
                    item.label,
                  )}</span>
                </div>
                <p class="outline-legend-copy">${escapeHtml(item.description || "")}</p>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderSectionLocator(locator) {
  if (!locator) return "";

  return `
    <p class="doc-section-locator">
      <strong>Packet locator:</strong>
      <span>${escapeHtml(locator)}</span>
    </p>
  `;
}

function renderSectionHeading(section) {
  const kickerMarkup = section.kicker
    ? `<p class="doc-section-kicker">${escapeHtml(section.kicker)}</p>`
    : "";
  const badgeMarkup = section.badge
    ? `<span class="section-badge${section.badgeTone ? ` tone-${escapeHtml(section.badgeTone)}` : ""}">${escapeHtml(
        section.badge,
      )}</span>`
    : "";

  return `
    <div class="doc-section-heading">
      ${kickerMarkup}
      <div class="doc-section-title-row">
        <span class="doc-section-title">${escapeHtml(section.title)}</span>
        ${badgeMarkup}
      </div>
      ${renderSectionLocator(section.locator)}
    </div>
  `;
}

function renderChapterIntro(chapter) {
  if (!Array.isArray(chapter.studyCard) || !chapter.studyCard.length) return "";

  return `
    <div class="doc-chapter-intro">
      <div class="chapter-intro-grid">
        ${chapter.studyCard
          .map(
            (item) => `
              <div class="chapter-intro-card">
                <p class="chapter-intro-label">${escapeHtml(item.label || "Note")}</p>
                <p class="chapter-intro-value">${escapeHtml(item.value || "")}</p>
              </div>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderOutline() {
  const studyGuide = getActiveStudyGuide();
  const config = getActiveGuideConfig();
  const chapterLinks = studyGuide.chapters
    .map(
      (chapter) => `
        <li class="outline-item">
          <a
            class="outline-link outline-link-chapter"
            href="#${chapter.id}"
            data-outline-link="${chapter.id}"
            data-outline-kind="chapter"
          >
            ${renderOutlineLabel(chapter.title, chapter.badge, chapter.badgeTone, chapter.locator)}
          </a>
          <ul class="outline-sublist">
            ${chapter.sections
              .map(
                (section) => `
                  <li>
                    <a
                      class="outline-link outline-link-section"
                      href="#${section.id}"
                      data-outline-link="${section.id}"
                      data-outline-kind="section"
                      data-outline-parent="${chapter.id}"
                    >
                      ${renderOutlineLabel(section.title, section.badge, section.badgeTone, section.locator)}
                    </a>
                  </li>
                `,
              )
              .join("")}
            ${
              guideHasQuizzes()
                ? `
                  <li>
                    <a
                      class="outline-link outline-link-section outline-link-quiz"
                      href="#${chapter.id}-quiz"
                      data-outline-link="${chapter.id}-quiz"
                      data-outline-kind="section"
                      data-outline-parent="${chapter.id}"
                    >
                      ${renderOutlineLabel(`Chapter ${String(Number(chapter.number))} Quiz`)}
                    </a>
                  </li>
                `
                : ""
            }
          </ul>
        </li>
      `,
    )
    .join("");

  const recapLinks = studyGuide.recap
    ? `
      <li class="outline-item">
        <a
          class="outline-link outline-link-chapter"
          href="#${studyGuide.recap.id}"
          data-outline-link="${studyGuide.recap.id}"
          data-outline-kind="chapter"
        >
          ${renderOutlineLabel(
            studyGuide.recap.title,
            studyGuide.recap.badge,
            studyGuide.recap.badgeTone,
            studyGuide.recap.locator,
          )}
        </a>
        <ul class="outline-sublist">
          ${studyGuide.recap.sections
            .map(
              (section) => `
                <li>
                  <a
                    class="outline-link outline-link-section"
                    href="#${section.id}"
                    data-outline-link="${section.id}"
                    data-outline-kind="section"
                    data-outline-parent="${studyGuide.recap.id}"
                  >
                    ${renderOutlineLabel(section.title, section.badge, section.badgeTone, section.locator)}
                  </a>
                </li>
              `,
            )
            .join("")}
        </ul>
      </li>
    `
    : "";

  const unitQuizConfigs = getActiveUnitQuizConfigs();
  const unitQuizLinks =
    guideHasQuizzes() && unitQuizConfigs.length
      ? `
        <li class="outline-item">
          <a
            class="outline-link outline-link-chapter"
            href="#unit-quizzes"
            data-outline-link="unit-quizzes"
            data-outline-kind="chapter"
          >
            ${renderOutlineLabel("Full Unit Quizzes")}
          </a>
          <ul class="outline-sublist">
            ${unitQuizConfigs
              .map(
                (quiz) => `
                  <li>
                    <a
                      class="outline-link outline-link-section outline-link-quiz"
                      href="#${quiz.id}"
                      data-outline-link="${quiz.id}"
                      data-outline-kind="section"
                      data-outline-parent="unit-quizzes"
                    >
                      ${renderOutlineLabel(quiz.sectionTitle)}
                    </a>
                  </li>
                `,
              )
              .join("")}
          </ul>
        </li>
      `
      : "";

  outlineNav.innerHTML = `
    ${renderOutlineLegend(config.outlineLegend || [])}
    <div class="outline-scroll-shell" data-outline-shell>
      <div class="outline-active-pill" data-outline-pill aria-hidden="true"></div>
      <ul class="outline-list">${chapterLinks}${recapLinks}${unitQuizLinks}</ul>
    </div>
  `;
}

function renderDocument() {
  const studyGuide = getActiveStudyGuide();
  const chapterMarkup = studyGuide.chapters
    .map(
      (chapter) => `
        <section class="doc-chapter" id="${chapter.id}">
          <div class="doc-chapter-head">
            <p class="chapter-eyebrow">Chapter ${chapter.number}</p>
            <h3>${escapeHtml(chapter.title.replace(/^Chapter \d+ - /, ""))}</h3>
          </div>
          ${renderChapterIntro(chapter)}
          <div class="doc-section-stack">
            ${chapter.sections
              .map(
                (section) => `
                  <article class="doc-section" id="${section.id}">
                    ${renderSectionHeading(section)}
                    <div class="doc-section-body">
                      ${renderSectionBody(section)}
                    </div>
                  </article>
                `,
              )
              .join("")}
            ${guideHasQuizzes() ? renderQuizSection(chapter) : ""}
          </div>
        </section>
      `,
    )
    .join("");

  const recapMarkup = studyGuide.recap
    ? `
      <section class="doc-chapter recap-chapter" id="${studyGuide.recap.id}">
        <div class="doc-chapter-head">
          <p class="chapter-eyebrow">${guideHasQuizzes() ? "Final Recap" : "Appendix"}</p>
          <h3>${escapeHtml(studyGuide.recap.title)}</h3>
        </div>
        <div class="doc-section-stack">
          ${studyGuide.recap.sections
            .map(
              (section) => `
                <article class="doc-section" id="${section.id}">
                  ${renderSectionHeading(section)}
                  <div class="doc-section-body">
                    ${renderSectionBody(section)}
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    `
    : "";

  documentRoot.innerHTML = chapterMarkup + recapMarkup + (guideHasQuizzes() ? renderUnitQuizSections() : "");
}

function renderUnitQuizSections() {
  return `
    <section class="doc-chapter unit-quiz-chapter" id="unit-quizzes">
      <div class="doc-chapter-head">
        <p class="chapter-eyebrow">Whole Unit</p>
        <h3>Comprehensive Quizzes</h3>
      </div>
      <div class="doc-section-stack">
        ${getActiveUnitQuizConfigs()
          .map(
            (quiz) => `
              <article class="doc-section doc-quiz-section" id="${quiz.id}">
                <div class="doc-section-heading">
                  <span class="doc-section-title">${escapeHtml(quiz.sectionTitle)}</span>
                </div>
                <div class="doc-section-body">
                  <div class="quiz-shell" data-quiz-root="${quiz.id}"></div>
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderSectionBody(section) {
  if (!sectionNeedsSolutionToggle(section)) {
    return section.html;
  }

  return buildStudyExampleMarkup(section.html);
}

function sectionNeedsSolutionToggle(section) {
  return /\bworked example\b|\bproblem\b/i.test(section.title);
}

function buildStudyExampleMarkup(html) {
  const temp = document.createElement("div");
  temp.innerHTML = html.trim();
  const nodes = [...temp.children];

  if (nodes.length <= 1) {
    return html;
  }

  const introNode = nodes.shift();
  const introMarkup = introNode?.outerHTML || "";
  const solutionMarkup = nodes.map((node) => node.outerHTML).join("");

  if (!solutionMarkup.trim()) {
    return html;
  }

  return `
    <div class="example-study-mode">
      <div class="example-study-head">
        <button
          class="example-steps-toggle"
          type="button"
          data-example-toggle
          aria-expanded="true"
        >
          Hide steps
        </button>
      </div>
      <div class="example-problem">
        ${introMarkup}
      </div>
      <div class="example-solution" data-example-solution>
        ${solutionMarkup}
      </div>
    </div>
  `;
}

function renderQuizSection(chapter) {
  return `
    <article class="doc-section doc-quiz-section" id="${chapter.id}-quiz">
      <div class="doc-section-heading">
        <span class="doc-section-title">Chapter ${escapeHtml(String(Number(chapter.number)))} Quiz</span>
      </div>
      <div class="doc-section-body">
        <div class="quiz-shell" data-quiz-root="${chapter.id}"></div>
      </div>
    </article>
  `;
}

function wireSectionAccordions() {
  document.querySelectorAll(".doc-section").forEach((section) => {
    bindSectionAccordion(section);
  });
}

function bindSectionAccordion(section) {
  if (!section || section.dataset.accordionBound === "true") return;
  const trigger = section.querySelector(".doc-section-trigger");
  if (!trigger) return;

  section.dataset.accordionBound = "true";
  trigger.addEventListener("click", () => {
    const isOpen = trigger.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeSection(section);
      return;
    }

    revealSection(section, false);
  });
}

function wireExampleSolutionToggles() {
  documentRoot.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-example-toggle]");
    if (toggle) {
      const shell = toggle.closest(".example-study-mode");
      const solution = shell?.querySelector("[data-example-solution]");
      if (!shell || !solution) return;

      const isHidden = shell.classList.toggle("is-solution-hidden");
      toggle.textContent = isHidden ? "Show steps" : "Hide steps";
      toggle.setAttribute("aria-expanded", String(!isHidden));
      requestAnimationFrame(() => {
        syncOpenPanelHeight(toggle.closest(".doc-section-panel"));
      });
      return;
    }

    const highlight = event.target.closest(".doc-persistent-highlight");
    if (highlight?.dataset.highlightId) {
      removePersistentHighlight(highlight.dataset.highlightId);
    }
  });
}

function wireResponsivePanels() {
  document.querySelectorAll(".doc-section-panel").forEach((panel) => {
    const body = panel.querySelector(".doc-section-body");
    if (!body) return;

    body.querySelectorAll("img").forEach((image) => {
      if (image.complete) return;
      image.addEventListener("load", () => {
        syncOpenPanelHeight(panel);
      });
    });

    if (typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(() => {
      syncOpenPanelHeight(panel);
    });
    observer.observe(body);
  });
}

function wireScrollSpy() {
  const studyGuide = getActiveStudyGuide();
  scrollSpyTargets = [
    ...studyGuide.chapters.flatMap((chapter) => [
      chapter.id,
      ...chapter.sections.map((section) => section.id),
      ...(guideHasQuizzes() ? [`${chapter.id}-quiz`] : []),
    ]),
    ...(studyGuide.recap ? [studyGuide.recap.id, ...studyGuide.recap.sections.map((section) => section.id)] : []),
    ...(guideHasQuizzes() ? ["unit-quizzes", ...getActiveUnitQuizConfigs().map((quiz) => quiz.id)] : []),
  ]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  syncActiveOutlineLink({ force: true, center: false, behavior: "auto" });
}

function scheduleScrollSpySync() {
  if (scrollSpyTicking) return;

  scrollSpyTicking = true;
  requestAnimationFrame(() => {
    scrollSpyTicking = false;
    syncActiveOutlineLink();
  });
}

function syncActiveOutlineLink(options = {}) {
  const nextId = getActiveScrollSpyId();
  if (!nextId) {
    hideOutlineHighlighter();
    return;
  }

  setActiveOutlineLink(nextId, options);
}

function getActiveScrollSpyId() {
  if (!scrollSpyTargets.length) return "";

  const focusLine = window.innerHeight * scrollSpyFocusLine;
  let activeTarget = scrollSpyTargets[0];

  for (const target of scrollSpyTargets) {
    if (target.getBoundingClientRect().top <= focusLine) {
      activeTarget = target;
      continue;
    }

    break;
  }

  return activeTarget?.id || "";
}

function setActiveOutlineLink(id, options = {}) {
  if (!id) return;

  const links = [...document.querySelectorAll("[data-outline-link]")];
  let activeLink = null;

  links.forEach((link) => {
    const isActive = link.getAttribute("data-outline-link") === id;
    link.classList.toggle("is-active", isActive);
    link.classList.remove("is-parent-active");
    if (isActive) activeLink = link;
  });

  if (!activeLink) {
    activeOutlineLinkId = "";
    hideOutlineHighlighter();
    return;
  }

  const parentId = activeLink.getAttribute("data-outline-parent");
  if (parentId && parentId !== id) {
    const parentLink = outlineNav.querySelector(`[data-outline-link="${parentId}"]`);
    parentLink?.classList.add("is-parent-active");
  }

  const shouldCenter = options.center ?? id !== activeOutlineLinkId;
  activeOutlineLinkId = id;
  positionOutlineHighlighter(activeLink);

  if (shouldCenter) {
    centerOutlineOnLink(activeLink, options.behavior || "smooth");
  }
}

function positionOutlineHighlighter(activeLink) {
  const pill = outlineNav.querySelector("[data-outline-pill]");
  const shell = outlineNav.querySelector("[data-outline-shell]");
  const target =
    activeLink ||
    (activeOutlineLinkId ? outlineNav.querySelector(`[data-outline-link="${activeOutlineLinkId}"]`) : null);

  if (!pill || !shell || !target || docSidebar.classList.contains("is-collapsed")) {
    hideOutlineHighlighter();
    return;
  }

  const shellRect = shell.getBoundingClientRect();
  const linkRect = target.getBoundingClientRect();
  const insetX = 6;
  const insetY = 4;

  pill.style.opacity = "1";
  pill.style.transform = `translate3d(${Math.round(linkRect.left - shellRect.left - insetX)}px, ${Math.round(
    linkRect.top - shellRect.top - insetY,
  )}px, 0)`;
  pill.style.width = `${Math.round(linkRect.width + insetX * 2)}px`;
  pill.style.height = `${Math.round(linkRect.height + insetY * 2)}px`;
}

function hideOutlineHighlighter() {
  const pill = outlineNav.querySelector("[data-outline-pill]");
  if (!pill) return;
  pill.style.opacity = "0";
}

function centerOutlineOnLink(activeLink, behavior = "smooth") {
  if (!activeLink || docSidebar.classList.contains("is-collapsed")) return;

  const sidebarRect = docSidebar.getBoundingClientRect();
  const linkRect = activeLink.getBoundingClientRect();
  const nextTop =
    docSidebar.scrollTop + (linkRect.top - sidebarRect.top) - (docSidebar.clientHeight - linkRect.height) / 2;

  if (Math.abs(docSidebar.scrollTop - nextTop) < 10) return;

  docSidebar.scrollTo({
    top: Math.max(0, nextTop),
    behavior,
  });
}

function wireChatEvents() {
  sidebarCollapse.addEventListener("click", () => {
    const nextCollapsed = !docSidebar.classList.contains("is-collapsed");
    docSidebar.classList.toggle("is-collapsed", nextCollapsed);
    workspace.classList.toggle("sidebar-collapsed", nextCollapsed);
    sidebarCollapse.setAttribute("aria-expanded", String(!nextCollapsed));
    sidebarCollapse.textContent = nextCollapsed ? "›" : "‹";
    localStorage.setItem(sidebarStateKey, JSON.stringify({ collapsed: nextCollapsed }));
    requestAnimationFrame(() => {
      syncActiveOutlineLink({ force: true, center: !nextCollapsed, behavior: "auto" });
    });
  });

  guideTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      setActiveGuide(tab.getAttribute("data-guide-tab"));
    });
  });

  outlineNav.addEventListener("click", (event) => {
    const link = event.target.closest("[data-outline-link]");
    if (!link) return;
    setActiveOutlineLink(link.getAttribute("data-outline-link"), { center: true });
  });

  studyConceptsButton.addEventListener("click", () => {
    toggleStudyConceptsShell();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && studyConceptsShell.classList.contains("is-open")) {
      closeStudyConceptsShell();
    }
    if (event.key === "Escape" && notesShell.classList.contains("is-open")) {
      closeNotesShell();
    }
  });
}

function loadSettings() {
  const saved = safeJsonParse(localStorage.getItem(settingsKey));
  chatSettingsState = normalizeChatSettings(saved);
}

function normalizeChatSettings(saved) {
  const providers = {
    groq: {
      model: defaultModels.groq,
      apiKey: HARDCODED_GROQ_KEY,
    },
    openrouter: {
      model: defaultModels.openrouter,
      apiKey: "",
    },
  };
  const features = {
    webLookup: saved?.features?.webLookup !== false,
    imageSearch: saved?.features?.imageSearch !== false,
  };

  if (saved?.providers) {
    providers.groq.model = saved.providers.groq?.model || defaultModels.groq;
    providers.groq.apiKey = saved.providers.groq?.apiKey || HARDCODED_GROQ_KEY;
    providers.openrouter.model = saved.providers.openrouter?.model || defaultModels.openrouter;
    providers.openrouter.apiKey = saved.providers.openrouter?.apiKey || "";
  } else if (saved) {
    const legacyProvider = saved.provider === "openrouter" ? "openrouter" : "groq";
    const legacyModel = saved.model?.trim();
    const legacyApiKey = saved.apiKey?.trim();

    if (legacyProvider === "groq") {
      providers.groq.model =
        legacyModel && !/gemma/i.test(legacyModel) ? legacyModel : defaultModels.groq;
      providers.groq.apiKey = legacyApiKey || HARDCODED_GROQ_KEY;
    } else {
      providers.openrouter.model = legacyModel || defaultModels.openrouter;
      providers.openrouter.apiKey = legacyApiKey || "";
    }
  }

  if (
    !providers.groq.model ||
    /gemma/i.test(providers.groq.model) ||
    providers.groq.model === "llama-3.3-70b-versatile"
  ) {
    providers.groq.model = defaultModels.groq;
  }

  if (!providers.groq.apiKey) {
    providers.groq.apiKey = HARDCODED_GROQ_KEY;
  }

  if (!providers.openrouter.model) {
    providers.openrouter.model = defaultModels.openrouter;
  }

  return {
    provider: saved?.provider === "openrouter" ? "openrouter" : "groq",
    providers,
    features,
  };
}

function applyProviderSettings(provider) {
  return provider;
}

function applyFeatureSettings() {
  return getFeatureSettings();
}

function getFeatureSettings() {
  return {
    webLookup: chatSettingsState?.features?.webLookup !== false,
    imageSearch: chatSettingsState?.features?.imageSearch !== false,
  };
}

function persistProviderInputs(provider) {
  return provider;
}

function getActiveProviderConfig() {
  return {
    provider: "groq",
    model: chatSettingsState?.providers?.groq?.model || defaultModels.groq,
    apiKey: chatSettingsState?.providers?.groq?.apiKey || HARDCODED_GROQ_KEY,
  };
}

function loadSidebarState() {
  const saved = safeJsonParse(localStorage.getItem(sidebarStateKey));
  const collapsed = Boolean(saved?.collapsed);
  docSidebar.classList.toggle("is-collapsed", collapsed);
  workspace.classList.toggle("sidebar-collapsed", collapsed);
  sidebarCollapse.setAttribute("aria-expanded", String(!collapsed));
  sidebarCollapse.textContent = collapsed ? "›" : "‹";
  requestAnimationFrame(() => {
    syncActiveOutlineLink({ force: true, center: !collapsed, behavior: "auto" });
  });
}

function loadResponseMode() {
  if (!modeButtons.length) return;
  const saved = safeJsonParse(localStorage.getItem(responseModeKey));
  setResponseMode(saved?.mode || "concise");
}

function loadAutoCompactState() {
  if (!autoCompactToggle) return;
  const saved = safeJsonParse(localStorage.getItem(autoCompactKey));
  autoCompactToggle.checked = saved?.enabled !== false;
}

function setResponseMode(mode) {
  const resolvedMode = mode === "explained" ? "explained" : "concise";
  modeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.getAttribute("data-mode") === resolvedMode);
  });
  localStorage.setItem(responseModeKey, JSON.stringify({ mode: resolvedMode }));
}

function getResponseMode() {
  const active = modeButtons.find((button) => button.classList.contains("is-active"));
  return active?.getAttribute("data-mode") || "concise";
}

function getAutoCompactState() {
  return autoCompactToggle?.checked || false;
}

function revealSection(targetSection, shouldCenter, forceExclusive = false) {
  if (forceExclusive || getAutoCompactState()) {
    openExclusiveSection(targetSection, shouldCenter);
    return;
  }

  openSection(targetSection);
  if (shouldCenter) {
    requestAnimationFrame(() => {
      centerTarget(targetSection);
    });
  }
}

function openExclusiveSection(targetSection, shouldCenter) {
  document.querySelectorAll(".doc-section.is-open").forEach((section) => {
    if (section !== targetSection) {
      closeSection(section);
    }
  });
  openSection(targetSection);

  if (shouldCenter) {
    requestAnimationFrame(() => {
      centerTarget(targetSection);
    });
  }
}

function openSection(section) {
  const trigger = section.querySelector(".doc-section-trigger");
  const panel = section.querySelector(".doc-section-panel");
  if (!trigger || !panel) return;
  if (section.classList.contains("is-open")) {
    lastOpenedSectionId = section.id;
    syncOpenPanelHeight(panel);
    return;
  }

  trigger.setAttribute("aria-expanded", "true");
  section.classList.add("is-open");
  lastOpenedSectionId = section.id;
  syncOpenPanelHeight(panel);
}

function closeSection(section) {
  const trigger = section.querySelector(".doc-section-trigger");
  const panel = section.querySelector(".doc-section-panel");
  if (!trigger || !panel) return;
  if (!section.classList.contains("is-open")) return;

  trigger.setAttribute("aria-expanded", "false");
  section.classList.remove("is-open");
  panel.style.maxHeight = `${panel.scrollHeight}px`;
  requestAnimationFrame(() => {
    panel.style.maxHeight = "0px";
  });
}

function compactToMostRecentSection() {
  const openSections = [...document.querySelectorAll(".doc-section.is-open")];
  if (openSections.length <= 1) return;

  const keepOpen =
    (lastOpenedSectionId && document.getElementById(lastOpenedSectionId)) || openSections[openSections.length - 1];
  openSections.forEach((section) => {
    if (section !== keepOpen) {
      closeSection(section);
    }
  });
}

function centerTarget(target) {
  target.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
}

function autoResizeChatInput() {
  chatInput.style.height = "auto";
  const nextHeight = Math.min(chatInput.scrollHeight, chatTextareaMaxHeight);
  chatInput.style.height = `${nextHeight}px`;
  chatInput.style.overflowY = chatInput.scrollHeight > chatTextareaMaxHeight ? "auto" : "hidden";
}

function wireStudyConceptsShell() {
  studyConceptsClose.addEventListener("click", closeStudyConceptsShell);

  document.addEventListener("pointerdown", (event) => {
    if (!studyConceptsShell.classList.contains("is-open")) return;
    if (studyConceptsShell.contains(event.target) || studyConceptsButton.contains(event.target)) return;
    closeStudyConceptsShell();
  });
}

function openStudyConceptsShell() {
  closeNotesShell();
  studyConceptsShell.classList.add("is-open");
  studyConceptsShell.setAttribute("aria-hidden", "false");
  studyConceptsButton.setAttribute("aria-expanded", "true");
}

function closeStudyConceptsShell() {
  studyConceptsShell.classList.remove("is-open");
  studyConceptsShell.setAttribute("aria-hidden", "true");
  studyConceptsButton.setAttribute("aria-expanded", "false");
}

function toggleStudyConceptsShell() {
  if (studyConceptsShell.classList.contains("is-open")) {
    closeStudyConceptsShell();
    return;
  }
  openStudyConceptsShell();
}

function wireNotesShell() {
  notesButton.addEventListener("click", () => {
    toggleNotesShell();
  });

  notesClose.addEventListener("click", closeNotesShell);

  notesInput.addEventListener("input", () => {
    notesText = notesInput.value;
    saveNotes();
  });

  notesHighlightsRoot.addEventListener("click", (event) => {
    const jumpButton = event.target.closest("[data-highlight-jump]");
    if (jumpButton) {
      focusPersistentHighlight(jumpButton.getAttribute("data-highlight-jump"));
      return;
    }

    const removeButton = event.target.closest("[data-highlight-remove]");
    if (removeButton) {
      removePersistentHighlight(removeButton.getAttribute("data-highlight-remove"));
    }
  });

  document.addEventListener("pointerdown", (event) => {
    if (!notesShell.classList.contains("is-open")) return;
    if (notesShell.contains(event.target) || notesButton.contains(event.target)) return;
    closeNotesShell();
  });
}

function wireConceptInspector() {
  [documentRoot, formulaStrip].forEach((root) => {
    root?.addEventListener("click", handleConceptInteractionClick);
  });

  conceptInspectorClose?.addEventListener("click", closeConceptInspector);
  conceptInspectorBackdrop?.addEventListener("click", closeConceptInspector);
  conceptHovercard?.addEventListener("mouseenter", cancelHovercardHide);
  conceptHovercard?.addEventListener("mouseleave", scheduleHovercardHide);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && conceptInspector?.classList.contains("is-open")) {
      closeConceptInspector();
    }
  });
}

function handleConceptInteractionClick(event) {
  const termButton = event.target.closest("[data-term-key]");
  if (termButton) {
    const entry = TERM_EXPLAINERS[termButton.dataset.termKey];
    if (!entry) return;
    openConceptInspector(entry);
    return;
  }

  const formulaButton = event.target.closest("[data-formula-explainable='true']");
  if (formulaButton) {
    const entry = getFormulaEntryFromElement(formulaButton);
    if (!entry) return;
    openConceptInspector(entry);
  }
}

function openConceptInspector(entry) {
  if (!entry || !conceptInspector) return;

  if (conceptInspectorKicker) conceptInspectorKicker.textContent = entry.kind || "Concept help";
  if (conceptInspectorTitle) conceptInspectorTitle.textContent = entry.title || "Definition";
  if (conceptInspectorBody) conceptInspectorBody.innerHTML = entry.body || "";

  conceptInspector.classList.add("is-open");
  conceptInspector.setAttribute("aria-hidden", "false");
  conceptInspectorBackdrop?.classList.add("is-open");
  conceptInspectorBackdrop?.setAttribute("aria-hidden", "false");
  document.body.classList.add("concept-inspector-open");
}

function closeConceptInspector() {
  if (!conceptInspector) return;

  conceptInspector.classList.remove("is-open");
  conceptInspector.setAttribute("aria-hidden", "true");
  conceptInspectorBackdrop?.classList.remove("is-open");
  conceptInspectorBackdrop?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("concept-inspector-open");
}

function showConceptHovercard(anchor, entry) {
  if (!conceptHovercard || !anchor || !entry) return;

  cancelHovercardHide();
  hoverCardAnchor = anchor;

  const previewMarkup = Array.isArray(entry.preview) && entry.preview.length
    ? `<ul>${entry.preview.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>`
    : "";

  conceptHovercard.innerHTML = `
    <strong>${escapeHtml(entry.title || "Formula help")}</strong>
    <p>${escapeHtml(entry.short || "")}</p>
    ${previewMarkup}
    <p class="concept-hovercard-meta">Click for the full breakdown.</p>
  `;

  conceptHovercard.classList.add("is-visible");
  conceptHovercard.setAttribute("aria-hidden", "false");

  const rect = anchor.getBoundingClientRect();
  const width = conceptHovercard.offsetWidth || 320;
  const maxLeft = window.scrollX + window.innerWidth - width - 12;
  const left = Math.max(12, Math.min(maxLeft, rect.left + window.scrollX));
  const top = Math.max(12, rect.top + window.scrollY - conceptHovercard.offsetHeight - 10);

  conceptHovercard.style.left = `${left}px`;
  conceptHovercard.style.top = `${top}px`;
}

function hideConceptHovercard() {
  hoverCardAnchor = null;
  if (!conceptHovercard) return;
  conceptHovercard.classList.remove("is-visible");
  conceptHovercard.setAttribute("aria-hidden", "true");
}

function scheduleHovercardHide() {
  cancelHovercardHide();
  hoverCardHideTimer = window.setTimeout(() => {
    hideConceptHovercard();
  }, 110);
}

function cancelHovercardHide() {
  if (!hoverCardHideTimer) return;
  window.clearTimeout(hoverCardHideTimer);
  hoverCardHideTimer = null;
}

function openNotesShell() {
  closeStudyConceptsShell();
  notesShell.classList.add("is-open");
  notesShell.setAttribute("aria-hidden", "false");
  notesButton.setAttribute("aria-expanded", "true");
}

function closeNotesShell() {
  notesShell.classList.remove("is-open");
  notesShell.setAttribute("aria-hidden", "true");
  notesButton.setAttribute("aria-expanded", "false");
}

function toggleNotesShell() {
  if (notesShell.classList.contains("is-open")) {
    closeNotesShell();
    return;
  }
  openNotesShell();
}

function loadNotes() {
  const saved = safeJsonParse(localStorage.getItem(notesKey));
  notesText = typeof saved?.text === "string" ? saved.text : "";
  notesInput.value = notesText;
}

function saveNotes() {
  localStorage.setItem(notesKey, JSON.stringify({ text: notesText }));
}

function loadAnnotations() {
  const saved = safeJsonParse(localStorage.getItem(annotationsKey));
  annotationItems = Array.isArray(saved?.items) ? saved.items : [];
  applyAllPersistentHighlights();
}

function saveAnnotations() {
  localStorage.setItem(annotationsKey, JSON.stringify({ items: annotationItems }));
  renderNotesHighlights();
}

function renderNotesHighlights() {
  if (!annotationItems.length) {
    notesHighlightsRoot.innerHTML = `
      <div class="notes-empty">
        <p><strong>No document highlights yet.</strong></p>
        <p>Highlight any line in the study guide and use the new <strong>H</strong> action to keep it marked here.</p>
      </div>
    `;
    return;
  }

  notesHighlightsRoot.innerHTML = `
    <div class="notes-highlight-list">
      ${annotationItems
        .slice()
        .sort((a, b) => b.createdAt - a.createdAt)
        .map(
          (item) => `
            <article class="notes-highlight-item">
              <button
                class="notes-highlight-jump"
                type="button"
                data-highlight-jump="${escapeAttribute(item.id)}"
              >
                <p class="study-concept-source">${escapeHtml(item.sectionTitle || "Highlighted passage")}</p>
                <p class="notes-highlight-text">${escapeHtml(item.text)}</p>
              </button>
              <button
                class="study-remove"
                type="button"
                data-highlight-remove="${escapeAttribute(item.id)}"
                aria-label="Remove saved highlight"
              >
                ×
              </button>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function addPersistentHighlight(selectionMeta) {
  if (!selectionMeta?.sectionId || typeof selectionMeta.start !== "number" || typeof selectionMeta.end !== "number") {
    return false;
  }

  const section = document.getElementById(selectionMeta.sectionId);
  const body = section?.querySelector(".doc-section-body");
  if (!body) return false;

  const start = Math.max(0, Math.min(selectionMeta.start, selectionMeta.end));
  const end = Math.max(selectionMeta.start, selectionMeta.end);
  if (end - start < 1) return false;

  let nextStart = start;
  let nextEnd = end;
  const remaining = [];

  annotationItems.forEach((item) => {
    if (item.sectionId !== selectionMeta.sectionId) {
      remaining.push(item);
      return;
    }

    if (rangesTouchOrOverlap(item.start, item.end, nextStart, nextEnd)) {
      nextStart = Math.min(nextStart, item.start);
      nextEnd = Math.max(nextEnd, item.end);
      return;
    }

    remaining.push(item);
  });

  const plainText = body.textContent || "";
  const text = plainText.slice(nextStart, nextEnd).trim();
  if (!text) return false;

  annotationItems = [
    ...remaining,
    {
      id: `highlight-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      guideId: selectionMeta.guideId || activeGuideId,
      sectionId: selectionMeta.sectionId,
      sectionTitle: selectionMeta.sectionTitle || "Highlighted passage",
      start: nextStart,
      end: nextEnd,
      text,
      createdAt: Date.now(),
    },
  ];

  applyHighlightsForSection(selectionMeta.sectionId);
  saveAnnotations();
  openNotesShell();
  return true;
}

function removePersistentHighlight(highlightId) {
  const removed = annotationItems.find((item) => item.id === highlightId);
  if (!removed) return;

  annotationItems = annotationItems.filter((item) => item.id !== highlightId);
  applyHighlightsForSection(removed.sectionId);
  saveAnnotations();
}

function applyAllPersistentHighlights() {
  const sectionIds = [...new Set(annotationItems.map((item) => item.sectionId))];
  sectionIds.forEach((sectionId) => {
    applyHighlightsForSection(sectionId);
  });
}

function applyHighlightsForSection(sectionId) {
  const section = document.getElementById(sectionId);
  const body = section?.querySelector(".doc-section-body");
  if (!body) return;

  clearPersistentHighlights(body);
  const items = annotationItems
    .filter((item) => item.sectionId === sectionId)
    .slice()
    .sort((a, b) => a.start - b.start);

  items.forEach((item) => {
    applySinglePersistentHighlight(body, item);
  });

  const panel = section.querySelector(".doc-section-panel");
  syncOpenPanelHeight(panel);
}

function clearPersistentHighlights(root) {
  root.querySelectorAll(".doc-persistent-highlight").forEach((highlight) => {
    const fragment = document.createDocumentFragment();
    while (highlight.firstChild) {
      fragment.appendChild(highlight.firstChild);
    }
    highlight.replaceWith(fragment);
  });
  root.normalize();
}

function applySinglePersistentHighlight(root, item) {
  const startPosition = locateTextPosition(root, item.start);
  const endPosition = locateTextPosition(root, item.end);
  if (!startPosition || !endPosition) return;

  const range = document.createRange();
  range.setStart(startPosition.node, startPosition.offset);
  range.setEnd(endPosition.node, endPosition.offset);

  if (range.collapsed || !range.toString().trim()) return;

  const wrapper = document.createElement("mark");
  wrapper.className = "doc-persistent-highlight";
  wrapper.dataset.highlightId = item.id;
  const contents = range.extractContents();
  wrapper.appendChild(contents);
  range.insertNode(wrapper);
}

function locateTextPosition(root, offset) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let currentNode = null;
  let traversed = 0;

  while ((currentNode = walker.nextNode())) {
    const length = currentNode.textContent?.length || 0;
    if (offset <= traversed + length) {
      return {
        node: currentNode,
        offset: Math.max(0, Math.min(length, offset - traversed)),
      };
    }
    traversed += length;
  }

  if (!root.lastChild) return null;
  const fallback = root.lastChild.nodeType === Node.TEXT_NODE ? root.lastChild : walker.currentNode;
  if (!fallback) return null;
  return {
    node: fallback,
    offset: fallback.textContent?.length || 0,
  };
}

function rangesTouchOrOverlap(startA, endA, startB, endB) {
  return Math.max(startA, startB) <= Math.min(endA, endB);
}

function focusPersistentHighlight(highlightId) {
  const item = annotationItems.find((entry) => entry.id === highlightId);
  if (!item) return;

  if (item.guideId && item.guideId !== activeGuideId) {
    setActiveGuide(item.guideId, { preserveScroll: true });
  }

  const section = document.getElementById(item.sectionId);
  if (!section) return;

  revealSection(section, false);
  requestAnimationFrame(() => {
    const target = section.querySelector(`[data-highlight-id="${CSS.escape(item.id)}"]`) || section;
    centerTarget(target);
    if (target.classList.contains("doc-persistent-highlight")) {
      target.classList.add("is-focused");
      window.setTimeout(() => {
        target.classList.remove("is-focused");
      }, 1800);
    }
  });
}

function loadStudyLaterItems() {
  const saved = safeJsonParse(localStorage.getItem(studyLaterKey));
  studyLaterItems = Array.isArray(saved?.items) ? saved.items : [];
  updateStudyConceptsCount();
}

function saveStudyLaterItems() {
  localStorage.setItem(studyLaterKey, JSON.stringify({ items: studyLaterItems }));
  updateStudyConceptsCount();
}

function updateStudyConceptsCount() {
  studyConceptsCount.textContent = String(studyLaterItems.length);
}

function renderStudyLaterSection() {
  studyLaterRoot.innerHTML = `
    <div class="study-concepts-body">
      ${renderStudyLaterBody()}
    </div>
  `;
  updateStudyConceptsCount();
}

function renderStudyLaterBody() {
  if (!studyLaterItems.length) {
    return `
      <div class="study-empty">
        <p><strong>No saved concepts yet.</strong></p>
        <p>Highlight a line in the document and use the <strong>+</strong> action to save it for a separate study round.</p>
      </div>
    `;
  }

  const session = studyLaterSession;
  const current = session?.current || null;
  const listMarkup = `
    <div class="study-concepts-list">
      ${studyLaterItems
        .map(
          (item) => `
            <article class="study-concept-item">
              <div>
                <p class="study-concept-source">${escapeHtml(item.sectionTitle || "Saved concept")}</p>
                <p class="study-concept-text">${escapeHtml(item.text)}</p>
              </div>
              <button
                class="study-remove"
                type="button"
                data-study-remove="${escapeAttribute(item.id)}"
                aria-label="Remove saved concept"
              >
                ×
              </button>
            </article>
          `,
        )
        .join("")}
    </div>
  `;

  if (!session) {
    return `
      <div class="study-toolbar">
        <div>
          <p class="quiz-kicker">Saved highlights</p>
          <h4 class="quiz-title">Build a personal study round</h4>
        </div>
        <button class="quiz-restart" type="button" data-study-start>Study concepts</button>
      </div>
      <p class="study-note">These highlights stay separate from the chapter quizzes and keep your review focused on the exact ideas you marked.</p>
      ${listMarkup}
    `;
  }

  const progressMarkup = `
    <div class="quiz-progress">
      <span>Mastered ${session.mastered}/${session.totalTarget}</span>
      <span>${session.queue.length ? "Study round" : "Round complete"}</span>
    </div>
  `;

  if (session.completed || !current) {
    return `
      <div class="study-toolbar">
        <div>
          <p class="quiz-kicker">Study concepts</p>
          <h4 class="quiz-title">Finished this round</h4>
        </div>
        <div class="study-toolbar-actions">
          <button class="quiz-restart" type="button" data-study-start>Restart</button>
          <button class="quiz-restart" type="button" data-study-clear>Clear all</button>
        </div>
      </div>
      ${progressMarkup}
      <div class="quiz-summary">
        <p><strong>${session.mastered}/${session.totalTarget}</strong> saved concepts answered confidently.</p>
        <p>Restart for another pass through your highlights.</p>
      </div>
      ${listMarkup}
    `;
  }

  const feedbackMarkup = current.currentResult
    ? `
      <div class="quiz-feedback ${current.currentResult.correct ? "is-correct" : "is-incorrect"}">
        <strong>${current.currentResult.correct ? "Nice" : "Keep going"}</strong>
        <p>${escapeHtml(current.currentResult.feedback || "")}</p>
      </div>
      <button class="quiz-next" type="button" data-study-next>
        ${current.currentResult.correct ? "Next concept" : "See it again later"}
      </button>
    `
    : "";

  return `
    <div class="study-toolbar">
      <div>
        <p class="quiz-kicker">Study concepts</p>
        <h4 class="quiz-title">Quiz me on my saved highlights</h4>
      </div>
      <div class="study-toolbar-actions">
        <button class="quiz-restart" type="button" data-study-start>Restart</button>
        <button class="quiz-restart" type="button" data-study-clear>Clear all</button>
      </div>
    </div>
    ${progressMarkup}
    <div class="study-card">
      <p class="study-card-source">${escapeHtml(current.item.sectionTitle || "Saved concept")}</p>
      ${
        current.isLoading
          ? '<p class="study-note">Building a question from your highlight...</p>'
          : `<p class="quiz-prompt">${escapeHtml(current.card?.question || "What key idea should you remember from this highlight?")}</p>
             <form class="quiz-short-form" data-study-form>
               <textarea
                 class="quiz-short-input"
                 name="study-answer"
                 rows="3"
                 placeholder="Type a short answer"
                 ${current.isGrading || current.currentResult ? "disabled" : ""}
               >${escapeHtml(current.lastAnswer || "")}</textarea>
               <button class="quiz-submit" type="submit" ${current.isGrading || current.currentResult ? "disabled" : ""}>
                 ${current.isGrading ? "Checking..." : "Check answer"}
               </button>
             </form>
             ${feedbackMarkup}`
      }
    </div>
    <div class="study-card-footer">
      <p class="study-note">Saved concepts in this round: ${session.totalTarget}</p>
    </div>
  `;
}

function wireStudyLaterSection() {
  studyLaterRoot.addEventListener("click", async (event) => {
    const removeButton = event.target.closest("[data-study-remove]");
    if (removeButton) {
      removeStudyLaterItem(removeButton.getAttribute("data-study-remove"));
      return;
    }

    const startButton = event.target.closest("[data-study-start]");
    if (startButton) {
      await initializeStudyLaterSession();
      return;
    }

    const nextButton = event.target.closest("[data-study-next]");
    if (nextButton) {
      await advanceStudyLaterSession();
      return;
    }

    const clearButton = event.target.closest("[data-study-clear]");
    if (clearButton) {
      clearStudyLaterItems();
    }
  });

  studyLaterRoot.addEventListener("submit", async (event) => {
    const form = event.target.closest("[data-study-form]");
    if (!form) return;
    event.preventDefault();
    await submitStudyLaterAnswer(form);
  });
}

function getStudyLaterSelectionMeta(node) {
  const section = node?.closest?.(".doc-section");
  if (!section) return null;
  return {
    guideId: activeGuideId,
    sectionId: section.id,
    sectionTitle: section.querySelector(".doc-section-title")?.textContent?.trim() || "Saved concept",
  };
}

function getClosestSectionBody(node) {
  if (!node) return null;
  const element = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
  return element?.closest?.(".doc-section-body") || null;
}

function getHighlightBlock(node) {
  if (!node) return null;
  const element = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
  return (
    element?.closest?.(
      "p, li, h4, td, th, figcaption, .formula-inline, .formula-box, .callout",
    ) || null
  );
}

function getSelectionOffsetsInRoot(root, range) {
  const startRange = document.createRange();
  startRange.selectNodeContents(root);
  startRange.setEnd(range.startContainer, range.startOffset);

  const endRange = document.createRange();
  endRange.selectNodeContents(root);
  endRange.setEnd(range.endContainer, range.endOffset);

  return {
    start: startRange.toString().length,
    end: endRange.toString().length,
  };
}

function addStudyLaterItem(text, meta) {
  const trimmed = text.trim();
  if (!trimmed) return false;

  const exists = studyLaterItems.some((item) => normalize(item.text) === normalize(trimmed));
  if (exists) return false;

  studyLaterItems.unshift({
    id: `study-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    text: trimmed,
    guideId: meta?.guideId || activeGuideId,
    sectionId: meta?.sectionId || "",
    sectionTitle: meta?.sectionTitle || "Saved concept",
    createdAt: Date.now(),
  });

  saveStudyLaterItems();
  renderStudyLaterSection();
  openStudyConceptsShell();
  return true;
}

function removeStudyLaterItem(id) {
  studyLaterItems = studyLaterItems.filter((item) => item.id !== id);
  if (studyLaterSession?.queue?.some((item) => item.id === id) || studyLaterSession?.current?.item?.id === id) {
    studyLaterSession = null;
  }
  saveStudyLaterItems();
  renderStudyLaterSection();
}

function clearStudyLaterItems() {
  studyLaterItems = [];
  studyLaterSession = null;
  saveStudyLaterItems();
  renderStudyLaterSection();
}

async function initializeStudyLaterSession() {
  if (!studyLaterItems.length) return;

  studyLaterSession = {
    queue: shuffleArray(studyLaterItems).map((item) => ({ ...item })),
    current: null,
    mastered: 0,
    totalTarget: studyLaterItems.length,
    completed: false,
  };
  renderStudyLaterSection();
  openStudyConceptsShell();
  await prepareCurrentStudyLaterCard();
}

async function prepareCurrentStudyLaterCard() {
  if (!studyLaterSession) return;

  if (!studyLaterSession.queue.length) {
    studyLaterSession.current = null;
    studyLaterSession.completed = true;
    renderStudyLaterSection();
    return;
  }

  const item = studyLaterSession.queue[0];
  studyLaterSession.current = {
    item,
    card: null,
    isLoading: true,
    isGrading: false,
    currentResult: null,
    lastAnswer: "",
  };
  renderStudyLaterSection();

  try {
    const card = await generateStudyLaterCard(item);
    if (!studyLaterSession?.current || studyLaterSession.current.item.id !== item.id) return;
    studyLaterSession.current.card = card;
  } catch (error) {
    if (!studyLaterSession?.current || studyLaterSession.current.item.id !== item.id) return;
    studyLaterSession.current.card = {
      question: "What key idea from this saved highlight should you remember?",
      expected: item.text,
      rubric: "The answer should capture the main physics idea in the saved text.",
    };
    studyLaterSession.current.currentResult = {
      correct: false,
      feedback: error instanceof Error ? error.message : "I could not build the question just now.",
    };
  } finally {
    if (studyLaterSession?.current && studyLaterSession.current.item.id === item.id) {
      studyLaterSession.current.isLoading = false;
      renderStudyLaterSection();
    }
  }
}

async function submitStudyLaterAnswer(form) {
  const current = studyLaterSession?.current;
  if (!studyLaterSession || !current || current.isLoading || current.isGrading || current.currentResult) return;

  const formData = new FormData(form);
  const answer = String(formData.get("study-answer") || "").trim();
  if (!answer) return;

  current.isGrading = true;
  current.lastAnswer = answer;
  renderStudyLaterSection();

  try {
    current.currentResult = await gradeStudyLaterAnswer(current.item, current.card, answer);
  } catch (error) {
    current.currentResult = {
      correct: false,
      feedback:
        error instanceof Error
          ? error.message
          : "I could not grade that answer just now. Try again in a moment.",
    };
  } finally {
    current.isGrading = false;
    renderStudyLaterSection();
  }
}

async function advanceStudyLaterSession() {
  if (!studyLaterSession?.current?.currentResult) return;

  const currentItem = studyLaterSession.queue.shift();
  if (studyLaterSession.current.currentResult.correct) {
    studyLaterSession.mastered += 1;
  } else if (currentItem) {
    studyLaterSession.queue.push({ ...currentItem });
  }

  studyLaterSession.current = null;
  studyLaterSession.completed = studyLaterSession.queue.length === 0;
  renderStudyLaterSection();
  await prepareCurrentStudyLaterCard();
}

function wireSelectionAssist() {
  const refreshSelectionAction = () => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
      hideSelectionAction();
      return;
    }

    const text = selection.toString().trim();
    if (!text || text.length < 3) {
      hideSelectionAction();
      return;
    }

    const range = selection.getRangeAt(0);
    const commonAncestor =
      range.commonAncestorContainer.nodeType === Node.TEXT_NODE
        ? range.commonAncestorContainer.parentElement
        : range.commonAncestorContainer;
    const startBody = getClosestSectionBody(range.startContainer);
    const endBody = getClosestSectionBody(range.endContainer);
    const startBlock = getHighlightBlock(range.startContainer);
    const endBlock = getHighlightBlock(range.endContainer);

    if (
      !commonAncestor ||
      !documentRoot.contains(commonAncestor) ||
      !startBody ||
      !endBody ||
      startBody !== endBody ||
      !startBlock ||
      !endBlock ||
      startBlock !== endBlock
    ) {
      hideSelectionAction();
      return;
    }

    const rect = range.getBoundingClientRect();
    if (!rect.width && !rect.height) {
      hideSelectionAction();
      return;
    }

    selectedDocumentText = text;
    selectedDocumentSource = getStudyLaterSelectionMeta(commonAncestor);
    selectedDocumentSelection = {
      ...selectedDocumentSource,
      ...getSelectionOffsetsInRoot(startBody, range),
      text,
    };
    const stackWidth = 76;
    const stackHeight = 36;
    const preferredLeft = rect.right - stackWidth;
    const preferredTop = rect.top - stackHeight - 10;
    const fallbackTop = rect.bottom + 10;
    const clampedLeft = clamp(preferredLeft, 12, window.innerWidth - stackWidth - 12);
    const clampedTop =
      preferredTop >= 12
        ? preferredTop
        : clamp(fallbackTop, 12, window.innerHeight - stackHeight - 12);

    selectionActions.style.left = `${clampedLeft}px`;
    selectionActions.style.top = `${clampedTop}px`;
    selectionActions.classList.add("is-visible");
    selectionActions.setAttribute("aria-hidden", "false");
  };

  document.addEventListener("selectionchange", () => {
    window.requestAnimationFrame(refreshSelectionAction);
  });

  window.addEventListener("scroll", hideSelectionAction, true);
  window.addEventListener("resize", hideSelectionAction);

  selectionStudyAction.addEventListener("click", () => {
    if (!selectedDocumentText) return;

    addStudyLaterItem(selectedDocumentText, selectedDocumentSource);
    window.getSelection()?.removeAllRanges();
    hideSelectionAction();
  });

  selectionHighlightAction.addEventListener("click", () => {
    if (!selectedDocumentSelection) return;

    addPersistentHighlight(selectedDocumentSelection);
    window.getSelection()?.removeAllRanges();
    hideSelectionAction();
  });
}

function hideSelectionAction() {
  selectionActions.classList.remove("is-visible");
  selectionActions.setAttribute("aria-hidden", "true");
  selectedDocumentText = "";
  selectedDocumentSource = null;
  selectedDocumentSelection = null;
}

function showInDocument(query) {
  const match = findBestSectionForQuery(query);
  if (!match?.section) return false;

  revealSection(match.section, false);
  requestAnimationFrame(() => {
    const highlightTarget = highlightBestSnippet(match.section, query) || match.section;
    centerTarget(highlightTarget);
  });
  condenseChatForDocumentFocus();

  return true;
}

function findBestSectionForQuery(query) {
  const records = getSectionRecords();
  const normalizedQuery = extractSemanticQuery(query);
  const tokens = [...expandQueryTokens(normalizedQuery)].filter((token) => token.length > 1);
  const wantsFormula = /\b(formula|equation|reference|sheet)\b/.test(normalizedQuery);
  const wantsReferenceSheet =
    /\b(reference|sheet|cheat)\b/.test(normalizedQuery) ||
    (/\bequation\b/.test(normalizedQuery) && /\b(sheet|cheat)\b/.test(normalizedQuery));
  const wantsTransverseLongitudinal =
    /\btransverse\b/.test(normalizedQuery) && /\blongitudinal\b/.test(normalizedQuery);
  const wantsWaveSpeed =
    /\bvelocity\b/.test(normalizedQuery) ||
    (/\b(wave speed|speed)\b/.test(normalizedQuery) && /\bwave\b/.test(normalizedQuery));
  const wantsAmbulance = /\bambulance\b|\bsilas\b|\beppie\b/.test(normalizedQuery);
  const wantsDoppler = /\bdoppler\b/.test(normalizedQuery);
  const wantsDirection = /\b(minus sign|plus sign|direction|right moving|left moving)\b/.test(normalizedQuery);
  const wantsInterference =
    /\b(interference|superposition|constructive|destructive|phase chart|phase difference)\b/.test(
      normalizedQuery,
    );
  const wantsLocation = /\b(where|show|open|take|document)\b/.test(normalize(query));

  const ranked = records
    .map((record) => {
      const chapterTitle = normalize(record.chapterTitle);
      const sectionTitle = normalize(record.sectionTitle);
      const sectionHints = (sectionHintMap[record.id] || []).map((hint) => normalize(hint));
      const haystack = normalize(`${record.chapterTitle} ${record.sectionTitle} ${record.text} ${sectionHints.join(" ")}`);
      let score = 0;

      tokens.forEach((token) => {
        if (sectionTitle.includes(token)) score += 5;
        if (chapterTitle.includes(token)) score += 3;
        if (haystack.includes(token)) score += 2;
      });

      if (normalizedQuery.length > 5 && haystack.includes(normalizedQuery)) score += 14;

      sectionHints.forEach((hint) => {
        if (hint && normalizedQuery.includes(hint)) score += 12;
      });

      if (wantsFormula) {
        if (/\b(formula|equation|reference)\b/.test(sectionTitle)) score += 9;
        if (record.text.includes("=")) score += 5;
      }

      if (wantsReferenceSheet) {
        if (record.id === "chapter-12-reference") score += 34;
        if (/\b(reference|sheet|cheat)\b/.test(sectionTitle)) score += 10;
        if (record.id === "chapter-2-equation") score -= 8;
      }

      if (wantsTransverseLongitudinal) {
        if (record.id === "chapter-1-core") score += 26;
        if (record.id === "final-recap-10") score += 10;
        if (/\btransverse\b/.test(haystack)) score += 8;
        if (/\blongitudinal\b/.test(haystack)) score += 8;
        if (/\bperpendicular\b|\bparallel\b/.test(haystack)) score += 5;
      }

      if (wantsWaveSpeed) {
        if (record.id === "chapter-2-symbols") score += 18;
        if (record.id === "chapter-12-reference") score += 14;
        if (/\bwave speed\b/.test(haystack)) score += 12;
        if (/\bv\b|\bspeed\b/.test(haystack)) score += 7;
      }

      if (wantsDoppler) {
        if (record.id === "chapter-5-moving-source") score += 14;
        if (record.id === "chapter-5-full-formula") score += 12;
      }

      if (wantsAmbulance) {
        if (record.id === "chapter-5-worked-example") score += 26;
        if (record.id === "chapter-5-hook") score += 8;
        if (record.id === "chapter-5-moving-source") score += 10;
      }

      if (wantsDirection && record.id === "chapter-2-direction") score += 18;

      if (wantsInterference) {
        if (record.id === "chapter-6-phase-chart") score += 10;
        if (record.id === "chapter-6-conditions") score += 10;
        if (record.id === "chapter-6-superposition") score += 8;
      }

      if (wantsLocation && score > 0) score += 2;

      return { ...record, score };
    })
    .sort((a, b) => b.score - a.score);

  const best = ranked[0];
  if (!best || best.score < 3) return null;
  return best;
}

function getSectionRecords() {
  const studyGuide = getActiveStudyGuide();

  const chapterRecords = studyGuide.chapters.flatMap((chapter) =>
    chapter.sections.map((section) => ({
      id: section.id,
      section: document.getElementById(section.id),
      sectionTitle: section.title,
      chapterTitle: chapter.title,
      text: stripHtml(section.html),
    })),
  );

  const recapRecords = (studyGuide.recap?.sections || []).map((section) => ({
    id: section.id,
    section: document.getElementById(section.id),
    sectionTitle: section.title,
    chapterTitle: studyGuide.recap?.title || "",
    text: stripHtml(section.html),
  }));

  return [...chapterRecords, ...recapRecords].filter((record) => record.section);
}

function highlightBestSnippet(section, query) {
  document.querySelectorAll(".doc-snippet-highlight").forEach((element) => {
    element.classList.remove("doc-snippet-highlight");
  });

  const normalizedQuery = normalize(query);
  const tokens = [...tokenSet(normalizedQuery)].filter((token) => token.length > 2);
  const candidates = [
    ...section.querySelectorAll(
      ".doc-section-body p, .doc-section-body li, .doc-section-body h4, .doc-section-body .formula-inline, .doc-section-body .formula-box, .doc-section-body td",
    ),
  ];

  let best = null;
  let bestScore = 0;

  candidates.forEach((candidate) => {
    const text = normalize(candidate.textContent || "");
    let score = 0;

    if (text.includes(normalizedQuery) && normalizedQuery.length > 8) score += 10;
    tokens.forEach((token) => {
      if (text.includes(token)) score += 2;
    });

    if (score > bestScore) {
      best = candidate;
      bestScore = score;
    }
  });

  if (!best) return null;

  void best.offsetWidth;
  best.classList.add("doc-snippet-highlight");
  window.setTimeout(() => {
    best.classList.remove("doc-snippet-highlight");
  }, 2000);

  return best;
}

function isExplicitShowRequest(question) {
  return (
    /(?:show me in the document|show me where|where does the document say|where does it say|take me to the document|open the section|open that section|open it|take me there|go to that part|show that part)/i.test(
      question,
    ) || /^(?:open|show|go to|take me to)\b/i.test(question.trim())
  );
}

function shouldOfferShowInDocument(question) {
  return /^how\b/i.test(question.trim()) || /\bhow do i\b/i.test(question) || /\bhow do you\b/i.test(question);
}

function isAffirmative(question) {
  return /^(yes|yeah|yep|sure|ok|okay|please do|show me)$/i.test(question.trim());
}

function stripHtml(html) {
  const temp = document.createElement("div");
  temp.innerHTML = html;
  return temp.textContent || temp.innerText || "";
}

function saveSettings() {
  if (!chatSettingsState) {
    chatSettingsState = normalizeChatSettings(null);
  }

  persistProviderInputs(chatSettingsState.provider);
  chatSettingsState.features = {
    webLookup: false,
    imageSearch: false,
  };
  localStorage.setItem(
    settingsKey,
    JSON.stringify(chatSettingsState),
  );
}

async function requestTutorAnswer(question) {
  saveSettings();

  const { provider, model, apiKey } = getActiveProviderConfig();
  const context = buildContext(question);
  const responseMode = getResponseMode();
  const features = getFeatureSettings();
  const forceBrowserSearch = features.webLookup && shouldForceBrowserSearch(question);
  const internetSupport = await fetchInternetSupport(question, {
    includeWebNotes: features.webLookup && provider !== "groq",
    includeImages: features.imageSearch && wantsInternetImages(question),
  });

  const systemPrompt = `
You are a physics tutor inside a study website.
Answer naturally in clear English.
Use the site notes below as optional reference, not as strict instructions.
If the notes seem incomplete, ambiguous, or wrong, say so plainly and give the corrected explanation.
If outside web material is available and useful, you may use it, but do not invent sources.
Keep the answer ${responseMode === "concise" ? "concise and direct" : "clear and thorough"}.
`.trim();

  const userPrompt = `
Question:
${question}

Site notes that may be relevant:
${context}

${internetSupport.webContext ? `Live web notes:\n${internetSupport.webContext}` : ""}
`.trim();

  const completion = await callChatModel({
    provider,
    model,
    apiKey,
    temperature: 0.4,
    enableBrowserSearch: provider === "groq" && features.webLookup,
    browserSearchRequired: provider === "groq" && forceBrowserSearch,
    returnMeta: true,
    messages: [
      { role: "system", content: systemPrompt },
      ...chatState.messages.slice(-6),
      { role: "user", content: userPrompt },
    ],
  });
  if (!completion.content) {
    throw new Error("The model returned an empty response.");
  }

  return {
    text: completion.content,
    sources: dedupeSources([...(completion.sources || []), ...(internetSupport.sources || [])]),
    images: internetSupport.images || [],
  };
}

function buildContext(question) {
  const normalizedQuestion = normalize(question);
  const queryTokens = tokenSet(normalizedQuestion);
  const activeGuide = getActiveStudyGuide();
  const sources = [
    ...activeGuide.chapters.map((chapter) => ({
      id: chapter.id,
      title: chapter.title,
      text: chapter.plainText,
    })),
    ...(activeGuide.recap
      ? [
          {
            id: activeGuide.recap.id,
            title: activeGuide.recap.title,
            text: activeGuide.recap.plainText,
          },
        ]
      : []),
  ];

  const ranked = sources
    .map((source) => {
      const haystack = normalize(`${source.title} ${source.text}`);
      let score = 0;

      queryTokens.forEach((token) => {
        if (token.length < 3) return;
        if (haystack.includes(token)) score += 2;
        if (normalize(source.title).includes(token)) score += 3;
      });

      return { source, score };
    })
    .sort((a, b) => b.score - a.score);

  return ranked
    .slice(0, 3)
    .map(({ source }) => `[${source.title}]\n${source.text}`)
    .join("\n\n");
}

async function callChatModel({
  provider,
  model,
  apiKey,
  messages,
  temperature = 0.4,
  enableBrowserSearch = false,
  browserSearchRequired = false,
  returnMeta = false,
}) {
  const payload = {
    model,
    messages,
    temperature,
  };

  if (provider === "groq") {
    if (/^openai\/gpt-oss-/i.test(model)) {
      payload.reasoning_effort = browserSearchRequired ? "low" : "medium";
    }

    if (enableBrowserSearch && /^openai\/gpt-oss-/i.test(model)) {
      payload.tools = [{ type: "browser_search" }];
      if (browserSearchRequired) {
        payload.tool_choice = "required";
      }
    }
  }

  const requestConfig =
    provider === "groq"
      ? {
          url: "https://api.groq.com/openai/v1/chat/completions",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      : {
          url: "https://openrouter.ai/api/v1/chat/completions",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
            "HTTP-Referer": window.location.href,
            "X-Title": "Waves Study Guide",
          },
        };

  const response = await fetch(requestConfig.url, {
    method: "POST",
    headers: requestConfig.headers,
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message =
      data?.error?.message ||
      data?.message ||
      `Request failed with status ${response.status}.`;
    throw new Error(message);
  }

  const content = data?.choices?.[0]?.message?.content || "";
  if (!returnMeta) {
    return content;
  }

  return {
    content,
    raw: data,
    sources: extractGroqSources(data),
  };
}

async function fetchInternetSupport(question, { includeWebNotes = false, includeImages = false } = {}) {
  if (!includeWebNotes && !includeImages) {
    return {
      webContext: "",
      sources: [],
      images: [],
    };
  }

  try {
    const pages = await fetchWikipediaSummaries(buildInternetSearchQuery(question), includeImages ? 4 : 3);
    const usablePages = pages.filter((page) => page?.extract);
    const bestImagePage = includeImages ? pickBestImagePage(question, usablePages) : null;

    return {
      webContext: includeWebNotes
        ? usablePages
            .slice(0, 3)
            .map(
              (page) =>
                `[${page.title}] ${page.extract}${page.timestamp ? ` (updated ${page.timestamp.slice(0, 10)})` : ""}`,
            )
            .join("\n")
        : "",
      sources: usablePages.slice(0, 3).map((page) => ({
        title: page.title,
        url: page.url,
      })),
      images:
        includeImages && bestImagePage
          ? [
              {
                title: bestImagePage.title,
                src: bestImagePage.imageUrl,
                href: bestImagePage.url,
                source: "Wikipedia",
              },
            ]
          : [],
    };
  } catch {
    return {
      webContext: "",
      sources: [],
      images: [],
    };
  }
}

function pickBestImagePage(question, pages) {
  const candidates = pages.filter((page) => page?.imageUrl);
  if (!candidates.length) {
    return null;
  }

  const queryTokens = [...expandQueryTokens(normalize(question))].filter((token) => token.length > 2);

  return candidates
    .map((page, index) => {
      const title = normalize(page.title || "");
      const extract = normalize(page.extract || "");
      let score = 0;

      queryTokens.forEach((token) => {
        if (title.includes(token)) score += 5;
        if (extract.includes(token)) score += 2;
      });

      score -= index * 0.5;

      return { page, score };
    })
    .sort((a, b) => b.score - a.score)[0]?.page || null;
}

async function fetchWikipediaSummaries(query, limit = 3) {
  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(
      query,
    )}&utf8=1&format=json&origin=*`,
  );

  if (!response.ok) {
    throw new Error(`Wikipedia search failed with status ${response.status}.`);
  }

  const data = await response.json();
  const titles = (data?.query?.search || [])
    .map((result) => result?.title)
    .filter(Boolean)
    .slice(0, limit);

  const summaries = await Promise.all(
    titles.map(async (title) => {
      const summaryResponse = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title.replaceAll(" ", "_"))}`,
      );
      if (!summaryResponse.ok) return null;
      const summary = await summaryResponse.json();
      return {
        title: summary?.title || title,
        extract: summary?.extract || "",
        url: summary?.content_urls?.desktop?.page || "",
        imageUrl: summary?.originalimage?.source || summary?.thumbnail?.source || "",
        timestamp: summary?.timestamp || "",
      };
    }),
  );

  return summaries.filter(Boolean);
}

function buildInternetSearchQuery(question) {
  const semantic = extractSemanticQuery(question);
  const normalized = semantic || normalize(question);
  const rawTerms = normalized
    .split(/\s+/)
    .filter(Boolean)
    .filter((token) => token.length > 2)
    .slice(0, 8);
  const base = rawTerms.join(" ").trim();
  if (!base) return "physics waves";
  if (/\b(physics|wave|waves|doppler|interference|diffraction|beat|beats)\b/.test(base)) {
    return base;
  }
  return `${base} physics`;
}

function shouldForceBrowserSearch(question) {
  return /\b(latest|current|today|recent|news|internet|online|web|browse|look up|lookup|search|sources?|citations?)\b/i.test(
    question,
  );
}

function wantsInternetImages(question) {
  return /\b(image|images|picture|pictures|photo|photos|diagram|diagrams|visual|visuals|show me a picture|show me an image)\b/i.test(
    question,
  );
}

function extractGroqSources(data) {
  const tools = data?.choices?.[0]?.message?.executed_tools;
  if (!Array.isArray(tools)) return [];

  return dedupeSources(
    tools.flatMap((tool) => {
      const searchResults = tool?.search_results?.results;
      if (!Array.isArray(searchResults)) return [];
      return searchResults
        .map((result) => ({
          title: result?.title || result?.url || "Source",
          url: result?.url || "",
        }))
        .filter((result) => result.url);
    }),
  );
}

function dedupeSources(sources) {
  const seen = new Set();
  return sources.filter((source) => {
    if (!source?.url) return false;
    if (seen.has(source.url)) return false;
    seen.add(source.url);
    return true;
  });
}

function wireQuizSections() {
  document.querySelectorAll("[data-quiz-root]").forEach((root) => {
    const chapterId = root.getAttribute("data-quiz-root");
    if (!chapterId) return;

    initializeQuiz(chapterId);

    root.addEventListener("click", async (event) => {
      const restartButton = event.target.closest("[data-quiz-restart]");
      if (restartButton) {
        initializeQuiz(chapterId);
        return;
      }

      const nextButton = event.target.closest("[data-quiz-next]");
      if (nextButton) {
        advanceQuizQuestion(chapterId);
        return;
      }

      const choiceButton = event.target.closest("[data-quiz-choice]");
      if (!choiceButton) return;

      const state = quizStates.get(chapterId);
      const question = state?.queue?.[0];
      if (!state || !question || question.type !== "mc" || state.isGrading || state.currentResult) return;

      const selectedIndex = Number(choiceButton.getAttribute("data-quiz-choice"));
      state.attempts += 1;
      state.currentResult = {
        correct: selectedIndex === question.answer,
        selectedIndex,
        feedback: question.explanation,
      };
      renderQuiz(chapterId);
    });

    root.addEventListener("submit", async (event) => {
      const form = event.target.closest("[data-quiz-form]");
      if (!form) return;
      event.preventDefault();

      const state = quizStates.get(chapterId);
      const question = state?.queue?.[0];
      if (!state || !question || question.type !== "short" || state.isGrading || state.currentResult) return;

      const formData = new FormData(form);
      const answer = String(formData.get("quiz-answer") || "").trim();
      if (!answer) return;

      state.isGrading = true;
      state.lastShortAnswer = answer;
      renderQuiz(chapterId);

      try {
        state.attempts += 1;
        state.currentResult = await gradeShortQuizAnswer(chapterId, question, answer);
      } catch (error) {
        state.currentResult = {
          correct: false,
          feedback:
            error instanceof Error
              ? error.message
              : "I could not grade that answer just now. Try again in a moment.",
          isError: true,
        };
      } finally {
        state.isGrading = false;
        renderQuiz(chapterId);
      }
    });
  });
}

function initializeQuiz(chapterId) {
  const bank = getQuizBank(chapterId);
  const selected = selectQuizQuestions(chapterId, bank);
  quizStates.set(chapterId, {
    chapterId,
    totalTarget: selected.length,
    queue: selected,
    attempts: 0,
    mastered: 0,
    currentResult: null,
    lastShortAnswer: "",
    isGrading: false,
    completed: selected.length === 0,
  });
  renderQuiz(chapterId);
}

function getUnitQuizConfig(quizId) {
  return getActiveUnitQuizConfigs().find((quiz) => quiz.id === quizId) || null;
}

function getQuizBank(quizId) {
  if (QUIZ_BANK[quizId]) {
    return QUIZ_BANK[quizId].map((question) => ({ ...question, sourceChapterId: quizId }));
  }

  const unitQuiz = getUnitQuizConfig(quizId);
  if (!unitQuiz) return [];

  return unitQuiz.chapterIds.flatMap((chapterId) =>
    (QUIZ_BANK[chapterId] || []).map((question) => ({
      ...question,
      sourceChapterId: chapterId,
    })),
  );
}

function selectQuizQuestions(chapterId, bank) {
  const targetCount = getQuizTargetCount(chapterId, bank);
  const unitQuiz = getUnitQuizConfig(chapterId);

  if (unitQuiz) {
    return selectUnitQuizQuestions(unitQuiz, bank, targetCount);
  }

  const mcQuestions = shuffleArray(bank.filter((question) => question.type === "mc"));
  const shortQuestions = shuffleArray(bank.filter((question) => question.type === "short"));
  const selected = [];

  const preferredShortCount =
    targetCount >= 7 ? Math.min(2, shortQuestions.length) : targetCount >= 5 ? Math.min(1, shortQuestions.length) : 0;
  const preferredMcCount = Math.min(
    mcQuestions.length,
    Math.max(targetCount - preferredShortCount, Math.ceil(targetCount * 0.65)),
  );

  selected.push(...mcQuestions.slice(0, preferredMcCount));
  selected.push(...shortQuestions.slice(0, preferredShortCount));

  const leftovers = shuffleArray(bank.filter((question) => !selected.some((picked) => picked.id === question.id)));

  while (selected.length < targetCount && leftovers.length) {
    selected.push(leftovers.pop());
  }

  return shuffleArray(selected).map((question) => ({ ...question }));
}

function selectUnitQuizQuestions(unitQuiz, bank, targetCount) {
  const selected = [];
  const selectedIds = new Set();
  const chapterPools = new Map();

  unitQuiz.chapterIds.forEach((chapterId) => {
    chapterPools.set(
      chapterId,
      shuffleArray(bank.filter((question) => question.sourceChapterId === chapterId)),
    );
  });

  unitQuiz.chapterIds.forEach((chapterId) => {
    if (selected.length >= targetCount) return;
    const pool = chapterPools.get(chapterId) || [];
    const preferred =
      pool.find((question) => question.type === "mc" && !selectedIds.has(question.id)) ||
      pool.find((question) => !selectedIds.has(question.id));

    if (!preferred) return;
    selected.push(preferred);
    selectedIds.add(preferred.id);
  });

  const leftovers = shuffleArray(bank.filter((question) => !selectedIds.has(question.id)));
  while (selected.length < targetCount && leftovers.length) {
    const next = leftovers.pop();
    if (!next) break;
    selected.push(next);
  }

  return shuffleArray(selected).map((question) => ({ ...question }));
}

function getQuizTargetCount(chapterId, bank) {
  if (!bank.length) return 0;

  const unitQuiz = getUnitQuizConfig(chapterId);
  if (unitQuiz) {
    const sectionTotal = unitQuiz.chapterIds.reduce((sum, id) => {
      const chapter = getActiveStudyGuide().chapters.find((entry) => entry.id === id);
      return sum + (chapter?.sections.length || 0);
    }, 0);
    const target = unitQuiz.chapterIds.length + Math.ceil(sectionTotal / 5);
    return clamp(target, Math.min(unitQuiz.chapterIds.length, bank.length), Math.min(bank.length, 24));
  }

  const chapter = getActiveStudyGuide().chapters.find((entry) => entry.id === chapterId);
  if (!chapter) {
    return Math.min(bank.length, 5);
  }

  const sectionCount = chapter.sections.length;
  const contentDensityBonus = chapter.plainText.length > 3200 ? 1 : 0;
  const target = 3 + Math.ceil(sectionCount / 2) + contentDensityBonus;

  return clamp(target, Math.min(4, bank.length), bank.length);
}

function renderQuiz(chapterId) {
  const root = document.querySelector(`[data-quiz-root="${chapterId}"]`);
  const state = quizStates.get(chapterId);
  if (!root || !state) return;

  const current = state.queue[0];
  const quizMeta = getQuizDisplayMeta(chapterId);

  if (state.completed || !current) {
    root.innerHTML = `
      <div class="quiz-toolbar">
        <div>
          <p class="quiz-kicker">${escapeHtml(quizMeta.kicker)}</p>
          <h4 class="quiz-title">${escapeHtml(quizMeta.completeTitle)}</h4>
        </div>
        <button class="quiz-restart" type="button" data-quiz-restart>Restart</button>
      </div>
      <div class="quiz-summary">
        <p><strong>${state.mastered}/${state.totalTarget}</strong> questions mastered.</p>
        <p>${escapeHtml(quizMeta.summaryText)}</p>
      </div>
    `;
    requestAnimationFrame(() => {
      syncOpenPanelHeight(root.closest(".doc-section-panel"));
    });
    return;
  }

  root.innerHTML = `
    <div class="quiz-toolbar">
      <div>
        <p class="quiz-kicker">${escapeHtml(quizMeta.kicker)}</p>
        <h4 class="quiz-title">${escapeHtml(quizMeta.cardTitle)}</h4>
      </div>
      <button class="quiz-restart" type="button" data-quiz-restart>Restart</button>
    </div>
    <div class="quiz-progress">
      <span>Mastered ${state.mastered}/${state.totalTarget}</span>
      <span>${escapeHtml(current.type === "mc" ? "Multiple choice" : "Short response")}</span>
    </div>
    <div class="quiz-card">
      <p class="quiz-prompt">${escapeHtml(current.prompt)}</p>
      ${renderQuizQuestion(chapterId, current, state)}
    </div>
  `;
  requestAnimationFrame(() => {
    syncOpenPanelHeight(root.closest(".doc-section-panel"));
  });
}

function getQuizDisplayMeta(quizId) {
  const unitQuiz = getUnitQuizConfig(quizId);
  if (unitQuiz) {
    return {
      kicker: unitQuiz.kicker,
      cardTitle: unitQuiz.cardTitle,
      completeTitle: unitQuiz.completeTitle,
      summaryText: unitQuiz.summaryText,
    };
  }

  const chapterMatch = quizId.match(/chapter-(\d+)/);
  const chapterLabel = chapterMatch
    ? `Chapter ${chapterMatch[1]}`
    : quizId.replace(/-/g, " ");
  return {
    kicker: `${chapterLabel} quiz`,
    cardTitle: "Quick check",
    completeTitle: "Finished this round",
    summaryText: "Restart to get a fresh mix from this chapter.",
  };
}

function renderQuizQuestion(chapterId, question, state) {
  const feedbackMarkup = state.currentResult
    ? `
      <div class="quiz-feedback ${state.currentResult.correct ? "is-correct" : "is-incorrect"}">
        <strong>${state.currentResult.correct ? "Correct" : "Not quite"}</strong>
        <p>${escapeHtml(state.currentResult.feedback || "")}</p>
      </div>
      <button class="quiz-next" type="button" data-quiz-next>
        ${state.currentResult.correct ? "Next question" : "Try it again later"}
      </button>
    `
    : "";

  if (question.type === "mc") {
    return `
      <div class="quiz-choices">
        ${question.choices
          .map((choice, index) => {
            const isSelected = state.currentResult?.selectedIndex === index;
            const isCorrect = state.currentResult && index === question.answer;
            const statusClass = state.currentResult
              ? isCorrect
                ? "is-correct"
                : isSelected
                  ? "is-incorrect"
                  : "is-muted"
              : "";

            return `
              <button
                class="quiz-choice ${statusClass}"
                type="button"
                data-quiz-choice="${index}"
                ${state.currentResult ? "disabled" : ""}
              >
                ${escapeHtml(choice)}
              </button>
            `;
          })
          .join("")}
      </div>
      ${feedbackMarkup}
    `;
  }

  return `
    <form class="quiz-short-form" data-quiz-form>
      <textarea
        class="quiz-short-input"
        name="quiz-answer"
        rows="3"
        placeholder="Type a very short answer"
        ${state.currentResult ? "disabled" : ""}
      >${escapeHtml(state.lastShortAnswer || "")}</textarea>
      <button class="quiz-submit" type="submit" ${state.isGrading || state.currentResult ? "disabled" : ""}>
        ${state.isGrading ? "Checking..." : "Check answer"}
      </button>
    </form>
    ${feedbackMarkup}
  `;
}

function advanceQuizQuestion(chapterId) {
  const state = quizStates.get(chapterId);
  if (!state?.queue?.length || !state.currentResult) return;

  const current = state.queue.shift();
  if (state.currentResult.correct) {
    state.mastered += 1;
  } else if (current) {
    state.queue.push({ ...current });
  }

  state.currentResult = null;
  state.lastShortAnswer = "";
  state.completed = state.queue.length === 0;
  renderQuiz(chapterId);
}

function syncOpenPanelHeight(panel) {
  if (!panel || !panel.closest(".doc-section.is-open")) return;
  panel.style.maxHeight = "none";
  const nextHeight = panel.scrollHeight;
  panel.style.maxHeight = `${nextHeight}px`;
}

function gradeRequiredConceptAnswer(question, answer) {
  if (!Array.isArray(question?.requiredConcepts) || !question.requiredConcepts.length) {
    return null;
  }

  const normalizedAnswer = normalize(answer);
  const missing = question.requiredConcepts.filter((concept) => {
    return !concept.terms.some((term) => normalizedAnswer.includes(normalize(term)));
  });

  if (!missing.length) {
    return {
      correct: true,
      feedback: `Nice. You included the full Chapter 2 source-set list: ${question.requiredConcepts
        .map((concept) => concept.label)
        .join(", ")}.`,
    };
  }

  return {
    correct: false,
    feedback: `You're close, but this one needs the full list from the source-vs-medium table. Missing: ${missing
      .map((concept) => concept.label)
      .join(", ")}.`,
  };
}

async function gradeShortQuizAnswer(chapterId, question, answer) {
  const structuredResult = gradeRequiredConceptAnswer(question, answer);
  if (structuredResult) {
    return structuredResult;
  }

  saveSettings();
  const { provider, model, apiKey } = getActiveProviderConfig();
  if (!apiKey) {
    throw new Error("Quiz grading is not configured right now.");
  }

  const content = await callChatModel({
    provider,
    model,
    apiKey,
    temperature: 0,
    messages: [
      {
        role: "system",
        content:
          "You grade short physics quiz answers. Return strict JSON only in the form {\"correct\":true|false,\"feedback\":\"...\"}. Be lenient about wording, but only mark correct if the physics idea matches.",
      },
      {
        role: "user",
        content: `
Chapter: ${chapterId}
Question: ${question.prompt}
Expected answer: ${question.expected}
Grading rubric: ${question.rubric}
Student answer: ${answer}
        `.trim(),
      },
    ],
  });

  const parsed = parseJsonResponse(content);
  return {
    correct: Boolean(parsed?.correct),
    feedback:
      parsed?.feedback ||
      (parsed?.correct
        ? "That matches the key idea from this chapter."
        : `Look for this idea: ${question.expected}`),
  };
}

async function generateStudyLaterCard(item) {
  saveSettings();
  const { provider, model, apiKey } = getActiveProviderConfig();
  if (!apiKey) {
    throw new Error("Question generation is not configured right now.");
  }

  const content = await callChatModel({
    provider,
    model,
    apiKey,
    temperature: 0.4,
    messages: [
      {
        role: "system",
        content:
          "You create short study questions from highlighted physics notes. Return strict JSON only in the form {\"question\":\"...\",\"expected\":\"...\",\"rubric\":\"...\"}. Ask a concise free-response question that checks understanding, not memorized wording.",
      },
      {
        role: "user",
        content: `
Section: ${item.sectionTitle}
Saved highlight:
${item.text}
        `.trim(),
      },
    ],
  });

  const parsed = parseJsonResponse(content);
  if (!parsed?.question) {
    throw new Error("I could not turn that highlight into a study question.");
  }

  return {
    question: parsed.question,
    expected: parsed.expected || item.text,
    rubric: parsed.rubric || "The answer should capture the main physics idea in the saved highlight.",
  };
}

async function gradeStudyLaterAnswer(item, card, answer) {
  saveSettings();
  const { provider, model, apiKey } = getActiveProviderConfig();
  if (!apiKey) {
    throw new Error("Study grading is not configured right now.");
  }

  const content = await callChatModel({
    provider,
    model,
    apiKey,
    temperature: 0,
    messages: [
      {
        role: "system",
        content:
          "You grade short physics study answers. Return strict JSON only in the form {\"correct\":true|false,\"feedback\":\"...\"}. Be encouraging, concise, and judge the idea rather than exact wording.",
      },
      {
        role: "user",
        content: `
Section: ${item.sectionTitle}
Saved highlight:
${item.text}

Question:
${card?.question || "What key idea from this saved highlight should you remember?"}

Expected idea:
${card?.expected || item.text}

Rubric:
${card?.rubric || "The answer should capture the main physics idea in the saved highlight."}

Student answer:
${answer}
        `.trim(),
      },
    ],
  });

  const parsed = parseJsonResponse(content);
  return {
    correct: Boolean(parsed?.correct),
    feedback:
      parsed?.feedback ||
      (parsed?.correct
        ? "That captures the saved concept well."
        : `Aim for the main idea here: ${card?.expected || item.text}`),
  };
}

function parseJsonResponse(content) {
  try {
    return JSON.parse(content);
  } catch {
    const match = content.match(/\{[\s\S]*\}/);
    if (!match) return null;
    try {
      return JSON.parse(match[0]);
    } catch {
      return null;
    }
  }
}

function shuffleArray(items) {
  const array = [...items];
  for (let index = array.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[swapIndex]] = [array[swapIndex], array[index]];
  }
  return array;
}

function addMessage(role, text, extraClass = "", options = {}) {
  const element = document.createElement("article");
  const messageId = `message-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  element.className = `message message-${role}${extraClass ? ` ${extraClass}` : ""}`;
  element.dataset.messageId = messageId;
  element.innerHTML = renderMessageMarkup(text, options);
  messagesRoot.appendChild(element);
  renderMathInNode(element);
  messagesRoot.scrollTop = messagesRoot.scrollHeight;
  return messageId;
}

function updateMessage(messageId, text, className, options = {}) {
  const message = [...messagesRoot.querySelectorAll(".message")].find(
    (item) => item.dataset.messageId === messageId,
  );
  if (!message) return;

  message.className = `message ${className}`;
  message.innerHTML = renderMessageMarkup(text, options);
  renderMathInNode(message);
  messagesRoot.scrollTop = messagesRoot.scrollHeight;
}

function renderMessageMarkup(text, options = {}) {
  const sourcesMarkup = (options.sources || []).length
    ? `
      <div class="message-sources">
        <p class="message-meta-label">Sources</p>
        <div class="message-source-list">
          ${options.sources
            .map(
              (source) => `
                <a
                  class="message-source-link"
                  href="${escapeAttribute(source.url)}"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  ${escapeHtml(source.title || source.url)}
                </a>
              `,
            )
            .join("")}
        </div>
      </div>
    `
    : "";

  const imagesMarkup = (options.images || []).length
    ? `
      <div class="message-image-grid">
        ${options.images
          .map(
            (image) => `
              <a
                class="message-image-card"
                href="${escapeAttribute(image.href || image.src)}"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src="${escapeAttribute(image.src)}" alt="${escapeAttribute(image.title || "Reference image")}" />
                <span>${escapeHtml(image.title || image.source || "Reference image")}</span>
              </a>
            `,
          )
          .join("")}
      </div>
    `
    : "";

  return `
    <div class="message-text"><p>${formatMessage(text)}</p></div>
    ${sourcesMarkup}
    ${imagesMarkup}
  `;
}

function formatMessage(text) {
  return escapeHtml(text)
    .replace(/\n{2,}/g, "</p><p>")
    .replace(/\n/g, "<br />");
}

function renderMathInNode(node) {
  if (!node || typeof window.renderMathInElement !== "function") return;

  window.renderMathInElement(node, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "\\[", right: "\\]", display: true },
      { left: "\\(", right: "\\)", display: false },
      { left: "$", right: "$", display: false },
    ],
    throwOnError: false,
    strict: "ignore",
  });
}

function openChat() {
  chatShell.classList.add("is-open");
  chatShell.setAttribute("aria-hidden", "false");
  chatBubble.setAttribute("aria-expanded", "true");
  setChatLayout({
    left:
      chatShell.offsetLeft ||
      window.innerWidth - (chatShell.offsetWidth || chatCondensedWidth) - chatViewportInset,
    top:
      chatShell.offsetTop ||
      window.innerHeight - (chatShell.offsetHeight || chatCondensedHeight) - chatViewportInset,
    width: chatShell.offsetWidth || chatCondensedWidth,
    height: chatShell.offsetHeight || chatCondensedHeight,
  });
}

function closeChat() {
  chatShell.classList.remove("is-open");
  chatShell.setAttribute("aria-hidden", "true");
  chatBubble.setAttribute("aria-expanded", "false");
}

function applySavedChatLayout() {
  const saved = safeJsonParse(localStorage.getItem(chatLayoutKey));
  const defaultLayout = {
    width: Math.min(480, window.innerWidth - chatViewportInset * 2),
    height: Math.min(720, window.innerHeight - chatViewportInset * 2),
    left: Math.max(
      chatViewportInset,
      window.innerWidth - Math.min(480, window.innerWidth - chatViewportInset * 2) - 18,
    ),
    top: Math.max(
      chatViewportInset,
      window.innerHeight - Math.min(720, window.innerHeight - chatViewportInset * 2) - 24,
    ),
  };

  const layout = saved || defaultLayout;
  setChatLayout(layout);
  chatShell.classList.toggle("is-condensed", layout.width <= chatCondensedWidth + 8);
}

function wireChatDragAndResize() {
  let dragState = null;

  dragHandle.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button")) return;

    dragState = {
      type: "move",
      startX: event.clientX,
      startY: event.clientY,
      startLeft: chatShell.offsetLeft,
      startTop: chatShell.offsetTop,
    };

    startPointerCapture(event);
  });

  resizeHandles.forEach((handle) => {
    handle.addEventListener("pointerdown", (event) => {
      dragState = {
        type: "resize",
        dir: handle.dataset.resize,
        startX: event.clientX,
        startY: event.clientY,
        startLeft: chatShell.offsetLeft,
        startTop: chatShell.offsetTop,
        startWidth: chatShell.offsetWidth,
        startHeight: chatShell.offsetHeight,
      };

      startPointerCapture(event);
    });
  });

  window.addEventListener("pointermove", (event) => {
    if (!dragState) return;

    const dx = event.clientX - dragState.startX;
    const dy = event.clientY - dragState.startY;

    if (dragState.type === "move") {
      setChatLayout({
        left: clamp(
          dragState.startLeft + dx,
          chatViewportInset,
          window.innerWidth - chatShell.offsetWidth - chatViewportInset,
        ),
        top: clamp(
          dragState.startTop + dy,
          chatViewportInset,
          window.innerHeight - chatShell.offsetHeight - chatViewportInset,
        ),
        width: chatShell.offsetWidth,
        height: chatShell.offsetHeight,
      });
      return;
    }

    const minWidth = 320;
    const minHeight = 380;
    let { startLeft, startTop, startWidth, startHeight } = dragState;
    let nextLeft = startLeft;
    let nextTop = startTop;
    let nextWidth = startWidth;
    let nextHeight = startHeight;

    if (dragState.dir.includes("e")) nextWidth = startWidth + dx;
    if (dragState.dir.includes("s")) nextHeight = startHeight + dy;

    if (dragState.dir.includes("w")) {
      nextWidth = startWidth - dx;
      nextLeft = startLeft + dx;
    }

    if (dragState.dir.includes("n")) {
      nextHeight = startHeight - dy;
      nextTop = startTop + dy;
    }

    setChatLayout({
      left: nextLeft,
      top: nextTop,
      width: Math.max(minWidth, nextWidth),
      height: Math.max(minHeight, nextHeight),
    });
  });

  window.addEventListener("pointerup", () => stopDrag());
  window.addEventListener("pointercancel", () => stopDrag());

  window.addEventListener("resize", () => {
    setChatLayout({
      left: chatShell.offsetLeft,
      top: chatShell.offsetTop,
      width: chatShell.offsetWidth,
      height: chatShell.offsetHeight,
    });
  });

  function startPointerCapture(event) {
    openChat();
    document.body.classList.add("is-dragging-chat");
    event.preventDefault();
  }

  function stopDrag() {
    if (!dragState) return;
    dragState = null;
    document.body.classList.remove("is-dragging-chat");
    persistChatLayout();
  }
}

function setChatLayout({ left, top, width, height }) {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const maxWidth = Math.max(260, viewportWidth - chatViewportInset * 2);
  const maxHeight = Math.max(260, viewportHeight - chatViewportInset * 2);
  const resolvedWidth = clamp(width, Math.min(chatMinWidth, maxWidth), maxWidth);
  const resolvedHeight = clamp(height, Math.min(chatMinHeight, maxHeight), maxHeight);
  const minLeft = chatViewportInset;
  const minTop = chatViewportInset;
  const maxLeft = Math.max(minLeft, viewportWidth - resolvedWidth - chatViewportInset);
  const maxTop = Math.max(minTop, viewportHeight - resolvedHeight - chatViewportInset);
  const resolvedLeft = clamp(left, minLeft, maxLeft);
  const resolvedTop = clamp(top, minTop, maxTop);

  chatShell.style.left = `${Math.round(resolvedLeft)}px`;
  chatShell.style.top = `${Math.round(resolvedTop)}px`;
  chatShell.style.width = `${Math.round(resolvedWidth)}px`;
  chatShell.style.height = `${Math.round(resolvedHeight)}px`;
  chatShell.classList.toggle("is-condensed", resolvedWidth <= chatCondensedWidth + 8);
}

function persistChatLayout() {
  localStorage.setItem(
    chatLayoutKey,
    JSON.stringify({
      left: chatShell.offsetLeft,
      top: chatShell.offsetTop,
      width: chatShell.offsetWidth,
      height: chatShell.offsetHeight,
    }),
  );
}

function condenseChatForDocumentFocus() {
  const width = Math.min(chatCondensedWidth, window.innerWidth - chatViewportInset * 2);
  const height = Math.min(
    Math.max(chatShell.offsetHeight || chatCondensedHeight, 440),
    window.innerHeight - chatViewportInset * 2,
  );

  chatShell.classList.add("is-condensed");
  setChatLayout({
    left: window.innerWidth - width - chatViewportInset,
    top: Math.min(chatShell.offsetTop || chatViewportInset, window.innerHeight - height - chatViewportInset),
    width,
    height,
  });
  persistChatLayout();
}

function resolveDocumentNavigationQuery(question) {
  if (!isExplicitShowRequest(question)) return null;

  const semanticQuery = extractSemanticQuery(question);
  const semanticTokens = [...tokenSet(semanticQuery)].filter((token) => token.length > 2);
  if (semanticTokens.length >= 2) {
    lastStudyTopicQuery = semanticQuery;
    return semanticQuery;
  }

  return lastStudyTopicQuery || pendingShowDocQuery || null;
}

function isGenericDocumentPrompt(question) {
  return Boolean(resolveDocumentNavigationQuery(question)) || isAffirmative(question);
}

function shouldAnswerAlongsideNavigation(question) {
  return /\b(explain|difference|compare|what is|what are|why|how|walk me through|teach me|help me understand)\b/i.test(
    question,
  );
}

function normalize(value) {
  return value
    .toLowerCase()
    .replaceAll("cheet", "cheat")
    .replaceAll("eqation", "equation")
    .replaceAll("eqaution", "equation")
    .replaceAll("λ", " lambda ")
    .replaceAll("δ", " delta ")
    .replaceAll("Δ", " delta ")
    .replaceAll("φ", " phi ")
    .replaceAll("Φ", " phi ")
    .replaceAll("π", " pi ")
    .replaceAll("±", " plusminus ")
    .replaceAll("∓", " minusplus ")
    .replaceAll("×", " x ")
    .replaceAll("∝", " proportional ")
    .replaceAll("√", " sqrt ")
    .replaceAll("≈", " approx ")
    .replaceAll("₀", "0")
    .replaceAll("₁", "1")
    .replaceAll("₂", "2")
    .replaceAll("₃", "3")
    .replaceAll("⁰", "0")
    .replaceAll("¹", "1")
    .replaceAll("²", "2")
    .replaceAll("³", "3")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractSemanticQuery(value) {
  const normalized = normalize(value);
  return normalized
    .replace(
      /\b(can|could|would|please|show|open|take|me|to|the|in|document|where|does|it|say|this|that|section|part|for|of|a|an)\b/g,
      " ",
    )
    .replace(/\s+/g, " ")
    .trim();
}

function expandQueryTokens(value) {
  const tokens = tokenSet(value);
  const expanded = new Set(tokens);

  if (tokens.has("velocity")) {
    expanded.add("speed");
    expanded.add("wave");
    expanded.add("wave speed");
    expanded.add("v");
  }

  if (tokens.has("formula")) {
    expanded.add("equation");
    expanded.add("reference");
  }

  if (tokens.has("equation")) {
    expanded.add("formula");
    expanded.add("wave equation");
  }

  if (tokens.has("wavelength")) {
    expanded.add("lambda");
  }

  if (tokens.has("lambda")) {
    expanded.add("wavelength");
  }

  if (tokens.has("frequency")) {
    expanded.add("period");
    expanded.add("hz");
  }

  if (tokens.has("delta")) {
    expanded.add("difference");
    expanded.add("change");
  }

  if (tokens.has("phi")) {
    expanded.add("phase");
    expanded.add("phase constant");
  }

  if (tokens.has("pi")) {
    expanded.add("radians");
  }

  if (tokens.has("doppler")) {
    expanded.add("observed");
    expanded.add("source");
    expanded.add("observer");
  }

  if (tokens.has("interference")) {
    expanded.add("constructive");
    expanded.add("destructive");
    expanded.add("phase");
  }

  return expanded;
}

function tokenSet(value) {
  return new Set(value.split(/\s+/).filter(Boolean));
}

function safeJsonParse(value) {
  try {
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

function isNaturallyFocusable(element) {
  if (!element) return false;
  return ["BUTTON", "A", "INPUT", "TEXTAREA", "SELECT"].includes(element.tagName);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
