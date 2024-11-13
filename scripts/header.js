// Handle navigation link clicks for tab switching
const navLinks = document.querySelectorAll('nav ul li');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const currentTab = event.target.closest('li').dataset.tab;
    setActiveTab(currentTab);
  });
});

function setActiveTab(tab) {
  // Update active tab styling
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.dataset.tab === tab) {
      link.classList.add('active');
    }
  });
}

// Toggle user popup on hover
const userIcon = document.querySelector('.user-icon');
const popup = document.querySelector('.user-icon .popup');

userIcon.addEventListener('mouseover', () => {
  popup.style.display = 'block';
});

userIcon.addEventListener('mouseout', () => {
  popup.style.display = 'none';
});
