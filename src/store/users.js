import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: [],
  }),
  getters: {
    getUsers(state) {
      return state.user;
    },
  },
  actions: {
    async fetchUser() {
      try {
        const data = axios.get("https://jsonplaceholder.typicode.com/users");
        this.users = await data.data;
        console.log(this.users);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
