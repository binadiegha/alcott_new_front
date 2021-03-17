let split = document.cookie.split(';')
let secondSplit = split.map(cookie => cookie.split('='))
let reduced = secondSplit.reduce((accumulator, [key, value]) => ({...accumulator, [key.trim()]: decodeURIComponent(value)}), {});



console.log(reduced);
console.log(reduced.email);

// balance updater

let current_balance = document.querySelectorAll('.current_balance');

current_balance.forEach( balance => {
    balance.innerHTML = reduced.balance
})