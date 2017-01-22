var tree = {
	height: 0,
	character: "",
};

function treeMaker(){
}

var heightInput = document.getElementById("height");
var characterInput = document.getElementById("leaf");
var growTree = document.getElementById("growButton");
var outputTree = document.getElementById("output-target");

heightInput.addEventListener("keypress", pressed);
characterInput.addEventListener("keypress", pressed);
growTree.addEventListener("click", treeMaker);

function pressed(enterPress) {
	if (enterPress.keyCode === 13){
		treeMaker();
	}
}

// var charArray = [];
// 	tree.character = characterInput.value;
// 	tree.height = heightInput.value;
// 		charArray.push(tree.character * (tree.height ^2));
// 			return (charArray);
// 			console.log(charArray);

	
// 			for (var i = 0, i < charArray.length, i++);
// 				return (charArray

//get total number of characters (via row-squared) then do line breaks and centering after every two characters?



