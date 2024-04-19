<template>
  <div id="app">
    <header>
      <h2>Matchmaker</h2>
    </header>
    <div class="container">
      <div class="button-container">
        <button class="matchroom-btn" @click="createMatchroom">Create Matchroom</button>
        <button class="matchroom-btn" @click="toggleJoinForm">Join Matchroom</button>
      </div>
      <div v-if="showJoinForm" class="join-form">
        <input v-model="joinId" placeholder="Enter Matchroom ID" class="join-input" />
        <button class="enter-btn" @click="joinMatchroom">Enter</button>
        <div v-if="joinError" class="error-message">
          {{ joinError }}
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';


const router = useRouter();
const showJoinForm = ref(false);
const joinId = ref('');
const joinError = ref(null);



const createMatchroom = async () => {
  try {
    const response = await axios.get('http://localhost:3000/matchroom', { name: 'Matchroom', capacity: '2'});
    const matchroomId = response.data.id;

    router.push(`/matchroom/${matchroomId}`);

  } catch (error) {
    console.error('Error creating matchroom:', error);
  }
};

const toggleJoinForm = () => {
  showJoinForm.value = !showJoinForm.value; 
};

const joinMatchroom = async () => {
  joinError.value = null; // Clear any previous error message

  if (!joinId.value) {
    joinError.value = 'Please enter a Matchroom ID.';
    return;
  }
  else{
    router.push(`/matchroom/`);
  }
};

</script>

<style scoped>
/* Dark Theme Styles */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #DBD8E3; /* Set text color to a light color */
  margin-top: 60px;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #2A2438; /* Dark background color */
  color: #DBD8E3; /* Light text color */
  padding: 10px;
  z-index: 1;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.matchroom-btn {
  background-color: #5C5470; /* Dark button background color */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s ease;
  text-decoration: none;
}

.matchroom-btn:hover {
  background-color: #352F44; /* Dark button hover background color */
}

.matchroom-content {
  margin-top: 20px;
}
.text-color {
  color: #DBD8E3; /* Light text color */
}

.join-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.join-form input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}


.enter-btn {
  background-color: #2196f3;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.enter-btn:hover {
  background-color: #0b7dda;
}
</style>