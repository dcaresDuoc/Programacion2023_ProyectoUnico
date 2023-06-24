import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ProductResponse } from '../models/productResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = '/api/product'; // Cambia esto según la URL de tu servidor backend

  private headerDataSubject: Subject<string> = new Subject<string>();
  public headerData$: Observable<string> = this.headerDataSubject.asObservable();

  public enviarDatosHeader(data: string): void {
    this.headerDataSubject.next(data);
  }


  //lista del carrito
  private myList:Product[]=[];

  //carrito observable
  private myCart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.myCart.asObservable();

  addProduct(product:Product){

    if (this.myList.length === 0){
      product.cantidad = 1;
    this.myList.push(product)
    this.myCart.next(this.myList)
  }else{
    const productMod = this.myList.find((element)=>{
      return element.id === product.id
    })
    if(productMod){
      productMod.cantidad = productMod.cantidad+1;
      this.myCart.next(this.myList);
    }else{
      product.cantidad = 1;
      this.myList.push(product);
      this.myCart.next(this.myList);

    }
  }
  }

  deleteFromCarrito(id:number){
    this.myList = this.myList.filter((product) =>{
      return product.id != id
    })
    this.myCart.next(this.myList);
  }

  findProductById(id:number){
    return this.myList.find((element)=>{
      return element.id === id;
    })
  }

  totalCart(){
    const total = this.myList.reduce(function(acc, product){return acc + (product.cantidad * product.precio);},0)
    return total
  }

  



  constructor(private http: HttpClient) { }

  saveProduct(product: Product, image: File): Observable<Product> {
    const formData: FormData = new FormData();
    formData.append('file', image);
    formData.append('nombre', product.nombre);
    formData.append('descripcion', product.descripcion);
    formData.append('marca', product.marca);
    formData.append('precio', product.precio.toString());
    formData.append('stock', product.stock.toString());
    formData.append('oferta', product.oferta ? '1' : '0');

    product.categoria.forEach((category: string) => {
      formData.append('category[]', category);
    });

    return this.http.post<Product>(`${this.baseUrl}/saveProduct`, formData);
  }

  buscarProductoPorId(id: number): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${this.baseUrl}/buscarProducto/${id}`);
  }
  
  buscarProductoPorNombre(nombre: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/buscarProductoNombre/${nombre}`);
  }

  buscarProductoPorMarca(marca: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/buscarProductoMarca/${marca}`);
  }

  obtenerTodosProductos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/todosProductos`);
  }

  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/eliminarProducto/${id}`);
  }

  actualizarProducto(id: number, product: Product, image: File): Observable<Product> {
    const formData: FormData = new FormData();
    formData.append('file', image);
    formData.append('nombre', product.nombre);
    formData.append('descripcion', product.descripcion);
    formData.append('marca', product.marca);
    formData.append('precio', product.precio.toString());
    formData.append('stock', product.stock.toString());
    formData.append('oferta', product.oferta ? '1' : '0');

    product.categoria.forEach((category: string) => {
      formData.append('category[]', category);
    });

    return this.http.put<Product>(`${this.baseUrl}/actualizarProducto/${id}`, formData);
  }
}