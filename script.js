import arrows_obj from "./assets/js/arrows.js";
import debouncer from "./assets/js/Debouncing.js";
import GSAP_obj from "./assets/js/GSAP.js";
import progressbar_obj from "./assets/js/progressbar.js";

let currentScroll = 0,
  isScrollingDown = true,
  arrows = document.querySelectorAll(".arrow img");

let tween = GSAP_obj.marquee__part__animation();

GSAP_obj.initial_animation__marquee__inner();

const scrollDebouncing = () => {
  if (window.scrollY > currentScroll) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }

  GSAP_obj.update_marquee_anim_dir(tween, isScrollingDown);

  arrows_obj.animate_arrows(arrows, isScrollingDown);

  currentScroll = window.scrollY;
};
// Function that handles all scroll animations
const allScrollAnimations = () => {
  scrollDebouncing(); // Call your scroll debouncing logic here
  progressbar_obj.scrollProgress(); // Update the progress bar
};

// Debounced version of `allScrollAnimations` to handle scroll event
const debouncedScrollAnimations = debouncer.debounce(allScrollAnimations);

// Add the debounced function as an event listener
window.addEventListener("scroll", debouncedScrollAnimations);
