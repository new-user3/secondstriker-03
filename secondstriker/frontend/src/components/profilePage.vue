<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" offset-md="3">
          <h1>Profile</h1>
          <!-- Add your profile content here -->
          <v-card>
            <v-card-title>{{ user.name }}</v-card-title>
            <v-card-text>
              <p>Email: {{ user.email }}</p>
              <p>Rank: {{ user.rank }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary">Edit Profile</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const user = ref({
    name: 'John Doe',
    email: 'john.doe@example.com',
    rank: 'Gold',
  });
  </script>