'use strict';
(() => {
  let lang = 'es';
  const dictionary = window.JV_TRANSLATIONS;
  const menu = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const language = document.getElementById('language');
  const theme = document.querySelector('.theme-toggle');
  const safeStore = (key, value) => { try { localStorage.setItem(key, value); } catch (_) {} };
  const getStored = key => { try { return localStorage.getItem(key); } catch (_) { return null; } };
  const labels = {
    es: { light: 'Cambiar a tema claro', dark: 'Cambiar a tema oscuro', menu: 'Abrir menú', close: 'Cerrar menú', search: 'Buscar tecnología…', count: n => `${n} de 6 áreas de conocimientos`, projects: n => `${n} ${n === 1 ? 'proyecto visible' : 'proyectos visibles'}` },
    ca: { light: 'Canvia al tema clar', dark: 'Canvia al tema fosc', menu: 'Obre el menú', close: 'Tanca el menú', search: 'Cerca una tecnologia…', count: n => `${n} de 6 àrees de coneixement`, projects: n => `${n} ${n === 1 ? 'projecte visible' : 'projectes visibles'}` },
    en: { light: 'Switch to light theme', dark: 'Switch to dark theme', menu: 'Open menu', close: 'Close menu', search: 'Search technologies…', count: n => `${n} of 6 skill areas`, projects: n => `${n} ${n === 1 ? 'project' : 'projects'} visible` }
  };
  function updateThemeLabel() {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    theme.setAttribute('aria-label', labels[lang][next]);
    theme.title = labels[lang][next];
    document.querySelector('meta[name="theme-color"]').content = next === 'light' ? '#0b0e0d' : '#f3f5ef';
  }
  function setMenu(open) {
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? labels[lang].close : labels[lang].menu);
    mobileNav.hidden = !open;
  }
  menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !mobileNav.hidden) { setMenu(false); menu.focus(); } });
  window.addEventListener('resize', () => { if (window.innerWidth > 900 && !mobileNav.hidden) setMenu(false); });
  theme.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    safeStore('jv-theme', next);
    updateThemeLabel();
  });
  const filterButtons = [...document.querySelectorAll('[data-project-filter]')];
  const projectCards = [...document.querySelectorAll('[data-project-category]')];
  function projectCount() {
    const status = document.getElementById('project-results');
    if (status) status.textContent = labels[lang].projects(projectCards.filter(card => !card.hidden).length);
  }
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const category = button.dataset.projectFilter;
    filterButtons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    projectCards.forEach(card => { card.hidden = category !== 'all' && !card.dataset.projectCategory.split(' ').includes(category); });
    projectCount();
  }));
  const search = document.getElementById('skill-search');
  const skillRows = [...document.querySelectorAll('#all-skills .skill-row')];
  const normalize = value => value.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  function searchSkills() {
    if (!search) return;
    const query = normalize(search.value.trim());
    let count = 0;
    skillRows.forEach(row => { row.hidden = !normalize(row.textContent).includes(query); if (!row.hidden) count++; });
    document.getElementById('skills-empty').hidden = count !== 0;
    document.getElementById('skill-count').textContent = labels[lang].count(count);
  }
  search?.addEventListener('input', searchSkills);
  document.querySelector('.print-cv')?.addEventListener('click', () => window.print());
  function setLanguage(next) {
    if (!['es', 'ca', 'en'].includes(next)) return;
    lang = next;
    document.documentElement.lang = lang;
    language.value = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const text = dictionary[lang]?.[element.dataset.i18n];
      if (typeof text === 'string') element.textContent = text;
    });
    if (search) search.placeholder = labels[lang].search;
    updateThemeLabel();
    setMenu(menu.getAttribute('aria-expanded') === 'true');
    searchSkills();
    projectCount();
    safeStore('jv-lang', lang);
  }
  language.addEventListener('change', () => setLanguage(language.value));
  const storedLang = getStored('jv-lang');
  if (storedLang && storedLang !== 'es') setLanguage(storedLang);
  updateThemeLabel();
  searchSkills();
  projectCount();
})();
