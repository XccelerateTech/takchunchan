var myArray = [4, 8, 2, 7, 5];
var yourArray = [4, 8, 2, 7, 5];

function processArray(a, cb) {
    return a.map(cb)
}

//part 1
console.log(
    processArray(myArray, function (a) {
        return a * 2;
    })
)

//part 2
console.log(
    processArray(yourArray, function (b) {
        return b + 5;
    })
)




