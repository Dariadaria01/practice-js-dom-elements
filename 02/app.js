console.log('DOM');

const linksEl = document.querySelectorAll('[data-url]');
linksEl.forEach((link) => {
  const url = link.dataset.url;
  if (url && url !== 'null') {
    link.setAttribute('href', url);
  } else {
    link.setAttribute('href', '#');
  }
});
