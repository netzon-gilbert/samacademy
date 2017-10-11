var CylinderClass = function () {

    var SCALE_SPEED = 1,
        CANVAS_WIDTH = 1000,
        CANVAS_HEIGHT = 500;

    this.hInput;
    this.rInput;
    this.hOut;
    this.rOut;
    this.canvas;

    this.scaleR;
    this.scaleH;
    this.xO = 150;
    this.yO = 150;

    this.xC = 400;
    this.yC = 100;

    this.init = function () {
        var docCanvas = document.getElementById('canvas');
        this.canvas = docCanvas.getContext('2d');

        this.rOut = document.getElementById('rout');
        this.hOut = document.getElementById('hout');

        this.hInput = document.getElementById('height');
        this.rInput = document.getElementById('radius');

        this.inputData();
        this.outData();

        this.drawCircle();
    };

    this.outData = function () {
        this.rOut.innerHTML = this.scaleR;
        this.hOut.innerHTML = this.scaleH;
    };

    this.inputData = function () {
        this.scaleR = this.rInput.value;
        this.scaleH = this.hInput.value;
    };

    this.drawCylinder = function () {
        var vScale = 50 * (this.scaleR / 100),
            hScale = 200*(this.scaleR / 100),
            lScale = 100 * (this.scaleH / 100);

        this.canvas.beginPath();
        this.canvas.lineWidth = 2;
        this.canvas.fillStyle = '#CFE2F3';
        this.canvas.strokeStyle = 'black';
        this.canvas.lineWidth = '2px';
        this.canvas.moveTo(this.xC, this.yC);
        this.canvas.lineTo(this.xC, this.yC + lScale);
        this.canvas.bezierCurveTo(this.xC, this.yC + vScale+ lScale,
                                this.xC + hScale, this.yC + vScale + lScale,
                                this.xC + hScale, this.yC + lScale);
        this.canvas.lineTo(this.xC + hScale, this.yC);
        this.canvas.closePath();
        this.canvas.stroke();
        this.canvas.fill();

        this.canvas.beginPath();
        this.canvas.lineWidth = 2;
        this.canvas.fillStyle = '#CFE2F3';
        this.canvas.strokeStyle = 'black';
        this.canvas.lineWidth = '2px';
        this.canvas.moveTo(this.xC, this.yC);
        this.canvas.bezierCurveTo(this.xC, this.yC + vScale,
                                this.xC + hScale, this.yC + vScale,
                                this.xC + hScale, this.yC);
        this.canvas.bezierCurveTo(this.xC + hScale, this.yC - vScale,
                                this.xC, this.yC - vScale,
                                this.xC, this.yC);
        this.canvas.closePath();
        this.canvas.stroke();
        this.canvas.fill();

    };

    this.drawCircle = function () {
        this.canvas.beginPath();
        this.canvas.lineWidth = 2;
        this.canvas.fillStyle = '#CFE2F3';
        this.canvas.strokeStyle = 'black';
        this.canvas.lineWidth = '2px';
        this.canvas.arc(this.xO, this.yO, this.scaleR, 0, 2 * Math.PI);
        this.canvas.stroke();
        this.canvas.fill();
    };

    this.erase = function () {
        this.canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    };

    this.render = function () {
        this.inputData();
        this.outData();

        this.erase();
        this.drawCircle();
        this.drawCylinder();
    };
};

var cylinder = new CylinderClass();

window.onload = function(){
    cylinder.init();

    setInterval(function(){
        cylinder.render();
    }, 60);
};
