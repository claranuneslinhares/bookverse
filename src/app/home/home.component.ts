import { Component,  } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{}
  