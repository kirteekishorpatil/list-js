function my_list(list1,list2){
    var i=0;
    var sum=0;
    while (i<list1.length){
        sum=sum+list1[i]+list2[i]
        i++
    }
    console.log(sum)
}
my_list([1,4,6],[3,6,5])
