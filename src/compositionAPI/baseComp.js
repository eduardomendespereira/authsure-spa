import { ref } from "vue";

export default function baseComp() {
  const object = ref(null);
  const dialog = ref(false);
  const attTable = ref(null);

  function callEdit(e) {
    object.value = e;
    dialog.value = true;
  }
  function handleManage(e) {
    dialog.value = e;
  }
  return {
    object,
    dialog,
    attTable,
    callEdit,
    handleManage,
  };
}
