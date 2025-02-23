import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  private favoritos: any[] = [];
  private avaliacoes: { [id: string]: number } = {}; 
  constructor() {
    const storage = localStorage.getItem('favoritos');
    this.favoritos = storage ? JSON.parse(storage) : [];
    const avaliacoesStorage = localStorage.getItem('avaliacoes');
    this.avaliacoes = avaliacoesStorage ? JSON.parse(avaliacoesStorage) : {};
  }

  adicionarFavorito(livro: any) {
    this.favoritos.push(livro);
    this.salvarNoStorage();
  }

  removerFavorito(id: string) {
    this.favoritos = this.favoritos.filter(livro => livro.id !== id);
    this.salvarNoStorage();
  }

  isFavorito(id: string): boolean {
    return this.favoritos.some(livro => livro.id === id);
  }

  obterFavoritos() {
    return this.favoritos;
  }
  salvarAvaliacao(id: string, nota: number) {
    this.avaliacoes[id] = nota;
    localStorage.setItem('avaliacoes', JSON.stringify(this.avaliacoes));
  }

  getAvaliacao(id: string): number {
    return this.avaliacoes[id] || 0;
  }

  private salvarNoStorage() {
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
    localStorage.setItem('avaliacoes', JSON.stringify(this.avaliacoes));
  }
}
