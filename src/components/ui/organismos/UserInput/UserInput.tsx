import { FaFileImage } from 'react-icons/fa';
import { ChangeEvent } from 'react'; // Importa el tipo ChangeEvent
import Button from '../../atomos/Button/Button';

const UserInput = () => {
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        // Ahora e tiene el tipo correcto (ChangeEvent)
        const file = e.target.files && e.target.files[0];
        if (file) {
            console.log('Archivo seleccionado:', file);
            // Puedes manejar la lógica de carga de archivos aquí
        }
    };

    const handleSendMessage = () => {
        // Agrega la lógica para enviar el mensaje
        console.log('Mensaje enviado');
    };

    return (
        <div className="relative w-full">
            <input
                className="w-full bg-gray-300 py-5 px-3 rounded-xl pr-12"
                type="text"
                placeholder="Escribe tu mensaje aquí..."
            />
            <div className="absolute top-0 right-0 h-full flex items-center pr-4">
                <label htmlFor="fileInput" className="ml-2 cursor-pointer">
                    <FaFileImage size={24} color="#555" />
                    <input
                        id="fileInput"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </label>
                <Button className="ml-2 px-4 py-2 text-white rounded" variant='primary' onClick={handleSendMessage} >Enviar</Button>
            </div>
        </div>
    );
};


export default UserInput;
