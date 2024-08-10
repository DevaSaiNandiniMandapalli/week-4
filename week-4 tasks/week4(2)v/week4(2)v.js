let isTrue = true;
let isFalse = false;
console.log("true && false:", isTrue && isFalse);
console.log("true || false:", isTrue || isFalse); 
console.log("!true:", !isTrue); 
console.log("!false:", !isFalse); 
console.log("(true && false) || (true && !false):", (isTrue && isFalse) || (isTrue && !isFalse)); // true
