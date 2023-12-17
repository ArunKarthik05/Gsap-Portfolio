TweenMax.from(".nav-left", 1, {
  opacity: 0,
  x: -40,
  ease: Expo.easeInOut,
});
TweenMax.from(".portfolio", 1.2, {
  opacity: 0,
  y: -200,
  ease: Expo.easeInOut,
  delay: 1.5,
});
TweenMax.from(".centre-line", 1.5, {
  opacity: 0,
  y: -280,
  ease: Expo.easeInOut,
  delay: 1,
});
TweenMax.from(".img-container", 2, {
  opacity: 0,
  x: -280,
  ease: Expo.easeInOut,
});
TweenMax.fromTo(
  ".welcome",
  1.2,
  {
    opacity: 0,
    x: 240,
  },
  {
    opacity: 1,
    x: 0,
    ease: Expo.easeInOut,
  }
);
TweenMax.fromTo(
  ".welcome-2",
  1.2,
  {
    opacity: 0,
    x: 240,
  },
  {
    opacity: 1,
    x: 0,
    ease: Expo.easeInOut,
    delay: 0.5,
  }
);
TweenMax.fromTo(
  ".ul",
  1,
  {
    opacity: 0,
    x: 40,
  },
  {
    opacity: 1,
    x: 0,
    ease: Expo.easeInOut,
    delay: 1.5,
  }
);
// ------------------------Scroll triggers------------------
let g1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".left",
    start: "-60% 85%",
    end: "50% 30%",
    scrub: true,
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});
g1.to(".left", {
  x: 700,
});
let g2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".right",
    start: "-75% 85%",
    end: "40% 30%",
    scrub: true,
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});
g2.to(".right", {
  x: -800,
});
// -----------image------------
// TweenMax.fromTo(
//   ".img-2",
//   1.2,
//   {
//     opacity: 0,
//   },
//   {
//     opacity: 0.8,
//     ease: Expo.easeInOut,
//     delay: 0.5,
//   }
// );
gsap.registerPlugin(ScrollTrigger);

let g3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".img-2",
    start: "70% 80%",
    end: "bottom 20%",
    scrub: false,
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});
g3.to(".img-2", {
  opacity: 0.8,
});
let g4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".iam",
    start: "70% 80%",
    end: "-100% 20%",
    scrub: true,
    markers: false,
  },
});
g4.to(".iam", {
  opacity: 0.8,
});
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
