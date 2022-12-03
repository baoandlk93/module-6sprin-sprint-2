// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url: 'http://localhost:8080/api',
   firebaseConfig :{
    apiKey: "AIzaSyAa03iyPIJT0lSZj7u6VQstssG_f9FH1oE",
    authDomain: "sale-car-management.firebaseapp.com",
    projectId: "sale-car-management",
    storageBucket: "sale-car-management.appspot.com",
    messagingSenderId: "1068668441562",
    appId: "1:1068668441562:web:69ce06fbac105e047566e3",
    measurementId: "G-F3JZ7P4GWM"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
