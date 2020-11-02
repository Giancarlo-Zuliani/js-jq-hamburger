
var ham = $('.fa-bars');
var ics = $('.fa-times');
var menu = $('.hamburger-menu');

ham.click(function(){
menu.show();
});

ics.click(function(){
  menu.hide();
});
