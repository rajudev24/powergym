import firebaseConfig from "./firebaseConfig"
import { initializeApp } from "firebase/app";

const initiallizeFirebaseApp = ()=>{
    initializeApp(firebaseConfig)
}

export default initiallizeFirebaseApp;