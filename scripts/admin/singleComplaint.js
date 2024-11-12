// Component loader function
function loadComponent(componentId, componentFile) {
    fetch(componentFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById(componentId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

// Complaint data
const complaintData = {
    complainerDetails: {
        name: 'Jacob Franklin',
        role: 'Business Owner',
        username: 'jacob_franklin_35',
        userId: 'BQ2400965'
    },
    description: `Nulla consequat iure in excepteur non adipisicing et dolor sit exercitation adipisicing sunt elit ut sint ad commodo nulla. Labore Lorem ex ullamco esse consectetur est. Qui proident quis enim Lorem quis labore fugiat elit ut. Magna cupidatat tempor officia iure est deserunt commodo ex labore nostrud occaecat iure reprehenderit commodo est exercitation. Labore ullamco ex deserunt nulla nulla dolor ea eu Lorem eu non anim elit magna proident nisi amet irure sint enim reprehenderit non adipisicing. Voluptate tempor aute tempor et deserunt cupidatat sint quis veli.`,
    proofImages: [
        'placeholder1.jpg',
        'placeholder2.jpg',
        'placeholder3.jpg'
    ],
    proofDocuments: [
        { name: 'Document sample', url: '#' },
        { name: 'Document sample', url: '#' }
    ]
};

// Render functions for each section
function renderComplainerDetails(data) {
    return `
        <div class="complainer-detail">
            <label>Name - </label>
            <span>${data.name}</span>
        </div>
        <div class="complainer-detail">
            <label>Role - </label>
            <span>${data.role}</span>
        </div>
        <div class="complainer-detail">
            <label>Username - </label>
            <span>${data.username}</span>
        </div>
        <div class="complainer-detail">
            <label>UserID - </label>
            <span>${data.userId}</span>
        </div>
    `;
}

function renderDescription(description) {
    return `<p class="description">${description}</p>`;
}

function renderProofImages(images) {
    return images.map(image => `
        <div class="proof-image">
            <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z"/>
            </svg>
        </div>
    `).join('');
}

function renderProofDocuments(documents) {
    return documents.map(doc => `
        <a href="${doc.url}" class="document-link">
            <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
            </svg>
            ${doc.name}
        </a>
    `).join('');
}

// Main render function
function renderComplaintPage(data) {
    document.getElementById('complainerDetails').innerHTML = renderComplainerDetails(data.complainerDetails);
    document.getElementById('complaintDescription').innerHTML = renderDescription(data.description);
    document.getElementById('proofImages').innerHTML = renderProofImages(data.proofImages);
    document.getElementById('proofDocuments').innerHTML = renderProofDocuments(data.proofDocuments);
    
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    document.querySelector('.resolve-btn')?.addEventListener('click', () => {
        alert('Complaint marked as resolved!');
    });
    
    document.querySelector('.reject-btn')?.addEventListener('click', () => {
        alert('Complaint rejected!');
    });
    
    document.querySelector('.logout-btn')?.addEventListener('click', () => {
        alert('Logging out...');
    });

    document.querySelector('.dots-btn')?.addEventListener('click', () => {
        alert('Menu options');
    });
}

// Initialize the page
window.onload = function() {
    loadComponent('sidebar-container', '../../components/admin/sidebar.html');
    renderComplaintPage(complaintData);
}