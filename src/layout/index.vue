<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="wrapper">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from "./Header.vue";
import AppFooter from "./Footer.vue";
export default {
  name: "AppLayout",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>