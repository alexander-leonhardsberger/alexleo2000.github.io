var signaturePad = new SignaturePad(document.getElementById('unterschriftKunde'), {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    penColor: 'rgb(0, 0, 0)'
});

var gerätCount = 0;
var rowCountGer = 2;
var rowCountMAB = 2;

document.getElementById('clear').addEventListener('click', function (event) {
    signaturePad.clear();
});

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("geraet").innerHTML = "Gerät: " + (++gerätCount);

    var n = new Date();
    document.getElementById("date").innerHTML = "Datum: " + n.getDate() + "-" + n.getMonth() + "-" + n.getFullYear();
});

function addGer() {
    var table = document.getElementById("tableGer");
    var row = table.insertRow(rowCountGer++);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell2.innerHTML = '<textarea rows="5" cols="90" type="text" name="gerät"></textarea>';
    cell1.innerHTML = "Gerät: " + (++gerätCount);
}

function delGer() {
    var table = document.getElementById("tableGer");
    gerätCount--;
    table.deleteRow((--rowCountGer));
}

function addmab() {
    var table = document.getElementById("tablemab");
    var row = table.insertRow(rowCountMAB++);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = '<input class="container" type="number">';
    cell2.innerHTML = '<input class="container" type="number">';
    cell3.innerHTML = '<input class="container" type="number">';
}

function delmab() {
    var table = document.getElementById("tablemab");
    table.deleteRow((--rowCountMAB));
}

function prepareForPDF() {
    var table = document.getElementById("tableGer");
    table.deleteRow(rowCountGer);

    var table2 = document.getElementById("tablemab");
    table2.deleteRow(rowCountMAB);

    var button = document.getElementById("prepare");
    button.hidden = true;

    button = document.getElementById("clear");
    button.hidden = true;
}