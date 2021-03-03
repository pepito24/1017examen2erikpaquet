import { shallowMount } from "@vue/test-utils";
import Contact from '../src/views/Contact.vue';


//Test unitaire 01

describe("Contact", () => { it("vérifie le submit du formulaire de contact (prénom)", async () => 
{ const fomulaireContact = shallowMount(Contact, {
      data() {
        return {prénom: "",};
      },
    });
    await fomulaireContact.find("form").trigger("submit.prevent");

    expect(fomulaireContact.find("erreurs").exists()).not.toEqual([]);
  });
});



//Test unitaire 02

describe("Contact", () => { it("vérifie le submit du formulaire de contact (nom)", async () => 
{ const fomulaireContact = shallowMount(Contact, {
      data() {
        return {nom: "",};
      },
    });
    await fomulaireContact.find("form").trigger("submit.prevent");

    expect(fomulaireContact.find("erreurs").exists()).not.toEqual([]);
  });
});