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
        <div className="flex flex-row gap-5">
            <img src={props.img_url} alt="libro" className="w-1/5"></img>
            
            <div className="w-3/5 flex flex-col">
              <p className="font-bold text-xl">{props.titulo}</p>
              <p>{props.autor}</p>
              <b>S/. {props.precio}</b>
              <br></br>
              <p>{props.editorial} &#40;{props.fecha_publicacion}&#41;</p>
              <p>Número de páginas: {props.num_paginas}</p>
              <p>Estado: {props.estado}</p>
            </div>
            
            <div className="flex flex-col-reverse w-1/5">
              
            </div>
            

        </div>
    )
  }
  
  export default WishCard