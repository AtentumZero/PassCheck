console.log("Script linked");
var keyList = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*ABCDEFGHIJKLMNOPQRST";
var temp = '';

function generatePass(pLenght) {
    temp = '';
	for(var i=0;i<pLenght;i++){
		temp += keyList.charAt(Math.floor(Math.random() * keyList.length))
	}
	return temp;
}

function populate(enterLenght){
	document.passGen.output.value = generatePass(enterLenght);
}
