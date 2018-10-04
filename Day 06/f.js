var arr = []

function transform (arr) {   
    arr = arr.split("");
    arr = arr.sort();
    var output = arr.map (function(num){
      return String.fromCharCode(Number(num)+64);
    });
    return output
}

transform ('213')