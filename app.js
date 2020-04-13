var slides = document.querySelector('.slider-items').children;
var nextSlide = document.querySelector('.right-slider');
var prevSlide = document.querySelector('.left-slider');
var totalSliders = slides.length;
var index = 0;

nextSlide.onclick=function(){
    next('next');
}

prevSlide.onclick=function(){
    next('prev');
}

function next(direction){
    if(direction=="next"){
        index++;
        if(index==totalSliders){
            index=0;
        }
    }
    else{
        if(index==0){
            index=totalSliders-1;
        }
        else{
            index--;
        }
    }
    for(i = 0; i < slides.length; i++){
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}


setInterval(next, 5000);