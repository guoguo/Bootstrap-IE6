##This is a early beta version for fixes for Twitter BootStrap v2.

Based on the initial work of Jonathon Joyce (http://www.jonathonjoyce.co.uk/2012/02/02/twitter-bootstrap2-ie-compatibility-fixes/)

Make sure when using this to use conditional IE statements in your HTML, eg:

&lt;!--[if IE 6]&gt;    
	&lt;link href="ie6.min.css" rel="stylesheet"&gt;
	&lt;script src="ie6.min.js"&gt;&lt;/script&gt;
&lt;![endif]--&gt;


Or you could use jquery to determine what browser/version for the javascript hacks:
'
$(function() {
	if ($.browser.msie && parseInt($.browser.version, 10) === 6) {
		// ie6 hacks here
	}
});
'

###Notes: Currently the glyphicons-halflings.png sprite is hardcoded in the css, change this file location as required

Copyright Twitter 2011
http://twitter.github.com/bootstrap/index.html
