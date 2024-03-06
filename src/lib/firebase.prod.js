import firebases from 'firebase/compat/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBuVQbBJAEUV8q4fmpWrdYZXi2nEh_uPBU",
  authDomain: "netflix-clone-3547a.firebaseapp.com",
  databaseURL: "https://netflix-clone-3547a-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-3547a",
  storageBucket: "netflix-clone-3547a.appspot.com",
  messagingSenderId: "920079291866",
  appId: "1:920079291866:web:45d6defce3d7b99cf81ce3",
  measurementId: "G-WTJ5PYTP62"
};

const firebase = firebases.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data

export { firebase };
