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
            'foot-box3'
    ]);

    this.capitalApp = new OutputClass([
            'arrow2',
            'foot-box4'
    ]);

    this.grandTotal = new OutputClass([
            'foot-total1',
            'foot-total2',
            'foot-total3',
            'foot-total4',
            'curly-arrow',
            'arrow4',
            'arrow5'
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

        this.fetchInput();
        this.capitalApp.hide();
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
        if(!this.inputValues['price'] == ''){
            this.filtered['price'] = parseInt(this.inputValues['price']);
        }else{
            this.filtered['price'] = null;
        }

        if(!this.cart['income'].selectedIndex == 0){
            var temp = this.inputValues['income'];
                temp = temp.substring(0, temp.length - 1);
            this.filtered['income'] = parseInt(temp);
        }else{
            this.filtered['income'] = null;
        }

        if(!this.cart['term'].selectedIndex == 0){
            this.filtered['term'] = parseInt(this.inputValues['term']);
        }else{
            this.filtered['term'] = null;
        }

        if(!this.cart['capital'].selectedIndex == 0){
            var temp = this.inputValues['capital'];
                temp = temp.substring(0, temp.length - 1);
            this.filtered['capital'] = parseInt(temp);
        }else{
            this.filtered['capital'] = null;
        }

    };

    this.display = function () {
        this.fetchInput();
        this.filterValues();

        this.outCart['rent_income'].innerHTML = this.inputValues['price'];
        this.outCart['agency_fees'].innerHTML = this.inputValues['price'];
        this.outCart['yearly_total'].innerHTML = this.inputValues['price'];
        this.outCart['after_term'].innerHTML = this.inputValues['price'];
        this.outCart['profit_OT'].innerHTML = this.inputValues['price'];
        this.outCart['profit_AT'].innerHTML = this.inputValues['price'];
        this.outCart['grand_PFT'].innerHTML = this.inputValues['price'];
        this.outCart['return_invest'].innerHTML = this.inputValues['price'];
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

    calculator.rentalYeld.hide();
    calculator.capitalApp.show();
    calculator.grandTotal.hide();
    calculator.footerText.hide();
    alert('Comming soon.');
}

