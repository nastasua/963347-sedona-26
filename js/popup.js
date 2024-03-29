var btn = document.querySelector(".btn-modal");
var popup = document.querySelector(".modal-form");

var btnMinAdult = document.querySelector(".btn-min-adult");
var btnMaxAdult = document.querySelector(".btn-max-adult");
var btnMinChildren = document.querySelector(".btn-min-children");
var btnMaxChildren = document.querySelector(".btn-max-children");
var inputAdult = document.querySelector(".form-adult");
var inputChildren = document.querySelector(".form-children");
var numberAdult = + inputAdult.value;
var numberChildren = + inputChildren.value;

btn.addEventListener("click", function() {
  if ((" " + popup.className + " ").indexOf("modal-hide") > -1) {
    popup.className = "modal-form";
  } else {
    popup.className = "modal-hide";
  }
});

btnMinAdult.addEventListener("click", function() {
  if ( numberAdult > 0 ) {
    inputAdult.value = --numberAdult;
  }   
});

btnMaxAdult.addEventListener("click", function() {
  inputAdult.value = ++numberAdult;   
});

btnMinChildren.addEventListener("click", function() {
  if ( numberChildren > 0 ) {
    inputChildren.value = --numberChildren;
  }   
});

btnMaxChildren.addEventListener("click", function() {
  inputChildren.value = ++numberChildren;  
});