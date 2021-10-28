import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleSignInWithGoogle = () => {
        return signInWithPopup(auth, provider)

    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log(user);
            } else {
                // User is signed out
                // ...
            }
            setLoading(false);

        });

    }, []);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser({});
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
    }
    return {
        handleSignInWithGoogle,
        user,
        loading,
        setLoading,
        handleSignOut,
        setUser
    }
};

export default useFirebase;