localStorage.setItem('name','john');
console.log(localStorage.getItem('name'));



sessionStorage.setItem('name','khan');
console.log(sessionStorage.getItem('name'));



document.cookie='name=kyle; expires=' + new Date(9999, 00, 00).toUTCString();

document.cookie='lastname=smile; expires=' + new Date(9999, 00, 00).toUTCString();

console.log(document.cookie);