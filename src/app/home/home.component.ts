import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: { name: string, image: string }[] = [];
  groupedCategories: { name: string, image: string }[][] = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getCategory().subscribe((res: string[]) => {
      res.forEach(category => {
        this.data.getProducts(category).subscribe(productRes => {
          const firstProduct = productRes.products[0];
          this.categories.push({
            name: category,
            image: firstProduct?.thumbnail || 'https://via.placeholder.com/400x250?text=No+Image'
          });
          this.groupCategories();
        });
      });
    });
  }

  private groupCategories(): void {
    this.groupedCategories = [];
    for (let i = 0; i < this.categories.length; i += 6) {
      this.groupedCategories.push(this.categories.slice(i, i + 6));
    }
  }
}
