// TODO: Write your solution here
function getTime() {

    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    var day = 'AM';

    if (h > 12) {
        h = h - 12;
        day = 'PM';
    }

    return h + ' :' + m + ': ' +s +' ' + day;
};

function run() {
    // TODO: Start calling your function here
    document.getElementById('output').innerHTML = getTime();
    setTimeout(function () {
        run();
    }, 300);

    console.log('Code Awesome');
};