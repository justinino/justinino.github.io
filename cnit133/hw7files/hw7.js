/* Change background color using radio buttons:

We need to link up the result of clicking a radio button with the
script function switchStyle(style) and the class name styles of purple and yellow.

*/
function switchStyle(style) 
{

/* if the first radio button was checked then style will = 0, as the first element
in the radio button array */

    var body = document.getElementById("body");
    if(style == 0) {
        body.className = "purple";
    }
    else if(style == 1) {
        body.className = "yellow";
    }
    else if(style == 2) {
        body.className = "orange";
    }
    else if(style == 3) {
        body.className = "red";
    }
}

function switchFontStyle(style) 
{
    var body = document.getElementById("body");
    if(style == 0) {
        body.className = "italic";
    }
    else if(style == 1) {
        body.className = "normal";
    }
}

function switchFontWeight(style) 
{
    var body = document.getElementById("body");
    if(style == 0) {
        body.className = "bold";
    }
    else if(style == 1) {
        body.className = "normal";
    }
}

function switchToImpact()
{
    var body = document.getElementById("body");
    body.className = "impactFont";
}

function switchToArial()
{
    var body = document.getElementById("body");
    body.className = "arialFont";
}

function switchToOrig()
{
    
    var origbody = document.getElementById("body");
    origbody.className = "originalBody";

    
    var origTableObject = document.getElementById("originalTable");
    origTableObject.className = "basicTable";
}

/* Change font size using a select drop-down menu:

We need to link up the result of selecting an option with the
script function selectFontSize() and the class name styles of small, medium, and large,
which will change the font size of ALL of the text in the table
*/

function selectFontSize()
{      
    var origTableObject = document.getElementById("originalTable");    
    var selectedFontSize = document.getElementById('fontSizeDropDown').value;
            
    if (selectedFontSize == "small")
    {
        origTableObject.className = "small basicTable";
    }
    else if (selectedFontSize == "medium")
    {
        origTableObject.className = "medium basicTable";
    }
    else if (selectedFontSize == "large")
    {
        origTableObject.className = "large basicTable";
    }           
}
//part2 
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropDown(hwID) {
    document.getElementById(hwID).classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
