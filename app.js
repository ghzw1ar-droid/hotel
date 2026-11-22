const C = HOTEL_CONFIG, $ = (s, e = document) => e.querySelector(s), $$ = (s, e = document) => [...e.querySelectorAll(s)];
let L = 'ar';
const T = o => o[L === 'ar' ? 0 : 1];
const im = (u, a = '') => `<img src="${u}" alt="${a}" loading="lazy" onerror="this.style.opacity=0">`;
const roomImg = i => U(C.images.rooms[i % C.images.rooms.length], 900);
const state = { rf: 'all', gf: 'all', lb: [], li: 0, ri: 0 };

// ---------- WhatsApp ----------
function book(roomName) {
  const v = id => $('#' + id).value, ar = L === 'ar';
  const room = roomName || (v('rm') && v('rm') !== 'any' ? C.rooms[+v('rm')][ar ? 'ar' : 'en'] : (ar ? 'غير محدد' : 'Any'));
  const note = v('nt').trim();
  const lines = ar
    ? [`مرحباً، أرغب بالحجز في ${C.name.ar}`, `الغرفة/الجناح: ${room}`, `الوصول: ${v('ci') || 'غير محدد'}`, `المغادرة: ${v('co') || 'غير محدد'}`, `البالغون: ${v('ad')} | الأطفال: ${v('ch')}`, note && `ملاحظة: ${note}`]
    : [`Hello, I would like to book at ${C.name.en}`, `Room/Suite: ${room}`, `Check-in: ${v('ci') || 'TBD'}`, `Check-out: ${v('co') || 'TBD'}`, `Adults: ${v('ad')} | Children: ${v('ch')}`, note && `Note: ${note}`];
  window.open(`https://wa.me/${C.wa}?text=${encodeURIComponent(lines.filter(Boolean).join('\n'))}`, '_blank', 'noopener');
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-book]'); if (b) { e.preventDefault(); book(b.dataset.room); }
});

// ---------- Language ----------
function setLang(l) {
  L = l; document.documentElement.lang = l; document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  $('#lang').textContent = l === 'ar' ? 'EN' : 'AR';
  $$('[data-ar]').forEach(e => e.textContent = e.dataset[l]);
  render();
}
$('#lang').onclick = () => setLang(L === 'ar' ? 'en' : 'ar');

// ---------- Renderers ----------
function tabs(el, items, key) {
  el.innerHTML = items.map(([k, a, e]) => `<button class="${state[key] === k ? 'on' : ''}" data-k="${k}">${L === 'ar' ? a : e}</button>`).join('');
  $$('button', el).forEach(b => b.onclick = () => { state[key] = b.dataset.k; render(); });
}
function render() {
  $('#rm').innerHTML = `<option value="any">${L === 'ar' ? 'أي غرفة' : 'Any room'}</option>` + C.rooms.map((r, i) => `<option value="${i}">${r[L]}</option>`).join('');
  tabs($('#roomTabs'), [['all', 'الكل', 'All'], ['room', 'غرف', 'Rooms'], ['suite', 'أجنحة', 'Suites']], 'rf');
  $('#roomGrid').innerHTML = C.rooms.map((r, i) => r.t === state.rf || state.rf === 'all' ? `<article class="card rv"><div class="ci">${im(roomImg(i), r.en)}<em>${r.m2} m²</em></div><div class="cb"><h3>${r[L]}</h3><p>${T(r.bed)}</p><div class="chips">${(L === 'ar' ? r.f : r.fe).map(f => `<span>${f}</span>`).join('')}</div><div class="price">${C.currency}${r.p} <small style="display:inline;letter-spacing:0;color:#999">${L === 'ar' ? '/ ليلة (تجريبي)' : '/ night (demo)'}</small></div><div class="row"><button class="o" data-d="${i}">${L === 'ar' ? 'عرض التفاصيل' : 'Details'}</button><button class="btn" data-book data-room="${r[L]}">${L === 'ar' ? 'احجز عبر واتساب' : 'Book'}</button></div></div></article>` : '').join('');
  $$('[data-d]').forEach(b => b.onclick = () => openRoom(+b.dataset.d));
  $('#svcGrid').innerHTML = C.services.map(s => `<div class="s rv"><i data-lucide="${s[0]}"></i><h3>${L === 'ar' ? s[1] : s[2]}</h3><p>${L === 'ar' ? s[3] : s[4]}</p></div>`).join('');
  $('#dineGrid').innerHTML = C.dining.map((d, i) => `<div class="card rv"><div class="ci">${im(C.images.dining[i], d[1])}</div><div class="cb"><h3>${L === 'ar' ? d[0] : d[1]}</h3><p>${L === 'ar' ? d[2] : d[3]}</p></div></div>`).join('');
  tabs($('#galTabs'), [['all', 'الكل', 'All'], ['rooms', 'الغرف', 'Rooms'], ['dining', 'المطعم', 'Dining'], ['hero', 'الفندق', 'Hotel']], 'gf');
  const g = C.gallery.filter(x => state.gf === 'all' || x[0] === state.gf || (state.gf === 'hero' && x[0] === 'about'));
  state.lb = g.map(([c, i]) => c === 'rooms' ? roomImg(i) : c === 'about' ? C.images.about : C.images[c][i]);
  $('#galGrid').innerHTML = state.lb.map((u, i) => `<img src="${u}" alt="" loading="lazy" data-i="${i}" onerror="this.style.display='none'">`).join('');
  $$('#galGrid img').forEach(im2 => im2.onclick = () => openLb(+im2.dataset.i));
  $('#distGrid').innerHTML = C.dist.map(d => `<div class="card rv"><div><b>${L === 'ar' ? d[2] : d[3]}</b>${L === 'ar' ? d[0] : d[1]}</div></div>`).join('');
  showRev(); lucide && lucide.createIcons(); observe();
}
function showRev() { const r = C.reviews[state.ri % C.reviews.length], e = $('#rev'); e.innerHTML = `“${L === 'ar' ? r[0] : r[1]}”<span>— ${L === 'ar' ? r[2] : r[3]}</span>`; }
setInterval(() => { const e = $('#rev'); e.style.opacity = 0; setTimeout(() => { state.ri++; showRev(); e.style.opacity = 1; }, 500); }, 5500);

// ---------- Modal & Lightbox ----------
function openRoom(i) {
  const r = C.rooms[i], m = $('#modal');
  m.innerHTML = `<div class="mb"><div class="ci">${im(roomImg(i), r.en)}</div><div class="cb"><h3>${r[L]}</h3><p>${r.m2} m² · ${T(r.bed)}</p><div class="chips">${(L === 'ar' ? r.f : r.fe).map(f => `<span>${f}</span>`).join('')}</div><p>${T(C.inRoom)}</p><button class="btn" data-book data-room="${r[L]}">${L === 'ar' ? 'احجز هذه الغرفة عبر واتساب' : 'Book this room via WhatsApp'}</button></div></div><button class="x" aria-label="close">×</button>`;
  m.hidden = false; m.onclick = e => { if (e.target === m || e.target.classList.contains('x')) m.hidden = true; };
}
function openLb(i) { state.li = i; drawLb(); $('#lb').hidden = false; }
function drawLb() {
  const n = state.lb.length; state.li = (state.li + n) % n;
  $('#lb').innerHTML = `<button class="x">×</button><button class="nv" style="inset-inline-start:1rem" data-s="-1">‹</button><img src="${state.lb[state.li]}" alt=""><button class="nv" style="inset-inline-end:1rem" data-s="1">›</button>`;
}
$('#lb').onclick = e => { const s = e.target.dataset.s; if (s) { state.li += +s; drawLb(); } else if (e.target.tagName !== 'IMG') $('#lb').hidden = true; };
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { $('#lb').hidden = $('#modal').hidden = true; }
  if (!$('#lb').hidden && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) { state.li += (e.key === 'ArrowRight') === (L === 'en') ? 1 : -1; drawLb(); }
});

// ---------- Hero (facade first) + Ken Burns + parallax ----------
const sl = $('#slides'); sl.innerHTML = C.images.hero.map((u, i) => `<img src="${u}" alt="${C.name.en}" ${i ? 'loading="lazy"' : 'fetchpriority="high"'} onerror="this.remove()">`).join('');
let hi = 0; const hs = () => $$('img', sl);
(() => { const f = hs()[0]; f && f.classList.add('on'); })();
setInterval(() => { const a = hs(); if (a.length < 2) return; a[hi % a.length].classList.remove('on'); hi++; a[hi % a.length].classList.add('on'); }, 6500);
$('#aboutImg').src = C.images.about; $('#aboutImg').onerror = e => e.target.style.opacity = 0;
addEventListener('scroll', () => { $('#nav').classList.toggle('solid', scrollY > 60); if (scrollY < innerHeight) sl.style.transform = `translateY(${scrollY * .25}px)`; }, { passive: true });

// ---------- Reveal + counters ----------
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
function observe() { $$('.rv:not(.in)').forEach((e, i) => { e.style.transitionDelay = (i % 4) * 90 + 'ms'; io.observe(e); }); }
const co = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; co.unobserve(e.target); const n = +e.target.dataset.n, d = n % 1 ? 1 : 0; let t = 0;
  const id = setInterval(() => { t += .05; e.target.textContent = (n * Math.min(t, 1)).toFixed(d); if (t >= 1) clearInterval(id); }, 40);
}));
$$('[data-n]').forEach(e => co.observe(e));
$$('.about .rv, #about .rv').forEach(e => e.classList.add('rv'));
const today = new Date().toISOString().slice(0, 10); $('#ci').min = $('#co').min = today;
setLang('ar');
