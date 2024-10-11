// Function to load a component
function loadComponent(componentId, componentFile) {
    fetch(componentFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById(componentId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

// Load the navbar and footer components
// loadComponent('navbar', '../components/navbar.html');
// loadComponent('footer', '../components/footer.html');

//for admin dashboard sidebar
// loadComponent('sidebar', '../components/admin/sidebar.html');
// loadComponent('barchart', '../components/admin/barchart.html');

//for admin view user page
function loadManyComponent(componentId, componentFile, count = 1) {
    fetch(componentFile)
        .then(response => response.text())
        .then(data => {
            const container = document.getElementById(componentId);
            container.innerHTML = ''; // Clear existing content if needed

            for (let i = 0; i < count; i++) {
                // Create a new div for each user component
                const userComponent = document.createElement('div');
                userComponent.innerHTML = data;
                container.appendChild(userComponent); // Append to the container
            }
        })
        .catch(error => console.error('Error loading component:', error));
}

// Call loadComponent for rendering multiple user components
// loadManyComponent('user', '../components/admin/user.html', 5); // Render 5 user components



window.onload = function() {
    loadComponent('navbar', '../components/navbar.html');
    loadComponent('footer', '../components/footer.html');
    loadComponent('sidebar-container', '../../components/admin/sidebar.html');
    loadComponent('barchart', '../../components/admin/barchart.html');
    loadManyComponent('user', '../../components/admin/usercard.html', 5);
};
