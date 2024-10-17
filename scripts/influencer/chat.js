document.addEventListener('DOMContentLoaded', function() {
    const chat = document.getElementById('chat');
    
    fetch('../../components/influencer/chat.html')
        .then(response => response.text())
        .then(html => {
            chat.innerHTML = html;
            // Add any additional chat functionality here
        })
        .catch(error => console.error('Error loading chat:', error));
});