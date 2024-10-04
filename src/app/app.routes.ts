import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GaleriComponent } from './galeri/galeri.component';

export const routes: Routes = [
    {path: "dashboard", component: DashboardComponent},
    {path: "galeri", component: GaleriComponent}
];
