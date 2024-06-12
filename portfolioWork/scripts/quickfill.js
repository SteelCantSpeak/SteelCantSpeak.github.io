const header = document.getElementById('quickHeader');
const navbar = document.getElementById('quickNavbar');
const footer = document.getElementById('quickFooter');

//Get Current Active page
var path = window.location.pathname;
var page = path.split("/").pop();

let a = b = c = d = "";
if (page == "index.html") {
    a = `class = "active"`;
}
if (page == "folio.html") {
    b = `class = "active"`;
    fillFolio();
}
if (page == "about.html") {
    c = `class = "active"`;
}
if (page == "sample") {
    d = `class = "active"`;
}


header.innerHTML = `<a href="index.html"><img src="../images/Header.png" style="width:50%; min-width:300px;"/></a>`;


navbar.innerHTML = ` <ul>
            <li><a ${a} href="index.html">Home</a></li>
            <li><a ${b} href="folio.html">Portfolio</a></li>
            <li><a ${c} href="about.html">About</a></li>
            <li><a ${d} href="">Sample</a></li>
            <li style="float:right"><a href="https://github.com/SteelCantSpeak"><i class="fa fa-github"></i></a></li>
            <li style="float:right"><a href="https://www.linkedin.com/in/cschndr/"><i class="fa fa-linkedin"></i></a></li>
        </ul>`;

footer.innerHTML = `<p style="color:black;">Copyright 2023-2024</p>`;


function fillFolio() {

    //TODO: Fill with read Values and formatting
}