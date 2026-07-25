import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/header-layout.component';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from './pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from './pipes/UpperCasePipe.pipe';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderLayoutComponent, FormsModule, CurrencyPipe, UpperCasePipe, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Text
  title = '';
  user = {
    name: 'John Doe',
    old: 30
  }
  // Properties
  isDisabled = false;
  cartCountParent = 0;

  // Attributes
  htmlSnipet = '<strong style="color:teal">HTML động</strong>';
  active = true;

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
  
  sayHello(): void {
    this.title = "Hello world, my name is " + this.user.name + ". I am " + this.user.old + " years old.";
  }

  onBuyParent() {
    this.cartCountParent++;
    console.log('Mua hàng được click');
  }

  // Two way binding
  userName = "";

  // List render
  products = [
    {
      name: 'samba og',
      price: 40000
    },
    {
      name: 'n F1',
      price: 50000
    },
    {
      name: 'giày Adidas',
      price: 60000
    },
    {
      name: 'giày mlb',
      price: 70000
    }
  ];

}
