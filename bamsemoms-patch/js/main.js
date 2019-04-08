var mainApp = {};
(function(){
    var currentUser = null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          currentUser = user;
        }else{
            location.replace("login.html");
        }
      });

    function fnLogout(){
        firebase.auth().signOut();
    }

      function fnVerify(){
       var user = firebase.auth().currentUser;
        document.getElementById("verify").innerHTML =("Verify link has been sent.");
    
      user.sendEmailVerification().then(function() {
        // Email sent.
      }).catch(function(error) {
        // An error happened.
      })
    };

    function fnDelete(){
    var user = firebase.auth().currentUser;

    user.delete().then(function() {
      // User deleted.
    }).catch(function(error) {
      // An error happened.
    });
    }

    function fnRepass(){

        const email = firebase.auth().currentUser.email;
        firebase.auth().sendPasswordResetEmail(email)
          .then(function() {
            document.getElementById("reset").innerHTML =("Reset link has been sent.");
          });
        }

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
      
          var user = firebase.auth().currentUser;
      
          if(user != null){
      
            var email_id = user.email;
            var email_Verified = user.emailVerified;
            var user = user.displayName;
      
            if(email_Verified){
      
              document.getElementById("logout").style.display = "block";
              document.getElementById("verify_btn").style.display = "none";
              document.getElementById("konto").style.display = "block";
              document.getElementById("text_verify").style.display = "block";
            } else {

              document.getElementById("logout").style.display = "block";
              document.getElementById("verify_btn").style.display = "block";
              document.getElementById("konto").style.display = "none";
              document.getElementById("text_verify").style.display = "none";
            }
            document.getElementById("user_para2").innerHTML =  " " + user;
            document.getElementById("user_para").innerHTML =  "Email : " + email_id + " <br><br> UserName : "+ user +"  <br><br> Verified : " + email_Verified;
          }
          
        } else {
          // No user is signed in.
          
        }
      
      }); 

    function init(){
        setTimeout(function(){
        })
        
    }

    init();

      mainApp.repass = fnRepass;
      mainApp.verify = fnVerify;
      mainApp.logout = fnLogout;
      mainApp.delete = fnDelete;
})()