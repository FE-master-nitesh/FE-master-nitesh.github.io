// contact.js: Populates contact page sections from data.js
function setContactContent(data) {
  // Banner
  const banner = document.getElementById('contact-banner');
  banner.innerHTML = `
    <div class="contact-banner" style="background:${data.banner.color}">
      <div class="contact-banner-text">
        <h2>${data.banner.textTitle}</h2>
        <p>${data.banner.textDesc}</p>
      </div>
      <div class="contact-banner-img">
        <img src="${data.banner.img}" alt="Contact" />
      </div>
    </div>
  `;
  // Overlapping Cards
  const cards = document.getElementById('contact-cards');
  cards.innerHTML = `
    <div class="contact-cards-row">
      <div class="contact-card talk">
        <img src="${data.talkToUs.icon}" alt="Phone" class="contact-card-icon" />
        <div class="contact-card-title">${data.talkToUs.title}</div>
        <div class="contact-card-desc">${data.talkToUs.desc}</div>
        <div class="contact-card-info">${data.talkToUs.phone}</div>
      </div>
      <div class="contact-card mail">
        <img src="${data.mailUs.icon}" alt="Mail" class="contact-card-icon" />
        <div class="contact-card-title">${data.mailUs.title}</div>
        <div class="contact-card-desc">${data.mailUs.desc}</div>
        <div class="contact-card-info">${data.mailUs.email}</div>
      </div>
    </div>
  `;
  // Location Section
  const location = document.getElementById('contact-location');
  location.innerHTML = `
    <div class="contact-location-row">
      <div class="contact-location-map">
        <img src="${data.location.gmap}" alt="Map" />
      </div>
      <div class="contact-location-address">
        <h3>Our Address</h3>
        <p>${data.location.address}</p>
      </div>
    </div>
  `;
  // Office Section
  const office = document.getElementById('contact-office');
  office.innerHTML = `
    <div class="contact-office-row">
      <div class="contact-office-img">
        <img src="${data.office.img}" alt="Office" />
      </div>
      <div class="contact-office-info">
        <h3>${data.office.title}</h3>
        <p>${data.office.address}</p>
        <div class="contact-card-info">${data.office.phone}</div>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname.endsWith('contact.html')) {
    setContactContent(pageData.contact);
  }
});
