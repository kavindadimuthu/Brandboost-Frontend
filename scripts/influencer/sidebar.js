document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    
    fetch('../../components/influencer/sidebar.html')
        .then(response => response.text())
        .then(html => {
            sidebar.innerHTML = html;
            // Add any additional sidebar functionality here
        })
        .catch(error => console.error('Error loading sidebar:', error));
});