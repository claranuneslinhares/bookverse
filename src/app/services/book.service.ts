import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
export interface LivroGoogle {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
}
@Injectable({
  providedIn: 'root'
})
export class BookService { 
    private apiUrl = 'https://www.googleapis.com/books/v1/volumes?q='; 
    private apiKey = 'AIzaSyB8g6tRPJY95X2ECx9JtQS8B0R8tZCVSF4'; 
  searchBooks: any;
      
    constructor(private http: HttpClient) {}

    buscarLivros(termo: string): Observable<any[]> {
      return this.http.get<any>(`${this.apiUrl}${termo}`).pipe(
        map(response => response.items || []) // Retorna os livros encontrados
      );
    }
    getLivroGoogle(termo: string): Observable<any[]> {
      return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
        tap ((response: any) => console.log('Dados do livro:', response)) // Retorna os livros encontrados
      );
  }
}