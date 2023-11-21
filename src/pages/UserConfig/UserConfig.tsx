import VNavbar from "../../components/ui/organismos/VNavbar/VNavbar"
import UserProfile from "../../components/ui/moleculas/UserProfile/UserProfile"
import InputText from "../../components/ui/atomos/InputText/InputText"
import Button from "../../components/ui/atomos/Button/Button"

const handleImageChange = (file: File | null) => {
    // Lógica para manejar el cambio de imagen aquí
    console.log("Imagen seleccionada:", file);
  };

  const handlePictureChange = () => {
    // Lógica para manejar el cambio de imagen aquí
    console.log("Cambio de imagen");
  };
const UserConfig = () => {
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
                            imageName="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                            rounded={true}
                            imageType="image/*"
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
                                    />   
                                    </div>

                                    <div className="w-full">
                                    <InputText
                                        label="Apellidos"
                                        id="apellidos"
                                        type="text"
                                        placeholder="Ingresa tus apellidos"
                                        required
                                    />   
                                    </div>
                                </div>

                                <div className="mb-2 sm:mb-6">
                                <InputText
                                        label="Correo electrónico"
                                        id="email"
                                        type="email"
                                        placeholder="Ingresa correo electrónico"
                                        required
                                    />   
                                </div>

                                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                    <div className="w-full">
                                    <InputText
                                        label="Teléfono"
                                        id="phone"
                                        type="number"
                                        placeholder="Ingresa tu número de teléfono"
                                        required
                                    />   
                                    </div>

                                    <div className="w-full">
                                    <InputText
                                        label="Contraseña"
                                        id="password"
                                        type="password"
                                        placeholder="Ingresa tú contraseña"
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
                                    <Button variant="primary">
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