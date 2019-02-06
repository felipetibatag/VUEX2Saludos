<template>
  <div>
    <show-greetings-component></show-greetings-component>
    <change-greetings-component></change-greetings-component>
  </div>
</template>

<script>
import ShowGreetingsComponent from "./components/ShowGreetingsComponent.vue";
import ChangeGreetingsComponent from "./components/ChangeGreetingsComponent.vue";
import store from "./vuex/store.js";
export default {
  name: "app",
  components: { ShowGreetingsComponent, ChangeGreetingsComponent },
  store
};
</script>

<style>
</style>
