// Задание 2

// Вычислите дробные части чисел a и b с точностью n. Выведите получившиеся числа с помощью console.log. Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.

let a = 13.123456789;
let b = 2.123;
let n = 5;

// Избавляемся от целой части числа

let a1 = a%1;
let b1 = b%1;

// Оставляем необходимое кол-во знаков после запятой и округляем

let aNormal = Math.floor(a1*Math.pow(10,n));
let bNormal = Math.floor(b1*Math.pow(10,n));

console.log(aNormal, bNormal);

// Результяты сравнения:

console.log('Первое число больше', aNormal > bNormal);
console.log('Второе число больше', aNormal < bNormal);
console.log('Первое число больше или равно второму', aNormal >= bNormal);
console.log('Второе число больше или равно первому', aNormal <= bNormal);
console.log('Первое число равно втоторму', aNormal === bNormal);
console.log('Первое число не равно второму', aNormal !== bNormal);
