import router from "@/router";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { authUserStore } from "@/store/authStore/authStore";
export default function userComp() {
  const router = useRouter();
  const authApp = authUserStore();
  const userRules = {
    password: [
      (v) => !!v || "Password is mandatory",
      (v) => (v && v.length >= 6) || "Password must have at least 6 characters",
    ],
    username: [(v) => !!v || "Username is mandatory"],
  };

  async function login(payload) {
    try {
      await authApp.login(payload);
    } catch (error) {
      console.log(error);
    }
  }

  function clearUser() {
    user.email.value = "";
    user.username.value = "";
    user.password.value = "";
    user.realm_id.value = "";
  }

  return {
    userRules,
    login,
  };
}
