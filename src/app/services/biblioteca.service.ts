import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  private favorites: string[] = [];

  constructor() {}

  // Verifica se o livro está nos favoritos
  isFavorite(bookId: string): boolean {
    return this.favorites.includes(bookId);
  }

  // Adiciona o livro aos favoritos
  addBookToFavorites(bookId: string): void {
    if (!this.isFavorite(bookId)) {
      this.favorites.push(bookId);
    }
  }
}

