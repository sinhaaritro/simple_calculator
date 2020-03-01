var expression = "";

function clearExpression() {
    expression = "";
    document.getElementById("inputText").value = "";
}

function clearRecentExpression() {
    expression = expression.substring(0, expression.length - 1);
    document.getElementById("inputText").value = expression;
}

function pressedButton(clickedID) {
    expression = expression + clickedID;
    document.getElementById("inputText").value = expression;
}

function result() {
    written = document.getElementById("inputText").value;
    var specialChar = [];
    for (i = 0; i < written.length; i++) {
        if (Number.isInteger(Number(written[i])) || written[i] == "+" || written[i] == "-" || written[i] == "*" || written[i] == "/" || written[i] == ".") {
            if (written[i] == "+" || written[i] == "-" || written[i] == "*" || written[i] == "/") {
                specialChar[specialChar.length] = i;
            }
        } else {
            alert("Operation not supported or the operator doesn't exists");
        }
    }
    resultValue = Number(written.substring(0, specialChar[0]));
    for (i = 0; i < specialChar.length; i++) {
        value2 = Number(written.substring(specialChar[i] + 1, specialChar[i + 1]));
        switch (written[specialChar[i]]) {
            case "+":
                resultValue = resultValue + value2;
                break;
            case "-":
                resultValue = resultValue - value2;
                break;
            case "*":
                resultValue = resultValue * value2;
                break;
            case "/":
                resultValue = resultValue / value2;
                break;
        }
    }
    document.getElementById("inputText").value = resultValue;
    expression = resultValue.toString();
}