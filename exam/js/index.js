var OutputClass = function (nput) {
    this.self = nput;

    this.init = function () {

    };

    this.hide = function () {
        this.self.forEach(function (value, index, nput){
            document.getElementById(value).style.visibility = 'hidden';
        });
    };

    this.show = function () {
         this.self.forEach(function (value, index, nput){
            document.getElementById(value).style.visibility = 'visible';
        });
    };
};

var CalculatorClass = function () {

    this.cart = [];
    this.outCart = [];

    this.inputValues = [];
    this.filtered = [];

    this.rentalYeld = new OutputClass([
            'arrow3',
            'foot-box1',
            'foot-box2',
            'foot-total1',
            'foot-box3',
            'arrow4'
    ]);

    this.capitalApp = new OutputClass([
            'arrow2',
            'foot-total2',
            'foot-box4',
            'arrow5'
    ]);

    this.grandTotal = new OutputClass([
            'foot-total3',
            'foot-total4',
            'curly-arrow',
     ]);

    this.footerText = new OutputClass([
            'footer'
     ]);

    this.init = function () {
        this.cart['price'] = document.getElementById('price');
        this.cart['income'] = document.getElementById('yeld');
        this.cart['type'] = document.getElementById('type');
        this.cart['term'] = document.getElementById('term');
        this.cart['capital'] = document.getElementById('capital');

        this.outCart['rent_income'] = document.getElementById('rent_income');
        this.outCart['agency_fees'] = document.getElementById('agency_fees');
        this.outCart['yearly_total'] = document.getElementById('yearly_total');
        this.outCart['after_term'] = document.getElementById('after_term');
        this.outCart['profit_OT'] = document.getElementById('profit_OT');
        this.outCart['profit_AT'] = document.getElementById('profit_AT');
        this.outCart['grand_PFT'] = document.getElementById('grand_PFT');
        this.outCart['return_invest'] = document.getElementById('return_invest');

        calculator.rentalYeld.hide();
        calculator.capitalApp.hide();
        calculator.grandTotal.hide();
        calculator.footerText.hide();

        this.fetchInput();
    };

    this.fetchInput = function () {
        this.inputValues['price'] = this.cart['price'].value;
        this.inputValues['income'] = this.cart['income']
                                    .options[this.cart['income']
                                    .selectedIndex]
                                    .value;

        this.inputValues['type'] = this.cart['type']
                                    .options[this.cart['type']
                                    .selectedIndex]
                                    .value;

        this.inputValues['term'] = this.cart['term']
                                    .options[this.cart['term']
                                    .selectedIndex]
                                    .value;

        this.inputValues['capital'] = this.cart['capital']
                                    .options[this.cart['capital']
                                    .selectedIndex]
                                    .value;
    };

    this.filterValues = function () {
        if (!this.inputValues['price'] == ''){
            this.filtered['price'] = parseInt(this.inputValues['price']);
        } else{
            this.filtered['price'] = null;
        }

        if (!this.cart['income'].selectedIndex == 0){
            var temp = this.inputValues['income'];
                temp = temp.substring(0, temp.length - 1);
            this.filtered['income'] = parseInt(temp);
        } else {
            this.filtered['income'] = null;
        }

        if (!this.cart['term'].selectedIndex == 0) {
            this.filtered['term'] = parseInt(this.inputValues['term']);
        } else {
            this.filtered['term'] = null;
        }

        if (!this.cart['capital'].selectedIndex == 0) {
            var temp = this.inputValues['capital'];
                temp = temp.substring(0, temp.length - 1);
            this.filtered['capital'] = parseInt(temp);
        } else {
            this.filtered['capital'] = null;
        }

    };
    this.calcProfitVAT = function (terms, price, percent) {
        var temp = 0,
            tempPrice = price;

        for (var i = 1; i <= terms; i++) {
            temp = tempPrice + (tempPrice * (percent / 100));
            tempPrice = temp;
        }
        return tempPrice;
    };

    this.display = function () {
        this.fetchInput();
        this.filterValues();

        // yeld
        if (
            this.filtered['price'] >= 600 &&
            this.filtered['term'] !== null &&
            this.filtered['income'] !== null
        ) {
            var rentalIncome = Math.round(
                    this.filtered['price'] *
                    this.filtered['term'] *
                    (this.filtered['income'] / 100)
                );

            calculator.rentalYeld.show();
            this.outCart['rent_income'].innerHTML = this.filtered['price'] -
                                                    rentalIncome;

            this.outCart['agency_fees'].innerHTML = Math.round(rentalIncome * 0.25);
            this.outCart['yearly_total'].innerHTML = rentalIncome *
                                                    this.filtered['price'];
            this.outCart['profit_OT'].innerHTML = this.filtered['term'] *
                                                this.filtered['price'];
        } else {
            calculator.rentalYeld.hide();
        }

        // appreciation
        if (
            this.filtered['price'] !== null &&
            this.filtered['capital'] !== null &&
            this.filtered['term'] !== null
        ) {
            var vat = Math.round(this.calcProfitVAT(
                            this.filtered['term'],
                            this.filtered['price'],
                            this.filtered['capital']
                ));
            calculator.capitalApp.show();
            this.outCart['after_term'].innerHTML = vat;
            this.outCart['profit_AT'].innerHTML = vat - this.filtered['price'];
        } else {
            calculator.capitalApp.hide();
        }

        // grand
        if (
            this.filtered['price'] >= 600 &&
            this.filtered['term'] !== null &&
            this.filtered['capital'] !== null &&
            this.filtered['income'] !== null
        ) {
            var rentalInc = Math.round(
                    this.filtered['price'] *
                    this.filtered['term'] *
                    (this.filtered['income'] / 100)
            );
            calculator.grandTotal.show();
            calculator.footerText.show();
            this.outCart['grand_PFT'].innerHTML = rentalInc * 1542;
            this.outCart['return_invest'].innerHTML = Math.round((rentalInc * 1542 )/
                                                    (100*this.filtered['price'])) + '%';
        } else {
            calculator.grandTotal.hide();
            calculator.footerText.hide();
        }
    };

    this.refresh = function () {
        this.display();
    };
};

var calculator = new CalculatorClass();

window.onload = function () {

    calculator.init();
    setInterval(function () {
        calculator.refresh();
    }, 100);

};

function shortTerm() {

    alert('Comming soon.');
}

