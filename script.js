const data = window.portfolioData || {};
let activeProjectFilter = "All";

function createList(items = []) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function createEvidenceLinks(project) {
  const links = [
    { label: "View repository", url: project.repoUrl },
    { label: "Watch demo", url: project.demoUrl },
    { label: "LinkedIn post", url: project.linkedinPostUrl },
    { label: "Download APK", url: project.apkUrl },
    { label: "Project report", url: project.reportUrl },
    { label: "Visit site", url: project.websiteUrl }
  ].filter((link) => Boolean(link.url));

  if (!links.length) {
    return `<span class="evidence-status">Repository/private link pending</span>`;
  }

  return links.map((link) => `
    <a class="project-link" href="${link.url}" target="_blank" rel="noopener">${link.label}</a>
  `).join("");
}

function createEvidenceControl(item) {
  if (item.status === "verified" && item.evidenceUrl) {
    return `<a href="${item.evidenceUrl}" target="_blank" rel="noopener">${item.linkLabel || "LinkedIn post"}</a>`;
  }

  if (item.status === "pending") {
    return `<span class="evidence-status">Link pending</span>`;
  }

  return `<span class="evidence-status">No public link</span>`;
}

function createSecondaryEvidenceLink(item) {
  if (!item.secondaryUrl) return "";
  return `<a href="${item.secondaryUrl}" target="_blank" rel="noopener">Visit site</a>`;
}

function renderStats() {
  const strip = document.getElementById("stats-strip");
  if (!strip) return;

  strip.innerHTML = (data.stats || []).map((stat) => `
    <article class="stat-card">
      <strong>${stat.value}</strong>
      <span>${stat.label}</span>
    </article>
  `).join("");
}

function renderAbout() {
  const aboutCopy = document.getElementById("about-copy");
  const educationCard = document.getElementById("education-card");
  const learningList = document.getElementById("learning-list");
  const about = data.about || {};

  if (aboutCopy) aboutCopy.textContent = about.copy || "";

  if (educationCard) {
    educationCard.innerHTML = `
      <p class="eyebrow">Education</p>
      ${(about.education || []).map((item) => `
        <article class="education-row">
          <strong>${item.label}</strong>
          <span>${item.detail}</span>
          <small>${item.meta}</small>
        </article>
      `).join("")}
    `;
  }

  if (learningList) {
    learningList.innerHTML = (about.learning || []).map((item) => `<span>${item}</span>`).join("");
  }
}

function renderExperience() {
  const grid = document.getElementById("experience-grid");
  if (!grid) return;

  grid.innerHTML = (data.experiences || []).map((item, index) => `
    <article class="experience-card reveal-up delay-${index}">
      <div class="card-topline">
        <span>${item.duration}</span>
        <span>${item.company}</span>
      </div>
      <h3>${item.role}</h3>
      <p>${item.summary}</p>
      <ul class="feature-list">${createList(item.bullets)}</ul>
      <p class="tech-line">${item.tech}</p>
      <div class="project-links">
        ${item.evidenceUrl ? `<a class="project-link" href="${item.evidenceUrl}" target="_blank" rel="noopener">LinkedIn post</a>` : ""}
        ${item.githubUrl ? `<a class="project-link" href="${item.githubUrl}" target="_blank" rel="noopener">GitHub projects</a>` : ""}
      </div>
    </article>
  `).join("");
}

function renderCaseStudy() {
  const grid = document.getElementById("case-study-grid");
  const caseStudy = data.featuredCaseStudy;
  if (!grid || !caseStudy) return;

  grid.innerHTML = `
    <figure class="case-visual reveal-up">
      <img src="${caseStudy.image}" alt="${caseStudy.title} project visual" loading="lazy" />
      <figcaption>${caseStudy.title}</figcaption>
    </figure>
    <div class="case-cards">
      ${caseStudy.cards.map((card, index) => `
        <article class="case-card reveal-up delay-${index % 3}">
          <span class="mono-label">${card.label}</span>
          <p>${card.text}</p>
        </article>
      `).join("")}
      <div class="case-actions">
        <a class="btn primary-btn case-link" href="${caseStudy.repoUrl}" target="_blank" rel="noopener">View Memora repository</a>
        <a class="btn ghost-btn case-link" href="${caseStudy.reportUrl}" target="_blank" rel="noopener">Download project report</a>
        <a class="btn ghost-btn case-link" href="${caseStudy.linkedinPostUrl}" target="_blank" rel="noopener">Top 15 LinkedIn post</a>
      </div>
    </div>
  `;
}

function renderProjectFilters() {
  const filters = document.getElementById("project-filters");
  if (!filters) return;

  filters.innerHTML = (data.filters || ["All"]).map((filter) => `
    <button class="filter-btn ${filter === activeProjectFilter ? "active" : ""}" type="button" data-filter="${filter}" aria-pressed="${filter === activeProjectFilter}">
      ${filter}
    </button>
  `).join("");

  filters.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      activeProjectFilter = button.dataset.filter || "All";
      renderProjectFilters();
      renderProjects();
      setupReveal();
    });
  });
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const projects = (data.projects || []).filter((project) => (
    activeProjectFilter === "All" || project.category === activeProjectFilter
  ));

  grid.innerHTML = projects.map((project, index) => `
    <article class="project-card reveal-up delay-${index % 3}">
      ${project.image ? `
        <figure class="project-media">
          <img src="${project.image}" alt="${project.title} screenshot" loading="lazy" />
        </figure>
      ` : ""}
      <p class="project-badge">${project.badge}</p>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <ul class="project-list">${createList(project.bullets)}</ul>
      <p class="tech-line">${project.tech}</p>
      <div class="project-links">${createEvidenceLinks(project)}</div>
    </article>
  `).join("");
}

function renderSkills() {
  const matrix = document.getElementById("skills-matrix");
  if (!matrix) return;

  matrix.innerHTML = (data.skills || []).map((group, index) => `
    <article class="skill-card reveal-up delay-${index % 3}">
      <span class="mono-label">${group.level}</span>
      <h3>${group.title}</h3>
      <div class="skill-tags">
        ${group.items.map((item) => `<span>${item}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderEvidence() {
  const highlights = document.getElementById("evidence-highlights");
  const certList = document.getElementById("certifications-list");
  const awardsList = document.getElementById("awards-list");

  if (highlights) {
    highlights.innerHTML = (data.featuredEvidence || []).map((item, index) => `
      <article class="evidence-feature-card reveal-up delay-${index % 3}">
        <span class="mono-label">${item.label}</span>
        <h3>${item.title}</h3>
        <p>${item.detail}</p>
        <div class="project-links">
          <a class="project-link" href="${item.evidenceUrl}" target="_blank" rel="noopener">LinkedIn post</a>
          ${createSecondaryEvidenceLink(item)}
        </div>
      </article>
    `).join("");
  }

  if (certList) {
    certList.innerHTML = (data.certifications || []).map((item) => `
      <article class="evidence-item reveal-up">
        <span>${item.title}</span>
        ${item.imageUrl ? `<button class="certificate-view-btn" type="button" data-image="${item.imageUrl}" data-title="${item.title}">View certificate</button>` : createEvidenceControl(item)}
      </article>
    `).join("");
  }

  if (awardsList) {
    awardsList.innerHTML = (data.awards || []).map((item) => `
      <article class="evidence-item evidence-item-rich reveal-up">
        <div>
          <span>${item.title}</span>
          <p>${item.detail}</p>
        </div>
        ${createEvidenceControl(item)}
      </article>
    `).join("");
  }
}

function setupCertificateModal() {
  const modal = document.getElementById("certificate-modal");
  const modalImage = document.getElementById("modal-image");
  const modalCaption = document.getElementById("modal-caption");
  const modalClose = document.getElementById("modal-close");
  if (!modal || !modalImage || !modalCaption || !modalClose) return;

  document.querySelectorAll(".certificate-view-btn").forEach((button) => {
    button.addEventListener("click", () => {
      modalImage.src = button.dataset.image || "";
      modalImage.alt = button.dataset.title || "Certificate image";
      modalCaption.textContent = button.dataset.title || "";
      modal.setAttribute("aria-hidden", "false");
    });
  });

  modalClose.addEventListener("click", () => {
    modal.setAttribute("aria-hidden", "true");
    modalImage.removeAttribute("src");
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) modalClose.click();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
      modalClose.click();
    }
  });
}

function setupNav() {
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("nav-toggle");

  if (nav && navToggle) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

function setupReveal() {
  const revealItems = document.querySelectorAll(".reveal-up:not(.reveal-visible)");
  if (!revealItems.length) return;

  document.body.classList.add("js-reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("reveal-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px" }
  );

  revealItems.forEach((item) => observer.observe(item));
}

renderStats();
renderAbout();
renderExperience();
renderCaseStudy();
renderProjectFilters();
renderProjects();
renderSkills();
renderEvidence();
setupCertificateModal();
setupNav();
setupReveal();

const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();
