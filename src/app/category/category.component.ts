import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: { name: string, image: string }[] = [];

  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {
    this.data.getCategory().subscribe((res: string[]) => {
      res.forEach(category => {
        this.data.getProducts(category).subscribe(productRes => {
          const firstProduct = productRes.products[0];
          this.categories.push({
            name: category,
            image: firstProduct?.thumbnail || 'https://via.placeholder.com/400x250?text=No+Image'
          });
        });
      });
    });
  }

  goToCategory(category: string): void {
  this.router.navigate(['/products', category]);
}
}
