import { Component, inject } from '@angular/core';
import { JuntaAndaluciaService } from '../../services/junta-andalucia.service';
import { IInstalacionMuseistica } from '../../interfaces/iinstalacion-museistica';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-museos-andalucia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './museos-andalucia.component.html',
  styleUrl: './museos-andalucia.component.css'
})
export class MuseosAndaluciaComponent {
  private juntaAndaluciaService = inject(JuntaAndaluciaService);
  public cargando : boolean = false;
  public museos : IInstalacionMuseistica[] = [];

  cargarDatos() {
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
  }

}
