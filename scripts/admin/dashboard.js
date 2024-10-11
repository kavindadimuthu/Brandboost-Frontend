function loadComponent(componentId, componentFile) {
    fetch(componentFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById(componentId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

// function loadManyComponent(componentId, componentFile, count = 1) {
//     fetch(componentFile)
//         .then(response => response.text())
//         .then(data => {
//             const container = document.getElementById(componentId);
//             container.innerHTML = ''; // Clear existing content if needed

//             for (let i = 0; i < count; i++) {
//                 // Create a new div for each user component
//                 const userComponent = document.createElement('div');
//                 userComponent.innerHTML = data;
//                 container.appendChild(userComponent); // Append to the container
//             }
//         })
//         .catch(error => console.error('Error loading component:', error));
// }

const users = [
    { name: 'John Doe', role: 'Designer', image: '../../assets/user_logo.png' },
    { name: 'Jane Smith', role: 'Influencer', image: '../../assets/user_logo.png' },
    { name: 'Michael Brown', role: 'Business Owner', image: '../../assets/user_logo.png' },
    { name: 'Sarah Johnson', role: 'Designer', image: '../../assets/user_logo.png' },
    { name: 'David Wilson', role: 'Influencer', image: '../../assets/user_logo.png' },
    { name: 'Emily Davis', role: 'Business Owner', image: '../../assets/user_logo.png' }
];

function loadUserTiles() {
    console.log('Loading user tiles'); // Add this line for debugging

    const userContainer = document.getElementById('user2');
    userContainer.innerHTML = ''; // Clear the container

    users.forEach(user => {
        // Create user tile
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');

        // Create image section
        const userImgDiv = document.createElement('div');
        userImgDiv.classList.add('user-img');
        const img = document.createElement('img');
        img.src = user.image;
        img.alt = 'User Image';
        userImgDiv.appendChild(img);

        // Create description section
        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('description');
        const userName = document.createElement('h3');
        userName.innerText = user.name;
        const userRole = document.createElement('p');
        userRole.innerText = `Role: ${user.role}`;
        
        descriptionDiv.appendChild(userName);
        descriptionDiv.appendChild(userRole);

        // Append image and description to user tile
        userDiv.appendChild(userImgDiv);
        userDiv.appendChild(descriptionDiv);

        // Append user tile to user container
        userContainer.appendChild(userDiv);
    });
}


// Sample array of complaints
const complaints = [
    { user: 'Consequat', date: '02/08/2023', complaint: 'Deserunt minim incididunt cillum nostrudo voluptate excepteur.', status: 'Completed' },
    { user: 'Reprehende', date: '01/09/2023', complaint: 'Deserunt minim incididunt cillum nostrudo voluptate excepteur.', status: 'Completed' },
    { user: 'Labore', date: '15/12/2023', complaint: 'Deserunt minim incididunt cillum nostrudo voluptate excepteur.', status: 'Completed' },
    { user: 'Adipiscing', date: '12/10/2023', complaint: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', status: 'Pending' },
    { user: 'Velit', date: '05/06/2023', complaint: 'Aliquip consequat aute excepteur veniam nostrud excepteur labore.', status: 'In Progress' }
];


function renderComplaints(complaints) {
    const complaintsContainer = document.querySelector('.customer-complaints tbody');
    complaintsContainer.innerHTML = ''; // Clear existing rows

    complaints.forEach(complaint => {
        // Create a new table row for each complaint
        const row = `
            <tr>
                <td>${complaint.user}</td>
                <td>${complaint.date}</td>
                <td>${complaint.complaint}</td>
                <td>${complaint.status}</td>
            </tr>
        `;
        complaintsContainer.innerHTML += row; // Append the row to the table
    });
}


const orderData = [
    { month: 'January', influencer: 40, designer: 20 },
    { month: 'February', influencer: 50, designer: 25 },
    { month: 'March', influencer: 60, designer: 25 },
    { month: 'April', influencer: 35, designer: 15 },
    { month: 'May', influencer: 70, designer: 20 },
    { month: 'June', influencer: 25, designer: 15 },
    { month: 'July', influencer: 40, designer: 20 },
    { month: 'August', influencer: 50, designer: 25 },
    { month: 'September', influencer: 60, designer: 25 },
    { month: 'October', influencer: 35, designer: 15 },
    { month: 'November', influencer: 70, designer: 20 },
    { month: 'December', influencer: 25, designer: 65 }
];

function renderBarChart(data) {
    const barChartContainer = document.querySelector('.bar-chart');
    barChartContainer.innerHTML = ''; // Clear existing bars

    data.forEach(order => {
        const bar = document.createElement('div');
        bar.classList.add('bar');

        const influencerBar = document.createElement('div');
        influencerBar.classList.add('influencer-orders');
        influencerBar.style.height = `${order.influencer}%`; // Set height dynamically

        const designerBar = document.createElement('div');
        designerBar.classList.add('designer-orders');
        designerBar.style.height = `${order.designer}%`; // Set height dynamically

        const monthLabel = document.createElement('span');
        monthLabel.textContent = order.month; // Set the month label

        bar.appendChild(influencerBar);
        bar.appendChild(designerBar);
        bar.appendChild(monthLabel);

        barChartContainer.appendChild(bar);
    });
}


const statsData = {
    influencers: { count: 6452, change: "+5.39%" },
    designers: { count: 42502, change: "-0.65%" },
    businesses: { count: 56201, change: "+2.29%" }
};


function renderStats(data) {
    document.querySelector('.influencers h2').textContent = 'Influencers';
    document.querySelector('.influencers p:nth-of-type(1)').textContent = data.influencers.count;
    document.querySelector('.influencers p:nth-of-type(2)').textContent = data.influencers.change;

    document.querySelector('.designers h2').textContent = 'Designers';
    document.querySelector('.designers p:nth-of-type(1)').textContent = data.designers.count;
    document.querySelector('.designers p:nth-of-type(2)').textContent = data.designers.change;

    document.querySelector('.businesses h2').textContent = 'Businesses';
    document.querySelector('.businesses p:nth-of-type(1)').textContent = data.businesses.count;
    document.querySelector('.businesses p:nth-of-type(2)').textContent = data.businesses.change;
}



// Load users and render cards
window.onload = function() {
    loadComponent('sidebar-container', '../../components/admin/sidebar.html');
    renderStats(statsData); // Dynamically render stats with data
    renderBarChart(orderData); // Dynamically render bar chart with data
    renderComplaints(complaints); // Render complaints dynamically
    loadUserTiles();
    

};
