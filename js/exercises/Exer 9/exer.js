// TODO: Write your solution here
window.onload = function () {

    var strong = document.getElementsByTagName('strong');

    for (var i = 0; i < strong.length; i++) {

        strong[i].addEventListener('mouseover', function () {
            this.style.backgroundColor = 'blue';
            this.style.color = "white";
        });

        strong[i].addEventListener('mouseout', function () {
            this.style.backgroundColor = 'transparent';
            this.style.color = 'black';
        });
    }
};

function run () {
    // TODO: Start calling your function here
    console.log('Code Awesome');
};