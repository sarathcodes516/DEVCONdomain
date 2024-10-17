// Predefined problem statements
const problemStatements = [
    "Build a chatbot to assist with campus queries.",
    "Develop a recommendation system for e-commerce websites.",
    "Create a disaster response software for analyzing social media posts.",
    "Design a web application to track personal expenses.",
    "Implement a machine learning model to predict house prices.",
    "Develop a real-time weather forecasting system using APIs."
];

// Mapping of team IDs to assigned domains
const teamDomains = {
    "1": "D3",
    "2": "D1",
    "3": "D2",
    "4": "D5",
    "5": "D4",
    "6": "D6",
    "7": "D2",
    "8": "D1",
    "9": "D4",
    "10": "D3",
    "11": "D5",
    "12": "D6",
    "13": "D1",
    "14": "D4",
    "15": "D2",
    "16": "D5",
    "17": "D3",
    "18": "D6",
    "19": "D1",
    "20": "D2"
  };
  

// Function to get the assigned domain for a given team ID
function getAssignedDomain(teamId) {
    return teamDomains[teamId] || "Domain not found";
}

// Handle form submission
document.getElementById('teamForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting in the traditional way
    const teamId = document.getElementById('teamId').value.trim();
    
    if (teamId !== "") {
        // Get the assigned domain
        const assignedDomain = getAssignedDomain(teamId);
        
        // Display the assigned domain
        document.getElementById('statement').textContent = assignedDomain;
        document.getElementById('problemStatement').classList.remove('hidden');
    } else {
        alert('Please enter a valid Team ID');
    }
});

// Bubble generation
function generateBubbles() {
    const bubbleContainer = document.querySelector('.background');
    const colors = ['green', 'blue', 'yellow', 'red'];

    for (let i = 0; i < 20; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble', colors[Math.floor(Math.random() * colors.length)]);

        const size = Math.random() * 60 + 20 + 'px';
        bubble.style.width = size;
        bubble.style.height = size;
        bubble.style.left = Math.random() * 100 + 'vw';
        bubble.style.animationDuration = Math.random() * 10 + 5 + 's';

        bubbleContainer.appendChild(bubble);
    }
}

// Call the bubble generation on load
window.onload = generateBubbles;


