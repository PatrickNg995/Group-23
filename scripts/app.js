function getUserLocation() {
    document.getElementById("go").addEventListener('click', function () {
        var location = document.getElementById("location").value;
        console.log(location);

        //If user is signed in save it to firebase db-
        firebase.auth().onAuthStateChanged(function (user) {
            db.collection("users").doc(user.uid)
                .update({
                    "Location": location
                })
        })
    })
}

/** Could not get this to function where these are written into database

function getItem(){
    document.getElementById("go").addEventListener('click', function () {
        var listItem = document.getElementById("listItem").value;
        console.log(listItem);

        firebase.auth().onAuthStateChanged(function (items) {
            db.collection("Lists").doc(items)
            .update({
               "item": listItem
            })
        })
    })
}
getItem();

function getItem2(){
    document.getElementById("go").addEventListener('click', function () {
        var listItem2 = document.getElementById("listItem2").value;
        console.log(listItem2);

        firebase.auth().onAuthStateChanged(function (items) {
            db.collection("Lists").doc(items)
            .update({
               "item2": listItem2
            })
        })
    })
}
getItem2();

function getItem3(){
    document.getElementById("go").addEventListener('click', function () {
        var listItem3 = document.getElementById("listItem3").value;
        console.log(listItem3);

        firebase.auth().onAuthStateChanged(function (items) {
            db.collection("Lists").doc(items)
            .update({
               "item3": listItem3
            })
        })
    })
}
getItem3();

function getItem4(){
    document.getElementById("go").addEventListener('click', function () {
        var listItem4 = document.getElementById("listItem4").value;
        console.log(listItem4);

        firebase.auth().onAuthStateChanged(function (items) {
            db.collection("Lists").doc(items)
            .update({
               "item5": listItem4
            })
        })
    })
}
getItem4();

function getItem5(){
    document.getElementById("go").addEventListener('click', function () {
        var listItem5 = document.getElementById("listItem5").value;
        console.log(listItem5);

        firebase.auth().onAuthStateChanged(function (items) {
            db.collection("List").doc(items)
            .update({
               "item5": listItem5
            })
        })
    })
}
getItem5();

function getItem6(){
    document.getElementById("go").addEventListener('click', function () {
        var listItem6 = document.getElementById("listItem6").value;
        console.log(listItem6);

        firebase.auth().onAuthStateChanged(function (items) {
            db.collection("Lists").doc(items)
            .update({
               "item6": listItem6
            })
        })
    })
}
getItem6();

function getItem7(){
    document.getElementById("go").addEventListener('click', function () {
        var listItem7 = document.getElementById("listItem7").value;
        console.log(listItem3);

        firebase.auth().onAuthStateChanged(function (items) {
            db.collection("Lists").doc(items)
            .update({
               "item7": listItem7
            })
        })
    })
}
getItem7();
*/
