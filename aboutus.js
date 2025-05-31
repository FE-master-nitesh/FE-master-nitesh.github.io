// aboutus.js: Populates About Us page sections from data.js
function setAboutContent(data) {
  // Hero Card
  document.getElementById('heading').textContent = data.heading;
  document.getElementById('description').textContent = data.description;

  // 6 Cards: alternate text/image per row
  const grid = document.getElementById('about-cards-grid');
  grid.innerHTML = `
    <div class="about-card-text">
      <h2>Our Vision</h2>
      <p>${data.vision}</p>
    </div>
    <div class="about-card-img full-img">
      <img src="${data.visionImg}" alt="${data.founder.alt}" />
    </div>
    <div class="about-card-img full-img">
      <img src="${data.storyImg}" alt="${data.founder.alt}" />
    </div>
    <div class="about-card-text">
      <h2>Our Story</h2>
      <p>${data.background}</p>
    </div>
    <div class="about-card-text">
      <h2>Meet Our Founder</h2>
      <p>${data.founder.info}</p>
    </div>
    <div class="about-card-img">
      <img src="${data.founder.img}" alt="${data.founder.alt}" class="founder-img" />
      <div class="founder-name">${data.founder.name}</div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname.endsWith('about.html')) {
    setAboutContent(pageData.about);
  }
});
