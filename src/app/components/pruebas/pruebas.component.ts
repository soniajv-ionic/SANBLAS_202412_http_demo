import { Component, Inject } from '@angular/core';
import { HttpClientService } from '../../services/http-client.service';
import { Song } from '../../interfaces/song';
import { CommonModule } from '@angular/common';
import { JuntaAndaluciaService } from '../../services/junta-andalucia.service';

@Component({
  selector: 'app-pruebas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pruebas.component.html',
  styleUrl: './pruebas.component.css'
})
export class PruebasComponent {
  canciones : Song[] = [];
  constructor(private httpClientService : HttpClientService ,private borrar : JuntaAndaluciaService) {
    this.canciones = httpClientService.getCanciones();
  }
}
