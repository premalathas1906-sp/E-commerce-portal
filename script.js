function validateLogin() {
const email = document.getElementById('loginEmail').value;
const password = document.getElementById('loginPassword').value;


if(!email || !password) {
alert('Please enter both email and password.');
return false;
}
if(password.length < 6) {
alert('Password must be at least 6 characters long.');
return false;
}
alert('Login successful!');
return true; // In real app, authentication required
}


// User Registration Validation
function validateRegister() {
const name = document.getElementById('regName').value;
const email = document.getElementById('regEmail').value;
const phone = document.getElementById('regPhone').value;
const password = document.getElementById('regPassword').value;
const confirmPassword = document.getElementById('regConfirmPassword').value;


if(!name || !email || !phone || !password || !confirmPassword) {
alert('All fields are required.');
return false;
}
if(password.length < 6) {
alert('Password must be at least 6 characters long.');
return false;
}
if(password !== confirmPassword) {
alert('Passwords do not match.');
return false;
}
alert('Registration successful!');
return true;
}


// Optional: Add more JS functionality like wishlist, cart, etc.
// Example: Add to Wishlist / Cart
const wishlistButtons = document.querySelectorAll('.product-card button:nth-child(3), .wishlist-card button');
wishlistButtons.forEach(btn => {
btn.addEventListener('click', () => {
alert('Item added successfully!');
});
});
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

/**
 * Add product to Cart
 * @param {string} productName - Name of the product
 * @param {number} productPrice - Price of the product
 */
function addToCart(productName, productPrice) {
    const item = { name: productName, price: productPrice };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`"${productName}" has been added to your cart!`);
    console.log('Cart:', cart);
}

/**
 * Add product to Wishlist
 * @param {string} productName - Name of the product
 * @param {number} productPrice - Price of the product
 */
function addToWishlist(productName, productPrice) {
    const item = { name: productName, price: productPrice };
    wishlist.push(item);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert(`"${productName}" has been added to your wishlist!`);
    console.log('Wishlist:', wishlist);
}

/**
 * Optional helper functions to view cart and wishlist in console
 */
function showCart() {
    console.log('Cart Items:', cart);
}

function showWishlist() {
    console.log('Wishlist Items:', wishlist);
}

/**
 * Optional: Remove item from cart by index
 * @param {number} index - Index of item to remove
 */
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Updated Cart:', cart);
}

/**
 * Optional: Remove item from wishlist by index
 * @param {number} index - Index of item to remove
 */
function removeFromWishlist(index) {
    wishlist.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    console.log('Updated Wishlist:', wishlist);
}
