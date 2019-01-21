//Creando constructor, obtención de valores y ejecutando creacion de template
function add(){
	function Person(name,lastName,age,shift){
		this.name = name;
		this.lastName = lastName;
		this.age = age;
		this.shift = shift;
	}

	var nameAdded = document.getElementById("name").value;
	var lastnameAdded = document.getElementById("lastName").value;
	var ageAdded = document.getElementById("age").value;
	var shiftAdded = document.getElementById("shift").value;

	personAdded = new Person(nameAdded,lastnameAdded,ageAdded,shiftAdded);
	addTemplate();
};

//Creando template y agregando a array
var data_Added = [];
function addTemplate(){
	data_Added.push(personAdded);
	document.getElementById("template").innerHTML += 
	'<tbody><td>'+personAdded.name+
	'</td><td>'+personAdded.lastName+
	'</td><td>'+personAdded.age+
	'</td><td>'+personAdded.shift+
	'</td></tbody>';

	//console.log(data_Added);
};
