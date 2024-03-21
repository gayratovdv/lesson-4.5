let name1 = prompt("Ismingizni kiriyying!")
let letter = prompt("Istagan harfni kiriting!")

let check = name1.toLowerCase().includes(letter.toLowerCase());

if (check) {
    alert("Siz kirtgan harf mavjud😃")
} else (
    alert("Siz kiritgan harf mavjud emas😞")
)