var division_arr = new Array("Barisal", "Chittagong", "Dhaka", "Khulna", "Mymensingh", "Rajshahi", "Rangpur", "Sylhet");

var district_arr = new Array();
district_arr[0] = "";
district_arr[1] = "Barguna | Barisal | Bhola | Jhanlokati | Patuakali |Pirojpur";
district_arr[2] = "Bandarban | Brahmanbaria | Chandpur | Chittagong | Comilla | Cox's Bazar | Feni | Khagrachhari | Lakshmipur | Noakhali | Rangamati";
district_arr[3] = " Dhaka | Faridpur | Gazipur | Gopalganj | Kishoreganj | Madaripur | Manikganj | Munshiganj | Narayanganj | Narsingdi | Rajbari | Shariatpur | Tangail ";
district_arr[4] = " Bagerhat | Chuadanga | Jessore | Jhenaidah | Khulna | Kushtia | Magura | Meherpur | Narail | Satkhira ";
district_arr[5] = " Jamalpur | Mymensingh | Netrakona | Sherpur ";
district_arr[6] = " Bogra | Chapainawabganj | Joypurhat | Naogaon | Natore | Pabna | Rajshahi | Sirajganj";
district_arr[7] = " Dinajpur | Gaibandha | Kurigram | Lalmonirhat | Nilphamari | Panchagarh | Rangpur | Thakurgaon ";
district_arr[8] = " Habiganj | Moulvibazar | Sunamganj | Sylhet ";


function print_state(state_id) {
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(state_id);
	option_str.length = 0;
	option_str.options[0] = new Option('Select Division', '');
	option_str.selectedIndex = 0;
	for (var i = 0; i < division_arr.length; i++) {
		option_str.options[option_str.length] = new Option(division_arr[i], division_arr[i]);
	}
}

function print_city(city_id, city_index) {
	var option_str = document.getElementById(city_id);
	option_str.length = 0; // Fixed by Julian Woods
	option_str.options[0] = new Option('Select District', '');
	option_str.selectedIndex = 0;
	var city_arr = district_arr[city_index].split("|");
	for (var i = 0; i < city_arr.length; i++) {
		option_str.options[option_str.length] = new Option(city_arr[i], city_arr[i]);
	}
}