// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'http://41.230.21.20:8080/api/DPM/',
 // apiUrl: 'http://192.168.100.100:8080/api/DPM/',
  
  
  firebase :{
    apiKey: "AIzaSyBJDxx9Rr9eVWpTZCgJaUF4r7zpzBqsXM0",
    authDomain: "dynamicprocessmanagement.firebaseapp.com",
    databaseURL: "https://dynamicprocessmanagement.firebaseio.com",
    projectId: "dynamicprocessmanagement",
    storageBucket: "dynamicprocessmanagement.appspot.com",
    messagingSenderId: "32594850973",
    appId: "1:32594850973:web:0fd2588410eadcaada9074",
    measurementId: "G-W7T1CRHJSP"
  }

};
