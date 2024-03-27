window.onload = function() {
    // Retrieve data from localStorage
    var order = JSON.parse(localStorage.getItem('order'));

    // Populate receipt
    document.getElementById('latte').innerHTML = `<span class="left">x${order.latte} Latte</span><span class="right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${order.latte * 4.25}</span>`;
    document.getElementById('espresso').innerHTML = `<span class="left">x${order.espresso} Espresso</span><span class="right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${order.espresso * 3.50}</span>`;
    document.getElementById('frappe').innerHTML = `<span class="left">x${order.frappe} Frappe</span><span class="right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${order.frappe * 4.15}</span>`;
    document.getElementById('icedCoffee').innerHTML = `<span class="left">x${order.icedCoffee} Iced Coffee</span><span class="right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${order.icedCoffee * 3.75}</span>`;
    document.getElementById('total').innerText = order.total;
    document.getElementById('cash').innerText = order.cash;
    document.getElementById('change').innerText = order.change;
    document.getElementById('name').innerText = order.name;
    document.getElementById('phone').innerText = order.phone;
    document.getElementById('address').innerText = order.address;

    // Add event listener to backToIndex button
    document.querySelector('.returnButton').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
};