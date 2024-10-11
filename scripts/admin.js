function loadComponent(componentId, componentFile) {
    fetch(componentFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById(componentId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

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



loadComponent('sidebar-container', '../../components/admin/sidebar.html');
loadComponent('barchart', '../../components/admin/barchart.html');
loadManyComponent('user', '../../components/admin/usercard.html', 5);