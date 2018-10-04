var resultA = [80, 70, 50, 30, 40, 90]

var avg = resultA.reduce(function(accumulator, number){
    return accumulator + number / resultA.length;
}, 0);

console.log(avg)