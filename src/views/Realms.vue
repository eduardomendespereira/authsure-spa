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
    :page="currentPage"
    :key="index"
    @paginate="fetchRealms"
  />
</template>

<script setup>
import ViewBase from "@/components/ViewBase.vue";
import RealmService from "@/service/realmService.js";
import { ref } from "vue";

const realmService = new RealmService();
const index = ref(0);
const currentPage = ref(1);
let realms = [];

const modalEdit = {
  title: "Editar Reino",
};

const modalDelete = {
  title: "Deletar Reino",
};

const modalInfo = {
  title: "Informações do Reino",
  labels: ["Id", "Nome", "Criado em", "Atualizado em"],
  keys: ["id", "name", "created_at", "updated_at"],
};

function fetchRealms(page=1, c=10) {
  realmService.realms(page, c).then((data) => {
    realms = data;
    index.value++;
    currentPage.value = page
  });
}

fetchRealms();
</script>
