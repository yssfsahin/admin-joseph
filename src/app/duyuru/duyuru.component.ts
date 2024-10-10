import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DuyuruService } from '../services/duyuru.service';

@Component({
  selector: 'app-duyuru',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './duyuru.component.html',
  styleUrl: './duyuru.component.scss'
})
export class DuyuruComponent {
  item: any;
  duyuruService = inject(DuyuruService);
  

  constructor(private route: ActivatedRoute, http: HttpClientModule) { }

  ngOnInit(): void {
    // console.log(getParamId,'getparamid#');
    this.getYusuf();
  }

  getYusuf() {
    let acelya: any = this.route.snapshot.paramMap.get('id');
    this.duyuruService.getDuyuruById(acelya).subscribe((idyegoreveri) => {
      this.item = idyegoreveri;
    })
  }

}
