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
    :key="index"
  />
</template>

<script setup>
import ViewBase from "@/components/ViewBase.vue";
import UserService from "@/service/userService.js";
import { ref } from "vue";

const userService = new UserService();
const index = ref(0);
let users = [];

const modalEdit = {
  title: "Editar Usuário",
};

const modalDelete = {
  title: "Deletar Usuário",
};

const modalInfo = {
  title: "Informações do Usuário",
  labels: ["Id", "Nome de usuário", "Email"],
  keys: ["id", "username", "email"],
};

userService.users().then((data) => {
  users = data;
  index.value++;
});
</script>
