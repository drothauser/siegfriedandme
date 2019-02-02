// Side bar menu - See https://www.w3schools.com/howto/howto_js_sidenav.asp
function openNav() {
    document.getElementById("menu").style.width = "250px";
}

function closeNav() {
    document.getElementById("menu").style.width = "0";
}

var menuHTML = ''
menuHTML += '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>'
menuHTML += '<a href="index.html">Home</a>'
menuHTML += '<a href="assertions.html">Assertions &amp; Answers</a>'
menuHTML += '<a href="performances.html">Performances</a>'
menuHTML += '<a href="contact.html">Contact</a>'
document.write(menuHTML)  
