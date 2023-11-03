<template>
  <ViewBase
    title="Reinos"
    createTitle="Novo Reino"
    :objects="realms"
    :labels="['Id', 'Nome']"
    :keys="['id', 'name']"
    :modalEdit="modalEdit"
    :modalDelete="modalDelete"
    :modalInfo="modalInfo"
    :key="index"
    />
</template>

<script setup>
import ViewBase from "@/components/ViewBase.vue";
import RealmService from "@/service/realmService.js";
import { ref } from "vue";

const realmService = new RealmService();
const index = ref(0);
let realms = [];

const modalEdit = {
  title: "Editar Reino",
};

const modalDelete = {
  title: "Deletar Reino",
};

const modalInfo = {
  title: "Informações do Reino",
  labels: ["Id", "Nome"],
  keys: ["id", "name"],
};

realmService.realms().then((data) => {
  realms = data;
  index.value++;
});
</script>
