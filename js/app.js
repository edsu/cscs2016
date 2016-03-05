$(function() {
  var template = Handlebars.compile($("#resource-template").html());
  var update = Handlebars.compile($("#update-template").html());

  $(stats).each(function(i, r) {
    $("#resources").append(template(r));
  });

});

