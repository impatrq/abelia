const admin = require('firebase-admin');
const functions = require('firebase-functions');
const serviceAccount = require('./keysdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://abelia.firebaseio.com/"
});

// Take the text parameter passed to this HTTP endpoint and insert it into
// Cloud Firestore under the path /messages/:documentId/original
exports.agregarMedicion = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const user_id = req.query.user_id;
  const movimiento = req.query.movimiento;
  const ritmo_cardiaco = req.query.ritmo_cardiaco;

  // Push the new message into Cloud Firestore using the Firebase Admin SDK.
  const mediciones = await admin.firestore().collection('mediciones').add({
    user_id,
    movimiento,
    ritmo_cardiaco

  });
  // Send back a message that we've succesfully written the message
  res.json({ result: mediciones?1:0 });
});


exports.leerMediciones = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const user_id = req.query.user_id;

  // Push the new message into Cloud Firestore using the Firebase Admin SDK.
  const mediciones = admin.firestore().collection('mediciones');


  let mediciones_del_usuario = mediciones.where('user_id', '==', user_id ).limit(1);
  const medicion = await mediciones_del_usuario.get()
  let ritmo = 0;
  medicion.forEach((medicion)=>{
    ritmo = medicion.data().ritmo_cardiaco
    movimiento = medicion.data().movimiento
  })
    console.log(ritmo, movimiento);

  // Send back a message that we've succesfully written the message
  res.json({ result: ritmo });
});
