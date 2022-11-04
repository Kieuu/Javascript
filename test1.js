/*Câu 3

Tách nhánh js-data-types-test từ nhánh chính, tạo 1 file test1.js để thực hiện các nội dung sau: (KHÔNG console.log)
1. Từ biến a = 'Have a nice day', hãy tạo ra các biến có giá trị như sau:
a1 sẽ có giá trị = a thay đổi chữ 'day' thành 'weekend'
a2 sẽ có giá trị = a bỏ đi chữ 'day'
a3 sẽ có giá trị là phép kiểm tra a có bắt đầu bằng 'h' hay không
a4 sẽ có giá trị = a nhưng viết hoa tất cả chữ cái
a5 sẽ có giá trị là phép kiểm tra a có chứa chữ 'nice' hay không
*/


let a = 'Have a nice day'

a1 = a.replace('day','weekend')

a2 = a.replace('day','')

a3 = a.startsWith('h')

a4 = a.toUpperCase ()

a5 = a.includes('nice')


/*
2. Dự đoán kết quả của các biến sau, comment kết quả vào bên cạnh
*/

const b1 = Number("10.000"); //10
const b2 = Number(" 0.77 "); //0.77
const b3 = Number("b3"); //NaN
const b4 = Number("1+2"); //NaN
const b5 = Number(null); //NaN
const b6 = Number(undefined); //NaN
const b7 = Number(false); //0
const b8 = Number(""); //0
const b9 = Number(" "); //0
const b10 = Number({ key: "value" }); //NaN
const b11 = Number([12.5]); //12.5

const b12 = function(x) {
x = 10
}  //undefined

/*
3. Tạo 1 object tên là c dùng để mô tả 1 chiếc điện thoại (tên và nội dung các trường phải có liên quan đến chiếc điện thoại đó), với các yêu cầu sau
- c phải có chính xác 3 trường: 2 property thông thường và 1 method,
- Trong nội dung method có sử dụng this
- Từ giá trị của object c, tạo ra các biến c1, c2,.. là các điện thoại khác, với yêu cầu như sau:
c1 giữ nguyên tên các property của c nhưng có giá trị khác
c2 giữ nguyên tên các property của c nhưng có giá trị khác, có thêm 1 property và 1 method mới so vói c
c3 chỉ giữ lại method của c, các property khác bị xóa. nội dung method cũng sẽ thay đổi so với c
- Từ giá trị của object c, tạo ra các biến c4, c5 là các mảng như sau:
c4 là 1 mảng chứa các tên property của c
c5 là 1 mảng chứa các giá trị property của c
Xóa item thứ 2 từ trái qua của c4
Thêm 1 item bất kỳ vào cuối c5
*/

const c = {
    name: 'Galaxy S22',
    origin: 'Viet Nam',
    kind: function(x){
        if(this.origin === 'Viet Nam'){
            return 'Hang noi dia'
        }
        return 'Hang nhap khau'
    }
}

const c1 = Object.assign(c, {name:'IP 13'})

const c2 = Object.assign(c, {origin: 'Nhat Ban', price: '2000', sell: function(y){return 'Hết hàng'} })

const c3 = Object.assign(c.kind, {kind: function(){
    if(this.origin === 'Viet Nam'){
        return 'Hang A'
    }
    return 'Hang B'
}})

const c4 = Object.keys(c).splice(1,1)
const c5 = Object.values(c).push('ulatr0i')


/*
Câu 4
viết các hàm theo yêu cầu sau:
- removeSpaces(x) {} : nhận vào 1 string x, trả về 1 string mới với nội dung là string x nhưng loại bỏ hết dấu cách ' ' nếu có.
VD removeSpaces('today is a good day') sẽ trả về 'todayisagoodday'

- chill(x) {} : nhận vào 1 string x là tên 1 bài hát, có giá trị mặc định là 'này'. Trả về 1 string có nội dung: 'Bài x chill phết!'
VD chill('Lối nhỏ') sẽ trả về 'Bài Lối nhỏ chill phết!', chill() sẽ trả về 'Bài này chill phết!'

- yearChecker(x) {} : nhận vào 1 string x là ngày sản xuất của một món đồ (dạng dd/mm/yyyy), kiểm tra xem món đồ này có phải được sản xuất trong năm nay không (2022)
VD yearChecker('01/01/2022') sẽ trả về true, yearChecker('01/01/20221') sẽ trả về false

- diskArea(x) {} : nhận vào 1 number x là bán kính của 1 hình tròn, trả về diện tích của hình tròn đó (có thể tra gg để tìm công thức tính hình tròn)
VD diskArea(5) sẽ trả về 78.5398163397 (không cần làm tròn)

- beforeLastIndex(x) {} : nhận vào 1 tham số x là 1 array, trả về item trước item cuối cùng của array đó
VD beforeLastIndex([1, '2', true]) sẽ trả về '2', beforeLastIndex(['a', null, 100, false]) sẽ trả về 100

- isObject(x) {} : nhận vào 1 tham số x là kiểu dữ liệu bất kỳ, kiểm tra xem x có phải là 1 object hay không, trả về 1 boolean
VD isObject(12) sẽ trả về fasle, objectChecker({key: 'value'}) sẽ trả về true

- objectChecker(x) {} : nhận vào 1 tham số x là 1 object có các trường bất kỳ, bắt buộc có 1 trường là isChecked: false. Trả về 1 object mới có các trường giống như object x, nhưng giá trị trường "isChecked" sẽ là true
VD objectChecker({key: 'value', isChecked: false}) sẽ trả về 1 object mới = {{key: 'value', isChecked: true}}

- propertyChecker(x, y) {}: nhận vào tham số x là 1 object có các trường bất kỳ và tham số y là 1 string bất kỳ. Kiểm tra xem object x đó có chứa trường nào tên giống như string y không, trả về 1 boolean
VD propertyChecker({key: 'value'}, 'key') sẽ trả về true
VD propertyChecker({key: 'value'}, 'key1') sẽ trả về false

- 2 fucntion: convertJSONData(x) {} và fetchJSONData(y) {} :
+ convertJSONData nhận vào 1 tham số x là 1 JSON object có dạng
{
statusCode: number,
data: {
message: string
}
}
convertJSONData trả về giá trị của message

+ fetchJSONData nhận vào 1 tham số y là 1 callback function. Callback y này sẽ nhận vào tham số là 1 JSON là response từ API, JSON đó có dạng sau:
{
statusCode: number,
data: {
message: string
}
}
và trả về giá trị của message

+ ngoài ra, trong nội dung fetchJSONData sẽ có 1 biến tên là JSONdata, có giá trị là 1 JSON có dạng như trên
 Khi call createJSONData và truyền vào cho nó 1 callback, sẽ trả về giá trị của message


VD fetchJSONData(x) {
data = {
statusCode: 200,
data: {
message: "Logged in sucessfully"
}
}

// xử lý callback x ở đây
}

fetchJSONData(convertJSONData) sẽ trả về "Logged in sucessfully"
*/

function removeSpaces(x) {
    return x.replaceAll(' ','')
} 

function chill(x = 'này') {
    return 'Bài '+ x +' chill phết!'
} 

function yearChecker(x) {
    if (x.includes('2022')){
    return 'true'
}   return 'false'
}

function diskArea(x) {
    return x*3.14159265359
}  



function beforeLastIndex(x) {
    return x[x.length - 2]
}



//  isObject(x) {} : nhận vào 1 tham số x là kiểu dữ liệu bất kỳ, kiểm tra xem x có phải là 1 object hay không, trả về 1 boolean
// VD isObject(12) sẽ trả về fasle, objectChecker({key: 'value'}) sẽ trả về true

function isObject(x) {
    if(typeof x === 'object'){
        return true
    }   return false
}

// - objectChecker(x) {} : nhận vào 1 tham số x là 1 object có các trường bất kỳ, bắt buộc có 1 trường là isChecked: false. Trả về 1 object mới có các trường giống như object x, 
// nhưng giá trị trường "isChecked" sẽ là true
// VD objectChecker({key: 'value', isChecked: false}) sẽ trả về 1 object mới = {{key: 'value', isChecked: true}}

function objectChecker(x) {
    x.isChecked = true
    return x
}

// - propertyChecker(x, y) {}: nhận vào tham số x là 1 object có các trường bất kỳ và tham số y là 1 string bất kỳ. Kiểm tra xem object x đó có chứa trường nào tên giống như string y không, trả về 1 boolean
// VD propertyChecker({key: 'value'}, 'key') sẽ trả về true
// VD propertyChecker({key: 'value'}, 'key1') sẽ trả về false

// Cách 1:
function propertyChecker(x, y) {
    return x.hasOwnProperty(y)
}

// Cách 2: 
function propertyChecker(x, y) {
    let keyExist = Object.keys(x).some(key => key === y);
    return keyExist;
}


/* - 2 fucntion: convertJSONData(x) {} và fetchJSONData(y) {} :
 + convertJSONData nhận vào 1 tham số x là 1 JSON object có dạng
{
statusCode: number,
data: {
message: string
}
}
convertJSONData trả về giá trị của message

+ fetchJSONData nhận vào 1 tham số y là 1 callback function. Callback y này sẽ nhận vào tham số là 1 JSON là response từ API, JSON đó có dạng sau:
{
statusCode: number,
data: {
message: string
}
}
và trả về giá trị của message

+ ngoài ra, trong nội dung fetchJSONData sẽ có 1 biến tên là JSONdata, có giá trị là 1 JSON có dạng như trên
 Khi call createJSONData và truyền vào cho nó 1 callback, sẽ trả về giá trị của message


VD fetchJSONData(x) {
data = {
statusCode: 200,
data: {
message: "Logged in sucessfully"
}
}

// xử lý callback x ở đây
}

fetchJSONData(convertJSONData) sẽ trả về "Logged in sucessfully"
*/


function convertJSONData(x) {
    return x.data.message
}


function fetchJSONData(y) {
    let JSONdata = {
        statusCode: 200,
        data: {
        message: "Logged in sucessfully" 
    }
}
    return y(JSONdata)

}

fetchJSONData(convertJSONData)