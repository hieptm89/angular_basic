import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/types/product';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
      
  ],
  templateUrl: './detail.html',
  styleUrl: './detail.css'
})
export class DetailComponent implements OnInit{
  id = '';

  productItem: Product = {
    id: '0',
    name: '',
    price: 0
  }

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
    this.id = String(route.snapshot.paramMap.get('id')) ;
  }

  ngOnInit(): void {
    this.blogService.detailBlog(this.id).subscribe(({ data }: any) => {
      this.productItem.id = data.id;
      this.productItem.name = data.title;
      this.productItem.price = data.body;
    });
  }

}
