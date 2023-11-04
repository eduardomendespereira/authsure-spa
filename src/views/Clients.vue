<template>
  <ViewBase 
    title="Clientes" 
    createTitle="Novo Cliente" 
    :objects="clients" 
    :labels="['Id', 'Nome', 'Chave', 'Segredo']"
    :keys="['id', 'name', 'key', 'secret']" 
    :modalEdit="modalEdit" 
    :modalDelete="modalDelete" 
    :modalInfo="modalInfo"
    :page="currentPage"
    :key="index"
    @paginate="fetchClients"
  />
</template>


<script setup>
import ViewBase from "@/components/ViewBase.vue";
import ClientService from "@/service/clientService.js";
import { ref } from "vue";

const clientService = new ClientService();
const index = ref(0);
const currentPage = ref(1);
let clients = [];

const modalEdit = {
  title: "Editar Cliente",
};

const modalDelete = {
  title: "Deletar Cliente",
};

const modalInfo = {
  title: "Informações do Cliente",
  labels: ["Id", "Nome", "Chave", "Segredo", "Reino", "Descrição", "Criado em", "Atualizado em"],
  keys: ["id", "name", "key", "secret", "realm_id", "description", "created_at", "updated_at"],
};

function fetchClients(page=1, c=10) {
  clientService.clients(page, c).then((data) => {
    clients = data;
    index.value++;
    currentPage.value = page;
  });
}

fetchClients();
</script>