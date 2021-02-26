<template>
  <footer class="footer">
      <!-------- Copyright (ligne 13-15) --------->
      <p class="text-align-center" v-copyright></p> 
  </footer>
</template>



<script>
  export default {
    name: "Footer",
    directives: {
        // fonction pour faire apparaître le copyright dans le footer
        copyright: { 
        bind: function(el) { 
          el.innerHTML = 'Copyright ©' + new Date().getFullYear() + "- Le Corsaire du Web" + el.innerHTML ; 
        },
      },
    }
  }
</script>

<style scoped>
  .footer {
    bottom: 0;
    left: 0;
    position: fixed;
    width: 100%;
    text-align: center;
    padding: 30px;
    background: #ff8400;
    color: white;
  }
  .footer p {
  margin-bottom: 0;
  }
</style>