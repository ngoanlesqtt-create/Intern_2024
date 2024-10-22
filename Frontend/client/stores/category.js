import { defineStore } from "pinia";

export const useCategoryStore = defineStore("category", () => {
  // const category = [
  //   "Sách Kinh Tế",
  //   "Sách Văn Học Trong Nước",
  //   "Sách Văn Học Nước Ngoài",
  //   "Sách Thưởng Thức Đời Sống",
  // ];

  const category = ["posts", "comments", "albums", "photos"];
  return { category };
});
