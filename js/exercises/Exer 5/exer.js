new Vue({
    el : '.app',
    data : {
        nput1 : '',
        nput2 : '',
        out : ''
    },
    methods : {
        power : function () {
            var b = parseInt(this.nput1),
                n = parseInt(this.nput2);
            this.out = Math.pow(b, n);
        }
    }
});