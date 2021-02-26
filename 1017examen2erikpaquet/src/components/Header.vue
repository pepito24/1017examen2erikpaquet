<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!----- v-for pour me menu avec router (ligne 17-21)  ------->
         <p v-for="item in menu" :key="item.name">
           <router-link :to="{path:item.nom}" > {{item.nom}} </router-link>
         </p>     
    </nav>
</div>
</template>

<script>
export default{
  name: "Header",
   data(){
      return{
      // Menu dans un tableau pour le v-for (ligne 5-7)
      menu:[
            {nom: "Accueil", path: "/"},
            {nom: "Projet", path: "/projet"},
            {nom: "Contact", path: "/contact",}
         ],

      
      }
   }
}
</script>

<style scoped>

  .header li{
    padding: 30px 10px;
  }

  p{
    font-size: 20px;
    padding:10px;
  }

</style>