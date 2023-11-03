<template>
  <ViewBase
    title="Usuários"
    :objects="users"
    :labels="['Id', 'Nome de usuário', 'Email']"
    :keys="['id', 'username', 'email']"
    :key="index"
  />
</template>

<script setup>
import ViewBase from "./ViewBase.vue";
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
