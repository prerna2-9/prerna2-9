
  AOS.init();

  particlesJS.load('particles-js', './js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });


  new hoverEffect({
    parent:document.querySelector(".distortion"),
    intensity:0.2,
    angle: 180,
    speedIn:2.5,
    speedOut:2.5,
    image1:"./images/prerna.jpg",
    image2:"./images/prerna2.jpg",
    displacementImage:"./images/stripe.jpg"
  })


      
  const images = document.querySelectorAll('.anim');

  observer = new IntersectionObserver((entries) => {

      entries.forEach(entry => {
          if(entry.intersectionRatio > 0) {
              entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
          }
          else {
              entry.target.style.animation = 'none';
          }
      })

  })

  images.forEach(image => {
      observer.observe(image)
  })


