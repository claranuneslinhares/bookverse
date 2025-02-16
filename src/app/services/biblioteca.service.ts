import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  private livrosFavoritos: any[] = [];

  constructor() {}

  adicionarAosFavoritos(livro: any) {
    if (!this.livrosFavoritos.some(l => l.id === livro.id)) {
      this.livrosFavoritos.push(livro);
    }
  }

  removerDosFavoritos(id: string) {
    this.livrosFavoritos = this.livrosFavoritos.filter(livro => livro.id !== id);
  }

  obterFavoritos() {
    return this.livrosFavoritos;
  }
}