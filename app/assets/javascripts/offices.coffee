# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/


jQuery(document).ready ($) ->
  $(".table-microposts-link").click ->    
      console.log 'wow'
      container = $(this).parent().parent().parent().parent()   
      index = $(container).index('.table-body.table-comments:not(.table-microposts)')   
      $('.micropost-' + index).show().animate {opacity: 1},1000   
      $('.comment-container-' + index).show().animate {opacity: 1},1000   
