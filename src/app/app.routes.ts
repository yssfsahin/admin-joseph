import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GaleriComponent } from './galeri/galeri.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: "dashboard", component: DashboardComponent},
    {path: "galeri", component: GaleriComponent},
    {path: "", component: HomeComponent},
    {path: "contact", component: ContactComponent}
];
