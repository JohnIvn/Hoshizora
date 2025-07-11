import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: 'homepage', component: HomeComponent, pathMatch: 'full' },
  { path: 'my-page', component: AboutComponent },
  { path: '**', redirectTo: 'homepage' },
];
