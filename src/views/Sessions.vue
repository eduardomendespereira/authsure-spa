<template>
    <ViewBase
        title="Sessões"
        createTitle="Nova Sessão"
        :objects="sessions"
        :labels="['Id', 'Ativa']"
        :keys="['id', 'is_active']"
        :key="index"
    />
</template>


<script setup>
import ViewBase from "./ViewBase.vue";
import SessionService from "@/service/sessionService.js";
import { ref } from "vue";

const sessionService = new SessionService();
const index = ref(0);
let sessions = [];

sessionService.sessions().then((data) => {
  sessions = data;
  index.value++;
});
</script>