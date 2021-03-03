import { shallowMount } from "@vue/test-utils";
import Profil from '../src/views/Profil.vue';

//Test unitaire

describe("Accueil", () => {
  it("La page de profil est fonctionnel ?", () => { 
    const pageProfil = shallowMount(Profil, {});   
    expect(pageProfil.is(Profil)).toBe(true);
  });
});