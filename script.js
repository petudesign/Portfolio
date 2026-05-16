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
  "project-smartgrocer": {
    intro:
      "This companion is tuned for the SmartGrocer case, with questions around planning, habits, and reducing household admin.",
    prompts: [
      {
        label: "Give me the 30-second version",
        answer:
          "This case explores how grocery planning could feel less like household admin. The focus is on repeated use, saved patterns, faster editing, and reducing the feeling of starting from zero every week.",
      },
      {
        label: "What is this project about?",
        answer:
          "A grocery-planning case about making weekly food decisions feel lighter, more organised, and less like another chore.",
      },
      {
        label: "What should I look for?",
        answer:
          "Look for how the product handles repeated use: defaults, saved patterns, editing speed, and small moments that reduce planning fatigue.",
      },
      {
        label: "What did Petteri learn?",
        answer:
          "He learned that planning tools need to get easier over time. If repeated tasks keep starting from zero, the product becomes another chore.",
      },
      {
        label: "What would he improve next?",
        answer:
          "He would test the repeat-use loop earlier and design more intentionally around shared household decisions.",
      },
      {
        label: "How does Petteri approach design?",
        answer:
          "He looks for the hidden work in a routine, then designs the system so that repeated tasks get easier over time.",
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
    description: "Reducing grocery food waste through a branded cabinet, employee workflow, and customer-facing concept.",
  },
  {
    id: "project-savings",
    title: "Savings App",
    meta: "Financial UX",
    year: "2026",
    href: "savings.html",
    image: "assets/savings-app.png",
    description: "Making savings progress feel clearer, calmer, and easier to act on.",
  },
  {
    id: "project-dashboard",
    title: "Dashboard",
    meta: "Product systems",
    year: "2026",
    href: "dashboard.html",
    image: "assets/dashboard.png",
    description: "Turning dense operational information into a surface people can scan and use.",
  },
  {
    id: "project-filter-news",
    title: "FilterNews",
    meta: "Attention UX",
    year: "2026",
    href: "filter-news.html",
    image: "assets/filternews-bbc.png",
    description: "Reducing cognitive load in news consumption through filtering and hierarchy.",
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
    id: "project-smartgrocer",
    title: "SmartGrocer",
    meta: "Planning UX",
    year: "2025",
    href: "smartgrocer.html",
    description: "Making weekly grocery planning feel lighter and easier to repeat.",
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
  const previewCard = video.closest(".project-media");

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
