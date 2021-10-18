import React, { useState } from 'react';
import initializeAuthentication from '../../Firebase/firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState('');
    const auth = getAuth();
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
    }

    const toggleLogin = e =>{
        setIsLogin(e.target.checked);
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
        })
        .catch((error) => {
            setError(error.message);
        });
    }

    return (
        <>
        <div className="">
        <div>
            <form onSubmit={handleRegistration}>
            <h3 style={{overflow:'hidden', color:"red"}}>Please {isLogin ? 'Login' : 'Register'}</h3>
            <div className="row mb-3 ">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input onBlur={handleEmailchange} type="email" className="form-control" id="inputEmail3" required/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required/>
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
            <button type="submit" className="btn btn-primary px-5">{isLogin ? 'Login' :'Register'}</button>
            </form>
            <br /><br /><br />
        </div>
        </div>
        <div>-------------------</div>
        <br /><br /><br />
        <div>
            <button onClick= {handleGoogleSignIn} className="btn-primary">Coogle Sign In</button>
        </div>
        </>
    );
};

export default Login;