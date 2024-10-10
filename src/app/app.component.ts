import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // CommonModule eklendi
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from './services/flowbite.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], // CommonModule'ü imports'a ekledik
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin-joseph';
  flowbiteService = inject(FlowbiteService);
  router = inject(Router);
  showMenuAndFooter: boolean = true;

  constructor() {
    // Router eventlerini dinleyerek, hangi sayfada olduğumuzu kontrol ediyoruz
    this.router.events.subscribe(() => {
      this.showMenuAndFooter = this.router.url !== '/dashboard';
    });
  }

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      console.log('Flowbite yüklendi', flowbite);
    });
  }

  duyuruEkle() {
    this.router.navigateByUrl('/form');
  }
}