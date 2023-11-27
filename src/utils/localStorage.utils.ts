export const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem("token")?.toString();
  if(!token) return "";
  return token;
};