var SemiCircleClass = function (id, label, value, color) {

    this.id = id;
    this.value = value;
    this.color = color;
    this.label = label;

    this.draw = function (canv, percent, rotation) {
        canv.save();
        canv.beginPath();
        canv.lineWidth = 33;
        canv.strokeStyle = this.color;
        canv.translate(100, 100);
        canv.rotate(2 * rotation * Math.PI);
        canv.arc(0, 0, 73, 0, percent * 2 * Math.PI);
        canv.stroke();
        canv.restore();

    };

};

var RangesClass = function () {
    var rangesWindow;

    this.init = function () {
        rangesWindow = document.getElementById('app-controls');
    };

    this.clear = function () {
        rangesWindow.innerHTML = '';
    };

    this.add = function (id, label, value, color) {
        rangesWindow.innerHTML += '<div class="ctr-range" id="range' + id + '">' +
                                '<span>' + value + '</span>' +
                                '<label>' + label + '</label>' +
                                '<input value="' + value  + '" type="range" style="' +
                                '" id="" class="range-box" />' +
                                '<input type="button" class="close-btn" value="x" /></div>';
    };

    this.setEvent = function () {

    };

    this.removeEvent = function () {

    };
}

var AppClass = function () {

    var ranges = [],
        canv;

    this.controls = new RangesClass();

    this.init = function () {
        var canvas = document.getElementById('chart');
        canv = canvas.getContext('2d');

        this.controls.init();
    };

    this.drawCircle = function () {
        canv.shadowOffsetX = 0;
        canv.shadowOffsetY = 0;
        canv.shadowBlur = 3;
        canv.shadowColor = 'rgba(0, 0, 0, 0.8)';

        canv.beginPath();
        canv.lineWidth = 1;
        canv.fillStyle = "#EEE9DB";
        canv.strokeStyle = '#B5B1A7';
        canv.arc(100, 100, 95, 0, 2 * Math.PI);
        canv.fill();

        canv.beginPath();
        canv.arc(100, 100, 50, 0, 2 * Math.PI);
        canv.fill();

        canv.shadowBlur = 0;
        canv.shadowColor = 'none';
    };

    this.drawRanges = function () {
        var total = 0;
        var rotation = 0;
        for(var i = 0; i < ranges.length; i++) {
            total += ranges[i].value;
        }
        for(var i = 0; i < ranges.length; i++) {
            ranges[i].draw(canv, ranges[i].value / total, rotation);
            rotation += ranges[i].value / total;
            this.getValues(i);

        }
    };

    this.getValues = function (nput) {
        ranges[nput].value = document.getElementById('range' + nput).childNodes[0].value;
        console.log(ranges[nput].value);
    }
    this.erase = function () {
        canv.clearRect(0, 0, 200, 200);
    };

    this.addControl = function (label, value, color) {
        ranges.push(new SemiCircleClass(1, label, value, color));

        this.controls.clear();
        for (var i = 0; i < ranges.length; i++) {
            this.controls.add(i, ranges[i].label , ranges[i].value, ranges[i].color);

        }
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

    app.init();

    setInterval(function () {
        app.refresh();
    }, 60);
};

function add() {

    var label = document.getElementById('label').value,
        value = parseInt(document.getElementById('value').value),
        color = document.getElementById('color').value;

    if (value !== null && value <= 100 && value >= 0) {

        app.addControl(label, value, color);

    } else {
        alert('Enter value from 0-100');
    }
};