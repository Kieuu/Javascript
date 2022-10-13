// 1

let x1 = {
  name: "Ga chien",
  quan: "Cricke V",
};
let y = x1;
y = {
  name: "Dau phu chien",
  gia: "20000",
};
console.log(x1);
console.log(y);

// 2
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

Object.assign(a, b);

console.log(a);
console.log(b);

// 3
const x = { name: "x", age: 30, gender: "male" };

x.name = "z";
x.hehe = "h0mhem";
delete x.gender;

JSON.stringify(x);

// 4
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


