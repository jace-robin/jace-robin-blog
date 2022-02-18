$(document).ready(runProgram)

function runProgram() {
    function repeat(number) {
        for (var i = 0; i <= number; i++) {
            $(".new_class").append("<p>Number Appended" + i + "</p>");
        }
    }
    repeat(7)
}