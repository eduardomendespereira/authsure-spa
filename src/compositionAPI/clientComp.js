import { ref } from "vue";
export default function clientComp() {
  const client = ref({
    id: null,
    name: null,
    description: null,
    key: null,
    secret: null,
    realm_id: null,
  });


  const realmList = ref(null)

  function sendPayload() {
    client.value.realm_id = client.value.realm_id
      ? client.value.realm_id.id
      : null;
    console.log(client.value);
  }

  return {
    client,
    sendPayload,
    realmList
  };
}
