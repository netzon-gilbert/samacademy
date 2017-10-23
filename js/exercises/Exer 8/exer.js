window.addEventListener('resize', function () {
    w = window.innerWidth;
    h = window.innerHeight;
    document.getElementById('output').innerHTML = w + 'px, ' + h +'px';
});