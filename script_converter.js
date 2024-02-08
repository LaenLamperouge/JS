'use strict'


var quantity = prompt('Введіть число для конвертування') ;
var kg = quantity * 1000 ;
var hour = quantity * 60 ;
var km = quantity * 1000 ;
if (quantity >= 0) {
var metr = prompt("Введіть конвертуєму одиницю в форматі кг, г чи км") ;
switch (metr) {
    case "кг":
        alert(quantity + " кг - це " + kg + " гр.");
        break;
    case "г":
        alert(quantity + " г - це " + hour + " хв");
        break;
    case "км":
        alert(quantity + " км - це " + km + " м");
        break;
    default:
        alert("Невірно введений формат. Введіть конвертуєму одиницю в форматі кг, г чи км") ;
     }
}
else { alert("Невірно введені дані. Введіть число для конвертування") ; }