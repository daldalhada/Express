const url = require('url');

const myURL = new URL('https://daldalhada.com/search/category?catId=50000833&limit=50');

console.log(myURL.origin);      // https://daldalhada.com
console.log(myURL.pathname);    // /search/category
console.log(myURL.protocol);    // https:
console.log(myURL.search);      // ?catId=50000833&limit=50