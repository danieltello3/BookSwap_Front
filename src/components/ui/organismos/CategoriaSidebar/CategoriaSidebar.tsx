import { CategoriaOption } from "../../../../models/Categoria.model";
import Category from "../../moleculas/Category/Category";

interface CategoriaSidebarProps {
}

//hacer consulta que traiga las categorias
const options: CategoriaOption[] = [
  { nombre: "Arte", id: 1 },
  { id: 2, nombre: "Ciencia" },
  { id: 3, nombre: "Deportes" },
  { id: 4, nombre: "Tecnologia" },
  { id: 5, nombre: "Biografía" },
  { id: 6, nombre: "Historia" }
];

const CategoriaSidebar: React.FC<CategoriaSidebarProps> = () => {
  return (
    <div className="flex flex-col w-1/5 border p-2 gap-4 rounded border-solid border-black">
        <h1 className="font-bold text-2xl ">Categorías</h1>
        <div>
         {options?.map((option) => (
          <Category key={option.id} name={option.nombre} id={option.id} />
         ))}
        </div>
      </div>
  )
}

export default CategoriaSidebar