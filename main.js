// Grab all the images 
const sliderImages = document.querySelectorAll('img');

// Holds the scroll Event for some time 
function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
};

function checkSlide(e) {
    // Looping through every image 
    sliderImages.forEach(slideImage => {
        // half way through the image  
        const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2;
        // bottom of the image 
        const imageBottom = (slideImage.offsetTop + slideImage.height);
        // is the image half shown (boolean)
        const isHalfShown = slideInAt > slideImage.offsetTop;
        // is the image scrolled past (boolean)
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            slideImage.classList.add('active');
        } else {
            slideImage.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));