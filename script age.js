'use strict'

var age = prompt("Скільки Вам років?")
if (age > 100) {
    alert("Вказана невірна інформація")
}
else if (age === null || age === "") {
    alert('Інформація не вказана')
}
else if (age < 0) {
    alert("Вказана невірна інформація")
}
else if (age >= 11 && age <= 14) {
    alert("Вам " + age + " років")
}
else if (age % 10 === 1) {
    alert("Вам " + age + ' рік')
}
else if (age % 10 >= 2 && age % 10 <= 4) {
    alert("Вам " + age + ' роки')
}
else if (age === 0 || age % 10 >= 5 || age % 10 <= 9 || age % 10 == 0 || age >= 11 && age <= 14) {
    alert("Вам " + age + " років")
}
else {
    alert("Вказана невірна інформація")
}