let slideIndex = 0;
showSlides(slideIndex);

function showSlides() {
  let i;
  const slides = document.getElementsByClassName('slide');
  const dots = document.getElementsByClassName('dot')

  for (i = 0; i < slides.length; i++){
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace( ' active', '');
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += ' active';
  setTimeout(showSlides, 6000);
}

// $( document ).ready(function() {
//   console.log('hej');
//   const slide = $('slide');
//   console.log(slide);
//     $('.dot').click( function() {
//       $('.slide')[0].addClass('active')
//     });
// });
