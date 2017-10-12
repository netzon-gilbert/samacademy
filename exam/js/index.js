var CalculatorClass = function () {

    this.cart = [];
    this.inputValues = [];

    this.init = function () {
        this.cart['price'] = document.getElementById('price');
        this.cart['income'] = document.getElementById('yeld');
        this.cart['type'] = document.getElementById('type');
        this.cart['term'] = document.getElementById('term');
        this.fetchInput();
    };

    this.fetchInput = function () {
        this.inputValues['price'] = this.cart['price'].value;
        this.inputValues['income'] = this.cart['income'].options[this.cart['income'].selectedIndex].value;
        this.inputValues['type'] = this.cart['type'].options[this.cart['type'].selectedIndex].value;
        this.inputValues['term'] = this.cart['term'].options[this.cart['term'].selectedIndex].value;
    };

    this.display = function () {
        this.fetchInput();
        alert(
            this.inputValues['price'] + "" +
            this.inputValues['income'] + "" +
            this.inputValues['type'] + "" +
            this.inputValues['term']
            );
    };

    this.render = function () {

    };
};

var calculator = new CalculatorClass();

window.onload = function () {
    calculator.init();
    alert('good');
};

function shortTerm() {
    alert('Comming soon.');
    calculator.display();
}

