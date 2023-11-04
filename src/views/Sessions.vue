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
        :page="currentPage"
        :lastPage="lastPage"
        :key="index"
        @paginate="fetchSessions"
    />
</template>


<script setup>
import ViewBase from "@/components/ViewBase.vue";
import SessionService from "@/service/sessionService.js";
import { ref } from "vue";

const sessionService = new SessionService();
const index = ref(0);
const currentPage = ref(1);
const lastPage = ref(1);
let sessions = [];

const modalEdit = {
  title: "Editar Sessão",
};

const modalDelete = {
  title: "Deletar Sessão",
};

const modalInfo = {
  title: "Informações da Sessão",
  labels: ["Id", "Ativa", "Usuário", "Token", "Criada em", "Atualizada em"],
  keys: ["id", "is_active", "user_id", "token", "created_at", "updated_at"],
};

function fetchSessions(page=1, c=10) {
  sessionService.sessions(page, c).then((data) => {
    sessions = data.sessions;
    currentPage.value = page
    lastPage.value = data.last_page;
    index.value++;
  });
}

fetchSessions();
</script>