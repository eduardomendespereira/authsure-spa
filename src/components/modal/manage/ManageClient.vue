<template>
  <ModalBase
    :isOpen="dialog"
    :title="'Registro de Clientes'"
    :needsClose="false"
  >
    <v-card>
      <v-card-title>
        <span class="text-h6"> Registro de Clientes </span>
      </v-card-title>
      <v-card-subtitle>
        <span>Realize o registro do cliente.</span>
      </v-card-subtitle>
      <v-card-text>
        <v-form ref="form">
          <v-row>
            <v-col cols="6">
              <v-text-field
                :placeholder="'Nome'"
                :label="'Nome'"
                required
                variant="underlined"
                v-model="client.name"
              >
              </v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                :placeholder="'Descrição'"
                :label="'Descrição'"
                variant="underlined"
                required
                v-model="client.description"
              >
              </v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                :placeholder="'Key'"
                :label="'Key'"
                variant="underlined"
                required
                v-model="client.key"
              >
              </v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                :placeholder="'Nome'"
                :label="'Nome'"
                variant="underlined"
                required
                v-model="client.secret"
              >
              </v-text-field>
            </v-col>
            <v-col cols="6">
              <v-select
                item-title="name"
                item-value="id"
                :label="'Id reino'"
                :items="realms"
                variant="underlined"
              >
              </v-select>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-row>
          <v-col cols="12" class="d-flex justify-end">
            <v-btn variant="text"> Salvar </v-btn>
            <v-btn variant="text" @click="closeDialog"> Fechar </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </ModalBase>
</template>

<script setup>
import ModalBase from "@/components/modal/ModalBase.vue";
import { ref, onMounted } from "vue";
import clientComp from "@/compositionAPI/clientComp";
import RealmService from "@/service/realmService.js";

const { client, sendPayload, realmList } = clientComp();
const form = ref(null);
const props = defineProps({
  dialog: Boolean,
  id: Number,
});
const realms = ref([]);
const realmService = new RealmService();
const emit = defineEmits("close");

onMounted(() => {
  try {
    fetchRealms();
    if (!props.id) {
      console.log(props.id);
      console.log("id não identificado");
    }
  } catch (error) {
    console.error(error);
  }
});

function closeDialog() {
  emit("close", false);
}

function fetchRealms(page = 1, c = 10) {
  realmService.realms(page, c).then((data) => {
    realms.value = data.realms;
  });
}
</script>

<style lang="scss" scoped></style>
