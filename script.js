function showToast(message){

let toast=document.createElement("div")

toast.classList.add("toast")

toast.innerText=message

document.body.appendChild(toast)

setTimeout(()=>{
toast.classList.add("show")
},100)

setTimeout(()=>{
toast.remove()
},3000)

}


// REGISTER
const registerForm=document.getElementById("registerForm")

if(registerForm){

registerForm.addEventListener("submit",function(e){

e.preventDefault()

let username=document.getElementById("regUsername").value
let password=document.getElementById("regPassword").value

let user={
username:username,
password:password
}

localStorage.setItem("user",JSON.stringify(user))

showToast("Registration successful!")

setTimeout(()=>{
window.location.href="index.html"
},1500)

})

}


// LOGIN
const loginForm=document.getElementById("loginForm")

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault()

let username=document.getElementById("username").value
let password=document.getElementById("password").value

let storedUser=JSON.parse(localStorage.getItem("user"))

if(storedUser && storedUser.username===username && storedUser.password===password){

localStorage.setItem("loggedInUser",username)

window.location.href="dashboard.html"

}else{

showToast("Invalid username or password")

}

})

}


// DASHBOARD PROTECTION
if(window.location.pathname.includes("dashboard.html")){

let loggedUser=localStorage.getItem("loggedInUser")

if(!loggedUser){

window.location.href="index.html"

}else{

document.getElementById("user").innerText="Welcome, "+loggedUser+" 👋"

}

}


// LOGOUT
function logout(){

localStorage.removeItem("loggedInUser")

window.location.href="index.html"

}


// SHOW PASSWORD
function togglePassword(){

let pass=document.getElementById("password")

if(pass.type==="password"){
pass.type="text"
}else{
pass.type="password"
}

}