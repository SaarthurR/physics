import { FORMULA_STRIP, QUICK_PROMPTS, STUDY_GUIDE } from "./content.js";

const defaultModels = {
  groq: "llama-3.3-70b-versatile",
  openrouter: "meta-llama/llama-3.3-70b-instruct",
};

const chapterNav = document.querySelector("#chapter-nav");
const chaptersRoot = document.querySelector("#chapters");
const recapRoot = document.querySelector("#recap");
const formulaStrip = document.querySelector("#formula-strip");

const chatBubble = document.querySelector("#chat-bubble");
const chatShell = document.querySelector("#chat-shell");
const chatClose = document.querySelector("#chat-close");
const openChatHero = document.querySelector("#open-chat-hero");
const messagesRoot = document.querySelector("#chat-messages");
const chatForm = document.querySelector("#chat-form");
const chatInput = document.querySelector("#chat-input");
const providerSelect = document.querySelector("#provider-select");
const modelInput = document.querySelector("#model-input");
const apiKeyInput = document.querySelector("#api-key-input");
const quickPromptsRoot = document.querySelector("#quick-prompts");

const settingsKey = "waves-study-chat-settings";
const chatState = {
  messages: [],
};

renderFormulaStrip();
renderChapterNav();
renderChapters();
renderRecap();
renderQuickPrompts();
loadSettings();
wireAccordionState();
wireChatEvents();

function renderFormulaStrip() {
  formulaStrip.innerHTML = FORMULA_STRIP.map(
    (item) => `
      <div class="formula-chip">
        <strong>${item.label}</strong>
        <span>${item.value}</span>
      </div>
    `,
  ).join("");
}

function renderChapterNav() {
  chapterNav.innerHTML = STUDY_GUIDE.chapters
    .map(
      (chapter) => `
        <button class="chapter-pill" type="button" data-target="${chapter.id}">
          ${chapter.number} &middot; ${chapter.title}
        </button>
      `,
    )
    .join("");

  chapterNav.querySelectorAll(".chapter-pill").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const card = document.getElementById(targetId);
      if (!card) return;

      const trigger = card.querySelector(".accordion-trigger");
      if (trigger?.getAttribute("aria-expanded") !== "true") {
        toggleAccordion(card, true);
      }

      card.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderChapters() {
  chaptersRoot.innerHTML = STUDY_GUIDE.chapters
    .map(
      (chapter) => `
        <article class="chapter-card" id="${chapter.id}">
          <button
            class="accordion-trigger"
            type="button"
            aria-expanded="false"
            aria-controls="${chapter.id}-panel"
          >
            <span class="chapter-number">${chapter.number}</span>
            <div class="chapter-header">
              <p class="block-label">Chapter ${chapter.number}</p>
              <h3>${chapter.title}</h3>
              <p>${chapter.summary}</p>
              <div class="chapter-tags">
                ${chapter.tags.map((tag) => `<span>${tag}</span>`).join("")}
              </div>
            </div>
            <span class="chevron" aria-hidden="true">+</span>
          </button>

          <div class="accordion-panel" id="${chapter.id}-panel">
            <div class="panel-inner">
              <div class="content-grid">
                ${chapter.sections
                  .map(
                    (section) => `
                      <section class="study-block">
                        <p class="block-label">${section.label}</p>
                        <h4>${section.title}</h4>
                        ${section.html}
                      </section>
                    `,
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderRecap() {
  const { recap } = STUDY_GUIDE;
  recapRoot.innerHTML = `
    <article class="recap-card">
      <p class="section-label">${recap.subtitle}</p>
      <h3>${recap.title}</h3>
      <div class="recap-grid">
        <ol class="recap-list">
          ${recap.list.map((item) => `<li>${item}</li>`).join("")}
        </ol>
        <aside class="recap-note">${recap.note}</aside>
      </div>
    </article>
  `;
}

function renderQuickPrompts() {
  quickPromptsRoot.innerHTML = QUICK_PROMPTS.map(
    (prompt) => `
      <button class="quick-prompt" type="button" data-prompt="${escapeAttribute(prompt)}">
        ${prompt}
      </button>
    `,
  ).join("");

  quickPromptsRoot.querySelectorAll(".quick-prompt").forEach((button) => {
    button.addEventListener("click", () => {
      chatInput.value = button.getAttribute("data-prompt") || "";
      openChat();
      chatInput.focus();
    });
  });
}

function wireAccordionState() {
  document.querySelectorAll(".chapter-card").forEach((card, index) => {
    const trigger = card.querySelector(".accordion-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", () => {
      toggleAccordion(card);
    });

    if (index === 0) {
      toggleAccordion(card, true, true);
    }
  });
}

function toggleAccordion(card, forceOpen, skipScrollHeightSet = false) {
  const trigger = card.querySelector(".accordion-trigger");
  const panel = card.querySelector(".accordion-panel");
  if (!trigger || !panel) return;

  const isOpen = trigger.getAttribute("aria-expanded") === "true";
  const nextState = typeof forceOpen === "boolean" ? forceOpen : !isOpen;

  trigger.setAttribute("aria-expanded", String(nextState));
  panel.classList.toggle("is-open", nextState);

  if (nextState) {
    panel.style.maxHeight = skipScrollHeightSet ? "none" : `${panel.scrollHeight}px`;
    if (skipScrollHeightSet) {
      requestAnimationFrame(() => {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      });
    }
  } else {
    panel.style.maxHeight = `${panel.scrollHeight}px`;
    requestAnimationFrame(() => {
      panel.style.maxHeight = "0px";
    });
  }
}

function wireChatEvents() {
  chatBubble.addEventListener("click", openChat);
  openChatHero.addEventListener("click", openChat);
  chatClose.addEventListener("click", closeChat);

  providerSelect.addEventListener("change", () => {
    if (!modelInput.value || Object.values(defaultModels).includes(modelInput.value)) {
      modelInput.value = defaultModels[providerSelect.value];
    }

    saveSettings();
  });

  modelInput.addEventListener("input", saveSettings);
  apiKeyInput.addEventListener("input", saveSettings);

  chatForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const question = chatInput.value.trim();
    if (!question) return;

    const apiKey = apiKeyInput.value.trim();
    if (!apiKey) {
      addMessage(
        "assistant",
        "Add a Groq or OpenRouter API key first, then ask again. The key stays in localStorage on this browser only.",
        "message-error",
      );
      return;
    }

    addMessage("user", question);
    chatState.messages.push({ role: "user", content: question });
    chatInput.value = "";

    const loadingId = addMessage("assistant", "Thinking through the guide...");

    try {
      const answer = await requestTutorAnswer(question);
      updateMessage(loadingId, answer, "message-assistant");
      chatState.messages.push({ role: "assistant", content: answer });
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

function openChat() {
  document.body.classList.add("chat-open");
  chatShell.classList.add("is-open");
  chatShell.setAttribute("aria-hidden", "false");
  chatBubble.setAttribute("aria-expanded", "true");
}

function closeChat() {
  document.body.classList.remove("chat-open");
  chatShell.classList.remove("is-open");
  chatShell.setAttribute("aria-hidden", "true");
  chatBubble.setAttribute("aria-expanded", "false");
}

function loadSettings() {
  const saved = safeJsonParse(localStorage.getItem(settingsKey));

  const provider = saved?.provider || "groq";
  providerSelect.value = provider;
  modelInput.value = saved?.model || defaultModels[provider];
  apiKeyInput.value = saved?.apiKey || "";
}

function saveSettings() {
  localStorage.setItem(
    settingsKey,
    JSON.stringify({
      provider: providerSelect.value,
      model: modelInput.value.trim() || defaultModels[providerSelect.value],
      apiKey: apiKeyInput.value.trim(),
    }),
  );
}

async function requestTutorAnswer(question) {
  saveSettings();

  const provider = providerSelect.value;
  const model = modelInput.value.trim() || defaultModels[provider];
  const apiKey = apiKeyInput.value.trim();
  const context = buildContext(question);

  const systemPrompt = `
You are a warm, concise physics tutor embedded inside a waves study website.
Teach in clear English with a concept-first style.
Prioritize the supplied site context. If the user asks something beyond the guide, say that you are stepping slightly beyond the site and answer carefully.
When useful:
- explain intuitively before formula
- point out common mistakes
- show one short worked example
- keep answers compact and readable
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

  const ranked = STUDY_GUIDE.chapters
    .map((chapter) => {
      const text = normalize(`${chapter.title} ${chapter.tags.join(" ")} ${chapter.plainText}`);
      let score = 0;

      queryTokens.forEach((token) => {
        if (token.length < 3) return;
        if (text.includes(token)) score += 2;
        if (normalize(chapter.title).includes(token)) score += 3;
      });

      if (normalizedQuestion.includes("formula")) score += chapter.id === "chapter-7" ? 3 : 0;
      if (normalizedQuestion.includes("equation")) score += chapter.id === "chapter-2" ? 3 : 0;
      if (normalizedQuestion.includes("doppler")) score += chapter.id === "chapter-5" ? 4 : 0;
      if (normalizedQuestion.includes("interference")) score += chapter.id === "chapter-6" ? 4 : 0;
      if (normalizedQuestion.includes("graph")) score += chapter.id === "chapter-3" ? 4 : 0;
      if (normalizedQuestion.includes("intensity") || normalizedQuestion.includes("decibel")) {
        score += chapter.id === "chapter-4" ? 4 : 0;
      }

      return { chapter, score };
    })
    .sort((a, b) => b.score - a.score);

  const top = ranked.slice(0, 3).map(({ chapter }) => chapter);

  return top
    .map(
      (chapter) => `
[${chapter.title}]
${chapter.plainText.trim()}
      `.trim(),
    )
    .join("\n\n");
}

function addMessage(role, text, extraClass = "") {
  const element = document.createElement("article");
  element.className = `message message-${role}${extraClass ? ` ${extraClass}` : ""}`;
  element.innerHTML = `<p>${formatMessage(text)}</p>`;
  const messageId = `message-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  element.dataset.messageId = messageId;
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
