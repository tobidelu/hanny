/* =========================================================================
   CLANDESTINE — SITE LOGIC
   Sections:
     1. CONTENT DATA        — edit text/prices/images here
     2. RENDER FUNCTIONS    — turn the data above into HTML
     3. NAVBAR + HERO       — mobile menu, sliding hero word, scroll shadow
     4. SERVICES SHOW MORE
     5. FAQ ACCORDION
     6. BOOKING MODAL       — multi-step booking flow (front-end only)
   ========================================================================= */

/* ==================== 1. CONTENT DATA ==================== */

const SERVICES = [
  { id: "organic_skincare", name: "Organic Skincare", desc: "Natural, organic skincare treatments that cleanse, nourish, and restore a healthy glow.", img: "images/products/serum.webp" },
  { id: "makeup", name: "Makeup", desc: "Carefully applied makeup that highlights your individuality and complements your style.", img: "images/service-images/makeup.webp" },
  { id: "cosmetics_sales", name: "Selling Of Cosmetics", desc: "A curated selection of quality cosmetics, available for purchase in-store.", img: "images/products/cream.webp" },
  { id: "lash_microblading", name: "Lash And Microblading", desc: "Expert lash extensions and microblading for fuller lashes and perfectly defined brows.", img: "images/service-images/brow-shaping.webp" },
  { id: "pedicure_manicure", name: "Pedicure And Manicure", desc: "Relaxing pedicure and manicure treatments that leave hands and feet polished and refreshed.", img: "images/service-images/manicure.webp" },
  { id: "facials", name: "Facials", desc: "A deep-cleansing and hydrating treatment that purifies and brightens the skin.", img: "images/service-images/facial.webp" },
  { id: "body_massage", name: "Body Massage & Body Toning", desc: "Soothing massage and toning treatments that relax the body and improve firmness.", img: "images/products/lotion.webp" },
  { id: "body_enhancement", name: "Body Enhancement", desc: "Treatments designed to shape and enhance your natural figure.", img: null },
  { id: "aphrodisiacs", name: "Aphrodisiacs / Kayan Mata", desc: "Traditional wellness and intimacy products for women.", img: "images/products/oil.webp" },
  { id: "perfume_body_spray", name: "Perfume & Body Spray", desc: "A fragrant range of perfumes and body sprays to complete your look.", img: "images/products/candle.webp" },
];

// How many services show before "Show More" is pressed
const SERVICES_COLLAPSED_COUNT = 6;

const MASTERS = [
  { id: "aviva-mar", name: "Aviva Mar", role: "Nails & Waxing", bio: "Aviva brings a sharp eye for detail and a passion for precision to every nail and waxing treatment. She is known for delivering polished, elegant results that feel fresh and natural.", img: "images/masters/aviva-mar.webp", services: ["pedicure_manicure", "facials", "makeup", "lash_microblading"] },
  { id: "sharon-katz", name: "Sharon Katz", role: "Cosmetology", bio: "Sharon is a visionary in the beauty world, renowned for her precision and creativity, fusing timeless elegance with modern artistry.", img: "images/masters/sharon-katz.webp", services: ["organic_skincare", "cosmetics_sales", "perfume_body_spray", "makeup", "facials", "pedicure_manicure", "lash_microblading"] },
  { id: "mark-franklin", name: "Mark Franklin", role: "Massage & Bodywork", bio: "Mark combines expert technique with a professional touch, blending therapeutic and calming methods to release tension and restore balance.", img: "images/masters/mark-franklin.webp", services: ["body_massage", "body_enhancement", "aphrodisiacs"] },
  { id: "maria-garcia", name: "Maria Garcia", role: "Esthetics & Lashes", bio: "Maria blends expert technique with a thoughtful approach to skin care and lash enhancements, specializing in subtle yet impactful treatments.", img: "images/masters/maria-garcia.webp", services: ["cosmetics_sales", "makeup", "lash_microblading", "facials", "body_enhancement", "pedicure_manicure"] },
];

const TESTIMONIALS = [
  { name: "Naomi Bright", role: "Beauty Influencer", rating: "4.8", img: "images/testimonials/naomi-bright.webp", quote: "As a beauty creator, I look for services that truly stand out, and Hanni Beauty Palace never disappoints. Their expert coloring adds depth and shine on camera." },
  { name: "Talia Lewin", role: "Frequent Visitor", rating: "4.9", img: "images/testimonials/talia-lewin.webp", quote: "What keeps me coming back is the calming atmosphere paired with treatments that feel truly transformative. The hot stone massage eases away built-up tension." },
  { name: "Hannah Miller", role: "Professional Model", rating: "5.0", img: "images/testimonials/hannah-miller.webp", quote: "For my career, looking sharp is non-negotiable, and Hanni Beauty Palace helps me maintain that edge. Their facials keep my skin balanced and ready for the spotlight." },
];

const PRODUCTS = [
  { name: "Moisture Shampoo", category: "Hair Care", desc: "Nourishes hair deeply, restoring softness and shine for healthy, strong locks.", price: 19, oldPrice: 28, volume: "8.5 fl oz", img: "images/products/shampoo.webp" },
  { name: "Smoothing Serum", category: "Hair Serum", desc: "Smooths frizz and strengthens fibers, leaving hair sleek and shiny all day.", price: 27, oldPrice: 38, volume: "4 fl oz", img: "images/products/serum.webp" },
  { name: "Hydrating Lotion", category: "Body Care", desc: "Softens and moisturizes skin for lasting hydration and a fresh, supple feel.", price: 21, oldPrice: 32, volume: "6 oz", img: "images/products/lotion.webp" },
  { name: "Lavender Candle", category: "Home Fragrance", desc: "Calming lavender scent to relax mind and body, creating a peaceful ambiance.", price: 22, oldPrice: 33, volume: "6.3 oz", img: "images/products/candle.webp" },
  { name: "Pearl Hand Cream", category: "Hand Care", desc: "Rich cream hydrates and softens hands, leaving skin smooth and nourished.", price: 14, oldPrice: 22, volume: "1.7 fl oz", img: "images/products/cream.webp" },
  { name: "Essential Oil", category: "Aromatherapy", desc: "Pure essential oil for aromatherapy to relax and refresh mind and body.", price: 19, oldPrice: 30, volume: "1 fl oz", img: "images/products/oil.webp" },
];

const FAQS = [
  { q: "How far in advance should I book?", a: "We recommend booking at least 48 hours ahead to secure your preferred time and stylist." },
  { q: "What payment methods do you accept?", a: "We accept major credit cards, digital wallets, and cash payments." },
  { q: "How can I reschedule my visit?", a: "Simply contact us at least 24 hours in advance to adjust your appointment." },
  { q: "Do you offer gift cards?", a: "Yes, our elegant gift cards are available both digitally and in-store." },
];

const HERO_WORDS = ["Glow", "Elegance", "Beauty", "Confidence", "Style", "Charm"];

/* ==================== 2. RENDER FUNCTIONS ==================== */

function renderServices() {
  const wrap = document.getElementById("servicesList");
  wrap.innerHTML = SERVICES.map((s, i) => `
    <div class="service-row ${i >= SERVICES_COLLAPSED_COUNT ? "hidden-row" : ""}" data-service="${s.id}">
      ${s.img
        ? `<img class="service-thumb" src="${s.img}" alt="${s.name}">`
        : `<div class="service-thumb-placeholder"></div>`}
      <div class="service-name">${s.name}</div>
      <div class="service-desc">${s.desc}</div>
      <div class="service-duration">By appt.</div>
      <div class="service-price">Inquire</div>
    </div>
  `).join("");

  // hide the "Show More" button entirely if there's nothing extra to show
  const moreBtn = document.getElementById("showMoreServices");
  if (SERVICES.length <= SERVICES_COLLAPSED_COUNT) moreBtn.style.display = "none";
}

function renderMasters() {
  const wrap = document.getElementById("mastersGrid");
  wrap.innerHTML = MASTERS.map(m => `
    <div class="master-card">
      <img class="master-photo" src="${m.img}" alt="${m.name}">
      <div class="master-info">
        <div class="master-name">${m.name}</div>
        <div class="master-role">${m.role}</div>
        <div class="master-bio">${m.bio}</div>
      </div>
    </div>
  `).join("");
}

function renderTestimonials() {
  const wrap = document.getElementById("testimonialsGrid");
  wrap.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-rating">&#9733; ${t.rating}</div>
      <p class="testimonial-quote">"${t.quote}"</p>
      <div class="testimonial-person">
        <img class="testimonial-avatar" src="${t.img}" alt="${t.name}">
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join("");
}

function renderProducts() {
  const wrap = document.getElementById("productsGrid");
  wrap.innerHTML = PRODUCTS.map(p => `
    <div class="product-card">
      <div class="product-photo-wrap">
        <img class="product-photo" src="${p.img}" alt="${p.name}">
      </div>
      <div class="product-info">
        <div class="product-category">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-prices">
          <span class="product-price">$${p.price}</span>
          <span class="product-old-price">$${p.oldPrice}</span>
          <span class="product-volume">${p.volume}</span>
        </div>
      </div>
    </div>
  `).join("");
}

function renderFaq() {
  const wrap = document.getElementById("faqList");
  wrap.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" data-index="${i}">
      <button class="faq-question">
        <span>${f.q}</span>
        <span class="icon">+</span>
      </button>
      <div class="faq-answer"><p>${f.a}</p></div>
    </div>
  `).join("");

  wrap.querySelectorAll(".faq-item").forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      // close any other open item (accordion behaviour)
      wrap.querySelectorAll(".faq-item.open").forEach(other => {
        other.classList.remove("open");
        other.querySelector(".faq-answer").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + 20 + "px";
      }
    });
  });
}

/* ==================== 3. NAVBAR + HERO ==================== */

function initNavbar() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-open");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("mobile-open"));
  });
}

/* Theme is set as early as possible by the inline script in <head> to
   avoid a flash of the wrong theme. This function just wires up the
   toggle button and remembers the visitor's choice. */
function initThemeToggle() {
  const toggle = document.getElementById("themeToggle");
  const root = document.documentElement;

  toggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("hanni-theme", next);
  });
}

function initHeroWordSwap() {
  const el = document.getElementById("swapWord");
  let index = 0;
  setInterval(() => {
    el.classList.add("swapping");
    setTimeout(() => {
      index = (index + 1) % HERO_WORDS.length;
      el.textContent = HERO_WORDS[index];
      el.classList.remove("swapping");
    }, 400);
  }, 2600);
}

/* ==================== 4. SERVICES SHOW MORE ==================== */

function initShowMoreServices() {
  const btn = document.getElementById("showMoreServices");
  let expanded = false;
  btn.addEventListener("click", () => {
    expanded = !expanded;
    document.querySelectorAll(".service-row.hidden-row, .service-row").forEach((row, i) => {
      if (i >= SERVICES_COLLAPSED_COUNT) {
        row.classList.toggle("hidden-row", !expanded);
      }
    });
    btn.textContent = expanded ? "Show Less" : "Show More";
  });
}

/* ==================== 5. BOOKING MODAL ==================== */
/*
  This is a front-end-only booking flow: it walks the visitor through
  service -> master -> date -> time -> confirm -> payment -> success,
  and stores their choices in `booking` below. No data is sent anywhere —
  wire up `submitBooking()` at the bottom to your own backend/email
  service when you're ready to accept real bookings.
*/

const STEP_NAMES = ["service", "master", "date", "time", "confirm", "payment"];

let booking = {
  serviceId: null,
  masterId: null,
  date: null,       // Date object
  time: null,        // "HH:MM"
  calendarMonth: new Date().getMonth(),
  calendarYear: new Date().getFullYear(),
};
let currentStepIndex = 0;

function openBookingModal() {
  booking = {
    serviceId: null,
    masterId: null,
    date: null,
    time: null,
    calendarMonth: new Date().getMonth(),
    calendarYear: new Date().getFullYear(),
  };
  currentStepIndex = 0;
  document.getElementById("modalOverlay").classList.add("active");
  renderStep();
}

function closeBookingModal() {
  document.getElementById("modalOverlay").classList.remove("active");
}

function renderStepDots() {
  const wrap = document.getElementById("modalSteps");
  wrap.innerHTML = STEP_NAMES.map((_, i) => `
    <div class="modal-step-dot ${i < currentStepIndex ? "done" : ""} ${i === currentStepIndex ? "active" : ""}"></div>
  `).join("");
}

function renderStep() {
  renderStepDots();
  const body = document.getElementById("modalBody");
  const step = STEP_NAMES[currentStepIndex];

  if (step === "service") body.innerHTML = stepServiceHtml();
  if (step === "master") body.innerHTML = stepMasterHtml();
  if (step === "date") body.innerHTML = stepDateHtml();
  if (step === "time") body.innerHTML = stepTimeHtml();
  if (step === "confirm") body.innerHTML = stepConfirmHtml();
  if (step === "payment") body.innerHTML = stepPaymentHtml();

  attachStepHandlers(step);
}

/* ---- Step: pick a service ---- */
function stepServiceHtml() {
  const rows = SERVICES.map(s => `
    <button class="option-row ${booking.serviceId === s.id ? "selected" : ""}" data-id="${s.id}">
      ${s.img ? `<img src="${s.img}" alt="">` : ""}
      <div class="option-main">
        <div class="option-title">${s.name}</div>
        <div class="option-sub">By appointment</div>
      </div>
      <div class="option-meta">Inquire</div>
    </button>
  `).join("");

  return `
    <h3 class="modal-title">Select a Service</h3>
    <div class="option-list">${rows}</div>
    <div class="modal-actions">
      <button class="btn btn-accent btn-full" id="stepNext" disabled>Continue</button>
    </div>
  `;
}

/* ---- Step: pick a master (filtered to those who do the chosen service) ---- */
function stepMasterHtml() {
  const eligible = MASTERS.filter(m => m.services.includes(booking.serviceId));
  const rows = eligible.map(m => `
    <button class="option-row ${booking.masterId === m.id ? "selected" : ""}" data-id="${m.id}">
      <img src="${m.img}" alt="">
      <div class="option-main">
        <div class="option-title">${m.name}</div>
        <div class="option-sub">${m.role}</div>
      </div>
    </button>
  `).join("");

  return `
    <h3 class="modal-title">Select a Master</h3>
    <div class="option-list">${rows || `<p class="no-slots">No masters available for this service yet.</p>`}</div>
    <div class="modal-actions">
      <button class="btn btn-outline" id="stepBack">Back</button>
      <button class="btn btn-accent" id="stepNext" ${booking.masterId ? "" : "disabled"}>Continue</button>
    </div>
  `;
}

/* ---- Step: pick a date from a small calendar ---- */
function stepDateHtml() {
  const year = booking.calendarYear;
  const month = booking.calendarMonth;
  const first = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startWeekday = first.getDay();
  const today = new Date(); today.setHours(0,0,0,0);

  const monthLabel = first.toLocaleDateString("en-US", { month: "long", year: "numeric" });

  let cells = "";
  for (let i = 0; i < startWeekday; i++) cells += `<div class="calendar-day empty"></div>`;
  for (let d = 1; d <= daysInMonth; d++) {
    const cellDate = new Date(year, month, d);
    const isPast = cellDate < today;
    const isSelected = booking.date && cellDate.toDateString() === booking.date.toDateString();
    cells += `<div class="calendar-day ${isPast ? "disabled" : "enabled"} ${isSelected ? "selected" : ""}" data-day="${d}">${d}</div>`;
  }

  return `
    <h3 class="modal-title">Select a Date</h3>
    <div class="calendar-nav">
      <button id="calPrev">&larr;</button>
      <span class="calendar-month-label">${monthLabel}</span>
      <button id="calNext">&rarr;</button>
    </div>
    <div class="calendar-grid">
      <div class="calendar-weekday">Su</div><div class="calendar-weekday">Mo</div>
      <div class="calendar-weekday">Tu</div><div class="calendar-weekday">We</div>
      <div class="calendar-weekday">Th</div><div class="calendar-weekday">Fr</div>
      <div class="calendar-weekday">Sa</div>
      ${cells}
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" id="stepBack">Back</button>
      <button class="btn btn-accent" id="stepNext" ${booking.date ? "" : "disabled"}>Continue</button>
    </div>
  `;
}

/* ---- Step: pick a time slot ---- */
function generateTimeSlots(date) {
  const dayOfWeek = date.getDay();
  let startHour = 9, endHour = 21;
  if (dayOfWeek === 5) endHour = 17; // Friday closes earlier
  if (dayOfWeek === 6) return [];    // Saturday closed

  const slots = [];
  for (let h = startHour; h < endHour; h++) {
    slots.push(`${String(h).padStart(2, "0")}:00`);
    slots.push(`${String(h).padStart(2, "0")}:30`);
  }
  return slots;
}

function stepTimeHtml() {
  const slots = generateTimeSlots(booking.date);
  const dateLabel = booking.date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });

  const slotsHtml = slots.map(t => `
    <div class="time-slot ${booking.time === t ? "selected" : ""}" data-time="${t}">${formatTime(t)}</div>
  `).join("");

  return `
    <h3 class="modal-title">Select a Time</h3>
    <p class="section-desc" style="margin-bottom:1.2rem;">${dateLabel}</p>
    ${slots.length
      ? `<div class="time-grid">${slotsHtml}</div>`
      : `<div class="no-slots">No available slots.<br>Please try another date.</div>`}
    <div class="modal-actions">
      <button class="btn btn-outline" id="stepBack">Back</button>
      <button class="btn btn-accent" id="stepNext" ${booking.time ? "" : "disabled"}>Continue</button>
    </div>
  `;
}

function formatTime(time) {
  const [h, m] = time.split(":").map(Number);
  const d = new Date(); d.setHours(h, m);
  return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
}

/* ---- Step: confirm summary ---- */
function stepConfirmHtml() {
  const service = SERVICES.find(s => s.id === booking.serviceId);
  const master = MASTERS.find(m => m.id === booking.masterId);
  const dateLabel = booking.date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });

  return `
    <h3 class="modal-title">Confirm Your Booking</h3>
    <div class="confirm-summary">
      <div class="confirm-row"><span class="confirm-label">Service</span><span class="confirm-value">${service.name}</span></div>
      <div class="confirm-row"><span class="confirm-label">Master</span><span class="confirm-value">${master.name}</span></div>
      <div class="confirm-row"><span class="confirm-label">Date</span><span class="confirm-value">${dateLabel}</span></div>
      <div class="confirm-row"><span class="confirm-label">Time</span><span class="confirm-value">${formatTime(booking.time)}</span></div>
      <div class="confirm-row"><span class="confirm-label">Payment</span><span class="confirm-value">50% advance required</span></div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" id="stepBack">Back</button>
      <button class="btn btn-accent" id="stepNext">Confirm</button>
    </div>
  `;
}

/* ---- Step: payment form (front-end only — no real processing) ---- */
function stepPaymentHtml() {
  return `
    <h3 class="modal-title">Enter Payment Details</h3>
    <form id="paymentForm">
      <div class="form-group">
        <label>Card Number</label>
        <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" maxlength="19" required>
      </div>
      <div class="form-group">
        <label>Cardholder Name</label>
        <input type="text" id="cardName" placeholder="Jane Doe" required>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Valid Thru</label>
          <input type="text" id="cardExpiry" placeholder="MM/YY" maxlength="5" required>
        </div>
        <div class="form-group">
          <label>CVC</label>
          <input type="text" id="cardCvc" placeholder="123" maxlength="4" required>
        </div>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn btn-outline" id="stepBack">Back</button>
        <button type="submit" class="btn btn-accent">Pay</button>
      </div>
    </form>
  `;
}

/* ---- wire up whatever the current step needs ---- */
function attachStepHandlers(step) {
  const nextBtn = document.getElementById("stepNext");
  const backBtn = document.getElementById("stepBack");

  if (backBtn) backBtn.addEventListener("click", () => {
    currentStepIndex = Math.max(0, currentStepIndex - 1);
    renderStep();
  });

  if (step === "service") {
    document.querySelectorAll(".option-row").forEach(row => {
      row.addEventListener("click", () => {
        booking.serviceId = row.dataset.id;
        booking.masterId = null; // reset downstream choice
        document.querySelectorAll(".option-row").forEach(r => r.classList.remove("selected"));
        row.classList.add("selected");
        nextBtn.disabled = false;
      });
    });
    nextBtn.addEventListener("click", () => { currentStepIndex++; renderStep(); });
  }

  if (step === "master") {
    document.querySelectorAll(".option-row").forEach(row => {
      row.addEventListener("click", () => {
        booking.masterId = row.dataset.id;
        document.querySelectorAll(".option-row").forEach(r => r.classList.remove("selected"));
        row.classList.add("selected");
        nextBtn.disabled = false;
      });
    });
    if (nextBtn) nextBtn.addEventListener("click", () => { currentStepIndex++; renderStep(); });
  }

  if (step === "date") {
    document.getElementById("calPrev").addEventListener("click", () => {
      booking.calendarMonth--;
      if (booking.calendarMonth < 0) { booking.calendarMonth = 11; booking.calendarYear--; }
      renderStep();
    });
    document.getElementById("calNext").addEventListener("click", () => {
      booking.calendarMonth++;
      if (booking.calendarMonth > 11) { booking.calendarMonth = 0; booking.calendarYear++; }
      renderStep();
    });
    document.querySelectorAll(".calendar-day.enabled").forEach(cell => {
      cell.addEventListener("click", () => {
        booking.date = new Date(booking.calendarYear, booking.calendarMonth, Number(cell.dataset.day));
        booking.time = null; // reset downstream choice
        renderStep();
      });
    });
    nextBtn.addEventListener("click", () => { currentStepIndex++; renderStep(); });
  }

  if (step === "time") {
    document.querySelectorAll(".time-slot").forEach(slot => {
      slot.addEventListener("click", () => {
        booking.time = slot.dataset.time;
        document.querySelectorAll(".time-slot").forEach(s => s.classList.remove("selected"));
        slot.classList.add("selected");
        nextBtn.disabled = false;
      });
    });
    if (nextBtn) nextBtn.addEventListener("click", () => { currentStepIndex++; renderStep(); });
  }

  if (step === "confirm") {
    nextBtn.addEventListener("click", () => { currentStepIndex++; renderStep(); });
  }

  if (step === "payment") {
    document.getElementById("paymentForm").addEventListener("submit", (e) => {
      e.preventDefault();
      submitBooking();
    });
  }
}

/* Called when the visitor submits the payment step.
   Replace the body of this function with a real API call
   (e.g. fetch('/api/book', { method: 'POST', body: ... })) when you
   connect this to a backend. Right now it just shows the success card. */
function submitBooking() {
  closeBookingModal();
  const dateLabel = booking.date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  document.getElementById("successMessage").textContent =
    `Your spot has been reserved successfully! ${MASTERS.find(m => m.id === booking.masterId).name} will be waiting for you on ${dateLabel} at ${formatTime(booking.time)}.`;
  document.getElementById("successOverlay").classList.add("active");
}

function initBookingModal() {
  document.getElementById("navBookBtn").addEventListener("click", openBookingModal);
  document.getElementById("heroBookBtn").addEventListener("click", openBookingModal);
  document.getElementById("modalClose").addEventListener("click", closeBookingModal);
  document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "modalOverlay") closeBookingModal();
  });
  document.getElementById("successOk").addEventListener("click", () => {
    document.getElementById("successOverlay").classList.remove("active");
  });
}

/* ==================== INIT ==================== */

document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderMasters();
  renderTestimonials();
  renderProducts();
  renderFaq();

  initNavbar();
  initThemeToggle();
  initHeroWordSwap();
  initShowMoreServices();
  initBookingModal();

  document.getElementById("year").textContent = new Date().getFullYear();
});
