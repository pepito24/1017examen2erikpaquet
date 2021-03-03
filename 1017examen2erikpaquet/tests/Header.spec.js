import { shallowMount } from "@vue/test-utils";
import Header from "../src/components/header.vue";

//Test unitaire

describe("Header", () => {
  it("Le menu Accueil est fonctionelle ?", () => { const Home = shallowMount(Header, {stubs: ["router-link", "router-view"],});
    const link = Home.find(".Accueil");
    expect(link.attributes("to")).toBe("/");
  });

    expect(link.attributes("to")).not.toBe("/");
});