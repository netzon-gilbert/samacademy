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
    var rangesWindow,
        styleElement;

    this.init = function () {
        rangesWindow = document.getElementById('app-controls');
        styleElement = document.getElementById('range_styles');
    };

    this.clear = function () {
        rangesWindow.innerHTML = '';
        styleElement.innerHTML = '';
    };

    this.add = function (id, label, value, color) {
        rangesWindow.innerHTML += '<div onmousedown="activeRange(this.id)" class="ctr-range" id="range' + id + '">' +
                                '<span>' + value + '</span>' +
                                '<label>' + label + '</label>' +

                                '<input id="input'+ id +'" value="' + value  + '" type="range" style="' +
                                'border-color:' + color +'; color: ' + color +';' +
                                '" id="" class="range-box" />'+

                                '<input id="x' + id + '" onclick="removeRange(this.id)" type="button" class="close-btn" value="x" /></div>';

        styleElement.innerHTML += 'input[type=range]#input'+ id +'::-webkit-slider-thumb {' +
                                'background: '+ color +'}';
    };

};

var AppClass = function () {

    var ranges = [],
        boxes = [],
        outVal,
        activeRange = null,
        canv;

        boxes['nput'] = [];
        boxes['out'] = [];

    this.controls = new RangesClass();

    this.init = function () {
        var canvas = document.getElementById('chart');
        outVal = document.getElementById('out_value');
        canv = canvas.getContext('2d');

        this.controls.init();
    };

    this.export = function () {
        var local = '[',
            temp = {
                label: null,
                value: null,
                color: null,
            };

        for (var i = 0; i < ranges.length; i++) {
            temp.label = ranges[i].label;
            temp.value = ranges[i].value;
            temp.color = ranges[i].color;

            local += JSON.stringify(temp);
            local += (i !== (ranges.length - 1))? ',' : '' ;
        }
        local += ']';

        if (typeof(Storage) !== "undefined") {

            localStorage.setItem('ranges', local);

        } else {
            console.log("error: local storage not supported!");
        }
    };

    this.import = function () {
        try {
            var retrieve = JSON.parse(localStorage.ranges);
            for(var i = 0; i < retrieve.length; i++){
                this.addControl(retrieve[i].label, retrieve[i].value, retrieve[i].color);
            }
        } catch (e) {

        }
    };

    this.active = function (nput) {
        activeRange = nput;
    };

    this.addControl = function (label, value, color) {
        ranges.push(new SemiCircleClass(1, label, value, color));

        this.updateBoxes();
    };

    this.updateBoxes = function () {
        this.controls.clear();
        for (var i = 0; i < ranges.length; i++) {
            this.controls.add(i, ranges[i].label , ranges[i].value, ranges[i].color);
        }

         for (var i = 0; i < ranges.length; i++) {
            var box = document.getElementById('range' + i);
            boxes['nput'][i] = box.children[2];
            boxes['out'][i] = box.children[0];
            //console.log(boxes['nput'][i].value);
         }
    };
    this.removeControl = function (nput) {
        ranges.splice(nput, 1);
        boxes['nput'].splice(nput, 1);
        boxes['out'].splice(nput, 1);
        this.updateBoxes();
    };

    this.draw = function () {
        canv.clearRect(0, 0, 200, 200);

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

        var total = 0;
        var rotation = 0;

        for(var i = 0; i < ranges.length; i++) {
            total += ranges[i].value;
        }

        for(var i = 0; i < ranges.length; i++) {

            ranges[i].draw(canv, ranges[i].value / total, rotation);
            rotation += ranges[i].value / total;

            ranges[i].value = parseInt(boxes['nput'][i].value);
            boxes['out'][i].innerHTML = boxes['nput'][i].value;
        }

        try {
            if (activeRange !== null) {
                outVal.innerHTML = ranges[activeRange].value;
            }
        } catch (e) {
            //console.log("error");
        }
    };

};

var app = new AppClass();

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

function removeRange(nput) {
    var id = parseInt(nput.substring(1, nput.length));
    app.removeControl(id);
};

function activeRange(nput) {
    var id = parseInt(nput.substring(5, nput.length));
    app.active(id);
};

window.onload = function () {

    app.init();
    app.import();

    setInterval(function () {
        app.draw();
    }, 60);
};

window.onclick = function () {
    app.export();
};