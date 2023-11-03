<template>
    <ViewBase
        title="Clientes"
        createTitle="Novo Cliente"
        :objects="clients"
        :labels="['Id', 'Nome',  'Chave', 'Segredo']"
        :keys="['id', 'name', 'key', 'secret']"
        ModalEditTitle="Editar Cliente"
        modalDeleteTitle="Deletar Cliente"
        modalInfoTitle="Informações do Cliente"
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

clientService.clients().then((data) => {
  clients = data;
  index.value++;
});
</script>