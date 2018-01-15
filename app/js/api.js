$( document ).ready(function() {

  $('#search-form').submit(function(e){
    e.preventDefault();
    var product = $('#search').val();
    $.getJSON('https://webshop.wm3.se/api/v1/shop/products/search.json?q=' + product + '&media_file=true',
    function(data) {
      var i;
      $('.product-box').remove();
      for (i = 0; i < data.products.length; i++) {
        $('.products-wrapper').append('<div class="product-box"><div class="product-img"><img src='+ data.products[i].media_file.url_small + ' id=img_' + [i] + ' /></div><p id=text_' + [i] + '>' + data.products[i].name + '</p></div>');
      }
    });
  });

    $.getJSON('https://webshop.wm3.se/api/v1/shop/products.json?media_file=true',
    function(data) {
      var i;
      for (i = 0; i < 6; i++) {
        $(".products-wrapper").append('<div class="product-box"><div class="product-img"><img src='+ data.products[i].media_file.url_small + ' id=img_' + [i] + ' /></div><p id=text_' + [i] + '>' + data.products[i].name + '</p></div>');
      }
    });
});
