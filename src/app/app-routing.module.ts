import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'mentions-legales', component: MentionsLegalesComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
