let name = prompt("Ismingizni kiriting")
let letter = prompt("Bironta harf kiriting").toLowerCase() .toUpperCase();
let test = name.includes(letter) 

if (test) {
    alert(name + " ismining ichida " + letter + " harfi mavjud emas")
}else {
    alert(name + " ismining ichida " + letter + " harfi mavjud")
}