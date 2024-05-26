import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { NgFor } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterOutlet, NgFor, CardComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  title = 'Cards';
  products = [];

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.api.getProducts().subscribe((data: any) => {
      /* data.map((item: any) => {


        let imageStringify = JSON.stringify(item.images); // convertimos el array de imagenes a string
        
        
        let imageNoGarbage = imageStringify
        
        
        .substring(2, imageStringify.length - 2)
        
        
        .replaceAll('\\', ' ')
        
        
        .replaceAll('""', '"')
        
        
        .replaceAll('" "', '"')
        
        
        .replaceAll(' ', '');
        
        
        try {
        
        
        item.images = JSON.parse(imageNoGarbage);
        
        
        item.imagesActual = item.images[0];
        
        
        } catch (e) {}
        
        
        }); */
      this.products = data.results;
      console.log(this.products);
    });
  }

  addProduct() {
    this.router.navigate(['agregar']);
  }
}