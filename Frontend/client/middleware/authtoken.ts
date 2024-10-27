import axios from "axios";

export default defineNuxtRouteMiddleware(async () => {
  const accessToken = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");

  // Hàm để kiểm tra token
  const validateToken = async (): Promise<boolean> => {
    if (!accessToken) {
      return false; // Không có access token
    }

    const headers: HeadersInit = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };

    if (refreshToken) {
      headers["X-Refresh-Token"] = refreshToken;
    }
    try {
      const response = await axios.post(
        "https://localhost:7029/refresh-token",{},
        {
          headers: headers
        }
      );

      if (response) {
        const data = await response.data;
        console.log("new token:", data.AccessToken);

        // Nếu có access token mới, lưu vào localStorage
        if (data.AccessToken) {
          localStorage.setItem("token", data.AccessToken);
        }

        return true; // Token hợp lệ hoặc đã làm mới
      }
    } catch (e) {
      console.log(e);
      return false;
    }
    return false; // Token không hợp lệ
  };

  // Kiểm tra xem có access token không
  if (!accessToken || !refreshToken) {
    console.log("test dong 42");
    return navigateTo("/login"); // Chuyển hướng đến trang đăng nhập
  }

  // Gọi hàm kiểm tra token
  const isAuthenticated = await validateToken();

  if (!isAuthenticated) {
    return navigateTo("/login"); // Chuyển hướng đến trang đăng nhập
  }
});
