// 1. Tạo 2 function tên và nội dung tùy ý theo 2 cách Function declaration và Function expression
//Function declaration
function anh(x, y) {
  console.log(x - y);
}

// Function expression
const anh = function (x, y) {
  console.log(x - y);
};

// 2. Tạo 1 function có 3 parameters, nội dung là console log ra 3 parameters đó.
// Call function đó với 3 trường hợp: call với 3 arguments, 2 arguments và 0 argument
function kieu(a, b, c) {
  console.log(a, b, c);
}

kieu(1, 2, 3); //1 2 3
kieu(2, 3); //2 3 undefined
kieu(); //undefined

// 3. Tạo 1 function nhận vào 1 parameter là 1 object bất kỳ.
// Mutate object đó trong nội dung function. Console.log object đó trước và sau khi gọi function

const u = { task: "function" };
console.log(u); //{task:'function'}

function baiTap(hihi) {
  hihi.task = "object";
}

baiTap(u);
console.log(u); //{task:'object'}

// 4. Tạo 1 function nhận vào 2 parameters.
// Nội dung function là console log ra (parameter1 + parameter 2). Call function đó 4 lần.
// Lần 1: argument 1 là 1 number, argument 2 là 1 number.
// Lần 2: argument 1 là 1 number, argument 2 là 1 string.
// Lần 3: argument 1 là null, argument 2 là 1 number
// Lần 4: argument 1 là number, không truyền vào argument 2

function task(k, h) {
  console.log(k + h);
}

task(2, 3); // 5
task(2, "3"); // undefined
task(null, 2); // undefined
task(2); // undefined
