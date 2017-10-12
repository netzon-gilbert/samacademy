// TODO: Write your solution here
var images = [
        'assets/image1.jpg',
        'assets/image2.jpg',
        'assets/image3.jpg',
        'assets/image4.jpg',
        'assets/image5.jpg'
    ];

function run() {
    // TODO: Start calling your function here
    var rand = Math.round(Math.random() * 10) % 5;

    document.getElementById('display').src = images[rand];
    console.log('Code Awesome');
};