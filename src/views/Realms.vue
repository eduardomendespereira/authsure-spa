<template>
  <ViewBase
    title="Reinos"
    createTitle="Novo Reino"
    :objects="realms"
    :labels="['Id', 'Nome']"
    :keys="['id', 'name']"
    ModalEditTitle="Editar Reino"
    modalDeleteTitle="Deletar Reino"
    modalInfoTitle="Informações do Reino"
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

realmService.realms().then((data) => {
  realms = data;
  index.value++;
});
</script>
