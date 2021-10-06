
let numberList = [];
let results = [];


enterNumber(numberList, 'Enter the first number: ');
enterNumber(numberList, 'Enter the second number: ');

calculator(numberList);


function enterNumber(numberList, message) {    
    let input = prompt(message);   
    let newNumber = +parseFloat(input).toFixed(3);
  
    if (!isNaN(newNumber)) {
      numberList.push(newNumber);
    } else {
      console.log('The input: ' + input + ' is not a number!'); 
    }
  
}

function calculator(numberList) {
  if (numberList.length == 1) {
    resultSqrt = Math.sqrt(numberList[0]);
    resultSqrt = +resultSqrt.toFixed(3);
    results.push(resultSqrt);
    console.log('The square root of ' + numberList[0] + ' is: ' + resultSqrt); 
  } else {
    resultSum = numberList[0] + numberList[1];
    resultDif = numberList[0] - numberList[1];
    resultMult = numberList[0] * numberList[1];
    resultDiv = numberList[0] / numberList[1];
    resultDiv = +resultDiv.toFixed(3);

    results.push(resultSum, resultDif, resultMult, resultDiv);

    console.log('Results:');
    console.log('The result of the sum is: ' + resultSum + '.');
    console.log('The result of the difference is: ' + resultDif + '.');
    console.log('The result of the multiplication is: ' + resultMult + '.');
    console.log('The result of the division is: ' + resultDiv + '.');
  }
}




