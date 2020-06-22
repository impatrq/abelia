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
  },
  {
    path: 'ficha-medica-enfermedades',
    loadChildren: () => import('./ficha-medica-enfermedades/ficha-medica-enfermedades.module').then( m => m.FichaMedicaEnfermedadesPageModule)
  },
  {
    path: 'instrucciones-ficha-medica',
    loadChildren: () => import('./instrucciones-ficha-medica/instrucciones-ficha-medica.module').then( m => m.InstruccionesFichaMedicaPageModule)
  },
  {
    path: 'ficha-medica',
    loadChildren: () => import('./ficha-medica/ficha-medica.module').then( m => m.FichaMedicaPageModule)
  },  {
    path: 'pagina-inicial',
    loadChildren: () => import('./pagina-inicial/pagina-inicial.module').then( m => m.PaginaInicialPageModule)
  },
  {
    path: 'generarapodo',
    loadChildren: () => import('./generarapodo/generarapodo.module').then( m => m.GenerarapodoPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
