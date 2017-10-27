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
                viewCollapse = true,
                s = this,
                elPos = [];

                s.price = parseInt(s.price);
                s.yeld = parseInt(s.yeld);
                s.term = parseInt(s.term);
                s.capital = parseInt(s.capital);

                elPos['rents'] = [800, 1130, 850, 930, 1010, 1200];
                elPos['appres'] = [750, 1130, 900, 1200];
                elPos['grands'] = [1320, 1450];

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

            function toggleView(className, show, collapse) {
                var els = document.getElementsByClassName(className),
                    count = 0;

                if (show) {
                   [].forEach.call(els, function (el) {
                        el.style.visibility = 'visible';
                        el.style.top = elPos[className][count]+ 'px';
                        count++;
                   });
                } else {
                    [].forEach.call(els, function (el) {
                        el.style.visibility = 'hidden';
                        el.style.top = '0px';
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
                toggleView(rentsClass, true, viewCollapse);
            } else {
                toggleView(rentsClass, false, viewCollapse);
            }

            // appreciation
            if (
                s.price > 0 &&
                s.capital !== 0 &&
                s.term !== 0
            ) {
                afterTerm();
                profitAT();
                toggleView(appresClass, true, viewCollapse);
            } else {
                toggleView(appresClass, false, viewCollapse);
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
                viewCollapse = false;
                toggleView(grandsClass, true, viewCollapse);
            } else {
                viewCollapse = true;
                toggleView(grandsClass, false, viewCollapse);
            }

        }
    }
});

vue.calculate();
