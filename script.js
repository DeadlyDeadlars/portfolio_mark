const storageKeys = { theme: 'mark-portfolio-theme', locale: 'mark-portfolio-locale' };

const translations = {
  ru: {
    skip: 'Перейти к содержимому', brandName: 'Марк', brandRole: 'веб-разработчик', brandHome: 'Марк — на главную', mainNav: 'Основная навигация', mobileNav: 'Мобильная навигация',
    navProjects: 'Проекты', navAbout: 'Обо мне', navContact: 'Контакты', headerCta: 'Обсудим проект', themeLight: 'Переключить на светлую тему', themeDark: 'Переключить на тёмную тему', localeToEnglish: 'Switch to English', localeToRussian: 'Переключить на русский', menuOpen: 'Открыть меню', menuClose: 'Закрыть меню',
    metaDescription: 'Портфолио Марка, веб-разработчика: сайты и интерфейсы для реальных проектов, созданные с вниманием к форме и деталям.', homeTitle: 'Марк — веб-разработчик с чувством формы', projectsMetaDescription: 'Пять опубликованных веб-проектов: сайты, лендинги и портфолио с живыми демо и исходным кодом.', projectsTitle: 'Проекты — Марк, веб-разработчик',
    availability: 'Открыт к интересным проектам', heroMark: 'Портфолио / 2026', heroHello: 'Привет, я Марк', heroRole: 'Веб-разработчик', heroHeading: 'Делаю<br />цифровое<br /><span class="hero-last">живым<span class="period">.</span><svg class="hero-scribble" viewBox="0 0 397 30" fill="none" aria-hidden="true"><path d="M3 20C93 4 279 -1 393 19M46 27c98-16 206-16 308-4" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></svg></span>',
    heroLead: 'Превращаю идеи в сайты и интерфейсы, которые не просто работают — они запоминаются.', seeWork: 'Смотреть проекты', allProjects: 'Все проекты', contactMe: 'Связаться со мной', portfolioFacts: 'Факты о портфолио', projectsFact: 'опубликованных проектов', languagesFact: 'два языка', heroArtwork: 'Абстрактная иллюстрация цифрового интерфейса', artTop: 'КРЕАТИВНЫЙ КОД / 001', artIdea: 'Идея<br />↓<br />Реальность', artDetail: '001 / Сделано с интересом', heroFootLeft: 'Дизайн-мышление × Разработка', scroll: 'Листай вниз',
    artSticker: 'код<br /><span>&amp;</span> душа',
    ticker: 'ИНТЕРФЕЙСЫ С ХАРАКТЕРОМ <b>✳</b> КОД СО СМЫСЛОМ <b>✳</b> ИДЕИ В ДЕЙСТВИИ <b>✳', featuredEyebrow: 'Избранное', featuredHeading: 'Работы, которые<br /><em>говорят сами.</em>', featuredIntro: 'Реальные сайты и страницы для проектов — каждый со своей задачей.', viewDemo: 'Смотреть демо', sourceCode: 'Исходный код', workFootnote: 'Портфолио показывает опубликованные демо, а не обещания о серверной функциональности.', allFive: 'Смотреть все пять проектов',
    aboutEyebrow: 'Обо мне', aboutHeading: 'Между логикой<br />и <span>магией.</span>', aboutLead: 'Мне нравится момент, когда сложная задача превращается в <em>простой, красивый и удобный</em> опыт.', aboutBody: 'Я Марк, веб-разработчик. Думаю о деталях, проектирую с заботой о пользователе и пишу код, с которым приятно работать дальше. Верю: сильный продукт рождается там, где технология встречается с идеей.', letsTalk: 'Давайте знакомиться', skillsEyebrow: 'Инструменты', skillsHeading: 'Чем собираю<br /><em>идеи в продукт.</em>', skillsIntro: 'Подход важнее набора технологий. Но хороший набор тоже помогает.', skillOneNum: '01 / ОСНОВА', skillOneTitle: 'Разработка', skillOneBody: 'HTML, CSS, JavaScript<br />и современные интерфейсы', skillTwoNum: '02 / ПОДХОД', skillTwoTitle: 'Дизайн-мышление', skillTwoBody: 'Типографика, композиция<br />и внимание к деталям', skillThreeNum: '03 / ОЩУЩЕНИЕ', skillThreeTitle: 'Интерактивность', skillThreeBody: 'Анимация, микровзаимодействия<br />и немного магии',
    contactEyebrow: 'ЕСТЬ ИДЕЯ? ДАВАЙТЕ ОБСУДИМ', contactIndex: '04 / КОНТАКТЫ', contactKicker: 'Хорошие проекты начинаются с разговора.', contactHeading: 'Давайте сделаем<br /><em>что-то классное<span>.</span></em>', writeMe: 'Написать мне', copyEmail: 'Скопировать email', copySuccess: 'Email скопирован', copyFailedLabel: 'Не удалось скопировать', copyReady: 'Адрес электронной почты можно скопировать.', copyFailure: 'Не удалось скопировать email. Напишите мне по адресу ниже.', mailtoSubject: 'mailto:deadlydeadlars@gmail.com?subject=%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%20%D0%B4%D0%BB%D1%8F%20%D0%9C%D0%B0%D1%80%D0%BA%D0%B0', backToTop: 'Наверх', backTop: 'Наверх', footerMade: 'Сделано с интересом и вниманием к деталям.',
    projectsEyebrow: 'Избранные работы', projectsHeading: 'От идеи<br />к <em>живому вебу.</em>', projectsIntro: 'Пять проектов, которые можно открыть прямо сейчас: промо-страницы и сайты с разными задачами, собранные с вниманием к визуальному ритму и деталям.', filterSection: 'Фильтры проектов', projectFilters: 'Фильтры проектов', filterAll: 'Все', filterWebsites: 'Сайты', filterLandings: 'Лендинги', filterPortfolio: 'Портфолио', showingProjects: 'Показано', ofProjects: 'из', projectsNoun: 'проектов', catalogNote: 'Описание отражает возможности именно опубликованного демо; концепты и интерфейсы не представлены как работающие backend-сервисы.', backHome: 'Вернуться на главную', catalogContactHeading: 'Есть задача?<br /><em>Давайте обсудим<span>.</span></em>',
    catalogContactIndex: '02 / КОНТАКТЫ',
    countOne: 'проект', countFew: 'проекта', countMany: 'проектов', projectOpen: 'Открыть демо', projectFightfinderTitle: 'FightFinder', projectFightfinderCategoryLabel: 'Лендинг приложения', projectFightfinderDescription: 'Промо-страница приложения для поиска партнёров по тренировкам.', projectFightfinderNote: 'Промо-страница; подбор партнёров, сбор заявок и backend не работают.', projectFightfinderAlt: 'FightFinder — промо-страница приложения для поиска партнёров по тренировкам',
    projectCofeeteaTitle: 'CofeeTea', projectCofeeteaCategoryLabel: 'Сайт кофейни', projectCofeeteaDescription: 'Сайт кофейни в Екатеринбурге: меню, переключение вкладок и интерфейс бронирования.', projectCofeeteaNote: 'Форма бронирования не отправляет реальные заявки.', projectCofeeteaAlt: 'Сайт кофейни CofeeTea с меню и интерфейсом бронирования',
    projectShinruTitle: 'ШинРу / ShinRu', projectShinruCategoryLabel: 'Сайт автосервиса', projectShinruDescription: 'Сайт автосервиса в Казани с описанием услуг и интерфейсом записи.', projectShinruNote: 'Демо показывает интерфейс; отправка заявок на сервер не подключена.', projectShinruAlt: 'Сайт автосервиса ШинРу с информацией об услугах',
    projectNodusTitle: 'Nodus', projectNodusCategoryLabel: 'Концептуальный лендинг', projectNodusDescription: 'Презентационный лендинг концепции приватной сети.', projectNodusNote: 'Концепт; P2P-сеть и сквозное шифрование в демо не реализованы.', projectNodusAlt: 'Nodus — концептуальный лендинг приватной сети',
    projectMarkdevTitle: 'MarkDev', projectMarkdevCategoryLabel: 'Портфолио', projectMarkdevDescription: 'Редакционное портфолио с лаконичной типографикой и заметной подачей работ.', projectMarkdevNote: 'Отдельная опубликованная версия портфолио.', projectMarkdevAlt: 'MarkDev — редакционное портфолио веб-разработчика'
  },
  en: {
    skip: 'Skip to content', brandName: 'Mark', brandRole: 'web developer', brandHome: 'Mark — home', mainNav: 'Main navigation', mobileNav: 'Mobile navigation',
    navProjects: 'Projects', navAbout: 'About', navContact: 'Contact', headerCta: 'Let’s talk', themeLight: 'Switch to light theme', themeDark: 'Switch to dark theme', localeToEnglish: 'Switch to English', localeToRussian: 'Switch to Russian', menuOpen: 'Open menu', menuClose: 'Close menu',
    metaDescription: 'Portfolio of Mark, a web developer: websites and interfaces for real projects, shaped with care for form and detail.', homeTitle: 'Mark — web developer with an eye for form', projectsMetaDescription: 'Five published web projects: websites, landing pages, and a portfolio with live demos and public source code.', projectsTitle: 'Projects — Mark, web developer',
    availability: 'Open to interesting projects', heroMark: 'Portfolio / 2026', heroHello: 'Hi, I’m Mark', heroRole: 'Web developer', heroHeading: 'Making<br />digital<br /><span class="hero-last">feel alive<span class="period">.</span><svg class="hero-scribble" viewBox="0 0 397 30" fill="none" aria-hidden="true"><path d="M3 20C93 4 279 -1 393 19M46 27c98-16 206-16 308-4" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></svg></span>',
    heroLead: 'I turn ideas into websites and interfaces that do more than work — they stay with you.', seeWork: 'Explore projects', allProjects: 'All projects', contactMe: 'Get in touch', portfolioFacts: 'Portfolio facts', projectsFact: 'published projects', languagesFact: 'two languages', heroArtwork: 'Abstract digital interface illustration', artTop: 'CREATIVE CODE / 001', artIdea: 'Idea<br />↓<br />Reality', artDetail: '001 / Made with curiosity', heroFootLeft: 'Design thinking × Development', scroll: 'Scroll down',
    artSticker: 'code<br /><span>&amp;</span> soul',
    ticker: 'INTERFACES WITH CHARACTER <b>✳</b> CODE WITH PURPOSE <b>✳</b> IDEAS IN MOTION <b>✳', featuredEyebrow: 'Selected work', featuredHeading: 'Work that<br /><em>speaks for itself.</em>', featuredIntro: 'Real websites and project pages, each made to solve a different challenge.', viewDemo: 'View demo', sourceCode: 'Source code', workFootnote: 'This portfolio showcases published demos, not claims about backend functionality.', allFive: 'Explore all five projects',
    aboutEyebrow: 'About me', aboutHeading: 'Between logic<br />and <span>a little magic.</span>', aboutLead: 'I love the moment a complex problem turns into a <em>simple, thoughtful, and enjoyable</em> experience.', aboutBody: 'I’m Mark, a web developer. I care about details, design with people in mind, and write code that’s pleasant to build on. I believe strong products emerge where technology meets an idea.', letsTalk: 'Let’s get acquainted', skillsEyebrow: 'Tools', skillsHeading: 'Turning<br /><em>ideas into products.</em>', skillsIntro: 'How you think matters more than the toolset. The right tools still help.', skillOneNum: '01 / FOUNDATION', skillOneTitle: 'Development', skillOneBody: 'HTML, CSS, JavaScript<br />and modern interfaces', skillTwoNum: '02 / APPROACH', skillTwoTitle: 'Design thinking', skillTwoBody: 'Typography, composition<br />and attention to detail', skillThreeNum: '03 / FEEL', skillThreeTitle: 'Interaction', skillThreeBody: 'Motion, micro-interactions<br />and a little magic',
    contactEyebrow: 'HAVE AN IDEA? LET’S TALK', contactIndex: '04 / CONTACT', contactKicker: 'Good projects start with a conversation.', contactHeading: 'Let’s make<br /><em>something great<span>.</span></em>', writeMe: 'Send me a message', copyEmail: 'Copy email', copySuccess: 'Email copied', copyFailedLabel: 'Could not copy', copyReady: 'Email address is ready to copy.', copyFailure: 'Could not copy the email. Write to me at the address below.', mailtoSubject: 'mailto:deadlydeadlars@gmail.com?subject=Project%20inquiry%20for%20Mark', backToTop: 'Back to top', backTop: 'Back to top', footerMade: 'Made with curiosity and attention to detail.',
    projectsEyebrow: 'Selected work', projectsHeading: 'From idea<br />to <em>living web.</em>', projectsIntro: 'Five projects you can open right now: landing pages and websites with different goals, crafted with care for visual rhythm and detail.', filterSection: 'Project filters', projectFilters: 'Project filters', filterAll: 'All', filterWebsites: 'Websites', filterLandings: 'Landings', filterPortfolio: 'Portfolio', showingProjects: 'Showing', ofProjects: 'of', projectsNoun: 'projects', catalogNote: 'Descriptions reflect what each published demo actually does; concepts and interfaces are not presented as working backend services.', backHome: 'Back to homepage', catalogContactHeading: 'Have a brief?<br /><em>Let’s talk<span>.</span></em>',
    catalogContactIndex: '02 / CONTACT',
    countOne: 'project', countFew: 'projects', countMany: 'projects', projectOpen: 'Open demo', projectFightfinderTitle: 'FightFinder', projectFightfinderCategoryLabel: 'Product landing page', projectFightfinderDescription: 'A promotional page for an app to find workout partners.', projectFightfinderNote: 'Promotional page only; partner matching, lead collection, and the backend are not functional.', projectFightfinderAlt: 'FightFinder — promotional page for an app to find workout partners',
    projectCofeeteaTitle: 'CofeeTea', projectCofeeteaCategoryLabel: 'Coffee shop website', projectCofeeteaDescription: 'A Yekaterinburg coffee shop website with a menu, tabs, and a booking interface.', projectCofeeteaNote: 'The booking form does not submit real requests.', projectCofeeteaAlt: 'CofeeTea coffee shop website with a menu and booking interface',
    projectShinruTitle: 'ShinRu', projectShinruCategoryLabel: 'Auto service website', projectShinruDescription: 'A Kazan auto service website with service details and a booking interface.', projectShinruNote: 'The demo shows the interface; server-side request submission is not connected.', projectShinruAlt: 'ShinRu auto service website with service information',
    projectNodusTitle: 'Nodus', projectNodusCategoryLabel: 'Concept landing page', projectNodusDescription: 'A presentation landing page for a private network concept.', projectNodusNote: 'Concept only; P2P networking and end-to-end encryption are not implemented in the demo.', projectNodusAlt: 'Nodus — concept landing page for a private network',
    projectMarkdevTitle: 'MarkDev', projectMarkdevCategoryLabel: 'Portfolio', projectMarkdevDescription: 'An editorial portfolio with restrained typography and a distinctive presentation of work.', projectMarkdevNote: 'A separate published portfolio version.', projectMarkdevAlt: 'MarkDev — editorial portfolio for a web developer'
  }
};

const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const localeButton = document.querySelector('.locale-switch');
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
let locale = root.lang === 'en' ? 'en' : 'ru';

function translate(key) {
  return translations[locale][key] ?? translations.ru[key] ?? key;
}

function persist(key, value) {
  try { localStorage.setItem(key, value); } catch { /* Keep the selection for this page view. */ }
}

function applyTheme(theme, save = true) {
  const selected = theme === 'light' ? 'light' : 'dark';
  root.dataset.theme = selected;
  const actionKey = selected === 'dark' ? 'themeLight' : 'themeDark';
  if (themeButton) {
    themeButton.setAttribute('aria-pressed', String(selected === 'dark'));
    themeButton.setAttribute('aria-label', translate(actionKey));
    themeButton.title = translate(actionKey);
  }
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.content = selected === 'dark' ? '#10130f' : '#f5f3ed';
  if (save) persist(storageKeys.theme, selected);
}

function setText(element, value) {
  const textNode = Array.from(element.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
  if (textNode) textNode.nodeValue = value;
  else element.textContent = value;
}

function updateProjectCards() {
  document.querySelectorAll('[data-project-id]').forEach((card) => {
    const prefix = `project${card.dataset.projectId[0].toUpperCase()}${card.dataset.projectId.slice(1)}`;
    ['title', 'categoryLabel', 'description', 'note', 'alt'].forEach((field) => {
      const element = card.querySelector(`[data-project-field="${field}"]`);
      if (!element) return;
      const fieldName = field[0].toUpperCase() + field.slice(1);
      const value = translate(`${prefix}${fieldName}`);
      if (field === 'alt') element.alt = value;
      else element.textContent = value;
    });
    const previewLink = card.querySelector('.project-preview-link');
    if (previewLink) previewLink.setAttribute('aria-label', `${translate('projectOpen')} ${translate(`${prefix}Title`)}`);
  });
}

function updateFilterCount() {
  const count = document.querySelector('[data-project-count]');
  const grid = document.querySelector('[data-projects-grid]');
  if (!count || !grid) return;
  const shown = Array.from(grid.querySelectorAll('[data-project-id]')).filter((card) => !card.hidden).length;
  const total = grid.querySelectorAll('[data-project-id]').length;
  const shownNode = count.querySelector('[data-count="shown"]');
  const totalNode = count.querySelector('[data-count="total"]');
  const noun = count.querySelector('[data-i18n="projectsNoun"]');
  if (shownNode) shownNode.textContent = String(shown);
  if (totalNode) totalNode.textContent = String(total);
  if (noun) {
    let key = 'countMany';
    if (locale === 'en') key = total === 1 ? 'countOne' : 'countMany';
    else if (total % 10 === 1 && total % 100 !== 11) key = 'countOne';
    else if (total % 10 >= 2 && total % 10 <= 4 && (total % 100 < 12 || total % 100 > 14)) key = 'countFew';
    noun.textContent = translate(key);
  }
}

function updateLocale(nextLocale, save = true) {
  locale = nextLocale === 'en' ? 'en' : 'ru';
  root.lang = locale;
  document.querySelectorAll('[data-i18n]').forEach((element) => setText(element, translate(element.dataset.i18n)));
  document.querySelectorAll('[data-i18n-html]').forEach((element) => { element.innerHTML = translate(element.dataset.i18nHtml); });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => element.setAttribute('aria-label', translate(element.dataset.i18nAria)));
  document.querySelectorAll('[data-i18n-content]').forEach((element) => { element.content = translate(element.dataset.i18nContent); });
  document.querySelectorAll('[data-i18n-title]').forEach((element) => { element.textContent = translate(element.dataset.i18nTitle); });
  document.querySelectorAll('[data-i18n-href]').forEach((element) => { element.href = translate(element.dataset.i18nHref); });
  if (localeButton) {
    const key = locale === 'ru' ? 'localeToEnglish' : 'localeToRussian';
    localeButton.textContent = locale === 'ru' ? 'EN' : 'RU';
    localeButton.setAttribute('aria-label', translate(key));
    localeButton.title = translate(key);
  }
  if (menuButton) menuButton.setAttribute('aria-label', translate(menuButton.getAttribute('aria-expanded') === 'true' ? 'menuClose' : 'menuOpen'));
  applyTheme(root.dataset.theme, false);
  updateProjectCards();
  updateFilterCount();
  if (save) persist(storageKeys.locale, locale);
}

let initialTheme = 'dark';
try {
  const storedTheme = localStorage.getItem(storageKeys.theme);
  if (storedTheme === 'light' || storedTheme === 'dark') initialTheme = storedTheme;
} catch { /* Dark is the default when storage is unavailable. */ }
applyTheme(initialTheme, false);
root.classList.add('js-enabled');
if (mobileNav) mobileNav.hidden = true;
updateLocale(locale, false);

if (themeButton) themeButton.addEventListener('click', () => applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
if (localeButton) localeButton.addEventListener('click', () => updateLocale(locale === 'ru' ? 'en' : 'ru'));

function closeMenu(returnFocus = false) {
  if (!menuButton || !mobileNav) return;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', translate('menuOpen'));
  mobileNav.hidden = true;
  if (returnFocus) menuButton.focus();
}

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', translate(isOpen ? 'menuOpen' : 'menuClose'));
    mobileNav.hidden = isOpen;
  });
  mobileNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });
}

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

const filterButtons = document.querySelectorAll('[data-filter]');
const projectGrid = document.querySelector('[data-projects-grid]');
if (filterButtons.length && projectGrid) {
  filterButtons.forEach((button) => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((candidate) => candidate.setAttribute('aria-pressed', String(candidate === button)));
    projectGrid.querySelectorAll('[data-project-id]').forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
    updateFilterCount();
  }));
}

const copyButton = document.querySelector('[data-copy-email]');
const copyStatus = document.querySelector('[data-copy-status]');
if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const email = copyButton.dataset.copyEmail;
    let copied = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
        copied = true;
      }
    } catch { /* Use the checked fallback when the Clipboard API is unavailable. */ }
    if (!copied && document.queryCommandSupported?.('copy') !== false) {
      const input = document.createElement('textarea');
      input.value = email;
      input.setAttribute('readonly', '');
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.append(input);
      input.select();
      try { copied = document.execCommand('copy') === true; } catch { copied = false; }
      input.remove();
    }
    const label = copyButton.querySelector('.copy-label');
    if (label) label.textContent = translate(copied ? 'copySuccess' : 'copyFailedLabel');
    if (copyStatus) copyStatus.textContent = translate(copied ? 'copySuccess' : 'copyFailure');
    window.clearTimeout(copyButton.copyResetTimer);
    if (copied) copyButton.copyResetTimer = window.setTimeout(() => {
      if (label) label.textContent = translate('copyEmail');
      if (copyStatus) copyStatus.textContent = translate('copyReady');
    }, 2400);
  });
}

document.querySelectorAll('#year').forEach((element) => { element.textContent = String(new Date().getFullYear()); });
