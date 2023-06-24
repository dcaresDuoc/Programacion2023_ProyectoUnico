export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  marca: string;
  precio: number;
  imagen: string;
  categoria: string[]; // Se asume que la categoría es un array de strings
  stock: number;
  oferta: boolean;
  cantidad: number
}

export interface Category {
  id: number;
  name: string;
}