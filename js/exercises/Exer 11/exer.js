var vue = new Vue({
    el : '.app',
    data : {
        student : {
            name : 'David Rayy',
            sclass : 'VI',
            rollno : 12
        },
        len : 0

    },
    methods : {
        objLen : function (nput) {

            var count = 0;
            for (var keys in nput) {
                count++;
            }

            this.len = count;
        }
    }
});