// ========== UNIFIED SCRIPT FOR ALL SECTIONS ==========

// ========== UPDATE FOR PROJECT SECTION ==========

const projects = [
  {
    title: "How to arrive at Combo Offers",
    img: "project1.jpg",
    description: "Data mining approach for segmenting products based on customer purchases.",
    toc: `<ul><li>Intro</li><li>Methods</li><li>Results</li></ul>`,
    category: "Professional"
  },
  // For projects associated with more buttons as needed in HTML file too.
  {
    title: "Hexbin Visualization",
    img: "project2.jpg",
    description: "Population density visualization using hexbin maps.",
    toc: null,
    category: "Professional"
  },
  {
    title: "NLP Trends 2024",
    img: "project3.jpg",
    description: "A scientific paper analyzing NLP model trends in 2024.",
    toc: `<ul><li>Abstract</li><li>Methodology</li><li>Experiments</li></ul>`,
    category: "AI"
  },
  {
    title: "Terres Inovia",
    img: "project4.jpg",
    description: "Dashboard for Terres Inovia oilseed research.",
    toc: `<ul><li>Overview</li><li>Dataset</li><li>How to Use</li></ul>`,
    category: "Dashboard"
  },
  {
    title: "Shiny App Demo",
    img: "project5.jpg",
    description: "Interactive visualization demo using R Shiny.",
    toc: `<ul><li>Widgets</li><li>Server Logic</li><li>User Interface</li></ul>`,
    category: "Tools"
  }
];


// ========== UPDATE FOR BLOGS SECTION ==========


const blogData = {
  blogs: [
    {
      title: "Building a Math Textbook with Claude",
      date: "2025-01-18",
      category: "Articles",
      image: "blog1.jpg",
      summary: "Using Claude to co-write textbooks with Prof. Ghrist.",
      content: "This blog discusses how Claude helped build a math textbook with Prof. Ghrist. this also creates a different perspective of the claude over the bank of america and its typological error over quantum menace and its subsequent impact."
    },
    {
      title: "Startup with AIS",
      date: "2024-12-17",
      category: "Startup",
      image: "blog2.jpg",
      summary: "What it takes to bootstrap AI startups.",
      content: "Insights into building a startup using AI frameworks and tools."
    }
  ]
};


// ========== UPDATE FOR EXPERIENCE SECTION ==========
const experienceData = {
  academic: [
    {
      title: "Indian Institute of Technology, Madras (IITM)",
      details: "M.Tech – Chemical Engineering<br>2018 - 2020",
      summary: "IIT Madras:M.Tech in Chemical Engineering;Focus on transport phenomena;Research in catalysis."
    },
    {
      title: "University of Twente",
      details: "Student Exchange – Feb 01 to July 2019",
      summary: "Twente Exchange:Semester in Netherlands;Advanced process control;Cultural exchange."
    }
  ],
  professional: [
    {
      title: "Project Manager, Hyperlocal Labs",
      details: "Jul 2023 – Mar 2024",
      summary: "Project Kaatru:Led climate-tech team;Built AQ dashboard;Delivered MVP in 9 months."
    }
  ],
  internships: [
    {
      title: "Summer Internship at IIT Bombay",
      details: "May – Jul 2016",
      summary: "IITB Internship:CFD simulations;Python scripting;Academic exposure."
    }
  ],
  books: [
    {
      title: "Author of 'Math Tales'",
      details: "Published Jan 2024",
      summary: "Math Tales:Applied math stories;Published on Kindle;Used in workshops."
    }
  ],
  boo: [
    {
      title: "Author of 'Math Tales'",
      details: "Published Jan 2024",
      summary: "Math Tales:Applied math stories;Published on Kindle;Used in workshops."
    }
  ],
  interests: [
    {
      title: "Photography Enthusiast",
      details: "Ongoing",
      summary: "Photography:Wildlife & travel;Instagram gallery;Local photo walks."
    }
  ]
};


// ========== UPDATE FOR SERVICE SECTION ==========

const serviceData = [
  {
    title: "AI Consulting",
    slides: [
      {
        image: "data_cleaning1.jpg",
        text: "Data Cleaning",
        description: "We clean the data according to the needs of the client.",
        details: "This involves removing duplicates, fixing inconsistencies, standardizing formats, and handling missing data using domain-informed logic."
      },
      {
        image: "data_viz1.jpg",
        text: "Data Visualization",
        description: "Transform raw data into meaningful visual insights.",
        details: "We use tools like Power BI, Tableau, and Python's matplotlib/seaborn to build dashboards and graphs that align with user objectives."
      }
    ]
  },
  {
    title: "Resume Review",
    slides: [
      {
        image: "resume_review1.jpg",
        text: "ATS Optimization",
        description: "Make your resume compatible with ATS scanners.",
        details: "We analyze your resume's format and keyword density to ensure high ATS score, enhancing your job application success."
      },
      {
        image: "keyword_targeting.jpg",
        text: "Keyword Targeting",
        description: "Boost relevance by targeting specific job descriptions.",
        details: "We rewrite your resume section-by-section using NLP techniques to match specific job ads and hiring manager expectations."
      }
    ]
  }
];



// ========== UPDATE FOR RESUME DATA ==========
const resumeData = [
  {
    title: "Data Scientist Resume",
    thumbnail: "resume_ds_thumb.jpg",
    hoverImage: "resume_ds_hover.jpg",
    fullImage: "resume_ds_full.jpg",
    pdf: "resume_ds.pdf"
  },
  {
    title: "Consultant Resume",
    thumbnail: "resume_consult_thumb.jpg",
    hoverImage: "resume_consult_hover.jpg",
    fullImage: "resume_consult_full.jpg",
    pdf: "resume_consult.pdf"
  }
  // Add more resumes as needed
];



// ========== RENDER RESUME CARDS ==========
function renderResumes() {
  const container = document.querySelector(".resume-grid");
  container.innerHTML = "";

  const fallbackThumb = "default_thumb.jpg";
  const fallbackHover = "default_hover.jpg";
  const fallbackFull = "default_full.jpg";

  resumeData.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("resume-card");

    // Fallback handling
    const thumbnail = item.thumbnail || fallbackThumb;
    const hoverImage = item.hoverImage || fallbackHover;
    const fullImage = item.fullImage || fallbackFull;
    const pdf = item.pdf || "#";

    card.innerHTML = `
      <div class="resume-image-wrapper">
        <img src="${thumbnail}" 
             alt="${item.title}" 
             data-thumb="${thumbnail}" 
             data-hover="${hoverImage}" 
             onerror="this.src='${fallbackThumb}'"/>
        <a class="download-icon" href="${pdf}" ${pdf !== "#" ? "download" : ""} title="Download Resume">⬇</a>
      </div>
      <div class="resume-title">${item.title}</div>
    `;

    // Hover image swap
    const img = card.querySelector("img");
    img.addEventListener("mouseenter", () => {
      img.src = img.getAttribute("data-hover");
    });
    img.addEventListener("mouseleave", () => {
      img.src = img.getAttribute("data-thumb");
    });

    // Modal on click
    img.addEventListener("click", () => {
      openResumeModal(fullImage, pdf);
    });

    container.appendChild(card);
  });
}



document.addEventListener("DOMContentLoaded", () => {
  /* SECTION SWITCHING */
  const navItems = document.querySelectorAll("nav li[data-target]");
  const sections = document.querySelectorAll(".content-inner > section");

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const targetId = item.getAttribute("data-target");

      navItems.forEach(nav => nav.classList.remove("active"));
      item.classList.add("active");

      sections.forEach(section => {
        section.classList.add("hidden");
      });

      const activeSection = document.getElementById(targetId);
      if (activeSection) activeSection.classList.remove("hidden");

      updateRightPanel(targetId);
      
      if (targetId === "resume-section") {
      renderResumes();
    }
      
    });
  });

  function updateRightPanel(sectionId) {
    const right = document.getElementById("right-panel");

    if (sectionId === "home-section") {
    right.innerHTML = `
      <div class="search-bar">
        <input type="text" placeholder="Search tags across the site..." />
      </div>
      <div id="blog-summary">
        <p>Search feature coming soon.</p>
      </div>
    `;
    }
    if (sectionId === "experience-section") {
      right.innerHTML = `
        <div id="summary-box">
          <h3>Summary</h3>
          <p>Hover over an entry to see details here.</p>
        </div>
      `;
      setupExperienceSummary();
    } else if (sectionId === "projects-section") {
      right.innerHTML = `
        <div id="project-toc">
          <p>Hover over a project to view its table of contents here.</p>
        </div>
      `;
    } else if (sectionId === "services-section") {
      right.innerHTML = `
        <div class="service-description">
          <h2>Hover to see details</h2>
          <p>Move your mouse over an image to view its description here.</p>
        </div>
      `;
      initCarousels();
    } else if (sectionId === "blog-section") {
      right.innerHTML = `
        <div id="blog-summary">
      <p>Hover over a blog post to see the summary here.</p>
    </div>
      `;
      setupBlogHoverPreview(); // ✅ Add this line
    } 
  }

  // ========== EXPERIENCE SECTION ==========
  function setupExperienceSummary() {
  const tabsContainer = document.querySelector(".tabs");
  const contentContainer = document.getElementById("experience-section");

  tabsContainer.innerHTML = ""; // Clear existing tabs

  Object.keys(experienceData).forEach(key => {
    // Create Tab
    const tab = document.createElement("span");
    tab.classList.add("tab");
    tab.dataset.type = key;
    tab.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    tabsContainer.appendChild(tab);

    // Create Content List
    const list = document.createElement("div");
    list.classList.add("experience-list", `${key}-list`, "hidden");
    experienceData[key].forEach(item => {
      const div = document.createElement("div");
      div.classList.add("experience-item");
      div.setAttribute("data-summary", item.summary);
      div.innerHTML = `<h3>${item.title}</h3><p>${item.details}</p>`;
      list.appendChild(div);
    });

    contentContainer.appendChild(list);
  });

  // Set first tab active
  tabsContainer.querySelector(".tab").classList.add("active");
  document.querySelector(".experience-list").classList.remove("hidden");

  setupExperienceEvents(); // Attach events to new DOM
}
  
  
function setupExperienceEvents() {
  const tabs = document.querySelectorAll(".tab");
  const summaryBox = document.getElementById("summary-box");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const type = tab.dataset.type;
      document.querySelectorAll(".experience-list").forEach(list => list.classList.add("hidden"));
      document.querySelector(`.${type}-list`).classList.remove("hidden");
    });
  });

  const items = document.querySelectorAll(".experience-item");

  items.forEach(item => {
    item.addEventListener("mouseover", () => {
      const rawSummary = item.getAttribute("data-summary");
      const [title, ...points] = rawSummary.split(";");
      summaryBox.innerHTML = `
        <h3>${title}</h3>
        <ul>${points.map(p => `<li>${p}</li>`).join("")}</ul>
      `;
    });

    item.addEventListener("mouseout", () => {
      summaryBox.innerHTML = `<h3>Summary</h3><p>Hover over an entry to see details here.</p>`;
    });

    item.addEventListener("click", () => {
      const rawSummary = item.getAttribute("data-summary");
      const [title, ...points] = rawSummary.split(";");
      const content = `<h2>${title}</h2><ul>${points.map(p => `<li>${p}</li>`).join("")}</ul>`;
      openExperienceModal(content);
    });
  });
}

  


  // ========== PROJECT SECTION ==========
  const modal = document.getElementById("projectModal");
  const modalImg = document.getElementById("modalImg");
  const modalText = document.getElementById("modalText");
  const modalToc = document.getElementById("modalToc");

  

  window.openModal = function(index) {
    const project = projects[index];
    modalImg.src = project.img;
    modalText.innerHTML = `<h2>${project.title}</h2><p>${project.description}</p>`;
    modalToc.innerHTML = project.toc || "<em>Table of contents not specified</em>";
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  window.closeModal = function() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  };

  window.filterProjects = function(category) {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      const match = card.classList.contains(category);
      card.style.display = (category === 'all' || match) ? 'block' : 'none';
    });
  };
  
  function renderProjects(filter = "all") {
  const container = document.querySelector(".project-grid");
  container.innerHTML = "";

  projects.forEach((proj, index) => {
    if (filter === "all" || proj.category === filter) {
      const card = document.createElement("div");
      card.classList.add("project-card", proj.category);
      card.innerHTML = `
        <img src="${proj.img}" alt="${proj.title}" />
        <div class="title">${proj.title}</div>
        <div class="overlay">${proj.description}</div>
      `;

      card.addEventListener("click", () => openModal(index));
      card.addEventListener("mouseenter", () => {
        const tocPreview = document.getElementById("project-toc");
        if (tocPreview) {
          tocPreview.innerHTML = proj.toc || "<em>Table of contents not specified</em>";
        }
      });

      card.addEventListener("mouseleave", () => {
        const tocPreview = document.getElementById("project-toc");
        if (tocPreview) {
          tocPreview.innerHTML = "<p>Hover over a project to view its table of contents here.</p>";
        }
      });

      container.appendChild(card);
    }
  });
}  
  renderProjects();
  // ✅ Add filter button event listeners for projects
document.querySelectorAll(".project-filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.innerText.trim();
    renderProjects(filter === "Show All" ? "all" : filter);
  });
});

 
  function setupBlogHoverPreview() {
  const summaryBox = document.getElementById("blog-summary");
  const blogCards = document.querySelectorAll(".blog-item");

  if (!summaryBox) return;

  blogCards.forEach((card, index) => {
    card.addEventListener("mouseenter", () => {
      const post = blogData.blogs[index];
      summaryBox.innerHTML = `
        <h3>${post.title}</h3>
        <p><strong>${post.date}</strong></p>
        <p>${post.content.slice(0, 120)}...</p>
      `;
    });

    card.addEventListener("mouseleave", () => {
      summaryBox.innerHTML = `<p>Hover over a blog post to see the summary here.</p>`;
    });
  });
}


  // ========== BLOG SECTION ==========
  
  fetch('content.json')
  .then(response => response.json())
  .then(data => {
 
    renderExperienceFromData(data.experience);
    renderProjectsFromData(data.projects);
  });
  
  const blogModal = document.getElementById("blogModal");
  const blogModalText = document.getElementById("blogModalText");


  function renderBlogs(filter = 'all') {
  const blogList = document.querySelector(".blog-list");
  blogList.innerHTML = "";

  blogData.blogs.forEach((post, index) => {
    if (filter === 'all' || post.category.toLowerCase() === filter.toLowerCase()) {
      const item = document.createElement("div");
      item.classList.add("blog-item");
      item.setAttribute("data-index", index);
      item.innerHTML = `
        <div class="blog-meta">
          <h3>${post.title}</h3>
          <p>${post.date}</p>
        </div>
        <img src="${post.image}" alt="${post.title}" />
      `;
      item.addEventListener("click", () => openBlogModalFromObject(post));
      item.addEventListener("mouseenter", () => updateBlogHoverSummary(post));
      item.addEventListener("mouseleave", () => resetBlogHoverSummary());
      blogList.appendChild(item);
    }
  });
}

function updateBlogHoverSummary(post) {
  const summaryBox = document.getElementById("blog-summary");
  if (summaryBox) {
    summaryBox.innerHTML = `
      <h3>${post.title}</h3>
      <p><strong>${post.date}</strong></p>
      <p>${post.summary}</p>
    `;
  }
}

function resetBlogHoverSummary() {
  const summaryBox = document.getElementById("blog-summary");
  if (summaryBox) {
    summaryBox.innerHTML = `<p>Hover over a blog post to see the summary here.</p>`;
  }
}


document.querySelectorAll(".blog-filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.innerText.trim().toLowerCase();
    renderBlogs(filter === "show all" ? 'all' : filter);
  });
});

  
  function openBlogModalFromObject(post) {
  const blogModal = document.getElementById("blogModal");
  const blogModalText = document.getElementById("blogModalText");

  blogModalText.innerHTML = `
    <h2>${post.title}</h2>
    <p><strong>${post.date}</strong></p>
    <p>${post.content}</p>
  `;

  blogModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}


  function openBlogModal(index) {
    const post = blogPosts[index];
    blogModalText.innerHTML = `<h2>${post.title}</h2><p>${post.date}</p><p>${post.content}</p>`;
    blogModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closeBlogModal() {
    blogModal.style.display = "none";
    document.body.style.overflow = "auto";
  }

  document.querySelectorAll(".blog-filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.innerText.trim().toLowerCase();
    renderBlogs(filter === "show all" ? 'all' : filter);
  });
});

renderBlogs();

  // ========== SERVICES SECTION ==========


  function initCarousels() {
  const containers = document.querySelectorAll(".service-block");
  const rightPane = document.querySelector(".right .service-description");

  containers.forEach((container, serviceIndex) => {
    let currentIndex = 0;
    const imageEl = container.querySelector(".service-image");

    function updateSlide(index) {
      const slide = serviceData[serviceIndex].slides[index];
      imageEl.src = slide.image;
      imageEl.alt = slide.text;
      imageEl.setAttribute("data-index", index);
      imageEl.setAttribute("data-service", serviceIndex);

      if (rightPane) {
        rightPane.innerHTML = `
          <h2>${serviceData[serviceIndex].title}</h2>
          <h3>${slide.text}</h3>
          <p>${slide.description}</p>
        `;
      }
    }

    const leftArrow = container.querySelector(".arrow.left");
    const rightArrow = container.querySelector(".arrow.right");

    leftArrow.addEventListener("click", () => {
      leftArrow.classList.add("clicked");
      setTimeout(() => leftArrow.classList.remove("clicked"), 150);
      currentIndex = (currentIndex - 1 + serviceData[serviceIndex].slides.length) % serviceData[serviceIndex].slides.length;
      updateSlide(currentIndex);
    });

    rightArrow.addEventListener("click", () => {
      rightArrow.classList.add("clicked");
      setTimeout(() => rightArrow.classList.remove("clicked"), 150);
      currentIndex = (currentIndex + 1) % serviceData[serviceIndex].slides.length;
      updateSlide(currentIndex);
    });

    imageEl.addEventListener("click", () => {
      const slide = serviceData[serviceIndex].slides[currentIndex];
      openServiceModal(serviceData[serviceIndex].title, slide.text, slide.details);
    });

    updateSlide(currentIndex);
  });
}

  
  function openServiceModal(serviceTitle, subTitle, details) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.style.display = "flex";

  modal.innerHTML = `
    <div class="modal-content" style="max-height: 80vh; overflow-y: auto;">
      <button class="close-btn" onclick="this.closest('.modal').remove(); document.body.style.overflow='auto';">&times;</button>
      <div class="modal-body">
        <div class="modal-text">
          <h2>${serviceTitle} - ${subTitle}</h2>
          <p>${details}</p>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = "hidden";
}


  // Initialize defaults
  const active = document.querySelector("nav li.active");
  if (active) {
    const firstSection = active.getAttribute("data-target");
    if (firstSection === "experience-section") setupExperienceSummary();
    if (firstSection === "services-section") initCarousels();
  }

  window.closeBlogModal = closeBlogModal;
});


// ========== RESUME MODAL ==========
function openResumeModal(imageSrc, pdfLink) {
  const modal = document.getElementById("resumeModal");
  const modalImage = document.getElementById("resumeModalImage");
  const downloadBtn = document.getElementById("resumeDownloadBtn");

  modalImage.src = imageSrc;
  downloadBtn.href = pdfLink;

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeResumeModal() {
  const modal = document.getElementById("resumeModal");
  modal.style.display = "none";
  document.body.style.overflow = "";
}


// ✅ ADD THIS BLOCK BELOW
  const colorButtons = document.querySelectorAll('.color-btn');
  colorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-color');
      const root = document.documentElement;
      const newMedium = getComputedStyle(root).getPropertyValue(selected);
      root.style.setProperty('--medium', newMedium.trim());
    });
  });

function openExperienceModal(contentHTML) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.style.display = "flex";

  modal.innerHTML = `
    <div class="modal-content" style="max-height: 80vh; overflow-y: auto;">
      <button class="close-btn" onclick="this.closest('.modal').remove(); document.body.style.overflow='auto';">&times;</button>
      <div class="modal-body">
        <div class="modal-text" style="flex: 1;">${contentHTML}</div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = "hidden";
}



