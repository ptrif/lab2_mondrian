var mybtn = document.getElementById("btn");
var modal = document.getElementsByClassName("modal")[0];
var span2 = document.getElementsByClassName("close")[0];

mybtn.onclick = function() {
  modal.style.display = "block";
}
span2.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}