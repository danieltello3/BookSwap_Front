import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaIdCard, FaPhoneSquareAlt } from 'react-icons/fa';
import Button from '../../components/ui/atomos/Button/Button';
import { useNavigate } from 'react-router-dom';
import apiRegister from './apiRegister';


const Register = () => {
    const [nombre, setNombre] = useState<string>('');
    const [apellido, setApellido] = useState<string>('');
    const [correo, setCorreo] = useState<string>('');
    const [telefono, setTelefono] = useState<string>('');
    const [dni, setDni] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    // Inicializa la función navigate
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
    
        try {
            // Validar los campos (puedes agregar más validaciones según tus necesidades)
            if (!nombre || !apellido || !correo || !password || !confirmPassword) {
                throw new Error('Por favor, completa todos los campos.');
            }
    
            // Hacer la solicitud a la API utilizando la función importada
            const { error, result } = await apiRegister({
                nombre,
                apellido,
                correo,
                telefono,
                dni,
                password,
            });
    
            console.log(result); // Agrega esta línea para imprimir la respuesta en la consola
    
            if (error) {
                // Manejar el error específico
                throw new Error(error);
            }
    
            // Verificar el código de respuesta de la API
            if (result.success) {
                // Usuario registrado con éxito
                alert('Usuario registrado con éxito.');
    
                // Verificar si hay un mensaje en la respuesta (ajusta esto según la estructura de tu respuesta)
                if ((result as any).message) {
                    console.log('Mensaje del servidor:', (result as any).message);
                }
    
                // Utilizar navigate para redirigir a la página de inicio de sesión
                navigate('/Login');
            } else {
                // Manejar otros códigos de respuesta, por ejemplo, mostrar un mensaje de error
                if (result.content && result.content.id === 'usuario_ya_registrado') {
                    // Personaliza el mensaje para el caso de usuario ya registrado
                    throw new Error('El correo ya está registrado. Por favor, usa otro correo.');
                } else {
                    // Mensaje de error genérico
                    throw new Error(`Error al registrar usuario. Código de estado: ${result.status}`);
                }
            }
        } catch (error) {
            // Manejar errores, por ejemplo, mostrar un mensaje de error
            const errorMessage = (error as any).message || 'Error al registrar usuario. Por favor, inténtalo de nuevo.';
            console.error('Error al registrar usuario:', errorMessage);
            alert(errorMessage);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-[#C0EAE6]">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-center text-2xl font-semibold mb-4">Registro</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex items-center border-b border-teal-500 py-2">
                        <FaUser className="text-teal-500 mr-2" />
                        <input
                            type="text"
                            className="w-full focus:outline-none"
                            placeholder="Nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center border-b border-teal-500 py-2">
                        <FaUser className="text-teal-500 mr-2" />
                        <input
                            type="text"
                            className="w-full focus:outline-none"
                            placeholder="Apellido"
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center border-b border-teal-500 py-2">
                        <FaEnvelope className="text-teal-500 mr-2" />
                        <input
                            type="email"
                            className="w-full focus:outline-none"
                            placeholder="Correo electrónico"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center border-b border-teal-500 py-2">
                        <FaIdCard className="text-teal-500 mr-2" />
                        <input
                            type="number"
                            className="w-full focus:outline-none"
                            placeholder="DNI"
                            value={dni}
                            onChange={(e) => setDni(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center border-b border-teal-500 py-2">
                        <FaPhoneSquareAlt className="text-teal-500 mr-2" />
                        <input
                            type="number"
                            className="w-full focus:outline-none"
                            placeholder="Teléfono "
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center border-b border-teal-500 py-2">
                        <FaLock className="text-teal-500 mr-2" />
                        <input
                            type="password"
                            className="w-full focus:outline-none"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center border-b border-teal-500 py-2">
                        <FaLock className="text-teal-500 mr-2" />
                        <input
                            type="password"
                            className="w-full focus:outline-none"
                            placeholder="Confirmar Contraseña"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <Button variant="primary" className="w-full p-2 rounded mt-2" onClick={handleSubmit}>
                        Registrarse
                    </Button>

                </form>
            </div>
        </div>
    );
};
export default Register