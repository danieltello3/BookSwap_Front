const VNavbar = () => {
    return (
        <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-teal-700 top-12">

            <h2 className="pl-3 mb-4 text-2xl font-semibold">Configurar Perfil</h2>

            <a href="#" className="flex items-center px-3 py-2.5 font-bold bg-white  text-teal-900 border rounded-full">
                Datos Personales
            </a>
            <a href="#"
                className="flex items-center px-3 py-2.5 font-semibold  hover:text-teal-900 hover:border hover:rounded-full">
                Medios de Pago
            </a>
        </div>
    )
}
export default VNavbar;