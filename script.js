// Function to perform the calculation = performAction()
function performAction() {
    // Get values from input fields
    const inputone = document.getElementById("number-one").value;
    const inputtwo = document.getElementById("number-two").value;
    const drpdown = document.querySelector(".dropdown").value;
  
    // Check for valid inputs
    if (inputone == "" || inputtwo == "") {
      window.alert("Please enter valid input for Number-1 and Number-2");
    } else if (drpdown == "Operator") {
      window.alert("Please select an operator");
    } else {
      // Perform calculation based on the selected operator
      switch (drpdown) {
        case "+":
          // Addition
          document.getElementById("result").value =
            parseInt(inputone) + parseInt(inputtwo);
          break;
        case "-":
          // Subtraction
          document.getElementById("result").value = inputone - inputtwo;
          break;
        case "*":
          // Multiplication
          document.getElementById("result").value = inputone * inputtwo;
          break;
        case "/":
          // Division
          document.getElementById("result").value = inputone / inputtwo;
          break;
        default:
          // Error handling
          window.alert("Something went wrong");
      }
    }
  }
  
  // Event listener to clear the result when clicking on Number-1 input field
  document.getElementById("number-one").addEventListener("click", function () {
    document.getElementById("result").value = "";
  });
  
  // Event listener to clear the result when clicking on the Operator dropdown
  document.querySelector('.dropdown').addEventListener("click", function (){
    document.getElementById("result").value = "";
  });
  
  // Event listener to clear the result when clicking on Number-2 input field
  document.getElementById("number-two").addEventListener("click", function () {
    document.getElementById("result").value = "";
  });
  