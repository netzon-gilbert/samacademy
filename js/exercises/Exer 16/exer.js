new Vue({
    el: '.app',
    data : {
        canvWidth : 1000,
        canvHeight : 500,
        cyRadius : 50,
        cyHeight : 50,
        animate : false,
        canvas : document.getElementById('canvas').getContext('2d')
    },
    methods : {
        drawObjs : function () {

            var self = this,
                xO = 150,
                yO = 150,
                xC = 400,
                yC = 200;

            function clear() {
                self.canvas.clearRect(0, 0, self.canvWidth, self.canvHeight);
            }

            function drawCircle() {
                self.canvas.beginPath();
                self.canvas.lineWidth = 2;
                self.canvas.fillStyle = '#CFE2F3';
                self.canvas.strokeStyle = 'black';
                self.canvas.lineWidth = '2px';
                self.canvas.arc(xO, yO, self.cyRadius, 0, 2 * Math.PI);
                self.canvas.stroke();
                self.canvas.fill();
            }

            function drawCylinder() {
                var vScale = 50 * (self.cyRadius / 100),
                    hScale = 200*(self.cyRadius / 100),
                    lScale = 100 * (self.cyHeight / 100);
                    yC -= lScale;

                self.canvas.beginPath();
                self.canvas.lineWidth = 2;
                self.canvas.fillStyle = '#CFE2F3';
                self.canvas.strokeStyle = 'black';
                self.canvas.lineWidth = '2px';
                self.canvas.moveTo(xC, yC);
                self.canvas.lineTo(xC, yC + lScale);
                self.canvas.bezierCurveTo(xC, yC + vScale+ lScale,
                                        xC + hScale, yC + vScale + lScale,
                                        xC + hScale, yC + lScale);
                self.canvas.lineTo(xC + hScale, yC);
                self.canvas.closePath();
                self.canvas.stroke();
                self.canvas.fill();

                self.canvas.beginPath();
                self.canvas.lineWidth = 2;
                self.canvas.fillStyle = '#CFE2F3';
                self.canvas.strokeStyle = 'black';
                self.canvas.lineWidth = '2px';
                self.canvas.moveTo(xC, yC);
                self.canvas.bezierCurveTo(xC, yC + vScale,
                                        xC + hScale, yC + vScale,
                                        xC + hScale, yC);
                self.canvas.bezierCurveTo(xC + hScale, yC - vScale,
                                        xC, yC - vScale,
                                        xC, yC);
                self.canvas.closePath();
                self.canvas.stroke();
                self.canvas.fill();
            }

            function draw(){
                setTimeout(function () {
                    if(self.animate){
                        clear();
                        drawCircle();
                        drawCylinder();
                        self.drawObjs();
                    }
                }, 30);
            }

            draw();
        },
        start : function () {
            this.animate = true;
            this.drawObjs();
        },
        stop : function () {
            this.animate = false;
        }

    }
});
