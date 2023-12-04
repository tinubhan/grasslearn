let str = "password123";

let pattern = /^[A-Za-z0-9]{8,}$/g;

// ^ -> neggettes
// $ -> fixing the end of a pattern
console.log(pattern.test(str));
console.log(str.match(pattern));