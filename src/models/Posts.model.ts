export interface Post {
    id: number;
    PostText: string;
    PostImage: string;
    User: string;
    Like: number;
    NumeroDeComentarios: number;
    Comentarios: {
      Usuario: string;
      Comentario: string;
    }[];
  }