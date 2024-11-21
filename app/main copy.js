import { data } from './data/data.js';

document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;

  if (currentPath === '/' || currentPath === '/index.html') {
    loadContent('index');
  } else {
    loadContent(currentPath);
  }

  // Добавляем обработчики для ссылок один раз через делегирование
  document.body.addEventListener('click', (event) => {
    const link = event.target.closest('a'); // Проверяем, кликнули ли по ссылке
    if (link) {
      event.preventDefault();
      const href = link.getAttribute('href');
      history.pushState(null, '', href);
      if (href === '/') {
        loadContent('index');
      } else {
        loadContent(href.slice(1));
      }
    }
  });
});

const cards = document.querySelectorAll('.card');
let shownCards = data;

const resultsCounter = document.getElementById('countResults'); // Результатов найдено
const searchInput = document.getElementById('search-input'); // Поле ввода
searchInput.addEventListener('input', (event) => {
  searchInputChangedHandle(event.target.value);
});
function searchInputChangedHandle(text) {
  filterCards(text);
  if (text !== '') {
    {
      resultsCounter.style.display = 'block';
      clearSearch.style.display = 'flex';
    }
  } else {
    resultsCounter.style.display = 'none';
    clearSearch.style.display = 'none';
  }
}

function filterCards(keyword) {
  // const lowerKeyword = keyword.toLowerCase();
  let count = 0;
  shownCards = [];

  cards.forEach((card) => {
    const id = card.id;
    const textObject = data.find((text) => text.id === id);

    if (textObject && looseIncludes(keyword, textObject)) {
      card.style.display = ''; // Показываем ссылку
      count++;
      shownCards.push(textObject);
    } else {
      card.style.display = 'none'; // Скрываем ссылку
    }
  });

  const resultsCounter = document.getElementById('countResults');
  resultsCounter.textContent = `${count} ${
    count === 1 ? 'результат' : count < 5 ? 'результата' : 'результатов'
  } найдено`;
}

const buttonHideCards = document.getElementById('button-hide-cards');

buttonHideCards.addEventListener('click', () => {
  const cards = document.querySelector('.cards');
  cards.classList.toggle('cardsHidden');
});

const handleRandom = () => {
  const random = shownCards[Math.floor(Math.random() * shownCards.length)];
  loadContent(`/${random.id}`);
};
const openRandom = document.querySelector('.openRandom');
openRandom.addEventListener('click', handleRandom);

const handleClearSearch = () => {
  searchInput.value = '';
  searchInputChangedHandle('');
};
const clearSearch = document.querySelector('.clear-select');
clearSearch.addEventListener('click', handleClearSearch);

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
      if (item.id === 'index') {
        document.getElementById(
          'root'
        ).innerHTML = `<div class="modal-scrollable-content"><p>${item.content}</p></div>`;
        document.title = item.title;
      } else {
        document.getElementById(
          'root'
        ).innerHTML = `<a class="modal-close" href="/">&times;</a><div class="modal-scrollable-content"><h2>${item.title}</h2><p>${item.content}</p></div>`;
        document.title = item.title + ' | Ригведа';
      }
    })
    .catch((error) => console.error('Error loading JSON:', error));
}

// function linksModificator() {
//   const links = document.querySelectorAll('a');
//   links.forEach((link) => {
//     link.addEventListener('click', (event) => {
//       event.preventDefault();
//       const href = link.getAttribute('href');
//       history.pushState(null, '', href);
//       if (href === '/') {
//         loadContent('index');
//       } else loadContent(href.slice(1));
//     });
//   });
// }
