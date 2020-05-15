import { Component, OnInit } from '@angular/core';

import { UsuariosService } from 'src/app/usuarios.service';
import { Usuarios } from 'src/app/usuarios.model';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss'],
})
export class UsuariosListComponent implements OnInit {

  usuarios: Usuarios[];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {

    this.usuariosService.getUsuario().subscribe(data => {
      this.usuarios = data.map(e => {
        return {
          id: e.payload.doc.id,
        } as Usuarios;
      })
    });

  }

  create(usuario: Usuarios){
    this.usuariosService.createUsuario(usuario);
  }

  update(usuario: Usuarios) {
  this.usuariosService.updateUsuaurio(usuario);
  } 

  delete(id: string) {
  this.usuariosService.deleteUsuario(id);
  }

}
