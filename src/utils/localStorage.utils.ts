
export const getTokenFromLocalStorage = () => {
  try {
    const userString = localStorage.getItem("user");
    console.log("Stored user string:", userString);

    if (!userString) {
      console.log("No se encontró el usuario en localStorage.");
      return null;
    }

    const user = JSON.parse(userString);
    const token = user?.content?.token; // Ajusta la propiedad según la estructura de tu objeto
    console.log("Token recuperado:", token);

    if (!token) {
      console.error("No se encontró el token en el usuario almacenado.");
    }

    return token;
  } catch (error) {
    console.error('Error al parsear el token desde localStorage:', error);
    return null;
  }
};