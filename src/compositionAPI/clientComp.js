import { ref } from "vue";
import RealmService from "@/service/realmService.js";
import ClientService from "@/service/clientService";
export default function clientComp() {
  const realmService = new RealmService();
  const clientService = new ClientService();
  const realms = ref([]);

  const client = ref({
    id: null,
    name: null,
    description: null,
    key: null,
    secret: null,
    realm_id: null,
  });

  const realmList = ref(null);
  const currentPg = ref(1);
  const lastPg = ref(0);
  function sendPayload(update = false) {
    client.value.realm_id = client.value.realm_id
      ? client.value.realm_id.id
      : null;
    console.log(update);
    if (update) clientService.updateClient(client.value);
    else clientService.insert(client.value);
  }
  function fetchRealms(page = 1, c = 40) {
    realmService.realms(page, c).then((data) => {
      realms.value = data.realms;
      currentPg.value = page;
      lastPg.value = data.last_page;
    });
  }
  async function getClient(id) {
    try {
      const { data } = await clientService.getClient(id);
      client.value = { ...data };
      client.value.realm_id = realms.value.find(
        (i) => i.id == client.value.realm_id
      );
    } catch (error) {
      console.error(error);
    }
  }

  return {
    client,
    sendPayload,
    fetchRealms,
    getClient,
    realmList,
    realms,
    currentPg,
    lastPg,
  };
}
