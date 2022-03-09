var kitna_paisa_hai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 
    31010101, 532010, 510, 4100];
var count_of_Crorepati=0;
var count_of_Lakhpati=0;
var count_of_Dilwale=0;
for (var i of kitna_paisa_hai){
if (i>=10000000){
    count_of_Crorepati+=1
}
else if (i>=100000){
    count_of_Lakhpati+=1
}
else{
    count_of_Dilwale+=1
}
}
console.log("count_of_Crorepati",count_of_Crorepati)
console.log("count_of_Lakhpati",count_of_Lakhpati)
console.log("count_of_Dilwale",count_of_Dilwale)


