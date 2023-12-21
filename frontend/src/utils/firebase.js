
import {initializeApp} from 'firebase/app'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDo_7tT0sdjWdhtQRJMgnIuenCk551p0_s",
    authDomain: "fixit-9c5e0.firebaseapp.com",
    projectId: "fixit-9c5e0",
    storageBucket: "fixit-9c5e0.appspot.com",
    messagingSenderId: "620735807395",
    appId: "1:620735807395:web:66373c3a860ce63da2e416",
    measurementId: "G-QN5MWCLX0J"
  };
  
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  export {auth,provider}