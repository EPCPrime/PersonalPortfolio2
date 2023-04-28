// Link Social
const linkedIn = document.querySelector('#linkedIn');
const instagram = document.querySelector('#instagram');
const github = document.querySelector('#github');
const portfolio = document.querySelector('#portfolio');

linkedIn.addEventListener('click', function() {
    window.open('https://id.linkedin.com/in/erick-prim-caesar-19a446231', '_blank');
});
instagram.addEventListener('click', function() {
    window.open('https://www.instagram.com/epc_prime135/', '_blank');
});
github.addEventListener('click', function() {
    window.open('https://github.com/EPCPrime', '_blank');
});

// Init AOS
AOS.init();