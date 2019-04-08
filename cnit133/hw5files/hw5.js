function validateForm() {
    var x = myForm.name.value;
    var y = myForm.animal.value;
    var z = myForm.gender.options[myForm.gender.selectedIndex].value;
    var q = myForm.colour;
    var checkedValue = null; 
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    if (y == "") {
        alert("Animal type must be picked");
        return false;
    }    
    if (z == "") {
        alert("Drop down list must be selected");
        return false;
    }
    for (var i=0; q[i]; i++){
        if(q[i].checked){
             checkedValue = q[i].value;
        }
    }
    if (checkedValue == null) {
        alert("At least one select box must be checked");
        return false;
    }
  }
function urlGo(myForm) {
    var mydest = myForm.destList.options[myForm.destList.selectedIndex].value;
    window.location = mydest;
}
