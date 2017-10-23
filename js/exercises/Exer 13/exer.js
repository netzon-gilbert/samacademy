var vue = new Vue({
    el : '.app',
    data : {
        aNum : []
    },
    methods : {
        isArmstrong : function (nput) {

            var num = nput + '',
                nums = [
                    parseInt(num.charAt(0)),
                    parseInt(num.charAt(1)),
                    parseInt(num.charAt(2))
                ],
                sum = Math.pow(nums[0], 3) +
                    Math.pow(nums[1], 3) +
                    Math.pow(nums[2], 3);

            return (sum == nput)? true: false;
        },

        findArmstrong : function () {

            this.aNum.splice(0, this.aNum.length);

            for (var i = 100; i < 1000; i++) {
                if (this.isArmstrong(i)) {
                    this.aNum.push(i);
                }
            }

        }

    }
});