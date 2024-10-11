import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GaleriComponent } from './galeri/galeri.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DuyuruComponent } from './duyuru/duyuru.component';
import { RegisterComponent } from './register/register.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { ButeoButeoComponent } from './buteo-buteo/buteo-buteo.component';
import { KaynaklarComponent } from './kaynaklar/kaynaklar.component';

export const routes: Routes = [
    {path: "dashboard", component: DashboardComponent},
    {path: "galeri", component: GaleriComponent},
    {path: "", component: HomeComponent},
    {path: "contact", component: ContactComponent},
    {path: 'duyuru/:id', component: DuyuruComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'form', component: FormComponent},
    {path: 'login', component: LoginComponent},
    {path: 'buteo-buteo', component: ButeoButeoComponent},
    {path: 'kaynaklar', component: KaynaklarComponent}


];
