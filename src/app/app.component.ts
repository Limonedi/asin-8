import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aaaaaa';

  persona = { nombre: '', edad: 0 };
  personas = [
    { nombre: 'Año viejo', edad: 2022 }
  ];

  agregar() {
    this.personas.push(this.persona);
    this.persona = { nombre: '', edad: 0 }
  }
}