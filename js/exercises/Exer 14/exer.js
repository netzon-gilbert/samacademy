// TODO: Write your solution here
function countRepeat(nput, string) {

    var newString = string.toLowerCase(),
        count = 0;

    for (var i = 0; i < newString.length; i++) {
        if (newString.charAt(i) == nput) {
            count++;
        }
    }

    return count;
};

function countInString(string) {

    var stringNum = new Array();
    for (var i = 0; i < string.length; i++) {
        stringNum[i] = 0;
        stringNum[i] = countRepeat(string.charAt(i), string);
    }

    return stringNum;
};

function firstNoneRepeat(nput){

    var numArray = countInString(nput),
        char;

    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] == 1) {
            char = nput.charAt(i);
            break;
        }
    }

    return char;
};

function run () {
    // TODO: Start calling your function here
    var input = document.getElementById('input').value;
    document.getElementById('output').innerHTML = firstNoneRepeat(input);
    console.log('Code Awesome');
};