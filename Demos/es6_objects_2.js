// ES6 Spread Operator & Object Access : What not to do 
var userObj = {
    name : "Sumit",
    age : 25,
    profession : "Full Stack Developer",
    address : {
      street : "Bradford Street",
      pincode : "52002",
  },
  country_code : "91",
  phone : [
    "95223584414",
    "95521412563",
    "41332541455"
  ], 
  salary : "1400000"
}

// Normal Array : 
var tasks = ["Work", "Sleep", "Code"]
console.log("Normal Access : We need to access as array")
console.log(tasks)

// Use of Spread Operator : Needs an Iterator<IterableInterface> (tsx)
console.log("Spread Operator destructures the whole array.")
console.log(...tasks)

// Spread and rest operator : ES6/ESNEXT, Type coercion supported. 
console.log("We got an sequence of object and we need to store it as shown below")
console.log(...tasks)
console.log("Eg : const [data] = await fetchFromApi(req, params);")
console.log([...tasks]);

// Normal Print : 
console.log(userObj)

// Access each object property.
const iterPrint = (obj) => {
  for (var props in obj) {
    console.log(`${props} -> ${obj[props]}`);
  }
}

console.log(...userObj.phone)
iterPrint(userObj);

// Error, You might be tempted to "flatten" a non serialzed object like userObj above : 
console.log("javascript objects are not iterable !!")
console.log(...userObj)
// PS : Does not have an iterator. 
