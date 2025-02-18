import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  this.carregarLivrosPopulares();
}

carregarLivrosPopulares(): void {
  this.bookService.buscarLivros('livros populares').subscribe(response => {
    this.livrosPopulares = response;
  });
}
}