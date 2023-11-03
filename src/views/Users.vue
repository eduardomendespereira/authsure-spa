<template>
  <ViewBase
    title="Usuários"
    createTitle="Novo Usuário"
    :objects="users"
    :labels="['Id', 'Nome de usuário', 'Email']"
    :keys="['id', 'username', 'email']"
    ModalEditTitle="Editar Usuário"
    modalDeleteTitle="Deletar Usuário"
    modalInfoTitle="Informações do Usuário"
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

userService.users().then((data) => {
  users = data;
  index.value++;
});
</script>
