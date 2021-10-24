import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initiallizeFirebaseApp from "../Firebase/initializeFirebase";

initiallizeFirebaseApp();


const useFirebase = () => {
    // const [name, setName] = useState('')
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    // const [isLogIn, setIsLogIn] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signWithGoogle = () => {
       return signInWithPopup(auth, googleProvider)
            
            .catch(error => {
                setError(error.message)
            })
            
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])


    const createNewUser = (email, password) => {
        if (password.length < 6) {
            setError("Password must be 6 characters long.")
            return;
          }
          if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain two uppercase ')
            return;
          }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const userLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            
            .catch(
                error => {
                setError(error.message)
            })
            
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    

    return {
        user,
        error,
        signWithGoogle,
        createNewUser,
        userLogIn,
        logOut,
        
    }
}

export default useFirebase;