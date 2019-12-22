import firebase from '../../firebaseConfig';

export default {
  user: {
    signUp: userData =>
      firebase
        .auth()
        .createUserWithEmailAndPassword(userData.email, userData.password)
        .then(user => user.user.providerData[0]),

    currentUser: () => firebase.auth().currentUser,

    logOut: () => firebase.auth().signOut(),
  },
};
