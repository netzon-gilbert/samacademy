new Vue({
    el : '.app',
    data : {},
    methods : {
        mouseOver : function (event) {
            event.target.style.backgroundColor = 'blue';
            event.target.style.color = 'white';
        },
        mouseOut : function (event) {
            event.target.style.backgroundColor = 'transparent';
            event.target.style.color = 'black';
        }
    }
});