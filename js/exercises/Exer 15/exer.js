// TODO: Write your solution here
function getTexts(nput) {
    var texts = new Array(),
        string = nput.innerHTML;

    return string;
};

function devideString(nput) {

    var string = getTexts(nput),
        init = 0,
        last = string.length,
        start = 0,
        end = 0,
        substrings = new Array(),
        count = 0,
        initArray = new Array();

        initArray['start'] = new Array();
        initArray['end'] = new Array();
        start = string.indexOf('<br>') + 4;

    while (start !== -1) {
        initArray['start'][count] = start;
        start = string.indexOf('<br>', start + 4);
        count++;
    }

    for (var i = 0; i < initArray['start'].length; i++){

        if (i == initArray['start'].length - 1){
            initArray['end'][i] = last;
        } else {
            initArray['end'][i] = initArray['start'][i + 1];
        }

        substrings[i] = string.substring(initArray['start'][i] + 4, initArray['end'][i]);
    }

    return substrings;
};

function prepareTexts(nput, len) {

    var texts = devideString(nput),
        out = '';

    for (var i = 0; i < texts.length; i++) {
        if (texts[i].length > len) {

            out += '<p>'
                + texts[i].substring(0, len)
                + '...<span class=\'tooltip\'>'
                + texts[i]
                + '</span></p>';

        } else {

            out += '<p>'
                + texts[i]
                + '<p>';
        }
    }

    return out;
};

function run () {
    // TODO: Start calling your function here
    var input = prepareTexts(document.getElementsByTagName('p')[1], 50);
    document.getElementById('output').innerHTML = input;

    console.log('Code Awesome');
};