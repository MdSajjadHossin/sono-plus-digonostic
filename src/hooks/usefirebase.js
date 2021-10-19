import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "@firebase/auth";
import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [isLoading, setIsLoading] = useState(true);

    const signInUsingGoogle = () =>{
        isLoading(true);
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            console.log(result.user);
            setUser(result.user);
        })
        .finally(() => setIsLoading(false));
        // .catch(error =>{
        //     setError(error.message);
        // })
    }
    const logout = () =>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                console.log(user);
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        })
    },[])

    return{
        user,
        error,
        signInUsingGoogle,
        logout,
        isLoading

    }

}



export default useFirebase;