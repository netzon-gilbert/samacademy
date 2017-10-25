var vue = new Vue({
    el : '.app',
    data : {
        rent_income : 0,
        agency_fees : 0,
        yearly_total : 0,
        after_term : 0,
        profit_OT : 0,
        profit_AT : 0,
        grand_PFT : 0,
        return_invest : 0,

        type : 'Studio',
        price : 0,
        yeld : 0,
        term : 0,
        capital : 0,
    },
    methods : {
        init : function () {
            console.log('initialized');
        },
        shortTermLink : function () {
            alert('Comming soon.');
        },
        calculate : function () {
            var self = this;
                self.price = parseInt(self.price);
                self.yeld = parseInt(self.yeld);
                self.term = parseInt(self.term);
                self.capital = parseInt(self.capital);

            function rent_income() {
                self.rent_income = 0;
            }
            function agency_fees() {
                self.agency_fees = 0;
            }
            function yearly_total() {
                self.yearly_total = 0;
            }
            function after_term() {
                self.after_term = 0;
            }
            function profit_OT() {
                self.profit_OT = 0;
            }
            function profit_AT() {
                self.profit_AT = 0;
            }
            function grand_PFT() {
                self.grand_PFT = 0;
            }
            function return_invest() {
                self.return_invest = 0;
            }
            // rent
            if (
                self.price >= 600 &&
                self.term !== 0 &&
                self.yeld !== 0
            ) {
                console.log('yeld view');
            }

            // appreciation
            if (
                self.price !== 0 &&
                self.capital !== 0 &&
                self.term !== 0
            ) {
                console.log('appreciation view');
            }

            // grand
            if (
                self.price >= 600 &&
                self.term !== 0 &&
                self.yeld !== 0 &&
                self.capital !== 0
            ) {
                console.log('grand total view');
            }
            console.log('calculate function executed');
        }
    }
});

vue.init();

