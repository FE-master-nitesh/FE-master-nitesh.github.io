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
  banner.style.backgroundImage = `url('${data.banner.img}')`;
  banner.innerHTML = `
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
    <div class="services-brief-cards">
      ${data.servicesBrief.map((s, i) => `
        <div class="services-brief-card">
          <div class="services-brief-card-title">${s.title}</div>
          <div class="services-brief-card-desc">${s.desc}</div>
        </div>
      `).join('')}
    </div>
  `;
  // Places to Visit
  const places = document.getElementById('places-to-visit');
  places.innerHTML = `
    <h2>Places to Visit</h2>
    <div class="places-cards">
      ${data.placesToVisit.map(p => `
        <div class="place-card">
          <img src="${p.img}" alt="${p.title}" class="place-img" />
          <div class="place-title">${p.title}</div>
        </div>
      `).join('')}
    </div>
  `;
  // How It Works
  const how = document.getElementById('how-it-works');
  how.innerHTML = `
    <h2>How It Works</h2>
    <div class="how-cards">
      ${data.howItWorks.map(step => `
        <div class="how-card">
          <div class="how-step">${step.step}</div>
          <div class="how-text">${step.text}</div>
        </div>
      `).join('')}
    </div>
  `;
  // Testimonials
  const testimonials = document.getElementById('testimonials');
  testimonials.innerHTML = `
    <h2>Testimonials</h2>
    <div class="testimonial-cards">
      ${data.testimonials.map(t => `
        <div class="testimonial-card">
          <div class="testimonial-quote">&#10077;</div>
          <div class="testimonial-text">${t.text}</div>
          <div class="testimonial-author">- ${t.name}</div>
        </div>
      `).join('')}
    </div>
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
