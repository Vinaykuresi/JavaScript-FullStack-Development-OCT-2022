
// boolean : true or false

// Gate Operators : 
//     1) And
//     2) Or 
//     3) Not 

// And Operator : 

//     True -> T 
//     False -> F 

//     A       B       A and B 
//     T       T       T 
//     T       F       F 
//     F       T       F 
//     F       F       F 

// Or Operator : 

//     A       B       A or B 
//     T       T       T 
//     T       F       T 
//     F       T       T 
//     F       F       F 

// Not Operator : 

//     A   Not A 
//     T   F 
//     F   T 
//  Not(Not(F)) -> F

console.log(true && false)
console.log(true || false)

// 0 -> false 
// apart from 0 -> true

if(0){
    console.log("Its true")
}else{
    console.log("Its false")
}

if(-0){
    console.log("Its true")
}else{
    console.log("Its false")
}

if("Vinay"){
    console.log("Its true")
}else{
    console.log("Its false")
}

if(""){
    console.log("Its true")
}else{
    console.log("Its false")
}

if(10 < 20){
    console.log("Its true")
}else{
    console.log("Its false")
}

if(NaN){
    console.log("Its true")
}else{
    console.log("Its false")
}


if(1){
    console.log("Its true")
}else{
    console.log("Its false")
}

if(undefined){
    console.log("Its true")
}else{
    console.log("Its false")
}

if(10*20+30){
    console.log("Its true")
}else{
    console.log("Its false")
}

if((10*20)-200){
    console.log("Its true")
}else{
    console.log("Its false")
}

if(null){
    console.log("Its true")
}else{
    console.log("Its false")
}