<template>
  <div class="projet">
  <h1 class="my-5">Mes projets</h1>
  <p class="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <ul>
    <!----- v-for des éléments du tableau de projets (ligne 24-32) ------>
      <li v-for="(projet, i) in projets" :key="i">
        {{projet}}
      </li>
    </ul>
    <p class="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</template>


<script>
export default {
  name: "Projet",
  data() {
    return {
    // Tableau de projets pour le v-for (ligne 7-8)
      projets: [

        "Mots en Javascript - Javascript",

        "State of decay - React",

        "Agence de voyage - Angular",

      ]
    }
  }
}
</script>

<style scoped>
  .projet{
    width: 30%;
    margin: 5% 35%;
  }
</style>