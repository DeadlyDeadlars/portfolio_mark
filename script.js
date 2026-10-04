const storageKeys = { theme: 'mark-portfolio-theme', locale: 'mark-portfolio-locale' };

const translations = {
  ru: {
    skip: 'Перейти к содержимому', brandName: 'Марк', brandRole: 'веб-разработчик', brandHome: 'Марк — на главную', mainNav: 'Основная навигация', mobileNav: 'Мобильная навигация',
    navProjects: 'Проекты', navAbout: 'Обо мне', navContact: 'Контакты', headerCta: 'Связаться', themeLight: 'Переключить на светлую тему', themeDark: 'Переключить на тёмную тему', localeToEnglish: 'Switch to English', localeToRussian: 'Переключить на русский', menuOpen: 'Открыть меню', menuClose: 'Закрыть меню',
    metaDescription: 'Марк — веб-разработчик. Сайты, лендинги и портфолио с опубликованными демо.', homeTitle: 'Марк — веб-разработчик', projectsMetaDescription: 'Пять веб-проектов Марка с опубликованными демо.', projectsTitle: 'Проекты — Марк',
    heroIdentity: 'Марк', heroStatement: 'Веб-разработка', heroDescription: 'Собираю сайты и интерфейсы — от структуры до кода.', showcaseLabel: 'Один из проектов', showcaseHint: 'Выберите другой проект',
    featuredEyebrow: 'Проекты', featuredHeading: 'Избранные проекты', featuredIntro: 'Сайты и интерфейсы с опубликованными демо.', viewDemo: 'Смотреть демо', sourceCode: 'Исходный код', workFootnote: 'Все ссылки ведут на опубликованные демо.', allProjects: 'Все проекты', allFive: 'Все пять проектов',
    aboutEyebrow: 'Профиль', aboutHeading: 'Марк,<br /><em>веб-разработчик.</em>', aboutLead: 'Делаю сайты и интерфейсы — от структуры до готовой страницы.', aboutBody: 'Работаю с HTML, CSS и JavaScript. В портфолио — сайты кофейни и автосервиса, промо-страница FightFinder, концепт Nodus и портфолио MarkDev.', letsTalk: 'Написать Марку',
    skillsEyebrow: 'Технологии', skillsHeading: 'Стек', skillsIntro: 'Технологии, которые использую в проектах.',
    contactEyebrow: 'Контакты', contactIndex: '03 / СВЯЗЬ', catalogContactIndex: '02 / СВЯЗЬ', contactKicker: 'Марк · веб-разработчик', contactHeading: 'Есть проект?<br /><em>Напишите мне.</em>', writeMe: 'Написать на email', copyEmail: 'Скопировать email', copySuccess: 'Email скопирован', copyError: 'Не удалось скопировать. Напишите на адрес ниже.', copyReady: 'Адрес электронной почты можно скопировать.', mailtoSubject: 'mailto:deadlydeadlars@gmail.com?subject=%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%20%D0%B4%D0%BB%D1%8F%20%D0%9C%D0%B0%D1%80%D0%BA%D0%B0',
    backTop: 'Наверх', footerMade: 'Марк · веб-разработчик',
    projectsHeading: 'Пять проектов.<br /><em>Открытые демо.</em>', projectsIntro: 'Пять опубликованных работ: сайты, промо-страницы и портфолио.',
    filterSection: 'Фильтры проектов', projectFilters: 'Фильтры проектов', filterAll: 'Все', filterWebsites: 'Сайты', filterLandings: 'Лендинги', filterPortfolio: 'Портфолио', showingProjects: 'Показано', ofProjects: 'из', projectsNoun: 'проектов', catalogNote: 'В карточках указаны возможности опубликованных демо. Демо-интерфейс не означает подключённый сервер.', backHome: 'На главную',
    countOne: 'проект', countFew: 'проекта', countMany: 'проектов', projectOpen: 'Открыть демо',
    projectFightfinderTitle: 'FightFinder', projectFightfinderCategoryLabel: 'Промо-страница', projectFightfinderDescription: 'Промо-страница приложения для поиска партнёров по тренировкам.', projectFightfinderNote: 'Бэкенд подбора партнёров и сбора заявок не подключён.', projectFightfinderAlt: 'FightFinder — промо-страница приложения для поиска партнёров по тренировкам',
    projectCofeeteaTitle: 'CofeeTea', projectCofeeteaCategoryLabel: 'Сайт кофейни', projectCofeeteaDescription: 'Сайт кофейни в Екатеринбурге с меню и интерфейсом бронирования.', projectCofeeteaNote: 'Форма бронирования не отправляет реальные заявки.', projectCofeeteaAlt: 'Сайт кофейни CofeeTea с меню и интерфейсом бронирования',
    projectShinruTitle: 'ШинРу / ShinRu', projectShinruCategoryLabel: 'Сайт автосервиса', projectShinruDescription: 'Сайт автосервиса в Казани с услугами и интерфейсом записи.', projectShinruNote: 'Заявки с сайта не отправляются на сервер.', projectShinruAlt: 'Сайт автосервиса ШинРу с информацией об услугах',
    projectNodusTitle: 'Nodus', projectNodusCategoryLabel: 'Концепт', projectNodusDescription: 'Презентационная страница концепции приватной сети.', projectNodusNote: 'Концепт: P2P-сеть и сквозное шифрование в демо не реализованы.', projectNodusAlt: 'Nodus — концептуальная страница приватной сети',
    projectMarkdevTitle: 'MarkDev', projectMarkdevCategoryLabel: 'Портфолио', projectMarkdevDescription: 'Опубликованная версия портфолио веб-разработчика.', projectMarkdevNote: 'Отдельная опубликованная версия портфолио.', projectMarkdevAlt: 'MarkDev — портфолио веб-разработчика'
  },
  en: {
    skip: 'Skip to content', brandName: 'Mark', brandRole: 'web developer', brandHome: 'Mark — home', mainNav: 'Main navigation', mobileNav: 'Mobile navigation',
    navProjects: 'Projects', navAbout: 'About', navContact: 'Contact', headerCta: 'Contact', themeLight: 'Switch to light theme', themeDark: 'Switch to dark theme', localeToEnglish: 'Switch to English', localeToRussian: 'Switch to Russian', menuOpen: 'Open menu', menuClose: 'Close menu',
    metaDescription: 'Mark is a web developer. Websites, landing pages, and a portfolio with published demos.', homeTitle: 'Mark — web developer', projectsMetaDescription: 'Five web projects by Mark with published demos.', projectsTitle: 'Projects — Mark',
    heroIdentity: 'Mark', heroStatement: 'Web development', heroDescription: 'I build websites and interfaces, from layout to code.', showcaseLabel: 'Project spotlight', showcaseHint: 'Choose another project',
    featuredEyebrow: 'Projects', featuredHeading: 'Selected projects', featuredIntro: 'Websites and interfaces with published demos.', viewDemo: 'View demo', sourceCode: 'Source code', workFootnote: 'Every link opens a published demo.', allProjects: 'All projects', allFive: 'All five projects',
    aboutEyebrow: 'Profile', aboutHeading: 'Mark,<br /><em>web developer.</em>', aboutLead: 'I build websites and interfaces, from structure to a finished page.', aboutBody: 'I work with HTML, CSS, and JavaScript. The portfolio includes a coffee shop and auto service website, the FightFinder promo page, the Nodus concept, and the MarkDev portfolio.', letsTalk: 'Email Mark',
    skillsEyebrow: 'Tools', skillsHeading: 'Stack', skillsIntro: 'Tools I use in my projects.',
    contactEyebrow: 'Contact', contactIndex: '03 / CONTACT', catalogContactIndex: '02 / CONTACT', contactKicker: 'Mark · web developer', contactHeading: 'Have a project?<br /><em>Email me.</em>', writeMe: 'Email me', copyEmail: 'Copy email', copySuccess: 'Email copied', copyError: 'Could not copy. Email me at the address below.', copyReady: 'Email address is ready to copy.', mailtoSubject: 'mailto:deadlydeadlars@gmail.com?subject=Project%20inquiry%20for%20Mark',
    backTop: 'Back to top', footerMade: 'Mark · web developer',
    projectsHeading: 'Five projects.<br /><em>Live demos.</em>', projectsIntro: 'Five published projects: websites, promotional pages, and a portfolio.',
    filterSection: 'Project filters', projectFilters: 'Project filters', filterAll: 'All', filterWebsites: 'Websites', filterLandings: 'Landing pages', filterPortfolio: 'Portfolio', showingProjects: 'Showing', ofProjects: 'of', projectsNoun: 'projects', catalogNote: 'Cards describe what the published demos do. An interface demo does not mean a server is connected.', backHome: 'Back home',
    countOne: 'project', countFew: 'projects', countMany: 'projects', projectOpen: 'Open demo',
    projectFightfinderTitle: 'FightFinder', projectFightfinderCategoryLabel: 'Promotional page', projectFightfinderDescription: 'A promotional page for an app to find workout partners.', projectFightfinderNote: 'The backend for partner matching and lead collection is not connected.', projectFightfinderAlt: 'FightFinder — promotional page for an app to find workout partners',
    projectCofeeteaTitle: 'CofeeTea', projectCofeeteaCategoryLabel: 'Coffee shop website', projectCofeeteaDescription: 'A Yekaterinburg coffee shop website with a menu and booking interface.', projectCofeeteaNote: 'The booking form does not submit real requests.', projectCofeeteaAlt: 'CofeeTea coffee shop website with a menu and booking interface',
    projectShinruTitle: 'ShinRu', projectShinruCategoryLabel: 'Auto service website', projectShinruDescription: 'A Kazan auto service website with service details and a booking interface.', projectShinruNote: 'Requests from the site are not sent to a server.', projectShinruAlt: 'ShinRu auto service website with service information',
    projectNodusTitle: 'Nodus', projectNodusCategoryLabel: 'Concept', projectNodusDescription: 'A presentation page for a private network concept.', projectNodusNote: 'Concept only; P2P networking and end-to-end encryption are not implemented in the demo.', projectNodusAlt: 'Nodus — private network concept page',
    projectMarkdevTitle: 'MarkDev', projectMarkdevCategoryLabel: 'Portfolio', projectMarkdevDescription: 'A published version of a web developer portfolio.', projectMarkdevNote: 'A separate published portfolio version.', projectMarkdevAlt: 'MarkDev — web developer portfolio'
  }
};

const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const localeButton = document.querySelector('.locale-switch');
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
let locale = root.lang === 'en' ? 'en' : 'ru';
const showcase = document.querySelector('[data-showcase]');
const showcaseControls = showcase?.querySelector('[data-showcase-controls]');
const showcasePanels = new Map(Array.from(showcase?.querySelectorAll('[data-showcase-panel]') ?? [], (panel) => [panel.dataset.showcasePanel, panel]));
const showcaseButtons = new Map(Array.from(showcase?.querySelectorAll('[data-showcase-select]') ?? [], (button) => [button.dataset.showcaseSelect, button]));
const showcaseProjectIds = ['cofeetea', 'fightfinder', 'shinru'];
let activeShowcaseProject = null;
let showcaseReady = false;

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
  if (themeColor) themeColor.content = selected === 'dark' ? '#101010' : '#eeede7';
  if (save) persist(storageKeys.theme, selected);
}

function setText(element, value) {
  let textNode = element.firstChild;
  while (textNode && textNode.nodeType !== Node.TEXT_NODE) textNode = textNode.nextSibling;
  if (textNode) textNode.nodeValue = value;
  else if (element.firstChild) element.insertBefore(element.ownerDocument.createTextNode(value), element.firstChild);
  else element.textContent = value;
}

function updateProjectCards() {
  document.querySelectorAll('[data-project-id]').forEach((card) => {
    const id = card.dataset.projectId;
    if (!id) return;
    const prefix = `project${id[0].toUpperCase()}${id.slice(1)}`;
    ['title', 'categoryLabel', 'description', 'note', 'alt'].forEach((field) => {
      const element = card.querySelector(`[data-project-field="${field}"]`);
      if (!element) return;
      const fieldName = field[0].toUpperCase() + field.slice(1);
      const key = `${prefix}${fieldName}`;
      if (!Object.prototype.hasOwnProperty.call(translations[locale], key)) return;
      const value = translate(key);
      if (field === 'alt') element.alt = value;
      else setText(element, value);
    });
    const previewLink = card.querySelector('.project-preview-link');
    const titleKey = `${prefix}Title`;
    if (previewLink && Object.prototype.hasOwnProperty.call(translations[locale], titleKey)) {
      previewLink.setAttribute('aria-label', `${translate('projectOpen')} ${translate(titleKey)}`);
    }
  });
}

function updateShowcaseCaption() {
  if (!showcase) return;
  const projectId = activeShowcaseProject || showcase.dataset.activeProject || 'cofeetea';
  const panel = showcasePanels.get(projectId);
  const prefix = `project${projectId[0].toUpperCase()}${projectId.slice(1)}`;
  if (panel) {
    ['title', 'categoryLabel', 'description'].forEach((field) => {
      const target = panel.querySelector(`[data-project-field="${field}"]`);
      const key = `${prefix}${field[0].toUpperCase()}${field.slice(1)}`;
      if (target && Object.prototype.hasOwnProperty.call(translations[locale], key)) setText(target, translate(key));
    });
    const previewLink = panel.querySelector('.project-preview-link');
    const titleKey = `${prefix}Title`;
    if (previewLink && Object.prototype.hasOwnProperty.call(translations[locale], titleKey)) {
      previewLink.setAttribute('aria-label', `${translate('projectOpen')} ${translate(titleKey)}`);
    }
  }
  showcaseButtons.forEach((button, id) => {
    const titleKey = `project${id[0].toUpperCase()}${id.slice(1)}Title`;
    if (Object.prototype.hasOwnProperty.call(translations[locale], titleKey)) button.setAttribute('aria-label', translate(titleKey));
  });
  showcase.setAttribute('aria-label', translate('showcaseLabel'));
  if (showcaseControls) showcaseControls.setAttribute('aria-label', translate('showcaseHint'));
}

const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
let finePointerHandlersEnabled = false;
function onShowcaseButtonPointerEnter(event) {
  if (event.pointerType !== 'touch') selectShowcaseProject(event.currentTarget.dataset.showcaseSelect);
}
function syncShowcasePointerInput() {
  if (!showcaseReady) return;
  if (finePointerQuery.matches && !finePointerHandlersEnabled) {
    showcaseProjectIds.forEach((id) => showcaseButtons.get(id).addEventListener('pointerenter', onShowcaseButtonPointerEnter));
    finePointerHandlersEnabled = true;
  } else if (!finePointerQuery.matches && finePointerHandlersEnabled) {
    showcaseProjectIds.forEach((id) => showcaseButtons.get(id).removeEventListener('pointerenter', onShowcaseButtonPointerEnter));
    finePointerHandlersEnabled = false;
  }
}
finePointerQuery.addEventListener('change', syncShowcasePointerInput);

function selectShowcaseProject(projectId) {
  if (!showcaseReady || !showcasePanels.has(projectId) || !showcaseButtons.has(projectId)) return;
  activeShowcaseProject = projectId;
  showcase.dataset.activeProject = projectId;
  showcasePanels.forEach((panel, id) => { panel.hidden = id !== projectId; });
  showcaseButtons.forEach((button, id) => button.setAttribute('aria-pressed', String(id === projectId)));
  updateShowcaseCaption();
}

function initializeShowcase() {
  if (!showcase || !showcaseControls) return;
  const panelCount = showcase.querySelectorAll('[data-showcase-panel]').length;
  const buttonCount = showcaseControls.querySelectorAll('[data-showcase-select]').length;
  if (panelCount !== showcaseProjectIds.length || buttonCount !== showcaseProjectIds.length
    || showcasePanels.size !== showcaseProjectIds.length || showcaseButtons.size !== showcaseProjectIds.length
    || !showcaseProjectIds.every((id) => showcasePanels.has(id) && showcaseButtons.has(id))) return;
  showcaseReady = true;
  showcaseProjectIds.forEach((id) => {
    showcaseButtons.get(id).addEventListener('click', () => selectShowcaseProject(id));
    showcaseButtons.get(id).addEventListener('focus', () => selectShowcaseProject(id));
  });
  selectShowcaseProject(showcaseProjectIds[0]);
  showcaseControls.hidden = false;
  syncShowcasePointerInput();
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
  updateShowcaseCaption();
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
initializeShowcase();

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
const revealMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
let revealObserver = null;
if ('IntersectionObserver' in window && !revealMotionQuery.matches) {
  revealObserver = new IntersectionObserver((entries, observer) => {
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
revealMotionQuery.addEventListener('change', (event) => {
  if (!event.matches) return;
  revealObserver?.disconnect();
  revealObserver = null;
  revealElements.forEach((element) => element.classList.add('is-visible'));
});

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
    } catch { /* Try the legacy copy command if the Clipboard API is unavailable. */ }
    if (!copied) {
      let input;
      try {
        if (document.queryCommandSupported?.('copy') !== false && typeof document.execCommand === 'function') {
          input = document.createElement('textarea');
          input.value = email;
          input.setAttribute('readonly', '');
          input.style.position = 'fixed';
          input.style.opacity = '0';
          document.body.append(input);
          input.select();
          copied = document.execCommand('copy') === true;
        }
      } catch { copied = false; }
      finally { input?.remove(); }
    }
    const label = copyButton.querySelector('.copy-label');
    if (label) label.textContent = translate(copied ? 'copySuccess' : 'copyEmail');
    if (copyStatus) copyStatus.textContent = translate(copied ? 'copySuccess' : 'copyError');
    window.clearTimeout(copyButton.copyResetTimer);
    if (copied) copyButton.copyResetTimer = window.setTimeout(() => {
      if (label) label.textContent = translate('copyEmail');
      if (copyStatus) copyStatus.textContent = translate('copyReady');
    }, 2400);
  });
}

document.querySelectorAll('#year').forEach((element) => { element.textContent = String(new Date().getFullYear()); });
