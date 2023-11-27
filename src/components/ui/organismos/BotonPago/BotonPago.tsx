import { openForm } from "../../../../services/Niubiz"
import { getSessionToken, ipClient } from "../../../../services/PasarelaService";
import Button from "../../atomos/Button/Button"

interface BotonPagoProps {
  monto?: number;
}
const BotonPago: React.FC<BotonPagoProps> = ({monto=100}) => {

  const handleForm = async () => {
    const ip = await ipClient()
    const body = {
      ip,
      monto
    }
    const {sessionToken} = await getSessionToken(body);
    
    openForm(sessionToken)
  }

  return (
    <Button variant="primary" onClick={handleForm}>Registrar pedido</Button>
  )
}

export default BotonPago