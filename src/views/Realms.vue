<template>
  <div :key="attTable">
    <ViewBase
      title="Reinos"
      createTitle="Novo Reino"
      :objects="realms"
      :labels="['Id', 'Nome']"
      :keys="['id', 'name']"
      :modalEdit="modalEdit"
      :modalDelete="modalDelete"
      :modalInfo="modalInfo"
      :page="currentPage"
      :lastPage="lastPage"
      @openManage="handleManage"
      :key="index"
      @edit="callEdit"
      @delete="callDelete"
      @paginate="fetchRealms"
    />
  </div>

  <ManageRealm
    v-if="dialog"
    :dialog="dialog"
    :object="object"
    @close="closeDialog"
  ></ManageRealm>
</template>

<script setup>
import ViewBase from "@/components/ViewBase.vue";
import RealmService from "@/service/realmService.js";
import ManageRealm from "@/components/modal/manage/ManageRealm.vue";

import { ref } from "vue";

const realmService = new RealmService();
const index = ref(0);
const currentPage = ref(1);
const object = ref(null);
const dialog = ref(false);
const attTable = ref(1);
const lastPage = ref(1);
let realms = [];

const modalEdit = {
  title: "Editar Reino",
};

const modalDelete = {
  title: "Deletar Reino",
};

const modalInfo = {
  title: "Informações do Reino",
  labels: ["Id", "Nome", "Criado em", "Atualizado em"],
  keys: ["id", "name", "created_at", "updated_at"],
};

function fetchRealms(page = 1, c = 10) {
  realmService.realms(page, c).then((data) => {
    realms = data.realms;
    currentPage.value = page;
    lastPage.value = data.last_page;
    index.value++;
  });
}

function callEdit(e) {
  object.value = e;
  dialog.value = true;
}
function closeDialog(e) {
  dialog.value = false;
  object.value = null;
  fetchRealms();
  attTable.value = attTable.value == 1 ? 2 : 1;
}
function handleManage(e) {
  dialog.value = e;
}

function callDelete(e) {
  console.log(e);
  try {
    if (e) {
      realmService.delete(e);
      fetchRealms();
      attTable.value = attTable.value == 1 ? 2 : 1;
    }
  } catch (error) {
    console.error(error);
  }
}

fetchRealms();
</script>
