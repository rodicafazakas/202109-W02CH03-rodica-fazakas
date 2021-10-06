
calculatorPro();

function calculatorPro() {
    let newNumber;
  
    let numberList = [];
    let results = [];
    let stop;

    // let the user enter as many numbers as he/she wants
    do {
      input = prompt('Enter a number or press cancel to stop ');

      if (input === null) {
        break;
      }

      newNumber = +parseFloat(input);
  
      if (!isNaN(newNumber)) {
        numberList.push(newNumber);
        console.log('You entered: ' + newNumber + '.');
      } else {
        console.log('You need to enter a number! Try again.'); 
      }
    } while (true)

    // perform operations
    if (numberList.length == 1) {
        resultSqrt = Math.sqrt(numberList[0]);
        resultSqrt = +resultSqrt.toFixed(3);
        results.push(resultSqrt);
        console.log('The square root of ' + numberList[0] + ' is: ' + resultSqrt); 
    } else if (numberList.length > 1) {
        resultSum = numberList.reduce((accumulator, currentValue) => accumulator + currentValue);
        resultDif = numberList.reduce((accumulator, currentValue) => accumulator - currentValue);
        resultMult = numberList.reduce((accumulator, currentValue) => accumulator * currentValue);
        resultDiv = numberList.reduce((accumulator, currentValue) => accumulator / currentValue);
        resultDiv = +resultDiv.toFixed(3);

        results.push(resultSum, resultDif, resultMult, resultDiv);

        console.log('Results:');
        console.log('The result of the sum is: ' + resultSum + '.');
        console.log('The result of the difference is: ' + resultDif + '.');
        console.log('The result of the multiplication is: ' + resultMult + '.');
        console.log('The result of the division is: ' + resultDiv + '.');
    }

    answer = prompt("New numbers? y/n");

    if (answer == "y") {
        calculatorPro();
    } else {
        console.log('Bye!');
    }
}


