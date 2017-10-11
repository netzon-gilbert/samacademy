// TODO: Write your solution here
function addRaw() {

    var table = document.getElementById('table'),
        raw = table.insertRow(1),
        cell1 = raw.insertCell(0),
        cell2 = raw.insertCell(1);

        cell1.innerHTML = 'row 1';
        cell2.innerHTML = 'row 2';
};

function run() {
    // TODO: Start calling your function here
    addRaw();
    console.log('Code Awesome');
};