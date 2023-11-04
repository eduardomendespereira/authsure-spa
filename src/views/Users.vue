<template>
  <ViewBase
    title="Usuários"
    createTitle="Novo Usuário"
    :objects="users"
    :labels="['Id', 'Nome de usuário', 'Email']"
    :keys="['id', 'username', 'email']"
    :modalEdit="modalEdit"
    :modalDelete="modalDelete"
    :modalInfo="modalInfo"
    :page="currentPage"
    :key="index"
    @paginate="fetchUsers"
  />
</template>

<script setup>
import ViewBase from "@/components/ViewBase.vue";
import UserService from "@/service/userService.js";
import { ref } from "vue";

const userService = new UserService();
const index = ref(0);
const currentPage = ref(1);
let users = [];

const modalEdit = {
  title: "Editar Usuário",
};

const modalDelete = {
  title: "Deletar Usuário",
};

const modalInfo = {
  title: "Informações do Usuário",
  labels: ["Id", "Nome de usuário", "Email", "Reino", "Criado em", "Atualizado em"],
  keys: ["id", "username", "email", "realm_id", "created_at", "updated_at"],
};

function fetchUsers(page=1, c=10) {
  userService.users(page, c).then((data) => {
    users = data;
    index.value++;
    currentPage.value = page
  });
}

fetchUsers();
</script>
