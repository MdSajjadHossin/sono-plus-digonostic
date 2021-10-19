import React, { useState } from 'react';
import initializeAuthentication from '../../Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { Button } from 'react-bootstrap';
import useFirebase from '../../hooks/usefirebase';


initializeAuthentication();
// const googleProvider = new GoogleAuthProvider();

const Login = () => {
    const {signInUsingGoogle} = useFirebase();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState('');
    const auth = getAuth();

    // Google Sign In
    // const handleGoogleSignIn = () =>{
    //     signInWithPopup(auth, googleProvider)
    //     .then(result =>{
    //         const user = result.user;
    //         console.log(user);
    //     })
    // }
        

    const toggleLogin = e =>{
        setIsLogin(e.target.checked);
    }
    
    const handleNameChange = e =>{
        setName(e.target.value);
    }


    const handleEmailchange = e =>{
        setEmail(e.target.value);

    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }
    const handleRegistration = e =>{
        e.preventDefault();
        console.log(email, password);
        if(password.length < 6){
            setError('Password Must Be At Least 6 Character Long.');
            return;
        }
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError('Passwprd Must Contain 2 Upper Case Latter');
            return;
        }
        
        isLogin? processLogin(email, password) : createNewUser(email, password)
        
    }

    const processLogin = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const createNewUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user
            console.log(user);
            setError('');
            verifyEmail();
            setUserName();
        })
        .catch((error) => {
            setError(error.message);
        });

        const setUserName = () =>{
            updateProfile(auth.currentUser, {
                displayName: name})
                .then(result =>{ })
        }
    }

    const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then(result =>{
            console.log(result);
        })
    }

    const handleRecentPassword = () =>{
        sendPasswordResetEmail(auth, email)
        .then(result =>{ })
    }

    return (
        <>
        <div className="">
        <div>
            <form onSubmit={handleRegistration}>
            <h3 style={{overflow:'hidden', color:"red"}}>Please {isLogin ? 'Login' : 'Register'}</h3>
            {!isLogin && <div className="row mb-3 ">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                <input onBlur={handleNameChange} type="name" className="form-control" id="inputEmail3" placeholder="Your Name" required/>
                </div>
            </div>}
            <div className="row mb-3 ">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input onBlur={handleEmailchange} type="email" className="form-control" id="inputEmail4" placeholder="Enter PassWord" required/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" placeholder="Enter Password" required/>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2">
                <div className="form-check">
                    <input onChange={toggleLogin} className="form-check-input mx-5" type="checkbox" id="gridCheck1"/>
                    <label className="form-check-label" htmlFor="gridCheck1">
                    Already Registered?
                    </label>
                </div>
                </div>
                <div className="row md-3 text-danger mx-5">
                {error}
            </div>
            </div>
            <button type="submit" className="btn btn-primary m-5 p-2">{isLogin ? 'Login' :'Register'}</button><br />
            <Button onClick={handleRecentPassword} variant="secondary" size="sm">Recet Password</Button>
            </form>
            <br /><br /><br />
        </div>
        </div>
        <div>-------------------</div>
        <br /><br /><br />
        <div>
            <button onClick= {signInUsingGoogle} className="btn-primary">Coogle Sign In</button>
        </div>
        </>
    );
};

export default Login;