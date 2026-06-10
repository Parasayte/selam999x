import './style.css'

/* ══════════════════════════════
   TRANSLATIONS
══════════════════════════════ */
const i18n = {
  en: {
    'meta.title': 'Abdulselam — Web Designer & Developer',
    'nav.logo': 'SELAM',
    'nav.work': 'Work', 'nav.about': 'About', 'nav.services': 'Services',
    'nav.stack': 'Stack', 'nav.contact': 'Contact',
    'hero.badge': 'WEB DESIGNER · DEVELOPER · 2026',
    'hero.line1': 'I DESIGN', 'hero.line2': '& BUILD', 'hero.line3': 'WEBSITES.',
    'hero.sub': "I'm Abdulselam Elahmed — a web designer and developer crafting bold neo-brutalist sites, e-commerce stores and web apps that load fast and convert.",
    'hero.cta1': 'SEE MY WORK', 'hero.cta2': 'HIRE ME',
    'hero.stat1': 'YEARS CODING', 'hero.stat2': 'SITES SHIPPED', 'hero.stat3': 'HAPPY CLIENTS',
    'about.tag': 'ABOUT ME', 'about.role': 'Web Designer · Developer',
    'about.hello': 'Hello',
    'about.desc': "I'm Abdulselam Elahmed. I design and build websites end-to-end — from the first wireframe to the last deploy. My work focuses on clarity, speed, and personality. No template look, no fluff.",
    'stack.tag': 'STACK', 'stack.title': 'Toolbelt', 'stack.reset': 'Reset',
    'services.badge': 'SERVICES · 2026', 'services.title': 'What I do',
    'services.s1.title': 'Web Design', 'services.s1.desc': 'Bold, unique brand sites — wireframes, UI design, prototypes in Figma.',
    'services.s2.title': 'Development', 'services.s2.desc': 'React, Next.js, TypeScript, Tailwind. Fast, accessible, SEO-ready.',
    'services.s3.title': 'E-commerce', 'services.s3.desc': 'Shopify and headless storefronts — designed and built to convert.',
    'work.badge': 'WORKS · 2026', 'work.title': 'Selected Work', 'work.view': 'VIEW PROJECT ›',
    'work.w1.title': 'CloudMetrics', 'work.w1.desc': 'SaaS analytics dashboard with real-time data visualization — design + product panel.',
    'work.w2.title': 'ShopVibe', 'work.w2.desc': 'E-commerce redesign that boosted conversions by 40% — Shopify + custom theme.',
    'work.w3.title': 'FitTrack App', 'work.w3.desc': 'Fitness tracking mobile app — UI design, prototype, brand identity.',
    'work.w4.title': 'Atlas Portfolio', 'work.w4.desc': 'Personal portfolio for a photographer — clean typography, fast everywhere.',
    'tools.label': 'TOOLS I USE EVERY DAY',
    'footer.small': 'WEB DESIGN & DEVELOPMENT',
    'footer.headline': "Let's build your website.",
    'footer.nav.label': 'NAVIGATE', 'footer.contact.label': 'CONTACT',
    'footer.back': 'Back to top',
  },
  ar: {
    'meta.title': 'عبدالسلام — مصمم ومطور ويب',
    'nav.logo': 'سلام',
    'nav.work': 'الأعمال', 'nav.about': 'عني', 'nav.services': 'الخدمات',
    'nav.stack': 'الأدوات', 'nav.contact': 'تواصل',
    'hero.badge': 'مصمم ومطور ويب · ٢٠٢٦',
    'hero.line1': 'أصمم', 'hero.line2': 'وأبني', 'hero.line3': 'مواقع.',
    'hero.sub': 'أنا عبدالسلام الأحمد — مصمم ومطور ويب أبني مواقع جريئة بأسلوب نيو-بروتاليزم ومتاجر وتطبيقات سريعة وفحشة للتحويل.',
    'hero.cta1': 'شاهد أعمالي', 'hero.cta2': 'وظفني',
    'hero.stat1': 'سنوات برمجة', 'hero.stat2': 'موقع منشور', 'hero.stat3': 'عميل سعيد',
    'about.tag': 'عني', 'about.role': 'مصمم ومطور ويب',
    'about.hello': 'مرحباً',
    'about.desc': 'أنا عبدالسلام الأحمد. أصمم وأطور المواقع من البداية للنهاية — من أول مخطط حتى آخر نشر. أركز على الوضوح والسرعة والشخصية. لا قوالب جاهزة ولا حشو.',
    'stack.tag': 'المنظومة', 'stack.title': 'أدواتي', 'stack.reset': 'إعادة',
    'services.badge': 'الخدمات · ٢٠٢٦', 'services.title': 'ماذا أقدم',
    'services.s1.title': 'تصميم المواقع', 'services.s1.desc': 'مواقع علامة تجارية مميزة — مخططات وتصاميم واجهات ونماذج في فيجما.',
    'services.s2.title': 'تطوير الويب', 'services.s2.desc': 'رياكت، تايب سكريبت، تيلويند. سريع، متاح، جاهز للسيو.',
    'services.s3.title': 'متاجر إلكترونية', 'services.s3.desc': 'شوبيفاي ومتاجر هيدلس — مصممة ومبنية للتحويل.',
    'work.badge': 'الأعمال · ٢٠٢٦', 'work.title': 'أعمال مختارة', 'work.view': 'اعرض المشروع ›',
    'work.w1.title': 'كلاود ميتريكس', 'work.w1.desc': 'لوحة تحليلات SaaS مع تصور بيانات فوري — تصميم + لوحة منتج.',
    'work.w2.title': 'شوب فايب', 'work.w2.desc': 'إعادة تصميم متجر إلكتروني رفع التحويلات ٤٠٪ — شوبيفاي + قالب مخصص.',
    'work.w3.title': 'فيت تراك', 'work.w3.desc': 'تطبيق تتبع لياقة بدنية — تصميم واجهة، نموذج أولي، هوية بصرية.',
    'work.w4.title': 'أطلس بورتفوليو', 'work.w4.desc': 'بورتفوليو شخصي لمصور — طباعة نظيفة، سريع في كل مكان.',
    'tools.label': 'أدوات أستخدمها يومياً',
    'footer.small': 'تصميم وتطوير المواقع',
    'footer.headline': 'دعنا نبني موقعك.',
    'footer.nav.label': 'تصفح', 'footer.contact.label': 'تواصل',
    'footer.back': 'العودة للأعلى',
  },
  tr: {
    'meta.title': 'Abdulselam — Web Tasarımcı & Geliştirici',
    'nav.logo': 'SELAM',
    'nav.work': 'İşler', 'nav.about': 'Hakkımda', 'nav.services': 'Hizmetler',
    'nav.stack': 'Yetkinlikler', 'nav.contact': 'İletişim',
    'hero.badge': 'WEB TASARIMCI · GELİŞTİRİCİ · 2026',
    'hero.line1': 'TASARLIYORUM', 'hero.line2': 'VE İNŞA', 'hero.line3': 'EDİYORUM.',
    'hero.sub': "Ben Abdulselam Elahmed — neo-brutalist siteler, e-ticaret mağazaları ve hızlı yüklenen web uygulamaları yapan web tasarımcı ve geliştirici.",
    'hero.cta1': 'İŞLERİME BAK', 'hero.cta2': 'İŞE AL',
    'hero.stat1': 'YIL KODLAMA', 'hero.stat2': 'YAYINLANAN SİTE', 'hero.stat3': 'MUTLU MÜŞTERİ',
    'about.tag': 'HAKKIMDA', 'about.role': 'Web Tasarımcı · Geliştirici',
    'about.hello': 'Merhaba',
    'about.desc': "Ben Abdulselam Elahmed. Web sitelerini baştan sona tasarlıyor ve geliştiriyorum — ilk wireframe'den son deploy'a kadar. Çalışmalarım netlik, hız ve kişiliğe odaklanır. Şablon görünüm yok, dolgu yok.",
    'stack.tag': 'ARAÇLAR', 'stack.title': 'Alet Çantası', 'stack.reset': 'Sıfırla',
    'services.badge': 'HİZMETLER · 2026', 'services.title': 'Ne Yapıyorum',
    'services.s1.title': 'Web Tasarımı', 'services.s1.desc': 'Cesur, özgün marka siteleri — wireframe, UI tasarım, Figma prototipleri.',
    'services.s2.title': 'Geliştirme', 'services.s2.desc': 'React, Next.js, TypeScript, Tailwind. Hızlı, erişilebilir, SEO hazır.',
    'services.s3.title': 'E-Ticaret', 'services.s3.desc': "Shopify ve headless mağazalar — dönüşüm için tasarlanmış ve inşa edilmiş.",
    'work.badge': 'İŞLER · 2026', 'work.title': 'Seçili Çalışmalar', 'work.view': 'PROJEYİ GÖR ›',
    'work.w1.title': 'CloudMetrics', 'work.w1.desc': 'Gerçek zamanlı veri görselleştirmeli SaaS analitik panosu — tasarım + ürün paneli.',
    'work.w2.title': 'ShopVibe', 'work.w2.desc': 'Dönüşümleri %40 artıran e-ticaret yeniden tasarımı — Shopify + özel tema.',
    'work.w3.title': 'FitTrack Uygulaması', 'work.w3.desc': 'Fitness takip mobil uygulaması — UI tasarım, prototip, marka kimliği.',
    'work.w4.title': 'Atlas Portfolyo', 'work.w4.desc': 'Bir fotoğrafçı için kişisel portfolyo — sade tipografi, her yerde hızlı.',
    'tools.label': 'HER GÜN KULLANDIĞIM ARAÇLAR',
    'footer.small': 'WEB TASARIM VE GELİŞTİRME',
    'footer.headline': 'Web sitenizi birlikte inşa edelim.',
    'footer.nav.label': 'GEZİN', 'footer.contact.label': 'İLETİŞİM',
    'footer.back': 'Başa dön',
  }
}

/* marquee translations per language */
const marqueeTexts = {
  en: [
    ['★ BRAND', '★ UI/UX', '★ FIGMA', '★ REACT', '★ WEBFLOW', '★ NEXT.JS'],
    ['★ TAILWIND', '★ TYPESCRIPT', '★ ANIMATION', '★ SEO', '★ NODE.JS'],
    ['★ RESPONSIVE', '★ BOLD', '★ DETAILED', '★ LIVE', '★ FAST']
  ],
  ar: [
    ['★ مارکا', '★ UI/UX', '★ فيجما', '★ رياكت', '★ ويبفلو'],
    ['★ تيلويند', '★ تايبسكريبت', '★ أنيميشن', '★ SEO', '★ نود.جي إس'],
    ['★ متجاوب', '★ جريء', '★ مدروس', '★ مباشر', '★ سريع']
  ],
  tr: [
    ['★ MARKA', '★ UI/UX', '★ FIGMA', '★ REACT', '★ WEBFLOW'],
    ['★ TAILWIND', '★ TYPESCRIPT', '★ ANİMASYON', '★ SEO', '★ NODE.JS'],
    ['★ UYUMLU', '★ CESUR', '★ ÖZENLİ', '★ YAYINDA', '★ HIZLI']
  ]
}

/* ══════════════════════════════
   TOOL BADGES DATA
══════════════════════════════ */
const TOOLS = [
  { name: 'CSS3',       color: '#2965F1', textColor: '#fff' },
  { name: 'Vite',       color: '#646CFF', textColor: '#fff' },
  { name: 'GitHub',     color: '#24292e', textColor: '#fff' },
  { name: 'Shopify',    color: '#95BF47', textColor: '#fff' },
  { name: 'Framer',     color: '#0055FF', textColor: '#fff' },
  { name: 'Tailwind',   color: '#38BDF8', textColor: '#111' },
  { name: 'React',      color: '#61DAFB', textColor: '#111' },
  { name: 'Supabase',   color: '#3ECF8E', textColor: '#111' },
  { name: 'WordPress',  color: '#21759B', textColor: '#fff' },
  { name: 'Figma',      color: '#F24E1E', textColor: '#fff' },
  { name: 'TypeScript', color: '#3178C6', textColor: '#fff' },
  { name: 'Sanity',     color: '#F03E2F', textColor: '#fff' },
  { name: 'PostgreSQL', color: '#336791', textColor: '#fff' },
  { name: 'HTML5',      color: '#E44D26', textColor: '#fff' },
  { name: 'Stripe',     color: '#635BFF', textColor: '#fff' },
  { name: 'Vercel',     color: '#000',    textColor: '#fff' },
  { name: 'Webflow',    color: '#4353FF', textColor: '#fff' },
  { name: 'GSAP',       color: '#0AE448', textColor: '#111' },
  { name: 'Node.js',    color: '#68A063', textColor: '#fff' },
  { name: 'Next.js',    color: '#111',    textColor: '#fff' },
]

/* ══════════════════════════════
   PHYSICS ENGINE
══════════════════════════════ */
const GRAVITY    = 0.35
const DAMPING    = 0.72
const FRICTION   = 0.985
const RESTITUTION = 0.5

let bodies = []
let arenaW = 0, arenaH = 0
let rafId = null
let dragging = null
let dragOffX = 0, dragOffY = 0
let lastMouseX = 0, lastMouseY = 0
let velX = 0, velY = 0
let lastTime = 0

function initPhysics() {
  const arena = document.getElementById('physicsArena')
  if (!arena) return
  arena.innerHTML = ''
  bodies = []
  arenaW = arena.clientWidth
  arenaH = arena.clientHeight

  TOOLS.forEach((tool) => {
    const el = document.createElement('div')
    el.className = 'tool-badge'
    el.textContent = tool.name
    el.style.background = tool.color
    el.style.color = tool.textColor
    arena.appendChild(el)

    const w = el.offsetWidth || 90
    const h = el.offsetHeight || 30
    const x = Math.random() * Math.max(1, arenaW - w)
    const y = Math.random() * Math.max(1, arenaH - h)

    bodies.push({
      el, w, h,
      x, y,
      vx: (Math.random() - 0.5) * 3,
      vy: (Math.random() - 0.5) * 2,
      mass: 1,
    })

    el.style.left = x + 'px'
    el.style.top  = y + 'px'
    el.style.transform = `rotate(${(Math.random() - 0.5) * 20}deg)`
  })

  setupDrag(arena)
  if (rafId) cancelAnimationFrame(rafId)
  lastTime = performance.now()
  rafId = requestAnimationFrame(tick)
}

function tick(now) {
  const dt = Math.min((now - lastTime) / 16.67, 3)
  lastTime = now

  for (let i = 0; i < bodies.length; i++) {
    const b = bodies[i]
    if (b.pinned) continue

    b.vy += GRAVITY * dt
    b.vx *= Math.pow(FRICTION, dt)
    b.vy *= Math.pow(FRICTION, dt)
    b.x  += b.vx * dt
    b.y  += b.vy * dt

    // wall collisions
    if (b.x < 0) { b.x = 0; b.vx = Math.abs(b.vx) * RESTITUTION; }
    if (b.y < 0) { b.y = 0; b.vy = Math.abs(b.vy) * RESTITUTION; }
    if (b.x + b.w > arenaW) { b.x = arenaW - b.w; b.vx = -Math.abs(b.vx) * RESTITUTION; }
    if (b.y + b.h > arenaH) {
      b.y = arenaH - b.h
      b.vy = -Math.abs(b.vy) * RESTITUTION
      b.vx *= DAMPING
      if (Math.abs(b.vy) < 0.5) b.vy = 0
    }

    b.el.style.left = b.x + 'px'
    b.el.style.top  = b.y + 'px'
  }

  // simple badge-to-badge push (broad phase only — small count)
  for (let i = 0; i < bodies.length; i++) {
    for (let j = i + 1; j < bodies.length; j++) {
      const a = bodies[i], b = bodies[j]
      const overlapX = (a.x + a.w) - b.x
      const overlapY = (a.y + a.h) - b.y
      if (overlapX > 0 && overlapY > 0 && a.x < b.x + b.w && a.y < b.y + b.h) {
        const push = 0.5
        if (overlapX < overlapY) {
          if (a.x < b.x) { if (!a.pinned) a.vx -= push; if (!b.pinned) b.vx += push; }
          else            { if (!a.pinned) a.vx += push; if (!b.pinned) b.vx -= push; }
        } else {
          if (a.y < b.y) { if (!a.pinned) a.vy -= push; if (!b.pinned) b.vy += push; }
          else            { if (!a.pinned) a.vy += push; if (!b.pinned) b.vy -= push; }
        }
      }
    }
  }

  rafId = requestAnimationFrame(tick)
}

function setupDrag(arena) {
  arena.addEventListener('pointerdown', (e) => {
    const el = e.target.closest('.tool-badge')
    if (!el) return
    e.preventDefault()
    const body = bodies.find(b => b.el === el)
    if (!body) return

    dragging = body
    dragging.pinned = true
    dragging.el.classList.add('dragging')

    const rect = arena.getBoundingClientRect()
    lastMouseX = e.clientX - rect.left
    lastMouseY = e.clientY - rect.top
    dragOffX = lastMouseX - dragging.x
    dragOffY = lastMouseY - dragging.y
    velX = 0; velY = 0

    arena.setPointerCapture(e.pointerId)
  })

  arena.addEventListener('pointermove', (e) => {
    if (!dragging) return
    const rect = arena.getBoundingClientRect()
    const mx = e.clientX - rect.left
    const my = e.clientY - rect.top

    velX = mx - lastMouseX
    velY = my - lastMouseY
    lastMouseX = mx; lastMouseY = my

    dragging.x = Math.max(0, Math.min(arenaW - dragging.w, mx - dragOffX))
    dragging.y = Math.max(0, Math.min(arenaH - dragging.h, my - dragOffY))
    dragging.el.style.left = dragging.x + 'px'
    dragging.el.style.top  = dragging.y + 'px'
  })

  const endDrag = () => {
    if (!dragging) return
    dragging.vx = velX * 1.2
    dragging.vy = velY * 1.2
    dragging.pinned = false
    dragging.el.classList.remove('dragging')
    dragging = null
  }
  arena.addEventListener('pointerup',    endDrag)
  arena.addEventListener('pointercancel', endDrag)
}

function resetPhysics() {
  bodies.forEach(b => {
    b.x  = Math.random() * Math.max(1, arenaW - b.w)
    b.y  = Math.random() * (arenaH * 0.3)
    b.vx = (Math.random() - 0.5) * 5
    b.vy = Math.random() * 3 + 1
    b.pinned = false
    b.el.style.transform = `rotate(${(Math.random() - 0.5) * 20}deg)`
  })
}

/* ══════════════════════════════
   LANGUAGE
══════════════════════════════ */
let currentLang = 'en'

function applyLang(lang) {
  currentLang = lang
  const strings = i18n[lang]
  const isRTL = lang === 'ar'
  document.documentElement.lang = lang
  document.documentElement.dir  = isRTL ? 'rtl' : 'ltr'

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n')
    if (strings[key] !== undefined) el.innerHTML = strings[key]
  })

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang)
  })

  // Update marquee text
  const rows = document.querySelectorAll('.marquee-track')
  const texts = marqueeTexts[lang] || marqueeTexts.en
  rows.forEach((track, i) => {
    const items = texts[i] || texts[0]
    const repeated = [...items, ...items, ...items, ...items]
    track.innerHTML = repeated.map(t => `<span>${t}</span>`).join('')
  })

  // Update title
  document.title = strings['meta.title'] || document.title
}

/* ══════════════════════════════
   THEME
══════════════════════════════ */
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme
  localStorage.setItem('theme', theme)
}

/* ══════════════════════════════
   SCROLL REVEAL
══════════════════════════════ */
function initReveal() {
  const els = document.querySelectorAll(
    '.work-card, .service-card, .stat, .about-card, .toolbelt-card, .tool-icon, .hero-badge, .work-header, .services-header'
  )
  els.forEach(el => el.classList.add('reveal'))
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' })
  els.forEach(el => obs.observe(el))
}

/* ══════════════════════════════
   SMOOTH SCROLL
══════════════════════════════ */
function initSmoothScroll() {
  const navH = document.querySelector('.navbar').offsetHeight + 16
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href')
      if (href === '#') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
      const target = document.querySelector(href)
      if (!target) return
      e.preventDefault()
      window.scrollTo({ top: target.getBoundingClientRect().top + scrollY - navH, behavior: 'smooth' })
    })
  })
}

/* ══════════════════════════════
   NAVBAR
══════════════════════════════ */
function initNavbar() {
  const navbar = document.querySelector('.navbar')
  const toggle = document.querySelector('.menu-toggle')
  const links  = document.querySelector('.nav-links')

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', scrollY > 20)
  }, { passive: true })

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    links.classList.toggle('open')
  })

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('active')
      links.classList.remove('open')
    })
  })
}

/* ══════════════════════════════
   INIT
══════════════════════════════ */
window.addEventListener('DOMContentLoaded', () => {
  // Theme
  const savedTheme = localStorage.getItem('theme') || 'dark'
  applyTheme(savedTheme)

  document.getElementById('themeToggle').addEventListener('click', () => {
    applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark')
  })

  // Language
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang))
  })
  applyLang('en')

  // Physics
  initPhysics()
  document.getElementById('resetBtn').addEventListener('click', resetPhysics)

  // Handle arena resize
  const resizeObs = new ResizeObserver(() => {
    const arena = document.getElementById('physicsArena')
    if (!arena) return
    const newW = arena.clientWidth
    const newH = arena.clientHeight
    if (newW !== arenaW || newH !== arenaH) {
      arenaW = newW; arenaH = newH
      bodies.forEach(b => {
        b.x = Math.min(b.x, arenaW - b.w)
        b.y = Math.min(b.y, arenaH - b.h)
      })
    }
  })
  const arena = document.getElementById('physicsArena')
  if (arena) resizeObs.observe(arena)

  initNavbar()
  initReveal()
  initSmoothScroll()
})
