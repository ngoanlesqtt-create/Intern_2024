export default defineEventHandler(() => {
  const index = [
    {
      label: "Đăng nhập",
      path: "/login",
    },
    {
      label: "Đăng ký",
      path: "/register",
    },
    {
      label: "Giỏ hàng",
      path: "/cart",
    },
  ];
  return index;
});
