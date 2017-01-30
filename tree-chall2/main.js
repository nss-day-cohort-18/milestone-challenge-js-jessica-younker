var pineTree = {
	height: 0,
	leaf: 0
};

pineTree.height = document.getElementById("height");
pineTree.leaf = document.getElementById("leaf");

var growTree = document.getElementById("growButton");
var outputTree = document.getElementById("output-target");

pineTree.height.addEventListener("keypress", pressed);
pineTree.leaf.addEventListener("keypress", pressed);
growTree.addEventListener("click", inputTest);

function pressed(enterPress) {
	if (enterPress.keyCode === 13) {
		treeMaker();
	}};

function inputTest() {
	if (pineTree.height.value === "") {
		alert("Enter height");
		return false;
		console.log("height alert")
	
	} else if (pineTree.leaf.value === "") {
		alert("Select a character");
		return false;

	} else {
		treeMaker()
	}
};

function treeMaker(){
	var spaceCalc = pineTree.height.value - 1;
	var charCalc = 1;

	for (i=0; i< pineTree.height.value; i++ ) {


	var spaces = " ".repeat(spaceCalc);
	var chars = pineTree.leaf.value.repeat(charCalc);
	var treeGrow = spaces + chars;
	console.log(treeGrow);

	spaceCalc -= 1;
	charCalc += 2;
	};

};

//this function displays a tree in the inner.HTML output 
//(but only a righttriangle in console)

	// var grow;
	// var leafCalc = pineTree.leaf.value;
	// var htCalc = (2 * (pineTree.height.value) - 1);

	// for (i = 0; i < pineTree.height.value; i++ ) {
	// 	// console.log("height", pineTree.height.value);
	// 	// console.log("leaf",pineTree.leaf.value);
	// 	grow = pineTree.leaf.value.repeat(i + 1);
	// 	console.log(grow);
		
	// 	outputTree.innerHTML += `<center><p>${grow}</p></center>`;		
	// 	// for (i = 0; i < grow.length; i++) {
	// 	// 	2(i)-1 + "<br>";
	// 	// }
	// }

// }
	
	

