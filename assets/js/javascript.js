  
const $bside=$('.backsidebar');
const $mside=$('.mega-sidebar');
const $side=$('.mobile-sidebar');

//  mobilesidebar 

  
$('.profile-icon').on('click', function(e){
  $side.toggleClass('showmobileslider');
     $bside.toggleClass('showmobileslider');
     e.preventDefault();
     $('html, body').css('overflow','hidden'); 
});
$bside.mouseup(function(e){
  $side.removeClass('showmobileslider');
  $bside.removeClass('showmobileslider');
  e.preventDefault();
  $('html, body').css('overflow','auto'); 
 });

$('.profile-close-icon').on('click', function(e){
  $side.removeClass('showmobileslider');
  $bside.removeClass('showmobileslider');
  e.preventDefault();
  $('html, body').css('overflow','auto'); 
});

//  megasidebar 

$('.menuicon').on('click', function(e){
  $mside.toggleClass('showmegaslider');
  $bside.toggleClass('showmegaslider');
  e.preventDefault();
  $('html, body').css('overflow','hidden'); 

});


$('.profile-close-icon').on('click',  function(e){
  $mside.removeClass('showmegaslider');
  $bside.removeClass('showmegaslider');
  e.preventDefault();
  $('html, body').css('overflow','auto'); 
});


$bside.mouseup( function(e){
  $mside.removeClass('showmegaslider');
  $bside.removeClass('showmegaslider');
  e.preventDefault();
  $('html, body').css('overflow','auto'); 
 });

  $('.dropdownbtn').click( function() {
    if(!$(this).parent().parents().hasClass('active')){
      $('.item').removeClass('active');    
      $('.dropdownbtn').removeClass('rotated');
  }
  $(this).parent().parent().toggleClass('active');
  $(this).toggleClass('rotated');
    
  });
 



//  add addres btn 

  $("#addaddress-btn").click(function(){
    $(".addAdress-container").slideDown();
    $('#addaddress-btn').css("display" , "none");
  console.log(1);
  });
  
  $('#check').change(function(){
    var c = this.checked ? 300 : 200;
    $('#someone-else-info-container').slideToggle(c);
  });
  $('#check').change(function(){
    var c = this.checked ? 300 : 200;
    $('#install-container').slideToggle(c);
  });
    $('#myTab a').on('click', function (e) {
      e.preventDefault()
      $(this).tab('show')
    });

// Add active class to the current menuitem (highlight it)
// var menu = document.getElementById("menu");
// var menuitems = menu.getElementsByClassName("menuitem");
// for (var i = 0; i < menuitems.length; i++) {
//   menuitems[i].addEventListener("click", function() {
//   var currentitem = document.getElementsByClassName("active");
//   currentitem[0].className = currentitem[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }
// Add activemobilemenuitem class to the current mobilemenuitem (highlight it)
// var mobilemenu = document.getElementById("mobilemenu");
// var mobillemenuitems = mobilemenu.getElementsByClassName("mobilemenu-item");
// for (var i = 0; i < mobillemenuitems.length; i++) {
//     mobillemenuitems[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("activemobilemenuitem");
//   current[0].className = current[0].className.replace(" activemobilemenuitem", "");
//   this.className += " activemobilemenuitem";
//   });
// }
// Add active-item class to the current selection item day (highlight orange it)
let slider = document.getElementById("slider");

let istems = slider.getElementsByClassName("on");

for (let p = 0; p < istems.length; p++) {
  istems[p].addEventListener("click", function() {
  let current_item = document.getElementsByClassName("active-item");
  current_item[0].className = current_item[0].className.replace(" active-item", "");
  this.className += " active-item";
  });
}

// clickable-row-in-table

$(".clickable-row").click(function() {
  window.location = $(this).data("href");
});



// Add installday-active class to the current selection install day (highlight orange it)
var installdayContainer = document.getElementById("install-container");
var installdayitems = installdayContainer.getElementsByClassName("installday");
for (var n = 0; n < installdayitems.length; n++) {
  installdayitems[n].addEventListener("click", function() {
  var currentinstalldayitem = document.getElementsByClassName("installday-active");
  currentinstalldayitem[0].className = currentinstalldayitem[0].className.replace(" installday-active", "");
  this.className += " installday-active";
  });
}

// Add postageday-active class to the current selection postage day (highlight orange it)
var postagedayContainer = document.getElementById("postageday-container");
var postagedayitems = postagedayContainer.getElementsByClassName("postageday");
for (var m = 0; m < postagedayitems.length; m++) {
  postagedayitems[m].addEventListener("click", function() {
  var currentdayitem = document.getElementsByClassName("postageday-active");
  currentdayitem[0].className = currentdayitem[0].className.replace(" postageday-active", "");
  this.className += " postageday-active";
  });
}

