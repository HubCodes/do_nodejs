console.log('Hi');
setTimeout(function() {
    console.log('callback');
}, 0);
console.log('Bye');
[...new Array(10000).fill()].forEach(console.log);
