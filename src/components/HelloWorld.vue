<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="fUser in piniaUser" :key="fUser.id">
      {{ getterUser.id }} {{ getterUser.name }} {{ getterUser.address }}
    </div>
    <h1>dai phan cach</h1>
    <div v-for="user in user" :key="user.id">
      {{ user.id }} {{ user.name }} {{ user.address }}
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import axios from "axios";
//import users store
import { useUserStore } from "../store/users";
// declare store variable
export default {
  setup() {
    const store = useUserStore();
    const msg = ref("Welcome to my Vuex Store");
    // const getUsers = computed(() => {
    //   return store.getUsers;
    // });
    const { fetchUser } = store;
    const { piniaUser } = storeToRefs(store);
    // onMounted(() => {
    //   store.fetchUser();
    // });
    return { msg, fetchUser, piniaUser };
  },
  data() {
    return {
      user: [],
    };
  },
  async created() {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.user = data.data;
  },
};
</script>
