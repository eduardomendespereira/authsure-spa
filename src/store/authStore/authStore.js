import AuthService from "@/service/authService";
import { defineStore } from "pinia";

const authUser = localStorage.getItem("auth");
let user = authUser ? JSON.parse(authUser) : [];

export const authUserStore = defineStore("auth", {
  state: () => {
    user;
  },
  actions: {
    async login(payload) {
      try {
        const data = await AuthService.login(payload);
        this.user = data;
        this.user.name = payload.username;
        localStorage.setItem("auth", JSON.stringify(this.user));
        return true
      } catch (er) {
        console.log('Failed');
        return false
      }
    },
  },
});
