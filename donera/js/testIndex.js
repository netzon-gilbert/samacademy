function toolE() {
    var rangeBox = document.createElement('div'),
            rangeValue = document.createElement('span'),
            rangeLabel = document.createElement('label'),
            nputRange = document.createElement('input'),
            closeBtn =document.createElement('input');

            rangeBox.setAttribute('class', 'ctr-range');
            rangeBox.setAttribute('id', 'range');
            rangeBox.addEventListener('mousedown', function () {
                activeRange(this.id);
            });

            nputRange.setAttribute('type', 'range');
            nputRange.setAttribute('id', 'input');
            nputRange.setAttribute('value', 'good');
            nputRange.setAttribute('class', 'range-box');
            nputRange.setAttribute('style', 'border-color: black');
            nputRange.addEventListener('mousedown', function () {
                start();
            });
            nputRange.addEventListener('mouseup', function () {
                stop();
            });

            closeBtn.setAttribute('type', 'button');
            closeBtn.setAttribute('id', 'x');
            closeBtn.setAttribute('class', 'close-btn');
            closeBtn.setAttribute('value', 'x');
            closeBtn.addEventListener('click', function () {
                removeRange(this.id);
            });

            rangeBox.appendChild(rangeValue);
            rangeBox.appendChild(rangeLabel);
            rangeBox.appendChild(nputRange);
            rangeBox.appendChild(closeBtn);

            document.getElementById('app-controls').appendChild(rangeBox);

            rangeValue.innerHTML('value');
            rangeLabel.innerHTML('label');
};

window.onload = function () {
    toolE();
};