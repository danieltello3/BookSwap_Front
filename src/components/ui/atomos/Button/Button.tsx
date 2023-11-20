interface ButtonProps {
  type?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
  children: React.ReactNode | string;
  variant: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({type='button', onClick, className='', children, variant}) => {
  const base = `${className} py-2 px-4 rounded`
  const style = {
    primary: `${base} bg-teal-600 hover:bg-teal-700 text-white font-bold`,
    secondary: `${base} bg-white hover:bg-teal-600 text-teal-700 font-semibold hover:text-white border border-teal-700 hover:border-transparent`
  }
  return (
    <button type={type} onClick={onClick} className={style[variant]}>{children}</button>
  )
}

export default Button