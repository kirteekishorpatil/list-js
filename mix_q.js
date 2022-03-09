// Write a program where it will console these 3 parameters for odd and even numbers.
// count
// sum
// average
var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var evan_number_count=0
var evan_number_sum=0
var odd_number_count=0
var odd_number_sum=0
for (var i of elements){
    if (i%2===0){
        evan_number_count+=1
        evan_number_sum+=i
    }
    else{
        odd_number_count+=1
        odd_number_sum+=i
    }
}
console.log("evan_number_count",evan_number_count)
console.log("evan_number_sum",evan_number_sum)
console.log("odd_number_count",odd_number_count)
console.log("odd_number_sum",odd_number_sum)
console.log("average",evan_number_sum/2)
console.log("average",odd_number_sum/2)

