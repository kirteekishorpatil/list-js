// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// var evan_numbers=0
// var odd_numbers=0
// for (var i of elements){
//     if (i%2==0){
//         evan_numbers+=1
//     }
//     else{
//         odd_numbers+=1
//     }
// }
// console.log(evan_numbers)
// console.log(odd_numbers)



// var string="my name is kirti saloni ";
// var array=[];
// var str=" "
// var reverse=[]
// var count=0
// for (i=0;i<string.length;i++){
//     if (string[i]!=" "){
//         str=str+string[i]
//         count++
//     }
    
//     else{
//         array.push(str)
//         str=""
//     }
// } 
// array.reverse()
// console.log(array) 
// console.log("count is",count


var a="kirtee "
var string=""
var d=[]
for (var i=0;i<a.length;i++){
    if (a[i]){
        string=string+a[i]
        // console.log(string)
    }
    else{
        d.push(string)
        string=""
    }
}
console.log(d)