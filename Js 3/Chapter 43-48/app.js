// Question 01
function welcomeLink(){
    alert("Welcom JS Land")
}

// Question 02
function Purchase(){
    alert("Thanks For Purchase Kurta From us")
}

// Question 03....

var table = document.getElementById('table')
function add(){

    var name = document.getElementById('name');
    var tr = document.createElement('tr')
    var td = document.createElement('td')
    var tdText = document.createTextNode(name.value)
    tr.appendChild(td)
    td.appendChild(tdText)


    var clas = document.getElementById('clas');
    var td2 = document.createElement('td')
    var tdText2 = document.createTextNode(clas.value)
    tr.appendChild(td2)
    td2.appendChild(tdText2)


    var td3 = document.createElement('td')
    var dltBtn = document.createElement('button')
    var dltText = document.createTextNode('Delet')
    tr.appendChild(dltBtn)
    // td3.appendChild(dltBtn)
    dltBtn.setAttribute("class" , "dltBtn")
    dltBtn.setAttribute("onclick" , "dltBtn(this)")

    dltBtn.appendChild(dltText)
    
    table.appendChild(tr)
    name.value = ""
    clas.value = ""
    console.log(tr)
    
    }
    function dltBtn(d){
        d.parentNode.remove()
    }

// Question 04

function ChangePic(id,src){
    var Pic = document.getElementById('img');
    Pic.src = src
    
    
}

// Question 05

function Increas(){
    var Inc = document.getElementById('Counter').innerHTML
    Inc++;
    document.getElementById('Counter').innerHTML = Inc;
}


function Decrease(){
    var Inc = document.getElementById('Counter').innerHTML
    Inc--;
    document.getElementById('Counter').innerHTML = Inc;
}



