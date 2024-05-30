# Javascript-Calculator
This JavaScript Calculator project integrates HTML, CSS, and JavaScript to create a user-friendly interface. Utilizing Bootstrap for styling and input validation, it allows users to perform basic arithmetic operations with clear result display. Event listeners ensure a clean interface, enhancing usability.

*HTML Structure:*
The HTML file (index.html) defines the structure of the calculator interface.
It includes input fields for the two numbers (Number-1 and Number-2) and a dropdown menu for selecting the operator.
A button is provided to trigger the calculation, and a disabled input field (Answer) is used to display the result.


*Bootstrap Integration:*
Bootstrap classes like row, col, and utility classes (d-grid, btn, btn-primary) are utilized for layout and styling, ensuring responsiveness across different devices.


*JavaScript Functionality:*
The performAction() function handles the calculation process. It retrieves input values and the selected operator, performs validation checks, and computes the result based on the operator.
Input validation ensures that both numbers are provided, and an operator is selected before performing the calculation.
The calculation is performed using a switch-case statement based on the selected operator.
The result is displayed in the designated input field (Answer).


*Event Listeners:*
Event listeners are attached to the input fields (Number-1 and Number-2) and the operator dropdown menu to clear the result field whenever these elements are clicked, ensuring a clean interface for each new calculation.


*CSS Styling:*
The style.css file contains simple CSS rules to reset margins and paddings and to set up flexbox for the body to arrange elements in a column.
The styling focuses on maintaining a clean and organized layout without overwhelming the user with unnecessary design elements.


*Overall Functionality:*
The calculator provides a user-friendly interface for performing basic arithmetic operations.
It ensures input validation and clear display of results, enhancing user experience and usability.
