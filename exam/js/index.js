var vue = new Vue({
    el : '.app',
    data : {
        rentIncome : 0,
        agencyFees : 0,
        yearlyTotal : 0,
        afterTerm : 0,
        profitOT : 0,
        profitAT : 0,
        grandPFT : 0,
        returnInvest : 0,

        type : 'Studio',
        price : 0,
        yeld : 0,
        term : 0,
        capital : 0,
    },
    methods : {
        shortTermLink : function () {
            alert('Comming soon.');
        },
        calculate : function () {
            this.price = (this.price == NaN || this.price == null)? 0: this.price ;
            var rentsClass = 'rents',
                appresClass = 'appres',
                grandsClass = 'grands',
                s = this;

                s.price = parseInt(s.price);
                s.yeld = parseInt(s.yeld);
                s.term = parseInt(s.term);
                s.capital = parseInt(s.capital);

            function rentIncome() {
                s.rentIncome = 0;
            }

            function agencyFees() {
                s.agencyFees = 0;
            }

            function yearlyTotal() {
                s.yearlyTotal = 0;
            }

            function afterTerm() {
                s.afterTerm = 0;
            }

            function profitOT() {
                s.profitOT = 0;
            }

            function profitAT() {
                s.profitAT = 0;
            }

            function grandPFT() {
                s.grandPFT = 0;
            }

            function returnInvest() {
                s.returnInvest = 0;
            }

            function toggleView(className, show) {
                var els = document.getElementsByClassName(className);
                if (show) {
                   [].forEach.call(els, function (el) {
                        el.style.visibility = 'visible';
                   });
                } else {
                    [].forEach.call(els, function (el) {
                        el.style.visibility = 'hidden';
                   });
                }
            }

            // rent
            if (
                s.price >= 600 &&
                s.term !== 0 &&
                s.yeld !== 0
            ) {
                rentIncome();
                agencyFees();
                yearlyTotal();
                profitOT();
                toggleView(rentsClass, true);
            } else {
                toggleView(rentsClass, false);
            }

            // appreciation
            if (
                s.price > 0 &&
                s.capital !== 0 &&
                s.term !== 0
            ) {
                afterTerm();
                profitAT();
                toggleView(appresClass, true);
            } else {
                toggleView(appresClass, false);
            }

            // grand
            if (
                s.price >= 600 &&
                s.term !== 0 &&
                s.yeld !== 0 &&
                s.capital !== 0
            ) {
                grandPFT();
                returnInvest();
                toggleView(grandsClass, true);
            } else {
                toggleView(grandsClass, false);
            }

        }
    }
});

vue.calculate();
