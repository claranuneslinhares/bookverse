import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LivrosDetalhesComponent } from "./livros-detalhes/livros-detalhes.component";
import { SearchComponent } from './search/search.component';
import { LoginComponent } from "./login/login.component";
import { ComentariosComponent } from "./comentarios/comentarios.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, LivrosDetalhesComponent, SearchComponent, LoginComponent, ComentariosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bookverse';
}
