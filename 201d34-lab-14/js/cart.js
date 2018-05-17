'use strict';

var Cart = [];

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  Cart = JSON.parse(localStorage.getItem('cart')) || [];
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

function clearCart() {
  var cartTable = document.getElementById('cart');
  cartTable.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  var cartTable = document.getElementById('cart');

  for (var i in Cart) {
    var idNum = 1 * i + 1;
    var cartTableTR = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');

    td1.textContent = Cart[i].name;
    td2.textContent = Cart[i].quantityChosen;
    td3.textContent = 'Click to Remove X';

    td3.id = idNum;

    cartTableTR.appendChild(td1);
    cartTableTR.appendChild(td2);
    cartTableTR.appendChild(td3);


    cartTable.appendChild(cartTableTR);
  }

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  var indexID = event.target.id;

  if (indexID > 0) {
    Cart.splice(1 * indexID -1, 1);

    // TODO: Save the cart back to local storage
    localStorage.setItem('cart', JSON.stringify(Cart));

    // TODO: Re-draw the cart table
    renderCart();
  }

}

// This will initialize the page and draw the cart on screen
renderCart();
