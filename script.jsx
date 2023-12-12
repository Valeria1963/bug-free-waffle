// Пример добавления новостей на страницу
const newsContainer = document.getElementById('news-container');

// Массив новостей (для примера)
const news = [
  { title: 'Новость 1', content: 'Содержание новости 1' },
  { title: 'Новость 2', content: 'Содержание новости 2' },
  { title: 'Новость 3', content: 'Содержание новости 3' }
];


function addNews() {
    const newArticle = {
      title: В середу Валерія та Ілля йдуть у ліс,
      content: 'Содержание новой новости'
    };
  
    const articleElement = document.createElement('article');
    articleElement.innerHTML = `
      <h3>${newArticle.title}</h3>
      <p>${newArticle.content}</p>
    `;
  
    const newsContainer = document.getElementById('news-container');
    newsContainer.appendChild(articleElement);
  }
  
function renderNews() {
  news.forEach(article => {
    const articleElement = document.createElement('article');
    articleElement.innerHTML = `
      <h3>${article.title}</h3>
      <p>${article.content}</p>
    `;
    newsContainer.appendChild(articleElement);
  });
}

// Вызов функции для отображения новостей
renderNews();
