// aboutus.js: Populates About Us page sections from data.js
function setAboutContent(data) {
  // Vision
  const vision = document.getElementById('vision');
  vision.innerHTML = `
    <h2>Our Vision</h2>
    <p>${data.vision}</p>
  `;
  // Background
  const background = document.getElementById('background');
  background.innerHTML = `
    <h2>Background</h2>
    <p>${data.background}</p>
  `;
  // Founder
  const founder = document.getElementById('founder');
  founder.innerHTML = `
    <h2>Founder</h2>
    <div class="founder-card">
      <img src="${data.founder.img}" alt="${data.founder.alt}" class="founder-img" />
      <div class="founder-info">
        <h3>${data.founder.name}</h3>
        <p>${data.founder.info}</p>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname.endsWith('about.html')) {
    setAboutContent(pageData.about);
  }
});
