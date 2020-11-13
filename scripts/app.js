
function getUserLocation(){
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

getUserLocation();