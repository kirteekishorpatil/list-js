var list=[6,1,3,5,6,3,1]
var a=[]
var i=0
while (i<list.length){
    h=list[i]
    if (!a.includes(h)){
        a.push(h)
    }
    i++
}
console.log(a)
    
    
