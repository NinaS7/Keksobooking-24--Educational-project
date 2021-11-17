/* Выполнено с использованием:
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
https://learn.javascript.ru/number
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

// Функция, возвращающая случайное целое число из переданного диапазона включительно.

const getRandomIntRange = function (min, max) {
  if (min<0 || max<=min) {
    return 'Диапазон может быть только положительный и начальное значение должно быть меньше конечного!';
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

const getRandomFloatRange = function (min, max, fraction) {
  if (min<0 || max<=min) {
    return 'Диапазон может быть только положительный и начальное значение должно быть меньше конечного!';
  }
  const randomFloatRange = Math.random() * (max - min + 1) + min;
  return +randomFloatRange.toFixed(fraction);
};

// Функция поиска случайного элемента в переданном массиве.

const getRandomArrayElement = (elements) => elements[getRandomIntRange(0, elements.length - 1)];

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {getRandomIntRange, getRandomFloatRange, getRandomArrayElement, debounce};
