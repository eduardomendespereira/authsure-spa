<template>
  <ViewBase
    title="Reinos"
    createTitle="Novo Reino"
    :objects="realms"
    :labels="['Id', 'Nome']"
    :keys="['id', 'name']"
    :key="index"
    />
</template>

<script setup>
import ViewBase from "./ViewBase.vue";
import RealmService from "@/service/realmService.js";
import { ref } from "vue";

const realmService = new RealmService();
const index = ref(0);
let realms = [];

realmService.realms().then((data) => {
  realms = data;
  index.value++;
});
</script>
