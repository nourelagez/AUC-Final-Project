import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login: any;

  constructor(public data: DataService, private _Router: Router) {}

  ngOnInit(): void {
    this.data.islogined.subscribe((x) => {
      this.login = x;
    });
  }

  logOut(): void {
    this._Router.navigate(['login']);
    this.data.islogined.next(false);
  }

  getCartCount(): number {
    const cart = this.data.cart || [];
    return cart.reduce((acc: number, item: any) => acc + (item?.qty ?? 1), 0);
  }
}
