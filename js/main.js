
// Navbar Smooth
var aboutOffset=$('.about').offset().top;
 $(window).scroll(function()
 {
    let wScroll=$(window).scrollTop()
    if(wScroll > aboutOffset -60)
    {
      $('.header .navbar').css('backgroundColor','#333')
      $('.icon-up').fadeIn()
    }
    else
    {
      $('.header .navbar').css('backgroundColor','transparent')
      $('.icon-up').fadeOut()
    }
 })
//  counter
 var counterOffset= $(".counter").offset().top;
 $(window).scroll(function()
 {
    let wScroll=$(window).scrollTop()
    if(wScroll > counterOffset -100)
    {
    $('.timer').countTo();
     $(window).off('scroll') 
    }
 })
//  smooth scroll
$('.nav-link').click(function()
{
   $(this).addClass('active-btn')
   $(this).parent().siblings().find('a').removeClass('active-btn')
    let currentHref=$(this).attr("href")
    let currentOffset=$(currentHref).offset().top
    $("html,body").animate({scrollTop:currentOffset - 55},1000)
//    currentHref=$(window).attr('href');
//   var currentOffset=$(currentHref).offset().top;
//   $('body,html').animate({scrollTop:currentOffset},2000)
 
})
// active button portfolio
 $(".portfolio-buttons button").click(function()
 {
   $(this).addClass("active-btn").siblings().removeClass("active-btn")
 })
// filter portfolio images
 var mixer = mixitup('.portfolio-images');

//  circle charts
$(function()
{
   $('.circlechart').circlechart()
}
)
// owl carosuel
$(document).ready(function(){
   $(".owl-carousel").owlCarousel(
      {
         margin:20,
         items:4,
         loop:true,
         responsive:
         {
            0:
            {
             items:  1
            },
            600:
            {
             items:  2
            },
            800:
            {
               items:3
            },
            1000:
            {
             items:  4
            }
         }
      }
   );
 });
//  choose effect
 $(".choose-content li").click(function()
 {
   $(this).addClass("active-btn").siblings().removeClass("active-btn")
  var currentDataRole= $(this).data('role')
  $('.choose-info > div').hide()
  $(".choose-info").contents().filter('#' +currentDataRole).fadeIn();
 })

//  pop up video
$('.pop').magnificPopup({
   type: 'iframe'
 });

//  arrow to up
$('.icon-up').click(function()
{
   $('body,html').animate({scrollTop:0},3000)
})


