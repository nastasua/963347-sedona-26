var btn = document.querySelector(".btn-modal");
var popup = document.querySelector(".modal-form");

var btnMinAdult = document.querySelector(".btn-min-adult");
var btnMaxAdult = document.querySelector(".btn-max-adult");
var btnMinChildren = document.querySelector(".btn-min-children");
var btnMaxChildren = document.querySelector(".btn-max-children");
var inputAdult = document.querySelector(".form-adult");
var inputChildren = document.querySelector(".form-children");

btn.addEventListener("click", function(evt) {
  if ( popup.classList.contains("modal-hide") ) {
    evt.preventDefault();
    popup.classList.remove("modal-hide");
  } else {
    popup.classList.add("modal-hide");
  }
});

btnMinAdult.addEventListener("click", function() {
  if ( inputAdult.value > 0 ) {
    inputAdult.value --;
  }   
});

btnMaxAdult.addEventListener("click", function() {
  if ( inputAdult.value >= 0 ) {
    inputAdult.value ++;
  }   
});

btnMinChildren.addEventListener("click", function() {
  if ( inputChildren.value > 0 ) {
    inputChildren.value --;
  }   
});

btnMaxChildren.addEventListener("click", function() {
  if ( inputChildren.value >= 0 ) {
    inputChildren.value ++;
  }   
});