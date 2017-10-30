var vue = new Vue({
    el : ".app",
    data : {
        render : false,
        nputLab : '',
        nputVal : '',
        nputCol : '#000000',
        pies : [],
        display : 0,
        clickedIndex : 0,
    },
    methods : {
        draw : function () {
            var s = this,
                rotation = 0,
                total = 0,
                percent = 0,
                canv = document.getElementById('chart').getContext('2d');

            function circles() {
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
            }

            function semiCircles(perc, rota, col) {
                canv.save();
                canv.beginPath();
                canv.lineWidth = 33;
                canv.strokeStyle = col;
                canv.translate(100, 100);
                canv.rotate(2 * rota * Math.PI);
                canv.arc(0, 0, 73, 0, perc * 2 * Math.PI);
                canv.stroke();
                canv.restore();
            }

            canv.clearRect(0, 0, 200, 200);
            circles();

            for(i = 0; i < s.pies.length; i++) {
                total += parseInt(s.pies[i].value);
            }

            for(i = 0; i < s.pies.length; i++) {
                percent = parseInt(s.pies[i].value) / total;
                semiCircles(percent, rotation, s.pies[i].color);
                rotation += percent;
            }
            if(this.render){
                setTimeout(function () {
                    arguments[0].draw();
                }, 60, this);
            }
            if (this.pies.length >= 1) {
                try {
                    this.display = this.pies[this.clickedIndex].value;
                } catch (e) {}
            } else {
                this.display = 0;
            }

        },
        add : function () {
            var style = '',
                styleEl = document.getElementById('range_styles'),
                rand = 'range' + Math.round(Math.random() * 1000001),
                rangeStyle = function (id, color) {
                    var out = 'input[type=range]#'+ id;
                        out += '::-webkit-slider-thumb {';
                        out += 'background: '+ color +'}';
                        out += '#'+ id;
                        out += '{border-color: '+ color +'}';
                    return out;
                };

            this.pies.push({
                id : rand,
                label : this.nputLab,
                value : this.nputVal,
                color : this.nputCol,
                style : rangeStyle(rand, this.nputCol)
            });

            for(i = 0; i < this.pies.length; i++) {
                style += this.pies[i].style;
            }

            styleEl.innerHTML = style;
            this.clickedIndex = this.pies.length-1;
            this.draw();
            this.export();

        },
        remove : function (nput) {
            this.pies.splice(nput, 1);
            this.export();
            if (this.pies.length >= 1) {
                this.clickedIndex = this.pies.length - 1;
            }
            this.draw();
        },
        clicked : function (key, nput) {
            if (nput) {
                this.render = true;
                this.draw();
            } else {
                this.render = false;
                this.export();
            }
            this.clickedIndex = key;
        },
        export : function () {
            console.log();
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem('pies', JSON.stringify(this.pies));
            } else {
                console.log("error: local storage not supported!");
            }
        },
        import : function () {
            var style = document.getElementById('range_styles');

            if (localStorage.getItem('pies')) {
                this.pies = JSON.parse(localStorage.getItem('pies'));
                for (var i = 0; i < this.pies.length; i++) {
                    style.innerHTML += this.pies[i].style;
                }
            }

            if( this.pies.length >= 1) {
                this.clickedIndex = this.pies.length-1;
            }

            this.draw();
        }
    }
});

vue.import();
