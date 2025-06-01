// service.js: Populates Service page sections from data.js
function setServiceContent(data) {
  // Service Banner
  const bannerSection = document.getElementById('service-banner');
  bannerSection.innerHTML = `
    <div class="service-banner" style="background-image:url('${data.banner.img}')">
      <div class="service-banner-overlay">
        <h1 class="service-banner-title">${data.banner.title}</h1>
        <p class="service-banner-desc">${data.banner.desc}</p>
      </div>
    </div>
  `;

  // Overlapping Service Cards
  const overlapSection = document.getElementById('overlapping-services');
  overlapSection.innerHTML = `
    <div class="overlap-services-container">
      <div class="overlap-service-card tall">
        <div class="overlap-service-img-wrap">
          <img src="${data.services[0].img}" alt="${data.services[0].alt}" class="overlap-service-img" />
        </div>
        <h3>${data.services[0].title}</h3>
        <p>${data.services[0].desc}</p>
      </div>
      <div class="overlap-service-card short short-top">
        <div class="overlap-service-img-wrap">
          <img src="${data.services[1].img}" alt="${data.services[1].alt}" class="overlap-service-img" />
        </div>
        <h3>${data.services[1].title}</h3>
        <p>${data.services[1].desc}</p>
      </div>
      <div class="overlap-service-card short short-bottom">
        <div class="overlap-service-img-wrap">
          <img src="${data.services[2].img}" alt="${data.services[2].alt}" class="overlap-service-img" />
        </div>
        <h3>${data.services[2].title}</h3>
        <p>${data.services[2].desc}</p>
      </div>
    </div>
  `;

  // Testimonials (unchanged)
  const testimonials = document.getElementById('service-testimonials');
  testimonials.innerHTML = `
    <h2>Testimonials</h2>
    <div class="service-testimonial-cards">
      ${data.testimonials.map(t => `
        <div class="service-testimonial-card">
          <div class="service-testimonial-quote">&#10077;</div>
          <div class="service-testimonial-text">${t.text}</div>
          <div class="service-testimonial-author">- ${t.name}</div>
        </div>
      `).join('')}
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname.endsWith('service.html')) {
    setServiceContent(pageData.service);
  }
});
