// TODO: Write your solution here
var student = {
        name : 'David Rayy',
        sclass : 'VI',
        rollno : 12
    };

function listProp(){

    var out = '<ul>';
    for (var count in student) {
        out += '<li>' + count + ' = ' + student[count] + '</li>';
    }

    out += '</ul>';
    return out;
};

function run () {
    // TODO: Start calling your function here
    document.getElementById('output').innerHTML = listProp();
    console.log('Code Awesome');
};