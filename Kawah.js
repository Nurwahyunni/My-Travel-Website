var harga = document.querySelector('#hargaB')
var total = document.querySelector('#total') 

$(harga).click(function() {
    if ($('#total').attr('value') == undefined) $('#total').attr('value', 0);
    var price = parseFloat($('#hargaB').attr('value')) + parseFloat($('#total').attr('value'));
    $('#total').attr('value', price);
});