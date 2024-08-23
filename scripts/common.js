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
loadComponent('navbar', '../components/navbar.html');
loadComponent('footer', '../components/footer.html');