$(document).ready(function($){
  var base = $("#selectmenu").hide(),
    container = $("<div />", {
        "class": "ui-menu-container ui-widget ui-widget-content ui-corner-all"
    }),
    label = $("<span />", {
        id: "label",
        text: "Choose..."
    }).appendTo(container),
    list = $("<ul />", {
        id: "menu"
    }),
    item = $("<li />");

  $.each(base.children(), function () {
    var tempItem = item.clone();
    $("<a />", {
        href: "#",
        text: $(this).text()
    }).appendTo(tempItem);
    tempItem.appendTo(list);
  });

  list.appendTo(container);

  $("<a />", {
    "class": "ui-menu-trigger ui-widget-content ui-corner-all",
    href: "#",
    html: "&#x25BC;",
    click: function () {
        $("#menu").slideDown();
    }
  }).appendTo(container);

  container.insertAfter(base);

  $("#menu").hide().menu({
    select: function (e, ui) {
        base.attr("selectedIndex", ui.item.index());
        $("#label").text(ui.item.text());
        $("#menu").slideUp();
    }
  });
});