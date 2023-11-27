import Button from "../../atomos/Button/Button";

interface WishCardProps {
    img_url?: string;
    titulo?: string;
    autor?: string;
    precio?: number;
    editorial?: string;
    fecha_publicacion?:string;
    num_paginas?: number;
    estado?:string
  }
  
  const WishCard: React.FC<WishCardProps> = (props) => {
    return (
        <div className="flex flex-row gap-20 p-4 justify-center items-center">
          <div className="w-1/5">
            <img src={props.img_url} alt="libro" className="rounded-3xl"></img>
          </div>
          
          <div className="w-3/5 flex flex-col py-8">
            <p className="font-bold text-xl">{props.titulo}</p>
            <p>{props.autor}</p>
            <b>S/. {props.precio}</b>
            <br></br>
            <p>{props.editorial} &#40;{props.fecha_publicacion}&#41;</p>
            <p>Número de páginas: {props.num_paginas}</p>
            <p>Estado: {props.estado}</p>
          </div>
            
          <div className="flex flex-col justify-center items-center w-1/5 gap-y-4">
            <Button 
              variant="primary">Eliminar de lista de deseos
            </Button>
            <Button 
              variant="secondary">Agregar al carrito
            </Button>
          </div>
            
        </div>
    )
  }
  
  export default WishCard