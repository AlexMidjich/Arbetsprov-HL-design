$( document ).ready(function() {

  $('#search-form').submit(function(e){
    e.preventDefault();
    const product = $('#search').val();
    $.getJSON('https://webshop.wm3.se/api/v1/shop/products/search.json?q=' + product + '&media_file=true',
    function(data) {
      let i;
      for (i = 0; i < data.products.length; i++) {
        $('#img_' + [i]).attr('src', data.products[i].media_file.url_small);
        $('#text_' + [i]).html(data.products[i].name);
      }
    });
  });

    $.getJSON('https://webshop.wm3.se/api/v1/shop/products.json?media_file=true',
    function(data) {
      let i;
      for (i = 0; i < 6; i++) {
        $(".products-wrapper").append('<div class="product-box"><div class="product-img"><img src='+ data.products[i].media_file.url_small + ' id=img_' + [i] + ' /></div><p id=text_' + [i] + '>' + data.products[i].name + '</p></div>');
      }
    });
});
