import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { UpperCasePipe } from '../pipes/UpperCasePipe.pipe';
import { CurrencyPipe } from '../pipes/CurrencyPipe.pipe';
import { FormsModule } from '@angular/forms';
import { Product } from '../types/product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    RouterOutlet, FormsModule, 
    CurrencyPipe, UpperCasePipe, 
    NgFor, NgIf,
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

}
