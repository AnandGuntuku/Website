// ========== UNIFIED SCRIPT FOR ALL SECTIONS ==========

// ========== UPDATE FOR PROJECT SECTION ==========
const active = document.querySelector("nav li.active");

const projects = [
  {
    title: "Digitizing Business on Real Time Basis ",
    img: "project1.jpg",
    description: "df",
    toc: `<ul><li>Intro</li><li>Methods</li><li>Results</li></ul>`,
    category: "Professional"
  },
   {
    title: " Mobile Air Pollution Monitoring with Low-Cost IoT sensors ",
    img: "project1.jpg",
    description: "df",
    toc: `<ul><li>Intro</li><li>Methods</li><li>Results</li></ul>`,
    category: "Professional"
  },
  
{
    title: "App Development for Bus Tracking @ IIT Madras - 'TrackIIT' ",
    img: "project1.jpg",
    description: "df",
    toc: `<ul><li>Intro</li><li>Methods</li><li>Results</li></ul>`,
    category: "Professional"
  },
      {
    title: "Safety and Maintenance in Solar and Wind Substations",
    img: "project1.jpg",
    description: "Data mining approaches for segmenting customers based on behavior.",
    toc: `<ul><li>Intro</li><li>Methods</li><li>Results</li></ul>`,
    category: "Professional"
  },
  
  {
    title: "Allocated Seat Pricing in Airlines",
    img: "project1.jpg",
    description: "Data mining approaches for segmenting customers based on behavior.",
    toc: `<ul><li>Intro</li><li>Methods</li><li>Results</li></ul>`,
    category: "Professional"
  },
  
  {
    title: "Computational Framework for Estimating Air Pollution through Satellite Data",
    img: "project1.jpg",
    description: "Data mining approaches for segmenting customers based on behavior.",
    toc: `<ul><li>Intro</li><li>Methods</li><li>Results</li></ul>`,
    category: "Academic-DataScience-ML"
  },
  
  {
    title: "Data science and IoT based mobile monitoring framework for hyper-local PM2.5 assessment in urban setting",
    img: "project1.jpg",
    description: "Data mining approaches for segmenting customers based on behavior.",
    toc: `<ul><li> A case study of air pollution analysis during Diwali in Chennai </li> <li> A comparative study of analysis of air pollution in different zones viz. industrial, commercial, academic and residential </li> <li> Just like the fastest route and shortest route, can we also have cleanest route!? Yes, it is possible an it depends on weather, time of the day and many other factors!  </li> </ul>`,
    category: "Academic-DataScience-ML"
  },
  
  // For projects associated with more buttons as needed in HTML file too.
    {
    title: "Application of Reinforcement Learning in Microfluidics",
    img: "project1.jpg",
    description: "Data mining approaches for segmenting customers based on behavior.",
    toc: `<ul><li>Intro</li><li>Methods</li><li>Results</li></ul>`,
    category: "Academic-DataScience-ML"
  },
    {
    title: "Methane to Vinyl Acetate Monomer via Acetylene Intermediate and Natural Gas as Feedstock",
    img: "project2.jpg",
    description: "In this report a process is designed for the production of vinyl acetate monomer from natural gas via acetylene as an intermediate. This report was made as an assignment for Royal Dutch Shell to investigate whether this process might be viable in the future. It is expected that in the last half of the 21st century electricity and natural gas will become cheaper because of an abundance of renewable electricity. A process plant design is made for a production of 100 kton of vinyl acetate monomer per year with a purity of 99.8 wt.%. A plasma reactor is used for the first part of the process where the natural gas is converted into acetylene. In the second part of the process acetic acid is fed in a fixed bed reactor converted together with the acetylene to the final product vinyl acetate monomer. A safety analysis is conducted and the process is safe to execute. Heat integration has been applied to minimize the need of heating and cooling utilities. Environmental analysis were made to determine the environmental impact of the process. Furthermore, an economical analysis shows that for now, the process is not economical feasible. A decrease in natural gas and electricity prices will make the process more profitable. If the gas and electricity price will be halved, a return on investment of 14% is achieved, corresponding to a payback period of 24 years.",
    toc: `<ul><li>A feasibility peport for the Royal Dutch Shell as an industry-academia collaboration project with University of Twente. </li> 
    <li>An economical feasibility case study for Shell, Netherlands on a sustainable process for production of Vinyl Acetate Monomer(VAM) from Natural Gas via Acetylene as an intermediate, making it viable with an Electric Arc Plasma Reactor, since it is expected that electricity will get a lot cheaper in the next 20 years. </li>

<li>VAM is used in the making of a number of polymers and resins for adhesives, coatings, paints, films, textiles and other products, hence, it is a part of extensive range of products that are used in our daily lives.</li>

<li>This five-membered group project involved sequential steps like scope and design basis, conceptual design, developing Process Flow Diagram(PFD), safety, process control, equipment design, heat integration, economical and technical evaluation. </li></ul>`,
    category: "Academic-ChemicalEngineering"
  },
  
  {
    title: "Surface Water Changes Across Tibetan Plateau",
    img: "project2.jpg",
    description: "A course project on analysis of increasing water levels in Tibetan Plateau and its effects in the course of the rivers in South Asia and South East Asia.",
    toc: `<ul><li>A course project on analysis of increasing water levels in Tibetan Plateau and its effects in the course of the rivers in South Asia and South East Asia.</li></ul>`,
    category: "Academic-ChemicalEngineering"
  },
  
  {
    title: "Modelling of forces in Acoustophoresis - Soft Matter Fluidics & Interfaces",
    img: "project2.jpg",
    description: "Acoustophoresis is a mode of separation of particles by sound waves",
    toc: null,
    category: "Academic-ChemicalEngineering"
  },
  {
    title: "Diabetes Prediction - A Case of Healthcare Corporation",
    img: "project3.jpg",
    description: "predict diabetes using individual parameters like Height, Weight,Age, Sex, BMI, HC,WHR, etc., without doing any tests at all",
    toc: `<ul><li>Abstract</li><li>Methodology</li><li>Experiments</li></ul>`,
    category: "Academic-DataScience-ML"
  },
  {
    title: "Decision Support for University Timetables",
    img: "project4.jpg",
    description: "Dashboard for Terres Inovia oilseed research.",
    toc: `<ul><li>Overview</li><li>Dataset</li><li>How to Use</li></ul>`,
    category: "Academic-DataScience-ML"
  },
  {
    title: "Simulation of Design of Sulphuric Acid Plant using Aspen Plus",
    img: "project5.jpg",
    description: "Plant design on the basis of plant in Fertilizers and Checmicals Travencore, Kochi",
    toc: `<ul><li>Widgets</li><li>Server Logic</li><li>User Interface</li></ul>`,
    category: "Academic-ChemicalEngineering"
  },
  
  {
    title: "Empirical Modellinig in Biological Systems",
    img: "project5.jpg",
    description: "Research project .",
    toc: `<ul><li>Widgets</li><li>Server Logic</li><li>User Interface</li></ul>`,
    category: "Academic-ChemicalEngineering"
  }
  
  
];


// ========== UPDATE FOR EXPERIENCE SECTION ==========
const experienceData = {
  academic: [
    {
  "title": "Indian Institute of Technology, Madras",
  "details": "Master of Technology (M.Tech), Chemical Engineering, 2018 - 2020",
  "summary": "Completed M.Tech in Chemical Engineering with a CGPA of 8.94/10. Focused on data-driven environmental modelling, process engineering, and sustainability. The program combined rigorous theoretical foundations with hands-on computational and lab-based exposure.",
  "content": "<p><strong>🎓 Master’s Thesis:</strong> Developed a <em>computational framework</em> for estimating urban air pollution levels in <strong>Delhi and Chennai</strong> using satellite-based aerosol optical depth (AOD) data and ground-based Central Pollution Control Board (CPCB) sensor data. The model aimed to bridge spatial and temporal gaps in air quality data.</p><br><p><strong>📄 Research Publication:</strong> Co-authored a peer-reviewed research paper titled <em>“Hyperlocal air quality assessment using low-cost mobile sensing paradigm”</em>, published in the <strong>Building and Environment</strong> journal. The study explored the use of mobile sensors for real-time, location-specific pollution mapping to support urban environmental planning.</p><br><h3>📘 Major Subjects and Technical Focus Areas</h3><ul><li><strong>Environmental Data Modelling:</strong> Techniques to integrate satellite and ground-level datasets for pollution estimation and forecasting.</li><li><strong>Transport Phenomena:</strong> In-depth understanding of momentum, heat, and mass transfer in complex chemical systems.</li><li><strong>Process Control:</strong> Advanced control system design for real-time process optimization using feedback and feedforward mechanisms.</li><li><strong>Multiphase Flow & Reactor Design:</strong> Design and simulation of packed bed, bubble column, and fluidized bed reactors.</li><li><strong>Computational Fluid Dynamics (CFD):</strong> Numerical analysis using ANSYS Fluent and OpenFOAM to simulate flow and transport in chemical processes.</li><li><strong>Sustainable Process Design:</strong> Life Cycle Assessment (LCA), green chemistry, and energy-efficient process synthesis.</li><li><strong>Advanced Separation Processes:</strong> Techniques such as membrane separation, adsorption, and hybrid systems for pollution control and purification.</li></ul><br><p>The academic journey at IIT Madras sharpened my ability to merge <strong>domain knowledge, data science, and environmental systems thinking</strong>—a foundation I actively apply in policy, research, and engineering problem-solving.</p>"
},
    
 {
  "title": "University of Twente, Netherlands",
  "details": "Student Exchange Program, Feb - July, 2019",
  "summary": "Twente Exchange: Semester in Netherlands; Advanced Process Control; Cultural Exchange.",
  "content": "<p>My first international academic experience at the <strong>University of Twente</strong> was transformative—both intellectually and personally. The curriculum offered exceptional freedom to choose courses of interest, each enriched with practical applications, interdisciplinary collaboration, and real-world industry exposure. I embraced this opportunity fully, diving deep into projects that blended technical rigour with innovation and sustainability.</p> <br> <h3>🏭 Process Plant Design (PPD) – Industry Project with SHELL</h3><p>This flagship course revolved around an industrial-scale group project sponsored by <strong>SHELL</strong>. Our objective was to perform a comprehensive feasibility analysis for the design of a new chemical plant.</p><p><strong>Key contributions included:</strong></p><ul><li><strong>Raw Material Selection:</strong> Analyzed sourcing options considering availability, environmental impact, and cost-effectiveness.</li><li><strong>Plant Design:</strong> Developed process flow diagrams (PFDs), piping & instrumentation diagrams (P&IDs), and designed unit operations like reactors, heat exchangers, and separators.</li><li><strong>Process Safety:</strong> Conducted HAZOP (Hazard and Operability) studies and implemented safety interlocks to meet SHELL’s stringent safety requirements.</li><li><strong>Economic Evaluation:</strong> Carried out Net Present Value (NPV), Internal Rate of Return (IRR), and payback period analyses to assess economic viability.</li></ul><p>This course honed my <strong>teamwork</strong>, <strong>technical design</strong>, and <strong>strategic thinking</strong> abilities in a real-world engineering context.</p><h3> <br> 📊 Data Analytics</h3><p><strong>Sub-courses:</strong> Data Presentation & Visualization (DPV), Data Mining (DM)</p><p>These modules laid a robust foundation in <strong>data-driven decision-making</strong> using visualization and mining techniques.</p><ul><li><strong>DPV:</strong> Built interactive dashboards with Tableau and Python (Matplotlib, Seaborn); learned effective visual storytelling for actionable insights.</li><li><strong>DM:</strong> Applied machine learning algorithms like K-Means, Decision Trees, and Association Rule Mining to real-world datasets.</li></ul><p>These courses empowered me to extract, interpret, and communicate insights from complex data—a vital cross-sector skill.</p><h3> <br> ♻️ Sustainable Process Technology (Lab Course)</h3><p>This lab-intensive course focused on <strong>green chemistry principles</strong> and <strong>low-carbon process engineering</strong>.</p><ul><li>Executed experiments in waste-to-energy and catalytic hydrogenation.</li><li>Evaluated sustainability metrics like E-factor and atom economy.</li><li>Worked in teams to optimize reactions and minimize waste.</li></ul><p>It deepened my resolve to promote sustainable innovation in industrial processes.</p> <br> <h3>🧪 Capita Selecta: Soft Matter, Fluidics and Interfaces (SFI)</h3><p>This advanced course explored the behavior of soft materials and interfacial phenomena.</p><ul><li>Studied microfluidics, electrowetting, surface instabilities, and nanofluidics.</li><li>Designed simulations to model soft interface behavior.</li></ul><p>It expanded my understanding of mesoscale physics with applications in biomedical and consumer domains.</p><h3> <br> 🧠 Lean Six Sigma</h3><p>This interdisciplinary course focused on <strong>process improvement and quality control</strong>.</p><ul><li>Applied DMAIC, Ishikawa diagrams, control charts, and Pareto analysis.</li><li>Led a project to streamline a simulated production line and reduce defects.</li></ul><p>It sharpened my process-thinking mindset—centered on efficiency, quality, and impact.</p><h3> <br> 💧 Water and Climate</h3><p>An integrative course linking hydrology, climate science, and sustainability policy.</p><ul><li>Modeled rainfall-runoff systems and assessed watershed sensitivity around dams in Matlab.</li><li>Explored climate adaptation tools like smart urban planning taking the case study of The Netherlands facing a grave threat from sea water rise.</li></ul><p>It nurtured a systemic understanding of environmental governance—essential for future policy-driven work.</p><h3> <br> 🌟 Key Takeaway</h3><p>My time at the University of Twente was a springboard into interdisciplinary learning, global exposure, and practical application. Each course added depth to my skillset across <em>engineering, data analytics, sustainability, and systems thinking</em>. More than an academic stint, it was a journey of professional and personal growth.</p>"
},
  
{
  "title": "National Institute of Technology, Calicut",
  "details": "Bachelor's Degree in Chemical Engineering, 2013 - 2017",
  "summary": "Summary of Bachelors",
  "content": "this"
    }

  ],
  professional: [
    {
      title: " Data Scientist & Consultant ",
      details: "Client: Rasapoorna Foods, Sarvani Sweets; Nov,2024 – Feb,2025",
      summary: " Pricing/Combo Strategy, Creation of Real-time Dashboards",
      content: " This is the main content of Retail project"
    },
    
    {
      title: "Project Manager, Hyperlocal Labs",
      details: "Jul 2023 – Mar 2024",
      summary: "Project Kaatru:Led climate-tech team;Built AQ dashboard;Delivered MVP in 9 months.",
      content: " This is the main content of Kaatru project"
    },
    
        {
      title: "Systems Engineer, TCS",
      details: "Jul 2023 – Mar 2024",
      summary: "Worked as a Data Scientist for client side - Easy Jet Airlines.",
          content: " This is the main content of EasyJet Airlines project"
    }
    
  ],
  internships: [
    
    {
      title: "Workshop on Application of Satellite Remote Sensing For Air Quality & Health Research",
      details: "By Universities Space Research Associations (USRA), Public Health Foundation of India (PHFI), Gurgaon, Feb 2020",
      summary: "IITB Internship:CFD simulations;Python scripting;Academic exposure.",
      content: "This is the main content of HPCL training Workshop on "
    },
    
    {
      title: "New India Internship",
      details: "Chidambaram, Dec 2018 - Jan 2019",
      summary: "IITB Internship:CFD simulations;Python scripting;Academic exposure.",
      content: "This is the main content of HPCL training"
    },
    
    {
      title: "Summer Internship at IIT Madras",
      details: "May – Jul 2016",
      summary: "IITB Internship:CFD simulations;Python scripting;Academic exposure.",
      content: "This is the main content of HPCL training"
    },
    {
      title: "Role of Chemical Engineer in a Pharmaceutical Industry",
      details: "Eisai Pharmaceuticals, Dec 2015",
      summary: " Identified the mechanical operations in the unit",
      content: "This is the main content of HPCL training"
    },
    
    {
      title: "Training at HPCL Visakha Refinery",
      details: "June 2015",
      summary: " Crude Distillation Unit, Oil Maintenance and Storage, Fractional Catalytic Cracking Unit, Process Control Unit Room",
      content: "This is the main content of HPCL training"
    }
  ],
  
  Certifications: [
    
    {
      title: "Statistics",
      details: "Chidambaram, Dec 2018 - Jan 2019",
      summary: "IITB Internship:CFD simulations;Python scripting;Academic exposure.",
      content: "This is the main content of HPCL training"
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
        // <- ADD THIS LINE

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
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const type = tab.dataset.type;

      document.querySelectorAll(".experience-list").forEach(list => list.classList.add("hidden"));
      document.querySelector(`.${type}-list`).classList.remove("hidden");

      // ✅ Update hover + click events when switching tabs
      setupExperienceItemEvents(type);
    });
  });

  // Initial setup for first tab (active by default)
  const firstType = tabs[0].dataset.type;
  setupExperienceItemEvents(firstType);
}

function setupExperienceItemEvents(type) {
  const items = document.querySelectorAll(`.${type}-list .experience-item`);
  const summaryBox = document.getElementById("summary-box");

  items.forEach(item => {
    item.addEventListener("mouseover", () => {
      const rawSummary = item.getAttribute("data-summary");
      if (rawSummary.includes("<")) {
        summaryBox.innerHTML = rawSummary;
      } else {
        const [title, ...points] = rawSummary.split(";");
        summaryBox.innerHTML = `
          <h3>${title}</h3>
          <ul>${points.map(p => `<li>${p}</li>`).join("")}</ul>
        `;
      }
    });

    item.addEventListener("mouseout", () => {
      summaryBox.innerHTML = `<h3>Summary</h3><p>Hover over an entry to see details here.</p>`;
    });

    item.addEventListener("click", () => {
      const titleText = item.querySelector("h3").innerText;
      const experienceList = experienceData[type];
      const clickedItem = experienceList.find(exp => exp.title === titleText);

      const contentHTML = clickedItem?.content || "<p>No additional content available.</p>";
      openExperienceModal(contentHTML);
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
      card.classList.add("project-card");
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


 document.querySelectorAll(".project-filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".project-filters button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-category") || "all"; // ✅ fallback to all
    console.log("Filtering category:", filter); // 👀 debug
    renderProjects(filter);
  });
});


renderProjects();
 
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


  function renderBlogs(type = "all") {
    const blogsToRender = type === "all" ? allBlogs : allBlogs.filter(blog => blog.type === type);


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
    const modal = document.getElementById("blogModal");
    modal.style.display = "none";
  }
  window.addEventListener("click", (e) => {
  const modal = document.getElementById("blogModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

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


document.getElementById('menu-toggle').addEventListener('click', function () {
  document.querySelector('aside').classList.toggle('active');
});

