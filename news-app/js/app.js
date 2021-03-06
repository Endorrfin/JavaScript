// Custom Http Module
function customHttp() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    },
  };
}
// Init http module
const http = customHttp();

const newsService = (function(){
  const apiKey = '70028f59fb0548059af095518452b93e';
  const apiUrl = 'https://newsapi.org/v2';

  return {
    topHeadlines(country = 'ua', cb) {
      http.get(
        `${apiUrl}/top-headlines?country=${country}&category=technology&apiKey=${apiKey}`, 
        cb,
        );
    },
    everything (query, cb) {
      http.get(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}`, cb);
    },
  };
})();

const form = document.forms['newsControls'];
const countrySelect = form.elements['country'];
const searchInput = form.elements['search'];

form.addEventListener('submit', e => {
  e.preventDefault();
  loadNews();
});

//  init selects
document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit();
  loadNews();
});


// ======= LOAD NEWS FUNCTION =======
function loadNews() {
  showLoader();
  const country = countrySelect.value;
  const searchText = searchInput.value
  
  if(!searchText) {
    newsService.topHeadlines(country, onGetResponse);
  } else {
    newsService.everything (searchText, onGetResponse)
  }
}


// ======= ON GET RESPONSE FROM SERVER FUNCTION =======
function onGetResponse(err, res) {
  removePreloader();

  if(err) {
    showAlert(err, 'error-msg');
    return;
  }

  if(!res.articles.length) {
    // show empty message
    return;
  }
  renderNews(res.articles);
}


// ======= CLEAR CONTAINER FUNCTION =======
function clearContainer(container) {
  // container.inerHTML = '';
  let child = container.lastElementChild;
  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
  }
}


// ======= RENDER NEWS FUNCTION =======
function renderNews(news) {
  const newsContainer = document.querySelector('.news-container .row');
  if(newsContainer.children.length) {
    clearContainer(newsContainer);
  }
  let fragment = '';

  news.forEach(newsItem => {
    const el = newsTemplate(newsItem);
    fragment += el;
  });

  newsContainer.insertAdjacentHTML('afterbegin', fragment);
}


// ======= NEWS ITEM TEMPLATE FUNCTION =======
function newsTemplate({ urlToImage, title, url, description }) {
  return `
    <div class="col s12">
      <div class="card">
        <div class="card-image">
          <img src="${urlToImage}">
          <span class ="card-title">${title || ''}</span>
        </div>
        <div class="card-content">
          <p>${description || ''}</p>
        </div>
        <div class="card-action">
          <a href="${url}">Read more</a>
        </div>
      </div>
    </div>
  `;
}


// ======= SHOW ALERT FUNCTION =======
function showAlert(msg, type = 'success') {
  M.toast( {html: msg, classes: type })
}



// ======= SHOW PRELOADER FUNCTION =======
function showLoader () {
  document.body.insertAdjacentHTML(
    'afterbegin', 
    `
    <div class="progress">
      <div class="indeterminate"></div>
    </div>
    `,
  );
}


// ======= REMOVE SHOW PRELOADER FUNCTION =======
function removePreloader() {
  const loader = document.querySelector('.progress');
  if(loader) {
    loader.remove();
  }
}

