/* Part 1 */
function math() {
    var text, result, text2, result2, text3, result3, text4, result4, i, j;
    /* Part 1a  */
    text = '';
    result = 1;
    text2 = '';
    result2 = 0;
    /* for loops through 5 to 20  */
    for (i = 5; i <= 20; i = i + 3) {
      if(text == ''){
        text = i.toString() + ' ';
        text2 = i.toString() + ' ';
      } else {
        text = text + '*' + ' ' + i.toString() + ' ';
        text2 = text2 + '+' + ' ' + i.toString() + ' ';
      }
      result = result*i;
      result2 = result2 + i;
    }
    document.getElementById('3timestxt').innerHTML = text + '=';
    document.getElementById('3timesresult').innerHTML = result.toLocaleString();
    document.getElementById('3plustxt').innerHTML = text2 + '=';
    document.getElementById('3plusresult').innerHTML = result2.toLocaleString();

    /* Part 1b  */
    j = 3 ;
    text3 = '';
    result3 = 1;
    text4 = '';
    result4 = 0;
    /* while loops through 3 to 31  */
    while(j <= 31){
      if(text3 == ''){
        text3 = j.toString() + ' ';
        text4 = j.toString() + ' ';
      } else {
        text3 = text3 + '*' + ' ' + j.toString() + ' ';
        text4 = text4 + '+' + ' ' + j.toString() + ' ';
      }
      result3 = result3*j;
      result4 = result4 + j; 
      j = j + 4;
    }
    document.getElementById('4plustxt').innerHTML = text3 + '=';
    document.getElementById('4plusresult').innerHTML = result3.toLocaleString();
    document.getElementById('4timestxt').innerHTML = text4 + '=';
    document.getElementById('4timesresult').innerHTML = result4.toLocaleString();
    
}

function interest() {
  var e = document.getElementById("rate");
  var i= e.options[e.selectedIndex].value;
  i = parseFloat(i);
  for (j = 1; j <= 10; j++){
      final = 1000*Math.pow(1 + i, j)
      document.getElementById('row' + j).innerHTML = j;
      document.getElementById('row' + j + '_2').innerHTML = final.toFixed(2);
      document.getElementById('row' + j + '_3').innerHTML = i.toFixed(2);
      }
}

function square() {
  i = document.forms["myform"].elements["width"].value;
  j = document.forms["myform"].elements["height"].value;
  if(i < 2 || i > 10 || j < 2 || j > 10) {
    document.forms["myform"].reset(); //reset form inputs
    document.forms["myform"].elements["width"].focus(); // focuses cursor to hw input
    alert("Please enter values that are between 2 and 10, inclusive.");
  } else{
    output = ''
    //height
    for (k = 1; k <= j; k++) {
      //width
      for (m = 1; m <= i; m++) {
        if(m == i && k == 1 || m == i && k == j) {
          output = output + '*' + '\n'
        } else if(k == 1 || k == j){
          output = output + '*'
        } else if(m == 1){
          output = output + '*'
        } else if(m == i){
          output = output + '*' + '\n'
        } else {
          output = output + ' '
        }
      }
    }
  }
  document.getElementById("TEXTAREA").value = output 
}
