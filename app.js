import { FORMULA_STRIP, QUIZ_BANK, STUDY_GUIDE } from "./content.js";

const HARDCODED_GROQ_KEY =
  "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";

const defaultModels = {
  groq: "openai/gpt-oss-120b",
  openrouter: "meta-llama/llama-3.3-70b-instruct",
};

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
const selectionAction = document.querySelector("#selection-action");
const selectionStudyAction = document.querySelector("#selection-study-action");
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
    "master formula",
    "formula reference",
    "formula sheet",
    "all formulas",
    "equation sheet",
    "equation cheat sheet",
    "formula cheat sheet",
    "cheat sheet",
    "reference sheet",
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
const chatLayoutKey = "waves-study-chat-layout";
const sidebarStateKey = "waves-study-sidebar-collapsed";
const responseModeKey = "waves-study-response-mode";
const autoCompactKey = "waves-study-auto-compact";
const studyLaterKey = "waves-study-later-items";
const chatState = { messages: [] };
const quizStates = new Map();
const quizSessionLength = 5;
let pendingShowDocQuery = null;
let selectedDocumentText = "";
let selectedDocumentSource = null;
let lastStudyTopicQuery = "";
let chatSettingsState = null;
let studyLaterItems = [];
let studyLaterSession = null;
let lastOpenedSectionId = "";

renderFormulaStrip();
renderOutline();
loadStudyLaterItems();
renderDocument();
renderStudyLaterSection();
loadSettings();
applySavedChatLayout();
loadSidebarState();
loadResponseMode();
loadAutoCompactState();
wireSectionAccordions();
wireQuizSections();
wireStudyLaterSection();
wireResponsivePanels();
wireScrollSpy();
wireChatEvents();
wireStudyConceptsShell();
wireChatDragAndResize();
wireSelectionAssist();
renderMathInNode(messagesRoot);

function renderFormulaStrip() {
  formulaStrip.innerHTML = FORMULA_STRIP.map(
    (item) => `
      <div class="formula-chip">
        <strong>${escapeHtml(item.label)}</strong>
        <span>${escapeHtml(item.value)}</span>
      </div>
    `,
  ).join("");
}

function renderOutline() {
  const chapterLinks = STUDY_GUIDE.chapters
    .map(
      (chapter) => `
        <li class="outline-item">
          <a class="outline-link outline-link-chapter" href="#${chapter.id}" data-outline-link="${chapter.id}">
            ${escapeHtml(chapter.title)}
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
                    >
                      ${escapeHtml(section.title)}
                    </a>
                  </li>
                `,
              )
              .join("")}
            <li>
              <a
                class="outline-link outline-link-section outline-link-quiz"
                href="#${chapter.id}-quiz"
                data-outline-link="${chapter.id}-quiz"
              >
                Chapter ${escapeHtml(String(Number(chapter.number)))} Quiz
              </a>
            </li>
          </ul>
        </li>
      `,
    )
    .join("");

  const recapLinks = `
    <li class="outline-item">
      <a class="outline-link outline-link-chapter" href="#${STUDY_GUIDE.recap.id}" data-outline-link="${STUDY_GUIDE.recap.id}">
        ${escapeHtml(STUDY_GUIDE.recap.title)}
      </a>
      <ul class="outline-sublist">
        ${STUDY_GUIDE.recap.sections
          .map(
            (section) => `
              <li>
                <a
                  class="outline-link outline-link-section"
                  href="#${section.id}"
                  data-outline-link="${section.id}"
                >
                  ${escapeHtml(section.title)}
                </a>
              </li>
            `,
          )
          .join("")}
      </ul>
    </li>
  `;

  outlineNav.innerHTML = `<ul class="outline-list">${chapterLinks}${recapLinks}</ul>`;

  outlineNav.querySelectorAll("[data-outline-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = link.getAttribute("data-outline-link");
      const target = document.getElementById(targetId);
      if (!target) return;

      if (target.classList.contains("doc-section")) {
        revealSection(target, true);
      } else {
        centerTarget(target);
      }
    });
  });
}

function renderDocument() {
  const chapterMarkup = STUDY_GUIDE.chapters
    .map(
      (chapter) => `
        <section class="doc-chapter" id="${chapter.id}">
          <div class="doc-chapter-head">
            <p class="chapter-eyebrow">Chapter ${chapter.number}</p>
            <h3>${escapeHtml(chapter.title.replace(/^Chapter \d+ - /, ""))}</h3>
          </div>
          <div class="doc-section-stack">
            ${chapter.sections
              .map(
                (section) => `
                  <article class="doc-section" id="${section.id}">
                    <button
                      class="doc-section-trigger"
                      type="button"
                      aria-expanded="false"
                      aria-controls="${section.id}-panel"
                    >
                      <span class="doc-section-title">${escapeHtml(section.title)}</span>
                      <span class="doc-section-chevron" aria-hidden="true">+</span>
                    </button>
                    <div class="doc-section-panel" id="${section.id}-panel">
                      <div class="doc-section-body">
                        ${section.html}
                      </div>
                    </div>
                  </article>
                `,
              )
              .join("")}
            ${renderQuizSection(chapter)}
          </div>
        </section>
      `,
    )
    .join("");

  const recapMarkup = `
    <section class="doc-chapter recap-chapter" id="${STUDY_GUIDE.recap.id}">
      <div class="doc-chapter-head">
        <p class="chapter-eyebrow">Final Recap</p>
        <h3>${escapeHtml(STUDY_GUIDE.recap.title.replace(" - ", " - "))}</h3>
      </div>
      <div class="doc-section-stack">
        ${STUDY_GUIDE.recap.sections
          .map(
            (section) => `
              <article class="doc-section" id="${section.id}">
                <button
                  class="doc-section-trigger"
                  type="button"
                  aria-expanded="false"
                  aria-controls="${section.id}-panel"
                >
                  <span class="doc-section-title">${escapeHtml(section.title)}</span>
                  <span class="doc-section-chevron" aria-hidden="true">+</span>
                </button>
                <div class="doc-section-panel" id="${section.id}-panel">
                  <div class="doc-section-body">
                    ${section.html}
                  </div>
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;

  documentRoot.innerHTML = chapterMarkup + recapMarkup;
}

function renderQuizSection(chapter) {
  return `
    <article class="doc-section doc-quiz-section" id="${chapter.id}-quiz">
      <button
        class="doc-section-trigger"
        type="button"
        aria-expanded="false"
        aria-controls="${chapter.id}-quiz-panel"
      >
        <span class="doc-section-title">Chapter ${escapeHtml(String(Number(chapter.number)))} Quiz</span>
        <span class="doc-section-chevron" aria-hidden="true">+</span>
      </button>
      <div class="doc-section-panel" id="${chapter.id}-quiz-panel">
        <div class="doc-section-body">
          <div class="quiz-shell" data-quiz-root="${chapter.id}"></div>
        </div>
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
  const targets = [
    ...STUDY_GUIDE.chapters.flatMap((chapter) => [
      chapter.id,
      ...chapter.sections.map((section) => section.id),
      `${chapter.id}-quiz`,
    ]),
    STUDY_GUIDE.recap.id,
    ...STUDY_GUIDE.recap.sections.map((section) => section.id),
  ]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      const id = visible.target.id;
      document.querySelectorAll("[data-outline-link]").forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("data-outline-link") === id);
      });
    },
    {
      rootMargin: "-15% 0px -70% 0px",
      threshold: [0.1, 0.35, 0.65],
    },
  );

  targets.forEach((target) => observer.observe(target));
}

function wireChatEvents() {
  sidebarCollapse.addEventListener("click", () => {
    const nextCollapsed = !docSidebar.classList.contains("is-collapsed");
    docSidebar.classList.toggle("is-collapsed", nextCollapsed);
    workspace.classList.toggle("sidebar-collapsed", nextCollapsed);
    sidebarCollapse.setAttribute("aria-expanded", String(!nextCollapsed));
    sidebarCollapse.textContent = nextCollapsed ? "›" : "‹";
    localStorage.setItem(sidebarStateKey, JSON.stringify({ collapsed: nextCollapsed }));
  });

  chatBubble.addEventListener("click", openChat);
  openChatHero.addEventListener("click", openChat);
  chatClose.addEventListener("click", closeChat);

  chatSettingsToggle.addEventListener("click", () => {
    chatSettings.classList.toggle("is-hidden");
  });

  autoCompactToggle.addEventListener("change", () => {
    localStorage.setItem(autoCompactKey, JSON.stringify({ enabled: autoCompactToggle.checked }));
    if (autoCompactToggle.checked) {
      compactToMostRecentSection();
    }
  });

  studyConceptsButton.addEventListener("click", () => {
    toggleStudyConceptsShell();
  });

  providerSelect.addEventListener("change", () => {
    persistProviderInputs(chatSettingsState?.provider || "groq");
    chatSettingsState.provider = providerSelect.value;
    applyProviderSettings(providerSelect.value);
    saveSettings();
  });

  modelInput.addEventListener("input", saveSettings);
  apiKeyInput.addEventListener("input", saveSettings);
  webLookupToggle.addEventListener("change", saveSettings);
  imageSearchToggle.addEventListener("change", saveSettings);

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const mode = button.getAttribute("data-mode");
      setResponseMode(mode);
    });
  });

  chatInput.addEventListener("input", autoResizeChatInput);
  chatInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      chatForm.requestSubmit();
    }
  });

  chatForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const question = chatInput.value.trim();
    if (!question) return;

    const { apiKey } = getActiveProviderConfig();
    if (!apiKey) {
      addMessage("assistant", "Open the gear menu and add an API key first.", "message-error");
      return;
    }

    if (isAffirmative(question) && pendingShowDocQuery) {
      const navigated = showInDocument(pendingShowDocQuery);
      addMessage(
        "assistant",
        navigated
          ? "I opened the most relevant part of the document and highlighted the best matching passage."
          : "I tried to find the closest place in the document, but I could not match it confidently.",
      );
      pendingShowDocQuery = null;
      chatInput.value = "";
      autoResizeChatInput();
      return;
    }

    addMessage("user", question);
    chatState.messages.push({ role: "user", content: question });
    chatInput.value = "";
    autoResizeChatInput();

    const documentQuery = resolveDocumentNavigationQuery(question);
    if (documentQuery) {
      const navigated = showInDocument(documentQuery);
      if (!shouldAnswerAlongsideNavigation(question)) {
        const response = navigated
          ? [
              "1. Opened the best matching section in the study guide.",
              "2. Expanded that section, closed the previous one, and highlighted the most relevant line.",
              "3. If you want, I can also explain that exact part step by step.",
            ].join("\n")
          : [
              "1. I tried to open the best matching place in the document.",
              "2. I could not match that request confidently enough to jump there.",
              "3. Try naming the concept or formula one more time and I will take you to it.",
            ].join("\n");

        addMessage("assistant", response, navigated ? "" : "message-error");
        chatState.messages.push({ role: "assistant", content: response });
        pendingShowDocQuery = null;
        return;
      }

      const loadingId = addMessage(
        "assistant",
        navigated
          ? "Opening the matching section and putting together the explanation..."
          : "I could not confidently open the document section, but I can still explain the concept...",
      );

      try {
        const answer = await requestTutorAnswer(question);
        const response = [
          navigated
            ? "1. Opened the best matching section in the study guide."
            : "1. I could not confidently open the matching section in the document.",
          "2. Explanation:",
          answer.text,
        ].join("\n");
        updateMessage(loadingId, response, "message-assistant", {
          sources: answer.sources,
          images: answer.images,
        });
        chatState.messages.push({ role: "assistant", content: response });
      } catch (error) {
        updateMessage(
          loadingId,
          error instanceof Error ? error.message : "Something went wrong while calling the model.",
          "message-assistant message-error",
        );
      }

      pendingShowDocQuery = null;
      return;
    }

    if (!isGenericDocumentPrompt(question)) {
      lastStudyTopicQuery = question;
    }

    const loadingId = addMessage("assistant", "Thinking through the guide...");

    try {
      const answer = await requestTutorAnswer(question);
      updateMessage(loadingId, answer.text, "message-assistant", {
        sources: answer.sources,
        images: answer.images,
      });
      chatState.messages.push({ role: "assistant", content: answer.text });

      if (shouldOfferShowInDocument(question)) {
        pendingShowDocQuery = question;
        addMessage(
          "assistant",
          "If you want, say `yes` and I will open the most relevant part of the document and highlight it for you.",
        );
      } else {
        pendingShowDocQuery = null;
      }
    } catch (error) {
      updateMessage(
        loadingId,
        error instanceof Error ? error.message : "Something went wrong while calling the model.",
        "message-assistant message-error",
      );
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && chatShell.classList.contains("is-open")) {
      closeChat();
    }
    if (event.key === "Escape" && studyConceptsShell.classList.contains("is-open")) {
      closeStudyConceptsShell();
    }
  });
}

function loadSettings() {
  const saved = safeJsonParse(localStorage.getItem(settingsKey));
  chatSettingsState = normalizeChatSettings(saved);
  providerSelect.value = chatSettingsState.provider;
  applyProviderSettings(chatSettingsState.provider);
  applyFeatureSettings();
  autoResizeChatInput();
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
  const settings = chatSettingsState?.providers?.[provider];
  modelInput.value = settings?.model || defaultModels[provider];
  apiKeyInput.value =
    provider === "groq" ? settings?.apiKey || HARDCODED_GROQ_KEY : settings?.apiKey || "";
  modelInput.placeholder = defaultModels[provider];
  apiKeyInput.placeholder =
    provider === "groq" ? "Groq key stored here" : "Paste your OpenRouter key";
}

function applyFeatureSettings() {
  const features = getFeatureSettings();
  webLookupToggle.checked = features.webLookup;
  imageSearchToggle.checked = features.imageSearch;
}

function getFeatureSettings() {
  return {
    webLookup: chatSettingsState?.features?.webLookup !== false,
    imageSearch: chatSettingsState?.features?.imageSearch !== false,
  };
}

function persistProviderInputs(provider) {
  if (!chatSettingsState?.providers?.[provider]) return;

  chatSettingsState.providers[provider].model = modelInput.value.trim() || defaultModels[provider];
  chatSettingsState.providers[provider].apiKey =
    provider === "groq" ? apiKeyInput.value.trim() || HARDCODED_GROQ_KEY : apiKeyInput.value.trim();
}

function getActiveProviderConfig() {
  const provider = providerSelect.value;
  persistProviderInputs(provider);
  return {
    provider,
    model: chatSettingsState.providers[provider].model || defaultModels[provider],
    apiKey:
      provider === "groq"
        ? chatSettingsState.providers[provider].apiKey || HARDCODED_GROQ_KEY
        : chatSettingsState.providers[provider].apiKey || "",
  };
}

function loadSidebarState() {
  const saved = safeJsonParse(localStorage.getItem(sidebarStateKey));
  const collapsed = Boolean(saved?.collapsed);
  docSidebar.classList.toggle("is-collapsed", collapsed);
  workspace.classList.toggle("sidebar-collapsed", collapsed);
  sidebarCollapse.setAttribute("aria-expanded", String(!collapsed));
  sidebarCollapse.textContent = collapsed ? "›" : "‹";
}

function loadResponseMode() {
  const saved = safeJsonParse(localStorage.getItem(responseModeKey));
  setResponseMode(saved?.mode || "concise");
}

function loadAutoCompactState() {
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
  return autoCompactToggle.checked;
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
        <p>Highlight a line in the document and use the new <strong>+</strong> action to save it for a separate AI study round.</p>
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
      <p class="study-note">These highlights stay separate from the chapter quizzes and let the AI focus only on the exact ideas you marked.</p>
      ${listMarkup}
    `;
  }

  const progressMarkup = `
    <div class="quiz-progress">
      <span>Mastered ${session.mastered}/${session.totalTarget}</span>
      <span>${session.queue.length ? "AI study round" : "Round complete"}</span>
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
        <p>Restart for another AI-led pass through your highlights.</p>
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
    sectionId: section.id,
    sectionTitle: section.querySelector(".doc-section-title")?.textContent?.trim() || "Saved concept",
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

    if (!commonAncestor || !documentRoot.contains(commonAncestor)) {
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
    const top = Math.max(12, rect.top - 18);
    const askLeft = Math.min(window.innerWidth - 78, rect.right + 8);
    const studyLeft = Math.min(window.innerWidth - 44, askLeft + 34);
    selectionAction.style.left = `${askLeft}px`;
    selectionAction.style.top = `${top}px`;
    selectionStudyAction.style.left = `${studyLeft}px`;
    selectionStudyAction.style.top = `${top}px`;
    selectionAction.classList.add("is-visible");
    selectionStudyAction.classList.add("is-visible");
  };

  document.addEventListener("selectionchange", () => {
    window.requestAnimationFrame(refreshSelectionAction);
  });

  window.addEventListener("scroll", hideSelectionAction, true);
  window.addEventListener("resize", hideSelectionAction);

  selectionAction.addEventListener("click", () => {
    if (!selectedDocumentText) return;

    openChat();
    chatInput.value = `Can you explain this passage?\n\n"${selectedDocumentText}"`;
    autoResizeChatInput();
    chatInput.focus();
    hideSelectionAction();
  });

  selectionStudyAction.addEventListener("click", () => {
    if (!selectedDocumentText) return;

    addStudyLaterItem(selectedDocumentText, selectedDocumentSource);
    hideSelectionAction();
  });
}

function hideSelectionAction() {
  selectionAction.classList.remove("is-visible");
  selectionStudyAction.classList.remove("is-visible");
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
        if (record.id === "chapter-7-reference") score += 34;
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
        if (record.id === "chapter-7-reference") score += 14;
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
    webLookup: webLookupToggle.checked,
    imageSearch: imageSearchToggle.checked,
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
You are a warm physics tutor embedded inside a waves study website.
Teach in clear English with a concept-first style.
Prioritize the supplied study-guide context.
If live web browsing or outside web notes are available, use them carefully and clearly prefer the study guide for on-site curriculum questions.
If you rely on outside information, mention that briefly and do not invent sources.
Response mode: ${responseMode}.
Always structure your answer in a student-friendly way with short labeled sections.
If response mode is concise, use:
1. Direct Answer
2. Why It Matters (only if helpful)
If response mode is explained, use:
1. Core Idea
2. Why It Works
3. Memory Tip or Common Mistake
When useful:
- explain intuitively before formula
- point out common mistakes
- walk through steps cleanly
- stay grounded in the guide content first
`.trim();

  const userPrompt = `
Question:
${question}

Relevant study-guide context:
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
      images: includeImages
        ? usablePages
            .filter((page) => page.imageUrl)
            .slice(0, 3)
            .map((page) => ({
              title: page.title,
              src: page.imageUrl,
              href: page.url,
              source: "Wikipedia",
            }))
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
  const bank = QUIZ_BANK[chapterId] || [];
  const selected = selectQuizQuestions(bank);
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

function selectQuizQuestions(bank) {
  const mcQuestions = shuffleArray(bank.filter((question) => question.type === "mc")).slice(0, 3);
  const shortQuestions = shuffleArray(bank.filter((question) => question.type === "short")).slice(0, 2);
  const selected = [...mcQuestions, ...shortQuestions];
  const leftovers = shuffleArray(bank.filter((question) => !selected.some((picked) => picked.id === question.id)));

  while (selected.length < Math.min(quizSessionLength, bank.length) && leftovers.length) {
    selected.push(leftovers.pop());
  }

  return shuffleArray(selected).map((question) => ({ ...question }));
}

function renderQuiz(chapterId) {
  const root = document.querySelector(`[data-quiz-root="${chapterId}"]`);
  const state = quizStates.get(chapterId);
  if (!root || !state) return;

  const current = state.queue[0];
  const chapterLabel = chapterId.replace("chapter-", "Chapter ");

  if (state.completed || !current) {
    root.innerHTML = `
      <div class="quiz-toolbar">
        <div>
          <p class="quiz-kicker">${escapeHtml(chapterLabel)} quiz</p>
          <h4 class="quiz-title">Finished this round</h4>
        </div>
        <button class="quiz-restart" type="button" data-quiz-restart>Restart</button>
      </div>
      <div class="quiz-summary">
        <p><strong>${state.mastered}/${state.totalTarget}</strong> questions mastered.</p>
        <p>Restart to get a fresh mix from this chapter.</p>
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
        <p class="quiz-kicker">${escapeHtml(chapterLabel)} quiz</p>
        <h4 class="quiz-title">Quick check</h4>
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

async function gradeShortQuizAnswer(chapterId, question, answer) {
  saveSettings();
  const { provider, model, apiKey } = getActiveProviderConfig();
  if (!apiKey) {
    throw new Error("Open the gear menu and add an API key for the selected provider first.");
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
    throw new Error("Open the gear menu and add an API key for the selected provider first.");
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
    throw new Error("Open the gear menu and add an API key for the selected provider first.");
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
