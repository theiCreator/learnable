'use strict'


const nth_most_rare = function(list, n) {
  const hashmap = new Map();
  let valueOfNthRarestInteger;

  let listOfNthRarestItems = [];
  
  for (const item of list) {
    const value = hashmap.get(item);
    if (value) {
      hashmap.set(item, value + 1);
    } else {
      hashmap.set(item, 1);
    }
  }

  const valuesArray = [...new Set(Array.from(hashmap.values()))];
  
 
  valuesArray.sort((a, b) => a - b);
  

  if (n > 0 && n <= valuesArray.length) {
    valueOfNthRarestInteger = valuesArray[n - 1];
  }
  
  
  for (const [key, value] of hashmap.entries()) {
    if (value === valueOfNthRarestInteger) {
      listOfNthRarestItems.push(key);
    }
  }
  
  console.log(listOfNthRarestItems);
}

const list = [5, 4, 5, 4, 5, 4, 4, 5, 3, 3, 3, 2, 2, 1, 1, 5]
const nthRarest = 2
nth_most_rare(list, nthRarest)