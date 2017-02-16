function openTab(pageLink) {
  var win = window.open(pageLink, '_blank');
  if (win) {
      win.focus();
  } else {
      alert('Please allow popups for this website');
  }
}

$(".twitter-button").click(function(e) {
  if($(e.target).closest('#share-container').length > 0)
    openTab("https://twitter.com/projetneo");
  else
    openTab("https://twitter.com/projetneo");
});

$(".facebook-button").click(function(e) {
  if($(e.target).closest('#share-container').length > 0)
    openTab("https://www.facebook.com/projetneo/?ref=aymt_homepage_panel");
  else
    openTab("https://www.facebook.com/projetneo/?ref=aymt_homepage_panel");
});

$("body").click(function(){
  $("#hidden-container").removeClass("hidden-container-active");
  $("#share-button").show();
  $("#expand").show();
});

$("#share-button").click(function(e) {
  if (!$("#hidden-container").hasClass("hidden-container-active")) {
    $("#hidden-container").addClass("hidden-container-active");
    $("#share-button").hide();
    $("#expand").hide();
  }
});

$(".prevent").click(function(){
  event.stopPropagation();
})
