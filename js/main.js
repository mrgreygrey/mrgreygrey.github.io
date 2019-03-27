//tests to see if the user understands that booleans deal with true and false
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

//tests to see if the user understands the double is used for floating points
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

//Tests to see if the user understands that the data is contained in the model
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

//tests to see if the user understands which part of the MVVM the user interacts with
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

//test to see if the user understands the concatenation symbol
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

//tests to see if user understands the equal to symbol
function testEqualTo(){
    var isEqualTo = document.getElementById("equalToAnswer").value;
    if(isEqualTo == "=="){
        document.getElementById("equalToResult").innerHTML = "Correct";
        document.getElementById("equalToResult").style.color = "green";
    } else {
        document.getElementById("equalToResult").innerHTML = "Not Quite! Try again!";
        document.getElementById("equalToResult").style.color = "red";
    }
}

//used to open navigation menu when in mobile browser
function openNav(){
    document.getElementById("myDynamicNav").style.width = "40vw";
}

//used to close navigation menu when in mobile browser
function closeNav(){
    document.getElementById("myDynamicNav").style.width = "0";
}

//adds data to firebase
function addData(){
    var db = firebase.firestore();

    var first_Name = document.getElementById("firstName").value;
    var last_Name = document.getElementById("lastName").value;
    var _address = document.getElementById("address").value;
    var _DOB = document.getElementById("dateOfBirth").value;
    var _email = document.getElementById("email").value;
    var _recieveNews = document.getElementById("recieveNews").checked;

    db.collection("joinFormData").add({
        firstName: first_Name,
        lastName: last_Name,
        address: _address,
        DOB: _DOB,
        email: _email,
        recieveNews: _recieveNews
    })
    .then(function(docRef){
        console.log("written with Id:", docRef.id);
    })

    if(_recieveNews){
        document.getElementById("thanksJoining").innerHTML = "Thanks " + first_Name + 
        " for joining our group! You'll get your first newsletter shortly!";
    } else {
        document.getElementById("thanksJoining").innerHTML = "Thanks " + first_Name +
        " for joining our group!";
    }

}