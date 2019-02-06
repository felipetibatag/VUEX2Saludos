<template>
  <input
    :value="getMessage"
    type="text"
    name="greetings"
    id="greetings"
    @input="changeMessage($event.target.value)"
    @keyup.enter="incrementCounter"
  >
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  computed: mapGetters(["getMessage"]),
  methods: mapActions(["changeMessage", "incrementCounter"])
};
</script>

<style>
</style>
