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

  yeniDuyuru() {
    const olusturulanVeri = {
      id: "yeniVeri",
      baslik: "yeniBaslik",
      tarih: "99.99.99",
      altbaslik: "yeniAltbaslik",
      resim: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/220px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
    }
    this.duyuruService.yeniDuyuru(olusturulanVeri).subscribe((yeniVeri) => {
      this.tumDuyurular.push(yeniVeri);
    });
    this.getanil();
  }

  duyuruGuncelle() {
    const olusturulanVeri = {
      id: "guncelVeri",
      baslik: "guncelBaslik",
      tarih: "19.19.19",
      altbaslik: "guncelAltbaslik",
      resim: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/220px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
    }
    this.duyuruService.duyuruGuncelle(olusturulanVeri, "yusuf").subscribe((yeniVeri) => {
    });
    this.getanil();
  }

  duyuruSilme() {
    this.duyuruService.duyuruSil("Anil").subscribe((yeniVeri) => {
    });
    this.getanil();
  }


}
