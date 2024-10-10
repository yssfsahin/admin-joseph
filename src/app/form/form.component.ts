import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DuyuruService } from '../services/duyuru.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  form: FormGroup;
  duyuruService = inject(DuyuruService);
  router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [''],
      baslik: [''],
      tarih: [''],
      altbaslik: [''],
      resim: ['']
    });
  }

  ngOnInit() {
    // İlk veriyi formda göster
    //this.populateForm();
  }

/**  populateForm(item) {
    this.form.patchValue({
      id: item.id,
      baslik: item.baslik,
      tarih: item.tarih,
      altbaslik: item.altbaslik,
      resim: item.resim
    });
  } */

  kaydet() {
    const data = {
      "id": this.form.value["id"],
      "baslik": this.form.value["baslik"],
      "tarih": this.form.value["tarih"],
      "altbaslik": this.form.value["altbaslik"],
      "resim": this.form.value["resim"],
    }
    this.duyuruService.yeniDuyuru(data).subscribe(() => {
      this.router.navigateByUrl('/');
    })
  }

}
