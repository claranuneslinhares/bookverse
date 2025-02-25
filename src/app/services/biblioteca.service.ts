import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  constructor() {}

  listarFavoritos(usuario: string): any[] {
    return JSON.parse(localStorage.getItem(`favoritos-${usuario}`) || '[]');
  }

  adicionarFavorito(livro: any, usuario: string): void {
    let favoritos = this.listarFavoritos(usuario);
    if (!favoritos.some(fav => fav.id === livro.id)) {
      favoritos.push(livro);
      localStorage.setItem(`favoritos-${usuario}`, JSON.stringify(favoritos));
    }
  }

  removerDosFavoritos(livroId: string, usuario: string): void {
    let favoritos = this.listarFavoritos(usuario);
    favoritos = favoritos.filter(fav => fav.id !== livroId);
    localStorage.setItem(`favoritos-${usuario}`, JSON.stringify(favoritos));
  }
  isFavorito(livroId: string, usuario: string): boolean {
    const favoritos = this.listarFavoritos(usuario);
    return favoritos.some(fav => fav.id === livroId);
  }
}