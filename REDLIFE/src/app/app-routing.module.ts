import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logoreg',
    loadChildren: () => import('./logoreg/logoreg.module').then( m => m.LogoregPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'recuperacioncontrasena',
    loadChildren: () => import('./recuperacioncontrasena/recuperacioncontrasena.module').then( m => m.RecuperacioncontrasenaPageModule)
  },
  {
    path: 'cerrarsesion',
    loadChildren: () => import('./cerrarsesion/cerrarsesion.module').then( m => m.CerrarsesionPageModule)
  },  {
    path: 'ficha-medica-enfermedades',
    loadChildren: () => import('./ficha-medica-enfermedades/ficha-medica-enfermedades.module').then( m => m.FichaMedicaEnfermedadesPageModule)
  },
  {
    path: 'ficha-medica-medicacion',
    loadChildren: () => import('./ficha-medica-medicacion/ficha-medica-medicacion.module').then( m => m.FichaMedicaMedicacionPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
