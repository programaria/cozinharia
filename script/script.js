// // submenu do header usando jquery
// $('#showMenu').click(function (event) {
//   $('.submenu').fadeIn();
// });

//submenu do header usando vanilla

var showMenu = document.querySelector('#showMenu')
var submenu = document.querySelector('.submenu')

showMenu.addEventListener('mouseover', function(event) {
	submenu.classList.add("active")
})

showMenu.addEventListener('mouseleave', function(event) {
	submenu.classList.remove("active")
})

// navegação entre os cardapios almoço, jantar, bebidas
// $("#cardapio a").on("click", function() {
//   var $place = $(this).attr("href");
//   $("#cardapio a").removeClass('active');
//   $(this).addClass('active');
//   $("body").animate({
//     scrollTop: $($place).offset().top - 346}, 600);
//     return false;
// });
