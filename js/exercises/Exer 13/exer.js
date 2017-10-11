// TODO: Write your solution here
function isArmstrong(nput) {

    var num = nput + '',
        nums = [
            parseInt(num.charAt(0)),
            parseInt(num.charAt(1)),
            parseInt(num.charAt(2))
        ],
        sum = Math.pow(nums[0], 3) +
            Math.pow(nums[1], 3) +
            Math.pow(nums[2], 3);

    return (sum == nput)? true: false;
};

function findArmstrong() {

    var lists = '<ul>';

    for (var i = 100; i < 1000; i++) {
        if (isArmstrong(i)) {
            lists += '<li>' + i + '</li>';
        }
    }

    lists += '</ul>';
    return lists;
};

function run () {
    // TODO: Start calling your function here
    document.getElementById('output').innerHTML = findArmstrong();
    console.log('Code Awesome');
};