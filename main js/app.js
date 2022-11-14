// for the images slides

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 15000); // Change image every 2 seconds
}

// for text sliding

var textIndex = 0;
theChanging();

function theChanging() {
  var i;
  var text = document.getElementsByClassName("radi-text");
//   var dots = document.getElementsByClassName("dot");
  for (i = 0; i < text.length; i++) {
    text[i].style.display = "none";  
  }
  textIndex++;
  if (textIndex > text.length) {textIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  text[textIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
  setTimeout(theChanging(), 15000); // Change image every 2 seconds
}
