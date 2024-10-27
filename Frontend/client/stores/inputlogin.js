import { defineStore } from "pinia";
import { reactive } from "vue";
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

export const useInputLoginStore = defineStore("inputLoginStore", () => {
  const inputs = reactive({
    username: "",
    password: "",
  });

  const rules = {
    username: { required },
    password: { required },
  };

  let v$ = useVuelidate(rules, inputs);
  return { inputs, v$ };
});
