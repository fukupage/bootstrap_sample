'use strict';
$(function () {
  //メニューの開閉
  $('#menu_show img').click(function () {
    $('#nav ul').addClass('active');
    $('#menu_show').addClass('hidden');
    $('#menu_close').removeClass('hidden');
    $('#mask').addClass('masked');
  });
  $('#menu_close img').click(function () {
    $('#nav ul').removeClass('active');
    $('#menu_show').removeClass('hidden');
    $('#menu_close').addClass('hidden');
    $('#mask').removeClass('masked');
  });
  //表示の切り替え
  $('#home').click(function () {
    $('#first').removeClass('hidden');
    $('#second').addClass('hidden');
    $('#third').addClass('hidden');
    $('#fourth').addClass('hidden');
    $('#fifth').addClass('hidden');
  });
  $('#about').click(function () {
    $('#first').addClass('hidden');
    $('#second').removeClass('hidden');
    $('#third').addClass('hidden');
    $('#fourth').addClass('hidden');
    $('#fifth').addClass('hidden');
  });
  $('#sample').click(function () {
    $('#first').addClass('hidden');
    $('#second').addClass('hidden');
    $('#third').removeClass('hidden');
    $('#fourth').addClass('hidden');
    $('#fifth').addClass('hidden');
  });
  $('#think').click(function () {
    $('#first').addClass('hidden');
    $('#second').addClass('hidden');
    $('#third').addClass('hidden');
    $('#fourth').removeClass('hidden');
    $('#fifth').addClass('hidden');
  });
  $('#form').click(function () {
    $('#first').addClass('hidden');
    $('#second').addClass('hidden');
    $('#third').addClass('hidden');
    $('#fourth').addClass('hidden');
    $('#fifth').removeClass('hidden');
  });
  //LightBox風のイメージ表示（modalimg）
  $('.modalimg').click(function () {
    $('#mask').addClass('masked');
    let src = $(this).attr('data-src');
    $('#mask').append('<div class="lightbox"></div>');
    $('.lightbox').append('<img src="" alt="images">');
    $('.lightbox').children('img').attr('src', src);
    $('.lightbox').fadeIn('slow');
    $('.masked').click(function(){
      if($('.lightbox').length){
        $('.lightbox').fadeOut('slow', function(){$(this).remove();});
        $('#mask').removeClass('masked');
      }
    });
  });
});
