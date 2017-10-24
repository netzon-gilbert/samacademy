new Vue({
    el : '.app',
    data : {
        text : []
    },
    methods : {
        divideString : function () {
            this.text.splice(0, this.text.length);
            var string = document.getElementById('nputTexts').innerHTML,
                init = 0,
                last = string.length,
                start = 0,
                end = 0,
                count = 0,
                initArray = new Array();

                initArray['start'] = new Array();
                initArray['end'] = new Array();
                start = string.indexOf('<br>') + 4;

            while (start !== -1) {
                initArray['start'][count] = start;
                start = string.indexOf('<br>', start + 4);
                count++;
            }

            for (var i = 0; i < initArray['start'].length; i++){

                if (i == initArray['start'].length - 1){
                    initArray['end'][i] = last;
                } else {
                    initArray['end'][i] = initArray['start'][i + 1];
                }

                this.text.push(string.substring(initArray['start'][i] + 4, initArray['end'][i]));
            }
        },
        checkLen : function (nput, len) {
            console.log(nput.length);
            return (nput.length > len)? true: false;
        }
    }
});