import {
  FORMULA_STRIP,
  QUIZ_2_FORMULA_STRIP,
  QUIZ_2_GUIDE,
  QUIZ_BANK,
  STUDY_GUIDE,
} from "./content.js";

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
    chapterIds: STUDY_GUIDE.chapters.filter((chapter) => chapter.id !== "chapter-13").map((chapter) => chapter.id),
  },
  {
    id: "unit-complete-quiz",
    wrapperId: "unit-quizzes",
    sectionTitle: "Entire Unit Quiz - DLs + 8.1-8.6",
    kicker: "Whole unit quiz",
    cardTitle: "Complete unit mastery check",
    completeTitle: "Finished the full-unit round",
    summaryText: "Restart to quiz the entire unit again, including the textbook supplement.",
    chapterIds: STUDY_GUIDE.chapters.map((chapter) => chapter.id),
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
    guide: STUDY_GUIDE,
    quizzesEnabled: true,
    unitQuizConfigs: quiz1UnitQuizConfigs,
  },
  quiz2: {
    id: "quiz2",
    label: "Quiz 2",
    eyebrow: "Physics 7C · Quiz 2",
    title: "Quiz 2 Study Guide",
    heading: "What to study for Quiz 2, in the right order",
    summary:
      "Start with the overview and study order, then work Topic 1 through Topic 4 so the official Quiz 2 material feels like one connected set instead of a pile of packets.",
    sidebarLabel: "Quiz 2 study plan",
    outlineLegend: [
      {
        label: "Study hardest",
        tone: "priority",
        description: "Most repeated and highest-payoff material to drill first.",
      },
      {
        label: "Must know",
        tone: "priority",
        description: "Core rule that unlocks multiple problem types.",
      },
      {
        label: "Checklist",
        tone: "method",
        description: "Step-by-step setup to use when the prompt gets messy.",
      },
      {
        label: "High yield",
        tone: "priority",
        description: "Shows up often enough that it is worth extra reps.",
      },
      {
        label: "Model answer",
        tone: "review",
        description: "A worked pattern that shows how the reasoning should sound.",
      },
      {
        label: "Avoid",
        tone: "trap",
        description: "Common mistakes that flip the answer even with good algebra.",
      },
      {
        label: "Hook",
        tone: "review",
        description: "Real-world intuition that makes the physics easier to picture.",
      },
    ],
    formulaStrip: QUIZ_2_FORMULA_STRIP,
    guide: QUIZ_2_GUIDE,
    quizzesEnabled: false,
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
  return saved?.id === "quiz2" ? "quiz2" : "quiz1";
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
  const nextGuideId = guideId === "quiz2" ? "quiz2" : "quiz1";
  if (nextGuideId === activeGuideId && !options.force) return;

  activeGuideId = nextGuideId;
  localStorage.setItem(activeGuideKey, JSON.stringify({ id: activeGuideId }));
  renderActiveGuide();

  if (!options.preserveScroll) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function renderActiveGuide() {
  renderGuideChrome();
  renderFormulaStrip();
  renderOutline();
  renderDocument();
  wireQuizSections();
  applyAllPersistentHighlights();
  wireScrollSpy();
  renderMathInNode(documentRoot);
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
          ${renderOutlineLabel(studyGuide.recap.title, studyGuide.recap.badge, studyGuide.recap.badgeTone)}
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
  const chapterRecords = STUDY_GUIDE.chapters.flatMap((chapter) =>
    chapter.sections.map((section) => ({
      id: section.id,
      section: document.getElementById(section.id),
      sectionTitle: section.title,
      chapterTitle: chapter.title,
      text: stripHtml(section.html),
    })),
  );

  const recapRecords = STUDY_GUIDE.recap.sections.map((section) => ({
    id: section.id,
    section: document.getElementById(section.id),
    sectionTitle: section.title,
    chapterTitle: STUDY_GUIDE.recap.title,
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
  const sources = [
    ...STUDY_GUIDE.chapters.map((chapter) => ({
      id: chapter.id,
      title: chapter.title,
      text: chapter.plainText,
    })),
    {
      id: STUDY_GUIDE.recap.id,
      title: STUDY_GUIDE.recap.title,
      text: STUDY_GUIDE.recap.plainText,
    },
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

  const chapterLabel = quizId.replace("chapter-", "Chapter ");
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
