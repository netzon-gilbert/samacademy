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
                return Math.round(s.price * s.term * s.yeld /100);

            }

            function agencyFees() {
                return Math.round(s.price * s.term * s.yeld * 0.25 /100);

            }

            function yearlyTotal() {
                return Math.round(s.price * s.term * s.yeld * 2 /100);

            }

            function afterTerm() {
                return Math.round(s.price * s.term * s.capital /100);

            }

            function profitOT() {
                return Math.round(s.price * s.yeld  /100);

            }

            function profitAT() {
                return Math.round(s.price * s.term * s.capital * 0.35 /100);

            }

            function grandPFT() {
                return Math.round(s.price * s.term * s.capital * 0.20 /100);

            }

            function returnInvest() {
                return Math.round(s.price * s.term * 0.05 /100);

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
                this.rentIncome = rentIncome();
                this.agencyFees = agencyFees();
                this.yearlyTotal = yearlyTotal();
                this.profitOT = profitOT();
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
                this.afterTerm = afterTerm();
                this.profitAT = profitAT();
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
                this.grandPFT = grandPFT();
                this.returnInvest = returnInvest();
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
