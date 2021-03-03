// Defense against the dark code : Async, Await & Promise. ??
// What not to do 
const url = "https://api.binance.com/api/v3/klines?symbol=BNBBTC&interval=1m&limit=3"
var getExchangeInfo = (url) => fetch(url)

// Returns a promise object immediately. Can't do anything with it.
// Why? We didnt let the system keep the promise, fired straight away. 
console.log(getExchangeInfo(url))

// Let us handle the promise like the pros do. 
var promise_getExchangeInfo = (url) => {
  getExchangeInfo(url)
    .then(res => res.json()) // .json() -> returns a promise
    .then(data => console.log(data))
  .catch(error => {
    console.log(error)
  })
}

// Now you get the data, since fetch() returns a Promise<...>, 
// We need to wait for it to finish the fetch of data from the backend and 
// then continue processing.
promise_getExchangeInfo(url)

// Call the code asynchronously. Let the main UI thread go on. 
var async_getExchangeInfo = async (url) => {
  
  // We wait on the promise and fire only if complete.
  let data = await getExchangeInfo(url)
  
  // Another promise ? We wait again...
  console.log("Async Example : ")
  
  console.log(await data.json())
}

// fires up first? Why? window.load() object doesn't wait !
console.log("Last Example : ")

// Async Await Example.
async_getExchangeInfo(url)

// Custom Promise Objects -> I have my own npm package for that .. hehehe.
var customPromiseFetch = (url) => {
  return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => {
        resolve(data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// Try doing the message log in a seperate .then() see what magic happens?
customPromiseFetch(url)
  .then(data => {
      console.log("Custom Fetch Promise :")
      console.log(data)
})
