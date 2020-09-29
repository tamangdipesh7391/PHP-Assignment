function validate(){
	
	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;

	console.log(name);
	console.log(email);


	document.getElementById('tblname').innerHTML = name;
	document.getElementById('tblemail').innerHTML = name;





	// if (name.length<1) {
	// 	document.getElementById('nameError').innerHTML = " Name Requiured!";
	// 	return false;
	// }



	// let email = document.getElementById('email').value;
	// let gender = document.getElementById('gender').value;
	// let country = document.getElementById('name').value;
	// let lang[] = document.getElementById('lang').value;
	// alert(lang);
	// let arr = [name,email,gender,country,lang];


}
console.log('hello')