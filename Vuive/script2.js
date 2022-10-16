// 1 1. Tạo 1 biến x có giá trị là 1 object có các trường bất kỳ, sau đó tạo 1 biến y = biến x. 
// Thay đổi giá trị của y. Console log ra giá trị của x và y sau đó.

let x1 = {
  name: "Ga chien",
  quan: "Cricke V",
};
let y = x1;
y.name = 'Dau phu chien'

console.log(x1);
console.log(y);

// 2 Thực tiện thử thao tác copy các trường từ object a sang object b (a và b có các trường tùy ý, 
// nhưng chúng có ít nhất 2 trường trùng tên nhau). Console log ra giá trị của a và b sau đó.

let a = {
  name: "maa",
  brand: "Cricke V",
  price: "200000",
};

let b = {
  name: "maa",
  vend0r: "Cricke V",
  price: "200000",
  hihi: "haha",
};

Object.assign(b, a);

console.log(a);
console.log(b);

// 3. cho 1 JSON như sau: const x = '{name: 'x', age: 30, gender: 'male'}', hãy chuyển đổi JSON này thành object trong JS. 
// Sau đó thực hiện thay đổi/thêm bớt giá trị trường. Cuối cùng hãy chuyển object đã được thay đổi trở về 1 JSON

let x = JSON.parse('{name: "x", age: 30, gender: "male"}')

x.name = "z";
x.hehe = "h0mhem";
delete x.gender;

JSON.stringify(x);

// 4. Tạo 1 array có tối thiểu 5 item, mỗi item là 1 kiểu dữ liệu khác nhau (trong đó có 1 nested array). 
// Thực hiện các thao tác sau theo đúng thứ tự: thêm 1 item vào cuối, xóa item đầu tiên, thay đổi giá trị item thứ 3, xóa giá trị thứ 2. Console.log ra array sau đó để kiểm tra kết quả
let p = [
  {
    name: "maa",
    brand: "Cricke V",
    price: "200000",
  },
  "xyz",
  123,
  [ayc],
  { ba: "b0" },
];

p.push('tyu')
p.shift() 
p[2]='123'
p.splice(2,1)
console.log(p);


