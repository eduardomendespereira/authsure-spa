<template>
  <ViewBase
    title="Grupos"
    createTitle="Novo Grupo"
    :objects="groups"
    :labels="['Id', 'Nome']"
    :keys="['id', 'name']"
    :key="index"
  />
</template>

<script setup>
import ViewBase from "./ViewBase.vue";
import GroupService from "@/service/groupService.js";
import { ref } from "vue";

const groupService = new GroupService();
const index = ref(0);
let groups = [];

groupService.groups().then((data) => {
  groups = data;
  index.value++;
});
</script>
