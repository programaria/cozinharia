// submenu do header usando js puro
var menuItem = document.getElementsByClassName("has-submenu")[0];
var subMenu = menuItem.getElementsByClassName("submenu")[0];

// submenu do header usando jquery
$('.has-submenu').click(function (event) {
  $(this).toggleClass('active');
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

  var top = ($place).offsetTop;
  window.scrollTo(0, top);  



});


// // definindo os estilos pelo JS
// menuItem.onclick = function() {
//   subMenu.style.display = "block";
// };

// // colocando uma classe para pegar os estilos do CSS
// menuItem.onclick = function() {
//   // menuItem.className += " active";
//   // ou
//   menuItem.classList.add("active");
// };

// // fazendo toggle de uma classe para pegar ou não os estilos do CSS
// menuItem.onclick = function() {
//   menuItem.classList.toggle("active");
// };

// // menuItem.addEventListener("click", function() {
//   menuItem.className += " active";
// });
