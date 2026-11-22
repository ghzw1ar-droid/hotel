/**
 * ============================================================================
 * MODERN PALACE HOTEL – MOSUL | CENTRAL DATA & DEMO PHOTO CONFIGURATION
 * ============================================================================
 * Replace any Unsplash URL below with real Modern Palace Hotel photography
 * to convert this showcase prototype into production in seconds.
 */

const HOTEL_DATA = {
  contact: {
    whatsappDisplay: "07800098611",
    whatsappInternational: "9647800098611",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Modern+Palace+Hotel+Mosul+Iraq",
    bookingReferenceUrl: "https://www.booking.com/hotel/iq/modern-palace-mosul.ar.html"
  },

  heroSlides: [
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=85",
      caption: {
        ar: "الواجهة المعمارية الفاخرة – إطلالة نهارية",
        en: "Architectural Hotel Facade – Daylight View"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=85",
      caption: {
        ar: "إطلالة الغروب والساعة الذهبية – فندق مودرن بالاس",
        en: "Golden Hour Exterior – Modern Palace Hotel"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1920&q=85",
      caption: {
        ar: "الإضاءة الليلية الفاخرة في قلب الموصل",
        en: "Illuminated Night Facade in the Heart of Mosul"
      }
    }
  ],

  about: {
    mainImage: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=85",
    highlights: [
      { value: "24/7", label: { ar: "خدمة غرف متواصلة", en: "Room Service" } },
      { value: "100%", label: { ar: "حجز فوري عبر واتساب", en: "Direct WhatsApp Booking" } },
      { value: "VIP", label: { ar: "موقع مركزي بالموصل", en: "Prime Mosul Location" } }
    ]
  },

  services: [
    {
      id: "room-service",
      featured: true,
      icon: "bell",
      badge: { ar: "خدمة مميزة 24/7", en: "Signature Highlight" },
      title: { ar: "خدمة الغرف على مدار الساعة", en: "24/7 Room Service" },
      desc: {
        ar: "استمتع بأشهى الوجبات والمشروبات الساخنة والباردة وتلبية جميع احتياجاتك مباشرة إلى باب غرفتك بسرعة واحترافية طوال اليوم والليل.",
        en: "Enjoy freshly prepared meals, beverages, and personalized in-room assistance delivered promptly to your door day and night."
      }
    },
    {
      id: "front-desk",
      icon: "clock",
      title: { ar: "استقبال يعمل 24 ساعة", en: "24-Hour Front Desk" },
      desc: {
        ar: "فريق استقبال محترف جاهز للترحيب بكم وتسجيل الوصول السريع وتلبية استفساراتكم على مدار الساعة.",
        en: "Dedicated reception team ready for seamless check-in, check-out, and guest assistance around the clock."
      }
    },
    {
      id: "wifi",
      icon: "wifi",
      title: { ar: "إنترنت واي فاي مجاني فائق السرعة", en: "Free High-Speed Wi-Fi" },
      desc: {
        ar: "تغطية إنترنت سريعة ومستقرة في جميع الغرف والأجنحة والردهة لرجال الأعمال والعائلات.",
        en: "Reliable high-speed wireless connectivity across all suites, rooms, and executive lounges."
      }
    },
    {
      id: "parking",
      icon: "car",
      title: { ar: "موقف سيارات مجاني", en: "Free Private Parking" },
      desc: {
        ar: "موقف خاص ومؤمّن لسيارات النزلاء مجاناً مع سهولة الوصول المباشر إلى مدخل الفندق.",
        en: "Secure, complimentary on-site private parking with convenient access to the hotel entrance."
      }
    },
    {
      id: "ac",
      icon: "snowflake",
      title: { ar: "تكييف وتدفئة مركزية", en: "Air Conditioning & Heating" },
      desc: {
        ar: "أنظمة تحكم مناخي حديثة وهادئة تضمن أجواءً مثالية في جميع فصول السنة.",
        en: "Whisper-quiet individual climate control for year-round indoor comfort."
      }
    },
    {
      id: "housekeeping",
      icon: "sparkle",
      title: { ar: "خدمة تنظيف يومية للغرف", en: "Daily Housekeeping" },
      desc: {
        ar: "عناية يومية فائقة بنظافة الغرف وتعقيمها وتبديل البياضات الفاخرة بانتظام.",
        en: "Meticulous daily room cleaning, sanitization, and fresh luxury linens."
      }
    },
    {
      id: "dining",
      icon: "utensils",
      title: { ar: "إفطار ومطعم الفندق", en: "Breakfast & Hotel Dining" },
      desc: {
        ar: "بوفيه إفطار طازج وقائمة طعام شرقية وعالمية مُعدّة بعناية لضيوف الفندق.",
        en: "Fresh daily breakfast and curated Iraqi & international cuisine in a refined dining atmosphere."
      }
    },
    {
      id: "family-suites",
      icon: "users",
      title: { ar: "غرف عائلية وأجنحة فاخرة", en: "Family Rooms & Suites" },
      desc: {
        ar: "خيارات إقامة رحبة وهادئة مصممة لخصوصية العائلات وراحة كبار الشخصيات.",
        en: "Spacious, quiet accommodations thoughtfully designed for families and VIP stays."
      }
    },
    {
      id: "airport",
      icon: "plane",
      title: { ar: "خدمة التوصيل من وإلى المطار", en: "Airport Shuttle Service" },
      desc: {
        ar: "تنظيم رحلات نقل مريحة وآمنة من وإلى المطار عند الطلب المسبق عبر واتساب.",
        en: "Comfortable private airport pickup and drop-off arranged smoothly upon request."
      }
    },
    {
      id: "concierge",
      icon: "luggage",
      title: { ar: "حفظ الأمتعة وخدمة الكونسيرج", en: "Luggage Storage & Concierge" },
      desc: {
        ar: "حفظ آمن للأمتعة وتنظيم الجولات والمواصلات داخل مدينة الموصل بكل يسر.",
        en: "Secure luggage storage and local concierge assistance for smooth travel across Mosul."
      }
    }
  ],

  rooms: [
    {
      id: "standard-single",
      name: { ar: "غرفة مفردة قياسية", en: "Standard Single Room" },
      tag: { ar: "مثالية لرجال الأعمال", en: "Business Favorite" },
      size: "28 m²",
      desc: {
        ar: "غرفة أنيقة وهادئة مصممة للراحة والعمل بكفاءة، مجهزة بسرير فاخر ومكتب عمل وإضاءة دافئة مع خدمة غرف متواصلة.",
        en: "A serene, refined space tailored for solo and business travelers, featuring a plush bed, work desk, and 24/7 room service."
      },
      features: {
        bed: { ar: "سرير مفرد كوين", en: "Queen Bed" },
        guests: { ar: "نزيل واحد", en: "1 Guest" },
        wifi: { ar: "واي فاي سريع", en: "Fast Wi-Fi" },
        roomService: { ar: "خدمة غرف 24/7", en: "24/7 Room Service" },
        ac: { ar: "تكييف مركزي", en: "Climate AC" }
      },
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      id: "deluxe-double",
      name: { ar: "غرفة مزدوجة ديلوكس", en: "Deluxe Double Room" },
      tag: { ar: "الأكثر طلباً", en: "Most Popular" },
      size: "36 m²",
      desc: {
        ar: "مساحة فسيحة بتصميم كلاسيكي معاصر تضم سريراً مزدوجاً كينج أو سريرين منفصلين، مع جلسة جانبية وإطلالة مميزة على المدينة.",
        en: "Generously proportioned contemporary elegance with a King bed or twin setup, lounge corner, and city views."
      },
      features: {
        bed: { ar: "سرير كينج فاخر", en: "Luxury King Bed" },
        guests: { ar: "حتى نزيلين", en: "Up to 2 Guests" },
        wifi: { ar: "واي فاي سريع", en: "Fast Wi-Fi" },
        roomService: { ar: "خدمة غرف 24/7", en: "24/7 Room Service" },
        ac: { ar: "تكييف مركزي", en: "Climate AC" }
      },
      images: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      id: "family-room",
      name: { ar: "غرفة عائلية رحبة", en: "Executive Family Room" },
      tag: { ar: "خصوصية للعائلات", en: "Family Comfort" },
      size: "52 m²",
      desc: {
        ar: "خيار مثالي للعائلات الباحثة عن الرحابة والهدوء، تضم أسرة مريحة ومنطقة جلوس متكاملة مع كافة مستلزمات الضيافة اليومية.",
        en: "Designed for effortless family stays with generous space, multiple plush beds, and a welcoming sitting area."
      },
      features: {
        bed: { ar: "سرير كينج + سريرين", en: "King + 2 Singles" },
        guests: { ar: "حتى 4 نزلاء", en: "Up to 4 Guests" },
        wifi: { ar: "واي فاي سريع", en: "Fast Wi-Fi" },
        roomService: { ar: "خدمة غرف 24/7", en: "24/7 Room Service" },
        ac: { ar: "تكييف مركزي", en: "Climate AC" }
      },
      images: [
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      id: "palace-suite",
      name: { ar: "جناح بالاس الفاخر", en: "Royal Palace Suite" },
      tag: { ar: "فخامة VIP", en: "Signature Suite" },
      size: "75 m²",
      desc: {
        ar: "قمة الفخامة في فندق مودرن بالاس؛ يضم غرفة نوم رئيسية وصالة استقبال مستقلة وحماماً فاخراً مع أولوية تامة لخدمة الغرف.",
        en: "The pinnacle of Modern Palace hospitality, offering a master bedroom, private reception salon, and priority 24/7 butler-style room service."
      },
      features: {
        bed: { ar: "سرير ملكي + صالة", en: "Master King + Salon" },
        guests: { ar: "حتى 4 نزلاء", en: "Up to 4 Guests" },
        wifi: { ar: "واي فاي سريع", en: "Fast Wi-Fi" },
        roomService: { ar: "خدمة غرف VIP", en: "VIP Room Service" },
        ac: { ar: "تكييف مركزي", en: "Climate AC" }
      },
      images: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80"
      ]
    }
  ],

  gallery: [
    {
      category: "exterior",
      featured: true,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85",
      title: { ar: "الواجهة الخارجية للفندق", en: "Hotel Exterior Facade" },
      subtitle: { ar: "تصميم معماري مهيب في قلب الموصل", en: "Architectural grandeur in central Mosul" }
    },
    {
      category: "lobby",
      featured: true,
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=85",
      title: { ar: "الردهة الرئيسية والاستقبال", en: "Grand Lobby & Reception" },
      subtitle: { ar: "ترحيب راقٍ وخدمة استقبال 24 ساعة", en: "Warm luxury welcome & 24-hour reception" }
    },
    {
      category: "rooms",
      featured: true,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85",
      title: { ar: "جناح بالاس الفاخر", en: "Royal Palace Suite" },
      subtitle: { ar: "تفاصيل راقية وإقامة ملكية", en: "Refined interiors and regal comfort" }
    },
    {
      category: "dining",
      featured: true,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85",
      title: { ar: "مطعم الفندق وخدمة الغرف", en: "Fine Dining & Room Service" },
      subtitle: { ar: "إفطار طازج وأطباق فاخرة على مدار الساعة", en: "Fresh breakfast and curated dining anytime" }
    },
    {
      category: "exterior",
      featured: false,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=85",
      title: { ar: "الإضاءة الليلية للواجهة", en: "Illuminated Night Exterior" },
      subtitle: { ar: "أجواء مسائية راقية", en: "Refined evening architectural lighting" }
    },
    {
      category: "rooms",
      featured: false,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
      title: { ar: "غرفة ديلوكس مزدوجة", en: "Deluxe Double Room" },
      subtitle: { ar: "راحة متكاملة وتفاصيل عصرية", en: "Modern comfort with timeless elegance" }
    },
    {
      category: "lobby",
      featured: false,
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85",
      title: { ar: "صالة الضيوف التنفيذية", en: "Executive Guest Lounge" },
      subtitle: { ar: "مساحة هادئة للاجتماعات والاسترخاء", en: "Quiet lounge for meetings and relaxation" }
    },
    {
      category: "dining",
      featured: false,
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85",
      title: { ar: "ركن القهوة والضيافة", en: "Lounge Café & Hospitality" },
      subtitle: { ar: "مشروبات مختارة وضيافة أصيلة", en: "Artisan beverages and authentic Iraqi hospitality" }
    }
  ],

  landmarks: [
    { name: { ar: "وسط مدينة الموصل والمراكز التجارية", en: "Mosul City Center & Business District" }, distance: { ar: "دقائق معدودة", en: "Minutes away" } },
    { name: { ar: "جامعة الموصل والمنطقة الأكاديمية", en: "University of Mosul District" }, distance: { ar: "قريب ومباشر", en: "Easy direct access" } },
    { name: { ar: "كورنيش نهر دجلة والمطاعم", en: "Tigris Riverfront & Dining" }, distance: { ar: "وصول سريع", en: "Quick drive" } },
    { name: { ar: "موقف السيارات الخاص بالفندق", en: "Private On-Site Hotel Parking" }, distance: { ar: "مجاني للنزلاء", en: "Free for Guests" } }
  ],

  translations: {
    ar: {
      pageTitle: "فندق مودرن بالاس – الموصل | Modern Palace Hotel Mosul",
      brandName: "فندق مودرن بالاس",
      brandLocation: "الموصل • العراق",
      navHome: "الرئيسية",
      navAbout: "عن الفندق",
      navServices: "الخدمات",
      navRooms: "الغرف والأجنحة",
      navGallery: "معرض الصور",
      navLocation: "الموقع",
      navBookNow: "احجز عبر واتساب",
      langToggleLabel: "EN",
      heroBadge: "ضيافة فاخرة في قلب الموصل",
      heroTitle: "فندق مودرن بالاس – الموصل",
      heroSubtitle: "فخامة معمارية عصرية، خدمة غرف على مدار الساعة، وتجربة إقامة استثنائية لرجال الأعمال والعائلات في مدينة الموصل.",
      labelCheckIn: "تاريخ الوصول",
      labelCheckOut: "تاريخ المغادرة",
      labelRoomType: "نوع الغرفة",
      labelGuests: "عدد النزلاء",
      heroBookBtn: "احجز الآن عبر واتساب",
      guestOptions: ["1 نزيل", "2 نزيل", "3 نزلاء", "4 نزلاء", "5+ نزلاء"],
      aboutEyebrow: "عن فندق مودرن بالاس",
      aboutTitle: "أناقة كلاسيكية تلتقي بالراحة العصرية",
      aboutDesc1: "يجمع فندق مودرن بالاس في الموصل بين الرقي المعماري والضيافة العراقية الأصيلة لتقديم تجربة إقامة متكاملة تلبي تطلعات المسافرين.",
      aboutDesc2: "سواء كانت زيارتك للموصل للعمل أو مع العائلة، نوفر لك غرفاً وأجنحة مجهزة بأعلى المعايير مع خدمة غرف متاحة 24 ساعة وحجز فوري وسلس عبر واتساب.",
      aboutBadgeNumber: "24/7",
      aboutBadgeText: "خدمة غرف واستقبال",
      aboutExploreRooms: "استكشف الغرف والأجنحة",
      aboutInquire: "تواصل معنا فوراً",
      servicesEyebrow: "مرافق وخدمات الفندق",
      servicesTitle: "خدمات تنفيذية مصممة لراحتك",
      servicesSubtitle: "نضع راحتك في صدارة أولوياتنا عبر مجموعة متكاملة من الخدمات الفندقية الراقية وعلى رأسها خدمة الغرف المتوفرة على مدار الساعة.",
      roomsEyebrow: "الإقامة الفاخرة",
      roomsTitle: "الغرف والأجنحة",
      roomsSubtitle: "اختر غرفتك المثالية واحجز مباشرة خلال ثوانٍ عبر واتساب بدون أي تعقيدات أو بطاقات دفع مسبق.",
      roomBookBtn: "احجز هذه الغرفة عبر واتساب",
      galleryEyebrow: "جولة مصورة",
      galleryTitle: "معرض صور الفندق",
      gallerySubtitle: "استعرض الواجهة المعمارية، الردهة الفخمة، الغرف والأجنحة، ومطعم الفندق. انقر على أي صورة للعرض الكامل.",
      filterAll: "الكل",
      filterExterior: "الواجهة",
      filterRooms: "الغرف والأجنحة",
      filterLobby: "الردهة",
      filterDining: "المطعم والضيافة",
      locationEyebrow: "موقع استراتيجي",
      locationTitle: "موقعنا في قلب الموصل",
      locationSubtitle: "سهولة الوصول إلى المراكز التجارية والحيوية في مدينة الموصل مع موقف سيارات خاص ومجاني للنزلاء.",
      locationAddress: "فندق مودرن بالاس، الموصل، محافظة نينوى، العراق",
      labelWhatsappDirect: "الحجز والاستفسار المباشر (واتساب):",
      locationWaCta: "احجز أو استفسر عبر واتساب",
      locationOpenMaps: "افتح في خرائط Google",
      footerDesc: "وجهة الضيافة الراقية في مدينة الموصل؛ غرف وأجنحة فاخرة، خدمة غرف على مدار الساعة، وحجز مباشر وفوري عبر واتساب.",
      footerQuickLinks: "روابط سريعة",
      footerContactTitle: "الحجز المباشر والتواصل",
      footerWaLabel: "احجز عبر واتساب 24/7",
      footerCopyright: "© 2026 فندق مودرن بالاس – الموصل. جميع الحقوق محفوظة.",
      footerDemoNote: "نسخة عرض تجريبية بصور قابلة للاستبدال الفوري",
      floatingWaTooltip: "احجز الآن عبر واتساب"
    },
    en: {
      pageTitle: "Modern Palace Hotel – Mosul | Luxury Hospitality in Iraq",
      brandName: "Modern Palace Hotel",
      brandLocation: "Mosul • Iraq",
      navHome: "Home",
      navAbout: "About",
      navServices: "Services",
      navRooms: "Rooms & Suites",
      navGallery: "Gallery",
      navLocation: "Location",
      navBookNow: "Book via WhatsApp",
      langToggleLabel: "عربي",
      heroBadge: "Luxury Hospitality in the Heart of Mosul",
      heroTitle: "Modern Palace Hotel – Mosul",
      heroSubtitle: "Contemporary architectural elegance, 24/7 room service, and an elevated stay tailored for business travelers and families in Mosul.",
      labelCheckIn: "Check-in Date",
      labelCheckOut: "Check-out Date",
      labelRoomType: "Room Type",
      labelGuests: "Guests",
      heroBookBtn: "Book Now via WhatsApp",
      guestOptions: ["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5+ Guests"],
      aboutEyebrow: "About Modern Palace",
      aboutTitle: "Classical Elegance Meets Modern Comfort",
      aboutDesc1: "Modern Palace Hotel in Mosul blends timeless architectural poise with warm Iraqi hospitality to deliver a seamless luxury experience.",
      aboutDesc2: "Whether visiting Mosul for executive business or a family stay, enjoy refined suites, round-the-clock room service, and effortless instant booking via WhatsApp.",
      aboutBadgeNumber: "24/7",
      aboutBadgeText: "Room Service & Desk",
      aboutExploreRooms: "Explore Rooms & Suites",
      aboutInquire: "Chat With Us Now",
      servicesEyebrow: "Hotel Amenities",
      servicesTitle: "Executive Services Crafted for Comfort",
      servicesSubtitle: "Every stay is elevated by thoughtful hospitality services, highlighted by our signature 24/7 in-room service.",
      roomsEyebrow: "Luxury Accommodations",
      roomsTitle: "Rooms & Suites",
      roomsSubtitle: "Choose your preferred room and confirm availability directly on WhatsApp in seconds—no online card payment required.",
      roomBookBtn: "Book This Room via WhatsApp",
      galleryEyebrow: "Visual Showcase",
      galleryTitle: "Hotel Photo Gallery",
      gallerySubtitle: "Explore our architectural facade, grand lobby, luxury suites, and dining lounge. Click any image for full-screen view.",
      filterAll: "All",
      filterExterior: "Exterior",
      filterRooms: "Rooms & Suites",
      filterLobby: "Lobby",
      filterDining: "Dining & Lounge",
      locationEyebrow: "Prime Location",
      locationTitle: "Located in the Heart of Mosul",
      locationSubtitle: "Convenient access to Mosul's key commercial and cultural destinations, complete with complimentary private parking.",
      locationAddress: "Modern Palace Hotel, Mosul, Nineveh Governorate, Iraq",
      labelWhatsappDirect: "Direct Reservations (WhatsApp):",
      locationWaCta: "Book or Inquire on WhatsApp",
      locationOpenMaps: "Open in Google Maps",
      footerDesc: "Premier hospitality in Mosul offering luxury rooms and suites, 24/7 room service, and instant direct booking via WhatsApp.",
      footerQuickLinks: "Quick Links",
      footerContactTitle: "Direct Booking & Contact",
      footerWaLabel: "Book on WhatsApp 24/7",
      footerCopyright: "© 2026 Modern Palace Hotel – Mosul. All rights reserved.",
      footerDemoNote: "Interactive showcase prototype — swap photos easily in data.js",
      floatingWaTooltip: "Book via WhatsApp"
    }
  }
};
