var firebaseConfig = {
    apiKey: "AIzaSyAsipKV_XXvaBVPJhDzzGOTWCSMe4H0WQ0",
    authDomain: "home-finder-app-d25ca.firebaseapp.com",
    projectId: "home-finder-app-d25ca",
    storageBucket: "home-finder-app-d25ca.appspot.com",
    messagingSenderId: "362873940150",
    appId: "1:362873940150:web:734a8d7b3b0239479a9e17"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  firebase.auth.Auth.Persistence.LOCAL;

  $("#btn-login").click(function()
  
  {
      var email=$("#email").val()
      var password=$("#password").val()

      if(email!== "" && password!== ""){

        var result=firebase.auth().signInWithEmailAndPassword(email,password)
     
        result.catch(function(error)
        {
            var errorCode=error.code;
            var errorMessage=error.message
console.log(errorCode)
console.log(errorMessage)
          window.alert("Message:"+ errorMessage)
           
        });
    
    }
      else{
       window.alert("PLEASE FILL OUT ALL FIELDS")
      }
  });