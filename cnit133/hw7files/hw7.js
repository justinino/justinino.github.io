
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

function pageChange() {
  alert(hi);
}

function colorChange(colorName) {
  var body = document.getElementById("body");
  body.className = colorName;
}
function fontChange() {
  var selectedFontSize = document.getElementById('fontSize').value;
  var body = document.getElementById("body");
  body.className = "2em";
}
