import { FORMULA_STRIP, STUDY_GUIDE } from "./content.js";

const HARDCODED_GROQ_KEY =
  "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";

const defaultModels = {
  groq: "llama-3.3-70b-versatile",
  openrouter: "meta-llama/llama-3.3-70b-instruct",
};

const formulaStrip = document.querySelector("#formula-strip");
const workspace = document.querySelector("#workspace");
const docSidebar = document.querySelector("#doc-sidebar");
const sidebarCollapse = document.querySelector("#sidebar-collapse");
const outlineNav = document.querySelector("#outline-nav");
const documentRoot = document.querySelector("#document-root");

const chatBubble = document.querySelector("#chat-bubble");
const selectionAction = document.querySelector("#selection-action");
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
const modeButtons = [...document.querySelectorAll("[data-mode]")];
const resizeHandles = [...document.querySelectorAll("[data-resize]")];
const chatTextareaMaxHeight = 160;

const settingsKey = "waves-study-chat-settings";
const chatLayoutKey = "waves-study-chat-layout";
const sidebarStateKey = "waves-study-sidebar-collapsed";
const responseModeKey = "waves-study-response-mode";
const chatState = { messages: [] };
let pendingShowDocQuery = null;
let selectedDocumentText = "";

renderFormulaStrip();
renderOutline();
renderDocument();
loadSettings();
applySavedChatLayout();
loadSidebarState();
loadResponseMode();
wireSectionAccordions();
wireScrollSpy();
wireChatEvents();
wireChatDragAndResize();
wireSelectionAssist();

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
        openExclusiveSection(target, true);
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

function wireSectionAccordions() {
  document.querySelectorAll(".doc-section").forEach((section) => {
    const trigger = section.querySelector(".doc-section-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", () => {
      const isOpen = trigger.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeSection(section);
        return;
      }

      openExclusiveSection(section, false);
    });
  });
}

function wireScrollSpy() {
  const targets = [
    ...STUDY_GUIDE.chapters.flatMap((chapter) => [chapter.id, ...chapter.sections.map((section) => section.id)]),
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

  providerSelect.addEventListener("change", () => {
    if (!modelInput.value || Object.values(defaultModels).includes(modelInput.value)) {
      modelInput.value = defaultModels[providerSelect.value];
    }
    saveSettings();
  });

  modelInput.addEventListener("input", saveSettings);
  apiKeyInput.addEventListener("input", saveSettings);

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

    const apiKey = apiKeyInput.value.trim();
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

    const loadingId = addMessage("assistant", "Thinking through the guide...");

    try {
      const answer = await requestTutorAnswer(question);
      updateMessage(loadingId, answer, "message-assistant");
      chatState.messages.push({ role: "assistant", content: answer });

      if (isExplicitShowRequest(question)) {
        showInDocument(question);
        pendingShowDocQuery = null;
      } else if (shouldOfferShowInDocument(question)) {
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
  });
}

function loadSettings() {
  const saved = safeJsonParse(localStorage.getItem(settingsKey));
  const provider = saved?.provider || "groq";

  providerSelect.value = provider;
  modelInput.value = saved?.model || defaultModels[provider];
  apiKeyInput.value = saved?.apiKey || HARDCODED_GROQ_KEY;
  autoResizeChatInput();
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

function openExclusiveSection(targetSection, shouldCenter) {
  document.querySelectorAll(".doc-section").forEach((section) => {
    if (section === targetSection) {
      openSection(section);
    } else {
      closeSection(section);
    }
  });

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

  trigger.setAttribute("aria-expanded", "true");
  section.classList.add("is-open");
  panel.style.maxHeight = `${panel.scrollHeight}px`;
}

function closeSection(section) {
  const trigger = section.querySelector(".doc-section-trigger");
  const panel = section.querySelector(".doc-section-panel");
  if (!trigger || !panel) return;

  trigger.setAttribute("aria-expanded", "false");
  section.classList.remove("is-open");
  panel.style.maxHeight = `${panel.scrollHeight}px`;
  requestAnimationFrame(() => {
    panel.style.maxHeight = "0px";
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
    selectionAction.style.left = `${Math.min(window.innerWidth - 44, rect.right + 8)}px`;
    selectionAction.style.top = `${Math.max(12, rect.top - 18)}px`;
    selectionAction.classList.add("is-visible");
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
}

function hideSelectionAction() {
  selectionAction.classList.remove("is-visible");
}

function showInDocument(query) {
  const match = findBestSectionForQuery(query);
  if (!match?.section) return false;

  openExclusiveSection(match.section, false);
  requestAnimationFrame(() => {
    const highlightTarget = highlightBestSnippet(match.section, query) || match.section;
    centerTarget(highlightTarget);
  });

  return true;
}

function findBestSectionForQuery(query) {
  const records = getSectionRecords();
  const normalizedQuery = normalize(query);
  const tokens = [...tokenSet(normalizedQuery)].filter((token) => token.length > 2);

  const ranked = records
    .map((record) => {
      const haystack = normalize(`${record.chapterTitle} ${record.sectionTitle} ${record.text}`);
      let score = 0;

      tokens.forEach((token) => {
        if (normalize(record.sectionTitle).includes(token)) score += 5;
        if (normalize(record.chapterTitle).includes(token)) score += 3;
        if (haystack.includes(token)) score += 2;
      });

      if (haystack.includes(normalizedQuery) && normalizedQuery.length > 8) score += 8;
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
      section: document.getElementById(section.id),
      sectionTitle: section.title,
      chapterTitle: chapter.title,
      text: stripHtml(section.html),
    })),
  );

  const recapRecords = STUDY_GUIDE.recap.sections.map((section) => ({
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

  best.classList.add("doc-snippet-highlight");
  window.setTimeout(() => {
    best.classList.remove("doc-snippet-highlight");
  }, 3200);

  return best;
}

function isExplicitShowRequest(question) {
  return /(show me in the document|show me where|where does the document say|where does it say|take me to the document)/i.test(question);
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
  localStorage.setItem(
    settingsKey,
    JSON.stringify({
      provider: providerSelect.value,
      model: modelInput.value.trim() || defaultModels[providerSelect.value],
      apiKey: apiKeyInput.value.trim() || HARDCODED_GROQ_KEY,
    }),
  );
}

async function requestTutorAnswer(question) {
  saveSettings();

  const provider = providerSelect.value;
  const model = modelInput.value.trim() || defaultModels[provider];
  const apiKey = apiKeyInput.value.trim() || HARDCODED_GROQ_KEY;
  const context = buildContext(question);
  const responseMode = getResponseMode();

  const systemPrompt = `
You are a warm physics tutor embedded inside a waves study website.
Teach in clear English with a concept-first style.
Prioritize the supplied study-guide context.
Response mode: ${responseMode}.
If response mode is concise, answer directly and briefly, with minimal extra explanation.
If response mode is explained, go a little deeper, teach the concept clearly, and walk through reasoning when helpful.
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
`.trim();

  const payload = {
    model,
    messages: [
      { role: "system", content: systemPrompt },
      ...chatState.messages.slice(-6),
      { role: "user", content: userPrompt },
    ],
    temperature: 0.4,
  };

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

  const content = data?.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error("The model returned an empty response.");
  }

  return content;
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

function addMessage(role, text, extraClass = "") {
  const element = document.createElement("article");
  const messageId = `message-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  element.className = `message message-${role}${extraClass ? ` ${extraClass}` : ""}`;
  element.dataset.messageId = messageId;
  element.innerHTML = `<p>${formatMessage(text)}</p>`;
  messagesRoot.appendChild(element);
  messagesRoot.scrollTop = messagesRoot.scrollHeight;
  return messageId;
}

function updateMessage(messageId, text, className) {
  const message = [...messagesRoot.querySelectorAll(".message")].find(
    (item) => item.dataset.messageId === messageId,
  );
  if (!message) return;

  message.className = `message ${className}`;
  message.innerHTML = `<p>${formatMessage(text)}</p>`;
  messagesRoot.scrollTop = messagesRoot.scrollHeight;
}

function formatMessage(text) {
  return escapeHtml(text)
    .replace(/\n{2,}/g, "</p><p>")
    .replace(/\n/g, "<br />");
}

function openChat() {
  chatShell.classList.add("is-open");
  chatShell.setAttribute("aria-hidden", "false");
  chatBubble.setAttribute("aria-expanded", "true");
}

function closeChat() {
  chatShell.classList.remove("is-open");
  chatShell.setAttribute("aria-hidden", "true");
  chatBubble.setAttribute("aria-expanded", "false");
}

function applySavedChatLayout() {
  const saved = safeJsonParse(localStorage.getItem(chatLayoutKey));
  const defaultLayout = {
    width: Math.min(480, window.innerWidth - 32),
    height: Math.min(720, window.innerHeight - 32),
    left: Math.max(12, window.innerWidth - Math.min(480, window.innerWidth - 32) - 18),
    top: Math.max(12, window.innerHeight - Math.min(720, window.innerHeight - 32) - 24),
  };

  const layout = saved || defaultLayout;
  setChatLayout(layout);
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
        left: clamp(dragState.startLeft + dx, 0, window.innerWidth - chatShell.offsetWidth),
        top: clamp(dragState.startTop + dy, 0, window.innerHeight - chatShell.offsetHeight),
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

    if (dragState.dir.includes("e")) nextWidth = clamp(startWidth + dx, minWidth, window.innerWidth - startLeft);
    if (dragState.dir.includes("s")) nextHeight = clamp(startHeight + dy, minHeight, window.innerHeight - startTop);

    if (dragState.dir.includes("w")) {
      nextWidth = clamp(startWidth - dx, minWidth, window.innerWidth);
      nextLeft = clamp(startLeft + dx, 0, startLeft + startWidth - minWidth);
    }

    if (dragState.dir.includes("n")) {
      nextHeight = clamp(startHeight - dy, minHeight, window.innerHeight);
      nextTop = clamp(startTop + dy, 0, startTop + startHeight - minHeight);
    }

    setChatLayout({
      left: nextLeft,
      top: nextTop,
      width: nextWidth,
      height: nextHeight,
    });
  });

  window.addEventListener("pointerup", () => stopDrag());
  window.addEventListener("pointercancel", () => stopDrag());

  window.addEventListener("resize", () => {
    const current = {
      left: chatShell.offsetLeft,
      top: chatShell.offsetTop,
      width: Math.min(chatShell.offsetWidth, window.innerWidth - 12),
      height: Math.min(chatShell.offsetHeight, window.innerHeight - 12),
    };

    setChatLayout({
      left: clamp(current.left, 0, Math.max(0, window.innerWidth - current.width)),
      top: clamp(current.top, 0, Math.max(0, window.innerHeight - current.height)),
      width: current.width,
      height: current.height,
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
  chatShell.style.left = `${Math.round(left)}px`;
  chatShell.style.top = `${Math.round(top)}px`;
  chatShell.style.width = `${Math.round(width)}px`;
  chatShell.style.height = `${Math.round(height)}px`;
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

function normalize(value) {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, " ");
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
