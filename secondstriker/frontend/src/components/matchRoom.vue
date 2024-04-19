<template>
    <div class="matchroom">
      <h2>Matchroom Id: {{ $route.params.matchroomId }}</h2>
  
      <!-- Div for stake input and MPESA number -->
      <div class="form-container">
        <div class="form-group">
          <label for="stake">Enter Stake Amount:</label>
          <input type="number" id="stake" v-model="stakeAmount" placeholder="Enter stake amount" />
        </div>
        <div class="form-group">
          <label for="mpesa">Enter MPESA Number:</label>
          <input type="text" id="mpesa" v-model="mpesaNumber" placeholder="Enter MPESA number" />
        </div>
        <button class="proceed-btn" @click="proceedToPay">Proceed to Pay</button>
      </div>
  
      <!-- Div for displaying total stake and winner stake -->
      <div class="result-container">
        <div class="result-item">
          <p>Total Stake: <span class="text-color">{{ totalStake }}</span></p>
        </div>
        <div class="result-item">
          <p>Winner Stake: <span class="text-color">{{ winnerStake }}</span></p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  
  let stakeAmount = null;
  let mpesaNumber = '';
  let totalStake = 0; // Initialize total stake
  let winnerStake = 0; // Initialize winner stake
  
  
  // Calculate the winner based on entered goals
  const getWinner = () => {
    if (team1Goals === null || team2Goals === null) return null;
    return team1Goals > team2Goals ? 'Team 1' : (team1Goals < team2Goals ? 'Team 2' : 'Draw');
  };
  
  // Proceed to pay function
  const proceedToPay = () => {
    // Calculate total stake (for demonstration purpose)
    totalStake = stakeAmount * 2; // Assuming stake is doubled for both teams
    // Calculate winner stake (for demonstration purpose)
    winnerStake = totalStake / 2; // Assuming winner takes half of the total stake
    // Log MPESA number and total stake
    console.log('MPESA Number:', mpesaNumber);
    console.log('Total Stake:', totalStake);
  };
  </script>
  
  <style scoped>
  .matchroom {
    margin-top: 20px;
    padding: 20px;
    /*border: 1px solid #ccc;*/
    border-radius: 5px;
  }
  
  .form-container {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .result-container {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
  }
  
  .result-item {
    margin-bottom: 10px;
  }
  
  .proceed-btn {
    background-color: #2196f3;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .proceed-btn:hover {
    background-color: #0b7dda;
  }
  
  .match-btn {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .text-color {
    color: #DBD8E3; /* Light text color */
  }
  </style>
