new Vue({
    el : '.app',
    data : {
        tableId : 'table'
    },
    methods : {
        addRaw : function () {
            var table = document.getElementById(this.tableId);
            var raw = document.createElement('tr');
            var data1 = document.createElement('td');
            var data2 = document.createElement('td');

                raw.appendChild(data1);
                raw.appendChild(data2);

                data1.appendChild(document.createTextNode('raw 1'));
                data2.appendChild(document.createTextNode('raw 2'));

                table.appendChild(raw);

        }
    }
});