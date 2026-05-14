(function () {
  "use strict";

  var STORAGE_KEY = "alltype-lang";

  var STRINGS = {
    pt: {
      meta_title: "All Type Marketing",
      meta_description:
        "All Type Marketing — agência 360 no varejo: comunicação integrada ON e OFF, do rádio e TV ao PDV, com foco em conversão.",
      skip: "Ir para o conteúdo",
      nav_logo_aria: "All Type Marketing — início",
      nav_open: "Abrir menu",
      nav_close: "Fechar menu",
      nav_works: "Trabalhos",
      nav_brand: "All Type",
      nav_clients: "Clientes",
      nav_office: "Escritório",
      nav_solutions: "Soluções 360",
      nav_insights: "Insights",
      nav_contact: "Contato",
      nav_social_aria: "Redes sociais",
      instagram_aria: "Instagram — All Type",
      youtube_aria: "YouTube",
      hero_eyebrow: "Agência 360 · Varejo",
      hero_l1: "Somos a extensão estratégica do seu negócio: ",
      hero_accent: "criatividade, ON + OFF e performance",
      hero_l2: " para marcas que precisam converter atenção em venda.",
      hero_cta: "Fale com a gente",
      hero_scroll_aria: "Rolar para a seção sobre",
      about_title:
        "Nosso DNA é o varejo. Aqui, a comunicação integrada vira conversão real.",
      about_p1:
        "Somos uma agência sul-mato-grossense com um objetivo claro: ser a extensão estratégica do seu negócio. Impulsionamos marcas com estratégias 360 que integram o ON e o OFF, unindo criatividade de ponta a uma performance agressiva.",
      about_p2:
        "Missão: impulsionar marcas do varejo com estratégias integradas, entregando criatividade, performance e imersão profunda no negócio de cada cliente.",
      about_p3:
        "Visão: ser a agência 360 referência no varejo, unindo proximidade, criatividade e resultados tangíveis.",
      about_cta: "Conheça o que fazemos",
      office_eyebrow: "Ambiente",
      office_title: "Onde as ideias ganham forma",
      office_lead:
        "Um espaço leve e colaborativo para receber clientes, debriefings e criação em conjunto.",
      office_zoom_aria: "Ampliar foto do escritório",
      office_lightbox_close: "Fechar foto ampliada",
      office_alt_1: "Escritório All Type — ambiente de trabalho",
      office_alt_2: "Escritório All Type — sala de reuniões",
      office_alt_3: "Escritório All Type — espaço criativo",
      office_alt_4: "Escritório All Type — detalhe do ambiente",
      office_gallery_aria: "Fotos do escritório All Type",
      sol_title: "Soluções 360",
      sol_lead:
        "Não é só um post, é estratégia. No varejo, quem não retém a atenção, não converte. Por isso, nossa entrega vai muito além do feed.",
      sol_follow:
        "Somos multicanais: criamos uma narrativa integrada que fala a mesma língua em diversos formatos, para diversos públicos.",
      c1_title: "Rádio & áudio",
      c1_text:
        "Jingle na rádio que gruda na cabeça — memorável, comercial e alinhado à sua oferta.",
      c2_title: "TV & vídeo",
      c2_text:
        "VT na televisão com ritmo de venda: mensagem clara, corte certo e gancho que pede ação.",
      c3_title: "PDV & impressos",
      c3_text:
        "Tabloide de ofertas na mão do público, papelaria e peças que funcionam no balcão e na gôndola.",
      c4_title: "OOH & loja",
      c4_text:
        "Outdoor, sinalização e ambientação que fecham o ciclo: a mesma narrativa na rua e dentro do ponto de venda.",
      work_header: "Trabalhos",
      work_lead:
        "Uma amostra do que construímos — cases completos entram assim que tivermos autorização e material.",
      w1_tag: "PDV",
      w1_title: "Oferta que fecha no tabloide",
      w1_meta: "Varejo · 2025",
      w2_tag: "360",
      w2_title: "Narrativa única na rua e no digital",
      w2_meta: "Campanha · 2025",
      w3_tag: "Áudio & TV",
      w3_title: "Jingle e VT com ritmo de venda",
      w3_meta: "Broadcast · 2026",
      clients_title: "Marcas que confiam",
      clients_strip_aria: "Logos de clientes (placeholder)",
      client_a: "Cliente A",
      client_b: "Cliente B",
      client_c: "Cliente C",
      client_d: "Cliente D",
      client_e: "Cliente E",
      insights_title: "Insights",
      insights_all: "Ver todos",
      insight_1: "No varejo, a mesma promessa precisa “fechar” no tabloide, no VT e no balcão.",
      insight_2: "Como escolher em qual canal cortar o barulho — e em qual investir para puxar venda.",
      insight_3: "Do briefing à loja: alinhar marketing, operação e PDV sem perder velocidade.",
      cta_title: "Vamos conversar?",
      cta_lead:
        "Conte onde sua marca precisa ganhar atenção e venda — da primeira conversa ao plano 360 no varejo.",
      whatsapp_label: "WhatsApp",
      wa_fab_aria: "Fale conosco no WhatsApp",
      footer_line: "All Type Marketing. Todos os direitos reservados.",
      footer_top: "Voltar ao topo ↑",
      logo_alt: "All Type Marketing",
      lang_toggle_aria: "Idioma do site",
      lang_opt_pt: "Português",
      lang_opt_en: "English",
      lang_opt_es: "Español",
    },
    en: {
      meta_title: "All Type Marketing",
      meta_description:
        "All Type Marketing — 360 retail agency: integrated on- and offline communication, from radio and TV to the store floor, focused on conversion.",
      skip: "Skip to content",
      nav_logo_aria: "All Type Marketing — home",
      nav_open: "Open menu",
      nav_close: "Close menu",
      nav_works: "Work",
      nav_brand: "All Type",
      nav_clients: "Clients",
      nav_office: "Studio",
      nav_solutions: "360 solutions",
      nav_insights: "Insights",
      nav_contact: "Contact",
      nav_social_aria: "Social media",
      instagram_aria: "Instagram — All Type",
      youtube_aria: "YouTube",
      hero_eyebrow: "360 agency · Retail",
      hero_l1: "We’re the strategic extension of your business: ",
      hero_accent: "creativity, online + offline, and performance",
      hero_l2: " for brands that need to turn attention into sales.",
      hero_cta: "Talk to us",
      hero_scroll_aria: "Scroll to the about section",
      about_title:
        "Retail is our DNA. Here, integrated communication becomes real conversion.",
      about_p1:
        "We’re an agency from Mato Grosso do Sul with one clear goal: to be the strategic extension of your business. We accelerate brands with 360° strategies that connect online and offline, pairing sharp creativity with aggressive performance.",
      about_p2:
        "Mission: accelerate retail brands with integrated strategy—creativity, performance, and deep immersion in each client’s business.",
      about_p3:
        "Vision: to be the reference 360° retail agency—close to you, creative, and focused on tangible results.",
      about_cta: "See what we do",
      office_eyebrow: "Our space",
      office_title: "Where ideas take shape",
      office_lead:
        "A bright, collaborative spot for clients, debriefs, and building things together.",
      office_zoom_aria: "Open larger office photo",
      office_lightbox_close: "Close enlarged photo",
      office_alt_1: "All Type office — workspace",
      office_alt_2: "All Type office — meeting area",
      office_alt_3: "All Type office — creative space",
      office_alt_4: "All Type office — interior detail",
      office_gallery_aria: "Photos of the All Type office",
      sol_title: "360 solutions",
      sol_lead:
        "It’s not just a post—it’s strategy. In retail, if you don’t hold attention, you don’t convert. That’s why our work goes far beyond the feed.",
      sol_follow:
        "We’re multichannel: one integrated narrative, the same language across formats and audiences.",
      c1_title: "Radio & audio",
      c1_text:
        "Radio jingles that stick—memorable, sales-driven, and aligned with your offer.",
      c2_title: "TV & video",
      c2_text:
        "TV spots with a selling rhythm: clear message, tight edit, and a hook that asks for action.",
      c3_title: "Store & print",
      c3_text:
        "Offer tabloids in shoppers’ hands, stationery, and pieces that work at the counter and on the shelf.",
      c4_title: "OOH & store",
      c4_text:
        "Out-of-home, signage, and in-store branding that close the loop—the same story on the street and at the point of sale.",
      work_header: "Work",
      work_lead:
        "A sample of what we build—full cases go live as soon as we have approval and assets.",
      w1_tag: "POS",
      w1_title: "Offers that land in the tabloid",
      w1_meta: "Retail · 2025",
      w2_tag: "360",
      w2_title: "One story on the street and online",
      w2_meta: "Campaign · 2025",
      w3_tag: "Audio & TV",
      w3_title: "Jingle and TV spot with a selling beat",
      w3_meta: "Broadcast · 2026",
      clients_title: "Brands that trust us",
      clients_strip_aria: "Client logos (placeholder)",
      client_a: "Client A",
      client_b: "Client B",
      client_c: "Client C",
      client_d: "Client D",
      client_e: "Client E",
      insights_title: "Insights",
      insights_all: "View all",
      insight_1: "In retail, the same promise has to land on the tabloid, the TV spot, and the counter.",
      insight_2: "Where to cut through the noise—and where to invest to actually pull sales.",
      insight_3: "From brief to the floor: aligning marketing, operations, and POS without losing speed.",
      cta_title: "Shall we talk?",
      cta_lead:
        "Tell us where your brand needs attention and sales—from the first chat to a 360° retail plan.",
      whatsapp_label: "WhatsApp",
      wa_fab_aria: "Contact us on WhatsApp",
      footer_line: "All Type Marketing. All rights reserved.",
      footer_top: "Back to top ↑",
      logo_alt: "All Type Marketing",
      lang_toggle_aria: "Site language",
      lang_opt_pt: "Portuguese",
      lang_opt_en: "English",
      lang_opt_es: "Spanish",
    },
    es: {
      meta_title: "All Type Marketing",
      meta_description:
        "All Type Marketing — agencia 360 en retail: comunicación integrada online y offline, de radio y TV al PDV, con foco en conversión.",
      skip: "Ir al contenido",
      nav_logo_aria: "All Type Marketing — inicio",
      nav_open: "Abrir menú",
      nav_close: "Cerrar menú",
      nav_works: "Trabajos",
      nav_brand: "All Type",
      nav_clients: "Clientes",
      nav_office: "Oficina",
      nav_solutions: "Soluciones 360",
      nav_insights: "Insights",
      nav_contact: "Contacto",
      nav_social_aria: "Redes sociales",
      instagram_aria: "Instagram — All Type",
      youtube_aria: "YouTube",
      hero_eyebrow: "Agencia 360 · Retail",
      hero_l1: "Somos la extensión estratégica de tu negocio: ",
      hero_accent: "creatividad, online + offline y performance",
      hero_l2: " para marcas que necesitan convertir atención en venta.",
      hero_cta: "Hablemos",
      hero_scroll_aria: "Ir a la sección sobre",
      about_title:
        "Nuestro ADN es el retail. Aquí, la comunicación integrada se vuelve conversión real.",
      about_p1:
        "Somos una agencia de Mato Grosso do Sul con un objetivo claro: ser la extensión estratégica de tu negocio. Impulsamos marcas con estrategias 360 que integran online y offline, uniendo creatividad de punta con performance agresiva.",
      about_p2:
        "Misión: impulsar marcas del retail con estrategias integradas, entregando creatividad, performance e inmersión profunda en el negocio de cada cliente.",
      about_p3:
        "Visión: ser la agencia 360 referencia en retail, uniendo cercanía, creatividad y resultados tangibles.",
      about_cta: "Conoce lo que hacemos",
      office_eyebrow: "Espacio",
      office_title: "Donde las ideas toman forma",
      office_lead:
        "Un ambiente ligero y colaborativo para recibir clientes, briefings y cocrear.",
      office_zoom_aria: "Ampliar foto de la oficina",
      office_lightbox_close: "Cerrar foto ampliada",
      office_alt_1: "Oficina All Type — espacio de trabajo",
      office_alt_2: "Oficina All Type — sala de reuniones",
      office_alt_3: "Oficina All Type — espacio creativo",
      office_alt_4: "Oficina All Type — detalle del ambiente",
      office_gallery_aria: "Fotos de la oficina All Type",
      sol_title: "Soluciones 360",
      sol_lead:
        "No es solo un post: es estrategia. En retail, quien no retiene la atención, no convierte. Por eso, nuestra entrega va mucho más allá del feed.",
      sol_follow:
        "Somos multicanal: creamos una narrativa integrada que habla el mismo idioma en distintos formatos y para distintos públicos.",
      c1_title: "Radio y audio",
      c1_text:
        "Jingle en radio que se queda en la cabeza: memorable, comercial y alineado a tu oferta.",
      c2_title: "TV y video",
      c2_text:
        "VT en TV con ritmo de venta: mensaje claro, corte justo y gancho que pide acción.",
      c3_title: "PDV e impresos",
      c3_text:
        "Tabloide de ofertas en manos del público, papelería y piezas que funcionan en mostrador y góndola.",
      c4_title: "OOH y tienda",
      c4_text:
        "Vía pública, señalética y ambientación que cierran el ciclo: la misma narrativa en la calle y en el punto de venta.",
      work_header: "Trabajos",
      work_lead:
        "Una muestra de lo que construimos — los cases completos entran en cuanto tengamos autorización y material.",
      w1_tag: "PDV",
      w1_title: "Oferta que cierra en el tabloide",
      w1_meta: "Retail · 2025",
      w2_tag: "360",
      w2_title: "Narrativa única en calle y digital",
      w2_meta: "Campaña · 2025",
      w3_tag: "Audio y TV",
      w3_title: "Jingle y VT con ritmo de venta",
      w3_meta: "Broadcast · 2026",
      clients_title: "Marcas que confían",
      clients_strip_aria: "Logos de clientes (placeholder)",
      client_a: "Cliente A",
      client_b: "Cliente B",
      client_c: "Cliente C",
      client_d: "Cliente D",
      client_e: "Cliente E",
      insights_title: "Insights",
      insights_all: "Ver todos",
      insight_1: "En retail, la misma promesa tiene que “cerrar” en el tabloide, el VT y el mostrador.",
      insight_2: "Cómo elegir en qué canal cortar el ruido — y en cuál invertir para jalar venta.",
      insight_3: "Del briefing a la tienda: alinear marketing, operación y PDV sin perder velocidad.",
      cta_title: "¿Conversamos?",
      cta_lead:
        "Cuéntanos dónde tu marca necesita atención y venta — desde la primera charla al plan 360 en retail.",
      whatsapp_label: "WhatsApp",
      wa_fab_aria: "Escríbenos por WhatsApp",
      footer_line: "All Type Marketing. Todos los derechos reservados.",
      footer_top: "Volver arriba ↑",
      logo_alt: "All Type Marketing",
      lang_toggle_aria: "Idioma del sitio",
      lang_opt_pt: "Portugués",
      lang_opt_en: "Inglés",
      lang_opt_es: "Español",
    },
  };

  var LANG_CONFIG = {
    pt: { code: "PT", flag: "🇧🇷" },
    en: { code: "EN", flag: "🇺🇸" },
    es: { code: "ES", flag: "🇪🇸" },
  };

  function getLang() {
    var s = localStorage.getItem(STORAGE_KEY);
    if (s === "pt" || s === "en" || s === "es") return s;
    return "pt";
  }

  function setLang(lang) {
    if (lang !== "pt" && lang !== "en" && lang !== "es") return;
    localStorage.setItem(STORAGE_KEY, lang);
    apply(lang);
    document.dispatchEvent(new CustomEvent("alltype:lang", { detail: { lang: lang } }));
  }

  function apply(lang) {
    var t = STRINGS[lang];
    if (!t) return;

    var htmlLang = lang === "pt" ? "pt-BR" : lang === "es" ? "es" : "en";
    document.documentElement.lang = htmlLang;
    document.title = t.meta_title;

    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.meta_description);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (t[k] !== undefined) el.textContent = t[k];
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var spec = el.getAttribute("data-i18n-attr");
      if (!spec) return;
      var parts = spec.split(":");
      if (parts.length >= 2) {
        var attr = parts[0];
        var key = parts.slice(1).join(":");
        if (t[key] !== undefined) el.setAttribute(attr, t[key]);
      }
    });

    var cfg = LANG_CONFIG[lang];
    var flagEl = document.getElementById("lang-flag");
    var codeEl = document.getElementById("lang-code");
    if (flagEl) flagEl.textContent = cfg.flag;
    if (codeEl) codeEl.textContent = cfg.code;

    var menuLabels = { pt: t.lang_opt_pt, en: t.lang_opt_en, es: t.lang_opt_es };
    document.querySelectorAll("[data-lang-label]").forEach(function (btn) {
      var code = btn.getAttribute("data-lang-label");
      if (menuLabels[code]) {
        var labelSpan = btn.querySelector(".lang-menu__label");
        if (labelSpan) labelSpan.textContent = menuLabels[code];
      }
    });

    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      var l = btn.getAttribute("data-set-lang");
      if (l === lang) {
        btn.setAttribute("aria-current", "true");
        btn.classList.add("lang-menu__btn--active");
      } else {
        btn.removeAttribute("aria-current");
        btn.classList.remove("lang-menu__btn--active");
      }
    });

    if (typeof window.__alltypeRefreshNavAria === "function") {
      window.__alltypeRefreshNavAria();
    }
  }

  function closeLangMenu() {
    var wrap = document.querySelector(".lang-widget-wrap");
    var toggle = document.getElementById("lang-toggle");
    var menu = document.getElementById("lang-menu");
    if (!wrap || !toggle || !menu) return;
    wrap.classList.remove("lang-widget-wrap--open");
    toggle.setAttribute("aria-expanded", "false");
    menu.hidden = true;
  }

  function openLangMenu() {
    var wrap = document.querySelector(".lang-widget-wrap");
    var toggle = document.getElementById("lang-toggle");
    var menu = document.getElementById("lang-menu");
    if (!wrap || !toggle || !menu) return;
    wrap.classList.add("lang-widget-wrap--open");
    toggle.setAttribute("aria-expanded", "true");
    menu.hidden = false;
  }

  function toggleLangMenu() {
    var wrap = document.querySelector(".lang-widget-wrap");
    if (!wrap) return;
    if (wrap.classList.contains("lang-widget-wrap--open")) closeLangMenu();
    else openLangMenu();
  }

  function initLangWidget() {
    var toggle = document.getElementById("lang-toggle");
    var menu = document.getElementById("lang-menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleLangMenu();
    });

    menu.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-set-lang");
        setLang(lang);
        closeLangMenu();
      });
    });

    document.addEventListener("click", function () {
      closeLangMenu();
    });

    wrapClickStop();
  }

  function wrapClickStop() {
    var wrap = document.querySelector(".lang-widget-wrap");
    if (!wrap) return;
    wrap.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

  function init() {
    var lang = getLang();
    apply(lang);
    initLangWidget();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.alltypeSetLang = setLang;
  window.alltypeGetLang = getLang;
  window.alltypeT = function (key) {
    var lang = getLang();
    var o = STRINGS[lang];
    return o && o[key] !== undefined ? o[key] : key;
  };
  window.__alltypeCloseLangMenu = closeLangMenu;
})();
