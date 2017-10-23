var vue = new Vue({
    el : '.app',
    data : {
        hr : 0,
        mn : 0,
        sc : 0,
        dy : 'AM'
    },
    methods : {
        getTime : function () {
            var time = new Date();
            var h = time.getHours();
            var m = time.getMinutes();
            var s = time.getSeconds();
            var day = 'AM';

            if (h > 12) {
                h = h - 12;
                day = 'PM';
            }

            this.hr = h;
            this.mn = m;
            this.sc = s;
            this.dy = day;
        },
        init : function () {
            var self = this;
            setInterval(function () {
                self.getTime();
            }, 300);
        }
    }
});