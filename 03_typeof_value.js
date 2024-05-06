function typeofValue(a) {
    return typeof a;
}

console.log(typeofValue("function"))
console.log(typeofValue(3))
console.log(typeofValue(['4',4,]))
console.log(typeofValue(false))
console.log(typeofValue(['array']))
console.log(typeofValue({}))


// o/p 
// string
// number
// object
// boolean
// object
// object