
function dropDown(j){

	if (document.getElementById(j).classList.contains('show')) {
        document.getElementById(j).classList.remove('show');
    }
    else{
		var dropdowns = document.getElementsByClassName("hide");
	    var i;
    
	    for (i = 0; i < dropdowns.length; i++) {
	      var openDropdown = dropdowns[i];
	      if (openDropdown.classList.contains('show')) {
	        openDropdown.classList.remove('show');
	      }
	    }

		document.getElementById(j).classList.toggle("show");
	}
}