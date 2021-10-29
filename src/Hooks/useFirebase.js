import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth, signInWithPopup,signOut ,onAuthStateChanged} from "firebase/auth";
import {useEffect,useState } from "react";
import { firebaseConfig } from './../Firebase-Config/firebaseConfig';

const provider = new GoogleAuthProvider();
const firebaseApp =initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const useFirebase=()=>{
  const[user,setUser]=useState([])
  const[error,setError]=useState('')
  const[isLoading,setIsLoading]=useState(true);
// google login
const loginWithGoogle=()=>{
  setIsLoading(true)
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user)
      }).catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      })
      .finally(()=>setIsLoading(false))
      
        }
        

    //   auth identity
     useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user)
        } else {
          // User is signed out
          // ...
        }
        setIsLoading(false)
      });
     
     },[])
        // ----
        // logout method
const logOut=()=>{
  setIsLoading(true)
  signOut(auth).then(() => {
    setUser({})
  }).catch((error) => {
    
  }).finally(()=>setIsLoading(false))
  
}
         
        return {loginWithGoogle,user,setUser,logOut,error,setError,isLoading}
}
export default useFirebase;