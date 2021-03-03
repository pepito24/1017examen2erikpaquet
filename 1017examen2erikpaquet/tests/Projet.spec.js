import { shallowMount } from "@vue/test-utils";
import Projet from '../src/views/Projet.vue';

//Test unitaire

describe("Projet", () => {
  it("La page de profil est fonctionnel ?", () => { 
    const pageProjet = shallowMount(Projet, {});   
    expect(pageProjet.is(Projet)).toBe(true);
  });
});