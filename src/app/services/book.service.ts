import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService { 
    private apiUrl = 'https://goodreads12.p.rapidapi.com/getBookByID';
  
    constructor(private http: HttpClient) {}
  
    getBooks(): Observable<any> {
      return this.http.get(this.apiUrl, {
        headers: {
          'x-rapidapi-key': 'Sign Up for Key',
          'x-rapidapi-host': 'goodreads12.p.rapidapi.com',
        },
      });
    }
  
    searchBooks(query: string): Observable<any> {
      return this.http.get(`${this.apiUrl}?search=${query}`, {
        headers: {
          'x-rapidapi-key': 'Sign Up for Key',
          'x-rapidapi-host': 'goodreads12.p.rapidapi.com',
        },
      });
    }
  
    getBookById(id: string): Observable<any> {
      return this.http.get(`${this.apiUrl}?id=${id}`, {
        headers: {
          'x-rapidapi-key': 'Sign Up for Key',
          'x-rapidapi-host': 'goodreads12.p.rapidapi.com',
        },
      });
    }
  }

