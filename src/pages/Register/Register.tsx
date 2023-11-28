import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock,FaIdCard, FaPhoneSquareAlt } from 'react-icons/fa';
import Button from '../../components/ui/atomos/Button/Button';
import { useNavigate } from 'react-router-dom';
import { crearUsuario } from '../../services/UserService';


const Register = () => {
    const navigate = useNavigate();  // Obtiene la función navigate
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dni, setDni] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validar los campos (puedes agregar más validaciones según tus necesidades)
        if (!nombre || !apellido || !correo || !password || !confirmPassword || !dni || !telefono) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        try {
            // Llama a la función para crear un nuevo usuario
            const nuevoUsuario = {
                id: 0,
                nombre,
                apellido,
                correo,
                password,
                dni,
                telefono,
            };

            const resultado = await crearUsuario(nuevoUsuario);

            // Puedes manejar el resultado aquí, por ejemplo, mostrar un mensaje de éxito o redirigir a otra página
            console.log(resultado);
            navigate('/Login');

        } catch (error) {
            // Manejar errores, por ejemplo, mostrar un mensaje de error
            console.error('Error al crear el usuario:', error);
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
                    
                        <Button variant='primary' type="submit" className="w-full p-2 rounded mt-2">
                            Registrarse
                        </Button>
                </form>
            </div>
        </div>
    );
};
export default Register