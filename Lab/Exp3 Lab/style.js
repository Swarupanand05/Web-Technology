const form = document.getElementById("loginForm");

const name = document.getElementById("name");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const password = document.getElementById("password");

const namemsg = document.getElementById("namemsg");
const emailmsg = document.getElementById("emailmsg");
const mobilemsg = document.getElementById("mobilemsg");
const passmsg = document.getElementById("passmsg");
const msg = document.getElementById("msg");

const toggleBtn = document.getElementById("togglePass");




window.onload = function(){
    const savedEmail = localStorage.getItem("email");

    if(savedEmail){
        email.value = savedEmail;
    }
};


/* Real-time email validation */

email.addEventListener("input", function(){

    if(!email.value.includes("@")){
        emailmsg.innerHTML="Email must contain @";
        emailmsg.style.color="red";
        email.classList.add("error");
    }
    else{
        emailmsg.innerHTML="";
        email.classList.remove("error");
        email.classList.add("success");
    }

});


/* Show / Hide Password */

toggleBtn.addEventListener("click", function(){

    if(password.type === "password"){
        password.type="text";
        toggleBtn.innerText="Hide";
    }
    else{
        password.type="password";
        toggleBtn.innerText="Show";
    }

});


/* Form Validation */

form.addEventListener("submit", function(event){

event.preventDefault();

let valid=true;

namemsg.innerHTML="";
emailmsg.innerHTML="";
mobilemsg.innerHTML="";
passmsg.innerHTML="";
msg.innerHTML="";


if(name.value==""){
    namemsg.innerHTML="Enter your name";
    namemsg.style.color="red";
    name.classList.add("error");
    valid=false;
}

if(email.value=="" || !email.value.includes("@")){
    emailmsg.innerHTML="Enter valid email";
    emailmsg.style.color="red";
    email.classList.add("error");
    valid=false;
}

if(mobile.value.length!=10 || isNaN(mobile.value)){
    mobilemsg.innerHTML="Enter valid 10 digit mobile number";
    mobilemsg.style.color="red";
    mobile.classList.add("error");
    valid=false;
}

if(password.value.length < 6){
    passmsg.innerHTML="Password must be at least 6 characters";
    passmsg.style.color="red";
    password.classList.add("error");
    valid=false;
}


if(valid){

    localStorage.setItem("email", email.value);

    msg.innerHTML="Login Successful";
    msg.style.color="green";

    alert("Login Successful");

}

});