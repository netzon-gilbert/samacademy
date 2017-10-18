new Vue({
    el : '.app',
    data : {
        nput : '',
        out : ''
    },
    methods : {
        isPrime : function () {
            var out = 'no entry',
                nput = parseInt(this.nput);

            if (nput == 1) {
                out = 'prime';
            } else if (nput == 2) {
                out = 'not prime';
            }

            for (var i = 2; i < nput; i++) {
                if (nput % i == 0) {
                    out = 'not prime';
                    break;
                } else {
                    out = 'prime';
                }
            }

            this.out = out;
        }
    }
});