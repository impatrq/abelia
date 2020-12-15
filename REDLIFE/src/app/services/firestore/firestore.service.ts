import { Injectable } from '@angular/core';
import { user } from '../../shared/user.class';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth.service';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap, refCount } from 'rxjs/operators';
import { MessagingService } from '../messaging.service';
import { fichamedica } from '../../shared/ficha-medica.class';
import { Router } from '@angular/router';
import { object } from 'firebase-functions/lib/providers/storage';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  user: user;
  private usuario: user;
  private usuariomanejador: BehaviorSubject<user>;
  public usuarioestado: Observable<user>;
  private RefDb;
  private token;
  fichamedica: fichamedica;
  private datosfichamedica: fichamedica;
  private datosfichamedicamanejador: BehaviorSubject<fichamedica>;
  private datosfichamedicaestado: Observable<fichamedica>;

  constructor(private alertController: AlertController, private db: AngularFirestore, private router: Router, private toastController: ToastController) {
    this.usuario = undefined;
    this.usuariomanejador = new BehaviorSubject<user>(undefined);
    this.usuarioestado = this.usuariomanejador.asObservable();
    this.usuarioestado.subscribe((usuarionuevo: user) => {
      this.usuario = usuarionuevo
      console.log("hola", this.usuario)
    })

    this.datosfichamedica = undefined;
    this.datosfichamedicamanejador = new BehaviorSubject<fichamedica>(undefined);
    this.datosfichamedicaestado = this.datosfichamedicamanejador.asObservable();
    this.datosfichamedicaestado.subscribe((datosfichamedicanuevos: fichamedica) => {
      this.datosfichamedica = datosfichamedicanuevos
    })

  }
  anadirusuario(usuario) {
    this.db.collection('usuarios').add({
      email: usuario.email,
      id: usuario.id
    }).then((docRef) => {
      usuario.idfb = docRef.id;
      this.actualizarusuario(usuario);
    })
  }
  AgregarIDFBaDB() {
    this.db.collection('usuarios').doc(this.usuario.idfb).update({
      idfb: this.usuario.idfb,
    }), { merge: true }
  }
  actualizarusuario(usuario) {
    this.usuario = usuario;
    this.usuariomanejador.next(usuario);
  }
  generarapodo(apodo) {
    this.usuario.user = apodo;
    this.actualizarusuario(this.usuario);
    console.log(this.usuario);
    this.db.collection('usuarios').doc(this.usuario.idfb).update({
      user: this.usuario.user,
    }), { merge: true }  //merge es para combinar datos
  }
  anadirtoken(token) {
    this.usuario.token = token;
    this.actualizarusuario(this.usuario);
    this.db.collection('usuarios').doc(this.usuario.idfb).update({
      token: this.usuario.token,
    }), { merge: true }  //merge es para combinar datos
  }
  obtenernombredeusuario() {
    const a = this.db.collection('usuarios').doc(this.usuario.idfb);
    a.get().forEach((doc) => {
      console.log(doc.data().user);
      const usuario = (doc.data().user);
      console.log('hello', usuario);
      return usuario;
    })
  }
  traerdatos() {
    const b = this.db.collection('usuarios').doc(this.usuario.idfb);
    b.get().forEach((doc) => {
      console.log(doc.data().user);
      console.log(doc.data().email);
      console.log(doc.data().id);
    })
  }
  traerdatoscontraercolleccion() {
    this.traercoleccion();
    this.RefDb.subscribe((res) => {
      res.forEach((usuario: user) => {
        this.actualizarusuario(usuario);
      })
    })
  }
  async anadirdatosfichamedica(fichamedica) {
    const listaOptativos = ["FMObraSocial", "FMNumeroDeAfiliado", "FMNombreCompletoDelMedico", "FMNumeroDelMedico", "FMEnfermedades", "FMOtramedicacion","FMOtraenfermedad", "FMMedicaciones", "FMPisoYoDepartamento"]
    let fichaMedica = {
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
    }
    const campoObligatorioVacio = Object.keys(fichaMedica).some(key => {
      const esObligatorio = !listaOptativos.includes(key);
      const noEsObligatorio = listaOptativos.includes(key);
      if (esObligatorio) {
        console.log(fichaMedica[key], esObligatorio);
        if (fichaMedica[key] == undefined) {
          return true;
          }
      }
      if (noEsObligatorio) {
        if (fichaMedica[key] == undefined) {
          fichaMedica[key] = ""; 
          }
      }
      return false;
      
    })
    if (campoObligatorioVacio) {
      const mensajeDeError = await this.toastController.create({color:"danger", duration:2000, message:"Hay campos que faltan completar" })  
      await mensajeDeError.present(); 
    }

    else {
      console.log(fichaMedica);
      this.db.collection('usuarios').doc(this.usuario.idfb).set(fichaMedica, { merge: true })
      this.router.navigateByUrl('/ficha-medica-enfermedades');
    }
  }

  async anadirdatosfichamedicaenfermedades(fichamedica) {
    const listaOptativos = ["HCOperaciones", "HCEnfermedadesviejas", "HCMedicamentosviejos", "HCVacunasdadas", "HCVacunasDadasFueraDeCalendario"] 
    let historiaClinica = {
    HCOperaciones: fichamedica.operaciones,
      HCEnfermedadesviejas: fichamedica.enfermedadesviejas,
      HCMedicamentosviejos: fichamedica.medicamentosviejos,
      HCVacunasdadas: fichamedica.vacunasdadas,
      HCVacunasDadasFueraDeCalendario: fichamedica.vacunasDadasFueraDeCalendario, }
      const campoObligatorioVacio = Object.keys(historiaClinica).some(key => {
        const esObligatorio = !listaOptativos.includes(key);
        const noEsObligatorio = listaOptativos.includes(key);
        if (esObligatorio) {
          console.log(historiaClinica[key], esObligatorio);
          if (historiaClinica[key] == undefined) {
            return true;
          }
        }
        if (noEsObligatorio) {
          if (historiaClinica[key] == undefined) {
            historiaClinica[key] = ""; 
            }
        }
        return false;
      })
      if (campoObligatorioVacio) {
        const mensajeDeError = await this.toastController.create({color:"danger", duration:2000, message:"Hay campos que faltan completar" })  
        await mensajeDeError.present(); 
      }
  
      else {
        const alert = await this.alertController.create({
          header: '¡Importante!',
          message: 'Por favor revise los datos ingresados porque son importantes en caso de emergencia. Igualmente, estos podrán ser modificados mas adelante.',
          buttons: [
            {
              text: 'Revisar',
              role: 'cancel',
              handler: () => {}
            },
            {
              text: 'Continuar',
              handler: () => {
                  this.db.collection('usuarios').doc(this.usuario.idfb).set({
                  historiaClinica }, { merge: true })
                this.router.navigateByUrl('/generarapodo');
                             }
            }
          ]
        });
        await alert.present();
      }}
    
  traerconuidaliniciarsesion(id) {
    console.log(id);
    this.usuario.id = id;
    this.actualizarusuario(this.usuario);
  }
  traercoleccion() {
    this.RefDb = this.db.collection('usuarios', ref => ref.where("id", "==", this.usuario.id,)).valueChanges()
  }
  actualizartoken(token1) {
    console.log(this.usuario);
    this.traerdatoscontraercolleccion();
    this.usuario.token = token1;
    this.actualizarusuario(this.usuario);
    this.db.collection('usuarios').doc(this.usuario.idfb).update({
      'token': this.usuario.token,
    })
    console.log(this.usuario);
  }
  actualizardatos() {
    this.traerdatoscontraercolleccion();
    console.log('actualizamos', this.usuario);
  }
  nombredeusuario() {
    return (this.usuario.user);
  }
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