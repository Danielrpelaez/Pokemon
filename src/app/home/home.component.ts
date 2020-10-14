import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'C:/Trabajo soporte/Alexis/Universidad/FRON-END/Pokemon-master/Pokemon-master/src/servicio/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor(public _servicio: ServicioService) { }

  ngPokemon(): void{
      this._servicio.getPokemons().subscribe(
        (res: any)=>{
          console.log(res)
        }
        );
  }

}
