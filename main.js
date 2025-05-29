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

function setHomeContent(data) {
  // Banner
  const banner = document.getElementById('banner');
  banner.innerHTML = `
    <img src="${data.banner.img}" alt="${data.banner.alt}" />
    <div class="banner-text">
      <h2>${data.banner.text}</h2>
    </div>
  `;
  // Gallery
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = `
    <h2>Gallery</h2>
    <div class="gallery-images">
      ${data.gallery.map(img => `<img src="${img.img}" alt="${img.alt}" />`).join('')}
    </div>
  `;
  // Services Brief
  const services = document.getElementById('services-brief');
  services.innerHTML = `
    <h2>Our Services</h2>
    <ul>
      ${data.servicesBrief.map(s => `<li><strong>${s.title}:</strong> ${s.desc}</li>`).join('')}
    </ul>
  `;
  // Testimonials
  const testimonials = document.getElementById('testimonials');
  testimonials.innerHTML = `
    <h2>Testimonials</h2>
    ${data.testimonials.map(t => `<blockquote>"${t.text}"<br><cite>- ${t.name}</cite></blockquote>`).join('')}
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
  if (pageKey === 'home') {
    setHomeContent(data);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  setContent(getPageKey());
});
