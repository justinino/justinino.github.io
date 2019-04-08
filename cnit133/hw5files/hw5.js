//Part 1
function validateForm() {
    var x = myForm.name.value;
    var y = myForm.animal.value;
    var z = myForm.gender.options[myForm.gender.selectedIndex].value;
    var q = myForm.colour;
    var checkedValue = null; 
    //Name validation
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    //Animal Type validation
    if (y == "") {
        alert("Animal type must be picked");
        return false;
    }
    //Gender validation
    if (z == "") {
        alert("A gender must be selected");
        return false;
    }
    //Colour checkbox validation
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
//Part 2
function urlGo(myForm) {
    //Go to selected webpage
    var mydest = myForm.destList.options[myForm.destList.selectedIndex].value;
    window.location = mydest;
}

function stateInfo() {
    var state = myForm.name.value;
    var matchFlag = 0
    var info = [
        ['ALABAMA', 'AL', 'Alabama', 'Montgomery', '4,779,736'],
        ['ALASKA', 'AK', 'Alaska', 'Juneau', '710,231'],
        ['ARIZONA', 'AZ', 'Arizona', 'Phoenix', '6,392,017'],
        ['ARKANSAS', 'AR', 'Arkansas', 'Little Rock', '2,915,918'],
        ['CALIFORNIA', 'CA', 'California', 'Sacramento', '37,253,956'],
        ['COLORADO', 'CO', 'Colorado', 'Denver', '5,029,196']
    ];
    //clear out past data
    document.getElementById('row1').innerHTML = '';
    document.getElementById('row1_2').innerHTML = '';
    document.getElementById('row1_3').innerHTML = '';
    document.getElementById('row1_4').innerHTML = '';

    //convert input to uppercase
    state = state.toUpperCase();

    //check for abbrev or full 
    if(state.length == 2) {
        for (i = 0; i < info.length; i++) {
            if(state == info[i][1]) {
                document.getElementById('row1').innerHTML = info[i][1];
                document.getElementById('row1_2').innerHTML = info[i][2];
                document.getElementById('row1_3').innerHTML = info[i][3];
                document.getElementById('row1_4').innerHTML = info[i][4];
                matchFlag = 1
                break;
            }
        }
    } else {
    //match input to array value
        for (i = 0; i < info.length; i++) {
            if(state == info[i][0]) {
                document.getElementById('row1').innerHTML = info[i][1];
                document.getElementById('row1_2').innerHTML = info[i][2];
                document.getElementById('row1_3').innerHTML = info[i][3];
                document.getElementById('row1_4').innerHTML = info[i][4];
                matchFlag = 1
                break;
            }
        }
    }

    if(matchFlag == 0) {
        alert('Input not recognized please select a state from AL, AK, AZ, AR, CA, CO.');
    }
}
