var images = [
        'assets/image1.jpg',
        'assets/image2.jpg',
        'assets/image3.jpg',
        'assets/image4.jpg',
        'assets/image5.jpg'
    ];

new Vue({
    el : '.app',
    data : {
        imageId : 'display'
    },
    methods : {
        display : function () {
            var rand = Math.round(Math.random() * 10) % 5;
            document.getElementById(this.imageId).setAttribute('src', images[rand]);
        }
    }
});