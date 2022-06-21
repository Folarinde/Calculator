var a = prompt('Enter first number')
var b = prompt('Enter second number')
var operator = prompt('Enter operator from list: +, -, *, /')
if (operator==='+'){
    var sum = Number(a) + Number(b);
    alert(sum)
}
else if (operator==='-'){
    var diff = Number(a) - Number(b);
    alert(diff)
}
else if (operator==='*'){
    var product = Number(a) * Number(b);
    alert(product)
}
else if (operator==='/'){
    var div = Number(a) / Number(b);
    alert(div)
}
else{
    alert('Invalid operation!')
}