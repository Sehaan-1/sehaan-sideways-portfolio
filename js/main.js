const SEHAAN_PROJECTS = [
      {
        id: 'sdip-sports-platform',
        index: '01',
        year: '2026',
        title: 'SDIP: Sports Data Platform',
        category: 'Enterprise Ingestion & Telemetry',
        deliverables: 'Java · Spring Boot · PostgreSQL · Docker',
        client: 'github.com/Sehaan-1',
        repoUrl: 'https://github.com/Sehaan-1/sports-data-integration-platform',
        liveDemoUrl: 'https://sehaan-1.github.io/sports-data-integration-platform/dashboard.html?demo=1',
        image: 'assets/images/project-10-sdip.jpg',
        description: 'Streaming CSV/XLSX ingestion engine for Catapult GPS and VALD ForceDecks data featuring idempotent upserts, tiered athlete identity resolution, four-role JWT RBAC, squad row-scoping, and 49 JUnit tests.'
      },
      {
        id: 'cloudguard-finops',
        index: '02',
        year: '2026',
        title: 'CloudGuard: FinOps Platform',
        category: 'Multi-Cloud Optimization & FinOps',
        deliverables: 'Python · FastAPI · Plotly Dash · PostgreSQL · Redis · Docker',
        client: 'github.com/Sehaan-1',
        repoUrl: 'https://github.com/Sehaan-1/CloudGuard',
        liveDemoUrl: 'https://render.com/deploy?repo=https://github.com/Sehaan-1/CloudGuard',
        image: 'assets/images/project-11-cloudguard.jpg',
        description: 'Multi-cloud AWS & Azure cost ingestion and waste scanner for idle compute and orphaned storage. Delivers FastAPI and Plotly Dash interfaces with ranked rightsizing recommendations, processing 100,000+ records in <5s with 217 CI tests.'
      },
      {
        id: 'deltasync-p2p',
        index: '03',
        year: '2025',
        title: 'DeltaSync: P2P File Sync Engine',
        category: 'Distributed Systems & Networking',
        deliverables: 'C# · .NET · SQLite · TCP · TLS 1.3',
        client: 'github.com/Sehaan-1',
        repoUrl: 'https://github.com/Sehaan-1/DeltaSync',
        image: 'assets/images/project-13-deltasync.jpg',
        description: 'Peer-to-peer file synchronization engine with Merkle-tree indexing, FastCDC delta transfer, vector-clock conflict resolution, SQLite state, and length-prefixed TCP streaming with TLS 1.3 and bounded 8 MB backpressure.'
      },
      {
        id: 'gmail-names-to-excel',
        index: '04',
        year: '2025',
        title: 'Gmail Sender Names to Excel',
        category: 'Data Extraction & Automation',
        deliverables: 'Python · Gmail API · Google Apps Script · openpyxl',
        client: 'github.com/Sehaan-1',
        repoUrl: 'https://github.com/Sehaan-1/gmail-names-to-excel',
        image: 'assets/images/project-12-gmail-excel.jpg',
        description: 'Automated entity normalization and classification pipeline separating people vs bots/companies across 43 senders in 6 writing systems, with accent-insensitive deduplication, formula-safe XLSX exports, and 90 offline tests.'
      },
      {
        id: 'tender-royal-pulse',
        index: '05',
        year: '2026',
        title: 'Tender Royal Pulse',
        category: 'Full-Stack & Automation',
        deliverables: 'Python · Playwright · Pydantic · FastAPI · React',
        client: 'github.com/Sehaan-1',
        repoUrl: 'https://github.com/Sehaan-1/Tender-Royal-Pulse',
        image: 'assets/images/project-01-tender-royal-pulse.jpg',
        description: 'Resilient public procurement crawler and full-stack dashboard classifying government tenders using zero-shot BART, FastAPI, Playwright, and React.'
      },
      {
        id: 'crossborder-legal-rag',
        index: '06',
        year: '2026',
        title: 'Cross-Border Legal RAG',
        category: 'Hybrid Retrieval & Rules',
        deliverables: 'Python · FAISS · BM25 · Groq · Guardrails',
        client: 'github.com/Sehaan-1',
        repoUrl: 'https://github.com/Sehaan-1/crossborder-legal-rag',
        image: 'assets/images/project-02-crossborder-legal-rag.jpg',
        description: 'Hybrid retrieval (BM25 + FAISS) + deterministic rule layer + measurable evaluation pipeline engineered for EU Private International Law regulations.'
      },
      {
        id: 'sar-surveillance',
        index: '07',
        year: '2025',
        title: 'SAR Surveillance CV',
        category: 'Real-Time Video Platform',
        deliverables: 'React · Node.js · OpenCV · YOLOv8 · ByteTrack · Docker',
        client: 'github.com/Sehaan-1',
        repoUrl: 'https://github.com/Sehaan-1/sar---suspicious-activity-recognition',
        image: 'assets/images/project-03-sar-surveillance.jpg',
        description: 'Real-time computer vision suspicious activity recognition platform combining YOLOv8 multi-object tracking (ByteTrack) with a React/Node.js monitoring stack.'
      },
      {
        id: 'xai-fraud-detection',
        index: '08',
        year: '2025',
        title: 'XAI Fraud Detection',
        category: 'Explainable Model Serving',
        deliverables: 'Python · XGBoost · SHAP · FastAPI · Docker',
        client: 'github.com/Sehaan-1',
        repoUrl: 'https://github.com/Sehaan-1/xai-fraud-detection',
        image: 'assets/images/project-04-xai-fraud-detection.jpg',
        description: 'Explainable financial fraud detection engine featuring low-latency FastAPI model serving and per-prediction SHAP feature attributions.'
      },
      {
        id: 'equity-derivatives-engine',
        index: '09',
        year: '2024',
        title: 'Equity Derivatives Engine',
        category: 'Low-Latency C++20 Systems',
        deliverables: 'C++20 · Execution Simulator · Risk Guardrails',
        client: 'github.com/Sehaan-1',
        repoUrl: 'https://github.com/Sehaan-1/equity-derivatives-engine',
        image: 'assets/images/project-05-equity-derivatives.jpg',
        description: 'Low-latency C++20 execution engine simulator with deterministic pre-trade risk guardrails designed for Indian equity derivatives markets.'
      },
      {
        id: 'fakeglucosense',
        index: '10',
        year: '2023',
        title: 'FakeGlucoSense CGM',
        category: 'Embedded & Mobile Telemetry',
        deliverables: 'Kotlin · Android · BLE · JVM/TCP · ESP32 NimBLE',
        client: 'github.com/Sehaan-1',
        repoUrl: 'https://github.com/Sehaan-1/FakeGlucoSense',
        image: 'assets/images/project-06-fakeglucosense.jpg',
        description: 'End-to-end simulated Continuous Glucose Monitor (CGM) ecosystem spanning an ESP32/NimBLE sensor, BLE peripheral, JVM/TCP simulator, and Android app.'
      },
      {
        id: 'grazing-incidence',
        index: '11',
        year: '2022',
        title: 'Grazing Incidence',
        category: 'Systems & Graphics in Rust',
        deliverables: 'Rust · Ray Tracer · Custom PNG Encoder',
        client: 'github.com/Sehaan-1',
        repoUrl: 'https://github.com/Sehaan-1/grazing-incidence',
        image: 'assets/images/project-07-grazing-incidence.jpg',
        description: 'Physically-inspired ray tracer engineered in Rust complete with a custom zero-dependency PNG binary encoder.'
      },
      {
        id: 'vantagecommerce',
        index: '12',
        year: '2021',
        title: 'VantageCommerce',
        category: 'Data & Analytics Pipeline',
        deliverables: 'Python · dbt · DuckDB · Medallion Architecture',
        client: 'github.com/Sehaan-1',
        repoUrl: 'https://github.com/Sehaan-1/vantagecommerce',
        image: 'assets/images/project-08-vantagecommerce.jpg',
        description: 'End-to-end e-commerce analytics engineering pipeline implementing Bronze-Silver-Gold Medallion architecture with dbt and DuckDB.'
      },
      {
        id: 'wasteline-guidelineforge',
        index: '13',
        year: '2020',
        title: 'Wasteline & GuidelineForge',
        category: 'Telemetry & QA Systems',
        deliverables: 'Python · Inter-Annotator QA · Batch Telemetry',
        client: 'github.com/Sehaan-1',
        repoUrl: 'https://github.com/Sehaan-1/Wasteline',
        image: 'assets/images/project-09-wasteline.jpg',
        description: 'Modular batch Python pipeline turning raw telemetry into building-health reports, paired with GuidelineForge inter-annotator agreement QA metrics.'
      }
    ];

    let initialDarkMode = true;
    try {
      const stored = localStorage.getItem('color-scheme');
      if (stored === 'light') {
        initialDarkMode = false;
      } else if (stored === 'dark') {
        initialDarkMode = true;
      } else {
        initialDarkMode = true; // Default to Dark Mode
      }
    } catch (_) {}

    let state = {
      darkMode: initialDarkMode,
      activeProjectIndex: 0,
      menuOpen: false,
      currentView: 'home'
    };

    function getActiveProjects() {
      return SEHAAN_PROJECTS;
    }

    let toastTimer = null;
    function showToast(msg) {
      const banner = document.getElementById('toastBanner');
      if (!banner) return;
      banner.textContent = msg;

      if (typeof banner.showPopover === 'function') {
        try {
          banner.showPopover();
          banner.classList.remove('hidden');
        } catch (_) {
          banner.classList.remove('hidden');
        }
      } else {
        banner.classList.remove('hidden');
      }

      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        if (typeof banner.hidePopover === 'function') {
          try {
            banner.hidePopover();
          } catch (_) {}
        }
        banner.classList.add('hidden');
      }, 2600);
    }

    // Render all 9 Work Rows with Year left, .work-image-holder centered at 28% (clear of right title), and Title right
    function renderWorkList() {
      const container = document.getElementById('workRowsContainer');
      const list = getActiveProjects();
      container.replaceChildren();

      list.forEach((proj, idx) => {
        const item = document.createElement('div');
        item.setAttribute('role', 'listitem');
        item.className = 'work-list-item';

        const link = document.createElement('a');
        link.href = '#' + proj.id;
        link.className = 'work-item';
        link.innerHTML = `
          <div class="work-info-holder">
            <div class="work-date">${proj.year}</div>
            <div class="work-title">${proj.title}</div>
          </div>
          <div class="work-image-holder">
            <img src="${proj.image}" alt="${proj.title}" loading="lazy" decoding="async" width="220" height="150" />
          </div>
        `;

        link.addEventListener('click', (e) => {
          e.preventDefault();
          openCaseStudyModal(idx);
        });

        item.appendChild(link);
        container.appendChild(item);
      });
    }

    function applyThemeMode(isExplicit = false) {
      document.body.classList.toggle('dark-mode', state.darkMode);
      document.documentElement.classList.toggle('dark-mode', state.darkMode);

      const meta = document.querySelector('meta[name="color-scheme"]');
      if (meta) {
        meta.content = state.darkMode ? 'dark' : 'light';
      }

      if (isExplicit) {
        try {
          localStorage.setItem('color-scheme', state.darkMode ? 'dark' : 'light');
        } catch (_) {}
      }

      const label = document.getElementById('personaLabel');
      const dot = document.getElementById('personaDot');
      if (label) {
        label.textContent = state.darkMode ? 'Light Mode' : 'Dark Mode';
      }
      if (dot) {
        dot.style.backgroundColor = state.darkMode ? '#f4f3ef' : '#ff7b00';
      }
    }

    function initSehaanPortfolio() {
      renderWorkList();
      applyThemeMode();
      handleScrollInteractions();
    }

    // Scroll Interactions
    function handleScrollInteractions() {
      if (state.currentView !== 'home') return;
      const vh = window.innerHeight || 800;

      const aboutSection = document.getElementById('About');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const totalTravel = Math.max(1, aboutSection.offsetHeight);
        const scrolled = Math.min(totalTravel, Math.max(0, vh * 0.85 - rect.top));
        const progress = scrolled / totalTravel;

        for (let i = 0; i < 5; i++) {
          const lineStart = i * 0.14;
          const lineEnd = lineStart + 0.35;
          const linePct = Math.min(1, Math.max(0.15, (progress - lineStart) / (lineEnd - lineStart)));
          const fillEl = document.getElementById('aboutFill' + i);
          if (fillEl) {
            fillEl.style.width = Math.round(linePct * 100) + '%';
          }
        }
      }

      const footerEl = document.getElementById('contactSection');
      if (footerEl) {
        const fRect = footerEl.getBoundingClientRect();
        const fProgress = Math.min(1, Math.max(0.2, (vh - fRect.top) / (vh * 0.75)));
        const f0 = document.getElementById('footerFill0');
        const f1 = document.getElementById('footerFill1');
        if (f0) f0.style.width = Math.min(100, Math.round(fProgress * 135)) + '%';
        if (f1) f1.style.width = Math.min(100, Math.max(20, Math.round((fProgress - 0.18) * 135))) + '%';

        const starImg = document.getElementById('footerStarSvg');
        if (starImg) {
          starImg.style.transform = `rotate(${fProgress * 160}deg)`;
        }
      }
    }

    function openCaseStudyModal(idx) {
      const list = getActiveProjects();
      state.activeProjectIndex = idx;
      const proj = list[idx];
      document.getElementById('modalProjectYear').textContent = proj.year;
      document.getElementById('modalProjectYearBottom').textContent = proj.year;
      document.getElementById('modalProjectCategory').textContent = proj.category;
      document.getElementById('modalProjectImage').src = proj.image;
      document.getElementById('modalProjectTitle').textContent = proj.title;
      document.getElementById('modalProjectSubtitle').textContent = 'Sehaan Ur Rahman · ' + proj.deliverables;
      document.getElementById('modalProjectOverview').textContent = proj.description;
      document.getElementById('modalProjectClient').textContent = proj.client;
      document.getElementById('modalProjectDeliverables').textContent = proj.deliverables;
      const repoBtn = document.getElementById('modalGithubRepoLink');
      repoBtn.href = proj.repoUrl;
      repoBtn.textContent = 'View on GitHub ↗';

      const liveDemoBtn = document.getElementById('modalLiveDemoLink');
      if (liveDemoBtn) {
        if (proj.liveDemoUrl) {
          liveDemoBtn.href = proj.liveDemoUrl;
          liveDemoBtn.classList.remove('hidden');
          liveDemoBtn.classList.add('inline-flex');
        } else {
          liveDemoBtn.classList.add('hidden');
          liveDemoBtn.classList.remove('inline-flex');
        }
      }

      const modal = document.getElementById('caseStudyModal');
      if (modal && typeof modal.showModal === 'function') {
        modal.showModal();
      } else if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }
    }

    function closeCaseStudyModal() {
      const modal = document.getElementById('caseStudyModal');
      if (modal && typeof modal.close === 'function') {
        modal.close();
      } else if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    }

    function openContactModal() {
      const modal = document.getElementById('contactModal');
      if (modal && typeof modal.showModal === 'function') {
        modal.showModal();
      } else if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }
    }

    function closeContactModal() {
      const modal = document.getElementById('contactModal');
      if (modal && typeof modal.close === 'function') {
        modal.close();
      } else if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    }

    function switchView(viewName) {
      const updateDom = () => {
        state.currentView = viewName;
        ['home'].forEach(v => {
          const el = document.getElementById('view-' + v);
          if (el) {
            el.classList.toggle('hidden', v !== viewName);
            el.classList.toggle('block', v === viewName);
          }
        });
      };

      if (document.startViewTransition) {
        document.startViewTransition(updateDom);
      } else {
        updateDom();
      }
      closeMenu();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function toggleMenu() {
      state.menuOpen = !state.menuOpen;
      document.body.classList.toggle('menu-open', state.menuOpen);
    }

    function closeMenu() {
      state.menuOpen = false;
      document.body.classList.remove('menu-open');
    }

    window.addEventListener('DOMContentLoaded', () => {
      initSehaanPortfolio();

      // Throttled 60fps Scroll Interaction via requestAnimationFrame
      let scrollTicking = false;
      window.addEventListener('scroll', () => {
        if (!scrollTicking) {
          requestAnimationFrame(() => {
            handleScrollInteractions();
            scrollTicking = false;
          });
          scrollTicking = true;
        }
      }, { passive: true });

      // Cross-tab theme sync
      window.addEventListener('storage', (e) => {
        if (e.key === 'color-scheme') {
          state.darkMode = e.newValue === 'dark';
          applyThemeMode(false);
        }
      });

      document.getElementById('mobileMenuBtn').addEventListener('click', toggleMenu);
      document.getElementById('navLogoBtn').addEventListener('click', () => switchView('home'));

      document.getElementById('personaToggleBtn').addEventListener('click', () => {
        state.darkMode = !state.darkMode;
        applyThemeMode(true);
        showToast(state.darkMode ? 'Dark Mode enabled' : 'Light Mode enabled');
      });

      document.querySelectorAll('.nav-link').forEach(btn => {
        btn.addEventListener('click', () => {
          const target = btn.getAttribute('data-nav');
          closeMenu();
          if (target === 'work') {
            switchView('home');
            setTimeout(() => document.getElementById('workSection').scrollIntoView({ behavior: 'smooth' }), 60);
          } else if (target === 'about') {
            switchView('home');
            setTimeout(() => document.getElementById('About').scrollIntoView({ behavior: 'smooth' }), 60);
          } else if (target === 'experience') {
            switchView('home');
            setTimeout(() => document.getElementById('experienceSection').scrollIntoView({ behavior: 'smooth' }), 60);
          } else if (target === 'contact') {
            document.getElementById('contactSection').scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      document.querySelectorAll('.view-switch-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const targetView = btn.getAttribute('data-view') || 'home';
          switchView(targetView);
        });
      });

      document.getElementById('scrollTopStarBtn').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      document.getElementById('closeCaseStudyModalBtn').addEventListener('click', closeCaseStudyModal);
      document.getElementById('prevProjectModalBtn').addEventListener('click', () => {
        const list = getActiveProjects();
        openCaseStudyModal((state.activeProjectIndex - 1 + list.length) % list.length);
      });
      document.getElementById('nextProjectModalBtn').addEventListener('click', () => {
        const list = getActiveProjects();
        openCaseStudyModal((state.activeProjectIndex + 1) % list.length);
      });

      document.getElementById('closeContactModalBtn').addEventListener('click', closeContactModal);
      const footerInquiry = document.getElementById('footerInquiryBtn');
      if (footerInquiry) {
        footerInquiry.addEventListener('click', openContactModal);
      }

      document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target;
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        const sender = document.getElementById('senderNameInput').value;
        closeContactModal();
        form.reset();
        showToast('Message sent! Thank you, ' + sender + '.');
      });

      // Modern Web Guidance: Light-dismiss fallback for browsers without native closedBy support
      [document.getElementById('caseStudyModal'), document.getElementById('contactModal')].forEach(dialog => {
        if (!dialog) return;
        if (!('closedBy' in HTMLDialogElement.prototype)) {
          dialog.addEventListener('click', (event) => {
            if (event.target !== dialog) return;
            const rect = dialog.getBoundingClientRect();
            const isDialogContent = (
              rect.top <= event.clientY &&
              event.clientY <= rect.top + rect.height &&
              rect.left <= event.clientX &&
              event.clientX <= rect.left + rect.width
            );
            if (!isDialogContent && typeof dialog.close === 'function') {
              dialog.close();
            }
          });
        }
      });

      // Fallback escape listener for older custom overlay mode
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeCaseStudyModal();
          closeContactModal();
          closeMenu();
        }
      });
    });
