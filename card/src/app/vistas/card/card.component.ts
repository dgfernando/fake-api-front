import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  constructor(private router: Router, private api: ApiService) { }

  @Input() producto?: any;

  edit(id:number){
    this.router.navigate(['editar', id]);
  }

  delete(id:number){
    this.api.deleteProduct(id).subscribe((res) => {
      location.reload();
    })
  }

}
