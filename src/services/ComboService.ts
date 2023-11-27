import { CategoriaOption } from "../models/Categoria.model";
import { ComboResponse } from "../models/Combo.model";
import { api } from "../providers/Api";

export const obtenerComboCategorias = async () => {
  const {data} = await api.COMBOS.categorias();
  const adapter: CategoriaOption[] = data.content.map((item:ComboResponse)=>({
    id: item.id,
    nombre: item.name
  })) 
  return adapter;
}