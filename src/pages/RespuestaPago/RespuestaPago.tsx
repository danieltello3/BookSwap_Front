import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'

const RespuestaPago = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate();
  const success = searchParams.get("success");
  useEffect(()=>{
    setTimeout(()=>{
      navigate("userConfig")
    },6000)
  },[])
  return (
    <div className='flex flex-col h-screen align-middle justify-center content-center'>
      <div className='w-96 h-48 flex gap-4 flex-col align-middle justify-center bg-teal-700 rounded m-auto'>
        <p className='text-center text-white text-2xl'>{success === 'true' ? 'Pago Realizado con éxito' : 'Error al realizar el Pago'}</p>
        <FontAwesomeIcon icon={success === 'true' ? faCircleCheck : faCircleExclamation}  className='text-white text-5xl'/>
      </div>
      
    </div>
  )
}

export default RespuestaPago