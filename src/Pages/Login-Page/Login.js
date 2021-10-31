import React from 'react';
import useAuth from './../../Hooks/useAuth';
import {Button} from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

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
        <section className="m-auto justify-content-center row bg-dark">
        <div className="col-lg-6 col-md-6 col-sm-8 my-5">
            <div className="m-2 p-2 bg-light">
            <div className="text-center my-4">
                <img src="https://www.graphicsprings.com/filestorage/stencils/b93949fe0e06c8b365c54e8bf17ceeca.png?width=150&height=150" alt="" />
                <h4 className="text-danger my-2">Please Login</h4>
            </div>
            <Button variant="primary" className="form-control mb-3" onClick={handleLoginWithGoogle}> <span className="text-danger fs-4 me-2"><FontAwesomeIcon icon={faGoogle} /></span> Login with google</Button>
        </div>
        </div>
        </section>
    );
};

export default Login;