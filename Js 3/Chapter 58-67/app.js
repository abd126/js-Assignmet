var a = document.getElementById("main-content")
var child = a.childNodes
console.log(child)


var cl = document.getElementsByClassName("render")
var txt = cl.innerHTMl
console.log(txt)

function insertval (){
var firstName = document.getElementById("first-name")
fnam = document.createTextNode("Abdulah")
firstName.appendChild(fnam)

}

insertval()