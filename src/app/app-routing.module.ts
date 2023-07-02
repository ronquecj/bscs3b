import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainNavComponent } from './main-nav/main-nav.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'footer', component: FooterComponent },
  {
    path: 'main',
    component: MainNavComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./main-nav/main-nav.module').then(
            (m) => m.MainNavModule
          ),
      },
    ],
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
