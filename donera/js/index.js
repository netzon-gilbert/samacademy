var RangeClass = function () {

    this.id;
    this.value;
    this.color;

    this.init = function () {

    };

};

var AppClass = function () {

    var ranges = [],
        canv;

    this.init = function () {
        var canvas = document.getElementById('chart');
        canv = canvas.getContext('2d');
    };

    this.drawCircle = function () {
        canv.beginPath();
        canv.lineWidth = 2;
        canv.strokeStyle = 'black';
        canv.lineWidth = '2px';
        canv.arc(100, 100, 95, 0, 2 * Math.PI);
        canv.stroke();

        canv.beginPath();
        canv.lineWidth = 2;
        canv.strokeStyle = 'black';
        canv.lineWidth = '2px';
        canv.arc(100, 100, 50, 0, 2 * Math.PI);
        canv.stroke();
    };

    this.erase = function () {
        canv.clearRect(0, 0, 200, 200);
    };

    this.addControl = function (label, value, color) {

    };

    this.removeControl = function (nput) {

    };

    this.draw = function () {
        this.erase();
        this.drawCircle();
    };

    this.refresh = function () {
        this.draw();
    };
};
var app = new AppClass();

window.onload = function () {

    console.log('good');
    app.init();

    setInterval(function () {
        app.refresh();
    }, 60);
};

function add() {

    var label = document.getElementById('label').value,
        value = document.getElementById('value').value,
        color = document.getElementById('color').value;

    console.log(label + '\n' + value + '\n' + color);
};