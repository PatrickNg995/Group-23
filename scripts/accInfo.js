function readName() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid)
            .onSnapshot(function (s) {
                console.log(s.data().name);
                document.getElementById("nameRead").innerText = s.data().name;
            })
    })

}
readName();

function readEmail() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid)
            .onSnapshot(function (snap) {
                console.log(snap.data().email);
                document.getElementById("emailRead").innerText = snap.data().email;
            })
    })

}
readEmail();