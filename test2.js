// B1. Dự đoán kết quả của các biến sau, comment kết quả vào bên cạnh
const a1 = 'abc' + undefined; // 'abcundefined' 
const b2 = null + !NaN; // 1 
const b3 = undefined + null; // NaN 
const b4 = '12' + -12; // '12-12'
const b5 = -12 + !undefined; // -11
const b6 = '500ae' + '100ae';  // '500ae100ae'
const b7 = !Number(" ") + 'def'; // '!Number(" ")def
const b8 = !Boolean('abc') + false; //  0
const b9 = '100.0' + '20'; //'100.020'
const b10 = 0 + '0' //'00'


const c1 =  NaN - undefined //NaN
const c2 = true - !'abc'   //1
const c3 = !'120' - NaN    //NaN
const c4 = !true - !true  //NaN
const c5 = 120 * '10'    //1200
const c6 = !3.1416 * undefined  // NaN
const c7 = undefined / !null   // NaN
const c8 = Boolean(undefined) / !false;   // NaN
const c9 = '!100.0' - '20'; // -20
const c10 = 'abc' - 'a' // NaN


const d1 = 200 === '200.00' // false
const d2 = 'abc' == 'abc'// true
const d3 = false == NaN  // false
const d4 = true == '1'// true
const d5 = Boolean(null) === false // true
const d6 = Boolean(0) === 0 // false
const d7 = Number('12a') === null// false
const d8 =  NaN === 1 - NaN // true
const d9 =  NaN === undefined - null// true
const d10 = '90' / '9' === 10 // true

const e1 = 200 && '200.00'  // '200.00'
const e2 = 200 && '200.00'// '200.00'
const e3 = 'abc' || !'abc' // 'abc'
const e4 = false || NaN // NaN
const e5 = undefined && null // undefined
const e6 = true && 1 //true
const e7 = Boolean(null) || false  //false
const e8 = !Boolean(1) || true  //true
const e9 = Boolean(0) || 0 //0
const e10 = Number('12a') && !null  // NaN


/* 
B2. Tạo function isSameType(x, y) nhận vào 2 tham số x và y có kiểu dữ liệu bất kỳ, kiểm tra xem x và y có cùng kiểu dữ liệu hay không. Nếu có thì trả về true, ngược lai trả về false
VD: isSameType(1, 1) // true isSameType(1, '1') // false 
*/

function isSameType(x, y) {
   if (typeof x === typeof y){
    return true
   } 
   return false
}

isSameType(1, 1)


/* B3.
Tạo function isAuthenticaed(x, y) nhận vào 2 tham số x và y. x là 1 giá trị boolean tượng trưng cho việc user nay
VD: isSameType(1, 1) // true isSameType(1, '1') // false 
*/

// ????


/* B4.
Tạo function isNewFemaleUser(x) nhận vào tham số x mô tả 1 user có dạng như sau:
{
id: sẽ là 1 number bất kỳ
gender: sẽ là 'male' hoặc 'female',
joinDate: sẽ là 1 string có dạng 'dd/mm/yyyy'
}
Kiểm tra xem user x này có phải là 1 user nữ và mới đăng ký trong năm nay (2022) hay không. Nếu đúng thì trả về id của user đó, nếu sai thì trả về false 
*/

function isNewFemaleUser(x) {
 if (x.gender === 'female' && x.joinDate === '1/1/2022'){
return x.id
 } 
 return false
}

/* B5. Tạo function isAuthorized(x) nhận vào tham số x mô tả 1 user có dạng như sau:
{
role: sẽ là 'admin' hoặc 'normal',
rank: sẽ là 1 number số nguyên có giá trị từ 0 đến 3 (0, 1, 2, 3)
}
1 user sẽ có quyền truy cập nếu như user đó có role là 'admin' hoặc có rank lớn hơn 1. Kiểm tra xem user x có quyền truy cập hay không, nếu có thì trả về true, không thì trả về false
VD:
isAuthorized({role: 'admin', rank: 1 }) // true
isAuthorized({role: 'admin', rank: 2 }) // true
isAuthorized({role: 'normal', rank: 0 }) // false
isAuthorized({role: 'normal', rank: 3 }) // true
*/

function isAuthorized(x) {
    if(x.role === 'admin' || x.rank > 1) {
       return true
    } 
    return false
}

/* B6. Tạo function isPayable(x, y) nhận vào 2 tham số x, y
- tham sô x mô tả tình trạng balance (số dư tài khoản) của user, có dạng như sau:
{
balance: sẽ là 1 number số nguyên dương bất kỳ
isVIP: sẽ là 1 booklean true hoặc false
}
- tham sô y mô tả giá tiền của 1 món hàng, sẽ là 1 số nguyên dương bất kỳ

Nếu như user không đủ tiền trả cho món hàng (balance ít hơn giá tiền) thì trả về false, còn không trả về true. Tuy nhiên nếu như user đó là  (isVIP là true) thì dù không đủ tiền vẫn cho phép mua, trả về true
VD:
isPayable({balance: 1000000, isVIP: false }, 1000) // true
isPayable({balance: 1000, isVIP: false }, 1000000) // false
isPayable({balance: 1000000, isVIP: true }, 1000) // true
isPayable({balance: 1000, isVIP: true }, 1000000) // true
*/

function isPayable(x, y) {
    if (x.balance < y){
        return false
    } 
    else if (x.isVIP === true){
        return true
    } 
    return true
}


/* B7. Tạo function isPayable(x, y) nhận vào 2 tham số x, y
- tham sô x mô tả tình trạng balance (số dư tài khoản) của user, có dạng như sau:
{
balance: sẽ là 1 number số nguyên dương bất kỳ
isVIP: sẽ là 1 booklean true hoặc false
}
- tham sô y mô tả giá tiền của 1 món hàng, sẽ là 1 số nguyên dương bất kỳ

Nếu như user không đủ tiền trả cho món hàng (balance ít hơn giá tiền) thì trả về false, còn không trả về true. Tuy nhiên nếu như user đó là  (isVIP là true) thì dù không đủ tiền vẫn cho phép mua, trả về true
VD:
isPayable({balance: 1000000, isVIP: false }, 1000) // true
isPayable({balance: 1000, isVIP: false }, 1000000) // false
isPayable({balance: 1000000, isVIP: true }, 1000) // true
isPayable({balance: 1000, isVIP: true }, 1000000) // true 
*/

// Trùng B6

/*B8. Tạo function daysCalc(x), nhận vào 1 tham số x mô tả 1 số là 1 tháng trong năm (1- 12). 
Trả về số ngày trong tháng đó dưới dạng 1 number. 
Tuy nhiên nếu như đối số truyền vào cho x không phải kiểu dữ liệu là number thì trả về chuỗi sau: "Wrong data type: argument is not a valid number"
VD:
daysCalc(12) // 31
daysCalc(11) // 30
daysCalc('abc') // "Wrong data type: argument is not a valid number"
*/

function dayCalc(month) { 
     switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            numDays = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            numDays = 30;
            break;
        case 2:
            numDays = 28;
            break;
            default:
                numDays = "Wrong data type: argument is not a valid number"  
        }
        return numDays
    }


/*B9.
- Tạo 1 mảng đại diện cho 1 nhóm 4 người, mỗi người được mô tả bằng một object như sau:
{
name: 1 string bất kỳ,
gender: là sring 'male' hoặc 'female'
}
VD: const testArr = [
{name: 'Harry', gender: 'male'},
{name: 'Hermione', gender: 'female'}
{name: 'Ron', gender: 'male'},
{name: 'Ginny', gender: 'female'}
]
- Tạo 1 function girlFilter(x), nhận vào x là 1 mảng chính là mảng đã tạo bên trên.
Lọc ra các thành viên là nữ (gender là 'female') trong mảng x, trả về 1 mảng khác chỉ chứa các thành viên nữ đó.
VD: girlFilter(testArr) // [{name: 'Hermione', gender: 'female'}, {name: 'Ginny', gender: 'female'}]
*/

const testArr = [
    {name: 'Harry', gender: 'male'},
    {name: 'Hermione', gender: 'female'},
    {name: 'Ron', gender: 'male'},
    {name: 'Ginny', gender: 'female'}
    ]

function girlFilter(x) {
  return x.filter(( eachItem ) => { 
    return eachItem.gender === 'female'
})}
