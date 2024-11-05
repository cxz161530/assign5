        // 5. Define a function process array to deal number entered , if current number larger than next, add it to a new array
        // iterate through array of numbers the visitor entered
        function processArray(arr) {
            var newArray = [];

            //5.b if the number larger to next number, add to new array 
            for (var i = 0; i < arr.length - 1; i++) {
                if (arr[i] >= arr[i + 1]) {
                    newArray.push(arr[i]);
                }
            }

            newArray.push(arr[arr.length - 1]);

            // add them together
            var total = newArray.reduce(function (acc, num) {
                return acc + num;
            }, 0);

            // 6 display total
            alert("The sum of the numbers is: " + total);

            // 7. conditional logic showing big or small number
            if (total > 50) {
                alert("That is a big number.");
            } else {
                alert("That is a small number.");
            }

            // 8. loop ask visitor wants to continue add more number or not
            var continueAdding = confirm("Do you want to continue adding more numbers?");
            if (continueAdding) {               
                numbersArray = [];
                input = prompt("Enter a list of numbers separated by space or comma (press cancel or enter to stop):");
                while (input !== null && input !== "") {
                    var inputNumbers = input.split(/[ ,]+/);
                    numbersArray = numbersArray.concat(inputNumbers.map(Number));
                    input = prompt("Enter more numbers or press cancel to finish:");
                }
                processArray(numbersArray);
            } else {
                alert("Thank you for using the program!");
            }
        }