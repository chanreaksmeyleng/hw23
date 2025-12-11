function login() {
  const emailElement = document.getElementById("email");
  const passwordElement = document.getElementById("password");
  const email = emailElement.value;
  const password = passwordElement.value;
  let wrongPasswordElement = document.getElementById("wrongPassword");
  let message = "";
  console.log("Email is ", email);
  console.log("password is is ", password);

  if (email != ""){
    console.log("b")
    if (password == ""){
      wrongPasswordElement.innerText = "Password is mandatory";
    }else{
      if (email != password){
        wrongPasswordElement.innerText = "Invalid credentials. Please try again.";
      }else{
        window.open("./homepage.html", "_self");
      }
    }
  }else{
    message = "Email ";
    if (password == ""){
      wrongPasswordElement.innerText = message + "and Password are mandatory";
    }else if(password != ""){
      wrongPasswordElement.innerText = message + "is mandatory";
    }
  }
}

function logout(){
  window.open("./index.html", "_self");
}

const profile = () => {
  window.open("./profile.html", "_target");
}

const homePage = () => {
  window.open("./homepage.html", "_target");
}