import { defineStore } from "pinia";

export const useLoginStore = defineStore("counter", () => {
  const message = "hello";
  return { message };
});
