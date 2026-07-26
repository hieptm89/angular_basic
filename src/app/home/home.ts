import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Product } from '../shared/types/product';
import { ProductItemComponent } from "../shared/product-item/product-item";

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
export class HomeComponent {
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
    {
      id: '1',
      name: 'samba og',
      price: 1000
    },
    {
      id: '2',
      name: 'n F1',
      price: 2000
    },
    {
      id: '3',
      name: 'giày Adidas',
      price: 3000
    },
    {
      id: '4',
      name: 'giày mlb',
      price: 4000
    }
  ];
  
  // Đếm số sảm phẩm trong Card
  get cartCountParent() {
    return this.productsParent.length;
  }

  // Xóa sản phẩm khỏi Card
  handleDeleteParent = (id: string) => {
    console.log('card id = ', id);
    const productIndex = this.productsParent.findIndex(item => item.id == id);
    if(productIndex != -1) {
      this.productsParent.splice(productIndex, 1);
    }
  }

  


}
