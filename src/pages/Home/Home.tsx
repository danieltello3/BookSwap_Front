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
const Home = () => {
  return (
    <div className="flex w-full p-6 gap-4">
      <CategoriaSidebar title="Categorias" options={options} />
      <div className="flex flex-col gap-5 w-full">
        <div
          className="h-96 bg-cover rounded-3xl"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
          }}></div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl">Destacados</h1>
          <div className="flex gap-4 p-4">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
