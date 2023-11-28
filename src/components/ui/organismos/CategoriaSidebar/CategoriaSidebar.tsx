import { useEffect, useState } from "react";
import { CategoriaOption } from "../../../../models/Categoria.model";
import { obtenerComboCategorias } from "../../../../services/ComboService";
import Category from "../../moleculas/Category/Category";

interface CategoriaSidebarProps {
}

const CategoriaSidebar: React.FC<CategoriaSidebarProps> = () => {
  const [categorias,setCategorias]= useState<CategoriaOption[]>([])

  const cargarCategorias = async () => {
    const data = await obtenerComboCategorias()
    setCategorias(data)
    //console.log(data.length)
  }

  useEffect(()=>{
    cargarCategorias()
  },[])
  
  return (
    <div className="flex flex-col w-1/5 border p-2 gap-4 rounded border-solid border-black">
        <h1 className="font-bold text-2xl ">Categorías {categorias.length}</h1>
        <div>
         {categorias?.map((option) => (
          <Category key={option.id} name={option.nombre} id={option.id} />
         ))}
        </div>
      </div>

  )
}

export default CategoriaSidebar