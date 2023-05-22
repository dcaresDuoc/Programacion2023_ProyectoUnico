import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { environment } from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  guardarUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(`${this.apiUrl}/usuarios/`, usuario);
  }

  obtenerUsuario(username: string) {
    return this.http.get<Usuario>(`${this.apiUrl}/usuarios/${username}`);
  }

  obtenerUsuarioPorRut(rut: string) {
    return this.http.get<Usuario>(`${this.apiUrl}/usuarios/${rut}`);
  }

  obtenerUsuarioPorEmail(email: string) {
    return this.http.get<Usuario>(`${this.apiUrl}/usuarios/${email}`);
  }

  eliminarUsuario(usuarioId: number) {
    return this.http.delete<void>(`${this.apiUrl}/usuarios/${usuarioId}`);
  }
}