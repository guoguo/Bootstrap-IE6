$(function() {
	if ( $.browser.msie && parseInt($.browser.version, 10) === 6) {
		$('.row div[class^="span"]:last-child').addClass('last-child');
		$('.row div[class^="controls"] input:first-child').css('margin-left':'-3px'});
        $(':button[class="btn"], :reset[class="btn"], :submit[class="btn"], input[type="button"]').css({'height':'auto', 'width':'auto', 'margin-bottom' : '0px'});
	}
});