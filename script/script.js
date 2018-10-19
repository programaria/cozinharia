// submenu do header usando jquery
$('#showMenu').click(function (event) {
  $('.submenu').fadeIn();
});

// hover no cardapio gallery da home
$('.cardapio-gallery figure').mouseover(function (event) {
  $(this).addClass('active');
});

$('.cardapio-gallery figure').mouseleave(function (event) {
  $(this).removeClass('active');
});

// navegação entre os cardapios almoço, jantar, bebidas
$("#cardapio a").on("click", function() {
  var $place = $(this).attr("href");
  $("#cardapio a").removeClass('active');
  $(this).addClass('active');
  $("body").animate({
    scrollTop: $($place).offset().top - 346}, 600);
    return false;
});
