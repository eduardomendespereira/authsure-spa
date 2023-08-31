<template>
  <v-app-bar
  color="gray"
  absolute
>
    <v-app-bar-nav-icon variant="text" 
    @click.stop="drawer = !drawer">
    </v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-row>
      <v-btn  variant="text" size="large" 
        icon="mdi-help-circle-outline"></v-btn>
      <v-btn class="ml-n3" variant="text" size="large" 
      icon="mdi-account-circle-outline"></v-btn>
      <p class="text-body">Admin</p>
      <v-btn variant="text" size="large" 
        icon="mdi-exit-to-app"
        color="red">
      </v-btn>
    </v-row> 
  </v-app-bar>

  
</template>

<script setup>
import { ref } from 'vue';

  

  const menuOptions = ref([
      
      {
        title: "Sair",
        icon: "mdi-exit"
      }
      
  ])

</script>
