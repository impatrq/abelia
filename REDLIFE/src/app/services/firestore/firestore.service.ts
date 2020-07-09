import { Injectable } from '@angular/core';
import { user} from '../../shared/user.class';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth.service';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap, refCount } from 'rxjs/operators';

import { fichamedica } from '../../shared/ficha-medica.class'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  user:user;
  private usuario: user;
  private usuariomanejador: BehaviorSubject<user>;
  private usuarioestado: Observable<user>;
  private RefDb;

  fichamedica:fichamedica;
  private datosfichamedica: fichamedica;
  private datosfichamedicamanejador: BehaviorSubject<fichamedica>;
  private datosfichamedicaestado: Observable<fichamedica>;

  constructor (private db: AngularFirestore) {
    this.usuario = undefined;
    this.usuariomanejador = new BehaviorSubject<user>(undefined);
    this.usuarioestado = this.usuariomanejador.asObservable();
    this.usuarioestado.subscribe((usuarionuevo:user)=>{
      this.usuario=usuarionuevo
    })
    
    this.datosfichamedica = undefined;
    this.datosfichamedicamanejador = new BehaviorSubject<fichamedica>(undefined);
    this.datosfichamedicaestado = this.datosfichamedicamanejador.asObservable();
    this.datosfichamedicaestado.subscribe((datosfichamedicanuevos:fichamedica)=>{
      this.datosfichamedica=datosfichamedicanuevos
    })

  }
anadirusuario(usuario){
    this.db.collection('usuarios').add({
    email : usuario.email,
    id : usuario.id
    }).then((docRef)=>{
      usuario.idfb = docRef.id;
      this.actualizarusuario(usuario);
    })    
    }
  actualizarusuario(usuario){
    this.usuario = usuario;
    this.usuariomanejador.next(usuario);
  }  
  generarapodo(apodo){
    this.usuario.user= apodo;
    this.actualizarusuario(this.usuario);
    console.log(this.usuario);
    this.db.collection('usuarios').doc(this.usuario.idfb).set({
      user: this.usuario.user,
      }, { merge: true }) //merge es para combinar datos
    }
  obtenernombredeusuario(){
    const a = this.db.collection('usuarios').doc(this.usuario.idfb);
    a.get().forEach((doc)=> {
      console.log(doc.data().user);
    })
  }
  traerdatos(){
      const b = this.db.collection('usuarios').doc(this.usuario.idfb);
      b.get().forEach((doc)=> {
      console.log(doc.data().user);
      console.log(doc.data().email);
      console.log(doc.data().id);
    })
  }
  traerdatoscontraercolleccion(){
      this.traercoleccion();
      this.RefDb.subscribe((res)=>{
        res.forEach((usuario:user)=>{
              this.actualizarusuario(usuario);
              console.log('datos' , this.usuario);
        })
       })
  }
  anadirdatosfichamedica(fichamedica){
          this.db.collection('usuarios').doc(this.usuario.idfb).set({
            FMNombreCompleto: fichamedica.nombrecompleto,
            FMEdad: fichamedica.edad,
            FMAltura: fichamedica.altura,
            FMPeso: fichamedica.peso,
            FMDni: fichamedica.dni,
            FMFechaDeNacimiento: fichamedica.fechadenacimiento,
            FMSexo: fichamedica.sexo,
            FMObraSocial: fichamedica.obrasocial,
            FMNumeroDeAfiliado: fichamedica.numerodeafiliado,
            FMGrupoSanguineo: fichamedica.gruposanguineo,
            FMDireccionDeResidencia: fichamedica.direccionderesidencia,
            FMPisoYoDepartamento: fichamedica.pisoydepartamento,
            FMLocalidadDeResidencia: fichamedica.localidadderesidencia,
            FMProvinciaDeResidencia: fichamedica.provinciaderesidencia,
            FMNumeroDeContactoDeEmergencia: fichamedica.numerodecontactodeemergencia,
            FMNombreCompletoDelMedico: fichamedica.nombrecompletodelmedico,
            FMNumeroDelMedico: fichamedica.numerodelmedico,
            FMEnfermedades: fichamedica.enfermedades,
            FMMedicaciones: fichamedica.medicaciones,
            FMOtraenfermedad: fichamedica.otraenfermedad,
            FMOtramedicacion: fichamedica.otramedicacion,
          },{merge: true})
  }
    
        
        

  
  

        
        
    /*traerdatoscontraercoleccion(){
      this.traercoleccion();
      this.RefDb.get().forEach((doc)=>{
      console.log(doc);
      /*.data().user);
      console.log(doc.data().email);
      console.log(doc.data().id);
      })
    } 
  */
    //'items', ref => ref.where('size', '==', 'large'))
  traercoleccion(){
   this.RefDb = this.db.collection('usuarios', ref => ref.where( "id", "==" , this.usuario.id)).valueChanges()
     }}
    /*this.traercoleccion().subscribe((res)=>{
     console.log(res);      
    })
    DocumentReference docRef = db.collection("cities").document("BJ");
docRef.get().addOnSuccessListener(new OnSuccessListener<DocumentSnapshot>() {
  @Override
  public void onSuccess(DocumentSnapshot documentSnapshot) {
      City city = documentSnapshot.toObject(City.class);
  }
});
    this.db.collection('usuarios').doc(this.usuario.idfb).data()
    }
    'items', ref => ref.where('size', '==', 'large'))
  traercoleccion(){
    return this.RefDb = this.db.collection('usuarios', ref => ref.where( "id", "==" , this.usuario.id)).valueChanges()
    }*/

    /*anadirdatosfichamedica(fichamedica){
      this.db.collection('usuarios').doc(this.usuario.idfb).set({
        NombreCompleto: fichamedica.nombrecompleto,
        Altura: fichamedica.altura,
        Peso: fichamedica.peso,
        Dni: fichamedica.dni,
        FechaDeNacimiento: fichamedica.fechadenacimiento,
        Sexo: fichamedica.sexo,
        ObraSocial: fichamedica.obrasocial,
        NumeroDeAfiliado: fichamedica.numerodeafiliado,
        GrupoSanguineo: fichamedica.gruposanguineo,
        DireccionDeResidencia: fichamedica.direccionderesidencia,
        PisoYoDepartamento: fichamedica.pisoydepartamento,
        LocalidadDeResidencia: fichamedica.localidadderesidencia,
        ProvinciaDeResidencia: fichamedica.provinciaderesidencia,
        NumeroDeContactoDeEmergencia: fichamedica.numerodecontactodeemergencia,
        NombreCompletoDelMedico: fichamedica.nombrecompletodelmedico,
        NumeroDelMedico: fichamedica.numerodelmedico,
      },{merge: true})
    }

    actualizarfichamedica(fichamedica){
      this.fichamedica = fichamedica;
      this.datosfichamedicamanejador.next(fichamedica);
    }

    }*/
  
   /*
   getUsuarios(){
     //return this.db.collection('usuarios').valueChanges();
   }
}
  guardarregistroendb (){

       this.db.collection('usuarios').doc(this.us.id).set({
         email= this.us.email;

       })
    })
    return this.usuariosCollection;
}
}

this.db.collection('usuarios').doc('pUTAwDdBwjIPV1irfP7B').valueChanges().subscribe(usuario=>{
  console.log(usuario)
})
*/