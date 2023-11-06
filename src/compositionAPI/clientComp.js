import { ref } from "vue";
import RealmService from "@/service/realmService.js";
export default function clientComp() {
  const realmService = new RealmService();
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
  function sendPayload() {
    client.value.realm_id = client.value.realm_id
      ? client.value.realm_id.id
      : null;
    realmService.insert(client.value);
  }
  function fetchRealms(page = 1, c = 40) {
    realmService.realms(page, c).then((data) => {
      realms.value = data.realms;
      currentPg.value = page;
      lastPg.value = data.last_page;
    });
  }

  return {
    client,
    sendPayload,
    fetchRealms,
    realmList,
    realms,
    currentPg,
    lastPg
  };
}
