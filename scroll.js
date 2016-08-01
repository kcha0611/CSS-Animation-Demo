function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}


$("#card-spins").click(function() {
  debugger
   scrollToAnchor('card-spins');
});
$("#card-flips").click(function() {
   scrollToAnchor('card-flips');
});
$("#link").click(function() {
   scrollToAnchor('id3');
});
$("#link").click(function() {
   scrollToAnchor('id3');
});
$("#link").click(function() {
   scrollToAnchor('id3');
});
$("#link").click(function() {
   scrollToAnchor('id3');
});
