import { 
    auth,
    googleProvider,
    signInWithPopup,
    db
} from "./firebase.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// Signup Function

window.signup = async function(email,password){

    try{

        const userCredential =
        await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );


        const user = userCredential.user;


        await setDoc(
            doc(db,"users",user.uid),
            {
                email:user.email,
                createdAt:new Date()
            }
        );


        alert("Account Created Successfully");

    }

    catch(error){

        alert(error.message);

    }

};



// Login Function

window.login = async function(email,password){

    try{

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );


        alert("Login Successful");

        window.location.href="profile.html";

    }

    catch(error){

        alert(error.message);

    }

};
