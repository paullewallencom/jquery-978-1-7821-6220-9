$("document").ready(function($) {
  	function notify(input) {
	    var msg = $.trim(input.data("tooltip-title") || input.text()) + " has been selected";
	    $("<div>").appendTo(document.body)
	    			.text(msg)
	    			.addClass("notification ui-state-default ui-corner-bottom")
	    			.position({
			my: "center top",
			at: "center top",
			of: window
		}).show({
			effect: "blind"
		}).delay( 1000 ).hide({
			effect: "blind",
			duration: "slow"
		}, function() {
			$(this).remove();
		});
  	}

	$("button").each(function() {
		var button = $( this ).button({
			icons: {
				primary: $(this).data("icon")
			},
			text: !!$(this).attr("title")
		});
		button.click(function() {
			notify(button);
		});
	});

	$(".set").buttonset({
		items: "button"
	});

	$(document).tooltip({
		position: {
			my: "center top",
			at: "center bottom+5",
		},
		show: { duration: "fast" },
		hide: { effect: "hide" }
	});
});