import CategoriaSidebar from "../../components/ui/organismos/CategoriaSidebar/CategoriaSidebar";
import { CategoriaOption } from "../../models/Categoria.model";

const options: CategoriaOption[] = [
    { nombre: "Arte", id: 1 },
    { id: 2, nombre: "Ciencia" },
    { id: 3, nombre: "Deportes" },
    { id: 4, nombre: "Tecnologia" },
    { id: 5, nombre: "Biografía" },
    { id: 6, nombre: "Historia" }
  ];
  const BookDetails = () => {
    return (
      <div className="flex w-full p-6 gap-4">
        <CategoriaSidebar title="Categorias" options={options} />
        <div className="flex flex-row- gap-10 w-full">

        
        </div>
      </div>
    );
  };
  
  export default BookDetails;
  