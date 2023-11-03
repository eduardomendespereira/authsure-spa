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
    :key="index"
  />
</template>

<script setup>
import ViewBase from "@/components/ViewBase.vue";
import GroupService from "@/service/groupService.js";
import { ref } from "vue";

const groupService = new GroupService();
const index = ref(0);
let groups = [];

const modalEdit = {
  title: "Editar Grupo",
};

const modalDelete = {
  title: "Deletar Grupo",
};

const modalInfo = {
  title: "Informações do Grupo",
  labels: ["Id", "Nome"],
  keys: ["id", "name"],
};

groupService.groups().then((data) => {
  groups = data;
  index.value++;
});
</script>
