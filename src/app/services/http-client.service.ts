import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Song } from '../interfaces/song';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  static URL = './data.json';
  private canciones: Song[] = [];
  constructor(private httpClient: HttpClient) {
    this.getSongs();
  }
  private getSongs(): void {
    //Método get de HttpClient devuelve un objeto Observable
    this.httpClient.get<Song[]>(HttpClientService.URL).subscribe(
      {
        next: (retorno: Song[]) => {
          this.procesarRespuesta(retorno);
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
        }
      });
  }
  private procesarRespuesta(canciones : Song[]){
    this.canciones.push(...canciones);
  }
  public getCanciones() {
    return this.canciones;
  }
}
