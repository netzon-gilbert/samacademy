// TODO: Write your solution here
function alphabetized(nput) {

    var chars = nput.split(''),
        sorted,
        out;

        sorted = chars.sort();
        out = sorted.join('');

    return out;
};

function run() {
    // TODO: Start calling your function here
    var input = document.getElementById('input').value,
        output = document.getElementById('output');

        output.innerHTML = alphabetized(input);

    console.log('Code Awesome');
};
