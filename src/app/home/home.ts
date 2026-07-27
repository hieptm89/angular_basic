import { Component, DoCheck, OnInit, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Product } from '../shared/types/product';
import { ProductItemComponent } from "../shared/product-item/product-item";
import { HttpClient } from '@angular/common/http';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    NgFor, NgIf, NgClass, NgStyle,
    ProductItemComponent
],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  // Text
  title = '';
  user = {
    name: 'John Doe',
    old: 30
  }
  // Properties
  isDisabled = false;  

  // Attributes
  htmlSnipet = '<strong style="color:teal">HTML động</strong>';
  active = true;

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
  
  sayHello(): void {
    this.title = "Hello world, my name is " + this.user.name + ". I am " + this.user.old + " years old.";
  }

  // Two way binding
  userName = "";

  // List render
  students = [
    {
      id: '1',
      name: 'tran van a'
    },
    {
      id: '2',
      name: 'tran van b'
    }
  ];

  // Directive
  isVisible: boolean = true; // structural
  isActive: boolean = true; // attribute

  // DS sản phẩm
  productsParent: Product[] = [
    // {
    //   id: '1',
    //   name: 'samba og',
    //   price: 1000
    // },
    // {
    //   id: '2',
    //   name: 'n F1',
    //   price: 2000
    // },
    // {
    //   id: '3',
    //   name: 'giày Adidas',
    //   price: 3000
    // },
    // {
    //   id: '4',
    //   name: 'giày mlb',
    //   price: 4000
    // }
  ];
  
  // Đếm số sảm phẩm trong Card
  get cartCountParent() {
    return this.productsParent.length;
  }

  // Xóa sản phẩm khỏi Card
  handleDeleteParent = (id: string) => {
    console.log('card id = ', id);
    console.log('productIndex = ', this.productsParent.findIndex(item => item.id == id));
    this.productsParent = this.productsParent.filter(item => item.id !== id);
  }

  /* Life cycle - Start */
  // 1. Constructor: Khởi tạo component, thường dùng để Dependency Injection (inject service)
  // Inject HttpClient thông qua constructor
  constructor(private blogService: BlogService) {
    // console.log('Initialize component (constructor)');
  }

  // 2. ngOnInit: Chạy một lần sau khi template/view đã render xong
  ngOnInit(): void {
    console.log('HomeComponent ngOnInit start');

    // Gọi API lấy danh sách Blogs
    this.blogService.getBlogs()
      .subscribe({
        next: ({ data, message }) => {
          console.log('Message:', message);
          console.log('Data:', data);

          // Map lại dữ liệu nhận được từ API thành cấu trúc phù hợp với UI
          this.productsParent = data.map((item: any) => {
            return {
              ...item,
              name: item.title,
              price: Number(item.body)
            };
          });
        },
        error: (err) => console.error('Fetch API error:', err)
      });
  }
 

  // 3. ngDoCheck sẽ chạy lại mỗi khi có bất kỳ sự thay đổi nào (kể cả khi state, DOM hay content có bất kỳ sự thay đổi nào)
  ngDoCheck(): void {
    // console.log('Check component (ngDoCheck executed)');
  }

  // Hàm thay đổi trạng thái ẩn component
  // handleToggleVisible(): void {
  //   this.isVisible = false; // Chuyển thành false để kích hoạt ngOnDestroy ở component con
  // }

  /* Life cycle - End */


  


}
