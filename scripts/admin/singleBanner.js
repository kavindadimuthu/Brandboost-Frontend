// Function to load external components into specific containers
function loadComponent(componentId, componentFile) {
    fetch(componentFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById(componentId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

window.onload = function() {
    loadComponent('sidebar-container', '../../components/admin/sidebar.html');
    // renderInfluencerPage(influencerData);
}