import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  title: string = 'Form Sayfası';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  phone: string = '';
  dob: string = '';
  profileImage: File | null = null;

  constructor() {}

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.profileImage = file;
    }
  }

  onSubmit() {
    // Form verilerini işleme
    console.log('Ad:', this.firstName);
    console.log('Soyad:', this.lastName);
    console.log('E-posta:', this.email);
    console.log('Kullanıcı Adı:', this.username);
    console.log('Şifre:', this.password);
    console.log('Şifre Tekrarı:', this.confirmPassword);
    console.log('Telefon Numarası:', this.phone);
    console.log('Doğum Tarihi:', this.dob);
    if (this.profileImage) {
      console.log('Profil Resmi:', this.profileImage.name);
    }
  }
}