var harga = document.querySelector('#hargaA')
var total = document.querySelector('#total') 

$(harga).click(function() {
    if ($('#total').attr('value') == undefined) $('#total').attr('value', 0);
    var price = parseFloat($('#hargaA').attr('value')) + parseFloat($('#total').attr('value'));
    $('#total').attr('value', price);
});

var harga = document.querySelector('#hargaB')
var total = document.querySelector('#total') 

$(harga).click(function() {
    if ($('#total').attr('value') == undefined) $('#total').attr('value', 0);
    var price = parseFloat($('#hargaB').attr('value')) + parseFloat($('#total').attr('value'));
    $('#total').attr('value', price);
});

var harga = document.querySelector('#hargaC')
var total = document.querySelector('#total') 

$(harga).click(function() {
    if ($('#total').attr('value') == undefined) $('#total').attr('value', 0);
    var price = parseFloat($('#hargaC').attr('value')) + parseFloat($('#total').attr('value'));
    $('#total').attr('value', price);
});

var harga = document.querySelector('#hargaD')
var total = document.querySelector('#total') 

$(harga).click(function() {
    if ($('#total').attr('value') == undefined) $('#total').attr('value', 0);
    var price = parseFloat($('#hargaD').attr('value')) + parseFloat($('#total').attr('value'));
    $('#total').attr('value', price);
});