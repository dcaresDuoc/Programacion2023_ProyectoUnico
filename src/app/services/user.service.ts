import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }
  guardarUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(`${this.apiUrl}/usuarios/createUser`, usuario);
  }

  obtenerUsuario(username: string) {
    return this.http.get<Usuario>(`${this.apiUrl}/usuarios/buscaruser/${username}`);
  }

  eliminarUsuario(usuarioId: number) {
    return this.http.delete<void>(`${this.apiUrl}/usuarios/deleteUser?id=${usuarioId}`);
  }


}