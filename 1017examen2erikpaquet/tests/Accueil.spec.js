import { shallowMount } from "@vue/test-utils";
import Accueil from "../src/views/Accueil.vue";

//Test unitaire

describe("Accueil", () => {
  it("La page d'accueil est fonctionnel ?", () => { 
    const home = shallowMount(Accueil, {});   
    expect(home.is(Accueil)).toBe(true);
  });
});