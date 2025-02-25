import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  private usuarioLogado: string | null = null;

  constructor() {
    this.usuarioLogado = localStorage.getItem('usuarioLogado'); // Mantém login após reload
  }

  login(usuario: string) {
    this.usuarioLogado = usuario;
    localStorage.setItem('usuarioLogado', usuario);
  }

  logout() {
    this.usuarioLogado = null;
    localStorage.removeItem('usuarioLogado');
  }

  getUsuarioLogado(): string | null {
    return this.usuarioLogado;
  }
}

