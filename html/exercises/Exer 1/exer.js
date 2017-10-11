// TODO: Write your solution here
function reverseNum(nput){
	var numString = new String(nput);
	return numString.split("").reverse().join("");
}

function run() {
    // TODO: Start calling your function here
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    output.innerHTML = reverseNum(input);
    console.log('Code Awesome');
}