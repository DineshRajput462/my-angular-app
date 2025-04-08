import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  count = signal(0);
  isTrue = true;

  price = signal(100);
  quantity = signal(2);
  total = computed(() => this.price() * this.quantity());

  constructor() {
    effect(() => {
      console.log(this.count());
      this.isTrue = this.count() % 2 == 0;
    })
  }

  add() {
    this.quantity.set(this.quantity() + 1);
  }

  increase() {
    this.count.set(this.count() + 1);
  }
}
