// localStorage.utils.ts

export const getTokenFromLocalStorage = () => {
  const userString = localStorage.getItem("user");
  console.log("Stored user string:", userString);

  if (!userString) {
    console.log("No se encontró el usuario en localStorage.");
    return null;
  }

  try {
    const user = JSON.parse(userString);
    const token = user.token;
    console.log("Token recuperado:", token);
    return token;
  } catch (error) {
    console.error('Error al parsear el token desde localStorage:', error);
    return null;
  }
};