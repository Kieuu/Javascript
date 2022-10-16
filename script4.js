//1. Tạo 1 function log ra 1 lời chào đến user, nhận vào 1 tham số là name có giá trị default là 'User', nội dung function là log ra console "Hello " + tham số name.
// Call function này 2 lần: có truyền vào 1 cái tên và không truyền vào gì
function aiSaTsu(name = "User") {
  console.log("Hello " + name);
}

aiSaTsu("anh Duc"); //"Hello anh Duc"
aiSaTsu(); // "Hello User"

// 2.Tạo 1 function có 4 parameters, trong đó có 2 default parameters
//  và các default parameters này sẽ dùng giá trị liên quan đến các parameters khác

function thuHai(a, b, c = a + 1, d = a + b + 2) {
  console.log(a, b, c, d);
}

// 3.Tạo 4 function, đều nhận vào 2 parameters, có tên là add, sub, mul, div lần lượt có tác dụng sau: trả về kết quả tổng, hiệu, tích, thương của 2 parameters. VD add(1,2) sẽ trả về 3. mul(1,2) sẽ trả về 2.
// Lưu ý: dấu nhân trong js sẽ là ký tự asterisk (*), dấu chia trong js sẽ là ký tự slash (/).

function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}
function mul(x, y) {
  return x * y;
}
function div(x, y) {
  return x / y;
}

// 4.- Tạo 1 function fuelCalc có tác dụng tính giá xăng RON 95-III, nhận vào 1 tham số là số lít xăng và sẽ trả về kết quả là số lít xăng nhân với 22000. VD a(10) sẽ trả về 220000
// Tạo 1 function waveAlpha2015FuelCalc nhận vào 1 tham số là 1 function. Function b có nội dung sau: tạo 1 biến maximum có giá trị là số lít xăng tối đa của xe Wave Alpha 2015 (tra gg) và kết quả trả về của function này sẽ là gọi function nhận vào làm tham số với đối số là biến maximum trên.
// Gọi function waveAlpha2015FuelCalc để xem đổ đầy bình xe Wave Alpha 2015 sẽ hết bn xèng

function fuelCalc(soLitXang) {
  return soLitXang * 22000;
}

function waveAlpha2015FuelCalc(fuelCalc) {
    const maxium = 3.6;
  return fuelCalc(maxium);
}

waveAlpha2015FuelCalc(fuelCalc);

// 5. Tạo 1 function có nội dung chứa 3 biến được khai báo bằng let / const / var. thử truy cập 3 biến đó từ 1 function bên ngoài function trên.

function mot() {
  const a = 1;
  let b = 2;
  var c = "Chu Nhat";
}

function hai() {
  console.log(a);
  console.log(b);
  console.log(c);
}
