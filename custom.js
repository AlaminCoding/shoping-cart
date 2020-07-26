// Call all Button
var plusBtn = document.querySelectorAll(".plus");
var minusBtn = document.querySelectorAll(".minus");
var closeBtn = document.querySelectorAll(".remove-item");
var checkBtn = document.getElementById("checkOut");

//Functionality of Plus Button..
plusBtn.forEach((element) => {
  element.addEventListener("click", function () {
    var singlePrice = parseInt(
      element.parentNode.parentNode.children[1].innerHTML
    );
    var priceElement = element.parentNode.parentNode.children[2].children[0];
    var price = parseInt(priceElement.innerHTML);
    var countElement = element.parentNode.children[1];
    var count = parseInt(countElement.value);
    var num = 1;
    calculateCountPrice(element, count, price, singlePrice, num);
    calculateNetPrice(singlePrice);
  });
});

//Functionality of Minus Button..
minusBtn.forEach((element) => {
  element.addEventListener("click", function () {
    var countElement = element.parentNode.children[1];
    var count = parseInt(countElement.value);
    if (count >= 2) {
      var singlePrice = parseInt(
        element.parentNode.parentNode.children[1].innerHTML
      );
      var priceElement = element.parentNode.parentNode.children[2].children[0];
      var price = parseInt(priceElement.innerHTML);
      var num = 1;
      calculateCountPrice(element, count, price, -singlePrice, -num);
      calculateNetPrice(-singlePrice);
    } else {
      console.log("Minimum Limit Reached");
    }
  });
});

//Functionality For close Item
closeBtn.forEach((element) => {
  element.addEventListener("click", function () {
    var cartElement = element.parentNode.parentNode.parentNode;
    var cartPrice = parseInt(
      element.parentNode.children[2].children[0].innerHTML
    );
    cartElement.style.display = "none";

    var netPriceElement = document.getElementById("netPrice");
    var netPrice = parseInt(netPriceElement.innerHTML);
    netPrice = netPrice - cartPrice;
    netPriceElement.innerHTML = netPrice;

    if (netPrice == 0) {
      document.getElementById("cart-section").style.display = "none";
      document.getElementById("no-cart-section").style.display = "block";
    }
    var netTotalElement = document.getElementById("netTotal");
    var netTotal = parseInt(netTotalElement.innerHTML);
    netTotal = netTotal - cartPrice;
    netTotalElement.innerHTML = netTotal;
  });
});

//Function for calculate Count and Price
function calculateCountPrice(element, count, price, singlePrice, num) {
  var priceElement = element.parentNode.parentNode.children[2].children[0];
  var countElement = element.parentNode.children[1];
  count = count + num;
  price = price + singlePrice;
  countElement.value = count;
  priceElement.innerHTML = price;
}
//Function for calculate net price
function calculateNetPrice(singlePrice) {
  var netPriceElement = document.getElementById("netPrice");
  var netPrice = parseInt(netPriceElement.innerHTML);
  netPrice = netPrice + singlePrice;
  netPriceElement.innerHTML = netPrice;
  var taxElement = document.getElementById("netTax");
  var tax = parseInt(taxElement.innerHTML);
  var netTotalElement = document.getElementById("netTotal");
  var netTotal = parseInt(netTotalElement.innerHTML);
  netTotal = netPrice + tax;
  netTotalElement.innerHTML = netTotal;
}

//CheckOut Button Click
checkBtn.addEventListener("click", function () {
  document.getElementById("cart-section").style.display = "none";
  document.getElementById("checkout-complete").style.display = "block";
});
