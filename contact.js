// contact.js: Populates contact page sections from data.js
function setContactContent(data) {
  // Address Card
  const addressCard = document.getElementById('address-card');
  addressCard.innerHTML = `
    <div class="address-card">
      <img src="${data.addressCard.img}" alt="${data.addressCard.alt}" class="address-img" />
      <div class="address-info">
        <h2>Our Address</h2>
        <p>${data.addressCard.address}</p>
      </div>
    </div>
  `;
  // Contact Details
  const contactDetails = document.getElementById('contact-details');
  contactDetails.innerHTML = `
    <h2>Contact Details</h2>
    <ul class="contact-list">
      <li><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></li>
      <li><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></li>
      <li><strong>Social:</strong> ${data.social.map(s => `<a href='${s.url}' target='_blank'><img src='${s.icon}' alt='${s.name}' class='social-icon' /></a>`).join(' ')}</li>
    </ul>
  `;
}

document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname.endsWith('contact.html')) {
    setContactContent(pageData.contact);
  }
});
