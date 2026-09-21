window.onload = function () {
    var order = JSON.parse(localStorage.getItem('order'));

    // Opening this page without having placed an order used to throw on
    // the first order.* read, which left the whole receipt blank.
    if (!order) {
        order = {
            latte: 0, espresso: 0, frappe: 0, icedCoffee: 0,
            total: '$0.00', cash: '$0.00', change: '$0.00',
            name: '-', phone: '-', address: '-'
        };
    }

    var prices = { latte: 4.25, espresso: 3.50, frappe: 4.15, icedCoffee: 3.75 };
    var labels = { latte: 'Latte', espresso: 'Espresso', frappe: 'Frappe', icedCoffee: 'Iced Coffee' };

    // one span per column, so the stylesheet can line the amounts up
    // instead of padding them across with &nbsp;
    Object.keys(labels).forEach(function (key) {
        var qty = parseInt(order[key], 10) || 0;
        document.getElementById(key).innerHTML =
            '<span class="rQty">x' + qty + '</span>' +
            '<span class="rName">' + labels[key] + '</span>' +
            '<span class="rAmt">$' + (qty * prices[key]).toFixed(2) + '</span>';
    });

    document.getElementById('total').innerText = order.total;
    document.getElementById('cash').innerText = order.cash;
    document.getElementById('change').innerText = order.change;
    document.getElementById('name').innerText = order.name;
    document.getElementById('phone').innerText = order.phone;
    document.getElementById('address').innerText = order.address;

    document.querySelector('.returnButton').addEventListener('click', function () {
        window.location.href = 'index.html';
    });
};
