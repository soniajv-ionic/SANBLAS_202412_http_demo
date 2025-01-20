import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PruebasComponent } from "./components/pruebas/pruebas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PruebasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SANBLAS_202412_http_demo';
}
