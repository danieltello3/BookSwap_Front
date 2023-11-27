import { openForm } from "../../../../services/Niubiz"
import Button from "../../atomos/Button/Button"


const BotonPago = () => {

  const handleForm = () => {
    openForm("028b64852c302e0577dd226ab0c2879ca87987aeb7e15de11e0ed540584d6194")
  }

  return (
    <Button variant="primary" onClick={handleForm}>Registrar pedido</Button>
  )
}

export default BotonPago