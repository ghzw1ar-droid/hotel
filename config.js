// كل النصوص والأسعار والصور هنا — عدّلها بسهولة | Edit all content here
const U = (id, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;
const HOTEL_CONFIG = {
  wa: "9647800098611", phone: "07800098611",
  name: { ar: "فندق قصر الجادرية", en: "Al Jadriya Palace" },
  currency: "$",
  // ⚠ صور من الإنترنت للعرض فقط — الصورة الأولى = واجهة الفندق (استبدلها بصورة الواجهة الحقيقية)
  images: {
    hero: [U("1566073771259-6a8506099945", 1920), U("1542314831-068cd1dbfeeb", 1920), U("1564501049412-61c2a3083791", 1920), U("1571896349842-33c89424de2d", 1920)],
    about: U("1563911302283-d2bc129e7570", 1000),
    dining: [U("1517840901100-8179e982acb7", 900), U("1544148103-0773bf10d330", 900), U("1534438327276-14e5300c3a48", 900), U("1571003123894-1f0594d2b5d9", 900)],
    rooms: ["1578683010236-d716f9a3f461", "1590490360182-c33d57733427", "1595576508898-0ad5c879a061", "1631049307264-da0ec9d70304", "1618773928121-c32242e63f39", "1611892440504-42a792e24d32", "1582719508461-905c673771fd"]
  },
  rooms: [
    { t: "room", ar: "غرفة توأم ديلوكس", en: "Deluxe Twin Room", m2: 36, bed: ["سريران مفردان", "2 Single Beds"], p: 80, f: ["شرفة", "إطلالة على المدينة", "تكييف"], fe: ["Balcony", "City view", "A/C"] },
    { t: "room", ar: "غرفة مزدوجة ديلوكس مع شرفة", en: "Deluxe Double Room with Balcony", m2: 38, bed: ["سرير مزدوج كبير", "1 Large Double Bed"], p: 85, f: ["شرفة", "إطلالة على المدينة", "واي فاي"], fe: ["Balcony", "City view", "Wi-Fi"] },
    { t: "suite", ar: "جناح جونيور", en: "Junior Suite", m2: 40, bed: ["سرير مزدوج كبير", "1 Large Double Bed"], p: 110, f: ["شرفة", "منطقة جلوس", "إطلالة على المعالم"], fe: ["Balcony", "Seating area", "Landmark view"] },
    { t: "room", ar: "غرفة ديلوكس كينغ", en: "Deluxe King Room", m2: 41, bed: ["سرير مزدوج كبير", "1 Large Double Bed"], p: 95, f: ["شرفة", "ثلاجة", "حمام خاص"], fe: ["Balcony", "Fridge", "Private bath"] },
    { t: "room", ar: "غرفة كوين ديلوكس", en: "Deluxe Queen Room", m2: 49, bed: ["سرير مزدوج كبير", "1 Large Double Bed"], p: 105, f: ["مساحة واسعة", "شرفة", "ثلاجة"], fe: ["Spacious", "Balcony", "Fridge"] },
    { t: "suite", ar: "جناح عائلي", en: "Family Suite", m2: 51, bed: ["سرير كبير جداً + سريران كبيران", "1 XL Double + 2 Large Double Beds"], p: 140, f: ["مناسب للعائلات", "شرفة", "إطلالة على المدينة"], fe: ["Family-friendly", "Balcony", "City view"] },
    { t: "suite", ar: "جناح ديلوكس", en: "Deluxe Suite", m2: 57, bed: ["غرفة نوم منفصلة + صالة مع كنبة سرير", "Separate bedroom + living room (sofa bed)"], p: 165, f: ["غرفة نوم منفصلة", "صالة", "حمام خاص"], fe: ["Separate bedroom", "Living room", "Private bath"] }
  ],
  inRoom: ["عزل صوتي · تلفاز بقنوات فضائية · خزنة · غلاية · ميني بار · مدخل خاص · مجفف شعر ومستلزمات مجانية", "Soundproofing · Satellite TV · Safe · Kettle · Minibar · Private entrance · Hairdryer & free toiletries"],
  services: [
    ["concierge-bell", "خدمة الغرف", "Room Service", "طلباتك تصلك إلى باب الغرفة.", "Delivered right to your door."],
    ["coffee", "فطور في الغرفة", "Breakfast in Room", "ابدأ يومك بهدوء في غرفتك.", "Start your day in comfort."],
    ["plane", "نقل المطار", "Airport Shuttle", "20 كم إلى مطار بغداد الدولي.", "20 km to Baghdad Int'l Airport."],
    ["luggage", "تخزين الأمتعة", "Luggage Storage", "نحفظ أمتعتك قبل الوصول وبعد المغادرة.", "Before check-in and after check-out."],
    ["car", "مواقف مجانية", "Free Parking", "مواقف خاصة مجانية مع شاحن سيارات كهربائية.", "Free private parking with EV charging."],
    ["clock", "استقبال 24 ساعة", "24-Hour Front Desk", "فريقنا في خدمتك دائماً.", "Our team is always here."],
    ["sparkles", "تنظيف يومي", "Daily Housekeeping", "نظافة تامة (8.7 من 10).", "Spotless rooms (8.7/10)."],
    ["snowflake", "تكييف", "Air Conditioning", "تكييف قوي في كل غرفة.", "Powerful A/C in every room."],
    ["wifi", "واي فاي مجاني", "Free Wi-Fi", "إنترنت سريع مجاني (8.8 من 10).", "Free high-speed internet (8.8/10)."],
    ["utensils", "إفطار", "Breakfast Buffet", "بوفيه شرقي وأمريكي حلال.", "Middle Eastern & American halal buffet."]
  ],
  dining: [["المطعم", "Restaurant", "بوفيه إفطار وغداء وعشاء بنكهات شرقية وغربية.", "Buffet breakfast, lunch & dinner, Eastern & Western."], ["ركن الإفطار", "Breakfast Corner", "طازج ومتنوع كل صباح.", "Fresh and varied every morning."], ["النادي الرياضي", "Fitness Center", "تمرّن بمعدات حديثة.", "Modern equipment."], ["التراس والحديقة", "Terrace & Garden", "جلسات هادئة بعد يوم طويل.", "A calm place to unwind."]],
  gallery: [["rooms", 0], ["rooms", 2], ["rooms", 5], ["dining", 0], ["dining", 1], ["dining", 3], ["hero", 0], ["hero", 2], ["about", 0]],
  reviews: [["موظفو الاستقبال ودودون جداً والغرفة نظيفة تماماً.", "Very friendly reception and a spotless room.", "أحمد · بغداد", "Ahmed · Baghdad"], ["التكييف ممتاز والغرف عازلة للصوت فعلاً.", "Great A/C and truly soundproof rooms.", "سارة · أربيل", "Sara · Erbil"], ["إفطار غني وموقع ممتاز قرب جادرية مول.", "Rich breakfast and a great spot near Jadriya Mall.", "James · UK", "James · UK"]],
  dist: [["جادرية مول", "Jadriya Mall", "مشياً", "Walking"], ["جامعة بغداد", "University of Baghdad", "مشياً", "Walking"], ["وسط بغداد", "Baghdad Center", "2.5 كم", "2.5 km"], ["مطار بغداد الدولي", "Baghdad Int'l Airport", "20 كم · 25–30 د", "20 km · 25–30 min"]]
};
