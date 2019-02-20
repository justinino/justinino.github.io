/* Homework 3 Scripts */

/* Part 1 */
function process() {
    var number1, number2, number3, number4, n1, n2, n3, n4, i, hwAvg, midExam, finalExam, ACR, final_average, grade, comment;
    hwAvg = parseInt(document.forms["myform"].elements["num1"].value);
    midExam = parseInt(document.forms["myform"].elements["num2"].value);
    finalExam = parseInt(document.forms["myform"].elements["num3"].value);
    ACR = parseInt(document.forms["myform"].elements["num4"].value);
    final_average = (.5 * hwAvg) + (.2 * midExam) + (.2 * finalExam) + (.1 * ACR);
    if (isNaN(hwAvg) || isNaN(midExam) || isNaN(finalExam) || isNaN(ACR) || hwAvg <= 0 || midExam <= 0 || finalExam <= 0 || ACR <= 0 || hwAvg > 100 || midExam > 100|| finalExam > 100 || ACR > 100) {
        document.forms["myform"].elements["num1"].value = " "; // clears hw input
        document.forms["myform"].elements["num2"].value = " "; //clears final exam input
        document.forms["myform"].elements["num3"].value = " "; // clears hw input
        document.forms["myform"].elements["num4"].value = " "; //clears final exam input
        document.forms["myform"].elements["num1"].focus(); // focuses cursor to hw input
        alert("Please enter values values that are numbers between 0 and 100.");
    } else{
        final_average = Math.round((.5 * hwAvg) + (.2 * midExam) + (.2 * finalExam) + (.1 * ACR));
        comment = ''
        if (final_average <= 100 && final_average >= 90) {
            grade = 'A'
        } else if (final_average < 90 && final_average >= 80) {
            grade = 'B'
        } else if (final_average < 80 && final_average >= 70) {
            grade = 'C'
        } else if (final_average < 70 && final_average >= 60) {
            grade = 'D'
            comment = 'Student must retake course'
        } else if (final_average < 60) {
            grade = 'F'
            comment = 'Student must retake course'
        }
        document.getElementById("TEXTAREA").value = "Final Average: " + final_average + "\n" + "Grade: " + grade + "\n" + comment;
    }
}

/* Part 2 */
function commission() {
    var temp1, temp2, temp3, i;
    var itemp = [239.99, 129.75, 99.95, 350.89]
    for (i = 0; i < itemp.length; i++) {
        temp1 = 'total_item' + i;
        temp2 = 'int_item' + i;
        temp3 = document.forms["myform"].elements[temp2].value*itemp[i]; 
        document.getElementById(temp1).innerHTML = '$' + temp3.toFixed(2);
        }
}
/* Part 3 */
function ftoc() {
    var num1, ftemp, ctemp;
    document.forms["myform"].elements["ctemp"].value = 5/9 * (parseInt(document.forms["myform"].elements["ftemp"].value) - 32);
}
function ctof() {
    var num1, ftemp, ctemp;
    document.forms["myform"].elements["ftemp"].value = (9/5 * parseInt(document.forms["myform"].elements["ctemp"].value)) + 32;
}
