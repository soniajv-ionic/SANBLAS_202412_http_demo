import { Component, inject } from '@angular/core';
import { JuntaAndaluciaService } from '../../services/junta-andalucia.service';
import { IInstalacionMuseistica } from '../../interfaces/iinstalacion-museistica';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-museo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './busqueda-museo.component.html',
  styleUrls: ['./busqueda-museo.component.css']
})
export class MuseoComponent {
  cargando: boolean = false;
  museos: IInstalacionMuseistica[] = []; // Lista original de museos
  museosFiltrados: IInstalacionMuseistica[] = []; // Lista de museos filtrados
  provinciaBuscada: string = ''; // Provincia que se está buscando
   private juntaAndaluciaService = inject(JuntaAndaluciaService);

  // Método para cargar los museos (simulado con datos estáticos)
  cargarDatos() {
    this.cargando = true;

    // Simulación de carga de datos (puedes reemplazar esto con una llamada HTTP real)
    this.cargando = true;
    this.juntaAndaluciaService.getMuseos().subscribe(
      {
        next: (retorno: IInstalacionMuseistica[]) => {
          this.museos = retorno;
        },
        error: (error: HttpErrorResponse) => {
          //error es de tipo HttpErrorResponse
          console.log("Error name :" + error.name);
          console.log("Error message:" + error.message);
          console.log("Error error:" + error.error);
          console.log("Error ok:" + error.ok);
        },
        complete: () => {
          console.log("Complete");
          this.cargando = false;
        }
      });

      // Filtrar museos según la provincia cuando se cargan los datos
      this.filtrarMuseos();
      this.cargando = false;

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

