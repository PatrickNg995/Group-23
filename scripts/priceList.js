var name = localStorage.getItem("item");
var limit;

/* Gets the list of prices for the searched product from the database. */
function getPriceList() {
    db.collection("prices").doc(name)
        .get()
        .then(function (doc) {
            console.log(doc.data());

            var storeList = Object.keys(doc.data());
            console.log(storeList);

            var priceList = Object.values(doc.data());
            console.log(priceList);

            var div = document.getElementById('list');

            limit = storeList.length;

            for (var i = 0; i < limit; i++) {
                var price = priceList[i];
                var store = storeList[i];

                div.innerHTML += "<div class='price'>" + "<p>" + price + " - " + store + "</p>" + "</div)";
            }

            //var d1 = $("<div class='priceList'> </div>").append(
            //    "<div class='price'>" + "<p>" + price + "</p>" + "</div)");
        })
}

// Add the name of the product
function changeName() {
    var capital = name.toUpperCase().charAt(0);
    document.getElementById("prodName").innerText = capital + name.substring(1, limit);
}

changeName();
getPriceList();