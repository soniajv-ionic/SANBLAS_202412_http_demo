import { Component, inject } from '@angular/core';
import { JuntaAndaluciaService } from '../../services/junta-andalucia.service';
import { IInstalacionMuseistica } from '../../interfaces/iinstalacion-museistica';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-museo',
  templateUrl: './busqueda-museo.component.html',
  styleUrls: ['./busqueda-museo.component.css']
})
export class MuseoComponent {
  cargando: boolean = false;
  museos: IInstalacionMuseistica[] = []; // Lista original de museos
  museosFiltrados: IInstalacionMuseistica[] = []; // Lista de museos filtrados
  provinciaBuscada: string = ''; // Provincia que se está buscando

  // Método para cargar los museos (simulado con datos estáticos)
  cargarDatos() {
    this.cargando = true;

    // Simulación de carga de datos (puedes reemplazar esto con una llamada HTTP real)
    setTimeout(() => {
      this.museos = [
      ];

      // Filtrar museos según la provincia cuando se cargan los datos
      this.filtrarMuseos();
      this.cargando = false;
    }, 1000);
  }

  // Método para filtrar los museos por provincia
  filtrarMuseos() {
    // Si no se ha ingresado ninguna provincia, mostramos todos los museos
    if (!this.provinciaBuscada) {
      this.museosFiltrados = [...this.museos];
    } else {
      this.museosFiltrados = this.museos.filter(museo => 
        museo.province.toLowerCase().includes(this.provinciaBuscada.toLowerCase())
      );
    }
  }
}

