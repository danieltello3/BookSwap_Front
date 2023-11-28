import VNavbar from "../../components/ui/organismos/VNavbar/VNavbar"
import UserProfile from "../../components/ui/moleculas/UserProfile/UserProfile"
import InputText from "../../components/ui/atomos/InputText/InputText"
import Button from "../../components/ui/atomos/Button/Button"
import { useEffect, useState } from 'react';
import { obtenerUsuario } from '../../services/UserService';
import { actualizarUsuario } from "../../services/UserService";
import { toBase64 } from "../../utils/archivo.utility";

const UserConfig = () => {
    const [usuario, setUsuario] = useState<any>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await obtenerUsuario();
                setUsuario(response.content); // Ajusta la estructura según la respuesta real del servidor
            } catch (error) {
                console.error('Error al obtener datos del usuario:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleImageChange = async (file: File | null) => {
        if (file) {
          try {
            const base64Image = await toBase64(file);
            console.log('Imagen en base64:', base64Image);
    
            // Actualiza la imagen del usuario en el estado
            setUsuario((prevUsuario:any) => ({ ...prevUsuario, imagen_url: base64Image }));
          } catch (error) {
            console.error('Error al convertir la imagen a base64:', error);
          }
        }
      };
    

    const handlePictureChange = () => {
        // Lógica para manejar el cambio de imagen aquí
        console.log("Cambio de imagen");
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsuario({
          ...usuario,
          [e.target.id]: e.target.value
        });
      };

      const handleUpdate = async () => {
        try {
          const updatedUser = await actualizarUsuario(usuario);
          
          // Verifica la estructura de los datos y ajusta según sea necesario
          if (updatedUser && updatedUser.data) {
            setUsuario(updatedUser.data);
            console.log('Usuario actualizado correctamente:', updatedUser.data);
          } else {
            console.error('Error al actualizar el usuario: Datos de usuario no válidos');
          }
        } catch (error) {
          console.error('Error al actualizar el usuario:', error);
        }
      };

    return (
        <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
            <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
                <VNavbar />
            </aside>
            <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
                <div className="p-2 md:p-4">
                    <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                        <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>

                        <div className="grid max-w-2xl mx-auto mt-8">
                            <UserProfile
                                rounded={true}
                                imageName={usuario ? usuario.fotoperfil : ''}
                                changeButtonName="Cambiar foto"
                                deleteButtonName="Eliminar foto"
                                onImageChange={handleImageChange}
                                onPictureChange={handlePictureChange}                                
                            />
                            

                            <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                    <div className="w-full">
                                        <InputText
                                            label="Nombre Completo"
                                            id="nombre"
                                            type="text"
                                            placeholder="Ingresa tu nombre"
                                            required
                                            value={usuario ? usuario.nombre : ''}
                                            onChange={handleInputChange}

                                        />
                                    </div>

                                    <div className="w-full">
                                        <InputText
                                            label="Apellidos"
                                            id="apellido"
                                            type="text"
                                            placeholder="Ingresa tus apellidos"
                                            required
                                            value={usuario ? usuario.apellido : ''}
                                            onChange={handleInputChange}

                                        />
                                    </div>
                                </div>

                                <div className="mb-2 sm:mb-6">
                                    <InputText
                                        label="Correo electrónico"
                                        id="correo"
                                        type="email"
                                        placeholder="Ingresa correo electrónico"
                                        required
                                        value={usuario ? usuario.correo : ''}
                                        onChange={handleInputChange}

                                    />
                                </div>

                                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                    <div className="w-full">
                                        <InputText
                                            label="Teléfono"
                                            id="telefono"
                                            type="number"
                                            placeholder="Ingresa tu número de teléfono"
                                            required
                                            value={usuario ? usuario.telefono : ''}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="w-full">
                                        <InputText
                                            label="DNI"
                                            id="dni"
                                            type="number"
                                            placeholder="Ingresa tu DNI"
                                            required
                                            value={usuario ? usuario.dni : ''}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="mb-2 sm:mb-2">
                                    <InputText
                                        label="Contraseña"
                                        id="password"
                                        type="password"
                                        placeholder="Ingresa tu password"
                                        required
                                    />
                                </div>
                                <div className="mb-2 sm:mb-2">
                                    <InputText
                                        label="Dirección"
                                        id="direccion"
                                        type="text"
                                        placeholder="Ingresa tu dirección"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                    <div className="w-full">
                                        <InputText
                                            label="Número de casa"
                                            id="numero"
                                            type="number"
                                            placeholder="número de casa"
                                            required
                                            
                                        />
                                    </div>

                                    <div className="w-full">
                                        <InputText
                                            label="Distrito"
                                            id="distrito"
                                            type="text"
                                            placeholder="Ingresa tu distrito"
                                            required
                                        />
                                    </div>
                                    <div className="w-full">
                                        <InputText
                                            label="Ciudad"
                                            id="ciudad"
                                            type="text"
                                            placeholder="Ingresa tu ciudad"
                                            required
                                        />
                                    </div>
                                    
                                </div>

                                <div className="mb-6">
                                    <label
                                        htmlFor="message"
                                        className="block mb-2 text-sm font-medium text-teal-900 dark:text-white"
                                    >
                                        Descripción
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={3}
                                        className="block p-2.5 w-full text-sm text-teal-900 bg-teal-50 rounded-lg border border-teal-700 focus:ring-teal-500 focus:border-teal-500 "
                                        placeholder="Escribe tu descripción aquí"
                                    ></textarea>
                                </div>

                                <div className="flex justify-end">
                                    <Button variant="primary" onClick={handleUpdate}>
                                        Guardar Cambios
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default UserConfig