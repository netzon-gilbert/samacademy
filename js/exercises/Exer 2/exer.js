new Vue({
    el : '.app',
    data : {
        nput : '',
        out : ''
    },
    methods : {
        alphabetized : function () {

            var chars = this.nput.split(''),
                sorted,
                out;

                sorted = chars.sort();
                out = sorted.join('');

            this.out = out;
        }
    }
})
