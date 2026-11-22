/**
 * ============================================================================
 * MODERN PALACE HOTEL – MOSUL | INTERACTIVE ENGINE
 * ============================================================================
 */

(function () {
  "use strict";

  const state = {
    lang: "ar",
    heroIndex: 0,
    heroTimer: null,
    showcaseIndex: 0,
    showcaseTimer: null,
    galleryFilter: "all",
    roomTimers: [],
    lightboxImages: [],
    lightboxIndex: 0,
    revealObserver: null
  };

  const ICONS = {
    whatsapp: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.33.16 11.9c0 2.1.55 4.15 1.59 5.95L0 24l6.33-1.66a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.42ZM12.07 21.8h-.01a9.87 9.87 0 0 1-5.04-1.38l-.36-.21-3.76.99 1-3.66-.24-.38a9.87 9.87 0 0 1-1.51-5.26c0-5.46 4.44-9.9 9.91-9.9 2.65 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.46-4.44 9.9-9.89 9.9Zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z"/></svg>`,
    bell: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M2 18h20"/><path d="M4 18a8 8 0 0 1 16 0"/><path d="M12 10V7"/><path d="M10 7h4"/></svg>`,
    clock: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
    wifi: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/></svg>`,
    car: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M5 17H3v-5l2-5h14l2 5v5h-2"/><circle cx="7.5" cy="17.5" r="2"/><circle cx="16.5" cy="17.5" r="2"/><path d="M5 12h14"/></svg>`,
    snowflake: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07"/></svg>`,
    sparkle: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z"/></svg>`,
    utensils: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3v7"/></svg>`,
    users: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    plane: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>`,
    luggage: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="6" y="7" width="12" height="14" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M10 11v6M14 11v6"/></svg>`,
    bed: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 18v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M2 14h20"/><path d="M6 10V8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>`,
    chevLeft: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M15 18l-6-6 6-6"/></svg>`,
    chevRight: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 18l6-6-6-6"/></svg>`
  };

  const FALLBACK_SVG_URI =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#1A3E68"/>
            <stop offset="100%" stop-color="#0F233D"/>
          </linearGradient>
        </defs>
        <rect width="1200" height="750" fill="url(#g)"/>
        <rect x="40" y="40" width="1120" height="670" fill="none" stroke="#CBD5E1" stroke-opacity="0.28" stroke-width="2"/>
        <text x="600" y="365" text-anchor="middle" fill="#FFFFFF" font-family="Georgia, serif" font-size="42" letter-spacing="4">MODERN PALACE HOTEL</text>
        <text x="600" y="418" text-anchor="middle" fill="#CBD5E1" font-family="sans-serif" font-size="22" letter-spacing="3">MOSUL • IRAQ</text>
      </svg>`
    );

  function bindImageFallback(imgEl) {
    if (!imgEl) return;
    imgEl.onerror = function () {
      if (this.dataset.fallbackApplied) return;
      this.dataset.fallbackApplied = "1";
      this.src = FALLBACK_SVG_URI;
    };
  }

  function buildWhatsAppUrl(message) {
    const base = `https://wa.me/${HOTEL_DATA.contact.whatsappInternational}`;
    return `${base}?text=${encodeURIComponent(message)}`;
  }

  function getGeneralInquiryMessage() {
    if (state.lang === "ar") {
      return "السلام عليكم، أرغب بالاستفسار والحجز في فندق مودرن بالاس - الموصل، يرجى تزويدي بالتوفر والأسعار.";
    }
    return "Hello, I would like to inquire about room availability and booking at Modern Palace Hotel – Mosul.";
  }

  function getRoomBookingMessage(room) {
    if (state.lang === "ar") {
      return `السلام عليكم، أرغب بحجز ${room.name.ar} في فندق مودرن بالاس - الموصل، يرجى تزويدي بالتفاصيل والتوفر.`;
    }
    return `Hello, I would like to book the ${room.name.en} at Modern Palace Hotel – Mosul. Please share availability and details.`;
  }

  function getHeroBookingMessage({ checkIn, checkOut, roomName, guests }) {
    if (state.lang === "ar") {
      return [
        "السلام عليكم، أرغب بحجز إقامة في فندق مودرن بالاس - الموصل:",
        `• نوع الغرفة: ${roomName}`,
        `• تاريخ الوصول: ${checkIn}`,
        `• تاريخ المغادرة: ${checkOut}`,
        `• عدد النزلاء: ${guests}`,
        "يرجى تأكيد التوفر وتزويدي بالتفاصيل، شكراً لكم."
      ].join("\n");
    }
    return [
      "Hello, I would like to request a reservation at Modern Palace Hotel – Mosul:",
      `• Room Type: ${roomName}`,
      `• Check-in: ${checkIn}`,
      `• Check-out: ${checkOut}`,
      `• Guests: ${guests}`,
      "Please confirm availability and details. Thank you!"
    ].join("\n");
  }

  function populateWhatsAppIcons() {
    document.querySelectorAll(".wa-icon-slot").forEach((slot) => {
      slot.innerHTML = ICONS.whatsapp;
    });
  }

  function updateGeneralWhatsAppLinks() {
    const url = buildWhatsAppUrl(getGeneralInquiryMessage());
    const ids = ["floatingWaBtn", "locationWaBtn", "locationPhoneLink", "footerWaLink", "drawerWaBtn", "aboutWaBtn"];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.href = url;
    });

    const mapBtn = document.getElementById("locationMapBtn");
    if (mapBtn) mapBtn.href = HOTEL_DATA.contact.googleMapsUrl;
  }

  function formatDateISO(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }

  function initBookingDates() {
    const checkIn = document.getElementById("checkInInput");
    const checkOut = document.getElementById("checkOutInput");
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const todayStr = formatDateISO(today);
    const tomorrowStr = formatDateISO(tomorrow);

    checkIn.min = todayStr;
    checkIn.value = todayStr;
    checkOut.min = tomorrowStr;
    checkOut.value = tomorrowStr;

    checkIn.addEventListener("change", () => {
      if (!checkIn.value) return;
      const inDate = new Date(checkIn.value + "T00:00:00");
      const nextDay = new Date(inDate);
      nextDay.setDate(inDate.getDate() + 1);
      const nextDayStr = formatDateISO(nextDay);
      checkOut.min = nextDayStr;
      if (!checkOut.value || checkOut.value <= checkIn.value) {
        checkOut.value = nextDayStr;
      }
    });
  }

  function renderBookingSelects() {
    const roomSelect = document.getElementById("roomTypeSelect");
    const guestsSelect = document.getElementById("guestsSelect");
    const prevRoomIdx = roomSelect.selectedIndex >= 0 ? roomSelect.selectedIndex : 1;
    const prevGuestIdx = guestsSelect.selectedIndex >= 0 ? guestsSelect.selectedIndex : 1;

    roomSelect.innerHTML = HOTEL_DATA.rooms
      .map((room) => `<option value="${room.id}">${room.name[state.lang]}</option>`)
      .join("");
    roomSelect.selectedIndex = Math.min(prevRoomIdx, HOTEL_DATA.rooms.length - 1);

    const guestList = HOTEL_DATA.translations[state.lang].guestOptions;
    guestsSelect.innerHTML = guestList
      .map((label) => `<option value="${label}">${label}</option>`)
      .join("");
    guestsSelect.selectedIndex = Math.min(prevGuestIdx, guestList.length - 1);
  }

  function bindHeroBookingForm() {
    const form = document.getElementById("heroBookingForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const checkIn = document.getElementById("checkInInput").value;
      const checkOut = document.getElementById("checkOutInput").value;
      const roomSelect = document.getElementById("roomTypeSelect");
      const roomName = roomSelect.options[roomSelect.selectedIndex]?.text || "";
      const guests = document.getElementById("guestsSelect").value;

      const msg = getHeroBookingMessage({ checkIn, checkOut, roomName, guests });
      window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
    });
  }

  function renderHeroSlides() {
    const container = document.getElementById("heroSlides");
    const dotsWrap = document.getElementById("heroDots");
    const captionEl = document.getElementById("heroSlideCaption");

    container.innerHTML = HOTEL_DATA.heroSlides
      .map(
        (slide, idx) => `
          <div class="hero-slide ${idx === state.heroIndex ? "active" : ""}">
            <img src="${slide.image}" alt="${slide.caption[state.lang]}" />
          </div>
        `
      )
      .join("");

    container.querySelectorAll("img").forEach(bindImageFallback);

    dotsWrap.innerHTML = HOTEL_DATA.heroSlides
      .map(
        (_, idx) =>
          `<button type="button" class="hero-dot ${idx === state.heroIndex ? "active" : ""}" data-slide="${idx}" aria-label="Slide ${idx + 1}"></button>`
      )
      .join("");

    captionEl.textContent = HOTEL_DATA.heroSlides[state.heroIndex].caption[state.lang];

    dotsWrap.querySelectorAll(".hero-dot").forEach((btn) => {
      btn.addEventListener("click", () => {
        goToHeroSlide(Number(btn.dataset.slide));
        startHeroAutoPlay();
      });
    });
  }

  function goToHeroSlide(index) {
    const slides = document.querySelectorAll("#heroSlides .hero-slide");
    const dots = document.querySelectorAll("#heroDots .hero-dot");
    const captionEl = document.getElementById("heroSlideCaption");
    if (!slides.length) return;

    state.heroIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === state.heroIndex);
      if (idx === state.heroIndex) {
        const img = slide.querySelector("img");
        if (img) {
          img.style.animation = "none";
          void img.offsetWidth;
          img.style.animation = "";
        }
      }
    });

    dots.forEach((dot, idx) => dot.classList.toggle("active", idx === state.heroIndex));
    captionEl.textContent = HOTEL_DATA.heroSlides[state.heroIndex].caption[state.lang];
  }

  function startHeroAutoPlay() {
    clearInterval(state.heroTimer);
    state.heroTimer = setInterval(() => {
      goToHeroSlide(state.heroIndex + 1);
    }, 6500);
  }

  function renderAbout() {
    const mainImg = document.getElementById("aboutImgMain");
    const secImg = document.getElementById("aboutImgSecondary");
    const highlightsWrap = document.getElementById("aboutHighlights");

    mainImg.src = HOTEL_DATA.about.mainImage;
    secImg.src = HOTEL_DATA.about.secondaryImage;
    bindImageFallback(mainImg);
    bindImageFallback(secImg);

    highlightsWrap.innerHTML = HOTEL_DATA.about.highlights
      .map(
        (item) => `
          <div class="highlight-stat">
            <strong>${item.value}</strong>
            <span>${item.label[state.lang]}</span>
          </div>
        `
      )
      .join("");
  }

  function renderServices() {
    const grid = document.getElementById("servicesGrid");
    grid.innerHTML = HOTEL_DATA.services
      .map((service, idx) => {
        const featuredClass = service.featured ? "service-featured" : "";
        const badgeHtml = service.badge
          ? `<span class="service-featured-badge">★ ${service.badge[state.lang]}</span>`
          : "";
        return `
          <article class="service-card ${featuredClass} reveal reveal-up" style="transition-delay: ${Math.min(idx * 55, 350)}ms">
            ${badgeHtml}
            <div class="service-icon" aria-hidden="true">${ICONS[service.icon] || ICONS.sparkle}</div>
            <h3>${service.title[state.lang]}</h3>
            <p>${service.desc[state.lang]}</p>
          </article>
        `;
      })
      .join("");
  }

  function clearRoomTimers() {
    state.roomTimers.forEach((t) => clearInterval(t));
    state.roomTimers = [];
  }

  function renderRooms() {
    clearRoomTimers();
    const grid = document.getElementById("roomsGrid");
    const t = HOTEL_DATA.translations[state.lang];

    grid.innerHTML = HOTEL_DATA.rooms
      .map((room, rIdx) => {
        const waUrl = buildWhatsAppUrl(getRoomBookingMessage(room));
        const slidesHtml = room.images
          .map(
            (imgUrl, i) => `
              <div class="room-slide ${i === 0 ? "active" : ""}" data-img-idx="${i}">
                <img src="${imgUrl}" alt="${room.name[state.lang]} - ${i + 1}" loading="lazy" />
              </div>
            `
          )
          .join("");

        const dotsHtml = room.images
          .map(
            (_, i) =>
              `<button type="button" class="room-dot ${i === 0 ? "active" : ""}" data-dot="${i}" aria-label="Photo ${i + 1}"></button>`
          )
          .join("");

        return `
          <article class="room-card reveal reveal-up" style="transition-delay: ${rIdx * 90}ms">
            <div class="room-carousel" data-room-idx="${rIdx}">
              <div class="room-badges">
                <span class="room-tag">${room.tag[state.lang]}</span>
                <span class="room-size">${room.size}</span>
              </div>
              ${slidesHtml}
              <button type="button" class="room-arrow prev" aria-label="Previous Photo">${ICONS.chevLeft}</button>
              <button type="button" class="room-arrow next" aria-label="Next Photo">${ICONS.chevRight}</button>
              <div class="room-dots">${dotsHtml}</div>
            </div>

            <div class="room-body">
              <div class="room-header-row">
                <h3 class="room-title">${room.name[state.lang]}</h3>
              </div>
              <p class="room-desc">${room.desc[state.lang]}</p>
              <div class="room-features">
                <span class="room-feature-pill">${ICONS.bed} ${room.features.bed[state.lang]}</span>
                <span class="room-feature-pill">${room.features.guests[state.lang]}</span>
                <span class="room-feature-pill">${room.features.roomService[state.lang]}</span>
                <span class="room-feature-pill">${room.features.wifi[state.lang]}</span>
                <span class="room-feature-pill">${room.features.ac[state.lang]}</span>
              </div>
              <a href="${waUrl}" class="btn btn-whatsapp btn-block" target="_blank" rel="noopener noreferrer">
                <span class="wa-icon-slot">${ICONS.whatsapp}</span>
                <span>${t.roomBookBtn}</span>
              </a>
            </div>
          </article>
        `;
      })
      .join("");

    grid.querySelectorAll(".room-carousel").forEach((carousel, rIdx) => {
      const room = HOTEL_DATA.rooms[rIdx];
      const slides = carousel.querySelectorAll(".room-slide");
      const dots = carousel.querySelectorAll(".room-dot");
      let current = 0;

      carousel.querySelectorAll("img").forEach((img, imgIdx) => {
        bindImageFallback(img);
        img.addEventListener("click", () => {
          const roomLightboxSet = room.images.map((src, idx) => ({
            src,
            caption: `${room.name[state.lang]} (${idx + 1}/${room.images.length})`
          }));
          openLightbox(roomLightboxSet, imgIdx);
        });
      });

      function setSlide(nextIdx) {
        current = (nextIdx + slides.length) % slides.length;
        slides.forEach((s, i) => s.classList.toggle("active", i === current));
        dots.forEach((d, i) => d.classList.toggle("active", i === current));
      }

      carousel.querySelector(".prev").addEventListener("click", (e) => {
        e.stopPropagation();
        setSlide(current - 1);
      });

      carousel.querySelector(".next").addEventListener("click", (e) => {
        e.stopPropagation();
        setSlide(current + 1);
      });

      dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
          e.stopPropagation();
          setSlide(Number(dot.dataset.dot));
        });
      });

      let startX = 0;
      carousel.addEventListener(
        "touchstart",
        (e) => {
          startX = e.changedTouches[0].clientX;
        },
        { passive: true }
      );
      carousel.addEventListener(
        "touchend",
        (e) => {
          const diff = e.changedTouches[0].clientX - startX;
          if (Math.abs(diff) > 40) {
            setSlide(diff > 0 ? current - 1 : current + 1);
          }
        },
        { passive: true }
      );

      let paused = false;
      carousel.addEventListener("mouseenter", () => (paused = true));
      carousel.addEventListener("mouseleave", () => (paused = false));

      const timer = setInterval(() => {
        if (!paused) setSlide(current + 1);
      }, 4800 + rIdx * 700);
      state.roomTimers.push(timer);
    });
  }

  function renderShowcaseSlider() {
    const featuredItems = HOTEL_DATA.gallery.filter((item) => item.featured);
    const track = document.getElementById("showcaseTrack");
    const dotsWrap = document.getElementById("showcaseDots");
    if (state.showcaseIndex >= featuredItems.length) state.showcaseIndex = 0;

    track.innerHTML = featuredItems
      .map(
        (item, idx) => `
          <div class="showcase-slide ${idx === state.showcaseIndex ? "active" : ""}" data-idx="${idx}">
            <img src="${item.image}" alt="${item.title[state.lang]}" loading="lazy" />
            <div class="showcase-caption">
              <h3>${item.title[state.lang]}</h3>
              <p>${item.subtitle[state.lang]}</p>
            </div>
          </div>
        `
      )
      .join("");

    track.querySelectorAll("img").forEach(bindImageFallback);

    track.querySelectorAll(".showcase-slide").forEach((slide, idx) => {
      slide.addEventListener("click", () => {
        const set = featuredItems.map((it) => ({
          src: it.image,
          caption: `${it.title[state.lang]} — ${it.subtitle[state.lang]}`
        }));
        openLightbox(set, idx);
      });
    });

    dotsWrap.innerHTML = featuredItems
      .map(
        (_, idx) =>
          `<button type="button" class="showcase-dot ${idx === state.showcaseIndex ? "active" : ""}" data-dot="${idx}" aria-label="Showcase ${idx + 1}"></button>`
      )
      .join("");

    dotsWrap.querySelectorAll(".showcase-dot").forEach((dot) => {
      dot.addEventListener("click", () => {
        goToShowcaseSlide(Number(dot.dataset.dot));
        startShowcaseAutoPlay();
      });
    });
  }

  function goToShowcaseSlide(index) {
    const slides = document.querySelectorAll("#showcaseTrack .showcase-slide");
    const dots = document.querySelectorAll("#showcaseDots .showcase-dot");
    if (!slides.length) return;

    state.showcaseIndex = (index + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle("active", i === state.showcaseIndex));
    dots.forEach((d, i) => d.classList.toggle("active", i === state.showcaseIndex));
  }

  function startShowcaseAutoPlay() {
    clearInterval(state.showcaseTimer);
    state.showcaseTimer = setInterval(() => {
      goToShowcaseSlide(state.showcaseIndex + 1);
    }, 5500);
  }

  function bindShowcaseControls() {
    const slider = document.getElementById("showcaseSlider");
    document.getElementById("showcasePrev").addEventListener("click", () => {
      goToShowcaseSlide(state.showcaseIndex - 1);
      startShowcaseAutoPlay();
    });
    document.getElementById("showcaseNext").addEventListener("click", () => {
      goToShowcaseSlide(state.showcaseIndex + 1);
      startShowcaseAutoPlay();
    });

    slider.addEventListener("mouseenter", () => clearInterval(state.showcaseTimer));
    slider.addEventListener("mouseleave", startShowcaseAutoPlay);

    let touchStartX = 0;
    slider.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].clientX;
      },
      { passive: true }
    );
    slider.addEventListener(
      "touchend",
      (e) => {
        const diff = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(diff) > 45) {
          goToShowcaseSlide(diff > 0 ? state.showcaseIndex - 1 : state.showcaseIndex + 1);
          startShowcaseAutoPlay();
        }
      },
      { passive: true }
    );
  }

  function renderGalleryFilters() {
    const wrap = document.getElementById("galleryFilters");
    const t = HOTEL_DATA.translations[state.lang];
    const filters = [
      { key: "all", label: t.filterAll },
      { key: "exterior", label: t.filterExterior },
      { key: "rooms", label: t.filterRooms },
      { key: "lobby", label: t.filterLobby },
      { key: "dining", label: t.filterDining }
    ];

    wrap.innerHTML = filters
      .map(
        (f) =>
          `<button type="button" class="filter-btn ${state.galleryFilter === f.key ? "active" : ""}" data-filter="${f.key}">${f.label}</button>`
      )
      .join("");

    wrap.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.galleryFilter = btn.dataset.filter;
        renderGalleryFilters();
        renderGalleryGrid();
        observeReveals();
      });
    });
  }

  function renderGalleryGrid() {
    const grid = document.getElementById("galleryGrid");
    const items =
      state.galleryFilter === "all"
        ? HOTEL_DATA.gallery
        : HOTEL_DATA.gallery.filter((it) => it.category === state.galleryFilter);

    grid.innerHTML = items
      .map(
        (item, idx) => `
          <figure class="gallery-item img-hover-zoom reveal reveal-up" style="transition-delay: ${Math.min(idx * 45, 260)}ms" data-idx="${idx}">
            <img src="${item.image}" alt="${item.title[state.lang]}" loading="lazy" />
            <figcaption class="gallery-item-overlay">
              <span>${item.title[state.lang]}</span>
              <small>${item.subtitle[state.lang]}</small>
            </figcaption>
          </figure>
        `
      )
      .join("");

    grid.querySelectorAll(".gallery-item").forEach((card, idx) => {
      bindImageFallback(card.querySelector("img"));
      card.addEventListener("click", () => {
        const lightboxSet = items.map((it) => ({
          src: it.image,
          caption: `${it.title[state.lang]} — ${it.subtitle[state.lang]}`
        }));
        openLightbox(lightboxSet, idx);
      });
    });
  }

  function renderLocationLandmarks() {
    const wrap = document.getElementById("locationLandmarks");
    wrap.innerHTML = HOTEL_DATA.landmarks
      .map(
        (item) => `
          <div class="landmark-item">
            <strong>${item.name[state.lang]}</strong>
            <span>${item.distance[state.lang]}</span>
          </div>
        `
      )
      .join("");
  }

  function openLightbox(images, startIndex) {
    state.lightboxImages = images;
    state.lightboxIndex = startIndex;
    const modal = document.getElementById("lightbox");
    updateLightboxContent();
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    const modal = document.getElementById("lightbox");
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function updateLightboxContent() {
    const img = document.getElementById("lightboxImg");
    const caption = document.getElementById("lightboxCaption");
    const counter = document.getElementById("lightboxCounter");
    const item = state.lightboxImages[state.lightboxIndex];
    if (!item) return;

    img.dataset.fallbackApplied = "";
    img.src = item.src;
    img.alt = item.caption;
    bindImageFallback(img);
    caption.textContent = item.caption;
    counter.textContent = `${state.lightboxIndex + 1} / ${state.lightboxImages.length}`;
  }

  function stepLightbox(delta) {
    if (!state.lightboxImages.length) return;
    state.lightboxIndex =
      (state.lightboxIndex + delta + state.lightboxImages.length) % state.lightboxImages.length;
    updateLightboxContent();
  }

  function bindLightbox() {
    const modal = document.getElementById("lightbox");
    document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
    document.getElementById("lightboxPrev").addEventListener("click", () => stepLightbox(-1));
    document.getElementById("lightboxNext").addEventListener("click", () => stepLightbox(1));

    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
      if (!modal.classList.contains("active")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "ArrowRight") stepLightbox(1);
    });

    let swipeStart = 0;
    modal.addEventListener(
      "touchstart",
      (e) => {
        swipeStart = e.changedTouches[0].clientX;
      },
      { passive: true }
    );
    modal.addEventListener(
      "touchend",
      (e) => {
        const diff = e.changedTouches[0].clientX - swipeStart;
        if (Math.abs(diff) > 45) stepLightbox(diff > 0 ? -1 : 1);
      },
      { passive: true }
    );
  }

  function observeReveals() {
    if (state.revealObserver) state.revealObserver.disconnect();

    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    state.revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    elements.forEach((el) => state.revealObserver.observe(el));
  }

  function bindNavbarAndMobileMenu() {
    const navbar = document.getElementById("navbar");
    const openBtn = document.getElementById("mobileMenuBtn");
    const closeBtn = document.getElementById("mobileMenuClose");
    const drawer = document.getElementById("mobileDrawer");
    const backdrop = document.getElementById("mobileBackdrop");

    const onScroll = () => {
      navbar.classList.toggle("scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    function openMenu() {
      if (window.innerWidth >= 992) return;
      drawer.classList.add("active");
      backdrop.classList.add("active");
      drawer.setAttribute("aria-hidden", "false");
      backdrop.setAttribute("aria-hidden", "false");
      openBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }

    function closeMenu() {
      drawer.classList.remove("active");
      backdrop.classList.remove("active");
      drawer.setAttribute("aria-hidden", "true");
      backdrop.setAttribute("aria-hidden", "true");
      openBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    openBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    backdrop.addEventListener("click", closeMenu);

    drawer.querySelectorAll(".mobile-link").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && drawer.classList.contains("active")) closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 992 && drawer.classList.contains("active")) {
        closeMenu();
      }
    });
  }

  function applyLanguage(lang) {
    state.lang = lang;
    const t = HOTEL_DATA.translations[lang];

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = t.pageTitle;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll(".lang-badge").forEach((badge) => {
      badge.textContent = t.langToggleLabel;
    });

    renderHeroSlides();
    renderBookingSelects();
    renderAbout();
    renderServices();
    renderRooms();
    renderShowcaseSlider();
    renderGalleryFilters();
    renderGalleryGrid();
    renderLocationLandmarks();
    updateGeneralWhatsAppLinks();
    observeReveals();
  }

  function bindLanguageSwitchers() {
    const toggle = () => {
      applyLanguage(state.lang === "ar" ? "en" : "ar");
    };
    document.getElementById("langToggleDesktop").addEventListener("click", toggle);
    document.getElementById("langToggleMobile").addEventListener("click", toggle);
  }

  document.addEventListener("DOMContentLoaded", () => {
    populateWhatsAppIcons();
    initBookingDates();
    bindHeroBookingForm();
    bindNavbarAndMobileMenu();
    bindShowcaseControls();
    bindLightbox();
    bindLanguageSwitchers();

    applyLanguage("ar");
    startHeroAutoPlay();
    startShowcaseAutoPlay();
  });
})();
