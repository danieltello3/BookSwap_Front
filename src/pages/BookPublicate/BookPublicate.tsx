import UserProfile from "../../components/ui/moleculas/UserProfile/UserProfile";
import InputText from "../../components/ui/atomos/InputText/InputText";
import Button from "../../components/ui/atomos/Button/Button";
import { Link } from "react-router-dom";


const handleImageChange = (file: File | null) => {
    // Lógica para manejar el cambio de imagen aquí
    console.log("Imagen seleccionada:", file);
  };

  const handlePictureChange = () => {
    // Lógica para manejar el cambio de imagen aquí
    console.log("Cambio de imagen");
  };

const BookPublicate = () => {
    return (
        <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4 flex justify-center">
                <div className="p-2 md:p-4">
                    <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                        <h2 className="pl-2 text-2xl font-bold sm:text-xl ">VENDER LIBRO</h2>
                        <p className="pl-2 text-2">Completa las características principales del libro</p>

                        <div className="grid max-w-2xl mx-auto mt-8">
                            <UserProfile 
                            imageName="https://estruendomudo.pe/imagenes/9788446/978844605036.JPG"
                            rounded={false}
                            imageType="image/*"
                            changeButtonName="Cambiar foto"
                            deleteButtonName="Eliminar foto"
                            onImageChange={handleImageChange}
                            onPictureChange={handlePictureChange}
                            />

                            <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                    <div className="w-64">
                                    <InputText
                                        label="Título"
                                        id="title"
                                        type="text"
                                        placeholder="Ingresa el título del libro"
                                    />   
                                    </div>

                                    <div className="w-64">
                                    <InputText
                                        label="Autor"
                                        id="author"
                                        type="text"
                                        placeholder="Ingresa nombre del autor"
                                        required
                                    />   
                                    </div>
                                </div>
                                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                    <div className="w-64">
                                    <InputText
                                        label="Editoreal"
                                        id="editorial"
                                        type="text"
                                        placeholder="Ingresa el nombre de la editorial"
                                        required
                                    />   
                                    </div>

                                    <div className="w-64">
                                    <InputText
                                        label="Marca"
                                        id="marca"
                                        type="text"
                                        placeholder="Ingresa el nombre de la marca"
                                        required
                                    />   
                                    </div>
                                </div>
                                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                    <div className="w-64">
                                    <InputText
                                        label="Modelo"
                                        id="modelo"
                                        type="text"
                                        placeholder="Ingresa el nombre del modelo"
                                        required
                                    />   
                                    </div>

                                    <div className="w-64">
                                    <InputText
                                        label="Formato"
                                        id="formato"
                                        type="text"
                                        placeholder="Ingresa nombre del formato"
                                        required
                                    />   
                                    </div>
                                </div>
                                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                    <div className="w-48">
                                    <InputText
                                        label="Tipo de tapa"
                                        id="tipoTapa"
                                        type="text"
                                        placeholder="Ingresa tipo de tapa"
                                        required
                                    />   
                                    </div>
                                </div>                  
                                <div className="flex justify-end">
                                    <Link to={"/publicate"}>
                                    <Button variant="primary">
                                        Guardar Cambios
                                    </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

    )
}
export default BookPublicate;