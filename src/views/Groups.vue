<template>
  <ViewBase
    title="Grupos"
    createTitle="Novo Grupo"
    :objects="groups"
    :labels="['Id', 'Nome']"
    :keys="['id', 'name']"
    :modalEdit="modalEdit"
    :modalDelete="modalDelete"
    :modalInfo="modalInfo"
    :page="currentPage"
    :lastPage="lastPage"
    :key="index"
    @paginate="fetchGroups"
  />
</template>

<script setup>
import ViewBase from "@/components/ViewBase.vue";
import GroupService from "@/service/groupService.js";
import { ref } from "vue";

const groupService = new GroupService();
const index = ref(0);
const currentPage = ref(1);
const lastPage = ref(1);
let groups = [];

const modalEdit = {
  title: "Editar Grupo",
};

const modalDelete = {
  title: "Deletar Grupo",
};

const modalInfo = {
  title: "Informações do Grupo",
  labels: ["Id", "Nome", "Criado em", "Atualizado em"],
  keys: ["id", "name", "created_at", "updated_at"],
};

function fetchGroups(page=1, c=10) {
  groupService.groups(page, c).then((data) => {
    groups = data.groups;
    currentPage.value = page
    lastPage.value = data.last_page;
    index.value++;
  });
}

fetchGroups();
</script>
