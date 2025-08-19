import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-single-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  amount: number = 1;
  par: any;
  singleProduct: any;

  constructor(private _DataService: DataService, private _ActivatedRoute: ActivatedRoute) {
    this.par = this._ActivatedRoute.snapshot.params['id'];
    this._DataService.getSingleProduct(this.par).subscribe((data) => {
      this.singleProduct = data;
    });
  }

  addToCart() {
    if (this.singleProduct) this._DataService.addToCart(this.singleProduct);
  }

  removeFromCart() {
    if (this.singleProduct) this._DataService.removeFromCart(this.singleProduct);
  }
}
