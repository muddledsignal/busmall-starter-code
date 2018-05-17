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

  // TODO: Find the table body
  var cartTable = document.getElementById('cart');

  // TODO: Iterate over the items in the cart
  for (var i in Cart) {
    var cartTableTR = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');

    td1.textContent = Cart[i].name;
    td2.textContent = Cart[i].quantityChosen;

    cartTableTR.appendChild(td1);
    cartTableTR.appendChild(td2);

    cartTable.appendChild(cartTableTR);
  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
