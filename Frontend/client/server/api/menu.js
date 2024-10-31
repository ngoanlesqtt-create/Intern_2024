export default defineEventHandler(() => {
  const index = [
    {
      label: "User",
      id: 1,
      path: "/user",
    },
    {
      label: "Book",
      id: 2,
      path: "/book",
    },
    {
      label: "Category",
      id: 3,
      path: "/categories",
    },
    {
      label: "Publisher",
      id: 4,
      path: "/publisher",
    },
  ];

  return index;
});
