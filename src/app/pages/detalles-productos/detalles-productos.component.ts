import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalles-productos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalles-productos.component.html',
  styleUrl: './detalles-productos.component.css'
})
export class DetallesProductosComponent {

  servicio=inject(ActivatedRoute)
  juegos=[{
    id:"juego1",
    nombre:"Crash Bandicot",
    precio:30,
    categoria:'aventura',
    img:"../../../assets/images/crash.png"
  },
  {
    id:"juego2",
    nombre:"GTA V",
    precio:40,
    categoria:'accion',
    img:"../../../assets/images/gtav.png"
    
  },
  {
    id:"juego3",
    nombre:"FIFA 24",
    precio:50,
    categoria:'deportes',
    img:"../../../assets/images/fifa24.png"
  },
  {
    id:"juego4",
    nombre:"Fortnite",
    precio:45,
    categoria:'batalla',
    img:"../../../assets/images/fortnite.png"
  },
  {
    id:"juego5",
    nombre:"The Last of us",
    precio:55,
    categoria:'drama',
    img:"../../../assets/images/lastofus.png"
  },
  {
    id:"juego6",
    nombre:"Tekken 8",
    precio:60,
    categoria:'peleas',
    img:"../../../assets/images/tekken8.png"
  },
  {
    id:"juego7",
    nombre:"Mortal Kombat",
    precio:38,
    categoria:'peleas',
    img:"../../../assets/images/mortalkombat.png"
  },
  {
    id:"juego8",
    nombre:"Spiderman 2",
    precio:60,
    categoria:'superheroes',
    img:"../../../assets/images/spiderman2.png"
  },
  {
    id:"juego9",
    nombre:"God of War",
    precio:70,
    categoria:'accion',
    img:"../../../assets/images/godofwar.png"
  },
  {
    id:"juego10",
    nombre:"Minecraft",
    precio:35,
    categoria:'aventura',
    img:"../../../assets/images/minecraft.png"
  },]

  id:any
  item:any
  ngOnInit() {
    
    this.servicio.params.subscribe(parametro =>{
      console.log(parametro['idJuegos']);
      this.id=parametro['idJuegos']
      for(let juego of this.juegos){
        if(juego.id==this.id){
          this.item=juego
        }
      }

    })
  }
}
