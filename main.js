var phoneNumber = prompt("Please enter your phone number with area code, including dashes.");
	if (phoneNumber.charAt(3) === "-" && phoneNumber.charAt(7) === '-' && phoneNumber.length === 12) {
		alert("Thank you."); }
			else {
				alert("Please input your phone number in the format xxx-xxx-xxxx")
			}
var birthDate = prompt("Please enter your birthdate in the mm/dd/yyyy format.");
	if (birthDate.charAt(2) === "/" && birthDate.charAt(5) === "/" && birthDate.length === 10) {
		alert("Thank you."); }
			else {
				alert("Please input your birthdate in the mm/dd/yyyy format.");
			}
var zipCode = prompt("Please enter your five digit or nine digit zip code. If you enter a nine digit zip code please unse a dash to seperate the last four digits.");
		if (zipCode.length === 5 || zipCode.charAt(5) === "-") {
			alert("Thank you."); }
				else {
					alert("Please enter your five digit or nine digit zip code. If you enter a nine digit zip code please unse a dash to seperate the last four digits.");
				}
var stateCode = prompt("Please enter your two letter state abbreviation using all caps.");
	if (stateCode.length === 2 && stateCode === stateCode.toUpperCase()) {
		alert("Thank you.");
	}
		else {
			alert("Please enter your two letter state abbreviation using all caps.");
		}

