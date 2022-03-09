var a="kirtee"
var string=""
var d=[]
for (var i=0;i<a.length;i++){
    if (a[i]!=" "){
        string=string+a[i]
    }
    else{
        d.push(string)
        string=""
    }
}
console.log(d)

