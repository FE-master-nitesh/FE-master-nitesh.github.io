// main.js: Loads content from data.js based on the current page
function getPageKey() {
  const path = window.location.pathname;
  if (path.endsWith('about.html')) return 'about';
  if (path.endsWith('service.html')) return 'service';
  if (path.endsWith('contact.html')) return 'contact';
  return 'home';
}

function setNav(navData) {
  const nav = document.getElementById('navbar');
  nav.innerHTML = `
    <a href="index.html">${navData.home}</a> |
    <a href="about.html">${navData.about}</a> |
    <a href="service.html">${navData.service}</a> |
    <a href="contact.html">${navData.contact}</a>
  `;
}

function setContent(pageKey) {
  const data = pageData[pageKey];
  document.title = data.title;
  setNav(data.nav);
  document.getElementById('heading').textContent = data.heading;
  document.getElementById('description').textContent = data.description;
  if (pageKey === 'contact') {
    document.getElementById('label-name').textContent = data.form.name;
    document.getElementById('label-email').textContent = data.form.email;
    document.getElementById('label-message').textContent = data.form.message;
    document.getElementById('submit-btn').textContent = data.form.submit;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  setContent(getPageKey());
});
