export function isAuthenticated() {
  try {
    const token = localStorage.getItem("token");
    return token !== null && token !== "";
  } catch (e) {
    return false;
  }
}
