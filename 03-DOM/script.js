let checkIsAEmail = () =>{
    let email = document.getElementById('email').value;
    if (String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        alert("You've entered a valid email.");
        document.getElementById('result').innerHTML = email;
    } else {
        alert("Sorry! You've entered an invalid email");
        document.getElementById('result').innerHTML = "Wrong Email!";
    }
}
console.log(document);