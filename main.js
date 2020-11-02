
var ham = $('.fa-bars');
var ics = $('.fa-times');
var menu = $('.hamburger-menu');

ham.click(function(){
  menu.fadeIn('slow');
});

ics.click(function(){
  menu.fadeOut('fast');
});
