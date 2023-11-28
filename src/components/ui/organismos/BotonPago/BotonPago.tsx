import { openForm } from "../../../../services/Niubiz"
import { getSessionToken, ipClient } from "../../../../services/PasarelaService";
import Button from "../../atomos/Button/Button"

interface BotonPagoProps {
  monto?: number;
  ip: string;
  ordenNumber?: string;
  type?: "submit" | "button";
  variant?: "primary" | "secondary";
  className?: string;
}
const BotonPago: React.FC<BotonPagoProps> = ({monto=100,type='button',variant='primary',className=''}) => {

  const handleForm = async () => {
    const ip = await ipClient()
    
  }

  return (
    <Button type={type} variant={variant} className={className}>Confirmar Orden</Button>
  )
}

export default BotonPago