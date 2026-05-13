import Fuse from "fuse.js/basic";
import { faq, type FaqEntry } from "../data/faq.ts";

const STORAGE_KEY = "gtg_chat_collapsed";
const INITIAL_DELAY_MS = 4000;
const BUBBLE_DELAY_MS = 600;
const WIGGLE_DURATION_MS = 800;
const TYPING_MIN_MS = 800;
const TYPING_MAX_MS = 1200;
const REPLY_DELAY_MS = 600;
const SCORE_MAX = 0.55;
const AVATAR_RESET_MS = 1400;

type AvatarState = "greeting" | "thinking" | "writing";

export function initBuzz(): void {
  const launcher = document.getElementById("buzz-launcher") as HTMLButtonElement | null;
  const chat = document.getElementById("buzz-chat") as HTMLDivElement | null;
  const closeBtn = document.getElementById("buzz-close") as HTMLButtonElement | null;
  const messagesEl = document.getElementById("buzz-messages") as HTMLDivElement | null;
  const form = document.getElementById("buzz-form") as HTMLFormElement | null;
  const input = document.getElementById("buzz-input") as HTMLInputElement | null;
  const suggestionsEl = document.getElementById("buzz-suggestions") as HTMLDivElement | null;

  if (!launcher || !chat || !closeBtn || !messagesEl || !form || !input || !suggestionsEl) {
    return;
  }

  const avatarEls: Record<AvatarState, HTMLElement | null> = {
    greeting: chat.querySelector(".buzz-chat__avatar--greeting"),
    thinking: chat.querySelector(".buzz-chat__avatar--thinking"),
    writing: chat.querySelector(".buzz-chat__avatar--writing"),
  };

  const fuse = new Fuse(faq as FaqEntry[], {
    keys: ["question", "aliases"],
    threshold: 0.4,
    includeScore: true,
  });

  const scrollToBottom = (): void => {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  };

  const setAvatar = (state: AvatarState): void => {
    (Object.keys(avatarEls) as AvatarState[]).forEach((key) => {
      const el = avatarEls[key];
      if (!el) return;
      el.classList.toggle("is-active", key === state);
    });
  };

  // --- launcher entrance ---
  const showLauncher = (skipAnimation: boolean): void => {
    launcher.classList.remove("is-hidden");
    launcher.classList.add("is-visible");
    if (skipAnimation) return;
    window.setTimeout(() => launcher.classList.add("is-bubble-visible"), BUBBLE_DELAY_MS);
    window.setTimeout(() => {
      launcher.classList.add("is-wiggle");
      window.setTimeout(() => launcher.classList.remove("is-wiggle"), WIGGLE_DURATION_MS);
    }, BUBBLE_DELAY_MS + 400);
  };

  const collapseLauncher = (): void => {
    launcher.classList.add("is-collapsed");
    launcher.classList.remove("is-bubble-visible");
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // sessionStorage unavailable (private mode quirks) — non-fatal.
    }
  };

  let isCollapsed = false;
  try {
    isCollapsed = sessionStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    /* ignore */
  }

  if (isCollapsed) {
    launcher.classList.add("is-collapsed");
    showLauncher(true);
  } else {
    window.setTimeout(() => showLauncher(false), INITIAL_DELAY_MS);
  }

  // --- chat open/close ---
  let lastFocused: HTMLElement | null = null;

  const openChat = (): void => {
    lastFocused = document.activeElement as HTMLElement | null;
    chat.classList.remove("is-closed");
    chat.classList.add("is-open");
    chat.setAttribute("aria-hidden", "false");
    launcher.setAttribute("aria-expanded", "true");
    setAvatar("greeting");
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      /* ignore */
    }
    window.setTimeout(() => closeBtn.focus(), 100);
    scrollToBottom();
  };

  const closeChat = (): void => {
    chat.classList.add("is-closed");
    chat.classList.remove("is-open");
    chat.setAttribute("aria-hidden", "true");
    launcher.setAttribute("aria-expanded", "false");
    collapseLauncher();
    window.setTimeout(() => {
      if (lastFocused && document.body.contains(lastFocused)) {
        lastFocused.focus();
      } else {
        launcher.focus();
      }
    }, 100);
  };

  launcher.addEventListener("click", openChat);
  closeBtn.addEventListener("click", closeChat);

  document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Escape" && chat.classList.contains("is-open")) {
      e.preventDefault();
      closeChat();
    }
  });

  // Focus trap inside the dialog.
  chat.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key !== "Tab") return;
    if (!chat.classList.contains("is-open")) return;
    const focusables = chat.querySelectorAll<HTMLElement>(
      'button:not([disabled]), [href], input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  // --- messaging ---
  const createBubble = (role: "user" | "bot", text: string): HTMLDivElement => {
    const wrap = document.createElement("div");
    wrap.className = `buzz-msg buzz-msg--${role}`;
    const bubble = document.createElement("span");
    bubble.className = "buzz-msg__bubble";
    bubble.textContent = text; // XSS-safe: never innerHTML on user input.
    wrap.appendChild(bubble);
    return wrap;
  };

  const appendUser = (text: string): void => {
    messagesEl.appendChild(createBubble("user", text));
    scrollToBottom();
  };

  const appendBot = (text: string): void => {
    messagesEl.appendChild(createBubble("bot", text));
    scrollToBottom();
  };

  const appendBotFallback = (): void => {
    // Static, author-written fallback with safe inline anchors built via DOM API.
    const wrap = document.createElement("div");
    wrap.className = "buzz-msg buzz-msg--bot";
    const bubble = document.createElement("span");
    bubble.className = "buzz-msg__bubble";
    bubble.appendChild(
      document.createTextNode(
        "Hmm, I don't have a good answer for that one yet — but Jennifer would love to answer it personally. You can "
      )
    );
    const noteLink = document.createElement("a");
    noteLink.href = "/contact/";
    noteLink.textContent = "send her a note";
    bubble.appendChild(noteLink);
    bubble.appendChild(document.createTextNode(" or call "));
    const phoneLink = document.createElement("a");
    phoneLink.href = "tel:+19415868421";
    phoneLink.textContent = "(941) 586-8421";
    bubble.appendChild(phoneLink);
    bubble.appendChild(document.createTextNode("."));
    wrap.appendChild(bubble);
    messagesEl.appendChild(wrap);
    scrollToBottom();
  };

  const appendTyping = (): HTMLDivElement => {
    const wrap = document.createElement("div");
    wrap.className = "buzz-msg buzz-msg--bot buzz-msg--typing";
    const bubble = document.createElement("span");
    bubble.className = "buzz-msg__bubble";
    const dots = document.createElement("span");
    dots.className = "buzz-typing-dots";
    dots.setAttribute("aria-label", "Buzz is typing");
    for (let i = 0; i < 3; i += 1) dots.appendChild(document.createElement("span"));
    bubble.appendChild(dots);
    wrap.appendChild(bubble);
    messagesEl.appendChild(wrap);
    scrollToBottom();
    return wrap;
  };

  const removeNode = (node: Node | null): void => {
    if (node && node.parentNode) node.parentNode.removeChild(node);
  };

  const matchFor = (question: string): FaqEntry | null => {
    const cleaned = question.trim();
    if (!cleaned) return null;
    const results = fuse.search(cleaned);
    if (results.length === 0) return null;
    const top = results[0];
    if (typeof top.score === "number" && top.score > SCORE_MAX) return null;
    return top.item as FaqEntry;
  };

  const randomBetween = (min: number, max: number): number =>
    Math.floor(min + Math.random() * (max - min + 1));

  const respondTo = (text: string): void => {
    setAvatar("thinking");
    const typing = appendTyping();
    const delay = randomBetween(TYPING_MIN_MS, TYPING_MAX_MS);
    window.setTimeout(() => {
      removeNode(typing);
      setAvatar("writing");
      const match = matchFor(text);
      if (match) appendBot(match.answer);
      else appendBotFallback();
      window.setTimeout(() => setAvatar("greeting"), AVATAR_RESET_MS);
    }, delay);
  };

  // Suggested-question pills (event delegation).
  suggestionsEl.addEventListener("click", (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const btn = target.closest<HTMLButtonElement>(".buzz-suggestion");
    if (!btn) return;
    const question = btn.dataset.question ?? btn.textContent ?? "";
    if (!question) return;
    appendUser(question);
    suggestionsEl.style.display = "none";
    window.setTimeout(() => respondTo(question), REPLY_DELAY_MS);
  });

  // Form submission.
  form.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    const value = input.value.trim();
    if (!value) return;
    appendUser(value);
    input.value = "";
    suggestionsEl.style.display = "none";
    window.setTimeout(() => respondTo(value), REPLY_DELAY_MS);
  });
}
