<template>
<div id="app">
<!-- (If & Else) pour savoir quel vue afficher (Profil) -->
  <div v-if="showProfil"><Profil></Profil></div> 
  <!-- (If & Else) pour savoir quel vue afficher (accueil) -->
      <div v-else class="accueil"> 
        <div class="title">
          <h1>{{ message }}</h1>   <!-- message (ligne 39) -->
          
        </div>
        <div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
        </div>
      </div>
    </div>
</template>


<script>
// Import - mixin.js et profil.vue
import Profil from "./Profil.vue";
import {mixin} from "../mixins/mixin.js";


export default {
  mixins: [mixin],
  name: "Accueil",
  components: {
    Profil
  },
// Date : Message et showProfil
  data() {
      return {
          showProfil: false,
           message: "Accueil",
      }
  },
// systeme de connection avec created
  created() {
    let loggedIn = false;
  
    if (loggedIn) {
        this.showProfil = true;
        console.log(this.showProfil);
    }
  }
}
</script>


<style scoped>
  .accueil {
  padding: 30px;
  }
</style>