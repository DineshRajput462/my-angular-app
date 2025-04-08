import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  showTshirts() {
    this.router.navigate(['tshirts'], { relativeTo: this.activatedRoute });
  }

  showTrousers() {
    this.router.navigate(['trousers'], { relativeTo: this.activatedRoute });
  }
}
