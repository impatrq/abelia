// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig:  {
    apiKey: "AIzaSyAVvzgsOEBTyb5PkoIJlAy5pKW-YUOi-rc",
    authDomain: "abelia.firebaseapp.com",
    databaseURL: "https://abelia.firebaseio.com",
    projectId: "abelia",
    storageBucket: "abelia.appspot.com",
    messagingSenderId: "1035460197891",
    appId: "1:1035460197891:web:6514db5e27ca0ef5135836",
    measurementId: "G-GR0YED1R27"
  }
  // Initialize Firebase
  //initializeApp(firebaseConfig);
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
