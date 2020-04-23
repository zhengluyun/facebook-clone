import {firebaseApp} from "../firebase";

export default (email, password) => {
    firebaseApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
        console.log(user);
        console.log("User Found and Signed In");
        return true;
    }).catch(err => {
        console.log(err.message);
        console.log("User Not Found and not Signed");
        return err;
    });  
};