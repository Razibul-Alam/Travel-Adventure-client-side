import React from 'react';
import useAuth from './../../Hooks/useAuth';
import {Button} from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const location=useLocation()
    const history =useHistory()
    const redirectLocation=location?.state?.from || '/'
    const {loginWithGoogle,user,setUser}=useAuth()
    const handleLoginWithGoogle=()=>{
        loginWithGoogle()
        .then((result) => {
            const user = result.user;
            setUser(user)
            history.push(redirectLocation)
          })
    }
    return (
        <div>
            <p>{user.displayName}</p>
            <Button onClick={handleLoginWithGoogle}>Signin eith google</Button>
        </div>
    );
};

export default Login;