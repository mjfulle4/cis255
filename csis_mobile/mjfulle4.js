	var hardware = new Array();
	hardware["hdmi"]=10;
	hardware["mouse"]=55;
	hardware["gpu"]=250;
	
	var software = new Array();
	software["virus"]=60;
	software["windows"]=120;
	software["apple"]=130;
 
	function getHardwarePrice(){
		var hardwareTotal = 0;
		var form = document.forms["orderform"];
		var selectedHardware = form.elements["hardware"];
		hardwareTotal = hardware[selectedHardware.value];
		return hardwareTotal;
	}
	
	function getSoftwarePrice(){
		var softwareTotal = 0;
		var form = document.forms["orderform"];
		var selectedSoftware = form.elements["software"];
		softwareTotal = software[selectedSoftware.value];
		return softwareTotal;
	}

	function calculateTotal(){
		var divobj = document.getElementById('totalPrice');
		var total = + getHardwarePrice() + getSoftwarePrice();
		divobj.style.display='block';
		divobj.innerHTML = "Total cost: $" + total;
	}

	function hideTotal(){
		var divobj = document.getElementById('totalPrice');
		divobj.style.display='none';
	}
	