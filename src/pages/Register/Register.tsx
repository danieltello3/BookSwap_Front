import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import Button from '../../components/ui/atomos/Button/Button';
import { Link } from 'react-router-dom';


const Register = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validar los campos (puedes agregar más validaciones según tus necesidades)
        if (!nombre || !apellido || !email || !password || !confirmPassword) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Puedes agregar aquí la lógica para manejar el formulario estático
        alert('Formulario estático enviado. Puedes agregar la lógica correspondiente.');
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                    <Link to={"/Login"}>
                    <Button variant='primary' className="w-full p-2 rounded mt-2">
                        Registrarse
                    </Button>
                    </Link>
                </form>
            </div>
        </div>
    );
};
export default Register