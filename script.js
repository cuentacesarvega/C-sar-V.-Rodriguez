/* =========================================================
   César Vega Rodríguez — Production Sound Mixer
   1. Traducciones ES / EN
   2. Cambio de idioma (con memoria en localStorage)
   3. Animación de entrada al hacer scroll
   4. Año del footer
   ========================================================= */

/* ---------------------------------------------------------
   0. Clips de los proyectos destacados

   Pega aquí el ID de Vimeo de cada clip y listo. El ID es el
   número final de la URL: vimeo.com/123456789 -> '123456789'.
   Si el vídeo es privado, Vimeo te da también un hash de
   privacidad (vimeo.com/123456789/abcdef123) -> ponlo en `hash`.

   Mientras `vimeo` esté vacío no se inserta ningún reproductor:
   la tarjeta se queda con su texto, sin huecos ni errores.
   El campo `local` solo se usa al abrir el archivo desde el
   disco o en localhost, para poder seguir revisando en casa;
   nunca se publica, porque la carpeta Videos/ no va al repo.
   --------------------------------------------------------- */
const CLIPS = {
  'comet':          { vimeo: '', hash: '', local: 'Videos/Proyecto01B.mp4' },
  'against-nature': { vimeo: '', hash: '', local: 'Videos/Proyecto02B.mp4' },
  'nube':           { vimeo: '', hash: '', local: 'Videos/Proyecto03.mp4'  },
  'sed':            { vimeo: '', hash: '', local: 'Videos/Proyecto04.mp4'  }
};

/* ---------------------------------------------------------
   1. Traducciones
   Para añadir texto traducible: pon data-i18n="clave" en el
   elemento HTML y añade la clave aquí en los dos idiomas.
   --------------------------------------------------------- */
const I18N = {
  es: {
    'skip': 'Ir al contenido',

    'nav.work': 'Trabajo',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',

    'hero.eyebrow': 'Sonido directo · Diseño sonoro',
    'hero.lede': 'Sonido directo para cine, publicidad, streaming, podcasts y documental. Experiencia en sets de distinta naturaleza.',
    'hero.cta1': 'Ver trabajo',
    'hero.cta2': 'Contactar',
    'hero.meta1': 'Base: CDMX, México',
    'hero.meta2': 'Disponible para viajar',
    'hero.meta3': 'Cine · Publicidad · Streaming · Podcasts · Documental',

    'work.title': 'Trabajo seleccionado',
    'work.note': 'Una muestra de proyectos representativos. Créditos completos disponibles bajo solicitud.',
    'work.reel': 'Showreel 2026 — 2 min · Usa auriculares para escucharlo como corresponde.',
    'work.dir': 'Dir.',
    'work.creditsTitle': 'Créditos',

    'work.p1.type': 'Largometraje',
    'work.p2.type': 'Largometraje',
    'work.p3.type': 'Largometraje',
    'work.p4.type': 'Cortometraje',

    'fmt.feature': 'Largometraje',
    'fmt.featureDoc': 'Largometraje documental',
    'fmt.series': 'Serie',
    'fmt.short': 'Cortometraje',
    'fmt.ad': 'Publicidad',
    'fmt.digital': 'Contenido digital',
    'fmt.podcast': 'Podcast',
    'fmt.mixed': 'Varios formatos',
    'fmt.institutional': 'Institucional',

    'role.psm': 'Production Sound Mixer',
    'role.boom': 'Microfonista',
    'role.boomCable': 'Microfonista y cablista',
    'role.audioEng': 'Ingeniero de audio',
    'role.prodEng': 'Productor e ingeniero de audio',
    'role.prodSd': 'Productor y diseñador sonoro',
    'role.research': 'Investigador y editor de vídeo',

    'credit.various': 'Varios',

    'crd.9.title': 'Contenidos publicitarios',
    'crd.14.title': 'Publicidad',
    'crd.17.title': 'Producción y diseño sonoro',

    'crd.1.note': 'Península Films · México.',
    'crd.2.note': 'Malacosa Films · México. Microfonía, operación de boom y cableado.',
    'crd.3.note': 'Bebop Productions · México / Estados Unidos. Microfonía y operación de boom.',
    'crd.4.note': 'PROAES, Sonora · México. Jefe de departamento.',
    'crd.5.note': 'México. Jefe de departamento. Rodaje de abril a mayo de 2025.',
    'crd.6.note': 'Domme Cinema / Cárcava Cine / Love Song Films · México. Jefe de departamento. Ópera prima. Segundo y tercer bloque de filmación; ADRs, voces en off y regrabaciones en locación.',
    'crd.7.note': 'Hikumari Pictures / Vaimon Cinema · México / China. Jefe de departamento. Segundo largometraje del realizador Chenliang Zhu.',
    'crd.8.note': 'Producción independiente · México. Jefe de departamento. Ópera prima.',
    'crd.9.note': 'Tim Hortons, Don Julio, Gatorade, On, Wal Mart, BMW, Jaecoo. Atarashii Gakko!: backstage y documental de concierto en México (NHK, televisora japonesa).',
    'crd.10.note': 'Phobos Media · México. Jefe de departamento. Tesis del Centro de Capacitación Cinematográfica.',
    'crd.11.note': 'TV Azteca · México. Más de 35 episodios de la primera temporada. De noviembre de 2022 a enero de 2023.',
    'crd.12.note': 'TV Azteca · México. Más de 40 episodios de la segunda temporada. De junio a octubre de 2022.',
    'crd.13.note': 'CCC · México. Jefe de departamento. Reshots y escenas adicionales.',
    'crd.14.note': 'México. Gatorade, Head & Shoulders, BMW, VIVO, Cielito Querido, Vanish, Tim Hortons, Don Julio, On, Wal Mart, Jaecoo y NHK (televisión japonesa).',
    'crd.15.note': 'México. Ingeniero de audio y mixer de la parrilla de contenido de la agencia: series web, documentales, live sessions, comedy stand-up y podcasts.',
    'crd.16.note': 'México. Gestión, grabación y edición del podcast semanal. Construcción de la identidad sonora del programa y producción de spots publicitarios. De enero a diciembre de 2021.',
    'crd.17.note': 'México. Podcasts, cortometrajes, publicidad y radio; identidad sonora de contenidos. Sandra Romandia, Emeequis, Las Hondas, Radio UAM, CCC y cortometrajes independientes.',
    'crd.18.note': 'México. Expedientes de prensa y perfiles de realizadores, actores y personalidades del cine. Edición de vídeo para conferencias y cursos del Centro de Documentación.',

    'about.title': 'Sobre mí',
    'about.p1': 'Sonidista e ingeniero de audio. Abordo cada proyecto buscando garantizar el mejor sonido posible y que la construcción del diseño sonoro se tome en cuenta desde la preproducción y el set.',
    'about.p2': 'He trabajado en proyectos de distinta escala: cine, series de televisión, series web, documentales, sesiones musicales y streaming. También trabajo como diseñador sonoro y productor de estudio para artistas musicales, podcasts y programas de radio.',

    'cap.1.t': 'Sonido directo',
    'cap.1.d': 'Multipista, boom y wireless, timecode, mezcla en set y reportes.',
    'cap.2.t': 'Diseño sonoro',
    'cap.2.d': 'Edición de diálogos, ambientes, foley y construcción de atmósferas.',
    'cap.3.t': 'Postproducción',
    'cap.3.d': 'Limpieza, premezcla y entrega de stems según especificación.',
    'cap.4.t': 'Formación',
    'cap.4.d': 'Comunicación Social — UAM Xochimilco (2011–2015).',
    'cap.5.t': 'Idiomas',
    'cap.5.d': 'Español (nativo) · Inglés (conversación en set).',

    'contact.title': 'Contacto',
    'contact.note': 'Cuéntame fechas, formato y localización del proyecto. Respondo en menos de 24 horas.',
    'contact.cv': 'Descargar CV (PDF)',

    'footer.top': 'Volver arriba ↑'
  },

  en: {
    'skip': 'Skip to content',

    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Production Sound · Sound Design',
    'hero.lede': 'Production sound for film, commercials, streaming, podcasts and documentary. Experience across very different kinds of set.',
    'hero.cta1': 'View work',
    'hero.cta2': 'Get in touch',
    'hero.meta1': 'Based in Mexico City',
    'hero.meta2': 'Available to travel',
    'hero.meta3': 'Film · Commercial · Streaming · Podcasts · Documentary',

    'work.title': 'Selected work',
    'work.note': 'A sample of representative projects. Full credits available on request.',
    'work.reel': 'Showreel 2026 — 2 min · Best experienced with headphones.',
    'work.dir': 'Dir.',
    'work.creditsTitle': 'Credits',

    'work.p1.type': 'Feature film',
    'work.p2.type': 'Feature film',
    'work.p3.type': 'Feature film',
    'work.p4.type': 'Short film',

    'fmt.feature': 'Feature',
    'fmt.featureDoc': 'Feature documentary',
    'fmt.series': 'Series',
    'fmt.short': 'Short film',
    'fmt.ad': 'Commercial',
    'fmt.digital': 'Digital content',
    'fmt.podcast': 'Podcast',
    'fmt.mixed': 'Various formats',
    'fmt.institutional': 'Institutional',

    'role.psm': 'Production Sound Mixer',
    'role.boom': 'Boom Operator',
    'role.boomCable': 'Boom Operator / Cable',
    'role.audioEng': 'Audio Engineer',
    'role.prodEng': 'Producer & Audio Engineer',
    'role.prodSd': 'Producer & Sound Designer',
    'role.research': 'Researcher & Video Editor',

    'credit.various': 'Various',

    'crd.9.title': 'Advertising content',
    'crd.14.title': 'Commercials',
    'crd.17.title': 'Production & sound design',

    'crd.1.note': 'Península Films · Mexico.',
    'crd.2.note': 'Malacosa Films · Mexico. Boom operation and cabling.',
    'crd.3.note': 'Bebop Productions · Mexico / United States. Boom operation.',
    'crd.4.note': 'PROAES, Sonora · Mexico. Department head.',
    'crd.5.note': 'Mexico. Department head. Shot April to May 2025.',
    'crd.6.note': 'Domme Cinema / Cárcava Cine / Love Song Films · Mexico. Department head. First feature. Second and third shooting blocks; ADR, voice-over and location re-recording.',
    'crd.7.note': 'Hikumari Pictures / Vaimon Cinema · Mexico / China. Department head. Second feature by director Chenliang Zhu.',
    'crd.8.note': 'Independent · Mexico. Department head. First feature.',
    'crd.9.note': 'Tim Hortons, Don Julio, Gatorade, On, Wal Mart, BMW, Jaecoo. Atarashii Gakko!: backstage and concert documentary in Mexico (NHK, Japanese broadcaster).',
    'crd.10.note': 'Phobos Media · Mexico. Department head. Centro de Capacitación Cinematográfica thesis film.',
    'crd.11.note': 'TV Azteca · Mexico. Over 35 episodes of season one. November 2022 to January 2023.',
    'crd.12.note': 'TV Azteca · Mexico. Over 40 episodes of season two. June to October 2022.',
    'crd.13.note': 'CCC · Mexico. Department head. Reshoots and additional scenes.',
    'crd.14.note': 'Mexico. Gatorade, Head & Shoulders, BMW, VIVO, Cielito Querido, Vanish, Tim Hortons, Don Julio, On, Wal Mart, Jaecoo and NHK (Japanese television).',
    'crd.15.note': 'Mexico. Audio engineer and mixer for the agency\'s content slate: web series, documentaries, live sessions, stand-up comedy and podcasts.',
    'crd.16.note': 'Mexico. Running, recording and editing the weekly podcast. Built the show\'s sonic identity and produced its ad spots. January to December 2021.',
    'crd.17.note': 'Mexico. Podcasts, short films, advertising and radio; sonic identity for content. Sandra Romandia, Emeequis, Las Hondas, Radio UAM, CCC and independent shorts.',
    'crd.18.note': 'Mexico. Press files and profiles of directors, actors and film-world figures. Video editing for the Documentation Centre\'s talks and courses.',

    'about.title': 'About',
    'about.p1': 'Production sound mixer and audio engineer. I approach every project set on guaranteeing the best possible sound, and on having sound design taken into account from pre-production and on set.',
    'about.p2': 'I have worked on projects of very different scales: film, television series, web series, documentaries, music sessions and streaming. I also work as a sound designer and studio producer for musicians, podcasts and radio shows.',

    'cap.1.t': 'Production sound',
    'cap.1.d': 'Multitrack, boom and wireless, timecode, on-set mixing and sound reports.',
    'cap.2.t': 'Sound design',
    'cap.2.d': 'Dialogue editing, ambiences, foley and atmosphere building.',
    'cap.3.t': 'Post-production',
    'cap.3.d': 'Cleanup, premix and stem delivery to spec.',
    'cap.4.t': 'Education',
    'cap.4.d': 'BA in Social Communication — UAM Xochimilco (2011–2015).',
    'cap.5.t': 'Languages',
    'cap.5.d': 'Spanish (native) · English (conversational, on set).',

    'contact.title': 'Contact',
    'contact.note': 'Send me your dates, format and shooting location. I reply within 24 hours.',
    'contact.cv': 'Download CV (PDF)',

    'footer.top': 'Back to top ↑'
  }
};

/* ---------------------------------------------------------
   2. Cambio de idioma
   --------------------------------------------------------- */
const STORAGE_KEY = 'cvr-lang';

function applyLanguage(lang) {
  const dict = I18N[lang];
  if (!dict) return;

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.textContent = value;
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) { /* modo privado */ }
}

function initialLanguage() {
  let saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (_) { /* ignorar */ }
  if (saved && I18N[saved]) return saved;
  return (navigator.language || 'es').toLowerCase().startsWith('en') ? 'en' : 'es';
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

applyLanguage(initialLanguage());

/* ---------------------------------------------------------
   3. Animación de entrada al hacer scroll
   --------------------------------------------------------- */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealables = document.querySelectorAll('.reveal');

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealables.forEach((el) => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      // Pequeño escalonado entre elementos que entran a la vez
      entry.target.style.transitionDelay = `${Math.min(i, 5) * 60}ms`;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  revealables.forEach((el) => observer.observe(el));
}

/* ---------------------------------------------------------
   4. Año del footer
   --------------------------------------------------------- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

/* ---------------------------------------------------------
   5. Reproductores de los proyectos destacados

   Rellena cada hueco .work-embed según CLIPS (arriba del todo):
     - con ID de Vimeo  -> iframe del reproductor
     - sin ID, en local -> el archivo de Videos/, para revisar
     - sin ID, publicado -> no se inserta nada
   --------------------------------------------------------- */
(() => {
  const enLocal = location.protocol === 'file:' ||
                  ['localhost', '127.0.0.1', ''].includes(location.hostname);

  document.querySelectorAll('.work-embed').forEach((hueco) => {
    const clip   = CLIPS[hueco.dataset.clip];
    const titulo = hueco.closest('.work-card').querySelector('.work-name').textContent.trim();
    if (!clip) { hueco.remove(); return; }

    if (clip.vimeo) {
      const params = new URLSearchParams({ title: '0', byline: '0', portrait: '0', dnt: '1' });
      if (clip.hash) params.set('h', clip.hash);

      const marco = document.createElement('iframe');
      marco.src = `https://player.vimeo.com/video/${clip.vimeo}?${params}`;
      marco.title = titulo;
      marco.loading = 'lazy';
      marco.allow = 'fullscreen; picture-in-picture';
      marco.setAttribute('allowfullscreen', '');
      marco.referrerPolicy = 'strict-origin-when-cross-origin';
      hueco.appendChild(marco);
      return;
    }

    if (enLocal && clip.local) {
      const v = document.createElement('video');
      v.src = clip.local;
      v.controls = true;
      v.preload = 'metadata';
      v.playsInline = true;
      v.title = titulo;
      hueco.appendChild(v);
      return;
    }

    hueco.remove();   // publicado y sin ID: la tarjeta se queda solo con el texto
  });
})();
