// footer.js: Populates the footer on all pages from data.js
function setFooter() {
  console.log('setFooter called');
  const footer = document.getElementById('footer');
  if (!footer) {
    console.log('Footer element not found');
    return;
  }
  // Logo and description
  console.log('Building logo section');
  const logoSection = `
    <div class="footer-logo-section" style="display: flex; align-items: center; margin-top: 15px;">
        <img src="images/3225b760ba2cbf6a9422a330d6bb73d5.jpg" alt="Logo" class="footer-logo" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover; margin-right: 16px;" />
        <p class="footer-desc" style="margin: 0;">Empowering Smiles & Success. Your trusted partner for dental tourism, event management, and business consulting.</p>
    </div>
  `;
  // Quick links
  console.log('Building quick links');
  const nav = pageData.home.nav;
  const quickLinks = `
    <div class="footer-links-section">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="index.html">${nav.home}</a></li>
        <li><a href="about.html">${nav.about}</a></li>
        <li><a href="service.html">${nav.service}</a></li>
        <li><a href="contact.html">${nav.contact}</a></li>
      </ul>
    </div>
  `;
  // Reach us
  console.log('Building reach us section');
  const contact = pageData.contact;
  const reachUs = `
    <div class="footer-reach-section">
      <h4>Reach Us</h4>
      <p><strong>Address:</strong> ${contact.location.address}</p>
      <p><strong>Email:</strong> <a href="mailto:${contact.email}">${contact.email}</a></p>
      <p><strong>Phone:</strong> <a href="tel:${contact.phone}">${contact.phone}</a></p>
      <div class="footer-social">
        ${contact.social.map(s => `<a href='${s.url}' target='_blank'><img src='${s.icon}' alt='${s.name}' class='footer-social-icon' /></a>`).join(' ')}
      </div>
    </div>
  `;
  console.log('Setting footer innerHTML');
  footer.innerHTML = `<div class="footer-container">${logoSection}${quickLinks}${reachUs}</div>`;
  console.log('Footer innerHTML set');
}
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded for footer.js');
  setFooter();
});
