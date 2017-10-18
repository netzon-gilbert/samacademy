new Vue({
    el : '.app',
    data : {
        nput : '',
        out :'Enter texts'
    },
    methods: {
        flip: function (event) {
            this.out = this.nput.split('').reverse().join('');
            console.log('good');
        }
    }
})
