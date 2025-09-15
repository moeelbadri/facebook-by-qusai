const jwt = localStorage.getItem('jwt'); // Retrieve the JWT from local storage
console.log(jwt)
if(jwt==="undefined"){
  console.log("undefined",jwt)
}else if(jwt =="expired"){
  console.log(jwt,"expired")
    localStorage.removeItem('jwt')
}else if(jwt){
  console.log(jwt,"if it exists")
  verifylogin(jwt);
  alert("please login again, ur season has expired");s
}else{
  console.log(jwt,"if it doesnt exist at all")
  verifylogin(jwt);
}

async function verifylogin(jwt){
  const url = 'http://localhost:80/user/verify';

  const response = await fetch(url, {
      headers: {
          'Authorization': jwt,
        },
  });
  
  const text = JSON.parse(await response.text());
  console.log(text)
  if(text.status=="success"){
    console.log(text.status)
    localStorage.setItem('jwt',text.jwt);
    window.location.href = '/homepage.html';
  }else{
    console.log(text.status)
    localStorage.removeItem('jwt')
  }
}
const radioButtons = document.querySelectorAll('input[type="radio"][name="radio"]');
async function login(event) {
  //event.preventDefault(); // Prevent the default form submission
  const emailInput = document.getElementById("email").value;
  console.log("Email:", emailInput);

  // Access the password input value using the name attribute
  const passwordInput = document.getElementById("password").value;
  console.log("Password:", passwordInput);  
  const response = postData("/user/login", { email:emailInput,password:passwordInput });
    if(await response){
      if((await response).jwt){
        localStorage.setItem('jwt',(await response).jwt)
        window.location.href = '/homepage.html';
      }
  }
  return false;
}
async function register(event) {
// Initialize a variable to store the checked radio button
let checkedRadioButton = null;
  // Loop through the radio buttons to find the checked one
radioButtons.forEach((radio) => {
  if (radio.checked) {
    checkedRadioButton = radio.value;
  }
});
const passwordInput = document.getElementById("R_password").value;
const passwordInputR = document.getElementById("R2_password").value;
  if(passwordInput!=passwordInputR){
    document.getElementById('err').innerHTML="The Entered password is not the same !"
  }else{
  const emailInput = document.getElementById("R_email").value;
  const passwordInput = document.getElementById("R_password").value;
  const FnameInput = document.getElementById("Fname").value;
  const LnameInput = document.getElementById("Lname").value;
  const BdateInput = document.getElementById("Bdate").value;
  const GenderInput = checkedRadioButton;
  const response = postData("/user/register", { email:emailInput,password:passwordInput,Fname:FnameInput,Lname:LnameInput,date:BdateInput,gender:GenderInput });
  try{
    if(((await response).error).includes("exist")){
      document.getElementById('err').innerHTML="user with that email already exist    !"
    }
  }catch(err){
  }
  document.getElementById('err').innerHTML="success! redirecting";
  setTimeout(() => {
    window.location.href = '/homepage.html';
  }, 1000);
  localStorage.setItem('jwt',(await response).jwt);
  }

  return false;
}
async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch("http://localhost:80"+url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    console.log(response)
    return await response.json(); // parses JSON response into native JavaScript objects
  }

  function opendialog(){
    document.getElementById("RegisterDialog").open = true;
  }
  function closedialog(){
    document.getElementById("RegisterDialog").open = false;
  }
  
  window.onload = (event) => {
    document.addEventListener("keydown", (e) => {
      if(e.key=="Escape"){
        closedialog()
      }
    });
    };