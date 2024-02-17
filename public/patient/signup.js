import { getAuth, RecaptchaVerifier } from "firebase/auth";
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const number  = document.getElementById('number').value;
  
    // Your signup logic goes here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('number', number);
  });
  const firebaseConfig = {
    apiKey: "AIzaSyBgTXIcy_Av3pWj1BYg18gxRAubIabDYbQ",
    authDomain: "apnamed-774ec.firebaseapp.com",
    databaseURL: "https://apnamed-774ec-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "apnamed-774ec",
    storageBucket: "apnamed-774ec.appspot.com",
    messagingSenderId: "731208891868",
    appId: "1:731208891868:web:456c3534fb35c2b91a6319",
    measurementId: "G-X649HRWQ81"
  };
    firebase.initializeApp(firebaseConfig);
function render(){
    window.recaptchaVerifier = new firebase.auth.recaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}
function phoneAuth(){
    var number = document.getElementById('number');
    firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier).then(function(confirmationResult){
        window.confirmationResult = confirmationResult;
        coderesult = confirmationResult;
        document.getElementById('sender').style.display = 'none';
        document.getElementById('verifier').style.display = 'block';
    })
    .catch(function(error) {
        alert(error.message);

    });
}
function codeverify() {
    var code = document.getElementById('verificationcode').value;
    coderesult.confirm(code).then(function () {
        console.log('OTP Verified');
    }).catch(function () {
        console.log('OTP Not correct');
    })
}