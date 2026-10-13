var num1 = parseInt(prompt("첫 번째 숫자 : "));
var num2 = parseInt(prompt("두 번째 숫자 : "));

function calculate(type) {
    var result;

    if (type === "add") {
        result = num1 + num2;
    }
    else if (type === "sub") {
        result = num1 - num2;
    }
    else if (type === "mul") {
        result = num1 * num2;
    }
    else if (type === "div") {
        result = num1 / num2;
    }

    document.getElementById("result").innerHTML =
        "계산 결과는 " + result + "입니다.";
}