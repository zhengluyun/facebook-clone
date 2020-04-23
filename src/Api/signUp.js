import {firebaseApp} from "../firebase";

export default (email, password) => {
    firebaseApp
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
        console.log("User Added to DB");
        return true;
    }).catch(err => {
        console.log(err);
    });  
};