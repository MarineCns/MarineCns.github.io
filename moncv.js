// JavaScript source code
function displayshow(div) {
    document.getElementById('formations').style.display = "none"; 
    document.getElementById('pro').style.display = "none"; 
    document.getElementById('perso').style.display = "none"; 
    document.getElementById('contact').style.display = "none";
    document.getElementById(div).style.display = "block"; 
}