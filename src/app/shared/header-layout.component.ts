import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'header-layout',
  templateUrl: './header-layout.component.html',
  styleUrl: './header-layout.component.css'
})
export class HeaderLayoutComponent {
    @Input() cartCount = 0;
    @Output() buy = new EventEmitter<void>();

    onCart() { console.log('Open cart'); }
    onBuyClick() { this.buy.emit(); }
}
