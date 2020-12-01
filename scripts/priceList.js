var name = localStorage.getItem("item");
var limit;

/* Gets the list of products from the database. */
db.collection("products")
    .get()
    .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            /* Casts the product list into an array. */
            products = Object.values(doc.data());
            console.log(products);
        });
    })
    .catch(function (error) {
        console.log("Error getting documents: ", error);
    });;

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

            var div = document.getElementById('priceTable');

            limit = storeList.length;

            for (var i = 0; i < limit; i++) {
                var price = priceList[i];
                var store = storeList[i];

                //div.innerHTML += "<div class='price'>" + "<p>" + price + " - " + store + "</p>" + "</div)" + "<td><button type='button' class='btn btn-info'>Go</button></td>";

                div.innerHTML += "<tr><th scope='row'>" + store + "</th><td>" + price + "</td> <td><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-geo-alt' fill='currentColor'xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd'd='M12.166 8.94C12.696 7.867 13 6.862 13 6A5 5 0 0 0 3 6c0 .862.305 1.867.834 2.94.524 1.062 1.234 2.12 1.96 3.07A31.481 31.481 0 0 0 8 14.58l.208-.22a31.493 31.493 0 0 0 1.998-2.35c.726-.95 1.436-2.008 1.96-3.07zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z'/><path fill-rule='evenodd'd='M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' /></svg></td><td><button type='button' class='btn btn-info'>Go</button></td></tr>";
            }

            //var d1 = $("<div class='priceList'> </div>").append(
            //    "<div class='price'>" + "<p>" + price + "</p>" + "</div)");
        })
}

var count = 0;
var foundName = false;

/* Add the name of the product if it is valid */
setTimeout(function () {
    products.forEach(function () {
        while (count < products.length) {
            if (products[count] === name) {
                var capital = name.toUpperCase().charAt(0);
                var length = products[count].length;
                document.getElementById("prodName").innerText = capital + name.substring(1, length);
                console.log(products[count]);
                foundName = true;
            }
            count++;
        }
        if (foundName = false) {
            document.getElementById("prodName").innerText = "Product not found";
        }
    });
}, 1600);

getPriceList();