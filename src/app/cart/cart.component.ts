import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [CommonModule],
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(public data: DataService) {}

  get total() {
    return this.data.cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  }

  increaseQty(item: any) { item.qty++; }
  decreaseQty(item: any) { if(item.qty > 1) item.qty--; }
  removeItem(item: any) { this.data.removeFromCart(item); }
  
}
