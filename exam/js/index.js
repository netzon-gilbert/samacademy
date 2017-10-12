var CalculatorClass = function () {

    this.cart = [];
    this.outCart = [];

    this.inputValues = [];
    this.calculated = [];

    this.init = function () {
        this.cart['price'] = document.getElementById('price');
        this.cart['income'] = document.getElementById('yeld');
        this.cart['type'] = document.getElementById('type');
        this.cart['term'] = document.getElementById('term');

        this.outCart['rent_income'] = document.getElementById('rent_income');
        this.outCart['agency_fees'] = document.getElementById('agency_fees');
        this.outCart['yearly_total'] = document.getElementById('yearly_total');
        this.outCart['after_term'] = document.getElementById('after_term');
        this.outCart['profit_OT'] = document.getElementById('profit_OT');
        this.outCart['profit_AT'] = document.getElementById('profit_AT');
        this.outCart['grand_PFT'] = document.getElementById('grand_PFT');
        this.outCart['return_invest'] = document.getElementById('return_invest');

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
    };

    this.filterValues = function () {

    };

    this.display = function () {
        this.fetchInput();
       /* alert(
            this.inputValues['price'] + '' +
            this.inputValues['income'] + '' +
            this.inputValues['type'] + '' +
            this.inputValues['term']
        );*/

        this.outCart['rent_income'].innerHTML = this.inputValues['price'];
        this.outCart['agency_fees'].innerHTML = this.inputValues['price'];
        this.outCart['yearly_total'].innerHTML = this.inputValues['price'];
        this.outCart['after_term'].innerHTML = this.inputValues['price'];
        this.outCart['profit_OT'].innerHTML = this.inputValues['price'];
        this.outCart['profit_AT'].innerHTML = this.inputValues['price'];
        this.outCart['grand_PFT'].innerHTML = this.inputValues['price'];
        this.outCart['return_invest'].innerHTML = this.inputValues['price'];
    };

    this.render = function () {
        this.display();
    };
};

var calculator = new CalculatorClass();

window.onload = function () {
    calculator.init();
    setInterval(function () {
        calculator.render();
    }, 100);
    //alert('good');
};

function shortTerm() {
    alert('Comming soon.');
}

