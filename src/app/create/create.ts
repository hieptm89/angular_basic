import { Component, inject } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { BlogItem } from '../shared/types/product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
      ReactiveFormsModule, NgIf
  ],
  templateUrl: './create.html',
  styleUrl: './create.css'
})
export class CreateComponent {
  // Khởi tạo FormGroup kèm các rule Validators.required
  product = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  });

  get name(){
    return this.product.get('name');
  }
  get price(){
    return this.product.get('price');
  }

  constructor(private blogService: BlogService, private router: Router){}  
  
  // Xử lý khi nhấn nút Submit / Add to cart
  handleAddCart() {
    // Nếu name hoặc price có lỗi required thì dừng không cho submit
    if (this.name?.hasError('required') || this.price?.hasError('required')) {
      return;
    }

    console.log(this.name?.value);
    console.log(this.price?.value);

    // Chuẩn hóa dữ liệu theo kiểu BlogItem
    const blogItem: BlogItem = {
      id: Math.random(),
      title: String(this.name?.value),
      body: String(this.price?.value),
      author: 'Mario'
    };

    // Gọi API postBlock
    this.blogService.postBlock(blogItem).subscribe((data: any) => {
      // Nếu dữ liệu trả về có id (tạo mới thành công) -> Chuyển về trang chủ
      if (data?.id) {
        this.router.navigate(['/']);
      }
    });
  }
}
