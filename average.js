var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var sum_of_evan_numbers=0
var sum_of_odd_numbers=0
for (var i of elements){
    if (i%2===0){
        sum_of_evan_numbers+=i
    }
    else{
        sum_of_odd_numbers+=i
    }
}
console.log(sum_of_evan_numbers/2)
console.log(sum_of_odd_numbers/2)