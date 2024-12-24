import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from "./firebase";
import { Google } from '@mui/icons-material';
import { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../utils/UserContext';

const Oauth = () => {

    const auth = getAuth(app);
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate()

    const handleGoogle = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: "select_account" });
        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider)
            console.log(resultsFromGoogle);
            
            const res = await fetch("https://siraj-3mds.onrender.com/api/auth/google", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: resultsFromGoogle.user.displayName,
                    email: resultsFromGoogle.user.email,
                    googlePhotoURL: resultsFromGoogle.user.photoURL,
                })
            });

            const data = await res.json();
            localStorage.setItem("user", JSON.stringify(data)); // Save data
            const storedUser = JSON.parse(localStorage.getItem("user")); // Retrieve data
            setUser(storedUser); // Update state
            navigate("/admin/dashboard")
            if (!res.ok) {
                console.log("OAuth Error!!");
            }
        } catch (error) {
            console.error(error);

        }
    };

    return (
        <>
            <div className="w-8/12 flex flex-col p-1 gap-2 pr-10">
                <button onClick={handleGoogle} className='flex items-center w-full justify-items-center gap-[50px] p-2' style={{ border: "2px solid var(--HTextColor)" }}><Google /> Continue With Google</button>
            </div>
        </>
    )
}

export default Oauth