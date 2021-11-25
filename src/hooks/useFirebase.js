import {
    createUserWithEmailAndPassword, getAuth, GoogleAuthProvider,
    onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,
    updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import initilizeAuthentication from "../Firebase/firebase.init";
initilizeAuthentication();
const useFirebase = () => { 

    const[ user, setUser ] = useState({});
    const [success, setSuccess] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const history = useHistory();

    // hanlde google sign In
    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const createUserAuth = data => {
        if(data.email) {
            createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(result => {
                // Signed in 
                udateUserProfileName(data.name);
                history.push('/login');
                setSuccess('account successfully created!')
            })
            .catch((error) => {
                console.log(error.message);
            });
        }
    }

    const signInUser = data => {
        if(data.email) {
            signInWithEmailAndPassword(auth, data.email, data.password)
            .then((result) => {
                const {displayName, email} = result.user;
                const loggedInUser = {
                    displayName: displayName,
                    email: email
                }
                setUser(loggedInUser);
               history.push('/home');
               setSuccess('login successfully!')
            })
            .catch((error) => {
                console.log(error.message);
            });
        }
    }

    const udateUserProfileName = name => {
        updateProfile(auth.currentUser, {
            displayName: name,
          }).then( ()  => {
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }

    //handle logout method
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
            history.push('/home');
            alert('logout Successfully!')
          })
          .catch((error) => {
          });
    }
    // observe auth state changed
    useEffect( () => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
          });
          return unSubscribed;
    }, [auth]) 


    return {
        user, 
        logOut,
        success,
        signInUser,
        signInGoogle,
        createUserAuth
    }
}


export default useFirebase;