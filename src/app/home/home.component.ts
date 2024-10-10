import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DuyuruService } from '../services/duyuru.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  duyuruService = inject(DuyuruService);
  tumDuyurular: any = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getanil();
  }

  getanil() {
    this.duyuruService.getTumDuyuru().subscribe((gelenVeri) => {
      this.tumDuyurular = gelenVeri;
    })
  };

  
  goToDetail(id: number) {
    this.router.navigate(['/duyuru/', id]);
  }

}
