function loadComponent(componentId, componentFile) {
    fetch(componentFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById(componentId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

const complaints = [
    { user: 'Consequat', date: '02/08/2023', complaint: 'Deserunt minim incididunt cillum nostrudo voluptate excepteur.', status: 'Completed' },
    { user: 'Reprehende', date: '01/09/2023', complaint: 'Deserunt minim incididunt cillum nostrudo voluptate excepteur.', status: 'Completed' },
    { user: 'Labore', date: '15/12/2023', complaint: 'Deserunt minim incididunt cillum nostrudo voluptate excepteur.', status: 'Completed' },
    { user: 'Adipiscing', date: '12/10/2023', complaint: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', status: 'Pending' },
    { user: 'Velit', date: '05/06/2023', complaint: 'Aliquip consequat aute excepteur veniam nostrud excepteur labore.', status: 'In-Progress' }
];

function getStatusColor(status) {
    switch (status) {
        case 'Completed':
            return '#27ae60';
        case 'Pending':
            return '#c0392b';
        case 'In-Progress':
            return '#2980b9';
        default:
            return 'black'; // Fallback color
    }
}


function renderComplaints(complaints) {
    const complaintsContainer = document.querySelector('.customer-complaints tbody');
    complaintsContainer.innerHTML = ''; // Clear existing rows

    complaints.forEach(complaint => {
        const statusColor = getStatusColor(complaint.status);

        // Create a new table row for each complaint
        const row = `
            <tr>
                <td>${complaint.user}</td>
                <td>${complaint.date}</td>
                <td>${complaint.complaint}</td>
                <td style="color: ${statusColor};    font-weight: 700;">${complaint.status}</td>
            </tr>
        `;
        complaintsContainer.innerHTML += row; // Append the row to the table
    });
}

window.onload = function() {
    loadComponent('sidebar-container', '../../components/admin/sidebar.html');
    renderComplaints(complaints);
}