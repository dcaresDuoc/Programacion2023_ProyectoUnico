export interface ProductResponse {
    id: number;
    nombre: string;
    descripcion: string;
    precio: string;
    marca: string;
    imagen: string;
    stock: number;
    oferta: boolean;
    category: {
      id: number;
      name: string;
    }[];
  }
  