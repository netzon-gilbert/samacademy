var RangeClass = function (id, label, value, color) {

    this.id = id;
    this.value = value;
    this.color = color;
    this.label = label;

    this.draw = function (canv, percent) {

        canv.beginPath();
        canv.lineWidth = 2;
        canv.strokeStyle = this.color;

        canv.arc(100, 100, 85, 0, (1 - percent) * 2 * Math.PI, true);

        canv.arc(100, 100, 60, 0, (1 - percent) * 2 * Math.PI, true);
        canv.moveTo(160, 100);
        canv.lineTo(185, 100);

        canv.closePath();
        canv.stroke();

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
        canv.arc(100, 100, 95, 0, 2 * Math.PI);
        canv.stroke();

        canv.beginPath();
        canv.lineWidth = 2;
        canv.strokeStyle = 'black';
        canv.arc(100, 100, 50, 0, 2 * Math.PI);
        canv.stroke();
    };

    this.drawRanges = function () {
        for(var i = 0; i < ranges.length; i++) {
            ranges[i].draw(canv, .75);
        }
    };

    this.erase = function () {
        canv.clearRect(0, 0, 200, 200);
    };

    this.addControl = function (label, value, color) {
        ranges.push(new RangeClass(1, label, value, color));
    };

    this.removeControl = function (nput) {

    };

    this.draw = function () {
        this.erase();
        this.drawCircle();
        this.drawRanges();
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

    app.addControl(label, value, color);
    console.log(label + '\n' + value + '\n' + color);
};