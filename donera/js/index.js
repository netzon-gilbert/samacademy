// class the semi circles in the pie graph
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

// range class for manipulating input ranges
var RangesClass = function (params) {
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

    // add a complete set of control, range, span etc. on the document
    this.add = function (id, label, value, color) {

        var rangeBox = document.createElement('div'),
            rangeValue = document.createElement('span'),
            rangeLabel = document.createElement('label'),
            nputRange = document.createElement('input'),
            closeBtn =document.createElement('input');

            rangeBox.setAttribute('class', 'ctr-range');
            rangeBox.setAttribute('id', 'range' + id);
            rangeBox.addEventListener('mousedown', function () {
                if (   params
                    && params.rangeBox
                    && params.rangeBox.onmousedown) {
                    params.rangeBox.onmousedown(this.id);
                }
            });

            rangeValue.appendChild(document.createTextNode(value));
            rangeLabel.appendChild(document.createTextNode(label));

            nputRange.setAttribute('type', 'range');
            nputRange.setAttribute('id', 'input' + id);
            nputRange.setAttribute('value', value);
            nputRange.setAttribute('class', 'range-box');
            nputRange.setAttribute('style', 'border-color:'+ color);
            nputRange.addEventListener('mousedown', function () {
                if (   params
                    && params.nputRange
                    && params.nputRange.onmousedown) {
                    params.nputRange.onmousedown();
                }
            });
            nputRange.addEventListener('mouseup', function () {
                if (   params
                    && params.nputRange
                    && params.nputRange.onmouseup) {
                    params.nputRange.onmouseup();
                }
            });

            closeBtn.setAttribute('type', 'button');
            closeBtn.setAttribute('id', 'x' + id);
            closeBtn.setAttribute('class', 'close-btn');
            closeBtn.setAttribute('value', 'x');
            closeBtn.addEventListener('click', function () {
                if (   params
                    && params.closeBtn
                    && params.closeBtn.onclick) {
                    params.closeBtn.onclick(this.id);
                }
            });

            rangeBox.appendChild(rangeValue);
            rangeBox.appendChild(rangeLabel);
            rangeBox.appendChild(nputRange);
            rangeBox.appendChild(closeBtn);

            rangesWindow.appendChild(rangeBox);

            styleElement.innerHTML += 'input[type=range]#input'+ id +
                                '::-webkit-slider-thumb {' +
                                'background: '+ color +'}';

    };

};

// the application container, heart of the processing
var app = new function () {

    var ranges = [],
        boxes = [],
        outVal,
        activeRange = null,
        self = this,
        canv;

        boxes['nput'] = [];
        boxes['out'] = [];

    // get the id of the active input range
    function setActiveRange(nput) {
        var id = parseInt(nput.substring(5, nput.length));
        self.active(id);
    }

    // starts the animation process for the canvas and output values
    function start() {
        self.animate = true;
        animate();
    };

    // stops the animation process
    function stop() {
        self.animate = false;
    };

    // the animation frame
    function animate() {
        setTimeout(function () {
            if(app.animate == true) {
                self.draw();
                animate();
            }
        }, 100);
    };

    // to remove range when close button is clicked
    function removeRange(nput) {
        var id = parseInt(nput.substring(1, nput.length));
        self.removeControl(id);
        self.draw();
    };

    // adds a input range control and add data to pie graph
    function add() {

        var label = document.getElementById('label').value,
            value = parseInt(document.getElementById('value').value),
            color = document.getElementById('color').value;

        if (value !== null && value <= 100 && value >= 0) {

            self.addControl(label, value, color);
            self.draw();

        } else {
            alert('Enter value from 0-100');
        }
    };

    this.animate = false;
    this.controls = new RangesClass({
        rangeBox: {
            onmousedown: function (id) {
                setActiveRange(id);
            }
        },
        nputRange: {
            onmousedown: function () {
                start();
            },
            onmouseup: function () {
                stop();
            }
        },
        closeBtn: {
            onclick: function (nput) {
                removeRange(nput);
            }
        }
    });

    // initialize the app , accessing the needed elements
    this.init = function () {
        var canvas = document.getElementById('chart');
        outVal = document.getElementById('out_value');
        canv = canvas.getContext('2d');

        document.getElementById('add').addEventListener('click', function () {
            add();
        });

        this.controls.init();

        window.onclick = function () {
            self.export();
            self.draw();
        };

        this.import();
        this.draw();
    };

    // export data of the current status on the local storage
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

    // import data from the last status saved on the local storage
    this.import = function () {
        var ranges = localStorage.getItem('ranges');

        if (ranges) {
            try {
                var retrieve = JSON.parse(ranges);
                for(var i = 0; i < retrieve.length; i++){
                    this.addControl(retrieve[i].label, retrieve[i].value, retrieve[i].color);
                }
            } catch(e) {}
        }
    };

    // set the active range to be rendered for the display
    this.active = function (nput) {
        activeRange = nput;
    };

    // add a new control and a new data in the pie graph
    this.addControl = function (label, value, color) {
        ranges.push(new SemiCircleClass(1, label, value, color));
        this.active(ranges.length - 1);
        this.updateBoxes();
    };

    // update the data to synchronise the control and the pie graph
    this.updateBoxes = function () {
        this.controls.clear();
        for (var i = 0; i < ranges.length; i++) {
            this.controls.add(i, ranges[i].label , ranges[i].value, ranges[i].color);
        }

         for (var i = 0; i < ranges.length; i++) {
            var box = document.getElementById('range' + i);
            boxes['nput'][i] = box.children[2];
            boxes['out'][i] = box.children[0];
         }
    };

    // remove range and the specific pie graph
    this.removeControl = function (nput) {
        ranges.splice(nput, 1);
        boxes['nput'].splice(nput, 1);
        boxes['out'].splice(nput, 1);
        this.active(ranges.length - 1);
        this.updateBoxes();
    };

    // draw pie chart on the canvas
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

// initialize the application when the page finish loading
window.onload = function () {
    app.init();
};