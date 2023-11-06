<template>
  <v-main>
    <router-view />
    <v-snackbar
      v-model="appStore.dialogBaseInfo.show"
      :color="appStore.dialogBaseInfo.color"
      :timeout="appStore.dialogBaseInfo.timeout"
    >
      {{ appStore.dialogBaseInfo.message }}
      <template v-slot:actions>
        <v-btn
          color="red"
          variant="text"
          @click="appStore.dialogBaseInfo.show = false"
        >
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </v-main>
</template>

<script setup>
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
</script>
