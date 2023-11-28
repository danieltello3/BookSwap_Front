import React, { ChangeEvent, ReactNode } from 'react';
import { FaFileImage } from 'react-icons/fa';
import Button from '../../atomos/Button/Button';

interface UserInputProps {
  placeholder?: string;
  columnSize?: string;
  numberOfLines?: number;
  sendButtonText?: string;
  onSendMessage: () => Promise<void>;
  onFileChange: (file: File) => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // Cambia a HTMLTextAreaElement
  children?: ReactNode;
}

const UserInput: React.FC<UserInputProps> = ({
  placeholder = 'Escribe tu mensaje aquí...',
  columnSize = 'w-full',
  numberOfLines = 1,
  sendButtonText = 'Enviar',
  onSendMessage,
  onFileChange,
  onChange, // Asegúrate de que estás utilizando onChange
  children,
}) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      console.log('Archivo seleccionado:', file);
      onFileChange(file);
    }
  };

  const handleSendMessage = () => {
    onSendMessage();
  };

  return (
    <div className={`relative ${columnSize}`}>
      <textarea
        className={`w-full bg-gray-300 py-5 px-3 rounded-xl pr-12 resize-none`}
        placeholder={placeholder}
        rows={numberOfLines}
        onChange={onChange} // Usa onChange aquí
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
        <Button className="ml-2 px-4 py-2 text-white rounded" variant='primary' onClick={handleSendMessage}>
          {sendButtonText}
        </Button>
        {children}
      </div>
    </div>
  );
};

export default UserInput;
