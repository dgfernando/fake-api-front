import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent,ReactiveFormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {

  constructor(private api: ApiService, private router: Router,  private route: ActivatedRoute,) {}

  titulo = new FormControl('');
  precio = new FormControl('');
  descripcion = new FormControl('');
  categoria = new FormControl();
  imagen = new FormControl('');

  onSubmit(){
    const newProduct = {
      title: this.titulo.value,
      price: this.precio.value,
      description: this.descripcion.value,
      categoryId: this.categoria.value,
      images: [this.imagen.value]
    }

    this.api.postProduct(newProduct).subscribe(data => {
    this.salir();
    });
  }

  salir(){
    this.router.navigate(['']);
  }

}