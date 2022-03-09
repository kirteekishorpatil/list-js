var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
var list=[];
for (var i of char_list){
    if (!list.includes(i)){
        list.push(i)
    }
}
console.log(list)