<template>
  <ViewBase
    title="Cargos"
    createTitle="Novo Cargo"
    :objects="roles"
    :labels="['Id', 'Nome']"
    :keys="['id', 'name']"
    ModalEditTitle="Editar Cargo"
    modalDeleteTitle="Deletar Cargo"
    modalInfoTitle="Informações do Cargo"
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

roleservice.roles().then((data) => {
  roles = data;
  index.value++;
});
</script>
