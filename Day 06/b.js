function reverse(cc){
    var str = cc.toString();
    console.log(str);
    var output = '';

    for (i = str.length -1 ; i >= 0 ; i--)
    {
     output += str[i];
    } 
    return Number(output);
}


reverse(1234578784784794)

