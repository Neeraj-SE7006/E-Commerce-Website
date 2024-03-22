import { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

export const Context = createContext();

export function AuthContext({ children }) {
    const auth = getAuth();
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [logoutTimer, setLogoutTimer] = useState(null);

    useEffect(() => {
        let unsubscribe;
        unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            console.log(currentUser);
            if (currentUser) {
                setUser(currentUser);
                //resetLogoutTimer();
            } else {
                setUser(null);
            }
        });
        return () => {
            if (unsubscribe) unsubscribe();
        }
    }, []);

    const resetLogoutTimer = () => {
        clearTimeout(logoutTimer);
        setLogoutTimer(setTimeout(logout, 600000)); // Logout after 10 minute of inactivity
    };
    

    const logout = () => {
        signOut(auth)
            .then(() => {
                console.log("User logged out");
            })
            .catch((error) => {
                console.error("Error logging out:", error);
            });
    };

    const values = {
        user: user,
        setUser: setUser,
        loading: loading,
        error: error
    };

    return (
        <Context.Provider value={values}>
            {!loading && children}
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </Context.Provider>
    );
}
