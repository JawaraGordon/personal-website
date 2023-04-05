// function to add hidden class to HTML elements
const initHiddenElements = () => {
    // variable to select HTML elements - manually add fade-in-on-scroll class to divs
    const showElements = document.querySelectorAll('.fade-in-on-scroll');
  
    // variable to set root options (passed as second arg to IntersectionObserver constructor) - "MDN: 50% visibility = 0.5. Can be array [0, 0.25, 0.5, 0.75, 1. 1.0 = threshold isn't considered passed until every pixel is visible."
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    // observer Class to add/remove show class
    const observer = new IntersectionObserver((item) => {
      item.forEach((section) => {
        section.isIntersecting
          ? section.target.classList.add('show')
          : section.target.classList.remove('show');
      });
    }, options);
  
    // variable to iterate through hiddenElements
    const hiddenElements = document.querySelectorAll('.fade-in-on-scroll');
  
    // looping through hiddenElements to add hidden class
    hiddenElements.forEach((element) => {
      element.classList.add('hidden');
    });
  
    // iterate through all hidden elements with observer Class
    showElements.forEach((element) => {
      observer.observe(element);
    });
  };
  
  // debounce to delay the effect from firing on load
  function oneSecondDelay() {
    setTimeout(() => {
      initHiddenElements();
    }, 1000);
  }
  
  oneSecondDelay();