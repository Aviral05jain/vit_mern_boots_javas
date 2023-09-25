const form = document.getElementById("calculatorForm");
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const multiplyButton = document.getElementById("multiplyButton");
    const divideButton = document.getElementById("divideButton");
    const resultDiv = document.getElementById("result");

    multiplyButton.addEventListener("click", function () {
      const num1 = parseFloat(num1Input.value);
      const num2 = parseFloat(num2Input.value);

      if (!isNaN(num1) && !isNaN(num2)) {
        const multiplicationResult = num1 * num2;
        resultDiv.textContent = "Multiplication Result: " + multiplicationResult;
      } else {
        resultDiv.textContent = "Invalid input. Please enter valid numbers.";
      }
    });

    divideButton.addEventListener("click", function () {
      const num1 = parseFloat(num1Input.value);
      const num2 = parseFloat(num2Input.value);

      if (!isNaN(num1) && !isNaN(num2)) {
        if (num2 === 0) {
          resultDiv.textContent = "Division by zero is not allowed.";
        } else {
          const divisionResult = num1 / num2;
          resultDiv.textContent = "Division Result: " + divisionResult;
        }
      } else {
        resultDiv.textContent = "Invalid input. Please enter valid numbers.";
      }
    });