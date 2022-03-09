var redline=require("readline-sync")
var number=redline.questionInt("enter the number do you want")
var l=[]
while (number>0){
    k=number%10
    number=Math.floor(number/10)
    l.push(k)
}
m=[]
var i=0
while (i<=l.length){
if (l[i]==0){
    m.push("zero")
}
if (l[i]==1){
    m.push("one")
}
if (l[i]==2){
    m.push("two")
}
if (l[i]==3){
    m.push("three")
}
if (l[i]==4){
    m.push("four")
}
if (l[i]==5){
    m.push("five")
}
if (l[i]==6){
    m.push("six")
}
if (l[i]==7){
    m.push("seven")
}
if (l[i]==8){
    m.push("eight")
}
if (l[i]==9){
    m.push("nine")
}  
i++
}
console.log(m)




   
    
    
    