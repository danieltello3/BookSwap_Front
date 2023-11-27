// localStorage.utils.ts

// localStorage.utils.ts

export const getTokenFromLocalStorage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if(!user) return {};
  return user.token;
};