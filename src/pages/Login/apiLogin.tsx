// apiLogin.ts
const apiLogin = async (data: any) => {
    try {
        const response = await fetch('http://localhost:4444/usuario/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        return {
            success: response.ok,
            content: result,
            status: response.status,
        };
    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw error;
    }
};

export default apiLogin;
