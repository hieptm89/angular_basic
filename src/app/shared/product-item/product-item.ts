import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { UpperCasePipe } from '../pipes/UpperCasePipe.pipe';
import { CurrencyPipe } from '../pipes/CurrencyPipe.pipe';
import { FormsModule } from '@angular/forms';
import { Product } from '../types/product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    FormsModule, 
    CurrencyPipe, UpperCasePipe, 
    NgFor,
    RouterLink
  ],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {
  // my cart
  @Input() cartCount = 0;  
  @Output() buy = new EventEmitter<void>();
  onCart() { 
    console.log('Open cart'); 
  }
  onBuyClick() { 
    this.buy.emit(); 
  }

  // cart table
  @Input() products: Product[] = [];
  @Output() dataEvent = new EventEmitter<string>();

  handleDelete = (id: string) => {    
    this.dataEvent.emit(id);
  }

  get totalPrice(): number {
    const sum = this.products.reduce((total, item) => {
      return total + item.price;
    }, 0);
    return sum; 
  }

}
