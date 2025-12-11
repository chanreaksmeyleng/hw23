function login() {
  const emailElement = document.getElementById("email");
  const passwordElement = document.getElementById("password");
  const email = emailElement.value;
  const password = passwordElement.value;
  const wrongPasswordElement = document.getElementById("wrongPassword");
  console.log("Email is ", email);
  console.log("password is is ", password);
  // window.open("./homepage.html", "_self");

  if (password == email) {
    window.open("./homepage.html", "_self");
  } else {
    wrongPasswordElement.innerText = "Invalid credentials. Please try again."
  }
}
// const logout = () => {
//   console.log("abc")
//   window.open("./index.html", "_self");
// }

function logout(){
  window.open("./index.html", "_self");
}

const profile = () => {
  window.open("./profile.html", "_target");
}

const homePage = () => {
  window.open("./homepage.html", "_target");
}