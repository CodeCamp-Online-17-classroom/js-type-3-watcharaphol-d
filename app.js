// write code here
let a = undefined;
let b = ' ';
let c = !b;

let d = Boolean(a); // The result is: False
let e = Boolean(b); // The result is: True
let f = Boolean(c); // The result is: False

console.log(`The value of 'd' is: ${d}, \nThe value of 'e' is: ${e}, \nThe value of 'f' is: ${f}`)

//=============== Explanation ===============
// - ผลลัพทธ์ของตัวแปร d เป็น Boolean ค่า False เพราะการแปลงค่า undefined ให้เป็น boolean จะให้ผลลัพธ์เป็น false

// - ผลลัพทธ์ของตัวแปร e เป็น Boolean ค่า true เพราะค่าของตัวแปร b ไม่ใช่ string เปล่า แต่เป็น string ที่มีข้อความว่าง (spacebar 1 ตัว)

// - ผลลัพทธ์ของตัวแปร f เป็น Boolean ค่า false เพราะค่าของตัวแปร c เป็นการแปลงค่า string ตัวแปร b ให้เป็น boolean แล้วกลับค่า boolean ของตัวแปรนั้น ค่าจึงออกมาเป็น false