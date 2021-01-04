(function($) {
  $.fn.splitButton = function(options) {
    var menu = null;
    var settings = {
      select: function(event, ui) {
        document.location = ui.item.children()[0];
      },
      showMenu: function() {
      if (menu) menu.hide();
        menu = $(this).parent().next().show().position({
          my: "left top",  at: "left bottom", of: $(this).prev()
        });
        $(document).one("click", function() {
          menu.hide();
        });
          return false;
        }
      };
    if (options) {
      $.extend(settings, options);
    }
    var buttonConfig = { text: false, icons: { primary: "ui-icon-triangle-1-s" } };
    return this.button().next().button(buttonConfig).click(settings.showMenu).parent().buttonset().next().menu({select: settings.selected});
  };
})(jQuery);