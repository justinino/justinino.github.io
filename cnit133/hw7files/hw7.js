//part 1
function switchStyle(style) 
{

    var body = document.getElementById("body");
    if(style == 0) {
        body.className = "blue";
    }
    else if(style == 1) {
        body.className = "yellow";
    }
    else if(style == 2) {
        body.className = "green";
    }
    else if(style == 3) {
        body.className = "orange";
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
    else if(style == 2) {
        body.className = "oblique";
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

function switchToArial()
{
    var body = document.getElementById("body");
    body.className = "arialFont";
}

function switchToCambria()
{
    var body = document.getElementById("body");
    body.className = "cambriaFont";
}
function switchToOrig()
{
    
    var origbody = document.getElementById("body");
    origbody.className = "originalBody";

    
    var origTableObject = document.getElementById("originalTable");
    origTableObject.className = "basicTable";
}

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
