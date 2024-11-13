// Component loader function
function loadComponent(componentId, componentFile) {
    fetch(componentFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById(componentId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

// Influencer profile data
const influencerData = {
    profileInfo: {
        name: 'Anna Jones',
        score: 4.8,
        socialScore: '1600+',
        expertise: ['Travel', 'Sport', 'Life'],
        about: 'Cupidatat sunt culpatur justo online clinic ehenderit we labore consectetur volupt elit sin item ut volupt volves. Deserunt sint consequat sed sunt id reprehenderit we labore consectetur justo elit sin item ut volupt volves Lorem supply sunt deserunt mogna nulla.'
    },
    socialProfiles: [
        {
            handle: 'TravelWithAnna',
            followers: '1.2M+',
            platform: 'youtube',
            image: 'https://via.placeholder.com/80'
        },
        {
            handle: 'QueenPlanet',
            followers: '940k+',
            platform: 'facebook',
            image: 'https://via.placeholder.com/80'
        },
        {
            handle: 'Kawaii',
            followers: '1.3M+',
            platform: 'instagram',
            image: 'https://via.placeholder.com/80'
        },
        {
            handle: 'ThanaSEY',
            followers: '850k+',
            platform: 'tiktok',
            image: 'https://via.placeholder.com/80'
        }
    ],
    services: [
        {
            id: 1,
            title: 'Product title',
            price: '$2.00',
            image: 'https://via.placeholder.com/200',
            rating: 4.5,
            reviews: 200
        },
        {
            id: 2,
            title: 'Product title',
            price: '$2.50',
            image: 'https://via.placeholder.com/200',
            rating: 4.8,
            reviews: 180
        },
        {
            id: 3,
            title: 'Product title',
            price: '$3.00',
            image: 'https://via.placeholder.com/200',
            rating: 4.2,
            reviews: 150
        },
        {
            id: 4,
            title: 'Product title',
            price: '$2.20',
            image: 'https://via.placeholder.com/200',
            rating: 4.6,
            reviews: 220
        },
        {
            id: 5,
            title: 'Product title',
            price: '$2.20',
            image: 'https://via.placeholder.com/200',
            rating: 4.4,
            reviews: 190
        }
    ],
    reviews: [
        {
            id: 1,
            name: 'Jenny Hale',
            date: '2 day ago',
            rating: 4,
            text: 'Magna sit sint cillum lo culpa mest sed mollit and more particul...',
            avatar: 'https://via.placeholder.com/40'
        },
        {
            id: 2,
            name: 'Jason Raynor',
            date: '3 day ago',
            rating: 5,
            text: 'Magna sit sint cillum lo culpa mest sed mollit and more particul...',
            avatar: 'https://via.placeholder.com/40'
        },
        {
            id: 3,
            name: 'Amy Dale',
            date: '4 day ago',
            rating: 4,
            text: 'Magna sit sint cillum lo culpa mest sed mollit and more particul...',
            avatar: 'https://via.placeholder.com/40'
        },
        {
            id: 4,
            name: 'Jason Raynor',
            date: '5 day ago',
            rating: 5,
            text: 'Magna sit sint cillum lo culpa mest sed mollit and more particul...',
            avatar: 'https://via.placeholder.com/40'
        }
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
    return `<p>${about}</p>`;
}

function renderSocialProfiles(profiles) {
    return profiles.map(profile => `
        <div class="social-card">
            <img src="${profile.image}" alt="Social Profile">
            <div class="social-info">
                <h3>${profile.handle}</h3>
                <span>${profile.followers}</span>
                <i class="fab fa-${profile.platform}"></i>
            </div>
            <button class="follow-btn">Follow</button>
        </div>
    `).join('');
}

function renderServices(services) {
    return services.map(service => `
        <div class="service-card">
            <img src="${service.image}" alt="${service.title}">
            <button class="favorite-btn">
                <i class="far fa-heart"></i>
            </button>
            <div class="service-info">
                <h3 class="service-title">${service.title}</h3>
                <div class="service-price">
                    <span>${service.price}</span>
                    <div class="review-stars">${generateStars(service.rating)}</div>
                    <span>${service.reviews} reviews</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderReviews(reviews) {
    return reviews.map(review => `
        <div class="review-card">
            <div class="reviewer">
                <img src="${review.avatar}" alt="${review.name}">
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
function renderInfluencerPage(data) {
    document.querySelector('.profile').innerHTML = renderProfileInfo(data.profileInfo);
    document.querySelector('.about').innerHTML = renderAbout(data.profileInfo.about);
    document.querySelector('.social-grid').innerHTML = renderSocialProfiles(data.socialProfiles);
    document.querySelector('.services-grid').innerHTML = renderServices(data.services);
    document.querySelector('.reviews-grid').innerHTML = renderReviews(data.reviews);
    
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    // Follow buttons
    document.querySelectorAll('.follow-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.textContent = this.textContent === 'Follow' ? 'Following' : 'Follow';
            this.classList.toggle('following');
        });
    });

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
}

// Initialize the page
window.onload = function() {
    loadComponent('sidebar-container', '../../components/admin/sidebar.html');
    renderInfluencerPage(influencerData);
}