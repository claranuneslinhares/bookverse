import { Injectable } from '@angular/core';
import { LivroGoogle } from './book.service';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  private favoritos: any[] = [];

  obterFavoritos(): any[] {
    return this.favoritos;
  }

  adicionarAosFavoritos(livro: any) {
    if (!this.favoritos.some(fav => fav.id === livro.id)) {
      this.favoritos.push(livro);
    }
  }

  removerDosFavoritos(id: string) {
    this.favoritos = this.favoritos.filter(livro => livro.id !== id);
  }
}