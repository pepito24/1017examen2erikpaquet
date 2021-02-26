<template>
  <div id="app">
    <Header></Header>
    <router-view />   <!-- router pour menu -->
    <Footer></Footer>
  </div>
</template>

<script>
// Import - Header.vue et Footer.vue
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";


// App
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>
