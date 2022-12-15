
// Objects : key and value pairs

var employee = {
    name : "JaiHind",
    DOB : "13-04-1995",
    designation : "SSE",
    additional_details : {
        mobile_no : "1423456754",
        address : "USA",
        street : {
            lane : "ed",
            streetName : "Js Roads"
        }
    }
}

// console.log("Name : ", employee.name)

// console.log("Mobile no : ", employee.additional_details.mobile_no)

// console.log(Object.keys(employee))

// console.log(Object.values(employee))

// for(const property in employee){
//     console.log(`${property} : ${employee[property]}`)
// }

// for(const [key, value] of Object.entries(employee)){
//     console.log(`${key} : ${value}`)
// }

// recursion concept
const iterate = (obj) =>{
    Object.keys(obj).forEach(key => {
        console.log(`key : ${key}, value : ${obj[key]}`)
        if(typeof obj[key] === "object" && obj[key] != null ){
            iterate(obj[key])
        }
    })
}


// iterate(employee)

var item = null // no object

console.log(item)
console.log(typeof(item))



