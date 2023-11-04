<template>
  <ViewBase
    title="Cargos"
    createTitle="Novo Cargo"
    :objects="roles"
    :labels="['Id', 'Nome']"
    :keys="['id', 'name']"
    :modalEdit="modalEdit"
    :modalDelete="modalDelete"
    :modalInfo="modalInfo"
    :page="currentPage"
    :lastPage="lastPage"
    :key="index"
    @paginate="fetchRoles"
  />
</template>

<script setup>
import ViewBase from "@/components/ViewBase.vue";
import Roleservice from "@/service/roleService.js";
import { ref } from "vue";

const roleservice = new Roleservice();
const index = ref(0);
const currentPage = ref(1);
const lastPage = ref(1);
let roles = [];

const modalEdit = {
  title: "Editar Cargo",
};

const modalDelete = {
  title: "Deletar Cargo",
};

const modalInfo = {
  title: "Informações do Cargo",
  labels: ["Id", "Nome", "Criado em", "Atualizado em"],
  keys: ["id", "name", "created_at", "updated_at"],
};

function fetchRoles(page=1, c=10) {
  roleservice.roles(page, c).then((data) => {
    roles = data.roles;
    currentPage.value = page;
    lastPage.value = data.last_page;
    index.value++;
  });
}

fetchRoles();
</script>
