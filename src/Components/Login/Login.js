import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { handleSignInWithGoogle, setUser, user, loading, setLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const url = location.state?.from.pathname || "/home";
    const handleClick = () => {
        handleSignInWithGoogle()
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
                history.push(url);
                setLoading(false);
                // ...
            }).catch((error) => {
                const errorMessage = error.message;
                // The email of the user's account used.
                console.log(errorMessage);
                // ...
            })
    }
    return (
        <div className='text-center'>
            <h2>login with google </h2>
            <button onClick={handleClick} className="btn btn-primary">Google Sign in</button>
        </div>
    );
};

export default Login;