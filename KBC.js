var question_list=[
    "Who started environment day?",
    "Who is the gretest mountain in the world?",
    "Which river is the smallest in India?",
    "Capital of maharashtra",
    "Most population country in the world",
    "The first animal to go into space",
    "Who drafted the constitution of India",
    "A.R.Rehman is......",
    "Lrgest sea in the world",
]
var option_list=[
    ["India in 1967","United Nation in 1972","Amerika in 1987","Austerillia in 1989"],
    ["Mount Everest","Naga parbat","Mount Kilimanjaro","Mount Elbrus"],
    ["Brahmaputra","Narmada","Tapi","Arvari river"],
    ["Mumbai","Kolkata","Delhi","Kalyan"],
    ["India","Amerika","United states","China"],
    ["Monkey","Cat","Lion","Dog"],
    ["Dr.Br Ambedkar","Dr.Ar Ambedkar","Dr.Gr Ambedkar","Dr.Sr Ambedkar"],
    ["an acter","a music composer","both 1 and 2","an industrilist"],
    ["Coral sea","Arabian sea","Philippine sea","South china"],
]
var solution_list=[2,1,4,1,4,4,1,2,3]
var answer_list=[
    ["1.India in 1967","2.United Nation in 1972"],
    ["1.Mount Everest","4.Mount Elbrus"],
    ["3.Tapi","4.Arvari river"],
    ["1.Mumbai","3.Delhi"],
    ["2.Amerika","4.China"],
    ["3.Lion","4.Dog"],
    ["1.Dr.Br Ambedkar","4.Dr.Sr Ambedkar"],
    ["2.a music composer","3.both 1 and 2"],
    ["3.Philippine sea","4.South china"],
]

console.log("koun bnega crorepati(kbc)")
var i=0
var s=0
var count=0
while (i<question_list.length){
    console.log(question_list[i])
    var j=0
    var k=i
    while (j<option_list[i].length){
        var p=option_list[i][j]
        console.log(j+1,p)
        j++
    }
var num=require("readline-sync");
number=num.question("do you want 50 50 lifeline")
    if (number=="yes"){
        console.log("50 50 lifeline")
        if (count<1){
            console.log(answer_list[i])
            number_2=num.questionInt("enter the answer")
            if (number_2==solution_list[i]){
                s=s+10000
                console.log("your answer is carrect")
                console.log("you win RS/-",s)
            }
            else{
                console.log("your answer is incarrect")
                break
            }
            count++
        }
        else{
            console.log("you alredy use lifeline")
            m=num.questionInt("enter your answer")
            if (m==solution_list[i]){
                console.log("congras your answer is right")
                s=s+10000
                console.log("you win RS/-",s)
            }
            else{
                console.log("ur answer is wrong")
                console.log("u can play again")
                console.log("you win RS/-",s)
                break
            }
        }
    }
    else{
        var k=num.questionInt("enter your answer")
        if (k==solution_list[i]){
            console.log("right answer")
            s=s+10000
            console.log("you win RS/-",s)
            console.log("congrass")
        }
        else{
            console.log("no chance")
            console.log("ur answer is wrong")
        }
        
    }
    i++
}

