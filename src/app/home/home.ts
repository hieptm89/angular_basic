import { Component, DoCheck, OnInit, NgZone, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Product } from '../shared/types/product';
import { ProductItemComponent } from "../shared/product-item/product-item";
import { HttpClient } from '@angular/common/http';
import { BlogService } from '../service/blog.service';
import { map, Subscription } from 'rxjs';

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
export class HomeComponent implements OnInit, OnDestroy {
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
  productsParent: Product[] = [];
  
  // Đếm số sảm phẩm trong Card
  get cartCountParent() {
    return this.productsParent.length;
  }

  // Xóa sản phẩm khỏi Card
  handleDeleteParent = (id: string) => {
    // console.log('card id = ', id);
    // console.log('productIndex = ', this.productsParent.findIndex(item => item.id == id));
    // this.productsParent = this.productsParent.filter(item => item.id !== id);
    // this.blogService.deleteBlock(id);

    this.blogService.deleteBlock(id).subscribe((res: any) => {
      // Nếu API trả về thành công (data === 1) -> lọc bỏ sản phẩm khỏi mảng giao diện
      if (res?.data === 1) {
        this.productsParent = this.productsParent.filter((item) => item.id !== id);
      }else{
        console.log('aaaa');
      }
    });
  }

  /* Life cycle - Start */
  // 1. Constructor: Khởi tạo component, thường dùng để Dependency Injection (inject service)
  // Inject HttpClient thông qua constructor

  getBlogApi : Subscription;

  constructor(private blogService: BlogService) {
    console.log('Initialize component (constructor)');
    this.getBlogApi = new Subscription();
  }
 

  // 2. ngOnInit: Chạy một lần sau khi template/view đã render xong
  ngOnInit(): void {
    console.log('HomeComponent ngOnInit start');

    // Gọi API lấy danh sách Blogs
    this.getBlogApi = this.blogService.getBlogs().pipe(
      map(({ data }) => {
        return data.map((item: any) => {
          return {
            ...item,
            name: item.title,
            price: Number(item.body)
          };
        }).filter(product => product.price >= 300000);
      })
    ).subscribe((res) => {
      this.productsParent = res;
    });
  }

   ngOnDestroy(): void {
    if(this.getBlogApi){
      this.getBlogApi.unsubscribe();
      console.log('getBlogApi unsubcrible');
    }
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
