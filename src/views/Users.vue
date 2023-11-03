<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="d-flex justify-start mt-1">
        <p class="text-h4">Usuários</p>
      </v-col>
      <v-col cols="2" class="d-flex justify-start">
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="5" xl="5" class="d-flex flex-row">
        <v-btn size="x-large" variant="text" color="success"> Novo Usuário </v-btn>
        <v-text-field
          class="ml-3"
          clearable
          clear-icon="mdi-close"
          variant="outlined"
          append-inner-icon="mdi-magnify"
          placeholder="Search"
          type="text"
        >
        </v-text-field>
      </v-col>

      <v-col cols="12">
        <v-table theme="dark" :key="index">
          <thead>
            <tr>
              <th class="text-left">Id</th>
              <th>Nome de usuário</th>
              <th class="text-left">Email</th>
              <th class="text-center">Opções</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>
                {{ user.id }}
              </td>
              <td>
                {{ user.username }}
              </td>
              <td>
                {{ user.email }}
              </td>
              <td class="text-center">
                <v-btn color="primary" text class="mr-1"><v-icon>mdi-pencil</v-icon></v-btn>
                <v-btn color="error" text class="ml-1"><v-icon>mdi-delete</v-icon></v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
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
