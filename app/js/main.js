function openTab(pageLink) {
  var win = window.open(pageLink, '_blank');
  if (win) {
      win.focus();
  } else {
      alert('Please allow popups for this website');
  }
}

$(".twitter-button").click(function(e) {
    openTab("https://twitter.com/projetneo");
});

$(".facebook-button").click(function(e) {
    openTab("https://www.facebook.com/projetneo/?ref=aymt_homepage_panel");
});

(function($){

	var windowH = $(window).height(),
		windowW = $(window).width(),
		lastWindowH = -1,
		lastWindowW = -1,
		hashElements = [],
		focusing = false,
		entryHeight;

	$(document).ready(function(){
		fit();
		background();
		$(window).resize(fit);
		$(window).scroll(scrolling);
		fit();
		hash();
		buttons();
	})

	function scrolling(){
		parallax();
		if("scroll" == hashElements[0]) {
			var focusedElement = $("#"+hashElements[1]);
			if(!focusedElement.length)
				return;
			var focusedOffset = Math.abs(focusedElement.offset().top - $(document).scrollTop());
			if(focusedOffset < 100)
				focusedElement.addClass("is-focused");
			if(focusedOffset > 100 && focusedElement.hasClass("is-focused")) {
				window.location.hash = "/";
				focusedElement.removeClass("is-focused");
			}
		}
	}

	function buttons(){
		$(document).on("click", ".button.discover-button, .landing-text", function(){
			window.location.hash = "/scroll/entries/";
		})
	}

	function hash(){
		$(window).bind("hashchange", function(e){
			e.preventDefault();
			reactToAddress();
		})
		reactToAddress();
	}

	function reactToAddress(){
		var hash = window.location.hash;
		if(hash.indexOf("#") == -1) hash = "#";
		//hash = hash.split("?")[0];
		hash = hash.split("#")[1];
		if(hash.indexOf("/") == 0) hash = hash.substr(1);
		hashElements = hash.split("/");
		switch(hashElements[0]) {
			case "entry":
			break;
			case "scroll":
			focusElement($("#"+hashElements[1]));
			break;
			default:
			break;
		}
	}

	function focusElement(element) {
		if(focusing)
			return;
		focusing = true;
		var targetPos = element.position().top + 2;

		if(element.hasClass("entry") && element.index() > 0) {
			targetPos -= entryHeight / 2;
		}
		$("html,body").stop(true).animate({
			"scrollTop": targetPos
		}, 300, function(){
			focusing = false;
		})
	}

	function background(){
	    $(".background").wrap("<div class='background-wrap'></div>").each(function(){
		    $(this).royalSlider({
			    startSlideId: 0,
			    autoScaleSlider: false,
		    	imageScaleMode: "fill",
		    	fitInViewport: true,
				autoPlay: {
		    		// autoplay options go gere
		    		enabled: true,
		    		delay: 4000,
		    		pauseOnHover: false
		    	},
		    	loop: true,
		    	transitionType: "fade",
				transitionSpeed: 400,
				controlsInside: true,
				arrowsNavAutoHide: false,
				addActiveClass: true
		    })
	    })
	}

	function fit(){
		windowW = $(window).width();
		windowH = $(window).height();
		entryHeight = $(".entry header:first").height();
		$("#landing, #footer").height(windowH);
		if($("#landing").height() < 420) {
			$("#landing").height(420)
		}
		if($("#footer").height() < $(".footer-text").height()) {
			$("#footer").height($(".footer-text").height() + 50);
		}
		scrolling();
		var windowHeightChanged = windowH != lastWindowH;
		var windowWidthChanged = windowW != lastWindowW;
		lastWindowH = windowH;
		lastWindowW = windowW;
		var current = $(".entry.current");
	}


		function parallax(){
			if(Modernizr.touch)
				return;

			var scrollTop = $(document).scrollTop();

			$(".background-wrap").each(function(){
				$(this).find(".background").css({
					"top": (scrollTop - $(this).offset().top) / 1.2
				})
			})
		}

})(jQuery);
