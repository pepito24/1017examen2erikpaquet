import { shallowMount } from "@vue/test-utils";
import Footer from "../src/components/Footer.vue";


//Test unitaire

describe("Footer", () => {
  it("Le copyright est fonctionnel ?", () => { 
    const copyright = shallowMount(Footer, {});   
    expect(copyright.is(Footer)).toBe(true);
  });
});