// footer.js: Populates the footer on all pages from data.js
function setFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;
  // Logo and description
  const logoSection = `
    <div class="footer-logo-section">
      <img src="images/logo.png" alt="Logo" class="footer-logo" />
      <p class="footer-desc">Empowering Smiles & Success. Your trusted partner for dental tourism, event management, and business consulting.</p>
    </div>
  `;
  // Quick links
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
  const contact = pageData.contact;
  const reachUs = `
    <div class="footer-reach-section">
      <h4>Reach Us</h4>
      <p><strong>Address:</strong> ${contact.addressCard.address}</p>
      <p><strong>Email:</strong> <a href="mailto:${contact.email}">${contact.email}</a></p>
      <p><strong>Phone:</strong> <a href="tel:${contact.phone}">${contact.phone}</a></p>
      <div class="footer-social">
        ${contact.social.map(s => `<a href='${s.url}' target='_blank'><img src='${s.icon}' alt='${s.name}' class='footer-social-icon' /></a>`).join(' ')}
      </div>
    </div>
  `;
  footer.innerHTML = `<div class="footer-container">${logoSection}${quickLinks}${reachUs}</div>`;
}
document.addEventListener('DOMContentLoaded', setFooter);
