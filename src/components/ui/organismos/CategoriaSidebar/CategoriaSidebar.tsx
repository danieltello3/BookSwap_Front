import { CategoriaOption } from "../../../../models/Categoria.model";
import Category from "../../moleculas/Category/Category";

interface CategoriaSidebarProps {
  title: string;
  options: CategoriaOption[];
}

const CategoriaSidebar: React.FC<CategoriaSidebarProps> = ({title,options}) => {
  return (
    <div className="flex flex-col w-1/5 border p-2 gap-4 rounded border-solid border-black">
        <h1 className="font-bold text-2xl ">{title}</h1>
        <div>
         {options?.map((option) => (
          <Category key={option.id} name={option.nombre} id={option.id} />
         ))}
        </div>
      </div>
  )
}

export default CategoriaSidebar