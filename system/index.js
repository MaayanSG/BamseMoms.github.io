

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      var email_Verified = user.emailVerified;

      if(email_Verified){

        document.getElementById("verify_btn").style.display = "none";
        document.getElementById("nettsidelink-btn").style.display = "block";
      } else {

        document.getElementById("verify_btn").style.display = "block";
        document.getElementById("nettsidelink-btn").style.display = "none";
      }

      document.getElementById("user_para").innerHTML = "Email : " + email_id + "<br/> Verified : " + email_Verified;
    }
       
  } else {
    // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    document.getElementById("nettsidelink-btn").style.display = "none";
  }

}); 

function delete_account(){

  var user = firebase.auth().currentUser;

user.delete().then(function() {
  // User deleted.
}).catch(function(error) {
  // An error happened.
});
}

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  //window.location.href = "/web";

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function create_account(){


  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  //window.location.href = "/web";

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });
}

function reset_user_password(){

const email = firebase.auth().currentUser.email;
firebase.auth().sendPasswordResetEmail(email)
  .then(function() {
    document.getElementById("reset").innerHTML =("Reset link has been sent.");
  });
}

function logout(){
  firebase.auth().signOut();
 
}

function send_verification(){

  var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
windows.alert("Error : " + error.message);

});
}

