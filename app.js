const box1 = document.querySelector("#box1");

box1.addEventListener("mousemove", function (details) {
  const rectloc = box1.getBoundingClientRect();
  //   const mouseloc = rectloc.clientX;

  const mouseloc = details.clientX - rectloc.left;
  if (mouseloc < rectloc.width / 2) {
    const redColor = gsap.utils.mapRange(
      0,
      rectloc.width / 2,
      255,
      0,
      mouseloc
    );

    gsap.to("#box1", {
      backgroundColor: `rgb(${redColor}, 0, 0)`,
      ease: Power4,
    });
  } else {
    const blueColor = gsap.utils.mapRange(
      rectloc.width / 2,
      rectloc.width,
      0,
      255,
      mouseloc
    );
    gsap.to("#box1", {
      backgroundColor: `rgb(0, 0, ${blueColor})`,
      ease: Power4,
    });
  }
});

box1.addEventListener("mouseleave", function () {
  gsap.to("#box1", {
    backgroundColor: `white`,
  });
});
