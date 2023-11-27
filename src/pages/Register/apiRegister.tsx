const apiRegister = async (data: any) => {
    try {
      const response = await fetch('http://localhost:4444/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        // Devolver información sobre el error en lugar de lanzar una excepción
        return { error: `Error en la solicitud: ${response.status}`, result };
      }
  
      return { result };
    } catch (error) {
      console.error('Error en la solicitud:', error);
      // Devolver información sobre el error en caso de excepción
      return { error: 'Error en la solicitud', result: null };
    }
  };
  
  export default apiRegister;