<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <router-link class="nav-link" to="/">test 1</router-link>
    <router-link class="nav-link" to="/test-2">test 2</router-link>
  </header>
  <RouterView />
</template>

<style>
  a{
    margin-left: 20px !important;
  }
</style>
