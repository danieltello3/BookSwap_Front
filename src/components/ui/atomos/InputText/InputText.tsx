import React from 'react';

interface InputTextProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Agregar prop onChange
}

const InputText: React.FC<InputTextProps> = ({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  required = false,
  onChange, // Agregar onChange
}) => {
  return (
    <div className="mb-2 sm:mb-6">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-teal-900 dark:text-white">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="bg-teal-50 border border-teal-900 text-teal-900 text-sm rounded-lg focus:ring-teal-700 focus:border-teal-700 block w-full p-2.5"
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange} // Pasar onChange al input
      />
    </div>
  );
};

export default InputText;

