import React from 'react';
import useAuth from './../../Hooks/useAuth';
import {Button} from 'react-bootstrap';

const Login = () => {
    const {loginWithGoogle,user}=useAuth()
    return (
        <div>
            <p>{user.displayName}</p>
            <Button onClick={loginWithGoogle}>Signin eith google</Button>
        </div>
    );
};

export default Login;