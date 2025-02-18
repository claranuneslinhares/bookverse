import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HeaderComponent,FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent { 
livrosPopulares: any[] = [];

constructor(private bookService: BookService) {}

ngOnInit(): void {
  this.carregarLivrosPorTema('aventura');
}

carregarLivrosPorTema(tema: string): void {
  this.bookService.buscarLivros(tema).subscribe(response => {
    this.livrosPopulares = response;
  });
}
}
