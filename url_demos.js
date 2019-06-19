const url = require('url');

const myUrl = new URL('https://syafiqfaiz.com/hello.html?id=100&status=active')

// serialized url
console.log(myUrl.href);
console.log(myUrl.toString())


///url host
console.log(myUrl.host);
console.log(myUrl.hostname)

// url pathname
console.log(myUrl.pathname);

//serialize query
console.log(myUrl.search)
console.log(myUrl.searchParams)