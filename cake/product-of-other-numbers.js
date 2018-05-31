function productNaive(a) {
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    let products = 1;
    for (let j = 0; j < a.length; j++) {
      if (j !== i) {
        products = products * a[j];
      }
    }
    arr.push(products);
  }
  return arr;
}
function getProductsOfAllIntsExceptAtIndex(intArray) {
  if (intArray.length < 2) {
    throw new Error(
      'Getting the product of numbers at other indices requires at least 2 numbers'
    );
  }

  const productsOfAllIntsExceptAtIndex = [];

  // For each integer, we find the product of all the integers
  // before it, storing the total product so far each time
  let productSoFar = 1;
  for (let i = 0; i < intArray.length; i++) {
    productsOfAllIntsExceptAtIndex[i] = productSoFar;
    productSoFar *= intArray[i];
  }

  // For each integer, we find the product of all the integers
  // after it. since each index in products already has the
  // product of all the integers before it, now we're storing
  // the total product of all other integers
  productSoFar = 1;
  for (let j = intArray.length - 1; j >= 0; j--) {
    productsOfAllIntsExceptAtIndex[j] *= productSoFar;
    productSoFar *= intArray[j];
  }

  return productsOfAllIntsExceptAtIndex;
}
let a = [2, 4, 10];
console.log(productNaive(a));
