import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product2',
  imports: [],
  templateUrl: './product2.component.html',
  styleUrl: './product2.component.css'
})
export class Product2Component {
  private products: string[] = [
    'Mobile', 'TV', 'Laptop', 'Refridgerator', 'AC', 'Washing Machine'
  ];

  @Output() getProducts: EventEmitter<string[]> = new EventEmitter();

  loadProducts() {
    this.getProducts.emit(this.products);
  }
}
