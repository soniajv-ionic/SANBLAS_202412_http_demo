import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { IInstalacionMuseistica } from '../interfaces/iinstalacion-museistica';

@Injectable({
  providedIn: 'root'
})
export class JuntaAndaluciaService {
  static URL = 'https://datos.juntadeandalucia.es/api/v0/museums/all?format=json';
  constructor(private httpClient: HttpClient) {}

  public getMuseos() : Observable<IInstalacionMuseistica[]> {
      //El delay es una 'ñapa' para simular un retardo en la respuesta
      return this.httpClient.get<IInstalacionMuseistica[]>(JuntaAndaluciaService.URL).pipe(delay(3000));
  }
}
