// TODO: Write your solution here
function isPrime(nput) {

    var out = 'no entry';

    if (nput == 1) {
        out = 'prime';
    } else if (nput == 2) {
        out = 'not prime';
    }

    for (var i = 2; i < nput; i++) {
        if (nput % i == 0) {
            out = 'not prime';
            break;
        } else {
            out = 'prime';
        }
    }

    return out;
};

function run() {
    // TODO: Start calling your function here
    var input = document.getElementById('input').value,
        output = document.getElementById('output');

        output.innerHTML = isPrime(input);

    console.log('Code Awesome');
};