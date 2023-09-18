// Abraham Evan Anil 100897257
// Animation of the star - 360 - continuously back and forth

window.onload = function() {
    // Reference the content of the object
    const theObject = document.getElementById("obj").contentDocument;

    // Reference the content of the svg file
    
    let theSeal1 = theObject.getElementById("seal1");
    let theSeal2 = theObject.getElementById("seal2");
    let theSeal3 = theObject.getElementById("seal3");

    const letterTop = theObject.getElementById("letterTop");
    const letterBg = theObject.getElementById("letterbg");
    const letter = theObject.getElementById("letter");

   

    theSeal1.style.cursor = "pointer";
    theSeal2.style.cursor = "pointer";
    theSeal3.style.cursor = "pointer";

   

    //Seal open code

    theSeal1.addEventListener("click", function() {
        gsap.to([theSeal1, theSeal2, theSeal3], {
            duration: 1,
            opacity: 0
        });
    });
    
    theSeal3.addEventListener("click", function() {
        gsap.to([theSeal1, theSeal2, theSeal3], {
            duration: 1,
            opacity: 0
        });
    });

    letterTop.addEventListener("click", function() {

        console.log("jhelo")
        

        gsap.to(letterTop, {
            scaleY: -1,             // Scale the triangle vertically by -1 to invert it
            transformOrigin: 'top', // Set the transform origin to the bottom
            duration: 1.5,           // Animation duration in seconds
            ease: 'power2.inOut'
          });
    });

    gsap.to(letter, {
        y:10,             // Scale the triangle vertically by -1 to invert it
        repeat:-1,
        yoyo:true, // Set the transform origin to the bottom
        duration: .5,           // Animation duration in seconds
        ease: 'bounce'
      });
    
  
    //setup Timeline

    let tl = gsap.timeline();

    // animation sequence
      // animate the background
      tl.to(theSeal1,
        {
            transformOrigin: 'center center',
            scale:1.07,
            repeat:-1,
            yoyo:true,
            ease:"ease",
            duration:1.5
        })

        .to(theSeal2,
            {
                transformOrigin: 'center center',
                scale:.94,
                repeat:-1,
                yoyo:true,
                ease:"easeInOut",
                duration:3
            },.4)
        .to(theSeal3,
            {
                transformOrigin: 'center center',
                scale:1.1,
                repeat:-1,
                yoyo:true,
                ease:"easeInOut",
                duration:1
            },.4)


           
  
}