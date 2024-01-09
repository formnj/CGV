$(function(){
  console.log('.talkback_go')
  console.log('.talkback')
  $('.talkback_go').on('click', function(){
    $('.talkback').css({"left":"0", "display":"block","opacity":"1", "visibility": "visible"})
  })
})//ready