var number_list = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
var list1=[]
var list2=[]
for (var i of number_list){
if (!list1.includes(i)){
list1.push(i)
}
}
for (var j of list1){
var count=0
for (var k of number_list){
if (j===k){
count++
}
}
if (count>1){
list2.push(j)
}
}
console.log(list1)
console.log(list2)

