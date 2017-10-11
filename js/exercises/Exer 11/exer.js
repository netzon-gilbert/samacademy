// TODO: Write your solution here
 var student = {
        name : 'David Rayy',
        sclass : 'VI',
        rollno : 12
    };

function objLen(nput) {

    var count = 0;
    for (var keys in nput) {
        count++;
    }

    return count;
};

function run () {
    // TODO: Start calling your function here
    document.getElementById('output').innerHTML = objLen(student);
    console.log('Code Awesome');
};