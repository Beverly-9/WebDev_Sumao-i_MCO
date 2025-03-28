// Initialize Cart from Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCart();

// Function to Add Item to Cart
function addToCart(productName, price) {
    let item = cart.find(item => item.name === productName);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    saveAndUpdateCart();
}

// Function to Remove Item from Cart
function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    saveAndUpdateCart();
}

// Function to Update Cart Display
function updateCart() {
    let cartList = document.getElementById("cart-list");
    let totalPrice = document.getElementById("total-price");
    cartList.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `${item.name} (x${item.quantity}) - ₱${item.price * item.quantity} 
            <button class="remove-btn" onclick="removeFromCart('${item.name}')">❌</button>`;
        cartList.appendChild(listItem);
        total += item.price * item.quantity;
    });

    totalPrice.textContent = total;
}

// Function to Save Cart to Local Storage
function saveAndUpdateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}
