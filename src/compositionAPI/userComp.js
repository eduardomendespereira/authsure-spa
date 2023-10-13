import router from "@/router";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { authUserStore } from "@/store/authStore/authStore";
export default function userComp() {
  const userouter = useRouter();
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
      const auth = await authApp.login(payload);
      if (auth) userouter.push({ name: "Home" });
    } catch (error) {
      console.log(error);
    }
  }

  return {
    userRules,
    login,
  };
}
