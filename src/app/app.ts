import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/header-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderLayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Text
  title = 'Hello world';
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

  onBuyParent() {
    this.cartCountParent++;
    console.log('Mua hàng được click');
  }

}
