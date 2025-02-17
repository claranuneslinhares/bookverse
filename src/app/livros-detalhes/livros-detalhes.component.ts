import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from '../services/biblioteca.service';
import { BookService, LivroGoogle } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-livros-detalhes',
  standalone: true,
  imports: [FormsModule, CommonModule,],
  templateUrl: './livros-detalhes.component.html',
  styleUrl: './livros-detalhes.component.css'
})
export class LivrosDetalhesComponent implements OnInit {
  livroId: any;
  constructor(private bibliotecaService: BibliotecaService, private bookService: BookService, private route: ActivatedRoute) {}

  favoritarLivro() {
    this.bibliotecaService.adicionarAosFavoritos(this.livroId);
    alert('Livro favoritado!');
  }
  ngOnInit(){
   const id=
   this.route.snapshot.paramMap.get('id');
   if(id){

  this.bookService.getLivroGoogle(id).subscribe((livro:any) => {this.livroId=livro});
}
}
}