$.fn.stickyFooter = function () {
	var footer = $(this),
		isResized = false,
		makeFooterSticky = function () {
			$('body').css('margin-bottom', footer.outerHeight() + 20);
		};

		makeFooterSticky();
		$(window).on('resize', function () {
			isResized = true;
		});
		setInterval(function () {
			if (isResized) {
				isResized = false;
				makeFooterSticky();
			}
		}, 200);
};
