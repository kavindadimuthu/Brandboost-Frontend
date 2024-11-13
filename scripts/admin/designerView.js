// Component loader function
function loadComponent(componentId, componentFile) {
    fetch(componentFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById(componentId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

// Designer profile data
const designerData = {
    profileInfo: {
        name: 'Harley Quinn',
        role: 'Designer',
        score: 4.8,
        socialScore: '1600+',
        expertise: ['Design', 'Product', 'Web'],
        about: 'Cupidatat sunt culpatur justo online clinic ehenderit we labore consectetur volupt elit sin item ut volupt volves. Deserunt sint consequat sed sunt id reprehenderit we labore consectetur justo elit sin item ut volupt volves Lorem supply sunt deserunt mogna nulla.'
    },
    skills: [
        { name: 'Adobe Photoshop', icon: 'adobe-photoshop.svg' },
        { name: 'Figma', icon: 'figma.svg' },
        { name: 'Adobe XD', icon: 'adobe-xd.svg' },
        { name: 'Sketch', icon: 'sketch.svg' },
        { name: 'Adobe Illustrator', icon: 'adobe-illustrator.svg' },
        { name: 'InVision', icon: 'invision.svg' }
    ],
    gallery: [
        { image: 'gallery1.jpg', title: 'Orange Design' },
        { image: 'gallery2.jpg', title: 'Abstract Art' },
        { image: 'gallery3.jpg', title: 'Orange on Blue' },
        { image: 'gallery4.jpg', title: 'Yellow Flower' },
        { image: 'gallery5.jpg', title: 'Dried Plants' }
    ],
    services: [
        {
            id: 1,
            title: 'Product title',
            price: '$2.00',
            image: 'service1.jpg',
            rating: 4.5,
            reviews: 200
        },
        // ... other services data
    ],
    experience: [
        {
            role: 'Senior Product Designer',
            company: 'Microsoft Design',
            duration: 'Jan 2020 - Present',
            color: '#6366f1'
        },
        {
            role: 'Product Designer',
            company: 'Microsoft Design',
            duration: 'Apr 2018 - Jan 2020',
            color: '#6366f1'
        },
        {
            role: 'Training Designer',
            company: 'Microsoft Design',
            duration: 'Jan 2016 - Apr 2018',
            color: '#6366f1'
        },
        // ... other experience data
    ], 
    education: [
        {
            institute: 'Udemy',
            course: 'UI/UX Design',
            duration: '2019 - 2020'
        },
        {
            institute: 'Udemy',
            course: 'Web Development',
            duration: '2016-2017'
        },
        {
            institute: 'IIT',
            course: 'B.Tech in Computer Science',
            duration: '2012 - 2016'
        }
    ],

    reviews: [
        {
            id: 1,
            name: 'Jenny Hale',
            date: '2 day ago',
            rating: 4,
            text: 'Magna sit sint cillum lo culpa mest sed mollit and more particul...',
            avatar: 'avatar1.jpg'
        },
        // ... other reviews data
    ]
};

// Helper function to generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '★'.repeat(fullStars);
    if (hasHalfStar) starsHTML += '½';
    const emptyStars = 5 - Math.ceil(rating);
    starsHTML += '☆'.repeat(emptyStars);
    return starsHTML;
}

// Render functions for each section
function renderProfileInfo(data) {
    return `
        <div class="profile-header">
            <img src="https://via.placeholder.com/150" alt="${data.name}" class="profile-image">
            <div class="profile-info">
                <h1>${data.name}</h1>
                <p class="role">${data.role}</p>
                <div class="ratings">
                    <div class="score">
                        <span>SCORE</span>
                        <div class="score-value">
                            ${data.score}
                            <div class="stars">${generateStars(data.score)}</div>
                        </div>
                    </div>
                    <div class="social-score">
                        <span>SOCIAL</span>
                        <div class="social-value">
                            ${data.socialScore}
                            <i class="fa-brands fa-whatsapp"></i>
                        </div>
                    </div>
                </div>
                <div class="expertise">
                    <span>Areas expert at</span>
                    <div class="tags">
                        ${data.expertise.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderAbout(about) {
    return `<p class="about-text">${about}</p>`;
}

function renderSkills(skills) {
    return skills.map(skill => `
        <div class="skill-item">
            <img src="../../assets/icons/${skill.icon}" alt="${skill.name}" class="skill-icon">
            <span class="skill-name">${skill.name}</span>
        </div>
    `).join('');
}

function renderGallery(gallery) {
    return gallery.map(item => `
        <div class="gallery-item">
            <img src="../../assets/images/${item.image}" alt="${item.title}">
            <div class="gallery-overlay">
                <h3>${item.title}</h3>
            </div>
        </div>
    `).join('');
}

function renderServices(services) {
    return services.map(service => `
        <div class="service-card">
            <div class="service-image">
                <img src="../../assets/images/${service.image}" alt="${service.title}">
                <button class="favorite-btn">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="service-info">
                <h3>${service.title}</h3>
                <div class="service-meta">
                    <span class="price">${service.price}</span>
                    <div class="rating">
                        <span class="stars">${generateStars(service.rating)}</span>
                        <span class="review-count">(${service.reviews})</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderExperience(experience) {
    return experience.map(exp => `
        <div class="timeline-item" style="--timeline-color: ${exp.color}">
            <div class="timeline-content">
                <h3>${exp.role}</h3>
                <p class="company">${exp.company}</p>
                <p class="duration">${exp.duration}</p>
            </div>
        </div>
    `).join('');
}

function renderEducation(education) {
    return education.map(exp => `
        <div class="timeline-item" style="--timeline-color: ${exp.color}">
            <div class="timeline-content">
                <h3>${exp.institute}</h3>
                <p class="company">${exp.course}</p>
                <p class="duration">${exp.duration}</p>
            </div>
        </div>
        `).join('');
}

function renderReviews(reviews) {
    return reviews.map(review => `
        <div class="review-card">
            <div class="reviewer">
                <img src="../../assets/images/${review.avatar}" alt="${review.name}">
                <div class="reviewer-info">
                    <h3>${review.name}</h3>
                    <span class="date">${review.date}</span>
                </div>
            </div>
            <div class="review-stars">${generateStars(review.rating)}</div>
            <p class="review-text">${review.text}</p>
        </div>
    `).join('');
}

// Main render function
function renderDesignerPage(data) {
    document.querySelector('.profile').innerHTML = renderProfileInfo(data.profileInfo);
    document.querySelector('.about').innerHTML = renderAbout(data.profileInfo.about);
    document.querySelector('.skills-grid').innerHTML = renderSkills(data.skills);
    document.querySelector('.gallery-grid').innerHTML = renderGallery(data.gallery);
    document.querySelector('.services-grid').innerHTML = renderServices(data.services);
    document.querySelector('.timeline-ex').innerHTML = renderExperience(data.experience);
    document.querySelector('.timeline-edu').innerHTML = renderEducation(data.education);
    document.querySelector('.reviews-grid').innerHTML = renderReviews(data.reviews);
    
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    // Favorite buttons
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            icon.classList.toggle('far');
            icon.classList.toggle('fas');
        });
    });

    // Login button
    document.querySelector('.login-btn')?.addEventListener('click', () => {
        console.log('Login button clicked');
    });

    // See all links
    document.querySelectorAll('.see-all').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('See all clicked');
        });
    });

    // Gallery hover effects
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('.gallery-overlay').style.opacity = '1';
        });
        item.addEventListener('mouseleave', () => {
            item.querySelector('.gallery-overlay').style.opacity = '0';
        });
    });
}

// Initialize the page
window.onload = function() {
    loadComponent('sidebar-container', '../../components/admin/sidebar.html');
    renderDesignerPage(designerData);
}