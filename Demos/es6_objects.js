// ES6 Sets 
// Uses SameZeroValue() as comparator
// The referneces are compared. 
// Are the two objects referencing the 
// same memory location?

let data = {
  name : "Sumit Lahiri",
  age : "90", 
  url : "kjbsdnlkfgblkjbasg", 
  params : "nkljnalkjsndf"
}

let data2 = {
  name : "Sumit Lahiri",
  age : "90", 
  url : "kjbsdnlkfgblkjbasg", 
  params : "nkljnalkjsndf"
}

let data3 = data2

let objSet = new Set()

objSet.add(data);

// Since the comparison is not by value
// The data2 object is added.
objSet.add(data2);

objSet.add(data);

// data3 refers to the same location. 
// This wont get added.
objSet.add(data3);

// 2 === > {data, data2}
console.log(objSet.size)
