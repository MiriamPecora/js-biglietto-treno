const userAge = parseInt(prompt("Inserisci la tua età"));
const kmToTravel = parseInt(prompt("Inserisci i km da percorrere"));
const kmPrice = 0.21;

document.getElementById("age").innerHTML += userAge;
document.getElementById("kms").innerHTML += kmToTravel;
console.log (userAge, "questa è la tua età")
console.log(kmToTravel, "questi sono i km che vuoi percorrere")

let totalPrice = kmToTravel * kmPrice;

console.log(totalPrice, "questo è il prezzo prima di essere scontato")

let discount

if (userAge < 18){
    discount = totalPrice * 20 / 100;
    console.log(discount, "questo è lo sconto applicato ai minorenni");
    totalPrice = totalPrice - discount;
    document.getElementById("discount").innerHTML = `Questo è lo sconto che verrà applicato €${discount}`;
}
else if (userAge >= 65){
    discount = totalPrice * 40 / 100;
    console.log(discount, "questo è lo sconto applicato agli over 65");
    totalPrice = totalPrice - discount;
    document.getElementById("discount").innerHTML = `Questo è lo sconto che verrà applicato €${discount}`;
}

totalPrice = Math.round(totalPrice * 100) / 100;

document.getElementById("total_price").innerHTML += totalPrice;
console.log(totalPrice, "questo è il prezzo totale da pagare (con sconti applicati)");