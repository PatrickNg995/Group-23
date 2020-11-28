var name = localStorage.getItem("item");

function getDescription() {
    db.collection("descriptions").doc(name)
        .get()
        .then(function (doc) {
            console.log(doc.data());

            var description = Object.values(doc.data());

            document.getElementById("desc").innerText = description;

        })
}

getDescription();