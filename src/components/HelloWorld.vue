<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Getters</h1>
    <div v-for="getUser in getUsers" :key="getUser.id">
      {{ getUser.id }} {{ getUser.name }} {{ getUser.address }}
    </div>
    <h1>Actions</h1>
    <div v-for="user in users" :key="user.id">
      {{ user.id }} {{ user.name }} {{ user.address }}
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
// import { storeToRefs } from "pinia";
// import axios from "axios";
// import { useUserStore } from "../store/users";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const msg = ref("Welcom to Vuex");
    const getUsers = computed(() => {
      return store.getters.getUsers;
    });
    const users = computed(() => {
      return store.state.users;
    });
    onMounted(() => {
      store.dispatch("fetchUsers");
    });
    return { msg, getUsers, users };
  },
  // data() {
  //   return {
  //     user: [],
  //     posts: [],
  //   };
  // },
  // async created() {
  //   const store = useUserStore();
  //   this.posts = store.getUsers();
  //   console.log(this.posts);
  //   const data = await axios.get("https://jsonplaceholder.typicode.com/users");
  //   this.user = data.data;
  // },
};
</script>
