let num = prompt("4자리 정수를 입력하세요");

let thousand = parseInt(num / 1000);
let hundred = parseInt((num % 1000) / 100);
let ten = parseInt((num % 100) / 10);
let one = num % 10;

alert("천: " + thousand + 
      ", 백: " + hundred + 
      ", 십: " + ten + 
      ", 일: " + one);
