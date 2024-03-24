const addButtons = document.querySelectorAll('.add');
const minusButtons = document.querySelectorAll('.minus');
const quantityBoxes = document.querySelectorAll('.quantityBox');
const priceBoxes = document.querySelectorAll('.priceBox');
const totalPriceDiv = document.querySelector('.totalPrice');
const totalQtyDiv = document.querySelector('.totalqty');
const cashInput = document.getElementById('cashInput');
const placeOrderButton = document.getElementById('placeOrder');
const totalSumDiv = document.querySelector('.totalSum .totalPrice');
const totalCashDiv = document.querySelector('.totalCash .cash');
const totalChangeDiv = document.querySelector('.totalChange .change');

// Prices for each item
const prices = [4.25, 3.50, 4.15, 3.75];
let quantities = [0, 0, 0, 0]; // Initial quantities for each item

// Function to update total price
function updateTotalPrice() {
    let total = 0;
    priceBoxes.forEach((priceBox, index) => {
        const quantity = quantities[index];
        total += prices[index] * quantity;
    });
    totalPriceDiv.textContent = '$' + total.toFixed(2);
    placeOrderButton.disabled = total > parseFloat(cashInput.value);
}

// Function to update total quantity
function updateTotalQty() {
    let totalQty = 0;
    quantities.forEach(quantity => {
        totalQty += quantity;
    });
    totalQtyDiv.textContent = totalQty;
    cashInput.disabled = totalQty <= 0;
}

// Add event listeners to buttons
addButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (quantities[index] < 10) { // Add this condition
            quantities[index]++;
            quantityBoxes[index].textContent = quantities[index];
            priceBoxes[index].textContent = '$' + (prices[index] * quantities[index]).toFixed(2);
            updateTotalPrice();
            updateTotalQty();
            placeOrderButton.disabled = true; // Disable place order button
        }
    });
});

minusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (quantities[index] > 0) {
            quantities[index]--;
            quantityBoxes[index].textContent = quantities[index];
            priceBoxes[index].textContent = '$' + (prices[index] * quantities[index]).toFixed(2);
            updateTotalPrice();
            updateTotalQty();
            placeOrderButton.disabled = true; // Disable place order button
        }
    });
});

cashInput.addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    placeOrderButton.disabled = parseFloat(this.value) < parseFloat(totalPriceDiv.textContent.slice(1));
    checkCashInput(); // Check cash input
});

cashInput.addEventListener('blur', function (e) {
    if (this.value != '') {
        this.value = parseFloat(this.value).toFixed(2);
        this.value = '$' + this.value;
    }
});

// Function to check if cash input is equal to or greater than total price
function checkCashInput() {
    if (parseFloat(cashInput.value) >= parseFloat(totalPriceDiv.textContent)) {
        placeOrderButton.disabled = false;
    } else {
        placeOrderButton.disabled = true;
    }
}

// Add event listener to cash input
cashInput.addEventListener('input', checkCashInput);


document.querySelectorAll('.menuButton').forEach(button => {
    button.addEventListener('mouseover', () => {
        const box = button.parentElement;
        const overlay = box.querySelector('.overlay');
        const price = overlay.querySelector('.price');
        overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
        price.style.opacity = '1';
    });

    button.addEventListener('mouseout', () => {
        const box = button.parentElement;
        const overlay = box.querySelector('.overlay');
        const price = overlay.querySelector('.price');
        overlay.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        price.style.opacity = '0';
    });
});

window.onload = function() {
    var navLinks = document.querySelectorAll("nav ul li a");
    var logo = document.querySelector("nav img");

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function() {
            // Remove 'active' class from all links
            for (var i = 0; i < navLinks.length; i++) {
                navLinks[i].classList.remove('active');
            }
            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    }

    logo.addEventListener("click", function() {
        // Remove 'active' class from all links
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('active');
        }
        // Assuming the "Home" link is the first link in the nav
        navLinks[2].classList.add('active');
    });

    // Loop through all links
    for (var i = 0; i < navLinks.length; i++) {
        // If the current href matches the current URL
        if (navLinks[i].href === window.location.href) {
            // Add the 'active' class
            navLinks[i].classList.add('active');
        }
    }
}

document.getElementById('phoneInput').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\d]/g, '');
});

// Function to update total price
function updateTotalPrice() {
    let total = 0;
    priceBoxes.forEach((priceBox, index) => {
        const quantity = quantities[index];
        total += prices[index] * quantity;
    });
    const totalFixed = total.toFixed(2);
    totalPriceDiv.textContent = '$' + totalFixed;
    totalSumDiv.textContent = '$' + totalFixed; // Update total sum
    placeOrderButton.disabled = total > parseFloat(cashInput.value);
    updateChange(); // Update change
}

// Function to update cash
cashInput.addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    if (this.value === '') {
        placeOrderButton.disabled = true;
    } else {
        placeOrderButton.disabled = parseFloat(this.value) < parseFloat(totalPriceDiv.textContent.slice(1));
    }
    totalCashDiv.textContent = this.value; // Update total cash
    updateChange(); // Update change
});

cashInput.addEventListener('blur', function (e) {
    if (this.value === '') {
        this.value = '$0.00';
    } else if (!this.value.includes('.')) {
        this.value += '.00';
    } else if ((this.value.split('.')[1] || []).length < 2) {
        this.value += '0';
    }
    totalCashDiv.textContent =  this.value; // Update total cash
    updateChange(); // Update change
});

// Function to update change
function updateChange() {
    const total = parseFloat(totalPriceDiv.textContent.slice(1));
    const cash = parseFloat(totalCashDiv.textContent.slice(1));
    let change = (cash - total).toFixed(2);
    change = (change < 0 ? '0.00' : change);
    totalChangeDiv.textContent = '$' + (isNaN(change) ? '0.00' : change);
}

document.getElementById('placeOrder').addEventListener('click', function() {
    // Capture form data
    var order = {
        latte: document.getElementById('quantity1').innerText,
        espresso: document.getElementById('quantity2').innerText,
        frappe: document.getElementById('quantity3').innerText,
        icedCoffee: document.getElementById('quantity4').innerText,
        total: document.querySelector('.totalPrice').innerText,
        cash: document.getElementById('cashInput').value,
        change: document.querySelector('.change').innerText,
        name: document.querySelector('.name .infoInput').value,
        phone: document.getElementById('phoneInput').value,
        address: document.querySelector('.address .infoInput').value
    };

    // Check if all fields are filled
    if (!order.cash || !order.name || !order.phone || !order.address || parseFloat(order.cash) < parseFloat(order.total)) {
        alert('Please fill all fields and ensure cash is not less than total price');
        return;
    }

    // Store data in localStorage
    localStorage.setItem('order', JSON.stringify(order));

    // Redirect to verification.html
    window.location.href = 'verification.html';
});
