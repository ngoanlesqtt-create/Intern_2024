import { defineStore } from "pinia";
import { reactive } from "vue";
import { required, email } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

export const useInputStore = defineStore("inputStore", () => {
  const inputs = reactive({
    username: "",
    password: "",
    email: "",
    phoneNumber: "",
  });

  const rules = {
    username: { required },
    password: { required },
    email: { required, email },
    phoneNumber: { required },
  };
  const v$ = useVuelidate(rules, inputs);

  return { inputs, v$ };
});
