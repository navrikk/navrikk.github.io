$('#skillbar #skill-item').hover(function() {
	$(this).toggleClass('animated pulse');
});

$('#projectbar #project-item').hover(function() {
	$(this).toggleClass('animated pulse');
});

$('#contactbar li').hover(function() {
	$(this).toggleClass('animated pulse');
});

$('.footer').hover(function() {
	$(this).toggleClass('black');
});

// jQUERY FOR SLIDING NAVIGATION
$(document).ready(function() {
	$('a[href*=#]').each(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname
		&& this.hash.replace(/#/,'') ) {
			var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
			var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
			if ($target) {
				var targetOffset = $target.offset().top;

				// jQUERY FOR HEADER ANIMATION AND REMOVING ACTIVE FROM TABS
				$(this).click(function() {
					$("#nav li a").removeClass("active");
					$(this).addClass('active');
					$('html, body').animate({scrollTop: targetOffset}, 1000);
					return false;
				});
			}
		}
	});
});