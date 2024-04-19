<template>
  <div>
    <button @click="createMatchroom">Create Matchroom</button>
    <button @click="joinMatchroom">Join Matchroom</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

const createMatchroom = async () => {
  try {
    const response = await axios.post('/api/matchrooms');
    const data = await response.json();
    router.push(`/matchrooms/${data.id}`);
  } catch (error) {
    console.error('Error creating matchroom:', error);
    // Handle errors appropriately (e.g., display an error message)
  }
};

const joinMatchroom = () => {
  // Handle join matchroom functionality (implement logic here)
  alert('Join Matchroom functionality coming soon!');
};
</script>
