const axios = require('axios'); 

function generateMatchroomId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

async function createMatchroom(req, res) {
  try {
    // Simulate some logic for creating a matchroom on a server (replace with your actual logic)
    const matchroomData = { name: 'New Matchroom' }; // Example data

    // Send a mock request to an external service (replace with your actual API call)
    const response = await axios.post('https://example.com/api/matchrooms', matchroomData);

    const id = response.data.id; // Assuming the ID is returned in the response
    res.json({ id });
  } catch (error) {
    console.error('Error creating matchroom:', error);
    res.status(500).send('Internal Server Error'); // Handle errors appropriately
  }
}

module.exports = { createMatchroom };
``