let checkIsAEmail = () =>{
    let btn = document.querySelector('#btn');
    let email = document.getElementById('email').value;
    if (String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        alert("You've entered a valid email.");
        btn.setAttribute("class", "btn btn-success");
        document.getElementById('result').innerHTML = email;
    } else {
        alert("Sorry! You've entered an invalid email");
        btn.setAttribute("class", "btn btn-danger");
        document.getElementById('result').innerHTML = "Wrong Email!";
    }
}
console.log(document);
console.log(document.getElementById('result'));
const doc = document.body;
const span = document.getElementById('span');
console.log(span);
span.innerText = "This is a span!";
const body = document.getElementsByClassName('theBody');
console.log(body);
const label = document.getElementsByTagName('label');
console.log(label);
console.log(document.querySelector('#title'));
const listOfSpan = document.querySelectorAll('#span');
console.log(listOfSpan);
listOfSpan.forEach(element =>{
    element.innerHTML = "This is a span, not a spam!";
});
document.querySelector('#title').innerHTML = "Welcome to Email Validator!";
let strong = document.querySelector('strong');
strong.innerHTML = "I am bold text, not strong!";
strong.setAttribute("class", "btn btn-primary");
strong.innerHTML = "I am button!";
strong.classList.remove("btn", "btn-primary");
strong.innerHTML = "I am bold text!";
let title = document.querySelector('#title');
title.style.fontSize = "40px";
title.style.fontWeight = "600";
title.style.backgroundColor = "black";
title.style.color = "blue";
title.style["color"] = "red";
let comp = document.createElement('p');
comp.innerText = "Hi!";
console.log(comp);
console.log(document.querySelector('#strong').appendChild(comp));
let div = document.querySelector('.container');
console.log(div);
div.insertBefore(comp,div.children[3]);