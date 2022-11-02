// Câu 1
// Tách nhánh js-loop từ nhánh chính. Tạo 1 file script-loop.js có chứa các nội dung bên dưới. Tạo 1 PR từ js-loop vào nhánh chính và dán link PR làm câu trả lời
// Tạo function sum(x), nhận vào tham số x là 1 number. 
// Trả về tổng các số tự nhiên từ 1 cho đến x. Nếu như x là một số <= 1 thì trả về 1 string "Please use a number that bigger than 1"

function sum(x) {
    let result = 0 
    if (x <= 1){
        return "Please use a number that bigger than 1"
    } else {
        for (let i= 1;i<=x;i++) {
            result +=i 
        }
        return result
    } 
}
sum(5); //15
sum(0); //"Please use a number that bigger than 1"

// Câu 2
// Tạo function even(x), nhận vào tham số x là 1 number. Trả về 1 mảng chứa các số chẵn trong khoảng từ 1 cho đến x.
// Lưu ý cách xác định 1 số a có phải là số chẵn hay không: nếu như a % 2 === 0 thì a là số lẻ (% là toán tử tính số dư, vd 5 % 2 sẽ bằng 1 vì 5 chia 2 dư 1)

function even(x) {
    let array = [];
    for (let i= 1; i<=x; i++) {
        if (i % 2 === 0) {
         array.push(i)
        }
    }
    return array;
 }

even(5) //(2) [2, 4]

// Câu 3
// Tạo function doubleAndTriple(x), nhận vào tham số x là 1 mảng, item là các number bất kỳ. Trả về 1 mảng mới chứa các item là item của mảng x gấp 2 lên nếu như là số chẵn, gấp 3 lên nếu như là số lẻ

function doubleAndTriple(x =[33, 141, 190]) {
    let array = [];
    for (let i= 0; i<x.length; i++) {
        if (x[i] % 2 === 0) {
         array.push(x[i] * 2)
        }else {
            array.push(x[i] * 3)
        }
    }
     return  array 
    }

// Câu 1
// Tách nhánh js-loop từ nhánh chính. Tạo 1 file script-loop.js có chứa các nội dung bên dưới. Tạo 1 PR từ js-loop vào nhánh chính và dán link PR làm câu trả lời
// Tạo function sum(x), nhận vào tham số x là 1 number. 
// Trả về tổng các số tự nhiên từ 1 cho đến x. Nếu như x là một số <= 1 thì trả về 1 string "Please use a number that bigger than 1"

function sum(x) {
    let result = 0 
    if (x < 1){
        console.log("Please use a number that bigger than 1") 
    } else {
        for (let i= 1;i<=x;i++) {
            result +=i 
        }
        return result
    } 
}
sum(5); //15
sum(0); //"Please use a number that bigger than 1"

// Câu 2
// Tạo function even(x), nhận vào tham số x là 1 number. Trả về 1 mảng chứa các số chẵn trong khoảng từ 1 cho đến x.
// Lưu ý cách xác định 1 số a có phải là số chẵn hay không: nếu như a % 2 === 0 thì a là số lẻ (% là toán tử tính số dư, vd 5 % 2 sẽ bằng 1 vì 5 chia 2 dư 1)

function even(x) {
    let array = [];
    for (let i= 1; i<=x; i++) {
        if (i % 2 === 0) {
         array.push(i)
        }
    }
    return array;
 }

even(5) //(2) [2, 4]

// Câu 3
// Tạo function doubleAndTriple(x), nhận vào tham số x là 1 mảng, item là các number bất kỳ. Trả về 1 mảng mới chứa các item là item của mảng x gấp 2 lên nếu như là số chẵn, gấp 3 lên nếu như là số lẻ

function doubleAndTriple(x =[33, 141, 190]) {
    let array = [];
    for (let i= 0; i<x.length; i++) {
        if (x[i] % 2 === 0) {
         array.push(x[i] * 2)
        }else {
            array.push(x[i] * 3)
        }
    }
     return  array 
    }


// Câu 4
// Tạo function countRole(x, y)
/* 
- Tham số x sẽ đại diện cho danh sách nv công ty dưới dạng 1 mảng chứa các object các là các nhân viên, có dạng như sau:
[
{
name: 1 string bất kỳ
role: 1 string có thể là 1 trong 4 giá trị sau: "developer", "tester", "designer", "PM"
}
...
]
- Tham số y sẽ đại diện cho role của 1 nv, sẽ là 1 trong 4 giá trị sau: "developer", "tester", "designer", "PM"
- countRole(x, y) sẽ trả về số nv có role là y trong mảng x
*/



const testArr1 = [
    { name: "John", role: "developer" },
    { name: "Anna", role: "tester" },
    { name: "Steve", role: "designer" },
    { name: "Tim", role: "PM" },
    ]
    const testArr2 = [
    { name: "John", role: "developer" },
    { name: "Anna", role: "tester" },
    { name: "Adam", role: "developer" },
    { name: "Tim", role: "PM" },
    ]
    const testArr3 = [
    { name: "John", role: "developer" },
    { name: "Anna", role: "tester" },
    { name: "Lemon", role: "tester" },
    { name: "Alex", role: "developer" },
    { name: "Harry", role: "designer" },
    ]

function countRole(x, y) {
    let roleFilter =  x.filter((item)=> {
        return item.role === y
    })
    return roleFilter.length
}

countRole(testArr1, "designer") // trả về 1
countRole(testArr2, "developer") // trả về 2
countRole(testArr3, "PM") // trả về 0


/* Câu 5: 
. Tạo function regionFilter(x, y)
- Tham số x sẽ đại diện cho danh sách user dưới dạng 1 mảng chứa các object các là các user, có dạng như sau:
[
{
username: 1 string bất kỳ
region: 1 string có thể là 1 trong các giá trị sau: "ASIA", "EUROPE", "AMERICAS", "AUSTRALIA", "AFRICA", "ANTARCTICA"
}
...
]
- Tham số y sẽ đại diện cho khu vực của 1 user, sẽ là 1 string có thể là 1 trong các giá trị sau: "Asia", "Europe", "Americas", "Australia", "Africa", "Antarctica"
- regionFilter(x, y) sẽ trả về 1 mảng chứa các user có region là y lọc ra từ mảng x
*/

const testArr4 = [
{ username: "John", region: "AUSTRALIA" },
{ username: "Anna", region: "AUSTRALIA" },
{ username: "Steve", region: "ASIA" },
]
const testArr5 = [
{ username: "Ryan", region: "ASIA" },
{ username: "Gomez", region: "ANTARCTICA" },
{ username: "Rose", region: "AMERICAS" },
{ username: "Lisa", region: "EUROPE" },
]
const testArr6 = [
{ username: "John", region: "EUROPE" },
{ username: "Anna", region: "EUROPE" },
{ username: "Lemon", region: "EUROPE" },
{ username: "Anna", region: "AFRICA" },
{ username: "Lemon", region: "AFRICA" },
]

function regionFilter(x, y) {
    let filterRegion =  x.filter((item)=> {
        return item.region === y
    })
    return filterRegion
}

regionFilter(testArr4, "EUROPE")


/*
Câu 6: 
. Tạo function genderFilter(x, y)
- Tham số x sẽ đại diện cho danh sách nv công ty dưới dạng 1 mảng chứa các object các là các nhân viên, có dạng như sau:
[
{
name: 1 string bất kỳ
gender: 1 string có thể là 1 trong 2 giá trị sau: "male", "female",
}
...
]
- Tham số y sẽ đại diện cho giới tính của 1 nv, sẽ là 1 trong 2 giá trị sau: "male", "female"
- genderFilter(x, y) sẽ trả về 1 mảng chứa TÊN các nv có gender là y lọc ra từ mảng x
*/
const testArr7 = [
    { name: "John", gender: "male" },
    { name: "Anna", gender: "female" },
    { name: "Steve", gender: "male" },
    { name: "Tim", gender: "male" },
    ]
    const testArr8 = [
    { name: "Ryan", gender: "male" },
    { name: "Gomez", gender: "female" },
    { name: "Rose", gender: "female" },
    { name: "Lisa", gender: "female" },
    ]
    const testArr9 = [
    { name: "John", gender: "male" },
    { name: "Anna", gender: "female" },
    { name: "Lemon", gender: "female" },
    ]

function genderFilter(x, y){
    let filterGender =  x.filter((item)=> {
        return item.gender === y
    })
   let filterName = filterGender.map((index)=> {
        return index.name
    })
    return filterName
}

genderFilter(testArr7, "male")
