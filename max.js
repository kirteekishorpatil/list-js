// Write the program, to find the max element of the array,and console it.
var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var max=0;
for (var i=0;i<numbers.length;i++){
    if (max<numbers[i]){
        max=numbers[i]
    }
}
console.log(max,"max")