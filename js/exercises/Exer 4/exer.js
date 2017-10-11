// TODO: Write your solution here
function secMaxima(nput) {

    nput.sort(function (a, b) {return a - b});
    return '(' + nput[1] + ', ' + nput[nput.length - 2] +')';
};

function run() {
    // TODO: Start calling your function here
    var output = document.getElementById('output');
        output.innerHTML = secMaxima([1,4,9,3,35,8]);

    console.log('Code Awesome');
};