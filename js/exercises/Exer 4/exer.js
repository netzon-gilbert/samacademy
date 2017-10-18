new Vue({
    el : '.app',
    data : {
        nput : [1, 4, 9, 3, 35, 8],
        out : ''
    },
    methods : {
        secMaxima : function () {
            var nput = this.nput;
            nput.sort(function (a, b) {return a - b});
            this.out = '(' + nput[1] + ', ' + nput[nput.length - 2] +')';
        }
    }
});