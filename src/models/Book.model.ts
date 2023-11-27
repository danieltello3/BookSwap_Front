import { Usuario } from "./Usuario.model";

export interface Book {
    id: number;
    titulo: string;
    categoria?:string[];
    estado: string;
    ISBN?: string;
    idioma?: string;
    numero_paginas?: number;
    fecha_publicacion?: string;
    editorial?:string;
    autor?: string;
    precio:number;
    imagen_url: string;
    encuadernacion?:string;
    sinopsis?:string
    vendedor?: Usuario;
}
