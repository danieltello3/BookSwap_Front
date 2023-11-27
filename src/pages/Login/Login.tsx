import React, { useState } from 'react';
import Button from '../../components/ui/atomos/Button/Button';
import { Link,useNavigate } from 'react-router-dom';
import apiLogin  from './apiLogin';

const Login = () => {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        try {
            if (!correo || !password) {
                throw new Error('Por favor, ingresa tu correo y contraseña.');
            }
    
            const result = await apiLogin({ correo, password });
    
            if (result.success) {
                // Inicio de sesión exitoso, redirigir a "/"
                navigate('/');
            } else {
                // Manejar errores, mostrar mensaje de error, etc.
                setError(true);
            }
        } catch (error) {
            setError(true);
        }
    };

    return (
        <section
            className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
            style={{
                backgroundImage: 'url("https://gobookmart.com/wp-content/uploads/2023/03/1-2.jpg")',
            }}>
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-6">
                    <i className="fas fa-cubes fa-2x me-3 text-black"></i>
                    <span className="text-3xl font-bold text-black">BookSwap</span>
                </div>

                <h5 className="text-lg font-normal mb-3 pb-3">Sign into your account</h5>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-outline">
                        <input
                            type="email"
                            id="email"
                            placeholder="correo@gmail.com"
                            className="w-full p-2 border rounded"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                        <label className="block text-sm" htmlFor="email">Email address</label>
                    </div>

                    <div className="form-outline">
                        <input
                            type="password"
                            id="password"
                            placeholder="password"
                            className="w-full p-2 border rounded"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="block text-sm" htmlFor="password">Password</label>
                    </div>


                    <Button variant="primary" type="submit" className="w-full p-2 rounded"> Login</Button>

                    <a className="text-xs text-gray-500" href="#!">Forgot password?</a>
                    <p className="text-sm text-teal-500">
                        Don't have an account? <Link to="/register" className="text-teal-500">Register here</Link>
                    </p>
                    <a href="#!" className="text-xs text-gray-500">Terms of use.</a>
                    <a href="#!" className="text-xs text-gray-500">Privacy policy</a>
                </form>


            </div>
        </section>
    );
};


export default Login