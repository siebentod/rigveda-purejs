import { data } from './data/data.js';

// === Константы DOM-элементов ===
const root = document.getElementById('root');
const prajapati = document.querySelector('.prajapati');
const cardsContainer = document.querySelector('.cards');
const cards = document.querySelectorAll('.card');

const buttonHideHeader = document.getElementById('button-hide-header');
const buttonHideCards = document.getElementById('button-hide-cards');

const searchInput = document.getElementById('search-input');
const clearSearch = document.querySelector('.clear-select');
const checkbox = document.getElementById('checkbox');

const openRandom = document.querySelector('.openRandom');
const resultsCounter = document.getElementById('countResults');

// === Глобальные переменные ===
let shownCards = data;
let strict = false;

// === Основной функционал ===
document.addEventListener('DOMContentLoaded', () => {
  initializePage();
  setupGlobalEventListeners();
});

// Инициализация страницы
function initializePage() {
  const currentPath = window.location.pathname;
  const initialContent =
    currentPath === '/' || currentPath === '/index.html'
      ? 'index'
      : currentPath;
  loadContent(initialContent);
  if (window.innerWidth < 650) {
    cardsContainer.classList.toggle('cardsHidden');
  }
}

// Настройка глобальных обработчиков событий
function setupGlobalEventListeners() {
  document.body.addEventListener('click', handleLinksClick);

  buttonHideCards.addEventListener('click', toggleCardsVisibility);
  buttonHideHeader.addEventListener('click', toggleHeaderVisibility);

  searchInput.addEventListener('input', (e) =>
    handleSearchInput(e.target.value)
  );
  clearSearch.addEventListener('click', handleClearSearch);
  checkbox.addEventListener('change', handleCheckbox);

  openRandom.addEventListener('click', handleRandom);

  window.addEventListener('popstate', () => {
    const currentPath = window.location.pathname;
    const contentId =
      currentPath === '/' || currentPath === '/index.html'
        ? 'index'
        : currentPath.slice(1);
    loadContent(contentId);
  });
}

// === Обработчики событий ===
function handleLinksClick(event) {
  const link = event.target.closest('a');
  console.log(link);
  if (link && !link.hasAttribute('data-native-url')) {
    event.preventDefault();
    const href = link.getAttribute('href');
    history.pushState(null, '', href);
    loadContent(href === '/' ? 'index' : href.slice(1));
    if (window.innerWidth < 650) {
      if (!cardsContainer.classList.contains('cardsHidden')) {
        cardsContainer.classList.add('cardsHidden');
      }
    }
  }
}

function handleSearchInput(text) {
  const searchPhrase = text;
  filterCards(searchPhrase);
  toggleSearchUI(searchPhrase);
}

function toggleSearchUI(searchPhrase) {
  const isSearching = searchPhrase !== '';
  resultsCounter.style.display = isSearching ? 'block' : 'none';
  clearSearch.style.display = isSearching ? 'flex' : 'none';
}

function toggleCardsVisibility() {
  cardsContainer.classList.toggle('cardsHidden');
}

function toggleHeaderVisibility() {
  prajapati.classList.toggle('filterHidden');
  buttonHideCards.classList.toggle('move');
  buttonHideHeader.classList.toggle('toggle');
  if (
    !prajapati.classList.contains('filterHidden') &&
    shownCards.length !== data.length
  )
    resultsCounter.style.display = 'block';
}

function handleRandom() {
  const random = shownCards[Math.floor(Math.random() * shownCards.length)];
  loadContent(random.id);
}

function handleClearSearch() {
  searchInput.value = '';
  handleSearchInput('');
}

function handleCheckbox() {
  strict = checkbox.checked;
  handleSearchInput(searchInput.value);
}

// === Вспомогательные функции ===
function filterCards(keyword) {
  let count = 0;
  shownCards = [];

  cards.forEach((card) => {
    const id = card.id;
    const textObject = data.find((text) => text.id === id);

    if (
      textObject &&
      looseIncludes(keyword, textObject, strict ? true : false)
    ) {
      card.style.display = '';
      count++;
      shownCards.push(textObject);
    } else {
      card.style.display = 'none';
    }
  });

  updateResultsCounter(count);
}

function updateResultsCounter(count) {
  const suffix =
    count === 1 ? 'результат' : count < 5 ? 'результата' : 'результатов';
  resultsCounter.textContent = `${count} ${suffix} найдено`;
}

function looseIncludes(searchPhrase, targetObject, strict = false) {
  const sum = targetObject.title + ' ' + targetObject.content;
  const regex = new RegExp(
    `(^|[^а-яёa-zA-Z])${searchPhrase.toLowerCase()}`,
    'g'
  );
  return strict
    ? sum.toLowerCase().match(regex)
    : sum.toLowerCase().includes(searchPhrase.toLowerCase());
}

function loadContent(itemId) {
  fetch(`/data/json/${itemId}.json`)
    .then((response) => response.json())
    .then((item) => {
      const isIndex = item.id === 'index';
      const contentHTML = isIndex
        ? `<div class="modal-scrollable-content"><p>${item.content}</p></div>`
        : `<a class="modal-close" href="/">&times;</a><div class="modal-scrollable-content"><h2>${item.title}</h2><p>${item.content}</p></div>`;
      root.innerHTML = contentHTML;
      document.title = isIndex ? item.title : `${item.title} | Ригведа`;
    })
    .catch((error) => console.error('Error loading JSON:', error));
}
