var vue = new Vue({
    el : '.app',
    data : {
        w : window.innerWidth,
        h : window.innerHeight
    },
    methods : {
        resize : function (w, h) {
            this.w = w;
            this.h = h;
        }
    }
});

window.addEventListener('resize', function () {
    var w = window.innerWidth,
        h = window.innerHeight;

    vue.resize(w, h);
});