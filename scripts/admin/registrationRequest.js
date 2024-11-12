// Component loader function
function loadComponent(componentId, componentFile) {
    fetch(componentFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById(componentId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

// Registration data
const registrationData = {
    userDetails: {
        name: 'Jacob Franklin',
        role: 'Business Owner',
        username: 'jacob.franklin_35',
        profileImage: 'placeholder.jpg'
    },
    profileDescription: `Nulla consequat iure in excepteur non adipisicing et dolor sit exercitation adipisicing sunt elit ut sint ad commodo nulla. Labore Lorem ex ullamco esse consectetur est. Qui proident quis ipsum.Tempor quis ullamco fugiat elit in. Magna cupidatat tempor officia iure est deserunt commodo ex labore nostrud occaecat nulla reprehenderit commodo est exercitation. Labore ullamco ex deserunt nulla nulla dolor ea eu Lorem eu non anim elit magna.`,
    socialLinks: [
        { platform: 'Facebook', username: '@Username', url: '#' },
        { platform: 'TikTok', username: '@Username', url: '#' },
        { platform: 'YouTube', username: '@Username', url: '#' },
        { platform: 'Instagram', username: '@Username', url: '#' }
    ],
    documents: [
        { name: 'Document sample', url: '#' },
        { name: 'Document sample', url: '#' }
    ]
};

// Render functions for each section
function renderUserDetails(data) {
    return `
        <div class="user-detail"><label>Name - </label>${data.name}</div>
        <div class="user-detail"><label>Role - </label>${data.role}</div>
        <div class="user-detail"><label>Username - </label>${data.username}</div>
        <div class="user-detail">
            <label>Profile Image - </label>
            <div class="profile-image">
                <svg width="50" height="50" viewBox="0 0 24 24">
                    <path fill="#ccc" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z"/>
                </svg>
            </div>
        </div>
    `;
}

function renderProfileDescription(description) {
    return `<p class="profile-description">${description}</p>`;
}

function renderSocialLinks(links) {
    return links.map(link => `
        <a href="${link.url}" class="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
            ${link.username}
        </a>
    `).join('');
}

function renderDocuments(documents) {
    return documents.map(doc => `
        <a href="${doc.url}" class="document-link">
            <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
            </svg>
            ${doc.name}
        </a>
    `).join('');
}

// Main render function that updates all sections
function renderRegistrationPage(data) {
    // Render each section
    document.getElementById('userDetails').innerHTML = renderUserDetails(data.userDetails);
    document.getElementById('profileDescription').innerHTML = renderProfileDescription(data.profileDescription);
    document.getElementById('socialLinks').innerHTML = renderSocialLinks(data.socialLinks);
    document.getElementById('documents').innerHTML = renderDocuments(data.documents);

    // Add event listeners
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    document.querySelector('.accept-btn')?.addEventListener('click', () => {
        alert('Registration accepted!');
    });
    
    document.querySelector('.reject-btn')?.addEventListener('click', () => {
        alert('Registration rejected!');
    });
    
    document.querySelector('.logout-btn')?.addEventListener('click', () => {
        alert('Logging out...');
    });
}

// Initialize the page
window.onload = function() {
    // Load any external components
    loadComponent('sidebar-container', '../../components/admin/sidebar.html');
    
    // Render the registration page
    renderRegistrationPage(registrationData);
}