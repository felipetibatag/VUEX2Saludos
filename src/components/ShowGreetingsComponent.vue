<template>
  <div>
    <p>{{contador}}</p>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex"; //ojo aca las llaves se necesitan para que funcione {}
export default {
  computed: mapGetters({
    msg: "getMessage",
    contador: "getCounter"
  })
};
</script>

<style>
</style>
