var number = 30
var n = [10, 11, 12, 13, 14, 17, 18, 19] 
var list=[]
for (var i of n){
    for (var j of n){
        if (i+j===number)
        list.push([i,j])
    }
}
console.log(list)