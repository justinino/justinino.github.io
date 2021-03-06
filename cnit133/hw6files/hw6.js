function mathFunctions() {
    var x = myForm.floatNum.value;
    document.getElementById('round').innerHTML = Math.round(x);
    document.getElementById('squareRoot').innerHTML = Math.round(Math.sqrt(x));
    document.getElementById('tenths').innerHTML = Math.floor( x * 10 + .5 ) / 10;
    document.getElementById('hundredreths').innerHTML = Math.floor( x * 100 + .5 ) / 100;
    document.getElementById('thousandths').innerHTML = Math.floor( x * 1000 + .5 ) / 1000;
}
function searchString() {
    var x = myForm.searchField.value;
    var y = myForm.searchText.value;
    var count;
    count = 0;
    if(x.length == 0 || y.length !== 1){
        alert("Please enter text in textfield and one character in the search character.")
    }
    for (i = 0; i < x.length; i++) {
        if(y==x.charAt(i)) {
            count = count + 1
        }
    }
    if(count == 0){
        loadErrorPage(y)
    } else {
        myForm.searchTimes.value = count;
    }
}

function loadErrorPage(text) {

    // assemble html
    var myText = "<html>\n";
    myText += "<head>\n";
    myText += "<title>Error Window</title>\n";
    myText += "</head>\n";
    myText += "<body>\n";
    myText += "<p><strong>Search character, " + text + " not found.</strong></p>\n";
    myText += "</body>\n";
    myText += "</html>";
    
    // open window on the upperleft of the screen
    
    var newWindow = window.open("", "new_window",
    "top=1,left=1,width=300,height=100");
    
    // have browser focus on window
    
    newWindow.focus();
    
    // pump html into to this new opened window
    
    newWindow.document.write(myText);
    
    // tell browser that newWindow document is finished loading
    
    newWindow.document.close();
}

function dateLoad() {
    var d = new Date();
    document.getElementById('row1').innerHTML = 'toString()';
    document.getElementById('row1_2').innerHTML = d.toString();
    document.getElementById('row2').innerHTML = 'toLocaleString()';
    document.getElementById('row2_2').innerHTML = d.toLocaleString();
    document.getElementById('row3').innerHTML = 'toUTCString()';
    document.getElementById('row3_2').innerHTML = d.toUTCString();
    document.getElementById('row4').innerHTML = 'Hour diff PST to UTC';
    document.getElementById('row4_2').innerHTML = d.getTimezoneOffset()/60;
    document.getElementById('row5').innerHTML = 'Hour diff CST to UTC';
    document.getElementById('row5_2').innerHTML = d.getTimezoneOffset()/60 - 3;
}

function splitNum() {
    //get 7 digit number
    var x = myForm.phoneNum.value;
    var reNum = /^\(\d{3}\)/;
    var num = x.split(reNum);
    myForm.sevenNum.value = num[1];

    //get area code
    var y = myForm.phoneNum.value;
    var reArea = /(\s).{8}/;
    var areaCode = y.split(reArea);
    myForm.areaCode.value = areaCode[0];

}
