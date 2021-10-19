import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () =>{
    const [users, setUsers] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const signInUsingGoogle = () =>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUsers(result.user)
        })
        .finally(()=> setIsLoading(false));
    }

    // observe user state change
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, users =>{
            if(users){
                setUsers(users)
            }
            else{
                setUsers({})
            }
            setIsLoading(false);
        });
        return()=> unsubscribed;
    },[])

    const logOut = () =>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{})
        .finally(()=>setIsLoading(false));
    }

    return{
        users,
        isLoading,
        signInUsingGoogle, 
        logOut
    }
}

export default useFirebase;