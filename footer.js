// Footer section - See https://www.w3schools.com/howto/howto_js_sidenav.asp

var footerHTML = ''
footerHTML += '<hr/>'
footerHTML += '<div class="footer">'
footerHTML += '<a href="index.html">Home</a> | '
footerHTML += '<a href="assertions.html">Assertions &amp; Answers</a> | '
footerHTML += '<a href="videoclips.html">Video Clips</a> | '
footerHTML += '<a href="bibliography.html">Apologetics Bibliography</a> | '
footerHTML += '<a href="performances.html">Performances</a> | '
footerHTML += '<a href="contact.html">Contact</a>'
footerHTML += '</div>'

document.write(footerHTML) 

var bibleLinks = ''
bibleLinks += '<script src="https://www.biblegateway.com/public/link-to-us/tooltips/bglinks.js" type="text/javascript"></script>'
bibleLinks += '<script type="text/javascript">'
bibleLinks += '    BGLinks.version = "ESV";'
bibleLinks += '    BGLinks.linkVerses();'
bibleLinks += '</script>'

document.write(bibleLinks) 
