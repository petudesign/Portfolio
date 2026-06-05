const projectCards = document.querySelectorAll(".project-card");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const mainNavLinks = document.querySelectorAll(".main-nav a");
const topLinks = document.querySelectorAll('a[href="#top"]');
let companionTrigger = document.querySelector(".companion-trigger");
let projectCompanion = document.querySelector(".project-companion");
let companionPanel = document.querySelector(".companion-panel");
let companionClose = document.querySelector(".companion-close");
let companionMessages = document.querySelector(".companion-messages");
let companionPrompts = document.querySelector(".companion-prompts");
let companionHeaderIcon = document.querySelector(".companion-header-icon");

if (document.body.dataset.page === "home") {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.add("hero-ready");
    });
  });
}

const companionContent = {
  home: {
    intro:
      "I can give you the short version: how Petteri thinks, what to look at first, and where the process shows up.",
    prompts: [
      {
        label: "How does Petteri approach design?",
        answer:
          "He starts by finding the decision that matters most: what should the user understand, trust, or do next? From there the work moves through messy mapping, quick prototypes, usability checks, and finally a calmer interface that carries the thinking without explaining itself too much.",
      },
      {
        label: "What should I look at first?",
        answer:
          "Start with the selected projects on the right. They are meant to give a fast read on visual design, systems thinking, and product taste before you dive into the deeper case studies.",
      },
      {
        label: "What is the AI angle?",
        answer:
          "The AI angle is practical rather than decorative: using automation and agents to remove slow handoffs, speed up exploration, and make product teams better at iterating. The point is not AI for novelty, but AI where it changes the workflow.",
      },
      {
        label: "How does code fit into the work?",
        answer:
          "Code is used as a design material. It helps test interactions, responsiveness, motion, and edge cases earlier than static mockups can. It also makes collaboration with engineering more concrete.",
      },
      {
        label: "What kind of role fits?",
        answer:
          "A product design role close to growth, AI tools, automation, or complex UX problems. The sweet spot is where strategy, interface craft, and hands-on prototyping all matter.",
      },
    ],
  },
  about: {
    intro:
      "I can give you the short version: how Petteri thinks, how the work happens, and what kind of problems fit him best.",
    prompts: [
      {
        label: "How does Petteri approach design?",
        answer:
          "He starts by finding the decision that matters most: what should the user understand, trust, or do next? From there the work moves through messy mapping, quick prototypes, usability checks, and finally a calmer interface.",
      },
      {
        label: "What kind of role fits?",
        answer:
          "A product design role close to growth, AI tools, automation, or complex UX problems. The sweet spot is where strategy, interface craft, and hands-on prototyping all matter.",
      },
      {
        label: "How does code fit into the work?",
        answer:
          "Code is used as a design material. It makes interaction, responsiveness, motion, and edge cases visible earlier than static mockups usually can.",
      },
    ],
  },
  blog: {
    intro:
      "This is the writing hub. Once posts exist, I can help visitors jump between design notes, AI and automation ideas, and growth/product thinking.",
    prompts: [
      {
        label: "What will Petteri write about?",
        answer:
          "Likely practical notes around product design, AI workflows, automation, growth, interface details, and the things that become clearer only after building something.",
      },
      {
        label: "How should I use the filters?",
        answer:
          "Newest is the default overview. The category filters are there for later, when the writing grows enough that visitors need a faster way to find a theme.",
      },
      {
        label: "What is the AI angle?",
        answer:
          "The useful angle is workflow: how AI changes research, prototyping, product iteration, and the handoff between design and code.",
      },
    ],
  },
  "project-shavikki": {
    intro:
      "This companion is tuned for the S-Hävikki case, with questions around food waste, service design, and in-store behavior.",
    prompts: [
      {
        label: "Give me the 30-second version",
        answer:
          "S-Hävikki is a service design concept for reducing grocery food waste through branding, an employee workflow, and a dedicated in-store cabinet. The interesting part is that it treats waste as both an operational problem and a customer perception problem.",
      },
      {
        label: "What is this project about?",
        answer:
          "It explores how S Group could make food waste more visible, easier to manage internally, and more appealing for customers to choose before products are thrown away.",
      },
      {
        label: "What did Petteri learn?",
        answer:
          "He learned that food waste design is not only about discounts. Timing, trust, placement, staff workload, and brand framing all shape whether the system works.",
      },
      {
        label: "What would he improve next?",
        answer:
          "He would test the cabinet and employee workflow with shoppers and store staff to understand what creates interest, confusion, or operational friction.",
      },
      {
        label: "How does Petteri approach design?",
        answer:
          "He looks at the full system around the interface: the customer moment, the employee task, the physical space, and the business goal.",
      },
    ],
  },
  "project-savings": {
    intro:
      "This companion is tuned for the Savings App case, with space for questions about motivation, clarity, and financial-product trust.",
    prompts: [
      {
        label: "Give me the 30-second version",
        answer:
          "This case looks at how a savings app could make financial progress feel clearer and less intimidating. The focus is on trust, hierarchy, and small interface details that help people understand what is happening and what to do next.",
      },
      {
        label: "What is this project about?",
        answer:
          "A savings product case about making money habits feel understandable, calm, and actionable instead of abstract or guilt-driven.",
      },
      {
        label: "What should I look for?",
        answer:
          "Look for hierarchy, feedback, and small moments that help the user understand progress without needing to decode a dashboard.",
      },
      {
        label: "What did Petteri learn?",
        answer:
          "The biggest learning is that financial UX needs trust before delight. Clear language and hierarchy matter more than decorative motivation.",
      },
      {
        label: "What would he improve next?",
        answer:
          "He would validate the flow with users and tune the language around different levels of financial risk and confidence.",
      },
      {
        label: "How does Petteri approach design?",
        answer:
          "He starts with the user's next decision, then shapes the interface around clarity, trust, and momentum.",
      },
    ],
  },
  "project-dashboard": {
    intro:
      "This companion is tuned for the Dashboard case, with questions aimed at information architecture and scan-friendly product surfaces.",
    prompts: [
      {
        label: "Give me the 30-second version",
        answer:
          "This case is about making a busy dashboard easier to scan and act on. The goal is not to show less for the sake of minimalism, but to make important signals rise above the supporting detail.",
      },
      {
        label: "What is this project about?",
        answer:
          "A dashboard case about turning a busy operational view into something people can scan, compare, and act on quickly.",
      },
      {
        label: "What should I look for?",
        answer:
          "Look for density without noise: grouping, hierarchy, empty states, and the way important signals rise above supporting detail.",
      },
      {
        label: "What did Petteri learn?",
        answer:
          "He learned that dashboard design is less about fitting everything in and more about deciding which signals deserve attention first.",
      },
      {
        label: "What would he improve next?",
        answer:
          "He would define user roles more clearly and design dashboard states around the decisions each role needs to make most often.",
      },
      {
        label: "How does Petteri approach design?",
        answer:
          "He tries to find the few decisions the screen must support, then removes anything that competes with those decisions.",
      },
    ],
  },
  "project-flowmark": {
    intro:
      "This companion is tuned for the Flowmark concept, with questions around lightweight prototype testing and keeping validation tools focused.",
    prompts: [
      {
        label: "Give me the 30-second version",
        answer:
          "Flowmark is an early concept for a lighter prototype feedback loop. The point is not to replace a full research suite or pretend it is a finished testing product, but to explore how teams could learn from mobile prototype tasks faster.",
      },
      {
        label: "What is this project about?",
        answer:
          "It explores how a team could validate mobile prototype flows without depending on paid third-party subscriptions for every small test.",
      },
      {
        label: "What should I look for?",
        answer:
          "Look for scope control. The strongest product decision is keeping the MVP narrow: create a task, share the test, capture behavior, and read the result quickly.",
      },
      {
        label: "What is the main risk?",
        answer:
          "False confidence. Small-sample test data and AI summaries can look more certain than they are, so the product needs to show context and uncertainty clearly.",
      },
      {
        label: "What would he test first?",
        answer:
          "Whether the lightweight setup actually makes teams test prototypes more often. If it does not change behavior, the product should stay as a learning artifact.",
      },
    ],
  },
  "project-tahti": {
    intro:
      "This companion is tuned for the Tahti case, with questions around reading support, focus, and keeping the MVP narrow.",
    prompts: [
      {
        label: "Give me the 30-second version",
        answer:
          "Tahti is a Chrome extension experiment for reading selected text one word at a time at a controlled pace. It is framed as reading support, not a speed-reading promise.",
      },
      {
        label: "What is this project about?",
        answer:
          "It started from a personal reading friction: mild astigmatism, ADD, and not being a particularly fast line-by-line reader. The product question is whether the same pacing model helps other people too.",
      },
      {
        label: "What should I look for?",
        answer:
          "Look for the scope decisions: selected text first, no accounts, no streaks, no AI, no full article parsing, and controls that stay close to the reading focus.",
      },
      {
        label: "What is the main risk?",
        answer:
          "Comprehension. RSVP research is mixed: fixed-position word presentation can help in some contexts, but studies also show weaker literal comprehension, more fatigue, or higher task load in others.",
      },
      {
        label: "What would he test first?",
        answer:
          "Real reading sessions with other users: does Tahti help them start more easily, stay focused longer, and understand enough for the tradeoff to be worth it?",
      },
    ],
  },
  "project-filter-news": {
    intro:
      "This companion is tuned for the FilterNews case, with questions around cognitive load, reading behavior, and healthier information flow.",
    prompts: [
      {
        label: "Give me the 30-second version",
        answer:
          "This case explores how news consumption could feel calmer by reducing cognitive load. The focus is on filtering, hierarchy, and defaults that help people stay informed without feeling buried by updates.",
      },
      {
        label: "What is this project about?",
        answer:
          "A news-consumption case about helping people manage attention, reduce overload, and understand what matters without drowning in updates.",
      },
      {
        label: "What should I look for?",
        answer:
          "Look for filtering logic, information hierarchy, and choices that make the product feel calmer without hiding important context.",
      },
      {
        label: "What did Petteri learn?",
        answer:
          "He learned that reducing information overload is not only about showing less. It is about better defaults, timing, and control.",
      },
      {
        label: "What would he improve next?",
        answer:
          "He would prototype the filtering model earlier and test whether people understand what is prioritised, hidden, or delayed.",
      },
      {
        label: "How does Petteri approach design?",
        answer:
          "He treats clarity as a product decision, not just a visual layer: fewer competing choices, better timing, and stronger defaults.",
      },
    ],
  },
  "project-elisa-audit": {
    intro:
      "This companion is tuned for the Elisa checkout audit, with questions around purchase intent, upsell timing, and product reassurance.",
    prompts: [
      {
        label: "Give me the 30-second version",
        answer:
          "This is a self-initiated audit of Elisa's checkout flow. The main issue is that after pressing checkout, the user hits a full upsell screen before reaching payment. The recommendation keeps the upsell opportunity, but moves it into the checkout summary where it does not block the purchase.",
      },
      {
        label: "What is this project about?",
        answer:
          "A checkout UX audit focused on protecting purchase intent after a user has already decided to buy a high-price phone.",
      },
      {
        label: "What should I look for?",
        answer:
          "Look for the product reasoning: the case does not argue that upsells are wrong, only that their timing and hierarchy make the flow feel like shopping again instead of checkout.",
      },
      {
        label: "What did Petteri learn?",
        answer:
          "He learned that checkout needs reassurance before discovery. If the selected product disappears and add-ons take over, the user has to rebuild confidence before paying.",
      },
      {
        label: "What would he improve next?",
        answer:
          "He would test the proposed flow with real shoppers, then compare completion rate, add-on attach rate, time to payment, and backtracking.",
      },
      {
        label: "How does Petteri approach design?",
        answer:
          "He connects interface details to user confidence and business outcomes, especially in flows where hesitation is expensive.",
      },
    ],
  },
  "project-automotive": {
    intro:
      "This companion is tuned for the Automotive UX case, with questions around attention, safety, and interfaces used under pressure.",
    prompts: [
      {
        label: "Give me the 30-second version",
        answer:
          "This case looks at automotive UX through attention and context. The main question is whether the interface still makes sense when the user is moving, distracted, and unable to give the screen full focus.",
      },
      {
        label: "What is this project about?",
        answer:
          "An automotive UX case about whether an interface still makes sense when the user is moving, distracted, and working with limited attention.",
      },
      {
        label: "What should I look for?",
        answer:
          "Look for interaction cost: glanceability, physical context, hierarchy, and what should never require too much thinking while driving.",
      },
      {
        label: "What did Petteri learn?",
        answer:
          "He learned that automotive UX makes attention cost impossible to ignore. If the interface asks too much, the design is not context-aware enough.",
      },
      {
        label: "What would he improve next?",
        answer:
          "He would define driving scenarios earlier and evaluate each interaction against attention, timing, and recovery cost.",
      },
      {
        label: "How does Petteri approach design?",
        answer:
          "He starts from the real use context, then judges the interface by what it asks from the user in that moment.",
      },
    ],
  },
  "project-courttap": {
    intro:
      "This companion is tuned for the CourtTap smartwatch scoring concept, with questions around live sports scoring, glanceability, and MVP scope.",
    prompts: [
      {
        label: "Give me the 30-second version",
        answer:
          "CourtTap is a tennis and padel scoring concept for smartwatches. The focus is live scoring during a match: one-tap point entry, undo, set progress, server state, and tie-break handling without pulling out a phone.",
      },
      {
        label: "What is this project about?",
        answer:
          "A wearable UX concept for players who need to keep score quickly while their attention stays on the court.",
      },
      {
        label: "What should I look for?",
        answer:
          "Look for large targets, fast correction, short labels, and whether the interface avoids asking the player to study the watch between points.",
      },
      {
        label: "What is the MVP?",
        answer:
          "Live scoring only: add point for either side, undo, current server, set state, tie-breaks, and match finished. Stats and social features should wait.",
      },
      {
        label: "What would he test first?",
        answer:
          "Whether players can use it during a real rally session without breaking match rhythm. Desk testing is not enough for this concept.",
      },
    ],
  },
  "project-smartgrocer": {
    intro:
      "This companion is tuned for the SmartGrocer case, with questions around Kesko, self-scanning, K-Plussa, and reducing friction across the grocery trip.",
    prompts: [
      {
        label: "Give me the 30-second version",
        answer:
          "SmartGrocer is a Kesko self-scanning concept that connects dedicated handheld scanners with K-Plussa, shopping list sync, store guidance, and real-time savings. The point is to reduce friction across the whole trip, not just at checkout.",
      },
      {
        label: "What is this project about?",
        answer:
          "A retail UX and service design concept asking what self-scanning could become if the store already knew what the customer came to buy.",
      },
      {
        label: "What should I look for?",
        answer:
          "Look for the system fit: K-Plussa identity, a synced shopping list, dedicated hardware, product guidance, live savings, and a checkout flow that becomes almost invisible.",
      },
      {
        label: "Why dedicated hardware?",
        answer:
          "Because a grocery scanner has to work for a wide range of customers every time. Dedicated hardware avoids the inconsistency of phone cameras, permissions, screen sizes, batteries, and confidence levels.",
      },
      {
        label: "What would he test first?",
        answer:
          "A narrow real-store trip with 10-15 common products: does the scanner actually reduce uncertainty, time spent searching, checkout friction, and staff help requests?",
      },
      {
        label: "How does Petteri approach design?",
        answer:
          "He looks for the hidden work around the interface: planning, searching, loyalty decisions, packing, checkout, and recovery when something goes wrong.",
      },
    ],
  },
};

mainNavLinks.forEach((link) => {
  link.dataset.label = link.textContent.trim();
});

const pageKey = document.body.dataset.page || "home";
const activeCompanionContent = companionContent[pageKey] || companionContent.home;
const filterButtons = document.querySelectorAll(".filter-button");
const postRows = document.querySelectorAll(".post-row");
const caseImpact = document.querySelector(".case-impact");
const caseSections = document.querySelectorAll(".case-section[id]");
const timelineLinks = document.querySelectorAll(".case-timeline a[href^='#']");
const mainElement = document.querySelector("main");

const caseStudies = [
  {
    id: "project-shavikki",
    title: "S-Hävikki",
    meta: "Service design concept",
    year: "2026",
    href: "shavikki.html",
    image: "assets/shavikki-kaappikuva.png",
    description: "Making near-expiry food easier for store employees to handle and customers to choose.",
  },
  {
    id: "project-flowmark",
    title: "Flowmark",
    meta: "Prototype testing",
    year: "2026",
    href: "flowmark.html",
    image: "assets/flowmark-preview.svg",
    description: "A concept for making mobile prototype feedback loops lighter and easier to repeat.",
  },
  {
    id: "project-filter-news",
    title: "FilterNews",
    meta: "Attention UX",
    year: "2026",
    href: "filter-news.html",
    image: "assets/filternews-bbc.png",
    description: "Soft news filtering to prevent cognitive overload.",
  },
  {
    id: "project-tahti",
    title: "Tahti",
    meta: "Reading support",
    year: "2026",
    href: "tahti.html",
    description: "A Chrome extension experiment for reading selected text one word at a time at a controlled pace.",
  },
  {
    id: "project-elisa-audit",
    title: "Elisa UX Audit",
    meta: "Checkout audit",
    year: "2026",
    href: "elisa-audit.html",
    image: "assets/elisa-final-design.png",
    description: "Protecting purchase intent by moving upsells out of the blocking checkout step.",
  },
  {
    id: "project-automotive",
    title: "Automotive UX",
    meta: "Contextual UX",
    year: "2026",
    href: "automotive.html",
    description: "Looking at attention, safety, and interface decisions in a driving context.",
  },
  {
    id: "project-courttap",
    title: "CourtTap",
    meta: "Wearable UX",
    year: "2026",
    href: "courttap.html",
    image: "assets/courttap-preview.svg",
    description: "A smartwatch scoring concept for tennis and padel matches.",
  },
  {
    id: "project-smartgrocer",
    title: "SmartGrocer",
    meta: "Retail self-scanning",
    year: "2025",
    href: "smartgrocer.html",
    description: "A Kesko self-scanning concept asking what happens when the scanner knows the shopping list.",
  },
];

const ensureCompanion = () => {
  if (projectCompanion) {
    return;
  }

  projectCompanion = document.createElement("section");
  projectCompanion.className = "project-companion";
  projectCompanion.setAttribute("aria-label", "Portfolio Companion");
  projectCompanion.innerHTML = `
    <button class="companion-trigger" type="button" aria-expanded="false" aria-controls="companion-panel">
      <span class="companion-trigger-icon" aria-hidden="true"></span>
      <span>Portfolio Companion</span>
    </button>
    <div class="companion-panel" id="companion-panel" hidden>
      <div class="companion-header">
        <span class="companion-header-icon" aria-hidden="true"></span>
        <div>
          <p>Portfolio Companion</p>
          <h2>Want the quick tour?</h2>
        </div>
        <button class="companion-close" type="button" aria-label="Close Portfolio Companion">&times;</button>
      </div>
      <div class="companion-messages" aria-live="polite"></div>
      <div class="companion-prompts" aria-label="Suggested questions"></div>
    </div>
  `;
  document.body.append(projectCompanion);

  companionTrigger = document.querySelector(".companion-trigger");
  companionPanel = document.querySelector(".companion-panel");
  companionClose = document.querySelector(".companion-close");
  companionMessages = document.querySelector(".companion-messages");
  companionPrompts = document.querySelector(".companion-prompts");
  companionHeaderIcon = document.querySelector(".companion-header-icon");
};

ensureCompanion();

topLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", window.location.pathname);
  });
});

menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

mainNav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    mainNav.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open menu");
  }
});

const addCompanionMessage = (text, type = "bot") => {
  const message = document.createElement("p");
  message.className = `companion-message ${type}`;
  message.textContent = text;
  companionMessages.append(message);
  companionMessages.scrollTop = companionMessages.scrollHeight;
};

const renderCompanionPrompts = () => {
  companionPrompts.innerHTML = "";

  activeCompanionContent.prompts.forEach((prompt) => {
    const button = document.createElement("button");
    button.className = "companion-prompt";
    button.type = "button";
    button.textContent = prompt.label;
    button.addEventListener("click", () => {
      addCompanionMessage(prompt.label, "user");
      window.setTimeout(() => addCompanionMessage(prompt.answer, "bot"), 180);
    });
    companionPrompts.append(button);
  });
};

const openCompanion = () => {
  companionPanel.hidden = false;
  projectCompanion.classList.add("is-open");
  companionTrigger.setAttribute("aria-expanded", "true");
  window.requestAnimationFrame(() => companionPanel.classList.add("is-open"));

  if (!companionMessages.children.length) {
    addCompanionMessage(activeCompanionContent.intro, "bot");
  }
};

const closeCompanion = () => {
  companionPanel.classList.remove("is-open");
  companionTrigger.setAttribute("aria-expanded", "false");
  window.setTimeout(() => {
    if (!companionPanel.classList.contains("is-open")) {
      companionPanel.hidden = true;
      projectCompanion.classList.remove("is-open");
    }
  }, 190);
};

if (projectCompanion && companionPanel && companionMessages && companionPrompts) {
  renderCompanionPrompts();

  companionTrigger?.addEventListener("click", () => {
    if (companionPanel.hidden) {
      openCompanion();
    } else {
      closeCompanion();
    }
  });

  companionClose?.addEventListener("click", closeCompanion);

  companionHeaderIcon?.addEventListener("click", () => {
    companionHeaderIcon.classList.remove("is-petted");
    companionHeaderIcon.classList.remove("show-pet-bubble");
    void companionHeaderIcon.offsetWidth;
    companionHeaderIcon.classList.add("is-petted");
    companionHeaderIcon.classList.add("show-pet-bubble");
  });

  companionHeaderIcon?.addEventListener("animationend", (event) => {
    if (event.animationName === "companion-pet") {
      companionHeaderIcon.classList.remove("is-petted");
      window.setTimeout(() => {
        companionHeaderIcon.classList.remove("show-pet-bubble");
      }, 1380);
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && companionPanel && !companionPanel.hidden) {
    closeCompanion();
  }
});

const caseStudyTargets = document.querySelectorAll(
  ".featured-image, .selected-grid a, .project-media"
);
const hoverPreviewVideos = document.querySelectorAll(".hover-preview-video");
const caseVideoToggles = document.querySelectorAll(".case-video-toggle");
const caseImageZoomButtons = document.querySelectorAll(".case-image-zoom");

hoverPreviewVideos.forEach((video) => {
  const previewCard = video.closest(".project-media, .media-preview");

  video.addEventListener("loadedmetadata", () => {
    video.currentTime = 0.01;
  });

  previewCard?.addEventListener("pointerenter", (event) => {
    if (event.pointerType !== "mouse") {
      return;
    }

    video.play().catch(() => {});
  });

  previewCard?.addEventListener("pointerleave", () => {
    video.pause();
    video.currentTime = 0.01;
  });
});

caseVideoToggles.forEach((caseVideoToggle) => {
  const caseMediaShell = caseVideoToggle.closest(".case-media-shell");
  const caseVideo = caseMediaShell?.querySelector(".case-video");
  const caseVideoToggleLabel = caseVideoToggle.querySelector(".case-video-toggle-label");

  if (!caseVideo) {
    return;
  }

  caseVideoToggle.addEventListener("click", () => {
    if (caseVideo.paused) {
      caseVideo.play().catch(() => {});
      caseVideo.dataset.userPaused = "false";
      caseVideoToggle.classList.remove("is-paused");
      caseVideoToggle.setAttribute("aria-label", "Pause video");
      caseVideoToggle.setAttribute("aria-pressed", "false");
      if (caseVideoToggleLabel) {
        caseVideoToggleLabel.textContent = "Pause";
      }
      return;
    }

    caseVideo.pause();
    caseVideo.dataset.userPaused = "true";
    caseVideoToggle.classList.add("is-paused");
    caseVideoToggle.setAttribute("aria-label", "Play video");
    caseVideoToggle.setAttribute("aria-pressed", "true");
    if (caseVideoToggleLabel) {
      caseVideoToggleLabel.textContent = "Play";
    }
  });
});

const caseVideos = document.querySelectorAll(".case-video");

caseVideos.forEach((video) => {
  video.muted = true;
  video.defaultMuted = true;
  video.volume = 0;
});

if (caseVideos.length && "IntersectionObserver" in window) {
  const caseVideoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;

        if (!(video instanceof HTMLVideoElement)) {
          return;
        }

        if (!entry.isIntersecting) {
          video.pause();
          return;
        }

        if (video.dataset.userPaused !== "true") {
          video.play().catch(() => {});
        }
      });
    },
    { threshold: 0.16 }
  );

  caseVideos.forEach((video) => caseVideoObserver.observe(video));
}

if (caseImageZoomButtons.length) {
  const lightbox = document.createElement("div");
  lightbox.className = "case-image-lightbox";
  lightbox.hidden = true;
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Expanded case image");
  lightbox.innerHTML = `
    <div class="case-image-lightbox-frame">
      <button class="case-image-lightbox-close" type="button" aria-label="Close expanded image">&times;</button>
      <img alt="">
    </div>
  `;
  document.body.append(lightbox);

  const lightboxImage = lightbox.querySelector("img");
  const lightboxClose = lightbox.querySelector(".case-image-lightbox-close");

  const closeLightbox = () => {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  };

  caseImageZoomButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const image = button.querySelector("img");

      if (!image || !lightboxImage) {
        return;
      }

      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt;
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      lightboxClose?.focus();
    });
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  lightboxClose?.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  });
}

caseStudyTargets.forEach((target) => {
  const updateCursorPosition = (event) => {
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--cursor-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--cursor-y", `${event.clientY - rect.top}px`);
  };

  target.addEventListener("pointerenter", (event) => {
    if (event.pointerType !== "mouse") {
      return;
    }

    updateCursorPosition(event);
    target.classList.add("is-cursor-active");
  });

  target.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse") {
      return;
    }

    updateCursorPosition(event);
  });

  target.addEventListener("pointerleave", () => {
    target.classList.remove("is-cursor-active");
  });
});

const revealProjects = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealProjects.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

projectCards.forEach((card) => {
  card.classList.add("will-reveal");
  revealProjects.observe(card);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const activeFilter = button.dataset.filter || "all";

    filterButtons.forEach((filterButton) => {
      filterButton.classList.toggle("active", filterButton === button);
    });

    postRows.forEach((post) => {
      post.hidden = activeFilter !== "all" && post.dataset.category !== activeFilter;
    });
  });
});

if (caseImpact) {
  const updateTimelineVisibility = () => {
    const impactBottom = caseImpact.getBoundingClientRect().bottom;
    document.body.classList.toggle("show-case-timeline", impactBottom < 96);
  };

  updateTimelineVisibility();
  window.addEventListener("scroll", updateTimelineVisibility, { passive: true });
  window.addEventListener("resize", updateTimelineVisibility);
}

if (caseSections.length && timelineLinks.length) {
  const childToParentTimelineMap = {};

  let currentTimelineParent = "";
  timelineLinks.forEach((link) => {
    const linkTarget = link.getAttribute("href")?.replace("#", "") || "";

    if (link.classList.contains("timeline-child")) {
      link.dataset.parent = currentTimelineParent;
      childToParentTimelineMap[linkTarget] = currentTimelineParent;
      return;
    }

    currentTimelineParent = linkTarget;
  });

  const setActiveTimelineLink = () => {
    let activeId = caseSections[0].id;

    caseSections.forEach((section) => {
      if (section.getBoundingClientRect().top <= 140) {
        activeId = section.id;
      }
    });

    timelineLinks.forEach((link) => {
      const linkTarget = link.getAttribute("href")?.replace("#", "");
      const parentTarget = childToParentTimelineMap[activeId];
      const isChild = link.classList.contains("timeline-child");
      const linkParent = link.dataset.parent || "problem-framing";

      link.classList.toggle("active", linkTarget === activeId);
      link.classList.toggle(
        "parent-active",
        linkTarget === parentTarget
      );
      link.classList.toggle(
        "is-child-group-open",
        isChild && (activeId === linkParent || parentTarget === linkParent)
      );
    });
  };

  setActiveTimelineLink();
  window.addEventListener("scroll", setActiveTimelineLink, { passive: true });
  window.addEventListener("resize", setActiveTimelineLink);
}

const shavikkiPrototype = document.querySelector("[data-shavikki-prototype]");

if (shavikkiPrototype) {
  const departmentSelect = shavikkiPrototype.querySelector("[data-shavikki-department]");
  const cabinetSelect = shavikkiPrototype.querySelector("[data-shavikki-cabinet]");
  const title = shavikkiPrototype.querySelector("[data-shavikki-title]");
  const breadcrumb = shavikkiPrototype.querySelector("[data-shavikki-breadcrumb]");
  const statusPrimary = shavikkiPrototype.querySelector("[data-shavikki-status-primary]");
  const statusSecondary = shavikkiPrototype.querySelector("[data-shavikki-status-secondary]");
  const mapToggle = shavikkiPrototype.querySelector("[data-shavikki-map-toggle]");
  const mapPanel = shavikkiPrototype.querySelector("[data-shavikki-map]");
  const overlayClose = shavikkiPrototype.querySelector("[data-shavikki-overlay-close]");
  const mapButtons = shavikkiPrototype.querySelectorAll("[data-section]");
  const shelfCells = shavikkiPrototype.querySelectorAll(".shavikki-cell");
  const backButton = shavikkiPrototype.querySelector("[data-shavikki-back]");
  const productPanel = shavikkiPrototype.querySelector("[data-shavikki-products]");
  const productTitle = shavikkiPrototype.querySelector("[data-shavikki-product-title]");
  const productList = shavikkiPrototype.querySelector("[data-shavikki-product-list]");
  const productPanelClose = shavikkiPrototype.querySelector("[data-shavikki-products-close]");
  const groupPanel = shavikkiPrototype.querySelector("[data-shavikki-groups]");
  const groupManage = shavikkiPrototype.querySelector("[data-shavikki-group-manage]");
  const groupPanelClose = shavikkiPrototype.querySelector("[data-shavikki-groups-close]");
  const scanButton = shavikkiPrototype.querySelector("[data-shavikki-scan]");
  const wasteButton = shavikkiPrototype.querySelector("[data-shavikki-waste]");
  const countValue = shavikkiPrototype.querySelector("[data-shavikki-count]");
  const countMinus = shavikkiPrototype.querySelector("[data-shavikki-count-minus]");
  const countPlus = shavikkiPrototype.querySelector("[data-shavikki-count-plus]");
  let scannedCount = 1;

  let activeSection = "maito";

  const sectionLabels = {
    maito: "Dairy department",
    hevi: "Hevi",
    valmisruoka: "Ready meals",
    leipa: "Bakery",
  };

  const productGroups = {
    maito: [
      ["maidot", "Milk"],
      ["voit", "Butter"],
      ["jogurtit", "Yogurts"],
    ],
    hevi: [
      ["hedelmat", "Fruit"],
      ["vihannekset", "Vegetables"],
      ["salaatit", "Salads"],
    ],
    valmisruoka: [
      ["valmisateriat", "Ready meals"],
      ["salaatit", "Salads"],
      ["keitot", "Soups"],
    ],
    leipa: [
      ["vaaleat-leivat", "White bread"],
      ["ruisleivat", "Rye bread"],
      ["pullat", "Buns"],
    ],
  };

  const populateProductGroups = (section) => {
    if (!departmentSelect) {
      return;
    }

    departmentSelect.innerHTML = "";

    (productGroups[section] || productGroups.maito).forEach(([value, label]) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = label;
      departmentSelect.append(option);
    });
  };

  const updateShavikkiContext = () => {
    const selectedCategory = departmentSelect?.selectedOptions?.[0]?.textContent || "Maidot";
    const section = sectionLabels[activeSection] || sectionLabels.maito;
    const cabinet = cabinetSelect?.value || "4";

    if (title) {
      title.textContent = `${selectedCategory} shelf map - Unit ${cabinet}`;
    }

    if (breadcrumb) {
      breadcrumb.textContent = `${section} > ${selectedCategory} > Unit ${cabinet}`;
    }

    setShavikkiStatus("2 sections", `need checking · Unit ${cabinet}`);
  };

  const setShavikkiStatus = (primary, secondary = "") => {
    if (statusPrimary) {
      statusPrimary.textContent = primary;
    }

    if (statusSecondary) {
      statusSecondary.textContent = secondary;
    }
  };

  const closeShavikkiOverlays = () => {
    if (mapPanel) {
      mapPanel.hidden = true;
    }

    if (productPanel) {
      productPanel.hidden = true;
    }

    if (groupPanel) {
      groupPanel.hidden = true;
    }

    mapToggle?.setAttribute("aria-expanded", "false");
  };

  const updateCount = () => {
    if (countValue) {
      countValue.textContent = String(scannedCount);
    }
  };

  departmentSelect?.addEventListener("change", updateShavikkiContext);
  cabinetSelect?.addEventListener("change", updateShavikkiContext);

  mapToggle?.addEventListener("click", () => {
    if (!mapPanel) {
      return;
    }

    const shouldOpen = mapPanel.hidden;
    closeShavikkiOverlays();
    mapPanel.hidden = !shouldOpen;
    mapToggle.setAttribute("aria-expanded", String(shouldOpen));
  });

  overlayClose?.addEventListener("click", () => {
    closeShavikkiOverlays();
    updateShavikkiContext();
  });

  groupManage?.addEventListener("click", () => {
    if (!groupPanel) {
      return;
    }

    closeShavikkiOverlays();
    groupPanel.hidden = false;
  });

  groupPanelClose?.addEventListener("click", () => {
    closeShavikkiOverlays();
    updateShavikkiContext();
  });

  mapButtons.forEach((button) => {
    button.addEventListener("click", () => {
      mapButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");

      if (button.dataset.section) {
        activeSection = button.dataset.section;
        populateProductGroups(activeSection);
      }

      updateShavikkiContext();

      setShavikkiStatus(button.textContent?.trim() || "Department", "Department map updated");

      closeShavikkiOverlays();
    });
  });

  shelfCells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
      const row = cell.closest(".shavikki-shelf-row");
      const shelfName = row?.querySelector("span")?.textContent || "Hylly";
      const cellNumber = (index % 4) + 1;
      const state = cell.classList.contains("is-warning")
        ? "2-3 days left"
        : cell.classList.contains("is-critical")
          ? "0-1 days left"
          : "No action needed";

      shelfCells.forEach((item) => item.classList.remove("is-selected"));
      cell.classList.add("is-selected");

      setShavikkiStatus(`Shelf ${shelfName}, section ${cellNumber}`, state);

      if (productTitle) {
        productTitle.textContent = `Shelf ${shelfName}, section ${cellNumber}`;
      }

      if (productList) {
        productList.innerHTML = "";
        const products = (cell.dataset.products || "Ei tuotteita").split("|");

        products.forEach((product) => {
          const item = document.createElement("li");
          item.textContent = product;
          productList.append(item);
        });
      }

      if (productPanel) {
        closeShavikkiOverlays();
        scannedCount = 1;
        updateCount();
        productPanel.hidden = false;
      }
    });
  });

  productPanelClose?.addEventListener("click", () => {
    closeShavikkiOverlays();
    shelfCells.forEach((item) => item.classList.remove("is-selected"));

    updateShavikkiContext();
  });

  countMinus?.addEventListener("click", () => {
    scannedCount = Math.max(1, scannedCount - 1);
    updateCount();
  });

  countPlus?.addEventListener("click", () => {
    scannedCount += 1;
    updateCount();
  });

  scanButton?.addEventListener("click", () => {
    scannedCount += 1;
    updateCount();

    setShavikkiStatus(`${scannedCount} products`, "Scanned in this shelf section");
  });

  wasteButton?.addEventListener("click", () => {
    setShavikkiStatus(`${scannedCount} products`, "Marked as waste");

    closeShavikkiOverlays();
    shelfCells.forEach((item) => item.classList.remove("is-selected"));
  });

  backButton?.addEventListener("click", () => {
    closeShavikkiOverlays();
    shelfCells.forEach((item) => item.classList.remove("is-selected"));

    setShavikkiStatus("Shelf map", "Back to unit view");
  });

  populateProductGroups(activeSection);
  updateShavikkiContext();
}

const renderMoreCaseStudies = () => {
  if (!pageKey.startsWith("project-") || !mainElement) {
    return;
  }

  const currentIndex = caseStudies.findIndex((caseStudy) => caseStudy.id === pageKey);

  if (currentIndex === -1) {
    return;
  }

  const moreCases = caseStudies.filter((caseStudy) => caseStudy.id !== pageKey);

  const section = document.createElement("section");
  section.className = "more-cases";
  section.setAttribute("aria-labelledby", "more-cases-title");

  const heading = document.createElement("h2");
  heading.id = "more-cases-title";
  heading.textContent = "More case studies";
  section.append(heading);

  const list = document.createElement("div");
  list.className = "more-cases-list";

  moreCases.forEach((caseStudy) => {
    const link = document.createElement("a");
    link.className = "more-case-row";
    link.href = caseStudy.href;

    const media = document.createElement("span");
    media.className = "more-case-media";

    if (caseStudy.image) {
      const image = document.createElement("img");
      image.src = caseStudy.image;
      image.alt = "";
      media.append(image);
    }

    const content = document.createElement("span");
    content.className = "more-case-content";

    const title = document.createElement("span");
    title.className = "more-case-title";
    title.textContent = caseStudy.title;

    const meta = document.createElement("span");
    meta.className = "more-case-meta";
    meta.textContent = `${caseStudy.meta} / ${caseStudy.year}`;

    const description = document.createElement("span");
    description.className = "more-case-description";
    description.textContent = caseStudy.description;

    content.append(title, description);

    const arrow = document.createElement("span");
    arrow.className = "more-case-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "→";

    link.append(media, content, meta, arrow);
    list.append(link);
  });

  section.append(list);
  mainElement.append(section);
};

renderMoreCaseStudies();
