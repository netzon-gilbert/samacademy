new Vue({
    el : '.app',
    data : {
        out : '',
        nput : ''
    },
    methods : {
        countRepeat : function (nput, string) {

            var newString = string.toLowerCase(),
                count = 0;

            for (var i = 0; i < newString.length; i++) {
                if (newString.charAt(i) == nput) {
                    count++;
                }
            }

            return count;
        },
        countInString : function (string) {

            var stringNum = new Array();
            for (var i = 0; i < string.length; i++) {
                stringNum[i] = 0;
                stringNum[i] = this.countRepeat(string.charAt(i), string);
            }

            return stringNum;
        },
        firstNoneRepeat : function (nput){

            var numArray = this.countInString(nput),
                char;

            for (var i = 0; i < numArray.length; i++) {
                if (numArray[i] == 1) {
                    char = nput.charAt(i);
                    break;
                }
            }

            return char;
        },
        run : function () {       
            this.out = this.firstNoneRepeat(this.nput);
        }
    }
});