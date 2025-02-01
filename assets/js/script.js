let currentScroll = 0,
  isScrollingDown = true,
  arrows = document.querySelectorAll(".arrow img");
let tween = gsap
  .to(".marquee__part", {
    xPercent: -100,
    repeat: -1,
    duration: 5,
    ease: "linear",
  })
  .totalProgress(0.5);
gsap.set(".marquee__inner", { xPercent: -50 });

window.addEventListener("scroll", () => {
  if (window.scrollY > currentScroll) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }
  gsap.to(tween, {
    timeScale: isScrollingDown ? 1 : -1,
  });
  arrows.forEach((arr) => {
    if (isScrollingDown) {
      arr.classList.add("active");
    } else {
      arr.classList.remove("active");
    }
  });
  currentScroll = window.scrollY;
});
