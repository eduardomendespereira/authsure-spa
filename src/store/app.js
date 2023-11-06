// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  id: "normalApp",

  state: () => ({
    dialogBaseInfo: { color: "red", message: "", show: false, timeout: 1200 },
  }),
  actions: {
    changeDialog(payload) {
      try {
        this.dialogBaseInfo = { ...this.dialogBaseInfo, ...payload };
      } catch (error) {
        console.error(error);
      }
    },
  },
});
