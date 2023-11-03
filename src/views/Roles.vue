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
    :key="index"
  />
</template>

<script setup>
import ViewBase from "@/components/ViewBase.vue";
import Roleservice from "@/service/roleService.js";
import { ref } from "vue";

const roleservice = new Roleservice();
const index = ref(0);
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

roleservice.roles().then((data) => {
  roles = data;
  index.value++;
});
</script>
