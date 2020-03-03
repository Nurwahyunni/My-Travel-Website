var harga = document.querySelector('#hargaD')
var total = document.querySelector('#total') 

$(harga).click(function() {
    if ($('#total').attr('value') == undefined) $('#total').attr('value', 0);
    var price = parseFloat($('#hargaD').attr('value')) + parseFloat($('#total').attr('value'));
    $('#total').attr('value', price);
});