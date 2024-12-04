var user = 'Cole';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are teh latest Sony WX4 reviews.';
var greetingEl = document.getElementById('greeting');

gettingEl.textContent = greeting;

var price = 200,
    studentDiscount = .10,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);