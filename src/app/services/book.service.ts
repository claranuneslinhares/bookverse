import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService { 
    private apiUrl = 'https://goodreads12.p.rapidapi.com';
  
    private headers = {
      'x-rapidapi-key': 'eb38c2101bmsh8e61218841b3f41p1d1217jsn4a2a56482591',
      'x-rapidapi-host': 'goodreads12.p.rapidapi.com',
    };
  
    constructor(private http: HttpClient) {}
  
    buscarLivrosPorPesquisa(query: string): Observable<any> {
      return this.http.get(`${this.apiUrl}/search/${query}`, {
        headers: this.headers,
      });
    }
  
    buscarLivroPorId(id: string): Observable<any> {
      return this.http.get(`${this.apiUrl}/getBookByID/${id}`, {
        headers: this.headers,
      });
    }
  }