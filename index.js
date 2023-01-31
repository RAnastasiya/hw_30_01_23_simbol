"use strict";

//написати функцію, яка буде приймати рядок і форматувати його до Jaden Case і повертати новий форматований рядок
//'To Be Or Not To Be'

// function toJadenCase(str) {
//   //перевести увесь рядок в маленькі букви toLowerCase
//   const newStr = str.trim().toLowerCase();
//   //розібрати рядок на окремі слова split - отримати масив слів
//   const words = newStr.split(' ');
//   //для кожного слова зробити першу літеру велику, а наступні маленькі
//   const newWords = words.map((word)=>{
//     return word[0].toUpperCase()+ word.slice(1);
//   })
//   //з масиву зробити знову рядок join
//   const readyStr = newWords.join(' ');
//   //повернути цей рядок
//   return readyStr;
// }
const str = "    tO    bE OR    nOT to    Be     ";

function toJadenCase(str, separator = " ") {
  return str
    .trim()
    .toLowerCase()
    .split(separator) //array
    .filter((word) => word !== "")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(separator);
}
console.log(toJadenCase(str));