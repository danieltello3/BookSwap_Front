import { useEffect, useState } from "react";
import Button from "../../components/ui/atomos/Button/Button";
import PurchaseSummary from "../../components/ui/organismos/PurchaseSummary/PurchaseSummary";
import { purchaseListTestData } from "./TestData";
import BotonPago from "../../components/ui/organismos/BotonPago/BotonPago";
import { getSessionToken, ipClient } from "../../services/PasarelaService";
import { openForm } from "../../services/Niubiz";

const Checkout = () => {
  const [ip, setIp] = useState('')
  // State for form input values
  const [formData, setFormData] = useState({
    date: "",
    timeRange: "",
    address: "",
    reference: "",
    paymentMethod: ""

    // Add more fields as needed
  });
  const getIp = async () => {
    const ipResponse = await ipClient();
    setIp(ipResponse);
  }
  useEffect(() => {
    getIp();
  },[])

  // Function to handle form input changes
  const handleInputChange = () => {

  };

  const montoCompra = 110;
  const nroOrden = 15;
  // Dummy function for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add logic for form submission
    const body = {
      ip,
      monto: montoCompra
    }
    const {sessionToken} = await getSessionToken(body);
    
    openForm(sessionToken,montoCompra,nroOrden)
    console.log("Form submitted!")
  };

  return (
    <form className="min-h-screen grid grid-cols-12 gap-4 bg-[#C0EAE6]" onSubmit={handleSubmit} >
      {/* Lado derecho (Formulario) */}
      <div className="col-span-8 p-6">
        <div className="bg-gray-100 rounded-lg">
          <h5 className="px-10 py-5 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Detalle de la Entrega
          </h5>
          <div className="bg-white rounded-lg p-10">
            {/* Sección 1: Fecha y Rango de Hora */}
            <div className="flex mb-5">
              <h2 className="text-gray-600 font-semibold">Fecha y Hora</h2>
            </div>

            <div className="flex mb-5">
              <div className="flex-1 mr-4">
                <label htmlFor="date">Fecha Deseada:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full p-2 border"
                  // required
                />
              </div>

              <div className="flex-1">
                <label htmlFor="timeRange">Rango de Hora:</label>
                <input
                  type="text"
                  id="timeRange"
                  name="timeRange"
                  value={formData.timeRange}
                  onChange={handleInputChange}
                  className="w-full p-2 border"
                  placeholder="Ej. 09:00 AM - 12:00 PM"
                  // required
                />
              </div>
            </div>

            {/* Sección 2: Dirección y Ubicar en el Mapa */}
            <div className="flex mb-5">
              <h2 className="text-gray-600 font-semibold">Dirección de Entrega</h2>
            </div>

            <div className="flex mb-5">
              <div className="flex-1 mr-4">
                <label htmlFor="address">Dirección:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border"
                  // required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="reference">Referencia: (Opcional)</label>
                <input
                  type="text"
                  id="reference"
                  name="reference"
                  value={formData.reference}
                  onChange={handleInputChange}
                  className="w-full p-2 border"
                />
              </div>
            </div>

            {/* Sección 3: Opciones de Pago */}
            <div className="mb-4">
              <p>Opciones de Pago:</p>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="cash"
                  name="paymentMethod"
                  value="cash"
                  checked={formData.paymentMethod === "cash"}
                  onChange={handleInputChange}
                />
                <label htmlFor="cash" className="ml-2 flex items-center">
                  <span className="mr-2">Efectivo</span>
                  <img
                    src="src\assets\icons\money-cash-svgrepo-com.svg"
                    alt={`Placeholder Image for ${name}`}
                    className="object-cover w-10 h-10 min-w-fit"
                  />
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="card"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === "card"}
                  onChange={handleInputChange}
                />
                <label htmlFor="card" className="ml-2 flex items-center">
                  <span className="mr-2">Tarjeta Crédito/Débito</span>
                  <img
                    src="src\assets\icons\visa-svgrepo-com.svg"
                    alt={`Placeholder Image for ${name}`}
                    className="object-cover w-10 h-10 min-w-fit"
                  />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === "paypal"}
                  onChange={handleInputChange}
                />
                <label htmlFor="card" className="ml-2 flex items-center">
                  <span className="mr-2">Paypal</span>
                  <img
                    src="src\assets\icons\paypal-svgrepo-com.svg"
                    alt={`Placeholder Image for ${name}`}
                    className="object-cover w-10 h-10 min-w-fit"
                  />
                </label>
              </div>
            </div>

            {/* Add more form fields as needed */}
          </div>
        </div>
      </div>
      {/* Lado derecho, donde esta el Resumen de compra y el Boton */}
      <div className="col-span-4 p-6">
        <div className="mb-4">
          <PurchaseSummary purchases={purchaseListTestData} />
        </div>
        <BotonPago type="submit" className="w-full" ip={ip}/>
      </div>
    </form>
  );
};

export default Checkout;
