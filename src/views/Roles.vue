<template>
  <div :key="attTable">
    <ViewBase
      title="Cargos"
      createTitle="Novo Cargo"
      :objects="roles"
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
      @paginate="fetchRoles"
    />
  </div>

  <ManageRoles
    v-if="dialog"
    :dialog="dialog"
    :object="object"
    @close="closeDialog"
  ></ManageRoles>
</template>

<script setup>
import ViewBase from "@/components/ViewBase.vue";
import ManageRoles from "@/components/modal/manage/ManageRoles.vue";
import Roleservice from "@/service/roleService.js";
import { ref, watch } from "vue";

const roleservice = new Roleservice();
const index = ref(0);
const currentPage = ref(1);
const lastPage = ref(1);
const object = ref(null);
const dialog = ref(false);
const attTable = ref(null);
let roles = [];

watch(roles, () => {
  if (attTable != null) {
    console.log("WATCHH THISSSSSSSSSSSS BITCH")
    attTable.value = attTable.value == 1 ? 2 : 1;
  }
});

const modalEdit = {
  title: "Editar Cargo",
};

const modalDelete = {
  title: "Deletar Cargo",
};

function callEdit(e) {
  object.value = e;
  dialog.value = true;
}
function closeDialog(e) {
  dialog.value = false;
  object.value = null;
  fetchRoles();
}
function handleManage(e) {
  dialog.value = e;
}

function callDelete(e) {
  console.log(e);
  try {
    if (e) {
      roleservice.delete(e);
      fetchRoles();
    }
  } catch (error) {
    console.error(error);
  }
}

const modalInfo = {
  title: "Informações do Cargo",
  labels: ["Id", "Nome", "Criado em", "Atualizado em"],
  keys: ["id", "name", "created_at", "updated_at"],
};

function fetchRoles(page = 1, c = 10) {
  console.log('Fetch')
  roleservice.roles(page, c).then((data) => {
    roles = data.roles;
    currentPage.value = page;
    lastPage.value = data.last_page;
    index.value++;
  });
  attTable.value = 1;
}

fetchRoles();
</script>
