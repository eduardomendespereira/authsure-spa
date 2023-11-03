<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="d-flex justify-start mt-1">
        <p class="text-h4">{{ title }}</p>
      </v-col>
      <v-col cols="2" class="d-flex justify-start">
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="5" xl="5" class="d-flex flex-row">
        <v-btn size="x-large" variant="text" color="success">{{ createTitle }}</v-btn>
        <v-text-field class="ml-3" clearable clear-icon="mdi-close" variant="outlined" append-inner-icon="mdi-magnify"
          placeholder="Search" type="text">
        </v-text-field>
      </v-col>

      <v-col cols="12">
        <v-table theme="dark">
          <thead>
            <tr>
              <th class="text-left" v-for="label in labels">{{ label }}</th>
              <th class="text-center">Opções</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="object in objects" :key="object.id">
              <td v-for="key in keys">
                <template v-if="typeof object[key] === 'boolean'">
                  <v-icon v-if="object[key] === true" color="green">mdi-check</v-icon>
                  <v-icon v-else color="red">mdi-close</v-icon>
                </template>
                <template v-else>
                  {{ object[key] }}
                </template>
              </td>
              <td class="text-center">
                <v-btn color="primary" text class="mr-1" @click="handleModal('edit')"><v-icon>mdi-pencil</v-icon></v-btn>
                <v-btn color="error" text class="mx-1" @click="handleModal('delete')"><v-icon>mdi-delete</v-icon></v-btn>
                <v-btn color="info" text class="ml-1" @click="handleModal('info')"><v-icon>mdi-information-outline</v-icon></v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
    <ModalEdit :isOpen="isModalEditOpen" :info="ModalEdit" @closeModal="handleModal('edit')"/>
    <ModalDelete :isOpen="isModalDeleteOpen" :info="modalDelete" @closeModal="handleModal('delete')"/>
    <ModalInfo :isOpen="isModalInfoOpen" :info="modalInfo" @closeModal="handleModal('info')"/>
  </v-container>
</template>

<script>
import ModalEdit from "@/components/modal/ModalEdit.vue";
import ModalDelete from "@/components/modal/ModalDelete.vue";
import ModalInfo from "@/components/modal/ModalInfo.vue";

export default {
  components: {
    ModalInfo,
    ModalDelete,
    ModalEdit,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    createTitle: {
      type: String,
      required: true,
    },
    objects: {
      type: Array,
      required: true,
    },
    labels: {
      type: Array,
      required: true,
    },
    keys: {
      type: Array,
      required: true,
    },
    ModalEdit: {
      type: Object,
      required: true,
    },
    modalDelete: {
      type: Object,
      required: true,
    },
    modalInfo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isModalEditOpen: false,
      isModalDeleteOpen: false,
      isModalInfoOpen: false,
    }
  },
  methods: {
    handleModal(type) {
      switch (type) {
        case "edit":
          this.isModalEditOpen = !this.isModalEditOpen;
          break;
        case "delete":
          this.isModalDeleteOpen = !this.isModalDeleteOpen;
          break;
        case "info":
          this.isModalInfoOpen = !this.isModalInfoOpen;
          break;
      }
    },
  }
}
</script>
