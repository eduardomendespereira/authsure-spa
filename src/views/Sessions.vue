<template>
    <ViewBase
        title="Sessões"
        createTitle="Nova Sessão"
        :objects="sessions"
        :labels="['Id', 'Ativa']"
        :keys="['id', 'is_active']"
        :modalEdit="modalEdit"
        :modalDelete="modalDelete"
        :modalInfo="modalInfo"
        :key="index"
    />
</template>


<script setup>
import ViewBase from "@/components/ViewBase.vue";
import SessionService from "@/service/sessionService.js";
import { ref } from "vue";

const sessionService = new SessionService();
const index = ref(0);
let sessions = [];

const modalEdit = {
  title: "Editar Sessão",
};

const modalDelete = {
  title: "Deletar Sessão",
};

const modalInfo = {
  title: "Informações da Sessão",
  labels: ["Id", "Ativa"],
  keys: ["id", "is_active"],
};

sessionService.sessions().then((data) => {
  sessions = data;
  index.value++;
});
</script>