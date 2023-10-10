import AuthService from "@/service/auth/authService";
import { defineStore } from "pinia";

export const authUserStore = defineStore('auth', {
  state: () => {},
  actions: {
    async login(payload) {
      const data = await AuthService.login(payload);
      console.log(data);
      localStorage.setItem("token", data);
    },
  },
});
