import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent, ReactiveFormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css',
})
export class EditarComponent {
  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  info: any;

  editForm = new FormGroup({
  id: new FormControl(''),
  title: new FormControl(''),
  price: new FormControl(''),
  description: new FormControl(''),
  images: new FormControl(''),
  });

  ngOnInit() {
    let productoId = this.route.snapshot.paramMap.get('id');
    this.api.getProduct(productoId).subscribe((data: any) => {
      this.editForm.setValue({
        id: data.id,
        title: data.title,
        price: data.price,
        description: data.description,
        images: data.images[0],
      });
    });
  }

  onSubmit(form:any) {  
    const producto = {
      id: this.editForm.value.id,
      title: form.title,
      price: form.price,
      description: form.description,
      images: [form.images],
    };

    this.api.putProduct(producto).subscribe((data: any) => {
      console.log(data);
      this.salir();
    });
  }
    

  salir() {
    this.router.navigate(['']);
  }
}