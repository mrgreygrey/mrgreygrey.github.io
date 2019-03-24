function testBoolean(){
    var isBoolean = document.getElementById("booleanAnswer").value;
    var answer =isBoolean.toLowerCase();
    if(answer == "boolean"){
        document.getElementById("booleanResult").innerHTML = "Correct";
        document.getElementById("booleanResult").style.color = "green";
    } else {
        document.getElementById("booleanResult").innerHTML = "Not quite! Try again!";
        document.getElementById("booleanResult").style.color = "red";
    }
}

function testDouble(){
    var isDouble = document.getElementById("doubleAnswer").value;
    var answer = isDouble.toLowerCase();
    if(answer == "double"){
        document.getElementById("doubleResult").innerHTML = "Correct";
        document.getElementById("doubleResult").style.color = "green";
    } else {
        document.getElementById("doubleResult").innerHTML = 
        "Not quite! Remember 2.14 has a floating decimal point!";
        document.getElementById("doubleResult").style.color = "red";
    }
}

function testModel(){
    var isModel = document.getElementById("modelAnswer").value;
    var answer = isModel.toLowerCase();
    if(answer == "model"){
        document.getElementById("modelResult").innerHTML = "Correct";
        document.getElementById("modelResult").style.color = "green";
    } else {
        document.getElementById("modelResult").innerHTML = "Not Quite! try again!";
        document.getElementById("modelResult").style.color = "red";
    }
}

function testView(){
    var isView = document.getElementById("viewAnswer").value;
    var answer = isView.toLowerCase();
    if(answer == "view"){
        document.getElementById("viewResult").innerHTML = "Correct";
        document.getElementById("viewResult").style.color = "green";
    } else{
        document.getElementById("viewResult").innerHTML = "Not Quite! Try again!";
        document.getElementById("viewResult").style.color = "red";
    }
}

function testPlus(){
    var isPlus = document.getElementById("plusAnswer").value;
    if(isPlus == "+"){
        document.getElementById("plusResult").innerHTML = "Correct";
        document.getElementById("plusResult").style.color = "green";
    } else {
        document.getElementById("plusResult").innerHTML = "Not Quite, remember we're just adding things together!";
        document.getElementById("plusResult").style.color = "red";
    }
}

function openNav(){
    document.getElementById("myDynamicNav").style.width = "40vw";
}

function closeNav(){
    document.getElementById("myDynamicNav").style.width = "0";
}