import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
      
  ],
  templateUrl: './detail.html',
  styleUrl: './detail.css'
})
export class DetailComponent {
  id = '';

  constructor(private route: ActivatedRoute) {
    this.id = String(route.snapshot.paramMap.get('id')) ;
  }



}
