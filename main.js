let slides = document.querySelectorAll('.slide'),
    btnRight = document.querySelector('.btn-right'),
    btnLeft = document.querySelector('.btn-left'),
    circleBtn = document.querySelectorAll('.circle');
    current = 0;

function reset(){
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circleBtn.length; i++) {
      circleBtn[i].className = circleBtn[i].className.replace(" active", "");
  }
}

function startSlide(){
  reset();
  slides[0].style.display = 'block';
  circleBtn[0].className += " " + "active";
}

autoSlide();

function autoSlide(){

  reset();
  if(current > slides.length - 1){
    current = 0;
  }
  circleBtn[current].className += " " + "active";
  slides[current].style.display = 'block';
  setTimeout(autoSlide, 8000);
  current++;
}

function slideLeft(){

  reset();
  slides[current - 1].style.display = 'block';
  circleBtn[current - 1].className += " " + "active";
  current--;
}

function slideRight(){

  reset();
  slides[current + 1].style.display = 'block';
  circleBtn[current + 1].className += " " + "active";
  current++;
}

function selectSlide(pos){

  reset();
  circleBtn[pos].className += " active";
  slides[pos].style.display = 'block';
}

btnLeft.addEventListener('click', function(){
  if(current === 0){
    current = slides.length;
  }
  slideLeft();
});

btnRight.addEventListener('click', function(){
  if(current === slides.length - 1){
    current = -1;
  }
  slideRight();
});

startSlide();
