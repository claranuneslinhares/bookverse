import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  private favoritosKey = 'livrosFavoritos';

  constructor() {}

  obterFavoritos(): any[] {
    return JSON.parse(localStorage.getItem(this.favoritosKey) || '[]');
  }

  adicionarFavorito(livro: any) {
    const favoritos = this.obterFavoritos();
    const jaExiste = favoritos.some((item) => item.id === livro.id);

    if (!jaExiste) {
      favoritos.push(livro);
      localStorage.setItem(this.favoritosKey, JSON.stringify(favoritos));
      console.log(`Livro "${livro.title}" favoritado!`);
    } else {
      console.log(`O livro "${livro.title}" já está nos favoritos.`);
    }
  }

  removerFavorito(id: string) {
    let favoritos = this.obterFavoritos();
    favoritos = favoritos.filter((livro) => livro.id !== id);
    localStorage.setItem(this.favoritosKey, JSON.stringify(favoritos));
  }
}

