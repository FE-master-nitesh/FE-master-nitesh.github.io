// service.js: Populates Service page sections from data.js
function setServiceContent(data) {
  // Services List
  const servicesList = document.getElementById('services-list');
  servicesList.innerHTML = `
    <h2>Our Services</h2>
    <div class="services-cards">
      ${data.services.map(s => `
        <div class="service-card">
          <img src="${s.img}" alt="${s.alt}" class="service-img" />
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
        </div>
      `).join('')}
    </div>
  `;
  // Testimonials
  const testimonials = document.getElementById('service-testimonials');
  testimonials.innerHTML = `
    <h2>Testimonials</h2>
    ${data.testimonials.map(t => `<blockquote>"${t.text}"<br><cite>- ${t.name}</cite></blockquote>`).join('')}
  `;
}

document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname.endsWith('service.html')) {
    setServiceContent(pageData.service);
  }
});
