<template>
    <ViewBase
        title="Clientes"
        createTitle="Novo Cliente"
        :objects="clients"
        :labels="['Id', 'Nome',  'Chave', 'Segredo']"
        :keys="['id', 'name', 'key', 'secret']"
        :modalEdit="modalEdit"
        :modalDelete="modalDelete"
        :modalInfo="modalInfo"
        :key="index"
    />
</template>


<script setup>
import ViewBase from "@/components/ViewBase.vue";
import ClientService from "@/service/clientService.js";
import { ref } from "vue";

const clientService = new ClientService();
const index = ref(0);
let clients = [];

const modalEdit = {
  title: "Editar Cliente",
};

const modalDelete = {
  title: "Deletar Cliente",
};

const modalInfo = {
  title: "Informações do Cliente",
  labels: ["Id", "Nome"],
  keys: ["id", "name"],
};


clientService.clients().then((data) => {
  clients = data;
  index.value++;
});
</script>