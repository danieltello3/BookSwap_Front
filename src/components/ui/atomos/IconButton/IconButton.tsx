interface IconButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode | string;
  variant: 'standard' | 'filled' | 'outlined';
}


const IconButton: React.FC<IconButtonProps> = ({onClick,className,children,variant}) => {
  const base = `${className} p-2 rounded-full`
  const style = {
    standard: `${base} bg-transparent hover:bg-teal-700/20 text-white`,
    filled: `${base} bg-white hover:bg-teal-600 text-teal-700 font-semibold hover:text-white border border-teal-700 hover:border-transparent`,
    outlined: `${base} bg-white hover:bg-teal-600 text-teal-700 font-semibold hover:text-white border border-teal-700 hover:border-transparent`
  }
  return (
    <button onClick={onClick} className={style[variant]}>
      {children}
    </button>
  )
}

export default IconButton