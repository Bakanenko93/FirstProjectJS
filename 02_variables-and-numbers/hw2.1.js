// Задание 1

// Запишите в переменные x и y координаты двух произвольных точек: x1, y1 — первая точка, x2, y2 — вторая точка. Вычислите площадь прямоугольника, противоположные углы которого представлены указанными точками. Выведите результат с помощью console.log

let x1 = 2;
let y1 = 3;

let x2 = 10;
let y2 = 5;

// Из примера работ мы научились находить катеты

let cathetus1 = Math.abs(x1-x2);
let catethus2 = Math.abs(y1-y2);

// Перемножаем полученые катеты

console.log(cathetus1*catethus2);
